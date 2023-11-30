import React, {useState} from 'react'
import CardRB from "react-bootstrap/Card";
import {Company} from "../../types/types";
import Button from "react-bootstrap/Button";
import Modal from "../Modal/Modal";
import s from './Card.module.css'


type CardProps = {
    company: Company
}

const Card = ({company}: CardProps) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <CardRB className={s.container}>
            <CardRB.Body>
                <CardRB.Subtitle>
                    <a href={`https://${company.website}`}
                       target='_blank'>{company.website}</a>
                </CardRB.Subtitle>
                <CardRB.Title className={s.title}>{company.name}</CardRB.Title>
                <CardRB.Subtitle className={s.subtitle}>
                    <span>{company.contact_email}</span>
                </CardRB.Subtitle>
                <CardRB.Text>
                    <ul>
                        <li>Loan amount - ${company.loan_amount}</li>
                        <li>Loan Interest - {company.loan_interest}</li>
                        <li>Account status - {company.acc_status ? 'Open 🟢' : 'Closed 🔴'}</li>
                    </ul>
                </CardRB.Text>
            </CardRB.Body>
            <Button onClick={() => setModalActive(true)} className='m-2 w-auto' variant="secondary">More
                info</Button>
            <Modal company={company} active={modalActive} setActive={setModalActive}/>
        </CardRB>

    )
}

export default Card
