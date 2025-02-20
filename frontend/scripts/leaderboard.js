import * from ".backend\src\controller\index.js"

async function fetchAsync ("localhost:3000") {
    let response = await fetch("localhost:3000");
    let data = await response.json();
    return data;
  }