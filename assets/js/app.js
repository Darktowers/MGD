$(document).ready(function(){

$(".mentoresSlider").ready(function(){
    $(".owl-prev").html("<i class='fa fa-angle-left' aria-hidden='true'></i>");
    $(".owl-next").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
})
$('.mentoresSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    animateOut: 'slideOutLeft',
    animateIn: 'flipInX',
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    items:1
})

$(".modal").on("click",function(){
    var xc=$(this).attr("alt");
    $(".imagesmodal").html("<img src='"+xc+"'/>");
    $("#imagenes").css("display", "flex");
});
    $(".homeb").on("click",function(){
            $('html,body').animate({
        scrollTop: $("#Home").offset().top},
        'slow');
    });
    $(".ignitb").on("click",function(){
            $('html,body').animate({
        scrollTop: $("#Ignition").offset().top},
        'slow');
    });
        $(".stageb").on("click",function(){
            $('html,body').animate({
        scrollTop: $("#Stages").offset().top},
        'slow');
    });
            $(".programb").on("click",function(){
            $('html,body').animate({
        scrollTop: $("#Programa").offset().top},
        'slow');
    });
                $(".mentorb").on("click",function(){
            $('html,body').animate({
        scrollTop: $("#Mentores").offset().top},
        'slow');
    });
                    $(".registrateb").on("click",function(){
            $('html,body').animate({
        scrollTop: $("#Registrate").offset().top},
        'slow');
    });
    var registrar = new Waypoint({
    element: document.getElementById('Registrate'),
    handler: function(reg) {
        if(reg == "down"){
            $(".headerMenu > ul > li").removeClass("active");
        }else if(reg == "up"){
            $(".mentorb").addClass("active");
        } 
    },
    offset:100
    })

    var waypoint = new Waypoint({
    element: document.getElementById('Ignition'),
    handler: function(direction) {
        if(direction == "down"){
            console.log('Ignition')
            
            $(".headerWhite").attr("style","display:block !important;")
            $(".headerMenu > ul > li").removeClass("active");
            $(".ignitb").addClass("active");
        }else if(direction == "up"){
            $(".headerWhite").attr("style","display:none !important;")
        } 
    },
    offset:100
    })
        var x = new Waypoint({
    element: document.getElementById('Stages'),
    handler: function(stage) {
        if(stage == "down"){
            console.log('Stages')
            $(".headerWhite").addClass("backTransp");
            $(".headerMenu > ul > li").removeClass("active");
            $(".stageb").addClass("active");

        }else if(stage == "up"){
            $(".headerWhite").removeClass("backTransp");
            $(".ignitb").addClass("active");
            $(".stageb").removeClass("active");
        } 
    },
    offset:100
    })
            var y = new Waypoint({
    element: document.getElementById('Programa'),
    handler: function(programa) {
        if(programa == "down"){
            console.log('Programa')
            $(".headerWhite").addClass("backTransp2");
            $(".headerMenu > ul > li").removeClass("active");
            $(".headerMenu > ul").attr("style","color:white !important;");
            $(".programb").addClass("active");
            $(".headerWhite .headerLogo > img").attr("src","assets/img/logo_blanco.png");

        }else if(programa == "up"){
            $(".headerWhite").removeClass("backTransp2");
            $(".headerWhite").addClass("backTransp");
            $(".stageb").addClass("active");
            $(".programb").removeClass("active");
            $(".headerWhite .headerMenu > ul").attr("style","color:#07b8ff !important");
            $(".headerWhite .headerLogo > img").attr("src","assets/img/logo_verde.png");
        } 
    },
    offset:200
    })
                var me = new Waypoint({
    element: document.getElementById('Mentores'),
    handler: function(mentores) {
        if(mentores == "down"){
            console.log('Mentores')
            $(".headerWhite").removeClass("backTransp2");
            $(".headerWhite").removeClass("backTransp");
            $(".headerMenu > ul > li").removeClass("active");
            $(".headerMenu > ul").attr("style","color:#07b8ff !important");
            $(".mentorb").addClass("active");
            $(".headerWhite .headerLogo > img").attr("src","assets/img/logo_verde.png");

        }else if(mentores == "up"){
            $(".mentorb").removeClass("active");
            $(".programb").addClass("active");
            $(".headerWhite .headerMenu > ul").attr("style","color:#07b8ff !important");
            $(".headerWhite .headerLogo > img").attr("src","assets/img/logo_verde.png");
            $(".headerWhite").addClass("backTransp2");
            $(".headerMenu > ul").attr("style","color:white !important;");
            $(".headerWhite .headerLogo > img").attr("src","assets/img/logo_blanco.png");
        } 
    },
    offset:500
    })

})