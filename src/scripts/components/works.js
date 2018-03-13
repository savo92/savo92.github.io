import { fetchy } from "../../../node_modules/fetchy-js/_bundles/fetchy-js";
import { h, Component } from "preact";
import toml from "toml";

import { renderDate, renderDelta } from "../utils";

import worksFileUrl from "../../../data/works.toml";

export default class Works extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingStatus: "",
            works: [],
        };

        this.renderWork = this.renderWork.bind(this);
    }

    componentDidMount() {
        this.loadWorks();
    }

    render() {
        return (
            <div
                className="column column-50 column-offset-20 cv-section"
            >

                {this.renderContent()}

            </div>
        );
    }

    renderContent() {
        switch (this.state.loadingStatus) {
            case "ready":
                return <div>{this.renderWorksList()}</div>;
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

        return workList.map(this.renderWork);
    }

    renderWork(work) {
        return (
            <div className="row work-block">

                <div className="column">
                    {this.renderCompanyName(work.company, work.company_website)}

                    <h4>{work.title}</h4>

                    {this.renderDateRange(work.start_date, work.end_date)}
                </div>

            </div>
        );
    }

    renderCompanyName(title, titleUrl) {
        const titleElement = <h3>{title}</h3>;

        if (titleUrl) {
            return <a href={titleUrl}>{titleElement}</a>;
        }
        return titleElement
    }

    renderDateRange(startDate, endDate) {
        const endDateElement = endDate ? renderDate(endDate) : <span>Now</span>;
        const delta = renderDelta(startDate, endDate);

        return <p>{delta} ({renderDate(startDate)} - {endDateElement})</p>;
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
