await retrieveAndShowJoke();

async function retrieveAndShowJoke() {
    const endpoint = 'https://api.chucknorris.io/jokes/random';

    const response = await fetch(endpoint);
    const data = await response.json()

    const joke = data.value;

    document.getElementById('tParJoke').textContent = joke;
}