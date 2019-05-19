$(document).ready(function () {

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        url = $(this).attr('href');
        link = url.split('/');
        link = link[link.length - 1];

        $('html, body').animate(
            {
                scrollTop: $(link).offset().top,
            },
            500,
            'linear'
        )
    })

});
