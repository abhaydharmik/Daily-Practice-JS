// TASK 6: Loading State Logic (Important for React)
// Problem Definition: Simulate loading state while fetching data.

async function fetchData() {
  let loading = true;
  console.log("Loading:", loading);

  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  loading = false;
  console.log("Loading:", loading);
  console.log("Data:", data);
}

fetchData();
