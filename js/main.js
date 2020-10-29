var btn = document.querySelector('.btn');
btn.onclick = function (e) {
    e.preventDefault();
}


// Field with items
$(function () {
    $(window).scroll(function () {
        $('#tasks .title-section').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    $(window).scroll(function () {
        $('.time').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('.beach').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInUp");
            }
        });
    });

    $(window).scroll(function () {
        $('.rocket').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });
    // Field with input-form
    $(window).scroll(function () {
        $('#ticket .title-section').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('#field-1').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('#field-2').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });

    $(window).scroll(function () {
        $('#field-3').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('#field-4').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("fadeInRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.btn-form').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 800) {
                $(this).addClass("fadeInUpBig");
            }
        });
    });

    $('#header .btn').click(function () {

        $('.travels').addClass("rotateIn visibility");

    });

})