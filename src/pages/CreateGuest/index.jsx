import { useState, useEffect } from 'react';
import { lazy } from "react";

const GuestForm = lazy(() => import(/*webpackChunkName: "GuestForm"*/ './../../components/GuestForm'));
const GuestCard = lazy(() => import(/*webpackChunkName: "GuestCard"*/ './../../components/GuestCard'));


const CreateGuest = () => {
    const [guestName, setGuestName] = useState(''); // useState per input name
    const [guestPhone, setGuestPhone] = useState(''); // useState per input phone
    const [guestObj, setGuestObj] = useState({}); // useState per risultato oggetto dato dagli input
    const [guestList, setGuestList] = useState([]); // useState per array contenente gli oggetti


    useEffect(() => { // useEffect per popolare l'array
        fetch('https://edgemony-backend.herokuapp.com/friends')
            .then((response) => response.json())
            .then(data => setGuestList(data));
    }, [guestList]);


    useEffect(() => { // useEffect per popolare l'oggetto
        setGuestObj({
            name: guestName,
            phone: guestPhone,
        });
    }, [guestName, guestPhone]);

    const addGuestBtn = (e) => { // funzione di submit che ritorna una chiamata post al nostro API
        e.preventDefault();
        fetch('https://edgemony-backend.herokuapp.com/friends', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(guestObj)
        })
            .then((response) => response.json())
    }

    return (
        <div>
            <GuestForm guestName={setGuestName} guestPhone={setGuestPhone} formBtn={addGuestBtn} />

            <ul>
                {guestList.map((item, index) => <li key={index}> <GuestCard name={item.name} /> </li>)}
            </ul>
        </div>
    )
};

export default CreateGuest;