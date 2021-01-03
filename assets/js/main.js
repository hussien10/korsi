$(document).ready(function() {


    // dropdown menu
    $(".dropdown").hover(function() {
            $(".dropdown-menu").show()
        }, function() {
            $(".dropdown-menu").hide()
        })
        //swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },
        cssMode: true,
    });
    // masonery
    $('.grid').masonry({
        // options
        percentPosition: true,
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        gutter: 16,
    });
    //show img viewer
    $(".grid-item").on("click", function() {
            $(".img-viewer").fadeIn(250);
            $("body").css("overflow", "hidden")
        })
        // close img viewer
    $(".close").on("click", function() {
            $(".img-viewer").fadeOut(250);
            $("body").css("overflow", "auto")
        })
        // show the img
    $(".gallery .grid-item img").on("click", function() {
        var imgAttr = $(this).prop('src');
        $(".img-viewer img").attr('src', imgAttr);
    })

    // up button
    $(".up").on("click", function(e) {
            e.preventDefault();
            $("body,html").animate({
                scrollTop: 0
            }, 1000)
        })
        // single product slider
    var def = $(".item-thumps>div").eq(1).find("img").attr("src")
    $(".item-slider img").attr("src", def)
    $(".item-thumps>div").on("click", function() {
        var thump = $(this).find("img").attr("src")
        $(".item-slider img").attr("src", thump)
    })


})