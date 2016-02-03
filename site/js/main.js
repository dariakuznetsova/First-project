// bPopup

(function($) {
	$(function() {
        // From jQuery v.1.7.0 use .on() instead of .bind()
    	$('.a_add_pr').bind('click', function(e) {
        	e.preventDefault();
   			$('.form_wrapper').bPopup();
   		});
    });
})(jQuery);



// Загрузка файла 

  function dwnlFn() {
	document.getElementById('picture').value = document.getElementById('dwnl').value.replace(/.+[\\\/]/, "");
 };



// Валидация

/*$(document).ready(function() {
	$('.inputs[value!=""]').qtip({
		content: {
			text:'Error';
		};
	}); 
});*/


(function() {
	var inputs = $(".inputs");

	$(".add_button").on('click', function(e) {
		e.preventDefault();
		$(inputs).each(function(index,elem){
			if($(elem.val)) {
				$('.added').show();
				$('.close2').on('click', function() {
					$('.added').hide();
					$(inputs).val('');
				});
		 	};
		 });
	});
})();


/*(function () {
	var form = $('.form'),
		inputs = $('.input');

	form.on('submit', fiunction(e){
		e.preventDefault();
		$(inputs).each(function(index,elem)){
			if($(elem.val()) {
				var 
			}
		}
	})
})*/