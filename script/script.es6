import {$} from './lib/jquery.es6';

$(document).ready(() => {
	burgerMenu('.header__line__burger-button');
	showDetails('.ticket__button', '.ticket__card__details');
});

function burgerMenu(button) {
	$(button).on('click', () => {
		if ($(button).hasClass('active') === true) {
			$(button).removeClass('active');
		} else {
			$(button).addClass('active');
		}
	});
}

function showDetails(button,target) {
	$(button).on('click', () => {
		if ($(button).hasClass('active') === true) {
			$(button).removeClass('active');
			$(target).animate({height:0}, 500);
		} else {
			$(button).addClass('active');
			$(target).animate({height:'330px'}, 500);
		}
	});
}