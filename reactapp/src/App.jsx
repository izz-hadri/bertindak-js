import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BkRepositoryService } from './services/BkRepositoryService';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
        this.repositoryService = new BkRepositoryService(this.setState.bind(this));
    }

    componentDidMount() {
        this.repositoryService.getProfile();
    }

    static renderProfile(profile) {
        return (
            <div className="row">
                <div class="px-4 py-5 my-5 text-center">
                    <h1 class="display-5 fw-bold text-body-emphasis">Welcome</h1>
                    <h2 class="display-5 fw-bold text-body-emphasis">{profile.name}</h2>
                    <div class="col-lg-6 mx-auto">
                        <h5 class="mb-4">
                            {profile.description}
                        </h5>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" class="btn btn-light btn-lg px-4 gap-3">Achivements</button>
                            <button type="button" class="btn btn-outline-light btn-lg px-4">Experiences</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let profile = this.state.loading
            ? <p>Jap ea..</p>
            : App.renderProfile(this.state.profile);

        return (
            <div className="container-fluid text-center bg-danger shadow-lg">
                { profile }
            </div>
        );
    }
}
