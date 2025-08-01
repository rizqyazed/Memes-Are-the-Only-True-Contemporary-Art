$ = document.getElementById.bind(document);

var ws = new WebSocket("ws://localhost:9001/");

ws.onopen = function () {
  console.log("connected!");
};

ws.onclose = function () {
  console.log("connection lost");
};

/* when enter is pressed send the message to Pd */
function send() {
  ws.send(["socket"]);
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
  // window.setInterval(f, 60000 * 5);
  window.setInterval(f, 6000);
  f();
})();
