console.log(global)

setTimeout(() => {
    console.log('its a timeout');
    clearInterval(int)
    
},3000);
const int = setInterval(() => {
    
    console.log('it runs in the interval')
},1000)
console.log(__filename);
console.log(__dirname);