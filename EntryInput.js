import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { addNewNick, addNewFact } from './actions';

export function EntryInput(props) {
    const [newId, setNewId] = useState("");
    const [newEntry, setNewEntry] = useState("");
    const [newMon, setNewMon] = useState("");
    const dispatch = useDispatch();
    const type = props.type;
    switch (type) {
        case "nick":
            return (
                <div className="nick-input">
                    <div>
                        <label htmlFor="nick-id-input">New Nickname ID</label>
                        <input id="nick-id-input" className="input" type="number" value={newId} onChange={event => setNewId(event.target.value)} /><br />
                    </div>
                    <div>
                        <label htmlFor="nick-mon-input">New Nickname Pokemon</label>
                        <input id="nick-mon-input" className="input" type="text" value={newMon} onChange={event => setNewMon(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="new-nick-input">New Nickname ({10 - newEntry.length})</label>
                        <input id="new-nick-input" className="input" type="text" maxLength="10" value={newEntry} onChange={event => setNewEntry(event.target.value)} /><br />
                    </div>
                    <div className="buttons">
                        <button onClick={() => {
                            dispatch(addNewNick(newId, newEntry, newMon));
                            setNewId("");
                            setNewEntry("");
                            setNewMon("");
                        }}>Add Nick</button>
                    </div>
                </div>
            );
        case "fact":
            return (
                <div className="fact-input">
                    <label htmlFor="fact-id-input">New Fact ID</label>
                    <input id="fact-id-input" type="number" value={newId} onChange={event => setNewId(event.target.value)} />
                    <label htmlFor="fact-mon-input">New Fact Pokemon</label>
                    <input id="fact-mon-input" type="text" value={newMon} onChange={event => setNewMon(event.target.value)} />
                    <label htmlFor="new-fact-input">New Fact ({150 - newEntry.length})</label>
                    <input id="new-fact-input" type="text" maxLength="150" value={newEntry} onChange={event => setNewEntry(event.target.value)} />
                    <div className="buttons">
                        <button onClick={() => {
                            dispatch(addNewFact(newId, newEntry, newMon));
                            setNewId("");
                            setNewEntry("");
                            setNewMon("");
                        }}>Add Fact</button>
                    </div>
                </div>
            );
        default:
            break;
    }
}