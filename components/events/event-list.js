import EventItem from "./event-item";
import styles from './event-list.module.css'

const EventList = (props) => {
    const { items } = props;

    return (
        <ul className={styles.list}>
            {items.map(event => (
                <EventItem event={event} key={event.id}/>
            ))}
        </ul>
    )
}

export default EventList;
