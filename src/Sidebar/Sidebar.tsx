import React from 'react'
import s from './Sidebar.module.css'
import {Form} from 'react-bootstrap'

const Sidebar = () => {
  return (
    <div className={s.container}>
        <header>Filters</header>
        <div className={s.filters_container}>
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
                <Form.Control
                    type="text"
                    placeholder="min"
                    style={{width:80}}
                    className="m-auto"
                />
                <Form.Control
                    type="text"
                    placeholder="max"
                    style={{width:80}}
                    className="m-auto"
                />
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
        </div>
    </div>
  )
}

export default Sidebar
