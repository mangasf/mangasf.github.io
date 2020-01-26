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
    });

    if($(window).width() > 992)
    {
        const scrollToTopButton = document.getElementById('js-top');

        const scrollFunc = () => {

            let y = window.scrollY;

            if (y > 0) {
                scrollToTopButton.className = "top-link show";
            } else {
                scrollToTopButton.className = "top-link hide";
            }
        };

        window.addEventListener("scroll", scrollFunc);

        const scrollToTop = () => {

            const c = document.documentElement.scrollTop || document.body.scrollTop;

            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);

                window.scrollTo(0, c - c / 10);
            }
        };

        scrollToTopButton.onclick = function(e) {
            e.preventDefault();
            scrollToTop();
        }
    }

});
