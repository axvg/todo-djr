import axios from 'axios'
import { useEffect, useState } from 'react';

const url = 'http://localhost:8000/api/'

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {    
  console.log('effect')    
  axios
    .get(url)      
    .then(response => {            
      setNotes(response.data) 
    }) 
  }, [])
  console.log('render', notes.length, 'notes')

  return (
    <div className="App">
      <ul>
      { notes.map(note => <li key={note.id}>{note.title}<p>{note.body}</p></li>)}
      </ul>
    </div>
  );
}

export default App;
