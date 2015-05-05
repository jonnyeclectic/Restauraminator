// global data store
var data = { categories: [] };

// view controller
var CategoryListView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  render: function() {
    var template = _.template($("#category-list-template").html())(data);
    this.$el.html(template);
  }
});

// main function
function main() {
  // start progress bar
  NProgress.configure({ trickleRate: 0.2, trickleSpeed: 800 });
  NProgress.start();

  // get the headlines and display them
  $.ajax({
    url: 'http://www.bbc.com',
    type: 'GET',
    success: function(result) {
      var $section = $(result.responseText).find('.more').find('.container');
      var $categories = $section.find('.grid_5');

      // for each category, add its name and its headlines to the data store
      $categories.each(function() {
        // gather the data
        var name = $(this).find(".module_title").text().trim();
        var headings = [];
        $(this).find(".media_link").each(function() {
          headings.push($(this).text().trim());
        });

        // add it to the store
        data.categories.push({ name: name, headings: headings });
      });

      // display the data
      var categoryListView = new CategoryListView({ el: $("#category-list") });
      NProgress.done();
    }
  });
}
