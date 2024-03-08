console.clear();

window.addEventListener("DOMContentLoaded", () => {
    const modalBtn = document.querySelector("#button-js");
    const modal = document.querySelector("#modal-js");
    const navbarBtn = document.querySelector("#navbar-burger-js")
    const navbarMenu = document.querySelector("#navbar-mobile-js")

    modalBtn.addEventListener("click", () => {
        modal.classList.add("show")
    })

    modal.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("show") ||
            e.target.classList.contains("modal__wrap") ||
            e.target.classList.contains("modal__close") ||
            e.target.tagName === "svg"
        ) {
            modal.classList.remove("show")
        }
    })

    navbarBtn.addEventListener("click", () => {
        navbarBtn.classList.toggle("active")
        navbarMenu.classList.toggle("hidden")
        document.body.classList.toggle("no-scroll")
    })

    window.addEventListener("resize", () => {
        navbarBtn.classList.remove("active")
        navbarMenu.classList.add("hidden")
        document.body.classList.remove("no-scroll")
    })
})
