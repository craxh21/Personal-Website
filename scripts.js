document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// document.addEventListener("mousemove", (e) => {
//     let trail = document.createElement("div");
//     trail.classList.add("cursor-trail");
//     document.body.appendChild(trail);
//     trail.style.left = `${e.pageX}px`;
//     trail.style.top = `${e.pageY}px`;

//     setTimeout(() => {
//         trail.remove();
//     }, 500);
// });

const cursor = document.querySelector(".gradient-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});



