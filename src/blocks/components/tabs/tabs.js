import $ from "jquery";

export function initTabs(parent, elem, content) {

    $(elem).on("click", function() {
        $(this)
            .parents(parent)
            .find(elem)
            .removeClass("is-active");
        $(this).parents(parent).find(content).hide();
        $(this).addClass("is-active");
        $(this)
            .parents(parent)
            .find(content)
            .eq($(this).index())
            .show();
    });

    $(content).hide();
    $(content).eq(0).show();

}
