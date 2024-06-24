const { addNoteHandler,getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes=[
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,    // https://www.dicoding.com/academies/261/discussions/325473
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },{
        method: "DELETE",
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;