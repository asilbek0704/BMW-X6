let featureLink = document.querySelectorAll('.feature__link'),
    featureSub = document.querySelectorAll('.feature-sub');


featureLink.forEach((btn, i) => {

    btn.addEventListener('click', () => {

        if (btn.classList.contains('feature__link_active')) {
            btn.classList.remove('feature__link_active');
            featureSub[i].classList.add('hidden');
        } else {
            featureLink.forEach((btn, i) => {
                btn.classList.remove('feature__link_active');
                featureSub[i].classList.add('hidden')
            })
            btn.classList.add('feature__link_active');
            featureSub[i].classList.remove('hidden');
        }

    })
})