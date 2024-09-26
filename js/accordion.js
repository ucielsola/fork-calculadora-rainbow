var acc = document.querySelectorAll(".title");
var i;

acc.forEach((acc, index) => {
    var panel = acc.nextElementSibling;
    var chevron = acc.querySelector(".chevron");
    let initialMaxHeight = panel.scrollHeight + "px";
    acc.addEventListener("click", function() {
        acc.classList.toggle("active");
        console.log(panel.style.maxHeight)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            chevron.style.transform = "rotate(0)";
        } else {
            panel.style.maxHeight =  `calc(${panel.scrollHeight}px + 1em)`;
            chevron.style.transform = "rotate(180deg)";
        }
    });
});