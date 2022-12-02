$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })
   
    $('form').on('submit', function(e) {
        e.preventDefault();

        $('<input>').appendTo('li')
    })
})