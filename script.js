// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        course.addEventListener("mouseenter", () => {
            course.style.backgroundColor = "#f9f9f9";
        });

        course.addEventListener("mouseleave", () => {
            course.style.backgroundColor = "#fff";
        });
    });
});
