$(document).ready(function () {
    $('body > div.container_1 > div.header > div.nav > div > li:nth-child(1)').click(() => {
        $('body').animate(
            {
                scrollTop: $('.container_2').offset().top,
            },
            500
        );
    });
    $('.container_1').on('mousewheel', () => {
        $('body').animate(
            {
                scrollTop: $('.container_2').offset().top,
            },
            500
        );
    });
});
