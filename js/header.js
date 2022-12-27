$(document).ready(function () {

    const current_url = window.location.href.split('/');
    const current_lang = current_url[current_url.length - 3];
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

    if(current_page === 'posts' && current_lang === 'es') {
        alternate_url = '/en/posts';
    }

    if(current_page === 'posts' && current_lang === 'en') {
        alternate_url = '/es/posts';
    }

    if(current_page === 'reuniones-uno-a-uno') {
        alternate_url = '/en/posts/meets-one-to-one';
    }

    if(current_page === 'meets-one-to-one') {
        alternate_url = '/es/posts/reuniones-uno-a-uno';
    }

    if(current_page === 'contact') {
        alternate_url = '/es/contacto';
    }

    if(current_page === 'contacto') {
        alternate_url = '/en/contact';
    }

    $('.alternate-link').attr('href', window.location.protocol + '//' + window.location.host + alternate_url);
});
