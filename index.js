// open - close burger menu var1
//// document.addEventListener("DOMContentLoaded", function() {
// document.getElementById("burger").addEventListener("click", function() {
//    document.querySelector("header").classList.toggle("open")
// })
// })


// my open - close burger menu var2
//
const header = document.querySelector('.header');
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("burger").addEventListener("click", function() {
   header.classList.toggle("open")
})
// my click out side burger menu
document.addEventListener('click', (e) => {
	const isMenu = e.composedPath().includes(header);

if (isMenu === false) {
		header.classList.remove('open')
	}
})
})

