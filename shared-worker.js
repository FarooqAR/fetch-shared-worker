onconnect = function(e) {
    var port = e.ports[0];
    fetch("result-from-fetch.json")
    .then(r => r.json())
    .then(data => {
        port.postMessage(data);
    });
  };
