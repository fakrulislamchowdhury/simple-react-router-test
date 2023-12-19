import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [friendId]);

    const handleAllFriend = () => {
        history.push('/friends');
    }

    return (
        <div>
            <h2>Friend Details of: {friendId}</h2>
            <h3>{friend.name}</h3>
            <h5>{friend.phone}</h5>
            <h5>{friend.website}</h5>
            <h5>{friend.address?.city}</h5>
            <button onClick={handleAllFriend}>See All Friends</button>
        </div >
    );
};

export default FriendDetails;