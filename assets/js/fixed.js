(function() {
    let navbar = document.querySelector("#navegacion");
    let main = document.querySelector("main");
    let navbarHeight= navbar.getBoundingClientRect().height; 
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;
    
    function udaptePos() {
        windowPos = window.scrollY
    }

    function onScroll() {
        udaptePos();

        if(windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove("open");
            
            navbar.classList.add("navbar-fixed"),
            main.style.cssText = "margin-top: " + navbarHeight + "px";
            isFixed = true;

        } else if (windowPos < breakpoint) {
            navbar.classList.remove("navbar-fixed");
            main.style.cssText = "margin-top " + 0;
            isFixed = false;
        }
    } 


    document.addEventListener("scroll", onScroll)

     
}) ()