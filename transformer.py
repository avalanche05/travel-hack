from openai import OpenAI
from categories import (
    BASE_USER_PROMPT,
    BASE_CHAT_PROMPT,
    BASE_EVENT_PROMPT,
    OUTPUT_PROMPT
    )


API_KEY = "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"


class TransformerModel:
    def __init__(self,
                 model: str = "gpt-3.5-turbo") -> None:
        self.client = OpenAI(
            api_key=API_KEY
        )
        self.model = model
    
    def predict_chat(self, message_prompt: str) -> str:
        chat_completion = self.client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": BASE_CHAT_PROMPT
                               + "\n"
                               + message_prompt
                }
            ],
            model=self.model
        )

        return chat_completion.choices[0].message.content
    
    def predict_description_to_buy(self,
                                   user_info: str,
                                   event_info: str) -> str:
        chat_completion = self.client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": BASE_USER_PROMPT
                               + "\n"
                               + user_info
                               + "\n"
                               + BASE_EVENT_PROMPT
                               + "\n"
                               + event_info
                               + "\n"
                               + OUTPUT_PROMPT
                }
            ],
            model=self.model
        )

        return chat_completion.choices[0].message.content


if __name__ == "__main__":
    model = TransformerModel()

    print(model.predict_chat("привет что ты можешь посоветовать насчет страховки на билет в музей Булгакова на 14 апреля?"))
    print()
    print(model.predict_chat("привет можешь ли ты написать код обхода графа в ширину"))
    print()
    print(model.predict_description_to_buy("30 лет мужчина, два малолетних ребенка, отличные показатели здоровья",
                                           "прогулка на свежем воздухе вдали от города по усадьбе"))