export function fixCapitalization(word) {
    if (word != null) {
        var lc = word.toLowerCase();
        return lc.charAt(0).toUpperCase() + lc.slice(1);
    }
}

function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
        return response;
    } else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
}

export const Action = Object.freeze({
    ShowNicks: 'ShowNicks',
    AddNick: 'AddNick',
    LikeNick: 'LikeNick',
    RemoveNick: 'RemoveNick',
    ReportNick: 'ReportNick',
    UnreportNick: 'UnreportNick',
    ApproveNick: 'ApproveNick',
    ShowMons: 'ShowMons',
    LikeMon: 'LikeMon',
    ShowFacts: 'ShowFacts',
    AddFact: 'AddFact',
    LikeFact: 'LikeFact',
    RemoveFact: 'RemoveFact',
    ReportFact: 'ReportFact',
    UnreportFact: 'UnreportFact',
    ShowProgress: 'ShowProgress',
    HideProgress: 'HideProgress',
    ApproveFact: 'ApproveFact',
    NicksLikes: 'NicksLikes',
    NicksID: 'NicksID',
    MonsLikes: 'MonsLikes',
    MonsID: 'MonsID',
    FactsLikes: 'FactsLikes',
    FactsID: 'FactsID',
});

export function factsByLikes() {
    return { type : Action.FactsLikes };
}

export function factsById() {
    return { type : Action.FactsID };
}

export function nicksByLikes() {
    return { type : Action.NicksLikes };
}

export function nicksById() {
    return { type : Action.NicksID };
}

export function monsByLikes() {
    return { type : Action.MonsLikes };
}

export function monsById() {
    return { type : Action.MonsID };
}

export function showProgress() {
    return { type: Action.ShowProgress };
}

export function hideProgress() {
    return { type: Action.HideProgress };
}

export function showNicks(nicks) {
    return { type: Action.ShowNicks, payload: nicks };
}

export function showFacts(facts) {
    return { type: Action.ShowFacts, payload: facts };
}

export function showMons(mons) {
    return { type: Action.ShowMons, payload: mons };
}

export function addNick(nick) {
    return { type: Action.AddNick, payload: nick };
}

export function addFact(fact) {
    return { type: Action.AddFact, payload: fact };
}

export function likeNick(id) {
    return { type: Action.LikeNick, payload: id };
}

export function likeFact(id) {
    return { type: Action.LikeFact, payload: id };
}

export function likeMon(id) {
    return { type: Action.LikeMon, payload: id };
}

export function removeNick(id) {
    return { type: Action.RemoveNick, payload: id };
}

export function removeFact(id) {
    return { type: Action.RemoveFact, payload: id };
}

export function reportNickName(id) {
    return { type: Action.ReportNick, payload: id };
}

export function reportMonFact(id) {
    return { type: Action.ReportFact, payload: id };
}

export function approveNickName(id) {
    return { type: Action.ApproveNick, payload: id };
}

export function approveMonFact(id) {
    return { type: Action.ApproveFact, payload: id };
}

export function unreportNickName(id) {
    return { type: Action.UnreportNick, payload: id };
}

export function unreportMonFact(id) {
    return { type: Action.UnreportFact, payload: id };
}

export function fetchNicks(mon) {
    var input;
    if (mon === null || mon.length === 0) input = "https://project2.apir.me:8443/nick";
    else input = `https://project2.apir.me:8443/nick/${mon}`;
    return dispatch => {
        dispatch(showProgress());
        fetch(input)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.results.length > 0) {
                    dispatch(showNicks(data.results));
                } else {
                    console.log("The specified Pokemon could not be found. It is either invalid, or there are no nicknames added for it yet.");
                    dispatch(showNicks([]));
                }
                dispatch(hideProgress());
            });
    };
}

export function fetchFacts(mon) {
    var input;
    if (mon === null || mon.length === 0) input = "https://project2.apir.me:8443/fact";
    else input = `https://project2.apir.me:8443/fact/${mon}`;
    return dispatch => {
        dispatch(showProgress());
        fetch(input)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.results.length > 0) {
                    dispatch(showFacts(data.results));
                } else {
                    console.log("The specified Pokemon could not be found. It is either invalid, or there are no facts added for it yet.");
                    dispatch(showFacts([]));
                }
                dispatch(hideProgress());
            });
    };
}

export function fetchMons(mon) {
    var input;
    if (mon === null || mon.length === 0) input = "https://project2.apir.me:8443/pokemon";
    else input = `https://project2.apir.me:8443/pokemon/${mon}`;
    return dispatch => {
        dispatch(showProgress());
        fetch(input)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.results.length > 0) {
                    dispatch(showMons(data.results));
                } else {
                    console.log("The specified Pokemon could not be found.");
                    dispatch(showMons([]));
                }
                dispatch(hideProgress());
            });
    };
}

