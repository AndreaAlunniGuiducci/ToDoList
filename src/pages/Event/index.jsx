import { useState, useEffect } from 'react';
import { db } from "./../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import GuestCard from "./GuestCard";

const Event = () => {
    const [eventDate, setEventDate] = useState();
    const [guestList, setGuestList] = useState([]); // useState per array contenente gli oggetti


    useEffect(() => {
        const getDataGuest = async () => {
            onSnapshot(collection(db, "guest"),
                (collection) => {
                    const currentGuest = collection.docs.map((doc) => {
                        const guest = {
                            id: doc.id,
                            ...doc.data()
                        };
                        return guest;
                    });
                    setGuestList(currentGuest);
                })
        };
        const getDataDate = async () => {
            onSnapshot(collection(db, "eventDate"),
                (collection) => {
                    const currentDate = collection.docs.map((doc) => {
                        const date = {
                            id: doc.id,
                            ...doc.data()
                        };
                        return date;
                    });
                    setEventDate(currentDate[0].date);
                })
        };
        getDataDate();
        getDataGuest();
    }, []);

    const giorniMancanti = () => {
        const today = new Date();
        const eventDate1 = new Date(eventDate);
        const diffTime = Math.abs(eventDate1 - today);
        const daysUntilEvent = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(daysUntilEvent);
        return (daysUntilEvent);
    }

    return (
        <div>
            <h1>Mancano {giorniMancanti()} giorni all'evento</h1>
            {guestList.map((item, index) => <GuestCard name={item.name} phone={item.phone} key={index} />)}
        </div>
    )
}

export default Event;