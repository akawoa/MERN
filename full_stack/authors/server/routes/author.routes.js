const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.findOneSingleAuthor);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.put("/api/authors/update/:id", AuthorController.updateExistingAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAnExistingAuthor);
}