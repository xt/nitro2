/**@jsx jsx */
import React from "react";
import { observer } from "mobx-react";
import { jsx, css } from "@emotion/core";

const notifBox = css`
    padding-right: 2em;
    position: relative;
    width: 50px;
`;
const cartCountBox = css`
    position: absolute;
    right: 30px;
    top: -22px;
    text-align: center;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 1px solid;
    background: white;
`;
const cartCount = css`
    display: inline-block;
    padding: 4px 0;
`;

const Notification = observer(({ store }) => {
    return (
        <div css={notifBox}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAA+ElEQVR4AeXPMSjEYRjH8SfKIqOUY5DMyg7KZGGwT0hsEmW6wmoyKtkX+3STvWQw2QzEIJJ0PsYb7rzv++9u4vOM3/r1vvGnqQO47NXQl9HeDHEW3bKkukfj0c6N6vajnTVVNU1HO33uVXMRnVlXxYdadGbAo3In8Tt7Sj0bTA0NeVVmJ9IcK3GnP9IM+5S3GnnO5FxHCbNyZqKEKynfdqOEOdB0pN7xFqOEfrfgPLpjBXwYie44AA/q2VuIFMtK1SPNaflQhnmHXX+th0xoeNMwla8Jap4AT2q5mmBDy3auJtjUspWrCca8tB6frwkmNbxrmMjXf+IHAnWgsliFmvYAAAAASUVORK5CYII=" alt="" />
            <div css={cartCountBox}>
                <span css={cartCount}>{store.getLikedItemsCount}</span>
            </div>
        </div>
    );
});

export default Notification;