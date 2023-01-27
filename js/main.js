// faq

$(document).ready(function () {
    $(".faq__item").each(function () {
        let $height = $(this).outerHeight();
        $(this).css('height', $height + 'px');
        $(this).click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find(".faq__answer").css("display", "none");
            } else {
                $(this).addClass('active');
                $(this).find(".faq__answer").slideDown(400, "linear");
            }
        });
    });

});

// numbers animation

$(function () {

    let target_block = $(".counter-1");
    let blockStatus = true;

    $(window).scroll(function () {
        let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
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

    let target_block = $(".counter-2");
    let blockStatus = true;

    $(window).scroll(function () {
        let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
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

    let target_block = $(".counter-3");
    let blockStatus = true;

    $(window).scroll(function () {
        let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
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
