import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardActions,
} from 'react-mdl';

function CategoryCard(props) {
  return (
    <Card
      shadow={5} style={{
        width: props.width,
        height: props.cardHeight,
        margin: 'auto',
      }}
    >
      <CardTitle
        style={{
          color: '#000',
          height: props.height,
          background: `url(${props.image}) center / cover`,
        }}
      />
      <CardActions border>
        <Button
          colored style={{
            fontSize: 30,
            color: '#310035',
          }} onClick={props.onClick}
        >{props.text}</Button>
      </CardActions>
    </Card>
  );
}

export default CategoryCard;
