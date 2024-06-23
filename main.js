//Challenge #1 : Time Object Basics
// Task: Creating a Javascript Date object to represent current time 
const getCurrentTime =()=> {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  console.log(`Task 1 ,Current Time: ${hour}:${minute}:${second}`);
}

getCurrentTime();

// Challenge #2: Object-Oriented Clock
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
console.log(`Task 2,Current time: ${clock.hours}:${clock.minutes}:${clock.seconds}`);


//Challenge #3: Time formatting
// Task: Add method to the clock object for formatting time:
// getFormattedTime(),get12HourTime
Clock.prototype.getFormattedTime = function (){
  const paddedHours = this.hours.toString().padStart(2,0);
  const paddedMinutes = this.minutes.toString().padStart(2,0);
  const paddedSeconds = this.seconds.toString().padStart(2,0);

  return `${paddedHours}: ${paddedMinutes}: ${paddedSeconds}`;
}

Clock.prototype.get12HourTime = function () {
  let hour = this.hours;
  const isAm = hour > 12;
  hour = hour % 12 || 12;
  const minutes = this.minutes.toString().padStart(2,'0')
  const period = isAm ? 'AM' : 'PM';
  return `${hour}:${minutes} ${period}`
}

// Get formatted time in 24-hour format
const twentyFourTime = clock.getFormattedTime();
console.log(`Task 3,Formatted time (24-hour): ${twentyFourTime}`)

// Get formatted time in 12-hour format
const twelveHourTime = clock.get12HourTime();
console.log(`Task 3, Formatted time (12-hour): ${twelveHourTime}`);
