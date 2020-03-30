window.onload = function () {
    var itemArray = document.getElementsByClassName("flex-item");

    for (let item of itemArray) {
        item.classList.add("circle");
    }

    for (let item of itemArray) {
        item.addEventListener("click", function () {
            if (item.classList.contains("circle")) {
                item.classList.remove("circle");
                item.classList.add("square");
            } else if (item.classList.contains("square")) {
                item.classList.remove("square");
                item.classList.add("diamond");
            } else {
                item.classList.remove("diamond");
                item.classList.add("circle");
            }
        });
    }
}