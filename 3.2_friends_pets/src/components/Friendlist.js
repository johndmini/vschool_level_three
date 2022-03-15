import React from 'react';
import Friend from './Friend'
import data from './data.js'

export default function Friendlist() {
    const friends = data.map(friend => 
        <Friend 
        key={friend.id}
        {...friend}
        />)
        return (
            <div>
                {friends}
            </div>
        )
}