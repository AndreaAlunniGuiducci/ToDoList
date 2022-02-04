import { useState, useEffect } from 'react';
import { db } from "./../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import GuestCard from "./GuestCard";

const Event = () => {
    const [eventDate, setEventDate] = useState(); //useState per data
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
        const date = new Date(eventDate);
        const diffTime = Math.abs(date - today);
        const daysUntilEvent = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(daysUntilEvent);
        return (daysUntilEvent);
    }

    return (
        <div>
            <h1>Mancano {giorniMancanti()} giorni all'evento</h1>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', justifyItems: 'center' }}>
                {guestList.map((item, index) => <GuestCard name={item.name} phone={item.phone} key={index} />)}
            </div>
        </div >
    )
}

export default Event;