import {$} from './lib/jquery.es6';

$(document).ready(() => {
	burgermenu('.header__line__burger-button');
});

function burgermenu(button) {
	$(button).on('click', () => {
		if ($(button).hasClass('active') === true) {
			$(button).removeClass('active');
		} else {
			$(button).addClass('active');
		}
	});
}