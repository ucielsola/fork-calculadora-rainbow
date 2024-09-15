var acc = document.querySelectorAll(".title");
var i;

acc.forEach((acc, index) => {
    var panel = acc.nextElementSibling;
    let initialMaxHeight = panel.scrollHeight + "px";
    panel.style.maxHeight = initialMaxHeight;
    setTimeout(() => {
        setTimeout(() => {
            panel.style.maxHeight = "0px";
        }, index * 100);
    }, 500);
    acc.addEventListener("click", function() {
        console.log(initialMaxHeight, panel.style.maxHeight);
        acc.classList.toggle("active");
        if (panel.style.maxHeight === initialMaxHeight) {
            panel.style.maxHeight = "0px";
        } else {
            panel.style.maxHeight = initialMaxHeight;
        }
    });
});