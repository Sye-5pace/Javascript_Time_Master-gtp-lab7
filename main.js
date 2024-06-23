//Challenge #1 
// Task: Creating a Javascript Date object to represent current time 
const getCurrentTime =()=> {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  console.log(`Current Time: ${hour}:${minute}:${second}`);
}

getCurrentTime();