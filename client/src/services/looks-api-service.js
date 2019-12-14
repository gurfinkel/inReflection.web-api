export default class LooksApiService {
    
    _apiBase = 'http://35.223.42.69:3000/api';
    
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
    
    async getGarment(id) {
        return await this.getResource(`/garments/${id}/`);
    }
    
    async getAllRacks() {
        return await this.getResource(`/racks/list`);
    }
    
    async getRack(id) {
        return await this.getResource(`/racks/${id}/`);
    }
    
    async getAllLooks() {
        return await this.getResource(`/looks/list`);
    }
    
    async getLook(id) {
        return await this.getResource(`/looks/${id}/`);
    }
    
    async getAllOccasions() {
        return await this.getResource(`/occasions/list`);
    }
    
    async getOccasion(id) {
        return await this.getResource(`/occasions/${id}/`);
    }
}
