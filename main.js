
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/doWork2.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}









// function sayHI() {
//   worker.postMessage({'cmd': 'start', 'msg': 'Hi'});
// }

// function stop() {
//   // worker.terminate() from this script would also stop the worker.
//   worker.postMessage({'cmd': 'stop', 'msg': 'Bye'});
// }

// function unknownCmd() {
//   worker.postMessage({'cmd': 'foobard', 'msg': '???'});
// }

// var worker = new Worker('doWork2.js');

// worker.addEventListener('message', function(e) {
//   document.getElementById('result').textContent = e.data;
// }, false);