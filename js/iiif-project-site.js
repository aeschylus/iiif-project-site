var App = (function() {

    var $root = $("body"),
    $menuItems = $("#mainMenu li a"),
    $close = $('.close'),
    demoImg = $('img.apiDemo')[0];

    //widget element caching
    var $title = $('.description h3'),
    $region = $('.region'),
    $size = $('.size'),
    $rotation = $('.rotation'),
    $quality = $('.quality'),
    $format = $('.format')
    $dimensions = $('.dimensions'),

    var demoData = {
        titles: [
            "Full Image, No Transformation",
            "Selecting A Region",
            "Shrinking The File's Dimensions",
            "Requesting Rotated Response",
            "Specifying Output File Format"
        ],
        region: ["full", "1000,1200,500,1000", "1000,1200,500,1000", "1000,1200,500,1000","1000,1200,500,1000"],
        position: "1000, 1200",
        returnDimensions: ["3071,4851", "500,1000", "254,127", "127,254", "127,254"],
        sizes: ["full","pct:25.3","pct:25.3","pct:25.3","pct:25.3"],
        rotations: ["none", "none", "none", "90","90"],
        quality: "native",
        formats: ["jpg", "jpg", "jpg", "jpg","png"]
    }

    function render() {
    }

    // event map
    // ---------

    function bindEvents() {
        $('#apiDemo').change(handleApiDemoSelection);
    }

    // event handlers
    // --------------
    function handleApiDemoSelection() {
        var option = this.options[this.selectedIndex],
        optionIndex = this.selectedIndex;
        
        demoImg.src = option.value;
        
        $(demoImg).hide().fadeIn(500);
        $title.text(demoData.titles[optionIndex]).hide().fadeIn(500);
        $region.text(demoData.region[optionIndex]).hide().fadeIn(500);
        $size.text(demoData.sizes[optionIndex]).hide().fadeIn(500);
        $rotation.text(demoData.rotations[optionIndex]).hide().fadeIn(500)
        $quality.text(demoData.quality[0]).hide().fadeIn(500);
        $format.text(demoData.formats[optionIndex]).hide().fadeIn(500);
        $format.text(demoData.formats[optionIndex]).hide().fadeIn(500);
    }


    // return initialization 
    // ---------------------

    function init() {
        bindEvents();
        render();
    } 

    return {
        init : init
    };

})($);

$(function() {
    App.init();
});


