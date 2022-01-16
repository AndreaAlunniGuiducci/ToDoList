import { useState, useEffect } from 'react';

const CreateGuest = () => {
    const [guestName, setGuestName] = useState(''); // useState per input name
    const [guestPhone, setGuestPhone] = useState(''); // useState per input phone
    const [guestObj, setGuestObj] = useState({}); // useState per risultato oggetto dato dagli input
    const [guestList, setGuestList] = useState([]); // useState per array contenente gli oggetti

    const addGuestBtn = (e) => { // funzione di submit che ritorna una chiamata post al nostro API
        e.preventDefault();
        fetch('https://edgemony-backend.herokuapp.com/friends', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(guestObj)
        })
            .then((response) => response.json())
    }

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

    return (
        <div>
            <p>Crea una lista degli invitati completando il nostro form</p>
            <form>
                <label>Nome invitato</label>
                <input
                    type="text"
                    name="guest-name"
                    id="guest-name"
                    placeholder="Nome"
                    onChange={(e) => setGuestName(e.target.value)}
                    required>
                </input>

                <label>Numero di telefono</label>
                <input
                    type="phone"
                    name="guest-phone"
                    id="guest-phone"
                    placeholder="+39"
                    onChange={(e) => setGuestPhone(e.target.value)}
                    required></input>
                <button onClick={addGuestBtn}>Aggiungi invitato</button>
            </form>

            <ul>
                {guestList.map((item, index) => <li key={index}><p>{item.name} - {item.phone}</p></li>)}
            </ul>
        </div>
    )
};

export default CreateGuest;