module.exports = (app) => {
    const book = require('../controller/book.controller.js');

    // Create a new Note
    app.post('/notes', book.create);

    // Retrieve all Notes
    app.get('/notes', book.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', book.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', book.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', book.delete);
}