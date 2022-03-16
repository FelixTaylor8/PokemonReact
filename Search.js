import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { sortNicksByLikes, sortNicksById, sortMonsByLikes, sortMonsById, sortFactsByLikes, sortFactsById } from './actions';
import { useSelector } from 'react-redux';

export function Search(props) {
  const [selMon, setSelMon] = useState("");
  const [selID, setSelID] = useState("");
  const type = props.type;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const byLikes = useSelector(state => state.byLikes);

  switch (type) {
    case "nick":
      return (
        <div className="search">
          {byLikes && <button className="search-button sort-button" onClick={() => {
            dispatch(sortNicksByLikes())
          }}>Sort by Likes</button>}
          {!byLikes && <button className="search-button sort-button" onClick={() => {
            dispatch(sortNicksById())
          }}>Sort by ID</button>}
          <div className="search-div">
            <label htmlFor="mon-nick">Input a Pokemon to find associated nicknames: </label>
            <input id="mon-nick" type="text" value={selMon} onChange={event => setSelMon(event.target.value.toLowerCase())} />
            <button className="search-button" onClick={() => {
              if (selMon != null && selMon.length > 0) {
                navigate(`/nicknames/${selMon}`);
              } else {
                navigate(`/nicknames`);
              }
              setSelMon("");
            }}>Find Nicks</button>
          </div>
          <div className="search-div">
            <label htmlFor="id-nick">Input an ID to find a specific nickname: </label>
            <input id="id-nick" type="number" value={selID} onChange={event => setSelID(event.target.value)} />
            <button className="search-button" onClick={() => {
              if (selID != null && selID.length > 0) {
                navigate(`/nicknames/id/${selID}`);
              } else {
                navigate(`/nicknames`);
              }
              setSelID("");
            }}>Find Nick</button>
          </div>
        </div>
      );
    case "mon":
      return (
        <div className="search">
          {byLikes && <button className="search-button sort-button" onClick={() => {
            dispatch(sortMonsByLikes())
          }}>Sort by Likes</button>}
          {!byLikes && <button className="search-button sort-button" onClick={() => {
            dispatch(sortMonsById())
          }}>Sort by ID</button>}
          <div className="search-div">
            <label htmlFor="name-mon">Search a Pokemon by name: </label>
            <input id="name-mon" type="text" value={selMon} onChange={event => setSelMon(event.target.value.toLowerCase())} />
            <button className="search-button" onClick={() => {
              if (selMon != null && selMon.length > 0) {
                navigate(`/${selMon}`)
              } else {
                navigate(`/`)
              }
              setSelMon("");
            }}>Find Pokemon</button>
          </div>
          <div className="search-div">
            <label htmlFor="id-mon">Search a Pokemon by ID: </label>
            <input id="id-mon" type="number" value={selID} onChange={event => setSelID(event.target.value)} />
            <button className="search-button" onClick={() => {
              if (selID != null && selID.length > 0) {
                navigate(`/id/${selID}`);
              } else {
                navigate(`/`);
              }
              setSelID("");
            }}>Find Pokemon</button>
          </div>
        </div>
      );
    case "fact":
      return (
        <div className="search">
          {byLikes && <button className="search-button sort-button" onClick={() => {
            dispatch(sortFactsByLikes())
          }}>Sort by Likes</button>}
          {!byLikes && <button className="search-button sort-button" onClick={() => {
            dispatch(sortFactsById())
          }}>Sort by ID</button>}
          <div className="search-div">
            <label htmlFor="mon-fact">Input a Pokemon to find associated facts: </label>
            <input id="mon-fact" type="text" value={selMon} onChange={event => setSelMon(event.target.value.toLowerCase())} />
            <button className="search-button" onClick={() => {
              if (selMon != null && selMon.length > 0) {
                navigate(`/facts/${selMon}`);
              } else {
                navigate(`/facts`);
              }
              setSelMon("");
            }}>Find Facts</button>
          </div>
          <div className="search-div">
            <label htmlFor="id-fact">Input an ID to find a specific fact: </label>
            <input id="id-fact" type="number" value={selID} onChange={event => setSelID(event.target.value)} />
            <button className="search-button" onClick={() => {
              if (selID != null && selID.length > 0) {
                navigate(`/facts/id/${selID}`);
              } else {
                navigate(`/facts`);
              }
              setSelID("");
            }}>Find Fact</button>
          </div>
        </div>
      );
    default:
      break;
  }
}