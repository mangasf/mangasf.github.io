$(document).ready(function () {

    const current_url = window.location.href.split('/');
    const current_page = current_url[current_url.length - 2];

    let alternate_url = '';

    if(current_page === 'en') {
        alternate_url = '/es/'
    }

    if(current_page === 'es') {
        alternate_url = '/en/'
    }

    if(current_page === 'about-me') {
        alternate_url = '/es/sobre-mi';
    }

    if(current_page === 'sobre-mi') {
        alternate_url = '/en/about-me';
    }

    $('.alternate-link').attr('href', window.location.protocol + '//' + window.location.host + alternate_url);
});
