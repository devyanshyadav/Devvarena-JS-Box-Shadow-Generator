
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


