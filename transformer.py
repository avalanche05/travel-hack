from openai import OpenAI


API_KEY = ""


class ChatBot:
    def __init__(self,
                 model: str = "gpt-3.5-turbo") -> None:
        self.client = OpenAI(
            api_key=API_KEY
        )
        self.model = model
        self.base_prompt = ""
    
    def predict(self, message_prompt: str) -> str:
        chat_completion = self.client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": self.base_prompt + "\n" + message_prompt
                }
            ],
            model=self.model
        )

        return chat_completion.choices[0].message.content


class Recommender:
    def __init__(self) -> None:
        pass

    def predict(self,) -> str:
        pass