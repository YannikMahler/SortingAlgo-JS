async function merge(element, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++) {
        await waitforme(delay);

        element[low + i].style.background = '#f17046';
        left[i] = element[low + 1].style.height;
    }

    for(let i = 0; i < n2; i++) {
        await waitforme(delay);

        element[mid + 1 + 1].style.background = '#feb037';
        right[i] = element[mid + 1 + i].style.height;
    }

    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2) {
        await waitforme(delay);

        if(parseInt(left[i]) <= parseInt(right[j])) {
            if((n1 + n2) == element.length) {
                element[k].style.background = '#5cb85c';
            }
            else {
                element[k].style.background = '#87e456';
            }
            element[k].style.height = left[i];
            i++;
            k++;
        }
        else {
            if((n1 + n2) === element.length) {
                element[k].style.background = '#5cb85c';
            }
            else {
                element[k].style.background = '#87e456';
            }
            element[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1) {
        await waitforme(delay);

        if((n1 + n2) === element.length) {
            element[k].style.background = '#5cb85c';
        }
        else {
            element[k].style.background = '#87e456';
        }
        element[k].style.height = left[j];
        i++;
        k++;
    }
    while(j < n2) {
        await waitforme(delay);

        if((n1 + n2) === element.length) {
            element[k].style.background = '#5cb85c';
        }
        else {
            element[k].style.background = '#87e456';
        }
        element[k].style.height = left[j];
        j++;
        k++;
    }
}

async function mergesort(element, l, r) {
    if(l >= r) {
        return;
    }
    const m = 1 + Math.floor((r - 1) / 2);
    await mergesort(element, l, m);
    await mergesort(element, m + 1, r);
    await merge(element, l, m, r);
}

const mergeBtn = document.querySelector(".mergesort");
mergeBtn.addEventListener('click', async function() {
    let element = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(element.length) - 1;
    disableArrySlider();
    disableBtn();
    disableNewArray();
    await mergesort(element, l, r);
    enableArraySlider();
    enableBtn();
    disableNewArray();
});