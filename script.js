//This is for px indicator
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = `${val}px`;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

//This is for iframe
let boxShadowPreviewFrame = document.querySelector('.boxShadowPreviewFrame');
let boxShadowPreviewFrameDoc = boxShadowPreviewFrame.contentDocument || boxShadowPreviewFrame.contentWindow.document;
let boxShadowPreviewFrameBody = boxShadowPreviewFrameDoc.querySelector('body');
boxShadowPreviewFrameBody.style.cssText = `
    width:100%;
    background-color:#F3F4F9;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    overflow:hidden;
`

let boxShadowPreviewElement = boxShadowPreviewFrameDoc.createElement('div');
boxShadowPreviewElement.classList.add('boxShadowPreviewElement');
boxShadowPreviewFrameBody.appendChild(boxShadowPreviewElement);



let boxShadowTranspRange = document.querySelector('#boxShadowTranspRange');
let boxShadowBlurRange = document.querySelector('#boxShadowBlurRange');
let boxShadowBdrRange = document.querySelector('#boxShadowBdrRange');
let boxShadowColorSlide = document.querySelector('#boxShadowColorSlide');
let boxShadowOutlineRange = document.querySelector('#boxShadowOutlineRange');
let getPreviewboxShadowCode = document.querySelector('.getPreviewboxShadowCode')
let checkForInset = document.querySelector('#checkForInset')






boxShadowTranspRange.addEventListener('input', () => {
    boxShadowGenExecute()
});

boxShadowBlurRange.addEventListener('input', () => {
    boxShadowGenExecute()
});


boxShadowOutlineRange.addEventListener('input', () => {
    boxShadowGenExecute()
});


boxShadowBdrRange.addEventListener('input', () => {

    boxShadowGenExecute();

});


boxShadowColorSlide.addEventListener('input', () => {
    boxShadowGenExecute();

});

checkForInset.addEventListener('click', () => {
    boxShadowGenExecute();
})

let checkInset = '';


function boxShadowGenExecute() {
    if (checkForInset.checked) {
        checkInset = 'inset';
    }
    else {
        checkInset = '';
    }

    boxShadowPreviewFrameDoc.querySelector('.boxShadowPreviewElement').style.cssText = `

    width:300px;
    height:300px;
    border-radius:4px;
    background-color:white;
-webkit-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
-moz-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
`


    getPreviewboxShadowCode.textContent = `-webkit-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
-moz-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};`


    //This is to remove empty space from the text
    const pre = getPreviewboxShadowCode;
    const lines = pre.textContent.split('\n').filter(line => line.trim() !== '');
    pre.textContent = lines.join('\n');
}


let simpleCssboxShadow = document.querySelector('.SimpleCssboxShadow')


simpleCssboxShadow.addEventListener('click', () => {
    getPreviewboxShadowCode.textContent =
        `-webkit-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
-moz-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};`
})


//Copy code algorithm;
let copyboxShadowCode = document.querySelector('.copyboxShadowCode');
let whenCodeEcopied = document.querySelector('.whenCodeEcopied')
copyboxShadowCode.addEventListener('click', () => {

    let copyboxShadowText = getPreviewboxShadowCode;
    let range = document.createRange();
    range.selectNode(copyboxShadowText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    // Alert the copied text
    if (document.execCommand("copy")) {
        whenCodeEcopied.classList.toggle('active');
        setTimeout(() => {
            whenCodeEcopied.classList.toggle('active');
        }, 1000)
    }



})