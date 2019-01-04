import React from "react";
import { observer } from "mobx-react";

const Notification = observer(({ store }) => {
    return (
        <div className="notif-box">
            <img src="images/notification-icon.svg"/>
            <div className="like-count-box">{store.getLikedCountriesCount}</div>
        </div>
    );
});

export default Notification;