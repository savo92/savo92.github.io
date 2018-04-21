import { h, Component } from "preact";

import Summary from "./sections/summary";
import Works from "./sections/works";

export default class App extends Component {

    render() {
        return (
            <div class="ui vertically divided grid">
                <div class="row">
                    <Summary />
                </div>
                <div class="row">
                    <Works />
                </div>
            </div>
        );
    }

}
