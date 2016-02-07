
// bPopup

(function($) {

	$(function() {
    	$('.a_add_pr').bind('click', function(e) {
        	e.preventDefault();
 			if ($('.added')) {
         		 $('.added').hide();  
        	}; 
   			$('.form_wrapper').bPopup();
   		});
    });

})(jQuery);


// Загрузка файла. Выведение названия файла в поле input text из input file

  function dwnlFn() {
  	var picture = document.getElementById('picture'),
  		dwnl = document.getElementById('dwnl'),
  		sec_in = $(".second_input");

  	picture.value = dwnl.value.replace(/.+[\\\/]/, "");

	$(sec_in).css({"background-color":"white", "border-color":"#48cbe8"});
	$(sec_in).removeClass('error');
	$(sec_in).next().remove();
 };


// Валидация на странице my_works

var validationFn = (function () {

  var init = function () {
        _setUpListners();
      },
      form = $(".form");
      
  var _setUpListners = function ()  {
        	$(form).on('submit', function(e) {
					e.preventDefault();
					checkForm(form);
				});

			$('.close').on('click', function() {
				$(form).trigger('reset');
				$(".inputs").css({"background-color":"white", "border-color":"#48cbe8"});
				$('.tooltips').remove(); 
				$(this).removeClass('error');
        	});  

			$('body').on('click', '.close2',function() {
				$('.added').hide(); 	
			});	   

			$(form).on("keydown", '.error', function(){ 
				$(this).css({"background-color":"white", "border-color":"#48cbe8"});
				$(this).next().remove();
				$(this).removeClass('error');
			});
    };

   function checkForm (form) {
			var form = $(form),
			inputs = form.find('.inputs').not('input[type="file"], input[type="hidden"]');
			$('.tooltips').remove();
		
			$(inputs).each(function (index,elem){
				if($(elem).val() == "") {
		 			$(elem).css({"background-color":"#fad6d4", "border-color":"#f97e76"});
		 			$(elem).addClass('error');
		 			createTooltip(elem);
		 		};
			});

 			if($('.error').length == 0) {
				$('.added').show();
				$(form).trigger('reset');
			};
		
		};		
	
	function createTooltip (elem) {
	
		var position = $(elem).data('tooltip-position');
		var text = $(elem).data('tooltip-text');
		
		if(position == 'left') {
			var tooltip = ('<div class="tooltips">' + text + '</div>');			
		};

		$(elem).parent().append(tooltip); 
	};
  
  
  return {
      init: init
  };
  
})();

validationFn.init();



// Валидация на странице contact_me

var validationFn2 = (function () {

  var init = function () {
        _setUpListners();
      },
      form = $(".contact_form");
      
  var _setUpListners = function ()  {
        	$(form).on('submit', function(e) {
					e.preventDefault();
					checkForm(form);
				});

			$(form).on('reset', function(e) {
				$('.input').css({"background-color":"white", "border-color":"#48cbe8"});
				$('.tooltips').remove();
				$(this).removeClass('error');
			});

			$(form).on("keydown", '.error', function(){ 
				$(this).css({"background-color":"white", "border-color":"#48cbe8"});
				$(this).next().remove();
				$(this).removeClass('error');
			});
    };

   function checkForm (form) {
			var form = $(form),
			inputs = form.find('.input').not('input[type="file"], input[type="hidden"]');
			$('.tooltips').remove();
		
			$(inputs).each(function (index,elem){
				if($(elem).val() == "") {
		 			$(elem).css({"background-color":"#fad6d4", "border-color":"#f97e76"});
		 			$(elem).addClass('error');
		 			createTooltip(elem);
		 		};
			});

 			if($('.error').length == 0) {
				$('.added').show();
				$(form).trigger('reset');
			};
		
		};		
	
	function createTooltip (elem) {
	
		var text = $(elem).data('tooltip-text'),
			position = $(elem).data('tooltip-position');

			if(position == 'left') {
				$(elem).removeClass('tooltip-right');
				var tooltip1 = ('<div class="tooltips tooltip-left">' + text + '</div>');
				$(elem).parent().append(tooltip1); 
			}if(position == 'right'){
				$(elem).removeClass('tooltip-left');
				var tooltip2 = ('<div class="tooltips tooltip-right">' + text + '</div>');
				$(elem).parent().append(tooltip2);
			};
	
	};
  
  return {
      init: init
  };
  
})();

validationFn2.init();