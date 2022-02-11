$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function(){
	$("#datepicker").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
		}
	});
	$("#datepicker").datepicker("setDate", $('#datepicker_value').val());
});

$('.map-calculator__link').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); 
    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top 
        }, 500
        );
    }
    return false;
});
