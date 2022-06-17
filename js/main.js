$(function () {
	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});
	$('.coach__slider').slick({
		// arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="coach-prev"><img src="images/prev.svg" alt=""></button>',
		nextArrow: '<button class="coach-next"><img src="images/next.svg" alt=""></button>',
		fade: true,

		responsive: [
			{
				breakpoint: 687,
				settings: {
					arrows: false
				}
			},
			// {
			// 	breakpoint: 601,
			// 	settings: {
			// 		slidesToShow: 1
			// 	}
			// },
		]
	});
	$('.reviews__slider').slick({
		// arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="coach-prev"><img src="images/prev.svg" alt=""></button>',
		nextArrow: '<button class="coach-next"><img src="images/next.svg" alt=""></button>',
		fade: true,
		responsive: [
			{
				breakpoint: 670,
				settings: {
					arrows: false
				}
			},

		]
	});
})

document.querySelector('.dropdown__button').addEventListener('click', function () {
	document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');
});

document.querySelectorAll('.dropdown__list-item').forEach(function (listItem) {
	listItem.addEventListener('click', function (e) {
		e.stopPropagation();
		document.querySelector('.dropdown__button').innerHTML = this.innerHTML;
		document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
		document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');

	})
})

//Клик за пределами дропдауна скрывает его
document.addEventListener('click', function (e) {
	if (e.target !== document.querySelector('.dropdown__button')) {
		document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');

	}
});





$(function () {

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.jiu-jitsu'
		}
	});

	$('.gallery__item').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	})

});