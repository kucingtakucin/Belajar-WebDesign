/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        const windowScroll = $(this).scrollTop();
        const home = $('#home').children();
        const jumbotronHeight = $('.jumbotron').outerHeight(true);
        const gambarHero = $('.gambar-hero .gambar-wrapper');

        const gambarOffset = $('#gambar-hero').offset().top;

        $(home.first()).css({
            transform: 'translate(0px, ' + windowScroll/3.90 + '%)'
        });

        $(home.next().first()).css({
            transform: 'translate(0px, ' + windowScroll/1.35  + '%)'
        });

        $(home.next().last()).css({
            transform: 'translate(0px, ' + windowScroll/1.10 + '%)'
        });

        if (windowScroll >= gambarOffset - jumbotronHeight / 4) {
            gambarHero.addClass('show-element');
        }
    });

});
