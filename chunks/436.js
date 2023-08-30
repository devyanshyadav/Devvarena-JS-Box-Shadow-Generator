let simpleCssboxShadow = document.querySelector('.SimpleCssboxShadow')


simpleCssboxShadow.addEventListener('click', () => {
    getPreviewboxShadowCode.textContent =
        `-webkit-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
-moz-box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};
box-shadow: ${checkInset} ${boxShadowTranspRange.value}px ${boxShadowBdrRange.value}px ${boxShadowBlurRange.value}px ${boxShadowOutlineRange.value}px ${boxShadowColorSlide.value};`
})

