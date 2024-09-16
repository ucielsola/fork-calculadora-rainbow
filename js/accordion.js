var acc = document.querySelectorAll(".title");
var i;

acc.forEach((acc, index) => {
    var panel = acc.nextElementSibling;
    var chevron = acc.querySelector(".chevron");
    let initialMaxHeight = panel.scrollHeight + "px";
    acc.addEventListener("click", function() {
        acc.classList.toggle("active");
        if (panel.style.maxHeight === initialMaxHeight) {
            panel.style.maxHeight = "0px";
            chevron.style.transform = "rotate(0)";
        } else {
            panel.style.maxHeight = initialMaxHeight;
            chevron.style.transform = "rotate(180deg)";
        }
    });
});