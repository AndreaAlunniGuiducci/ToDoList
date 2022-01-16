const GuestForm = (props) => {
    const guestName = props.guestname || 'Guest';
    const guestPhone = props.guestphone || 'Phone';
    const formBtn = props.formBtn || '';

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
                    onChange={(e) => guestName(e.target.value)}
                    required>
                </input>

                <label>Numero di telefono</label>
                <input
                    type="phone"
                    name="guest-phone"
                    id="guest-phone"
                    placeholder="+39"
                    onChange={(e) => guestPhone(e.target.value)}
                    required></input>
                <button onClick={formBtn}>Aggiungi invitato</button>
            </form>
        </div>)
}

export default GuestForm;