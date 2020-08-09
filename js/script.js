function dropDown(id) {
  document.getElementById(id).classList.toggle("show");
}


// window.onclick = function(e) {
//   if (!e.target.matches('.keki-dropdown')) {
//   var myDropdown = document.getElementById("myDropdown-1");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }

window.onclick = e => {
    if (!e.target.classList.contains('dropdown-element')) {
        let show = document.querySelectorAll('.show');
        if (show.length > 0) {
            show.forEach(item => {
                item.classList.remove('show');
            })
        }
    }
}