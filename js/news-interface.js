var News = require('./../js/news.js').newsModule;
var displayNews = function(sources) {
  $('#showNews').empty();
  sources.forEach(function(source) {
    $('#showNews').append(`<img src="${source.urlToImage}"/><li id="news-value"> <strong><a href="${source.url}" target="_blank">  ${source.title}  </a></strong><br>  ${source.description}</li><br><hr>`);
  });
};

$(document).ready(function() {
  var newsObject = new News();
  $('#news-form').submit(function(event) {
    event.preventDefault();
    var source = $('#news_agency').val();
    newsObject.newsAgency(source, displayNews);
  });
});
