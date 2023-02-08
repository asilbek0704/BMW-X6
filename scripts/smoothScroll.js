let smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
// vibirayet vse ssilki s href = #...(s prodoljeniyem, tak kak ukazan znak "^"), krome tex u kotorix href = #.

smoothScrollElems.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        let id = link.getAttribute('href').substring(1);

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        })
    })
})


