(function () {
    let navbar = document.querySelector("#navegacion");
    let hamburger = document.querySelector("#hamburgesa");
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("open");
    })
}) ()