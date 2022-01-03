import $ from "jquery";

export function initTabs(parent, elem, content) {

    $(elem).on("click", function () {
        $(elem).removeClass("is-active");
        $(this).addClass("is-active");
        $(content).removeClass('is-active');
        $(content).eq($(this).index()).addClass('is-active');
    });

}