const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        };
    });
});

const hiddenElements = document.querySelectorAll('.b');
hiddenElements.forEach(el => observer.observe(el));