import { Fragment } from 'react';
import { fixCapitalization, likePokemon } from './actions.js';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Mon(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mon = props.mon;
    const lc = mon.name.toLowerCase();
    return (
        <Fragment>
            <div className="content-div">
                <span className="id-field">ID: {mon.id}</span><br />
                <span className="main-name mon-link"><Link to={`/${lc}`}>{fixCapitalization(lc)}</Link></span><br />
                <span>Likes: {mon.likes}</span>
                <div className="buttons">
                    <button onClick={() =>
                        navigate(`/nicknames/${lc}`)}>Nicks</button>
                    <button onClick={() =>
                        navigate(`/facts/${lc}`)}>Facts</button>
                    <button className="heart" onClick={() => dispatch(likePokemon(mon.id))}><span className="heart">&#9829;</span></button>
                </div>
            </div>
        </Fragment>
    );
}