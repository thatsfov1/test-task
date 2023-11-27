import {createContext, ReactNode, useContext} from 'react'
import companies from "../data/data";
import {Company} from "../types/types";

type CompaniesProviderProps ={
    children:ReactNode
}

export const CompanyContext = createContext<Company[] | undefined>(undefined)

export function useCompanyContext(){
    const companies = useContext(CompanyContext);
    if(companies === undefined){
        throw new Error("useCompanyContext must be used with a CompanyContext")
    }
    return companies
}

const ContextProvider = ({children}:CompaniesProviderProps) =>{
    return (
        <CompanyContext.Provider value={companies}>
            {children}
        </CompanyContext.Provider>
    )
}

export default ContextProvider