export function fetchMonsById(id) {
    var input;
    if (id === null || id.length === 0) input = "https://project2.apir.me:8443/pokemon";
    else input = `https://project2.apir.me:8443/pokemon/id/${id}`;
    return dispatch => {
        dispatch(showProgress());
        fetch(input)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.results.length > 0) {
                    dispatch(showMons(data.results));
                } else {
                    console.log("The specified Pokemon ID could not be found.");
                    dispatch(showMons([]));
                }
                dispatch(hideProgress());
            });
    };
}

export function fetchSpecificNick(id) {
    var input;
    if (id === null || id.length === 0) input = "https://project2.apir.me:8443/nick";
    else input = `https://project2.apir.me:8443/nick/id/${id}`;
    return dispatch => {
        dispatch(showProgress());
        fetch(input)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.results.length > 0) {
                    dispatch(showNicks(data.results));
                } else {
                    console.log("The specified nickname ID could not be found.");
                    dispatch(showNicks([]));
                }
                dispatch(hideProgress());
            });
    };
}

export function fetchSpecificFact(id) {
    var input;
    if (id === null || id.length === 0) input = "https://project2.apir.me:8443/fact";
    else input = `https://project2.apir.me:8443/fact/id/${id}`;
    return dispatch => {
        dispatch(showProgress());
        fetch(input)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.results.length > 0) {
                    dispatch(showFacts(data.results));
                } else {
                    console.error("The specified fact ID could not be found.");
                    dispatch(showFacts([]));
                }
                dispatch(hideProgress());
            });
    };
}

export function addNewNick(id, nick, mon) {
    const newNick = {
        id,
        nick,
        mon,
        likes: 0,
        reported: false,
        reviewed: false,
    };

    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNick),
        };
        fetch(`https://project2.apir.me:8443/nick`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(addNick({
                        ...newNick,
                    }));
                } else {
                    console.error("Error adding nickname. Check that the ID is unique and the Pokemon is valid.")
                }
            });
    };
}

export function addNewFact(id, fact, mon) {
    const newFact = {
        id,
        fact,
        mon,
        likes: 0,
        reported: false,
        reviewed: false,
    };

    return dispatch => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFact),
        };
        fetch(`https://project2.apir.me:8443/fact`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(addFact({
                        ...newFact,
                    }));
                } else {
                    console.error("Error adding fact. Check that the ID is unique and the Pokemon is valid.")
                }
            });
    };
}

export function likeMonFact(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/fact/${id}/like`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(likeFact(id));
                }
            });
    };
}

export function likeNickName(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/nick/${id}/like`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(likeNick(id));
                }
            });
    };
}

export function likePokemon(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/pokemon/id/${id}/like`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(likeMon(id));
                }
            });
    };
}

export function deleteNick(id) {
    return dispatch => {
        const options = {
            method: 'DELETE',
        };
        fetch(`https://project2.apir.me:8443/nick/${id}`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(removeNick(id));
                }
            });
    };
}

export function deleteFact(id) {
    return dispatch => {
        const options = {
            method: 'DELETE',
        };
        fetch(`https://project2.apir.me:8443/fact/${id}`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(removeFact(id));
                }
            });
    };
}

export function reportNick(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/nick/${id}/report`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(reportNickName(id));
                }
            });
    };
}

export function reportFact(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/fact/${id}/report`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(reportMonFact(id));
                }
            });
    };
}

export function approveNick(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/nick/${id}/approve`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(approveNickName(id));
                }
            });
    };
}

export function approveFact(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/fact/${id}/approve`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(approveMonFact(id));
                }
            });
    };
}

export function removeReportNick(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/nick/${id}/removereport`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(unreportNickName(id));
                }
            });
    };
}

export function removeReportFact(id) {
    return dispatch => {
        const options = {
            method: 'PATCH',
        };
        fetch(`https://project2.apir.me:8443/fact/${id}/removereport`, options)
            .then(assertResponse)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    dispatch(unreportMonFact(id));
                }
            });
    };
}

export function sortNicksByLikes() {
    return dispatch => {
        dispatch(nicksByLikes());
    };
}

export function sortNicksById() {
    return dispatch => {
        dispatch(nicksById());
    };
}

export function sortMonsByLikes() {
    return dispatch => {
        dispatch(monsByLikes());
    };
}

export function sortMonsById() {
    return dispatch => {
        dispatch(monsById());
    };
}

export function sortFactsByLikes() {
    return dispatch => {
        dispatch(factsByLikes());
    };
}

export function sortFactsById() {
    return dispatch => {
        dispatch(factsById());
    };
}