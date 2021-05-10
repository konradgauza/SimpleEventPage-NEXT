import {useRouter} from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

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
        return (
            <>
                <ErrorAlert>
                    <p> Invalid values! Please type proper year and month </p>
                </ErrorAlert>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button link={'/events'}> Show all events </Button>
                </div>
            </>
        )
    }

    const events = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if(!events || events.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen date!</p>
                </ErrorAlert>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button link={'/events'}> Show all events </Button>
                </div>
            </>
        )
    }

    const date = new Date(numYear, numMonth - 1)

    return (
        <>
            <ResultsTitle date={date}/>
            <EventList items={events} />
        </>
    )
}

export default FilteredEventsPage;