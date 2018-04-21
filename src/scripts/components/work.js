import { h, Component } from "preact";
import { renderDate, renderDelta } from "../utils";

export default class Work extends Component {

    render() {
        const work = this.props.details;

        return (
            <div className={`ui raised ${work.color} card work-block`}>

                <div className="content">

                    <img
                        className="ui avatar image"
                        src={work.company_logo_url}
                    />
                    {this.renderCompanyName(work.company, work.company_website)}

                </div>

                <div className="content">

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

        return [
            <p>{delta}</p>,
            <small>({renderDate(startDate)} - {endDateElement})</small>,
        ];
    }

}
