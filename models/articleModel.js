const Mongoose = require('mongoose');

const articleSchema = new Mongoose.Schema(
    {
        title: String,
        content: String,
        description: String,
        author: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const Article = Mongoose.model('Article',articleSchema);
module.exports = Article;