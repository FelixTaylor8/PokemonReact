import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Action } from './actions';

function reducer(state, action) {
    switch (action.type) {
        case Action.ShowMons:
            return {
                ...state,
                mons: action.payload,
            };
        case Action.ShowNicks:
            return {
                ...state,
                nicks: action.payload,
            };
        case Action.ShowFacts:
            return {
                ...state,
                facts: action.payload,
            };
        case Action.AddNick:
            return {
                ...state,
                nicks: [action.payload, ...state.nicks],
            };
        case Action.AddFact:
            return {
                ...state,
                facts: [action.payload, ...state.facts],
            };
        case Action.RemoveNick:
            return {
                ...state,
                nicks: state.nicks.filter(nick => nick.id !== action.payload),
            };
        case Action.RemoveFact:
            return {
                ...state,
                facts: state.facts.filter(fact => fact.id !== action.payload),
            };
        case Action.LikeNick:
            return {
                ...state,
                nicks: state.nicks.map(nick => {
                    if (nick.id === action.payload) {
                        nick.likes++;
                        return nick;
                    } else {
                        return nick;
                    }
                }),
            };
        case Action.LikeFact:
            return {
                ...state,
                facts: state.facts.map(fact => {
                    if (fact.id === action.payload) {
                        fact.likes++;
                        return fact;
                    } else {
                        return fact;
                    }
                }),
            };
        case Action.LikeMon:
            return {
                ...state,
                mons: state.mons.map(mon => {
                    if (mon.id === action.payload) {
                        mon.likes++;
                        return mon;
                    } else {
                        return mon;
                    }
                }),
            };
        case Action.ReportNick:
            return {
                ...state,
                nicks: state.nicks.map(nick => {
                    if (nick.id === action.payload) {
                        nick.reported = true;
                        return nick;
                    } else {
                        return nick;
                    }
                }),
            };
        case Action.UnreportNick:
            return {
                ...state,
                nicks: state.nicks.map(nick => {
                    if (nick.id === action.payload) {
                        nick.reported = false;
                        return nick;
                    } else {
                        return nick;
                    }
                }),
            };
        case Action.ApproveNick:
            return {
                ...state,
                nicks: state.nicks.map(nick => {
                    if (nick.id === action.payload) {
                        nick.reviewed = true;
                        return nick;
                    } else {
                        return nick;
                    }
                }),
            };
        case Action.ReportFact:
            return {
                ...state,
                facts: state.facts.map(fact => {
                    if (fact.id === action.payload) {
                        fact.reported = true;
                        return fact;
                    } else {
                        return fact;
                    }
                }),
            };
        case Action.UnreportFact:
            return {
                ...state,
                facts: state.facts.map(fact => {
                    if (fact.id === action.payload) {
                        fact.reported = false;
                        return fact;
                    } else {
                        return fact;
                    }
                }),
            };
        case Action.ApproveFact:
            return {
                ...state,
                facts: state.facts.map(fact => {
                    if (fact.id === action.payload) {
                        fact.reviewed = true;
                        return fact;
                    } else {
                        return fact;
                    }
                }),
            };
        case Action.ShowProgress:
            return {
                ...state,
                isProgressing: true,
            };
        case Action.HideProgress:
            return {
                ...state,
                isProgressing: false,
            };
        case Action.NicksLikes:
            return {
                ...state,
                nicks: [...state.nicks].sort((a, b) => (a.likes <= b.likes) ? 1 : -1),
                byLikes: false,
            };
        case Action.NicksID:
            return {
                ...state,
                nicks: [...state.nicks].sort((a, b) => (a.id > b.id) ? 1 : -1),
                byLikes: true,
            };
        case Action.MonsLikes:
            return {
                ...state,
                mons: [...state.mons].sort((a, b) => (a.likes <= b.likes) ? 1 : -1),
                byLikes: false,
            };
        case Action.MonsID:
            return {
                ...state,
                mons: [...state.mons].sort((a, b) => (a.id > b.id) ? 1 : -1),
                byLikes: true,
            };
        case Action.FactsLikes:
            return {
                ...state,
                facts: [...state.facts].sort((a, b) => (a.likes <= b.likes) ? 1 : -1),
                byLikes: false,
            };
        case Action.FactsID:
            return {
                ...state,
                facts: [...state.facts].sort((a, b) => (a.id > b.id) ? 1 : -1),
                byLikes: true,
            };
        default:
            return state;
    }
}

const initialState = {
    nicks: [],
    mons: [],
    facts: [],
    isProgressing: true,
    byLikes: true,
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));