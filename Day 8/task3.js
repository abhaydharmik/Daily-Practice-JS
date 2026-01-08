// TASK 3: Callback Hell Problem
// Problem Definition: Understand why nested callbacks are bad.

setTimeout(function () {
  console.log("Step 1");

  setTimeout(function () {
    console.log("Step 2");

    setTimeout(function () {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
