var favouriteProducts = [];

//Отримуємо раніше збережені в браузері обрані продукти
if(window.localStorage.getItem('product')){
	favouriteProducts = window.localStorage.getItem('product');
	favouriteProducts = favouriteProducts.split(',');
}
updateFavouritesCounter();
checkIfFavourites();
function checkIfFavourites(){
	//Запускаємо функцію для кожної кнопки при завнатаженні сторінки
$( "button.add-to-favourites" ).each(function() {
	var product_id = $(this).attr('data-id');

	//Перевіряємо чи айді товару є в списку обраних
	if(favouriteProducts.includes(product_id) == true){
		$(this).addClass('in-favourites');
	}
});

}


$(document).on('click', 'button.add-to-favourites',function(){
	//Отримуємо ID продукту, який додаємо в обрані
	var product_id = $(this).attr('data-id');

	//Отримуємо поточну кількість обраних
	//var currentCount = Number($('#favourites span').html());


	if(favouriteProducts.includes(product_id) == true){
		//Прибираємо зі списку обраних
		//Визначаємо позицію елементу в масиві
		var index = favouriteProducts.indexOf(product_id);

		//Приховуємо залите серце залите серце
		$(this).removeClass('in-favourites');

		//Видаляємо айді продукту з масив за індексом
		favouriteProducts.splice(index, 1);
		//Віднімаємо одиницю від лічильника обраних
		//currentCount--;

	} else {
		//Додаємо айді товару в масив (список) обраних
		favouriteProducts.push(product_id);

		//Показуємо залите серце
		$(this).addClass('in-favourites');

		//Додаємо одиницю до лічильника обраних
		//currentCount = currentCount + 1;
		//currentCount++;
	} 

	//Зберігаємо список обраних в браузері
	window.localStorage.setItem('product', favouriteProducts);

	updateFavouritesCounter();
	

	//Pure JS
	// document.getElementById('favourites').innerHTML = '<span>'+currentCount+'</span>';
	
	console.log(favouriteProducts);
});

function updateFavouritesCounter(){
	//Оновити дані в HTML лічильника
	$('#favourites span').html(favouriteProducts.length);
	if(favouriteProducts.length == 0){
		//Сховати лічильник
		$('#favourites span').addClass('empty');
	} else {
		//Показати лічильник
		$('#favourites span').removeClass('empty');
	}
}



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


function createProductHtml(product){
	var html = `<li class="product-card home__product-list-card">
	<div class="thumb">
	<button data-id="${product.id}" class="add-to-favourites">
	<svg>
	<use href="#heart"></use>
	</svg>
	<svg class="filled">
	<use href="#heart_filled"></use>
	</svg>
	</button>
	<a href="#">
	<img src="${product.image}" alt="">
	</a>
	</div>
	<a href="#" class="title">
	${product.title} 
	</a>
	<div class="old-price">
	${product.price * 1.2} ₴
	</div>
	<div class="price">
	${product.price} ₴
	</div>
	<div class="availability">
	Немає в наявності
	</div>
	</li>`;
	return html;
}


function getProducts(){

	fetch('https://fakestoreapi.com/products')
	.then((response)=>{
		return response.json();
	})
	.then((products)=>{
		var allHtml = '';
		var count = 0;
		products.forEach((product)=>{
			if(count < 4){
				var html = createProductHtml(product);
				allHtml = allHtml + html;
				count++;
			}

		});
		$('.home__product-list ul').prepend(allHtml);
		checkIfFavourites();
	})
	.catch((error)=>{
		console.log(error);
	})

}

getProducts();














