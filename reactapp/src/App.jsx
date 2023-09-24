import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { Component } from 'react';
import { BkRepositoryService } from './services/BkRepositoryService';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            achievements: [],
            experiences: [],
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

        setTimeout(
            () => {
                let section = document.getElementById('achievement');
                section.scrollIntoView({ behavior: 'smooth' });
            },
            100);
    }

    onExperienceClicked() {
        this.state.loading = true;
        this.repositoryService.getExperiences();

        setTimeout(
            () => {
                let section = document.getElementById('experience');
                section.scrollIntoView({ behavior: 'smooth' });
            },
            100);
    }

    onAccordionClicked(index) {
        setTimeout(
            () => {
                let section = document.getElementById(`exp-${index}`);
                section.scrollIntoView({ behavior: 'smooth' });
            },
            100);
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
                            <button type="button" className="btn btn-outline-light btn-md px-4 shadow m-1" onClick={this.onExperienceClicked.bind(this)}>
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
                    <h1 className="text-center m-3">Achievements</h1>
                    <div className="row mb-5">
                        {achievements.map((achievement, index) => (
                            <div className="col-lg-3 p-3" key={index}>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title p-2 text-center">{achievement.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted text-center">{achievement.description}</h6>
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

    renderExperiences(experiences) {
        if (!experiences || experiences.length == 0) {
            return (
                <></>
            );
        }
        else {
            return (
                <>
                    <h1 className="text-center m-3">Experiences</h1>
                    <div className="accordion shadow mb-5">
                        {experiences.map((exp, index) => {
                            return (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header shadow-sm">
                                        <button className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={"#exp-" + index}
                                            aria-expanded="false"
                                            aria-controls={"exp-" + index}
                                            onClick={this.onAccordionClicked.bind(this, index)}>
                                            {exp.title}
                                            {exp.keywords.map((keyword, i) => (
                                                <span key={i} className="badge rounded-pill bg-danger m-1">{keyword}</span>
                                            ))}
                                        </button>
                                    </h2>
                                    <div id={"exp-" + index}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={"#expHead-" + index}
                                        data-bs-parent={"#expAccordion-" + index} >
                                        <div className="accordion-body">
                                            <ul>
                                                {exp.notes.map((note, index) => (
                                                    <li key={index}>
                                                        <small>{note}</small>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
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

        let achievements = this.renderAchivement(this.state.achievements);

        let experiences = this.renderExperiences(this.state.experiences);

        return (
            <>
                <div id="profile" className="container-fluid text-center bg-info shadow-lg">
                    {profile}
                </div>
                <div id="achievement" className="container">
                    {achievements}
                </div>
                <div id="experience" className="container">
                    {experiences}
                </div>
            </>
        );
    }
}
