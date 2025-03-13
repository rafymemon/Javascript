
const randomColor = function () {
    const hex = '123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; //give a random number between 0 and 15
    }
    return color;
};

let intervalId;

const startChangingColor = function () {
    function changebgColor() {
        document.body.style.backgroundColor = randomColor();
}
    
if (!intervalId) {
    intervalId =  setInterval(changebgColor, 1000);
}
  

};
const stopChangingColor = function () { 
    clearInterval(intervalId)
    intervalId = null; // to make sure that the interval is stopped and saving memory
};


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


