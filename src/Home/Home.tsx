import React from 'react'
import s from './Home.module.css'
import {useCompanyContext} from "../state/Context";
import Card from "../components/Card";


const Home = () => {
    const companies = useCompanyContext()
  return (
          <div className={s.container}>
              {companies.map((company)=> <Card company={company} key={company.id}/>)}
          </div>
  )
}

export default Home
