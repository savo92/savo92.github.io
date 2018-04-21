import { fetchy } from "../../../node_modules/fetchy-js/_bundles/fetchy-js";
import { h, Component } from "preact";
import toml from "toml";

import Work from "../components/work";

import worksFileUrl from "../../../data/works.toml";

export default class Works extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingStatus: "",
            works: [],
        };

    }

    componentDidMount() {
        this.loadWorks();
    }

    render() {
        return (
            <div className="ui two column centered grid cv-section">
                {this.renderContent()}
            </div>
        );
    }

    renderContent() {
        switch (this.state.loadingStatus) {
            case "ready":
                return <div className="ui stackable cards">{this.renderWorksList()}</div>;
                break;

            case "error":
                return <span>Cipolle</span>;
                break;

            default:
                return <span>Loading...</span>;
                break;
        }
    }

    renderWorksList() {
        const workList = this.state.works;
        if (workList.length === 0) {
            return <span>Nothing to see here</span>;
        }

        return workList.map((work) => <Work details={work}/>);
    }

    loadWorks() {
        this.setState(
            { loadingStatus: "loading" },
            () => {
                this.downloadFile(worksFileUrl)
                    .then((worksFileRawContent) => {
                        const worksFileContent = this.parseToml(worksFileRawContent);
                        this.setState({ loadingStatus: "ready", works: worksFileContent.works });
                    })
                    .catch(() => this.setState({ loadingStatus: "error" }));
            }
        );
    }

    downloadFile(fileUrl) {
        return fetchy(fileUrl, {}, { retry: true })
            .then((result) => result.text());
    }

    parseToml(worksFileContent) {
        return toml.parse(worksFileContent);
    }

}
