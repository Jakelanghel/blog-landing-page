const navToggle = document.querySelector(".nav-toggle");
const navBtns = document.querySelectorAll(".nav-btn");

const openNav = () => {
    document.body.classList.toggle("nav-open");
};

const toggleDropDown = (e) => {
    let target = e.target;
    if (target.classList.contains("arrow-img")) {
        target = target.parentNode;
    }
    const innerTxt = target.innerText.toLowerCase();
    const dropDowns = document.querySelectorAll(".container-drop-down");
    dropDowns.forEach((element) => {
        if (element.id === innerTxt) {
            element.classList.toggle("open-drop-down");
            console.log(element);
        }
    });
};

navToggle.addEventListener("click", openNav);
navBtns.forEach((btn) => {
    btn.addEventListener("click", toggleDropDown);
});
