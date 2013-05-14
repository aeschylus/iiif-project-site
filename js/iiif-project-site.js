var App = (function() {

    var $root = $("body"),
    $menuItems = $("#mainMenu li a"),
    $close = $('.close');

    function render() {
    }

    // event map
    // ---------

    function bindEvents() {
    }

    // event handlers
    // --------------


    // return initialization 
    // ---------------------

    function init() {
        bindEvents();
        render();
        $('body').annotator();
    } 

    return {
        init : init
    };

})($);

$(function() {
    App.init();
});


