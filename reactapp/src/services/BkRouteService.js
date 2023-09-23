import { BkRoute } from "../models/BkRoute";

export class BkRouteService {
    constructor() {
        this.routes = this.setRoutes();
    }

    setRoutes() {
        return [
            new BkRoute("home", "/home", null)
        ];
    }

    getRoutes() {
        return this.routes;
    }
}