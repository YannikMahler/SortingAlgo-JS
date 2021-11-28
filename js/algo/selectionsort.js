async function selectionsort(element) {
    for(let i = 0; i < element.length; i++) {
        let min_index = i;
        element[i].style.background = '#003bd9';
        for(let j = i + 1; j < element.length; j++) {
            element[j].style.background = '#da0000';

            await waitforme(delay);
            if(parseInt(element[j].style.height) < parseInt(element[min_index].style.height)) {
                if(min_index !== i) {
                    element[min_index].style.background = '#5bc0de';
                }
                min_index = j;
            }
            else{
                element[j].style.background = '#5bc0de';
            }
        }
        await waitforme(delay);
        swap(element[min_index], element[i]);
        element[min_index].style.background = '#5bc0de';
        element[i].style.background = '#5cb85c';
    }
}

const selectionBtn = document.querySelector(".selectionsort");
selectionBtn.addEventListener('click', async function() {
    let element = document.querySelectorAll('.bar');
    disableArrySlider();
    disableBtn();
    disableNewArray();
    await selectionsort(element);
    enableArraySlider();
    enableBtn();
    disableNewArray();
});