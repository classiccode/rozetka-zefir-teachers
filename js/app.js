
//Home banner slider
$(document).ready(function(){
	var sliderOptions = {
		prevArrow:'<div class="prev-button"><svg><use href="#chevron-right"></use></svg></div>',
		nextArrow:'<div class="next-button"><svg><use href="#chevron-right"></use></svg></div>'
	};

	$('.home__banner-slider').slick(sliderOptions);
});


// $(document).on('ready', function(){
// 	alert('jQuery is ok');
// });


// $('.header__search form button').on('click', function(){
// 	var searchTerm = $('.header__search form input').val();
// 	alert(searchTerm);
// });zzz


//Search
$(document).on('click', '.header__search form button', function(){
	var searchTerm = $('.header__search form input').val();
	alert(searchTerm);
});


//Menu
$(document).on('click', '.header__menu-toggle', function(){
	// $(this) == $('.header__menu-toggle')

	// if($(this).hasClass('opened')){
	// 	$(this).removeClass('opened');
	// } else {
	// 	$(this).addClass('opened');
	// }

	//Змінюємо клас для кнопки
	$(this).toggleClass('opened');

	//Змінюємо клас для  меню
	$('.slide-menu').toggleClass('opened');
})



// var firstName = 'Роман';
// var lastName = 'Турчин';
// var fullName  = firstName + ' '+ lastName;

var myData = {
	firstName:'Роман',
	lastName:'Турчин',
	age: 31
}


function fullNameFunction(first,last){
	var fullName = first+' '+last;
	return fullName;
}


var myFullName = fullNameFunction(myData.firstName, myData.lastName);

// alert(myFullName);
