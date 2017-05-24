var apiKey = require('./../.env').apiKey;

News = function(){
};

News.prototype.newsAgency = function(source, displayNews) {
  $.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey).then(function(response) {
    displayNews(response.articles);
  }).fail(function(error){
    console.log(error);
  });
};

exports.newsModule = News;
//
// arrayNews = response.articles;
// articleTitles = [];
// arrayNews.forEach(function(newsTitle){
//   articleTitles.push(newsTitle.title);
// });
