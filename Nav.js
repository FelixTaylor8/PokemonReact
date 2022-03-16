import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function Nav(props) {

    return (
        <Fragment>
            <nav>
                <ul>
                    <li><Link to={`/`}>Pokemon</Link></li>
                    <li><Link to={`/nicknames`}>Nicknames</Link></li>
                    <li><Link to={`/facts`}>Facts</Link></li>
                </ul>
            </nav>
        </Fragment>
    );
}