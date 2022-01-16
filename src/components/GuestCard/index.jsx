const GuestCard = (props) => {
    const name = props.name || 'name';

    return (
        <div>
            <div>
                <h3>{name}</h3>
                <a><img src="https://img.icons8.com/ios/50/000000/circled-v.png" /></a>
                <a><img src="https://img.icons8.com/ios/50/000000/xbox-x.png" /></a>
            </div>
        </div>
    )
}

export default GuestCard;