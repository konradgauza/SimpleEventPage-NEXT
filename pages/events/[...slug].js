import {useRouter} from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

const FilteredEventsPage = () => {
    const router = useRouter();
    const filteredData = router.query.slug;

    if(!filteredData) {
        return <p className={'center'}>Loading...</p>
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <p className={'center'}> Invalid values! Please type proper year and month </p>
    }

    const events = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if(!events || events.length === 0) {
        return <p>No events found for the chosen date!</p>
    }

    return (
        <div>
            <EventList items={events} />
        </div>
    )
}

export default FilteredEventsPage;