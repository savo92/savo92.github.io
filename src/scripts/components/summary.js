import { h, Component } from "preact";

import profileImageUrl from "../../images/profile.jpg";

export default class Summary extends Component {

    render() {
        return (
            <div
                className="column column-50 column-offset-20 cv-section"
            >

                <div className="container">

                    <div className="row">
                        <div className="column column-40">
                            <img
                                className="rounded-image"
                                src={profileImageUrl}
                                title="Lorenzo Savini"
                            />
                        </div>
                    </div>


                    <div className="row">
                        <div className="column">
                            <h1>Hi, I'm Lorenzo Savini!</h1>
                            <h3>Full Stack Developer</h3>
                            <p><i class="fas fa-map-marker-alt"></i> Florence, Italy</p>
                            <p><i class="fas fa-birthday-cake"></i> 25</p>
                        </div>
                    </div>

                    <div className="row">
                        <a href="https://www.linkedin.com/in/lorenzosavini/">
                            <i className="fab fa-linkedin social-link-icon"></i>
                        </a>
                        <a href="https://twitter.com/Savo_92">
                            <i className="fab fa-twitter-square social-link-icon"></i>
                        </a>
                        <a href="https://github.com/savo92">
                            <i className="fab fa-github-square social-link-icon"></i>
                        </a>
                    </div>

                </div>

            </div>
        );
    }

}
