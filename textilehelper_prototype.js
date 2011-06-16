function replaceSelection(field,opening,closing){
  var textarea = field;
  var before = opening;
  var after = closing;
  var sel_start = textarea.selectionStart;
  var sel_end = textarea.selectionEnd;
  var text_length = textarea.value.length;
  var sel = textarea.value.substring(sel_start,sel_end);
  if (sel.length == 0) {
    // console.log('nothing selected');
    textarea.value = textarea.value.substring(0,sel_start) + before + sel + after +  textarea.value.substring(sel_end,text_length);
    textarea.focus(); 
    textarea.setSelectionRange(sel_start+1, sel_start+1);
  } else {
    textarea.value = textarea.value.substring(0,sel_start) + before + sel + after +  textarea.value.substring(sel_end,text_length);
    textarea.focus(); 
    textarea.setSelectionRange(sel_end+2, sel_end+2);
  }
}