import { h, Component } from "preact";

import Summary from "./components/summary";

export default class App extends Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <Summary />
                </div>
            </div>
        );
    }

}
