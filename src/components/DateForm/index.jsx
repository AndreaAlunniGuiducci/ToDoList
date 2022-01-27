import { useState, useEffect } from "react";

const Form = () => {
    const [data, setData] = useState();
    const [daysUntilEvent, setDaysUntilEvent] = useState();

    useEffect(() => {
        const today = new Date();
        const eventDate = new Date(data);
        const diffTime = Math.abs(eventDate - today);
        const daysUntilEvent = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        setData(data);
        setDaysUntilEvent(daysUntilEvent);
    }, [data, daysUntilEvent])

    const mostradata = (e) => {
        e.preventDefault();
        //chiamta fetch POST che inserisce la data nell'oggetto Evento
    }

    return (
        <div>
            <form>
                <label>Data evento</label>
                <input
                    type="date"
                    name="data"
                    id="data"
                    onChange={(e) => setData(e.target.value)}
                    required />
                <button onClick={mostradata}>specifica data</button>
            </form>
            <p>mancano {daysUntilEvent} giorni all'evento</p>
        </div>
    )
}

export default Form;