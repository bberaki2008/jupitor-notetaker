const note = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the note
note.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting note
note.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { noteTitle, noteText } = req.body;

  // If all the required properties are present
  if (noteTitle && noteText) {
    // Variable for the object we will save
    const newNote = {
      noteTitle,
      noteText,
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});

module.exports = note;
