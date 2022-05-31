
console.clear()
console.log("start here ---->>>");
//import the redux library

import { legacy_createStore as createStore, combineReducers } from 'redux'


// this is an action creator that returns an action
const createPolicy = (name, amount) => {
    // this is a function that returns an object
    //in terms of analogy; this is a customer that returns a form
    return {
        type: "CREATE_POLICY",
        payload:{
            name,
            amount
        }
    }
}

//this is an action creator that return an action
//here action is ---> creating a claim

const createClaim = (name, claimAmount) => {
    return {
        type: "CREATE_CLAIM",
        payload: {
            name,
            claimAmount
        }
    }
}

//this is an action creator that returns and action

const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload:{
            name
        }
    }
}


//------------->>>>>>>>>>>>>>>>>>>>>>>>>> REDUCERS (DEPARTMENTS)
const claimsHistory = (claimsList = [], action) => {
    if(action.type === 'CREATE_CLAIM'){
        // we care about this action
        return [...claimsList, action.payload]
    }
    return claimsList
}

const accounting = (originalAmount = 500, action) => {
    if(action.type === 'CREATE_CLAIM'){
        return action.payload.claimAmount <= originalAmount ? (originalAmount - action.payload.claimAmount) : -1;
    }else if(action.type === 'CREATE_POLICY'){
        return originalAmount + action.payload.amount
    }
    return originalAmount
}

const policies = (policyList = [], action) => {
    if(action.type === 'CREATE_POLICY'){
        return [...policyList, action.payload]
    }else if(action.type === 'DELETE_POLICY'){
        return policyList.filter(policy => policy.name !== action.payload.name)
    }
    return policyList
}



//combine all the reducers
const ourDepartments = combineReducers({
    accounting,
    claimsHistory,
    policies
})

//create the store and input all the reducers
const store = createStore(ourDepartments)

//create policies
store.dispatch(createPolicy("Abhigyan", 20))
store.dispatch(createPolicy("Deepak", 50))
store.dispatch(createPolicy("Dipannita", 60))

//create claims
store.dispatch(createClaim("Deepak", 90))

//remove policy
store.dispatch(deletePolicy("Deepak"))


const state = store.getState()
console.log(state);




