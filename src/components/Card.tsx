import React, {useState} from 'react'
import CardRB from "react-bootstrap/Card";
import {Company} from "../types/types";
import Button from "react-bootstrap/Button";
import Modal from "./Modal/Modal";


type CardProps = {
    company: Company
}

const Card = ({company}: CardProps) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <CardRB style={{width: '21rem', display: 'flex', flexDirection: 'column'}}>
            <CardRB.Body style={{flex: '1 1 auto'}}>
                <CardRB.Subtitle>
                    <a style={{textDecoration: 'none'}} href={company.website} target='_blank'>{company.website}</a>
                </CardRB.Subtitle>
                <CardRB.Title style={{paddingTop: '5px', fontWeight: 600}}>{company.name}</CardRB.Title>
                <CardRB.Subtitle style={{paddingBottom: '10px', fontSize: '14px', color: '#686868'}}>
                    <span>{company.contact_email}</span>
                </CardRB.Subtitle>
                <CardRB.Text>
                        <ul style={{padding: 0}}>
                            <li>Loan amount - ${company.loan_amount}</li>
                            <li>Loan Interest - {company.loan_interest}</li>
                            <li>Account status - {company.acc_status ? 'Open 🟢' : 'Closed 🔴'}</li>
                        </ul>
                </CardRB.Text>
                <Button onClick={() => setModalActive(true)} className='mt-auto w-100' variant="secondary">More
                    info</Button>
            </CardRB.Body>
            <Modal company={company} active={modalActive} setActive={setModalActive}/>
        </CardRB>

    )
}

export default Card
