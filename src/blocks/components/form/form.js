import $ from "jquery";
import Inputmask from "inputmask";

export function initInputMask(elem, mask) {
    $(elem).Inputmask({
        mask: mask,
        showMaskOnHover: false,
        oncomplete: function(elem) {
            elem.target.setAttribute("area-valid", "true");
        },
        onincomplete: function(elem) {
            elem.target.setAttribute("area-valid", "false");
        },
        oncleared: function(elem) {
            elem.target.removeAttribute("area-valid");
        },
        onKeyValidation: function(elem) {
            console.log(elem);
        }
    });
}