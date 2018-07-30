function hideWhenClicked(e) {
  let $target = $(e.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
