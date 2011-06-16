(function($, undefined) {
	var shop;
  $.shop = shop = {
    // Link elements
  	linkClickSelector: 'a[data-textile]',

		handleTextile: function(link) {
			var href = link.attr('href'),
				method = link.data('textile');
		    console.log('handleTextile '+method)
		}
  };

	$(shop.linkClickSelector).live('click.shop', function(e) {
    var link = $(this);

    if (link.data('textile')) {
	    console.log('data-textile link clicked')
      shop.handleTextile(link);
      return false;
    }
  });


})( jQuery );