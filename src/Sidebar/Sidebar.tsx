import React from 'react'
import s from './Sidebar.module.css'
import {Button, Form} from 'react-bootstrap'

const Sidebar = () => {
  return (
    <div className={s.container}>
        <header>Filters</header>
        <div className={s.filters_container}>
            <div>
                <Form.Control
                    type="search"
                    placeholder="Search by company name"
                    style={{width:250}}
                    className="m-auto"
                />
            </div>
            <div>
               <h6>Account Status</h6>
            <Form.Check
                inline
                type={"radio"}
                name="group1"
                label="Closed"
                id="inline-1"
            />
            <Form.Check
                    inline
                    type={"radio"}
                    name="group1"
                    label="Active"
                    id="inline-2"
            />
        </div>
            <div>
                <h6>Loan Range</h6>
                <div className={s.range_container}>
                    <Form.Control
                    type="text"
                    placeholder="min"
                    style={{width:100}}
                    className="m-auto"
                    />
                    <Form.Control
                    type="text"
                    placeholder="max"
                    style={{width:100}}
                    className="m-auto"
                    />
                </div>
            </div>
            <div>
                <h6>Sort by Company age</h6>
                <Form.Check
                    inline
                    type={"radio"}
                    name="group2"
                    label="Firstly youngest"
                    id="inline-1"
                />
                <Form.Check
                    inline
                    type={"radio"}
                    name="group2"
                    label="Firstly oldest"
                    id="inline-2"
                />
            </div>
            <Button variant='secondary'>Clear Filters</Button>
        </div>
    </div>
  )
}

export default Sidebar
