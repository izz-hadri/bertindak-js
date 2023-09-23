import { BkConstantService } from "./BkConstantService";

export class BkRepositoryService {
    constructor(setState) {
        this.setState = setState;
        this.domain = BkConstantService.apiDomain;
        this.controller = "Person";
        this.baseUrl = `${this.domain}/${this.controller}/`;
    }

    getUrl(action, paramObject) {
        let params = !paramObject
            ? ''
            : `?${this.getParamsFromObject(paramObject)}`;
        let url = `${this.baseUrl}${action}${params}`;

        return url;
    }

    getParamsFromObject(myObject) {
        const queryString = Object
            .keys(myObject)
            .map((key) => key + '=' + myObject[key])
            .join('&');

        return queryString;
    }

    async getProfile() {
        let paramRequest = this.getUrl('GetProfile');
        let response = await fetch(paramRequest);
        let data = await response.json();

        this.setState({
            profile: data,
            loading: false
        });
    }
}