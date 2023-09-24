import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BkRepositoryService } from './services/BkRepositoryService';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            achievements: [],
            loading: true
        };
        this.repositoryService = new BkRepositoryService(this.setState.bind(this));
    }

    componentDidMount() {
        this.repositoryService.getProfile();
    }

    onAchievementClicked() {
        this.state.loading = true;
        this.repositoryService.getAchievements();
    }

    renderProfile(profile) {
        return (
            <div className="row mb-5">
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-3 fw-bold text-body-emphasis">{profile.name}</h1>
                    <h3 className="display-6 fw-bold text-body-emphasis">{profile.position}</h3>
                    <div className="mx-auto">
                        <h5 className="mb-4">
                            {profile.description}
                        </h5>
                        <div className="row p-2 justify-content-sm-center">
                            {profile.otherLinks.map((link, index) => (
                                <div className="col-lg-1 col-md-2 col-sm-2" key={index}>
                                    <a type="button"
                                       className="btn btn-warning badge rounded-pill text-dark"
                                       href={link.url}
                                       target="_blank">
                                        {link.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="text-center p-4 bg-info">
                            <button type="button" className="btn btn-light btn-md px-4 gap-3 shadow m-1" onClick={this.onAchievementClicked.bind(this)}>
                                Achivements
                            </button>
                            <button type="button" className="btn btn-outline-light btn-md px-4 shadow m-1">
                                Experiences
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderAchivement(achievements) {
        if (!achievements || achievements.length == 0) {
            return (
                <></>
            );
        }
        else {
            return (
                <>
                    <div className="row mb-5">
                        {achievements.map((achievement, index) => (
                            <div className="col-lg-3 p-3" key={index}>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title p-2 text-center">{achievement.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted  text-center">{achievement.description}</h6>
                                        <ul>
                                            {achievement.listNotes.map((note, index) => (
                                                <li key={index}>
                                                    <small>{note}</small>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            );
        }
    }

    render() {
        let kejapEa = (
            <div className="p-3">
                <span className="display-6">Kejap ea </span><span className="spinner-border" role="status"></span>
            </div>
        );

        let profile = this.state.loading
            ? kejapEa
            : this.renderProfile(this.state.profile);

        let achievements = this.state.loading
            ? kejapEa
            : this.renderAchivement(this.state.achievements);

        return (
            <>
                <div className="container-fluid text-center bg-info shadow-lg">
                    {profile}
                </div>
                <div className="container">
                    {achievements}
                </div>
            </>
        );
    }
}
