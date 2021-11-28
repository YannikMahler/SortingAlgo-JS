async function bubble() {
    const element = document.querySelectorAll('.bar');
    for(let i = 0; i < element.length-1; i++) {
        for(let j = 0; j < element.length-i-1; j++) {
            element[j].style.background = '#f0ad4e';
            element[j+1].style.background = '#f0ad4e';
            if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)) {
                await waitforme(delay);
                swap(element[j], element[j+1]);
            }
            element[j].style.background = '#5bc0de';
            element[j+1].style.background = '#5bc0de';
        }
        element[element.length-i-1].style.background = '#5cb85c';
    }
    element[0].style.background = '#5cb85c';
};

const bubbleBtn = document.querySelector(".bubblesort");
bubbleBtn.addEventListener('click', async function() {
    disableArrySlider();
    disableBtn();
    disableNewArray();
    await bubble();
    enableArraySlider();
    enableBtn();
    disableNewArray();
});


