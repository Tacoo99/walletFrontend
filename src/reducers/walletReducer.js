import {GET_WALLETS, DELETE_WALLET, GET_WALLET, GET_TRANSACTION} from '../actions/types'

const initialState = {
    wallets:[],
    wallet:'',

    transactions: [],
    transaction: ''
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_WALLETS:
            return {...state,wallets:action.payload};
        case GET_WALLET:
            return {...state,wallet:action.payload};
        case GET_TRANSACTION:
            return {...state,transaction:action.payload};
        case DELETE_WALLET:
            return{...state,wallets:state.wallets.filter(x=>x.id!==action.payload)}
        default:
            return state;
    }
}