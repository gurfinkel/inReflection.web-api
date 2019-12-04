export default class LooksApiService {
    
    _apiBase = 'http://localhost:3000/api';
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }

        return await res.json();
    }

    async getApiHealthStatus() {
        const res = await this.getResource(`/health`);

        return res.results;
    }

    async getAllGarments() {
        const res = await this.getResource(`/garments/list`);

        return res.results;
    }
    
    getGarment(id) {
        return this.getResource(`/garments/${id}/`);
    }
}
