function replaceSelection(field,opening,closing){
  var textarea = field;
  var before = opening;
  var after = closing;
  var sel_start = textarea[0].selectionStart;
  var sel_end = textarea[0].selectionEnd;
  var text = textarea.val();
  var text_length = textarea.val().length;
  var sel = textarea.val().substring(sel_start,sel_end);

  if (sel.length == 0) {
    textarea.val(textarea.val().substring(0,sel_start) + before + sel + after +  textarea.val().substring(sel_end,text_length));
    textarea.focus(); 
    textarea[0].setSelectionRange(sel_start+1, sel_start+1);
  } else {
    textarea.val(textarea.val().substring(0,sel_start) + before + sel + after +  textarea.val().substring(sel_end,text_length));
    textarea.focus(); 
    textarea[0].setSelectionRange(sel_end+2, sel_end+2);
  }
  return false;
};

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