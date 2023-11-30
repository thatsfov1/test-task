import {createContext, Dispatch, ReactNode, useContext, useReducer} from 'react'
import companies from "../data/data";
import {Action, State} from "../types/types";
import CompanyReducer from "./CompanyReducer";

type CompaniesProviderProps = {
    children: ReactNode
}

type ContextType = {
    state: State
    dispatch: Dispatch<Action>
}

export const CompanyContext = createContext<ContextType | undefined>(undefined)

export function useCompanyContext() {
    const context = useContext(CompanyContext);
    if (context === undefined) {
        throw new Error("useCompanyContext must be used with a CompanyContext")
    }
    return context
}

const ContextProvider = ({children}: CompaniesProviderProps) => {

    const [state, dispatch] = useReducer(CompanyReducer, {
        companies: companies,
        byAge: '',
        searchQuery: '',
        accountStatus: '',
        minLoan: '',
        maxLoan: '',
        isLoggedIn: false
    })
    return (
        <CompanyContext.Provider value={{state, dispatch}}>
            {children}
        </CompanyContext.Provider>
    )
}

export default ContextProvider


