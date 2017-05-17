$(document).ready(function() {
// first modal form
    $('a#go').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });

    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
// second modal form
    $('a#go_email').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#email_modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
        });
    });

    $('#modal_close, #overlay').click( function(){
        $('#email_modal')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    // anchor animation
    $("#nav__menu, #for-anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-50}, 1000);
    });
});
