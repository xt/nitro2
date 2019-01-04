import React from "react";
import store from "../store/store";
import headerStore from "../../../header/app/store/store";
import pubSub from "../../../vendors/pubsub/pub-sub";

class LikeAction extends React.Component {
    constructor(props) {
        super(props);

        this.emitLikeAction = this.emitLikeAction.bind(this);
    }
    emitLikeAction(event) {
        let likedCountry = {
            name: "Alaska"
        };
        store.currentLikedCountry = likedCountry;
        pubSub.publish('countryLiked', likedCountry);
        //headerStore.likedCountries.push(this.currentLikedCountry);
    }
    render() {
        return (
            <div className="like-icon" onClick={this.emitLikeAction}>
                <img src="images/thumbs-up-icon.svg"></img>
            </div>
        );
    }
}

export default LikeAction;