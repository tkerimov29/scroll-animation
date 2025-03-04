let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let rect = sec.getBoundingClientRect(); // Get the position of the section relative to the viewport
        let top = rect.top;
        let bottom = rect.bottom;

        // Check if any part of the section is in the viewport
        if(top < window.innerHeight && bottom > 0) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
}
