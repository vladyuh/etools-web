import $ from "jquery";

$(document).ready(function() {
    var arrow = $('.accordion-items_arrow');
    var items = $('.accordion-items');
    var parent = '.accordion-items_item';
    var content = '.accordion-items_content';
    arrow.on('click', function() {
        $(this).toggleClass('is-active');
        $(this).parents(parent).find(content).slideToggle();
    })
});