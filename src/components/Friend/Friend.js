import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const history = useHistory();

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div>
            <Card className='border border-2 border-warning'>
                <Card.Body>
                    <Card.Title>I am {name}</Card.Title>
                    <Card.Text>
                        <h5>Call me: {phone}</h5>
                        <p>Visit me: {website}</p>
                        <p>Live in: {address?.city}</p>
                        <small>ID: {id}</small>
                        <br />
                        <Link to={`/friend/${id}`}>Visit Me</Link>
                        <br />
                        <Link to={`/friend/${id}`}><button className='border border-2 border-light'>Visit Me</button></Link>
                        <br />
                        <button onClick={handleFriendClick} className='border border-2 border-warning'>Visit Me</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
}

export default Friend;            