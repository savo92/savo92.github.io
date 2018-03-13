import moment from "moment";

export const pluralize = (counter, singular, plural) => {
    const suffix = (counter === 1) ? singular : plural;
    return `${counter} ${suffix}`;
};

export const renderDate = (dateString) => {
    return moment.utc(dateString)
        .format("MMMM YYYY");
};

export const renderDelta = (startDateString, endDateString) => {
    const startDate = moment.utc(startDateString);
    // Hidden behaviour: if endDateString is empty, Moment uses now.
    const endDate = moment.utc(endDateString);

    const years = endDate.diff(startDate, "years");
    if (years > 0) {
        const months = endDate.diff(startDate, "months") - (years * 12);
        const yearsElement = pluralize(years, "year", "years");
        const monthsElement = pluralize(months, "monht", "months");

        return `${yearsElement} and ${monthsElement}`;
    } else {
        return pluralize(
            endDate.diff(startDate, "months") || 1,
            "month",
            "months"
        );
    }
}
