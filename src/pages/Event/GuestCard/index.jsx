const GuestCard = (props) => {
    const name = props.name || 'name';
    const phone = props.phone || 'phone';

    return (
        <div>
            <div>
                <h3>{name}</h3>
                <p>{phone}</p>
                <a><img src="https://img.icons8.com/ios/50/000000/circled-v.png" /></a>
                <a><img src="https://img.icons8.com/ios/50/000000/xbox-x.png" /></a>
            </div>
        </div>
    )
}

export default GuestCard;