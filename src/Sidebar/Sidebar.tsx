import React from 'react'
import s from './Sidebar.module.css'
import {Button, Col, Form} from 'react-bootstrap'
import {useCompanyContext} from "../state/Context";

const Sidebar = () => {

    const {
        state: {
            byAge,
            accountStatus,
            searchQuery,
            minLoan,
            maxLoan
        }, dispatch
    } = useCompanyContext()

    // Logout logic
    const userData = localStorage.getItem("login")
    const passwordData = localStorage.getItem("password")
    const handleLogout = () => {
        dispatch({
            type: "SET_LOGIN",
            isLoggedIn: false
        })
        localStorage.clear()
    }

    return (
        <div className={s.container}>
            <header className={s.main_header}>Filters</header>
            <div className={s.filters_container}>

                <Col xs={6} md={12} className='m-auto'>
                    <Form.Control
                        type="search"
                        placeholder="Search by company name"
                        onChange={(e) => dispatch({
                            type: "FILTER_BY_QUERY",
                            payload: e.target.value
                        })}
                        value={searchQuery}
                    />
                </Col>
                <div className={s.sort_container}>
                    <div className={s.sort_block}>
                        <div className={s.filter_title}>Account Status</div>
                        <Form.Check
                            inline
                            type={"radio"}
                            name="group1"
                            label="Closed"
                            id="inline-1"
                            onChange={() => dispatch({
                                type: "FILTER_BY_ACCOUNT_STATUS",
                                payload: "closed"
                            })}
                            checked={accountStatus === "closed"}
                        />
                        <Form.Check
                            inline
                            type={"radio"}
                            name="group1"
                            label="Active"
                            id="inline-2"
                            onChange={() => dispatch({
                                type: "FILTER_BY_ACCOUNT_STATUS",
                                payload: "active"
                            })}
                            checked={accountStatus === "active"}
                        />
                    </div>
                    <div className={s.sort_block}>
                        <div className={s.filter_title}>Loan Range</div>
                        <div className={s.range_container}>
                            <Form.Control
                                type='number'
                                pattern="[0-9]+"
                                placeholder="min"
                                style={{width: 100}}
                                className="m-auto"
                                onChange={(e) => dispatch({
                                    type: "SET_MIN_LOAN",
                                    payload: e.target.value
                                })}
                                value={minLoan}
                            />

                            <Form.Control
                                type="number"
                                placeholder="max"
                                style={{width: 100}}
                                className="m-auto"
                                onChange={(e) => dispatch({
                                    type: "SET_MAX_LOAN",
                                    payload: e.target.value
                                })}
                                value={maxLoan}
                            />
                        </div>
                    </div>
                    <div className={s.sort_block}>
                        <div className={s.filter_title}>Sort by Company age</div>
                        <Form.Check
                            inline
                            type={"radio"}
                            name="group2"
                            label="Firstly youngest"
                            id="inline-3"
                            onChange={() => dispatch({
                                type: "FILTER_BY_AGE",
                                payload: "youngestFirst"
                            })}
                            checked={byAge === "youngestFirst"}
                        />
                        <Form.Check
                            inline
                            type={"radio"}
                            name="group2"
                            label="Firstly oldest"
                            id="inline-4"
                            onChange={() => dispatch({
                                type: "FILTER_BY_AGE",
                                payload: "oldestFirst"
                            })}
                            checked={byAge === "oldestFirst"}
                        />
                    </div>
                </div>
                <div className={s.button_group}>
                    <Button variant='secondary' onClick={() => dispatch({
                        type: "CLEAR_ALL_FILTERS",
                    })}>
                        Clear Filters
                    </Button>
                    {passwordData && userData &&
                        <Button variant='danger' onClick={handleLogout}>
                            Log out
                        </Button>}
                </div>
            </div>


        </div>
    )
}

export default Sidebar
