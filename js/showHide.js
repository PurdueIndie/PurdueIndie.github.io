/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $("p.question").click(function () {
        $(this).nextUntil("p.question").fadeToggle("slow", "linear");
    });
});