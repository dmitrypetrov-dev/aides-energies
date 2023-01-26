// faq

$(document).ready(function () {
    $(".faq__item").click(function () {
        $(this).toggleClass('active');
        $(this).find(".faq__answer").slideToggle();
    });
});


// numbers animation

$(function () {

    var target_block = $(".counter-1");
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false;
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500,
                easing: "linear",
                step: function (val) {
                    $(".counter-1").html(Math.ceil(val));
                }
            });
        }
    });
});

$(function () {

    var target_block = $(".counter-2");
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false;
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500,
                easing: "linear",
                step: function (val) {
                    $(".counter-2").html(Math.ceil(val));
                }
            });
        }
    });
});

$(function () {

    var target_block = $(".counter-3");
    var blockStatus = true;

    $(window).scroll(function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false;
            $({numberValue: 0}).animate({numberValue: target_block.text()}, {
                duration: 2500,
                easing: "linear",
                step: function (val) {
                    $(".counter-3").html(Math.ceil(val));
                }
            });
        }
    });
});
