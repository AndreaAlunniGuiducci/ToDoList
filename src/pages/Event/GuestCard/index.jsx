import { Card } from 'react-bootstrap';

const GuestCard = (props) => {
    const name = props.name || 'name';
    const phone = props.phone || 'phone';

    return (
        <Card style={{ width: '150px' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{phone}</Card.Subtitle>
                <Card.Link href="#"><img src="https://img.icons8.com/ios/50/000000/circled-v.png" alt='confermato' /></Card.Link>
                <Card.Link href="#"><img src="https://img.icons8.com/ios/50/000000/xbox-x.png" alt='rifiutato' /></Card.Link>
            </Card.Body>
        </Card>
    )
}

export default GuestCard;

/*
<div>
            <div>
                <h3>{name}</h3>
                <p>{phone}</p>
                <img src="https://img.icons8.com/ios/50/000000/circled-v.png" alt='confermato' />
                <img src="https://img.icons8.com/ios/50/000000/xbox-x.png" alt='rifiutato' />
            </div>
        </div>
        */