import React from 'react'
import s from './Home.module.css'
import {useCompanyContext} from "../state/Context";
import Card from "../components/Card";
import LoginForm from "../LoginForm/LoginForm";


const Home = () => {
    const {state:{companies,byAge, searchQuery, accountStatus,minLoan, maxLoan}} = useCompanyContext()
    const userData = localStorage.getItem("login")
    const passwordData = localStorage.getItem("password")

    const transformedCompanies = () => {
        let filterCompanies = companies
        if(searchQuery){
            filterCompanies = filterCompanies.filter(company => company.name.toLowerCase().includes(searchQuery))
        }
        if(accountStatus){
            filterCompanies = filterCompanies.filter(company => (
                accountStatus=='active' ? company.acc_status : !company.acc_status
                )
            )
        }
       if(byAge){
           filterCompanies = filterCompanies.sort((a,b) => (
               byAge==='youngestFirst' ? b.reg_date -a.reg_date : a.reg_date -b.reg_date
           ))
       }
       if(minLoan || maxLoan){
            filterCompanies = filterCompanies.filter(company => (
                (minLoan == '' || parseFloat(company.loan_amount) >= parseFloat(minLoan)) &&
                (maxLoan == '' || parseFloat(company.loan_amount) <= parseFloat(maxLoan))
            ))
        }
       return filterCompanies
    }

  return (
        <>
            {userData && passwordData  ? (
                <div className={s.container}>
                    {transformedCompanies().map((company)=> <Card company={company} key={company.id}/>)}
                </div>
            ) : (
                <div className={s.login_container}>
                    <LoginForm/>
                </div>

            )}
        </>

  )
}

export default Home
