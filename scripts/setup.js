//Setup flex slider
$(window).load(function () {
    $('.gf-slider').flexslider();
});
//Setup Page
$(document).ready(function () {
    //Initialize PrettyPhoto here
    $("a[rel^='prettyPhoto']").prettyPhoto({ animation_speed: 'normal', theme: 'facebook', slideshow: 3000, autoplay_slideshow: false, social_tools: false 	});
	
	//Remove this line if you want to naviagate to url on each client box click
	$('#clients.grid a').click(function(){return false;});
    //Initialize jQuery knob here
    $(".knob").knob();
    //Initialie tipsy here
    $('#fb').tipsy({ gravity: 'n', fade: true });
    $('#tw').tipsy({ gravity: 'n', fade: true });
    $('#ld').tipsy({ gravity: 'n', fade: true });
    /* smooth-scroll */
    $("ul#navigation a").smoothScroll({
        afterScroll: function () {
            $('ul#navigation a.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    //Scroll
    $('div.page').waypoint(function () {
        var id = $(this).attr('id');

        $('ul#navigation a.active').removeClass('active');
        $('ul#navigation a[href="#' + id + '"]').addClass('active');
    });

    /* fixes */
    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $('ul#navigation a.active').removeClass('active');
            $('ul#navigation a[href="#home"]').addClass('active');
        } else if ($(window).height() + $(window).scrollTop() === $('#container').height()) {
            $('ul#navigation a.active').removeClass('active');
            $('ul#navigation a[href^="#"]:last').addClass('active');
        }
    });

    /* tab */
    // first selector
    $('.tab').each(function () {
        $(this).find('ul > li:first').addClass('active');
        $(this).find('div.tab_container > div:first').addClass('active');
    });

    /* toggles */
    $('.toggle h3').click(function () {
        $(this).parent().find('.toggle_data').slideToggle();
    });

    // click functions
    $('.tab > ul > li').click(function () {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');

        $(this).parent().parent().find('div.tab_container > div.active').removeClass('active').slideUp();
        $(this).parent().parent().find('div.tab_container > div#' + $(this).attr('id')).slideDown().addClass('active');

        return false;
    });

    var $container = $('div#works').isotope({
        itemSelector: 'img.work',
        layoutMode: 'fitRows'
    });

    // items filter
    $('#works_filter a').click(function () {
        var selector = $(this).attr('data-filter');
        $('div#works').isotope({
            filter: selector,
            itemSelector: 'img.work',
            layoutMode: 'fitRows'
        });

        $('#works_filter').find('a.selected').removeClass('selected');
        $(this).addClass('selected');

        return false;
    });

    //smooth scroll top
    $('.gotop').addClass('hidden');

    $("a.gotop").smoothScroll();

    $('#wrap').waypoint(function (event, direction) {
        $('.gotop').toggleClass('hidden', direction === "up");
    }, {
        offset: '-100%'
    });
});
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );