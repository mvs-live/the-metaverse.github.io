$('.spe-hover').mouseenter(function(){if($(this).hasClass('active')){$(this).removeClass('active');}else{$('.spe-hover').removeClass('active');$(this).addClass('active');}});$('.spe-hover').mouseleave(function(){$('.spe-hover').removeClass('active');});$('.menu ul li.d-menu').click(function(){if($(this).hasClass('active')){$(this).removeClass('active');}else{$('.menu ul li').removeClass('active');$(this).addClass('active');}});var screenwidth=$(window).width();$(window).resize(function(){$('.menu').hide();});if(screenwidth<1250){$('.menu').hide();$('.menu-trigger').click(function(){if($('.menu').hasClass('is-active')){$('.menu').slideUp(300).removeClass('is-active');$('.mask').hide();}else{$('.menu').removeClass('active');$('.menu').slideDown(300).addClass('is-active');$('.mask').show();}
$(".top-menu").toggleClass("top-animate");$(".mid-menu").toggleClass("mid-animate");$(".bottom-menu").toggleClass("bottom-animate");});$('.menu ul li').click(function(){$('.menu').slideUp(300).removeClass('is-active');$(".top-menu").removeClass("top-animate");$(".mid-menu").removeClass("mid-animate");$(".bottom-menu").removeClass("bottom-animate");$('.mask').hide();});$('.mask').click(function(){$('.menu').slideUp(300).removeClass('is-active');$(".top-menu").removeClass("top-animate");$(".mid-menu").removeClass("mid-animate");$(".bottom-menu").removeClass("bottom-animate");$('.mask').hide();});}
else{$('.cn-menu.menu').css('display','block');}