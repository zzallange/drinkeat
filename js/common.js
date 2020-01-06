
$(document).ready(function(){
    
    /* hamber_menu */
    $(".btn_allmenu").click(function(){
        $(".visual_menu").addClass("visual_menu_open");
        $('.menu_dim').fadeIn();
        $('.visual_menu_open').show();
        $('body').toggleClass('body_on');
    });
    $(".menubtn_x").click(function(){
        $(".visual_menu").removeClass("visual_menu_open",3000);
        $('.menu_dim').fadeOut();
        $('body').toggleClass('body_on');
    });    
    /* Search */
    $(".btn_search").click(function(){
        $('.visual_search_open').show(),5000;
        $(".visual_search").addClass("visual_search_open");
        $('.sch_dim').fadeIn();
        $('body').toggleClass('body_on');
        /*$('.sub_gnb .nav_bx .menu').css({display:'none'});
        $('.nav_dim').removeClass('on');*/
    });
    $(".schbtn_x").click(function(){
        $(".visual_search").removeClass("visual_search_open",5000);
        $('.sch_dim').fadeOut();
        $('body').toggleClass('body_on');
    });  
    /* //Search */
    
    /* sub_gnb menu */
    $('.drk_gnb li').click(function(){
        $(this).find('a').addClass('active');
        $('.drk_gnb li a').find('span').addClass('on');
        $(this).siblings().find('a').removeClass('active');
    });

    $('.li_eat').click(function(){   
        $('.sub_eat').css({display:'inline-block'});
        $('.sub_drink').css({display:'none'});
        $('.sub_enjoy').css({display:'none'});
        $('.sub_wellife').css({display:'none'});
    });
    $('.li_drink').click(function(){   
        $('.sub_drink').css({display:'inline-block'});
        $('.sub_eat').css({display:'none'});
        $('.sub_enjoy').css({display:'none'});
        $('.sub_wellife').css({display:'none'});
    });
    $('.li_enjoy').click(function(){
        $('.sub_enjoy').css({display:'inline-block'});
        $('.sub_drink').css({display:'none'});
        $('.sub_eat').css({display:'none'});
        $('.sub_wellife').css({display:'none'});
    });
    $('.li_wellife').click(function(){
        $('.sub_wellife').css({display:'inline-block'});
        $('.sub_drink').css({display:'none'});
        $('.sub_enjoy').css({display:'none'});
        $('.sub_eat').css({display:'none'});
    });
    /* //sub_gnb menu */
    
    
    /*$('.dropdown_btn').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $(this).find('span').toggleClass('on');  
        $(this).siblings().find('span').removeClass('on'); 
    });*/
    /*$('.navtab01').click(function(){
        $('.navcont01').toggle();
        $('.navcont02').hide();
        $('.navcont03').hide();
        $('.navcont04').hide();
    });
    $('.navtab02').click(function(){
        $('.navcont02').toggle();
        $('.navcont01').hide();
        $('.navcont03').hide();
        $('.navcont04').hide();
    });
    $('.navtab03').click(function(){
        $('.navcont03').toggle();
        $('.navcont02').hide();
        $('.navcont01').hide();
        $('.navcont04').hide();
    });
    $('.navtab04').click(function(){
        $('.navcont04').toggle();
        $('.navcont02').hide();
        $('.navcont03').hide();
        $('.navcont01').hide();
    });*/
    /* //hamber_menu */
        
        /* mobile sub_gnb*/
    /*$('.nav_bx .tit').click(function(){
        $(this).siblings().slideToggle();
        $(this).toggleClass('on');
        $('.nav_dim').toggleClass('on');
        $('body').toggleClass('body_on');
    });*/
    $('.menu li').click(function(){
       $(this).find('a').addClass('on'); 
       $(this).siblings().find('a').removeClass('on'); 
    });
    /*$('.nav_dim').click(function(){
        $('body').toggleClass('body_on');
        $('.nav_bx .tit').removeClass('on');
    });*/
    /* //mobile sub_gnb*/
    
    /* dim */
    $('.menu_dim').click(function(){
        $(this).fadeOut();
        $('.visual_search_open').hide();
        $('.visual_menu_open').hide();
        $('body').toggleClass('body_on');
    });
    $('.sch_dim').click(function(){
        $(this).fadeOut();
        $('.visual_search_open').hide();
        $('.visual_menu_open').hide();
        $('body').toggleClass('body_on');
    });
    /*$('.nav_dim').click(function(){
        $(this).removeClass('on');
        $('.nav_bx .menu').hide();
    });*/
    /* //dim */
    
    /* banner */
    
    /* footer */
    $('.drk_ftbtom .btn_fms').click(function(){
        $(this).siblings().toggleClass('on');
        $(this).children().toggleClass('active');
    });
    
    /* 기사뷰타이틀 sns공유팝업 */
    $('.btn_share').click(function(){
    var state = $('.wrapsns_tit').css('display'); 
        if(state == 'none'){ 
            $('.wrapsns_tit').show();
            $('body').css({'overflow':'hidden', 'height':'100%'});
        }else{
            $('.wrapsns_tit').hide();
            $('body').css({'overflow':'', 'height':''});
        }
    });
    
    /* 기사뷰타이틀 sns_popup close */
    $('.wrapsns_tit .btn_shut').click(function(e){
        e.preventDefault();
        $('.wrapsns_tit').css({'display':'none'});
        $('body').css({'overflow':'', 'height':''});
    });

    $(document).on("click", function(e){  
        if( $(".wrapsns_tit").is(e.target)) {
            $('.wrapsns_tit').css({'display':'none'});
            $('body').css({'overflow':'', 'height':''});
        }
    });
    
    /* 드링킷 특집 */
    $(".tabnum01").click(function(){
        $(".tabcont01").show();
        $(".tabcont02").hide();
        $(".tabcont03").hide();
        $(this).addClass('on');
        $('.tabnum02').removeClass('on');
        $('.tabnum03').removeClass('on');
    });
    $(".tabnum02").click(function(){
            $(".tabcont02").show();
            $(".tabcont01").hide();
            $(".tabcont03").hide();
        $(this).addClass('on');
        $('.tabnum01').removeClass('on');
        $('.tabnum03').removeClass('on');
    });
    $(".tabnum03").click(function(){
            $(".tabcont03").show();
            $(".tabcont01").hide();
            $(".tabcont02").hide();
        $(this).addClass('on');
        $('.tabnum01').removeClass('on');
        $('.tabnum02').removeClass('on');
    });
    
    /* layer모달 popup close sns */
    $('.wrapsns_layer .btn_close').click(function(){
        $('.wrapsns_layer').removeClass('active');
        $('html, body').css({'overflow':''});
    });

    $('.wrapsns_layer').click(function () {  
        $(this).removeClass('active');
        $('html, body').css({'overflow':''});
    });

    /* layer모달 popup 열기 sns */
    $('.more_ico').click(function(e){
        e.preventDefault();
        $('.wrapsns_layer').addClass('active');
    });
    
    
});//end

    //Top Button
    $(window).scroll(function() {
        if($(window).scrollTop() > $('header').height()){
            $('.btn_top').addClass('on');
        } else {
            $('.btn_top').removeClass('on');
        }
    });
    $(function(){
        $('.btn_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });
    });


	    //Top Button
    $(window).scroll(function() {
        if($(window).scrollTop() > $('.brand_con01').height()){
            $('.brand_scroll').addClass('on');
        } else {
            $('.brand_scroll').removeClass('on');
        }
    });
    $(function(){
        $('.brand_scroll').click(function(){
            $('html, body').animate({scrollTop: 800}, 300);
        });
    });


    













