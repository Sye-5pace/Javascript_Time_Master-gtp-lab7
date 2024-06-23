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

// Challenge #2
// Task: Clock object constructor (using new Date() directly)
const Clock = () => {
  const now = new Date();
  this.hours = now.getHours();
  this.minutes = now.getMinutes();
  this.seconds = now.getSeconds();
}

// Create a new Clock object instance with the current time
//  and access to its properties
const clock = new Clock();
console.log(`Current time: ${clock.hours}:${clock.minutes}:${clock.seconds}`);