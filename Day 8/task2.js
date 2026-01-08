// TASK 2: Callback Function Example
// Problem Definition:  Create a function that accepts a callback and executes it after 2 seconds.

function doTask(callback) {
  setTimeout(function () {
    callback("Task Completed..!!");
  }, 2000);
}

doTask(function (message) {
  console.log(message);
});
