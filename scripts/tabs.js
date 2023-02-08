let TabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
    TabsFieldElems = document.querySelectorAll('[data-tabs-field]');
    // sectionTitle = document.querySelectorAll('.section__title.design__title');






TabsHandlerElems.forEach((tabsHandlerElem) => {
    tabsHandlerElem.addEventListener('click', () => {
        if (!tabsHandlerElem.classList.contains('design-list__item_active')) {
            TabsHandlerElems.forEach((item) => {
                item.classList.remove('design-list__item_active')
            })

            // sectionTitle[i].classList.remove('hidden');

            tabsHandlerElem.classList.add('design-list__item_active');
            let dataAttr = tabsHandlerElem.getAttribute('data-tabs-handler');

            TabsFieldElems.forEach((tabsFieldElem) => {
                tabsFieldElem.classList.add('hidden');
                if (tabsFieldElem.getAttribute('data-tabs-field') == dataAttr) {
                    tabsFieldElem.classList.remove('hidden');
                }
            })

        }
    })
})