var eventType = document.querySelector("#event-type"); 
var keyEventsEl = document.querySelector("#key-events");

function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

