import { h, Component } from "preact";

import Summary from "./components/summary";
import Works from "./components/works";

export default class App extends Component {

    render() {
        return (
            <div class="container">
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
