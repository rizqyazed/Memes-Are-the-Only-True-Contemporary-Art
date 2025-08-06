$ = document.getElementById.bind(document);

var socket = new WebSocket("ws://localhost:9001/");

socket.addEventListener("open", (event) => {
  console.log("WebSocket connection established!");
  // Sends a message to the WebSocket server.
});

socket.addEventListener("close", (event) => {
  console.log("WebSocket connection closed:", event.code, event.reason);
});
/* when enter is pressed send the message to Pd */
function send() {
  socket.send(["socket"]);
  console.log("sending socket signal");
}

(function () {
  var percentage = 100;
  let fryingAmount = 20;
  var f = function () {
    // do something
    console.log(`frying...${percentage}%`);
    var img = document.getElementById("fried");
    img.style.filter = `saturate(${percentage}%)`;
    percentage += fryingAmount;
    send();
  };
  window.setInterval(f, 60000);
  // window.setInterval(f, 11000);
  f();
})();
