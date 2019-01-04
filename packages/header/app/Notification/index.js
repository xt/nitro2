import React from "react";

const Notification = (props) => {
    const store = props.store;
    return (
        <div className="notif-box">
            <img src="images/notification-icon.svg"/>
            <div className="like-count-box">${store.likedCountriesCount}</div>
        </div>
    );
}

export default Notification;