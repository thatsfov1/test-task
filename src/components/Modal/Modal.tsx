import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import s from './Modal.module.css'
import {Company} from "../../types/types";
import { Tab, Tabs} from "react-bootstrap";
import BarChart from "../BarChart";

type ModalProps = {
    active:boolean
    setActive:Dispatch<SetStateAction<boolean>>
    company:Company
}

const Modal = ({active, setActive,company}:ModalProps) => {

    const [companyAge, setCompanyAge] = useState<number>(null);

    useEffect(() => {
        const calculateCompanyAge = () => {
            const today = new Date();
            const timeDiff = today.getTime() - company.reg_date.getTime();
            // Calculate years
            const yearsDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
            setCompanyAge(yearsDiff);
        };
        calculateCompanyAge();
        // Update company age every day
        const interval = setInterval(calculateCompanyAge, 24 * 60 * 60 * 1000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [company.reg_date]);


    return (
        <div className={`${s.modal} ${active ? s.active : ''}`} onClick={() => setActive(false)}>
            <div className={s.modal_content_container} onClick={e => e.stopPropagation()}>
                <div className={s.modal_content}>
                    <header className='mb-0'>{company.name}</header>
                    <div className={s.company_address}>
                        {company.country}, {company.city}, {company.streetAddress}, {company.zip_code}
                    </div>
                    <Tabs defaultActiveKey="about">
                        <Tab eventKey="about" title="About">
                            <div className={s.tab_info}>
                                <header>About</header>
                                <ul>
                                    <li>
                                        Company age: {companyAge>1 ? companyAge + ' years' : companyAge + ' year' }
                                    </li>
                                    <li>Number of employees: {company.employees_num}</li>
                                    <li>Capital: ${company.capital}</li>
                                    <li>Turnover: ${company.turnover}</li>
                                    <li>Net profit: ${company.net_profit}</li>
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="contacts" title="Contacts">
                            <div className={s.tab_info}>
                                <header>Contacts</header>
                                <ul>
                                    <li>
                                        Website: <a href={company.website} target='_blank'>{company.website}</a>
                                    </li>
                                    <li>
                                        Phone number: <a href={`tel:${company.contact_num}`}>{company.contact_num}</a>
                                    </li>
                                    <li>
                                        Email: <a href={`mailto:${company.contact_email}`}>{company.contact_email}</a>
                                    </li>
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="chart" title="Chart">
                            <div className={s.tab_info}>
                                <BarChart company={company}/>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Modal