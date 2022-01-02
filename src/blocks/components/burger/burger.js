import $ from "jquery";

export function burger() {
    $('.burger').click(function() {
        $(this).toggleClass('opened');
    });
}