
// bPopup

(function($) {

	$(function() {
    	$('.a_add_pr').bind('click', function(e) {
        	e.preventDefault();
   			$('.form_wrapper').bPopup();
   		});
    });

})(jQuery);


// Загрузка файла. Выведение названия файла в поле input text из input file

  function dwnlFn() {
  	var picture = document.getElementById('picture'),
  		dwnl = document.getElementById('dwnl');

  	picture.value = dwnl.value.replace(/.+[\\\/]/, "");

	$(".second_input").css({"background-color":"white", "border-color":"#48cbe8"});
 };


// Валидация

/*var validationFn = (function () {

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

		});
      
		$(form).on("focus", '.error', function(){
			$(this).css({"background-color":"white", "border-color":"#48cbe8"});
			$(this).remove('.tooltips');
		});
    };

   function checkForm (form) {
		var form = $(form),
			inputs = form.find('.inputs');

		form.removeClass('error');
		$(inputs).each(function (index,elem){

			if($(elem).val() == "") {
		 		$(elem).css({"background-color":"#fad6d4", "border-color":"#f97e76"});
		 		$(elem).addClass('error');
		 		createTooltip(elem);
		 	};
		});

 		if(!$('.error').length) {
			$('.added').show();
			$(form).trigger('reset');
		};
		
	};		
	

	function createTooltip (elem) {
	
		var position = $(elem).data('tooltip-position');
		var text = $(elem).data('tooltip-text');
		
		if(position == 'left') {
			var tooltip = ('<div class="tooltips tooltip_left">' + text + '</div>');			
		}else if(position =='right') {
			var tooltip = ('<div class="tooltips tooltip_right">' + text + '</div>');
		};

		$(elem).parent().append(tooltip);
		
	};



	$('.close2').on('click', function() {
		$('.added').hide(); 	
	});	
  
  return {
      init: init
  };
  
  
})();

validationFn.init();*/






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
					$('.tooltips').remove(); // удаляем все тултипы
          
       //По клику на крестик пропадает зеленое окно об успешном добавлении проекта
	$('body').on('click', '.close2',function() {
		$('.added').hide(); 	
	});	   

		});
      
		$(form).on("keydown", '.error', function(){ // попробуй все-таки не через фокус а через keydown
			$(this).css({"background-color":"white", "border-color":"#48cbe8"});
			$(this).parent('.tooltips').remove();
		});
    };

   function checkForm (form) {
			var form = $(form),
			inputs = form.find('.inputs');

		
			$(inputs).each(function (index,elem){
				if($(elem).val() == "") {
		 			$(elem).css({"background-color":"#fad6d4", "border-color":"#f97e76"});
		 			$(elem).addClass('error');
		 			createTooltip(elem);
		 		};
			});

 			if(!$('.error').length) {
				$('.added').show();
				$(form).trigger('reset');
			};
		
		};		
	
	function createTooltip (elem) {
	
		var position = $(elem).data('tooltip-position');
		var text = $(elem).data('tooltip-text');
		
		if(position == 'left') {
			var tooltip = ('<div class="tooltips tooltip_left">' + text + '</div>');			
		}else if(position =='right') {
			var tooltip = ('<div class="tooltips tooltip_right">' + text + '</div>');
		};

		$(elem).parent().append(tooltip); // добавляем тултип относительно родителя
	};
  

  
  return {
      init: init
  };
  
})();

validationFn.init();