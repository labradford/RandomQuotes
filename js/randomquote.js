// Objective: Build a CodePen.io app that is functionally similar to this: 
//https://codepen.io/FreeCodeCamp/full/ONjoLe/.

// Fulfill the below user stories. Use whichever libraries or APIs you need. 
//Give it your own personal style.

// User Story: I can click a button to show me a new random quote.

// User Story: I can press a button to tweet out a quote.

// Remember to use Read-Search-Ask if you get stuck.

// When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

// You can get feedback on your project by sharing it with your friends on Facebook.

$(document).ready(function() {
  var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  $("#getQuote").on("click", function() {
    $.ajax({
      url:url,
      success: function(d) {
        $("#quoteTitle").html("<h2>" + d[0].title + "</h2>");
        $("#quoteContent").html("<p>" + d[0].content + "</p>");
        var content = d[0].content;
        var title = d[0].title;
        var tweet = encodeURIComponent(content + " --" + title);
        $("#tweetButton").attr("href", "https://twitter.com/intent/tweet?hashtags=designquote&text=" + tweet);
      },
      cache: false
	  });
  });  
});