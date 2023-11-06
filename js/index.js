$(".color span").click(function(){

    $(".color span").removeClass("active");
    $(this).addClass("active");
    $(".detail span").css("color",$(this).attr("data-color"));
    $(".detail a").css("background",$(this).attr("data-color"));
    $(".product-image").attr("src",$(this).attr("data-image"));
    $("body").css("background",$(this).attr("data-color"));
   });