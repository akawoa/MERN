const { Author } = require('../models/author.model');

// Export a function to get all authors
module.exports.findAllAuthors = (req, res) => {
    Author.find().collation({ locale: "en" }).sort({name:1})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({ message: "Something went wrong",
        error: err }));
};


// Export a function to create an author
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

// Export a function to update an author
module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
    .then(updatedAuthor => res.json({ author: updatedAuthor }))
    .catch(err => res.status(400).json(err))
};


// DELETE
module.exports.deleteAnExistingAuthor = (req, res) => {
    const {id} = req.params
    Author.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}

// Export a function to get a single author
module.exports.findOneSingleAuthor = (req, res) => {
    const {id} = req.params
    Author.findOne({_id: id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
};
