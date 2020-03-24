$("#sideGalleryInt").ready(function () {

    $('.gallery-item').hover(
        function () {
            $(this).find('.img-title').fadeIn(300);
        },
        function () {
            $(this).find('.img-title').fadeOut(100);
        });

});

$(".blackBox").ready(function () {

    $('.gallery-format').hover(
        function () {
            $(this).find('.gallery-title').fadeIn(300);
        },
        function () {
            $(this).find('.gallery-title').fadeOut(100);
        });

});


