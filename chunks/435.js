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

