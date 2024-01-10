/* eslint-disable prettier/prettier */
import EventListItem from "./eventListItem";


export default function EventList(){
    return( <ul className="p-4">
        <h2 className="text-lg mb-4">02 de Janeiro</h2>
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
    </ul>)
}