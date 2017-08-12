import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

$('textarea').keyup(function(){
	$(this).height(100);
	$(this).height(this.scrollHeight);
});
