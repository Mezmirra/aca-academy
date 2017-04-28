$( document ).ready(function() {
            
    $('.language-level').select2({
        placeholder: 'Ваш уровень владения китайским',
        minimumResultsForSearch: Infinity
    });
            
    $('.trial-lesson-date').select2({
        placeholder: 'Удобное время занятия',
        minimumResultsForSearch: Infinity
    });
            
    $(".user-phone").mask("+7(999) 999-9999");
            
    $('.registration-button').magnificPopup({
        type: 'inline'
    });

});