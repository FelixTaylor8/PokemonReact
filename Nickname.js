import { Fragment } from 'react';
import { useDispatch } from 'react-redux'
import { deleteNick, reportNick, removeReportNick, likeNickName, fixCapitalization, approveNick } from './actions';
import { Link } from 'react-router-dom';

export function Nickname(props) {
  const dispatch = useDispatch();
  const nick = props.nick;

  let nickField = <span className="main-name">{fixCapitalization(nick.nick)}</span>;
  let reportButton = <button onClick={() => dispatch(reportNick(nick.id))}>Report</button>;
  let likeButton = <button className="heart" onClick={() => dispatch(likeNickName(nick.id))}><span className="heart">&#9829;</span></button>;
  let approveButton = <button onClick={() => dispatch(approveNick(nick.id))}>Approve</button>;
  if (!nick.reviewed && nick.reported) {
    nickField = <span className="main-name spoiler">{fixCapitalization(nick.nick)}</span>;
    reportButton = <button onClick={() => dispatch(removeReportNick(nick.id))}>Unreport</button>;
    likeButton = null;
  }
  return (
    <Fragment>
      <div className="content-div">
        <span className="id-field">ID: {nick.id}</span><br />
        {nickField}<br />
        <span>Likes: {nick.likes}</span><br />
        <span className="mon-link"><Link to={`/${nick.mon.toLowerCase()}`}>{fixCapitalization(nick.mon)}</Link></span><br />
        <div className="buttons">
          {!nick.reviewed && approveButton}
          {!nick.reviewed && reportButton}
          {(nick.reviewed || !nick.reported) && likeButton}
          <button onClick={() => dispatch(deleteNick(nick.id))}>&#x2716;</button>
        </div>
      </div>
    </Fragment>
  );
}