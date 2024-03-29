$(document).ready(function () {

    const current_url = window.location.href.split('/');
    const current_page = current_url[current_url.length - 2];

    const is_page_with_scroll = current_page === 'en' || current_page === 'es';

    if (is_page_with_scroll) {
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

        if ($(window).width() > 992) {
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

            if (scrollToTopButton !== null) {
                scrollToTopButton.onclick = function (e) {
                    e.preventDefault();
                    scrollToTop();
                }
            }
        }
    }
});
