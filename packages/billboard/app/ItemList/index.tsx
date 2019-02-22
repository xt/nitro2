/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import Item from "../Item";

//--------Emotion  Styles -------/

const cardList = css`
  display: flex;
  margin: 5px;
  flex-flow: row wrap;
`;

interface Data {
  data: Array<BoardItem>;
}

interface BoardItem {
  title: string;
  description: string;
  image: string;
}

const ItemList = (props: Data) => {
  const boardList = props.data.map((BoardItem: BoardItem, index: any) => (
    <Item key={index} item={BoardItem} />
  ));

  return (
    <React.Fragment>
      <div css={cardList}>{boardList}</div>
    </React.Fragment>
  );
};

export default ItemList;
