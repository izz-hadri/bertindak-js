export class BkRepositoryService {
    constructor(setState) {
        this.setState = setState;
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}