function getIt () {
    $('p').click(function Hey() {
      alert ("Hey!")
    }
  )}

function frameIt () {
  $('img').load(function Tasty() {
    $('img[src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg"]').addClass("tasty");
  }
)}


function pressIt () {
  $('input').keypress(function Press() {
  if (key.which == 71) {
    alert ("G was pressed");
  }
  }
)}

function submitIt () {}

$(document).ready(function(){


});
