import { h, Component } from "preact";
import moment from "moment";

import profileImageUrl from "../../images/profile.jpg";

const BD = "1992-07-13";

export default class Summary extends Component {

    render() {
        const years = this.getMyAge();

        return (
            <div
                className="ui two column centered grid cv-section"
            >

                <div className="row">
                    <div className="ui two column centered grid">
                        <div className="row">
                            <div className="ui circular small image">
                                <img
                                    src={profileImageUrl}
                                    title="Lorenzo Savini"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column centered aligned grid">
                        <h1>Hi, I'm Lorenzo Savini!</h1>
                        <h3>Full Stack Developer</h3>
                        <p><i class="fas fa-map-marker-alt"></i> Florence, Italy</p>
                        <p><i class="fas fa-birthday-cake"></i> {years}</p>
                    </div>
                </div>

                <div className="three column row social">
                    <div className="">
                        <a href="https://github.com/savo92">
                            <i className="fab fa-github-square social-link-icon"></i>
                        </a>
                    </div>
                    <div className="">
                        <a href="https://twitter.com/Savo_92">
                            <i className="fab fa-twitter-square social-link-icon"></i>
                        </a>
                    </div>
                    <div className="">
                        <a href="https://www.linkedin.com/in/lorenzosavini/">
                            <i className="fab fa-linkedin social-link-icon"></i>
                        </a>
                    </div>
                </div>

            </div>
        );
    }

    getMyAge() {
        const bDay = moment.utc(BD);

        return moment.utc().diff(bDay, "years");
    }

}
