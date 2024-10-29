var modal = document.getElementById("modal");

var open_modal = document.getElementById("open_modal");

var close_modal = document.getElementById("close_modal");

open_modal.onclick = () => {
    modal.style.display = "block";
}

close_modal.onclick = () => {
    modal.style.display = "none";
}
console.log(open_modal);