// console.log('Hello world!');

// example click

// const prices__item = document.querySelector('.prices__item');
// console.log(prices__item);
// prices__item.addEventListener("click", function(){
// console.log('click!!!');
// })

// ACCORDION EXAMPLE

const prices__item = document.querySelectorAll("[data-name='accordion-title']");
// console.log(headers);
prices__item.forEach(function(item){
	// console.log(item);
item.addEventListener('click', function(){
console.log(this);
console.log(this.nextElementSibling);
this.nextElementSibling.classList.toggle('hidden');

})


})


