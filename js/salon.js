(function ($) {
    $('#scrollbox .addresses-box-item').on('mouseover', function () {
        var mega = $(this).attr('data-mega');
        //console.log(mega);
        $(mega).addClass('avisits-active');
    }).on('mouseout', function () {
        var mega = $(this).attr('data-mega');
        $(mega).removeClass('avisits-active');
    });


    $('#scrollbox .addresses-box-item').on('click', function () {
        var mega = $(this).attr('data-mega');
        //console.log(mega);
        $(mega).addClass('avisits-active');
    })




}(jQuery));