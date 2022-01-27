import { useState, useEffect } from 'react';
import { lazy } from "react";
import { db } from "./../../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const GuestForm = lazy(() => import(/*webpackChunkName: "GuestForm"*/ './../../components/GuestForm'));
const GuestCard = lazy(() => import(/*webpackChunkName: "GuestCard"*/ './../../components/GuestCard'));


const CreateGuest = () => {
    const [guestName, setGuestName] = useState(''); // useState per input name
    const [guestPhone, setGuestPhone] = useState(''); // useState per input phone
    const [guestObj, setGuestObj] = useState({}); // useState per risultato oggetto dato dagli input
    const [guestList, setGuestList] = useState([]); // useState per array contenente gli oggetti

    // useEffect per renderizzare i dati del db
    useEffect(() => {
        const getData = async () => {
            onSnapshot(collection(db, "Guest"),
                (collection) => {
                    const currentGuest = collection.docs.map((doc) => {
                        const guest = {
                            id: doc.id,
                            ...doc.data()
                        };
                        console.log(guest);
                        return guest;
                    });
                    setGuestList(currentGuest);
                })
        };
        getData();
    }, []);

    //funzione per inserire dati ne db
    const handleSubmit = (e) => {
        e.preventDefault();
        const newGuest = { name: '', phone: '' };
        console.log(newGuest);
        addDoc(collection(db, "Guest"), newGuest);
    }

    const addGuestBtn = (e) => { // funzione di submit che ritorna una chiamata post al nostro API
        e.preventDefault();
        fetch('https://my-json-server.typicode.com/AndreaAlunniGuiducci/ProvaDb/guests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(guestObj)
        })
            .then((response) => response.json())
    }

    return (
        <div>
            <GuestForm guestname={setGuestName} guestphone={setGuestPhone} formBtn={handleSubmit} />

            <ul>
                {guestList.map((item, index) => <li key={index}> <GuestCard name={item.name} phone={item.phone} /> </li>)}
            </ul>
        </div>
    )
};

export default CreateGuest;