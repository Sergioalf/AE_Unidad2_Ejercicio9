var mongoose = require ('mongoose');
var schema = require ('./schema');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var Article = mongoose.model('Article', schema, 'article');

var article = new Article({
    title: "The seven wonders of the new world",
    author: "Sergio Alfaro",
    body: "Great Wall of China, Petra, Christ the Redeemer, Machu Pichu, Chichen Itza, Colosseum, Taj Mahal, Great Pyramid of Giza",
    comments: [ {Body:"Good Job", date:"<2019-01-01>"}],
    date: "<2018-12-31>",
    meta: {votes:5, favs:5}
});

article.save((error) => {
    if (error) {
        console.log(error);
    }
    console.log("Saved!!");
});