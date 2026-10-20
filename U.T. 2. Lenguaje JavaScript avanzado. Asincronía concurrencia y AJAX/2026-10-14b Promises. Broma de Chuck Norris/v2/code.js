await translateFromEnglishToSpanish(await retrieveAndShowJoke());

async function retrieveAndShowJoke() {
    const endpoint = 'https://api.chucknorris.io/jokes/random';

    const response = await fetch(endpoint);
    const data = await response.json()

    const joke = data.value;

    return joke;
}

async function translateFromEnglishToSpanish(sentenceInEnglish) {

    const endpoint = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=' + sentenceInEnglish;

    const response = await fetch(endpoint);
    const data = await response.json();

    const jokeTransalte = data[0][0][0];

    document.getElementById('tParJoke').textContent = jokeTransalte;
}