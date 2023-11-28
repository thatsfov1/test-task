import {Action, State} from "../types/types";

const CompanyReducer = (state:State,action:Action):State =>{
    switch (action.type) {
        case "FILTER_BY_ACCOUNT_STATUS":{
            return{
                ...state, accountStatus:action.payload
            }
        }
        case "FILTER_BY_AGE":{
            return{
                ...state, byAge:action.payload
            }
        }
        case "FILTER_BY_QUERY":{
            return{
                ...state, searchQuery:action.payload
            }
        }
        case "SET_MIN_LOAN":{
            return{
                ...state, minLoan:action.payload
            }
        }
        case "SET_MAX_LOAN":{
            return{
                ...state, maxLoan:action.payload
            }
        }
        case "CLEAR_ALL_FILTERS":{
            return{
                ...state,
                accountStatus:'',
                byAge:'',
                searchQuery:'',
                minLoan:'',
                maxLoan:'',
            }
        }
        default:
            throw new Error('Unhandled action');
    }
}

export default CompanyReducer