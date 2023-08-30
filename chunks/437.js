
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