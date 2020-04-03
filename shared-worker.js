onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function (e) {
        fetch("result-from-fetch.json")
        .then(r => r.json())
        .then(data => {
            port.postMessage(data);
        });
    }
  };
