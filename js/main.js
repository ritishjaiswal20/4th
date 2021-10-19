const countdown = document.querySelector('.countdown');

const launchDate = new Date('Jan 1,2022 13:00:00').getTime();


const intvl = setInterval(() => {
    // get todays date and getTime
    const now = new Date().getTime();


    const distance = launchDate - now;
    // time calculation 
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 20) / (1000 * 60 * 60));
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    countdown.innerHTML =
        `
   <div>${days}<span>Days</span></div> 
   <div>${hours}<span>Hours</span></div>
   <div>${min}<span>Min</span></div>
   <div>${seconds}</div>   
   
   `
    // if launch dare passed 
    if (distance < 0) {
        clearInterval(intvl);
        count.style.color = "#17a2b8";
        countdown.innerHTML = 'launched';
    }





}, 1000);