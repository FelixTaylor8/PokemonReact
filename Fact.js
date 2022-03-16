import { Fragment } from 'react';
import { useDispatch } from 'react-redux'
import { deleteFact, reportFact, removeReportFact, likeMonFact, fixCapitalization, approveFact } from './actions';
import { Link } from 'react-router-dom';

export function Fact(props) {
    const dispatch = useDispatch();
    const fact = props.fact;

    let factField = <span className="main-name">{fact.fact}</span>;
    let reportButton = <button onClick={() => dispatch(reportFact(fact.id))}>Report</button>;
    let likeButton = <button onClick={() => dispatch(likeMonFact(fact.id))}><span className="heart">&#9829;</span></button>;
    let approveButton = <button onClick={() => dispatch(approveFact(fact.id))}>Approve</button>;
    if (!fact.reviewed && fact.reported) {
        factField = <span className="main-name spoiler">{fact.fact}</span>;
        reportButton = <button onClick={() => dispatch(removeReportFact(fact.id))}>Unreport</button>;
        likeButton = null;
    }
    return (
        <Fragment>
            <div className="fact-div">
                <div className="fact-top">
                    <span className="id-field">ID: {fact.id}</span>
                    <span>Likes: {fact.likes}</span>
                    <span className="mon-link"><Link to={`/${fact.mon.toLowerCase()}`}>{fixCapitalization(fact.mon)}</Link></span>
                </div>
                {factField}<br />
                <div className="buttons">
                    {!fact.reviewed && approveButton}
                    {!fact.reviewed && reportButton}
                    {(fact.reviewed || !fact.reported) && likeButton}
                    <button onClick={() => dispatch(deleteFact(fact.id))}>&#x2716;</button>
                </div>
            </div>
        </Fragment>
    );
}