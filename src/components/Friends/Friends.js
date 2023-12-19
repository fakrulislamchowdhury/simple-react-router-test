import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import { Row } from 'react-bootstrap';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return (
        <div>
            <h2>I have friends: {friends.length}</h2>
            <Row xs={2} md={3} className="g-4 m-auto p-4 ">
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </Row>

        </div >
    );
};

export default Friends;