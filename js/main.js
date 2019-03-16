 $(function(){
    "use strict";
     
     //Adjust Slider Heigth
     var winH   = $(window).height(),
         upperH = $(".upper-bar").innerHeight(),
         navH   = $(".navbar").innerHeight();
     $(".slider , .carousel-inner").height(winH - ( upperH + navH) );
 
    // FEatures Work Shuffle
    $(".featured-work ul li").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");        
        if($(this).data("class") == "all"){
            $(".shuffle-imgs  .col-md").css({opacity:1});
        }else{
            $(".shuffle-imgs  .col-md").css({opacity:.09});
            $($(this).data("class")).parent().css({opacity:1});
        }
    });
     
     
     
 });