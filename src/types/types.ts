export interface Company {
    id: string
    name: string
    city: string
    streetAddress: string
    country: string
    zip_code: string
    reg_date: Date
    employees_num: number
    capital: string
    turnover: string
    net_profit: string
    contact_num: string
    contact_email: string
    website: string
    loan_amount: string
    loan_interest: string
    acc_status: boolean
}

export type State = {
    companies: Company[]
    byAge: string
    searchQuery: string
    accountStatus: string
    minLoan: string
    maxLoan: string
    isLoggedIn: boolean
}


export type Action =
    | { type: 'FILTER_BY_AGE', payload: string }
    | { type: 'FILTER_BY_QUERY', payload: string }
    | { type: 'FILTER_BY_ACCOUNT_STATUS', payload: string }
    | { type: 'SET_MIN_LOAN', payload: string }
    | { type: 'SET_MAX_LOAN', payload: string }
    | { type: 'SET_LOGIN', isLoggedIn: boolean }
    | { type: 'CLEAR_ALL_FILTERS' }

