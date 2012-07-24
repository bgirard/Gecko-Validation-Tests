var SCROLL_INTERVAL = 50;
var SCROLL_TO = 100;
var SCROLL_INC = 5;

var pendingTimeout = null;
var pos = 0;

function scrollDown() {
  pendingTimeout = setTimeout(scrollDown, SCROLL_INTERVAL);
  pos += SCROLL_INC;
  if (pos >= SCROLL_TO)
    pos = 0;
  window.scrollTo(0, pos);
}

document.onkeydown = function() {
  clearTimeout(pendingTimeout);
}

document.addEventListener("DOMContentLoaded", scrollDown, false);
