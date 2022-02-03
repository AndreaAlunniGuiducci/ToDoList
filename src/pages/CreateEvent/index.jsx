import { useState } from 'react';
import { db } from "./../../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import DateForm from './DateForm';
import GuestForm from './GuestForm';

const CreateEvent = () => {
    const [date, setDate] = useState();//useState per input date
    const [guestName, setGuestName] = useState(''); // useState per input name
    const [guestPhone, setGuestPhone] = useState(''); // useState per input phone

    //funzione per inserire dati nel db
    const SubmitDate = (e) => {
        e.preventDefault();
        const newDate = { date: date };
        console.log(newDate);
        setDoc(doc(db, "eventDate", 'date'), newDate);
    }
    const SubmitGuest = (e) => {
        e.preventDefault();
        const newGuest = { name: guestName, phone: guestPhone };
        console.log(newGuest);
        addDoc(collection(db, "guest"), newGuest);
    }

    return (
        <div>
            <DateForm date={setDate} formBtn={SubmitDate} />
            <GuestForm guestname={setGuestName} guestphone={setGuestPhone} formBtn={SubmitGuest} />
        </div>
    )
}

export default CreateEvent;
