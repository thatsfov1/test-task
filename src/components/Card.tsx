import React from 'react'
import CardRB from "react-bootstrap/Card";
import {Company} from "../types/types";
import Button from "react-bootstrap/Button";


type CardProps = {
    company:Company
}

const Card = ({company}:CardProps) => {
  return (
    <CardRB>
      <CardRB.Body>
      <CardRB.Title>{company.name}</CardRB.Title>
      <CardRB.Text>
      </CardRB.Text>
      <Button variant="secondary">Go somewhere</Button>
    </CardRB.Body>
    </CardRB>

  )
}

export default Card
