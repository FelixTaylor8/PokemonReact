import { useDispatch } from 'react-redux'
import { Nickname } from './Nickname';
import { Search } from './Search';
import { useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { fetchNicks, fetchSpecificNick, sortNicksById } from './actions';
import { Nav } from './Nav';
import { useParams } from 'react-router-dom';
import { EntryInput } from './EntryInput';

export function Nicknames() {
    const params = useParams();
    const dispatch = useDispatch();
    const nicks = useSelector(state => state.nicks);
    const isProgressing = useSelector(state => state.isProgressing);
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
            dispatch(fetchSpecificNick(searchId));
        } else {
            dispatch(fetchNicks(searchMon));
        }
        dispatch(sortNicksById());
    }, [dispatch, searchMon, searchId]);
    return (
        <Fragment>
            {isProgressing && <div className="spinner" />}
            <Nav />
            <Search type="nick" />
            {!isProgressing && 
            <div className="box-div">
                {nicks.map(nick => <Nickname key={nick.id} nick={nick} />)}
                <EntryInput type="nick" />
            </div>}
        </Fragment>
    );
}