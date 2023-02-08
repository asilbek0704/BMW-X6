let moreBtn = document.querySelectorAll('.more'),
    modal = document.querySelector('.modal');

const openModal = () => {
    modal.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
}

moreBtn.forEach((btn) => {
    btn.addEventListener('click', openModal);
})

modal.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('modal__close') ||
        target.classList.contains('overlay')) {
        closeModal();
    }
})