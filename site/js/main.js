
// модуль bPopup
var popup = (function() {

	var init = function () {
		b_popup();
	};

	var b_popup = function () {
		$('.a_add_pr').bind('click', function(e) {
        	e.preventDefault();
 			if ($('.added')) {
         		 $('.added').hide();  
        	}; 
        	$(".inputs").css({"background-color":"white", "border-color":"#48cbe8"});
			$('.tooltips').remove(); 
			$(this).removeClass('error');

   			$('.form_wrapper').bPopup();
		});
	};

	return {
		init: init
	};

})();

if($('.a_add_pr')) {
	popup.init();
};



// Модуль загрузки файла. Выведение названия файла в поле textarea из input file
// Не забыть прописать атрибут onchange="download_fn.init();" для input file в html

var download_fn = (function () {

	var init = function () {
		dwnl_fn();
		},
		picture = document.getElementById('picture'),
		dwnl = document.getElementById('dwnl'),
  		sec_in = $(".second_input");

	var dwnl_fn = function () {
		picture.value = dwnl.value.replace(/.+[\\\/]/, "");
		$(sec_in).css({"background-color":"white", "border-color":"#48cbe8"});
		$(sec_in).removeClass('error');
		$(sec_in).next().remove();
	};

	return {
		init: init
	};

})();



// Валидация

var validationFn = (function () {

  var init = function () {
        _setUpListners();
      },
      form = $(".form");
      
  var _setUpListners = function ()  {
        	$(form).on('submit', function(e) {
				if(e.preventDefault){
    				e.preventDefault();
				}else{
    				e.returnValue = false; // Условие для IE8
				};
					checkForm(form);
				});

			$('.close').on('click', function() {
				$(form).trigger('reset');
        	});  

			$('body').on('click', '.close2',function() {
				$('.added').hide();
			});	 

			$(form).on("keydown", '.error', function(){ 
				$(this).css({"background-color":"white", "border-color":"#48cbe8"});
				$(this).next().remove();
				$(this).removeClass('error');
			});

			$(form).on('reset', function() {
				$('.inputs').css({"background-color":"white", "border-color":"#48cbe8"});
				$('.tooltips').remove();
				$(this).removeClass('error');
			});
    };

   var checkForm = function (form) {
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
	
	var createTooltip = function (elem) {
	
		var text = $(elem).data('tooltip-text'),
			position = $(elem).data('tooltip-position');
			
			if(position == 'left') {
				$(elem).removeClass('tooltip-right');
				var tooltip1 = ('<div class="tooltips tooltip-left">' + text + '</div>');
				$(elem).parent().append(tooltip1); 
				$('#third_inp').next('.tooltip-left').css({'right':'101.5%', 'top':'42%'});
				$('#description').next('.tooltips').css({'right':'102%', 'top':'32%'});
			}if(position == 'right'){
				$(elem).removeClass('tooltip-left');
				var tooltip2 = ('<div class="tooltips tooltip-right">' + text + '</div>');
				$(elem).parent().append(tooltip2);
				$('#fourth_inp').next('.tooltip-right').css({'left':'104%', 'top':'12%'});
			};
	};	
	


  return {
      init: init, 
  };
  
})();


if($('.form')) {
	validationFn.init();
};