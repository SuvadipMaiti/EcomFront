/*custom js*/

$(document).ready(function() {

    // banner carousel
    $('#banner-area .owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        items: 1
    });

    //top sale carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    //isotope filter
    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    //filter items on button click
    $(".button-group").on("click", "button", function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // new product carousel
    $('#new-product .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    // blogs carousel
    $('#blogs .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });
    //product qty section
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // let $qty_input = $(".qty .qty_input");
    //click on qty up button
    $qty_up.click(function(e) {
            let $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
            if ($qty_input.val() >= 1) {
                $qty_input.val(function(i, oldval) {
                    return ++oldval;
                })
            }
        })
        //click on qty down button
    $qty_down.click(function(e) {
        let $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if ($qty_input.val() > 1) {
            $qty_input.val(function(i, oldval) {
                return --oldval;
            })
        }
    })

});