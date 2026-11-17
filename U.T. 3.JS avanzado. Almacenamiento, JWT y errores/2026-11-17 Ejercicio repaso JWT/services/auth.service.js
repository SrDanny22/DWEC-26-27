export class AuthorizationService {
    async validateUserAndPassword(username, password) {
        // POST
        const url = 'https://dummyjson.com/auth/login?delay=1000';

        let response;
        try {
            response = await fetch(url, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot validate user: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        return data.accessToken;
    }

    async retrieveCategories(token) {
        // GET

        const url = 'https://dummyjson.com/auth/products/categories';

        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`Cannot retrieve series: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot retrieve series: ${error}`);
        }

        return data;
    }
}