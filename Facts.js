import { Nav } from './Nav';
import { Fact } from './Fact';
import { Search } from './Search';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFacts, fetchSpecificFact, sortFactsById } from './actions';
import { EntryInput } from './EntryInput';

export function Facts() {
    const isProgressing = useSelector(state => state.isProgressing);
    const params = useParams();
    const dispatch = useDispatch();
    const facts = useSelector(state => state.facts);
    var searchMon = null;
    var searchId = null;
    if (params != null && params.mon != null) {
        searchMon = params.mon.toLowerCase();
    }
    if (params != null && params.id != null) {
        searchId = params.id;
    }
    useEffect(() => {
        if (searchId != null) {
            dispatch(fetchSpecificFact(searchId));
        } else {
            dispatch(fetchFacts(searchMon));
        }
        dispatch(sortFactsById());
    }, [dispatch, searchMon, searchId]);
    return (
        <Fragment>
            <Nav />
            <Search type="fact" />
            {isProgressing && <div className="spinner" />}
            {!isProgressing && 
            <div className="box-div">
                {facts.map(fact => <Fact key={fact.id} fact={fact} />)}
                <EntryInput type="fact" />
            </div>}
        </Fragment>
    );
}