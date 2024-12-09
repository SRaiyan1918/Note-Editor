import React, {useState}  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import About from './components/AboutPage';
import ErrorPage from './components/ErrorPage';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import StopWatch from './components/StopWatch'


function App() {
  const [notes, setNotes] = useState([]);

  // Add a new note
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Delete a note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
	  <Route path="/editor" element={
		<div className="container">
      		    <h1 className="my-4 text-center">Editor</h1>
      		    <AddNote addNote={addNote} />
      		    <NoteList notes={notes} deleteNote={deleteNote} />
    		</div>
	  } />
	  <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
