let arraySize = document.querySelector('#arraySize');

arraySize.addEventListener('input', function() {
    createNewArray(parseInt(arraySize.value));
});


let array = [];

createNewArray();
function createNewArray(NoOfBars = 50) {
    deleteChild();
    
    array = [];
    for (let i = 0; i < NoOfBars; i++) {
        array.push(Math.floor(Math.random() * 140) + 1);
    };
    console.log(array);

    const bars = document.querySelector('#bars')
    for (let i = 0; i < NoOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*4}px`;
        bar.classList.add('bar');
        bar.classList.add('flexItems');
        bar.classList.add('barNo${i}');
        bars.appendChild(bar);
    };

};
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
};

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
};

let delay = 260;

let delaySpeed = document.querySelector('#speed');

delaySpeed.addEventListener('input', function() {
    delay = 320 - parseInt(delaySpeed.value)
    console.log(delaySpeed.value)
});

function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
};

function disableArrySlider() {
    document.querySelector('#arraySize').disabled = true;
};

function enableArraySlider() {
    document.querySelector('#arraySize').disabled = false;
};

function disableBtn() {
    document.querySelector('.bubblesort').disabled = true;
    document.querySelector('.quicksort').disabled = true;
    document.querySelector('.mergesort').disabled = true;
    document.querySelector('.moreBtn').disabled = true;
    
};

function enableBtn() {
    document.querySelector('.bubblesort').disabled = false;
    document.querySelector('.quicksort').disabled = false;
    document.querySelector('.mergesort').disabled = false;
    document.querySelector('.moreBtn').disabled = false;
    
};

function disableNewArray() {
    document.querySelector('.newArray').disabled = true;
};

function enableNewArray() {
    document.querySelector('.newArray').disabled = false;
};

