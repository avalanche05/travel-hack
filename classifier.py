from typing import Union, List
import os
import string

import numpy as np
import torch
import clip

from categories import categories_lists, categories


class CategoryClassifier:
    russian_alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"

    def __init__(self,
                 model_name: str = 'ViT-B/32',
                 device: str = "cpu") -> None:
        self.device = device

        self.model, self.preprocess = clip.load(model_name,
                                                device=device)
        self.model.eval()
        self.logit_scale = self.model.logit_scale.exp()

        # self.categories = np.array(categories_lists)
        self.categories = np.array(categories)
        self.categories_tokens = clip.tokenize(categories_lists).to(self.device)

        with torch.no_grad():
            self.categories_features = self.model.encode_text(self.categories_tokens).float()
            self.categories_features /= self.categories_features.norm(dim=-1, keepdim=True)

    @staticmethod
    def remove_digits(s: str) -> str:
        return ''.join([i for i in s if not i.isdigit()])
    
    @staticmethod
    def remove_punctuation(s: str) -> str:
        return s.translate(str.maketrans('', '', string.punctuation))
    
    def preprocess_txt(self, txt: str) -> str:
        txt = self.remove_digits(txt.lower())
        txt = self.remove_punctuation(txt)
        txt = ''.join([i for i in txt if i in self.russian_alphabet])

        return txt
    
    def classify_text(self, text: Union[str, List[str]]) -> Union[str, List[str]]:
        '''
            подавайте описание мероприятия (или список описаний нескольких) ->
            на выход получаете список из категорий на каждое мероприятие

            Если подаете просто строку (описание для одного мероприятия), то на
            выход вы тоже получите одну строку категории (не список)
        '''
        input_text = text
        if not isinstance(text, list):
            input_text = [text]
        
        input_text = [self.preprocess_txt(t) for t in input_text]
        
        text_tokens = clip.tokenize(input_text, truncate=True).to(self.device)

        with torch.no_grad():
            text_features = self.model.encode_text(text_tokens)
            text_features /= text_features.norm(dim=-1, keepdim=True)

            # cosine similarity
            # logits_per_image = self.logit_scale * self.censor_img_features @ text_features.T
            # logits_per_category = self.categories_features @ text_features.T
            
            # logits_per_category = text_features @ self.categories_features.T
            logits_per_category = self.logit_scale * text_features @ self.categories_features.T
        
        similarity = (100.0 * logits_per_category).softmax(dim=-1)
        indexes = similarity.argmax(dim=-1).numpy()
        
        v, i = similarity.topk(5)
        print(i)

        if len(indexes) == 1:
            return self.categories[indexes[0]]
        
        return self.categories[indexes].tolist()



if __name__ == "__main__":
    model = CategoryClassifier()

    long_text = "В XV столетии на территории современного парка великие князья собирались на соколиную охоту. В XVII веке царь Петр I устраивал здесь шумные первомайские пиры для своих приятелей-иноземцев и мастеров-ремесленников. Во второй половине XIX века Сокольники стали модным дачным местом. А в 1931 году здесь был основан парк нового советского типа, в котором даже находился филиал Ленинской библиотеки. Сегодня в «Сокольниках» цветет сирень, благоухают розы, плавают лебеди. Прогуляйтесь по одному из главных парков столицы и загадайте желание в Денежном саду."
    short_text = "Музей Булгакова в Москве — не совсем обычное собрание личных вещей писателя. Это мистическое место, где стираются грани между настоящим и прошлым, реальностью и творческим вымыслом. В бывшей коммунальной квартире «оживают» персонажи и сюжеты автора. Вы не заметите, как из советского быта, с его массивной мебелью, тихо поскрипывающим паркетом и громкими газетными заголовками, перенесетесь в мир загадок и тайн, где правят неведомые и могущественные силы. Темные они или светлые — решать вам!"
    normal_text = "Добро пожаловать в летний загородный увеселительный дом одного из богатейших вельмож России — графа Петра Борисовича Шереметева! Ансамбль усадьбы сложился в 1750-1770 годах. В «русском Версале» вас ждут музеи, концерты классической музыки в оранжерее, прогулки по регулярному парку и катание на лодках. И, конечно же, на фоне местной красоты получаются отличные фотографии."

    normal_text = normal_text.translate(str.maketrans('', '', string.punctuation))

    print(model.classify_text([
        long_text, short_text, normal_text
    ]))