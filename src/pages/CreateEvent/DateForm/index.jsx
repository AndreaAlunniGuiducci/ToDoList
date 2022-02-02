const Form = (props) => {
    const date = props.date || new Date();
    const formBtn = props.formBtn || '';

    return (
        <div>
            <form>
                <label>Data evento</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(e) => date(e.target.value)}
                    required />
                <button onClick={formBtn}>specifica data</button>
            </form>
        </div>
    )
}

export default Form;