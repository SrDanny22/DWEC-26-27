export default class TranslateService {
    async translateFromEnglishToSpanish(sentence) {
        try {
            const response = await fetch('http://192.168.0.102:11434/api/chat', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    "model": "translategemma:4b",
                    "messages": [
                        {
                            "role": "system",
                            "content": "Translate the following text from English to Spanish. Return ONLY the translation."
                        },
                        {
                            "role": "user",
                            "content": sentence
                        }
                    ],
                    "stream": false,
                    "options": {
                        "temperature": 0.1
                    }
                }),
            });
            const data = await response.json();
            return data.message.content;
        } catch (error) {
            console.log(error.message);
        }
    }
}