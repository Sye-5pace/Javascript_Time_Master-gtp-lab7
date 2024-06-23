document.addEventListener('DOMContentLoaded',()=>{

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

  // Challenge #2&5: Object-Oriented Clock
  // Task: Clock object constructor (using new Date() directly)
  // Clock object constructor (using new Date() directly)
  function Clock(currentTime, timeZone, format) {
    const now = currentTime ? new Date(currentTime) : new Date();
    const userOffset = now.getTimezoneOffset() / 60;
    if (timeZone) {
      const zoneOffset = timeZone === 'UTC' ? 0 : parseInt(timeZone.slice(3));
      now.setUTCHours(now.getUTCHours() - userOffset + zoneOffset); 
    } else {
      now.setUTCHours(now.getUTCHours() - userOffset); 
    }
    this.hours = format === '12' ? ((now.getUTCHours() + 12) % 12 || 12) : now.getUTCHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    this.format = format;
  };

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

  //Challenge #5: Clock customization
  // Get formatted time in 24-hour format
  const twentyFourTime = clock.getFormattedTime();
  console.log(`Task 3,Formatted time (24-hour): ${twentyFourTime}`)

  // Get formatted time in 12-hour format
  const twelveHourTime = clock.get12HourTime();
  console.log(`Task 3, Formatted time (12-hour): ${twelveHourTime}`);


  //Challenge #4 & 5: Display the clock on webpage,Clock customize with controls 
  // and colors
  // Update clock display function
  const updateClockDisplay = () => {
    const selectedFormat = document.getElementById('format').value;
    const selectedTimeZone = document.getElementById('timezone').value;
    const clock = new Clock(null, selectedTimeZone, selectedFormat); 
    const formattedTime = clock.getFormattedTime();
    const clockElement = document.getElementById('clock');
    // console.log(`Current time ${formattedTime}`)
    clockElement.textContent = formattedTime;
    clockElement.style.color = document.getElementById('color-picker').value;
  };


  
  // Handle format and time zone 
  const handleControlChange = () => {
    updateClockDisplay();
  };
  
  // Event Listeners for format and time zone selection
  const formatSelect = document.getElementById('format');
  const timezoneSelect = document.getElementById('timezone');
  
  formatSelect.addEventListener('change', handleControlChange);
  timezoneSelect.addEventListener('change', handleControlChange);
  
  setInterval(updateClockDisplay, 1000);
})
