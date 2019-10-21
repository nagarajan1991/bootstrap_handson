$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 100 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
    $('[data-toggle="tooltip"]').tooltip();
});
$("#carouselButton1").click(function(){
        if ($("#carouselButton1").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton1").children("span").removeClass('fa-pause');
            $("#carouselButton1").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton1").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton1").children("span").removeClass('fa-play');
            $("#carouselButton1").children("span").addClass('fa-pause');                    
        }
    });

    $(document).ready(function(){
    $("#reservebtn").click(function(){
        $("#reservemodal2").modal();
    });
    $("#loginbtn").click(function(){
        $("#loginModal2").modal();
    });
    });