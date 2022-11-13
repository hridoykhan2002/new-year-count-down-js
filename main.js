// selecting elements
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const alert = document.querySelector('.alert');

// variable
const getTime = new Date(2022,11,31,0,0,0);
const getDay = getTime.getDate();
const getHour = getTime.getHours();
const getMin = getTime.getMinutes();
const getSec = getTime.getSeconds();



const setUptime = () =>{
    const presentDate = new Date().getTime();
    const remaingTime = getTime - presentDate;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMins = 60*1000;
    const days = Math.floor(remaingTime / oneDay);
    const hours = Math.floor(remaingTime / oneHour);
    const mins = Math.floor(remaingTime / oneMins);
    const secs = Math.floor(remaingTime / 1000);
    if(days < 9){
        day.textContent = `0${days}`
    }else{
        day.textContent = days;
    }
    if(days <= 0){
        day.textContent = "0"
    }
    if(hours < 9){
        hour.textContent = `0${hours}`
    }else{
        hour.textContent = hours;
    }
    if(hours <= 0){
        hour.textContent = "0"
    }
    if(mins < 9){
        min.textContent = `0${mins}`
    }else{
        min.textContent = mins;
    }
    if(mins <= 0){
        min.textContent = "0"
    }
    if(secs < 9){
        sec.textContent = `0${secs}`
    }else{
        sec.textContent = secs;
    }
    if(secs <= 0){
        sec.textContent = "0"
        alert.textContent = "The countdown is over now!"
    }
}
setInterval(setUptime,1000)



