import 'semantic-ui-css/semantic.min.css';
import "../styles/main.scss";
import { h, render } from "preact";

import App from "./app";


render(<App />, document.getElementById("app"));
