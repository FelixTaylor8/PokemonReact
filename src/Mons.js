import { useDispatch } from 'react-redux'
import { Mon } from './Mon';
import { Search } from './Search';
import { useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { fetchMons, fetchMonsById, sortMonsById } from './actions';
import { Nav } from './Nav';
import { useParams } from 'react-router-dom';

export function Mons() {
    const isProgressing = useSelector(state => state.isProgressing);
    const params = useParams();
    const dispatch = useDispatch();
    const mons = useSelector(state => state.mons);
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
            dispatch(fetchMonsById(searchId));
        } else {
            dispatch(fetchMons(searchMon));
        }
        dispatch(sortMonsById());
    }, [dispatch, searchMon, searchId]);
    return (
        <Fragment>
            <Nav />
            <Search type="mon" />
            {isProgressing && <div className="spinner" />}
            {!isProgressing && 
            <div className="box-div">
                {mons.map(mon => <Mon key={mon.id} mon={mon} />)}
            </div>}
        </Fragment>
    );
}