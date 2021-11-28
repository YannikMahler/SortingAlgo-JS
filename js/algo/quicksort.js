async function lomutoPartition(element, l , r) {
    let i = l - 1;
    element[r].style.background = ' #da0000 ';
    for(let j = l; j <= r - 1; j++) {
        element[j].style.background = '#feb037';
        await waitforme(delay);

        if(parseInt(element[j].style.height) < parseInt(element[r].style.height)) {
            i++;
            swap(element[i], element[j]);
            if(i != j) element[j].style.background = '#f17046';
            await waitforme(delay);
        }
        else {
            element[j].style.background = '#cf07d8';
        }
    }
    i++;
    await waitforme(delay);
    swap(element[i], element[r]);

    element[r].style.background = '#cf07d8';
    element[i].style.background = '#5cb85c';

    await waitforme(delay);

    for(let k = 0; k < element.length; k++) {
        if(element[k].style.background != '#5cb85c')
            element[k].style.background = '#5bc0de';
    }

    return i;
};

async function quicksort(element, l, r) {
    if(l < r) {
        let pivot = await lomutoPartition(element, l, r)
        await quicksort(element, l, pivot - 1);
        await quicksort(element, pivot + 1, r);
    }
    else{
        if(l >= 0 && l < element.length && r < element.length) {
            element[r].style.background = '#5cb85c';
            element[l].style.background = '#5cb85c';
        }
    }
};

const quickBtn = document.querySelector(".quicksort");
quickBtn.addEventListener('click', async function() {
    let element = document.querySelectorAll('.bar');
    let l = 0;
    let r = element.length - 1;
    disableArrySlider();
    disableBtn();
    disableNewArray();
    await quicksort(element, l, r);
    enableArraySlider();
    enableBtn();
    disableNewArray();
});