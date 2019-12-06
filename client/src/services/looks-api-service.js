export default class LooksApiService {
    
    _apiBase = 'http://10.7.244.84:3000/api';
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllGarments() {
        return await this.getResource(`/garments/list`);
    }
    
    getGarment(id) {
        return this.getResource(`/garments/${id}/`);
    }
}
