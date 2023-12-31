import React from "react";
import { Button, Card } from "react-bootstrap";

const CardBook = ({ book, downloadFile }) => {
  return (
    <div key={book._id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://prodimage.images-bn.com/pimages/9788194824169_p0_v1_s1200x630.jpg"
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.desc}</Card.Text>
          <Button variant="primary" onClick={() => downloadFile(book._id)}>
            Download
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardBook;
