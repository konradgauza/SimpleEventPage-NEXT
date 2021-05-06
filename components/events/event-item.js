import Link from "next/link";
import styles from './event-item.module.css'
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
    const { event } = props;
    const humanReadableDate = new Date(event.date).toLocaleDateString('pl', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = event.location.replace(',', '\n')

    const exploreLink = `/events/${event.id}`

    return (
        <li className={styles.item}>
            <img src={event.image} alt="event cover"/>
            <div className={styles.content}>
                <div>
                    <h2>{event.title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;