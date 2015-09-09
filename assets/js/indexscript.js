$(document).ready(function(){

    $("#home-text").addClass("active-nav-text");
    var $activeText = $("#home-text"); 
    var aboutBubble = $("#about-bubble");
    var projectsBubble = $("#projects-bubble");
    var contactBubble = $("#contact-bubble");
    var resumeBubble = $("#resume-bubble");

    // animates bubble links
    var moveBubble = function(bubbleId) {
        if (bubbleId == "about" && aboutBubble.length) {
            aboutBubble.css("top", -75);
        }
        if (bubbleId == "projects") {
            projectsBubble.css("top", -130);
        }
        if (bubbleId == "contact") {
            contactBubble.css("top", -75);
        }
        if (bubbleId == "resume") {
            resumeBubble.css("top", -130);
        }
        if (bubbleId == "email" || bubbleId == "linkedin") {
            var bubbleName = "#" + bubbleId + "-bubble";
            $(bubbleName).css("top", 80);
            $(".contact-stem").css("height", 93);
            $(".contact-stem").css("top", -93);

        }
        if (bubbleId == "github") {
            $("#github-bubble").css("top", 120);
            $("#github-stem").css("height", 133);
            $("#github-stem").css("top", -133);
        }
    };

    moveBubble("about");
    moveBubble("projects");
    moveBubble("contact");
    moveBubble("resume");

    // change active text based on waypoints and views

    $("#view2").waypoint(function(direction){
        if (direction == 'down' && $activeText != $("#about-nav-text")) {
            $activeText.removeClass("active-nav-text");
            $("#about-nav-text").addClass("active-nav-text");
            $activeText = $("#about-nav-text");
        } else if (direction == 'up' && $activeText != $("#home-text")) {
            $activeText.removeClass("active-nav-text");
            $("#home-text").addClass("active-nav-text");
            $activeText = $("#home-text");
        }
    }, {'offset': '20px'});

    $("#view3").waypoint(function(direction){
        if (direction == 'down' && $activeText != $("#projects-nav-text")) {
            $activeText.removeClass("active-nav-text");
            $("#projects-nav-text").addClass("active-nav-text");
            $activeText = $("#projects-nav-text");
        } else if (direction == 'up' && $activeText != $("#about-nav-text")) {
            $activeText.removeClass("active-nav-text");
            $("#about-nav-text").addClass("active-nav-text");
            $activeText = $("#about-nav-text");
        }
    }, {'offset': '20px'});

    $("#view4").waypoint(function(direction){
        if (direction == 'down' && $activeText != $("#contact-nav-text")) {
            $activeText.removeClass("active-nav-text");
            $("#contact-nav-text").addClass("active-nav-text");
            $activeText = $("#contact-nav-text");
            moveBubble("email");
            moveBubble("linkedin");
            moveBubble("github");
        }
    }, {'offset': '50%'});

    // scrolls to part of page corresponding to the given itemID
    var navScroll = function(itemID) {
        var scrollTo = 0;
        if (itemID == "home-item") {
            scrollTo = $("#view1").offset().top;
        }
        else if (itemID == "about-item" || itemID == "about-bubble") {
            scrollTo = $("#view2").offset().top;
        }
        else if (itemID == "projects-item" || itemID == "projects-bubble") {
            scrollTo = $("#view3").offset().top;
        } else if (itemID == "contact-item" || itemID == "contact-bubble") {
            scrollTo = $("#view4").offset().top;
        }
        $("html, body").animate({
            scrollTop: (scrollTo)
        }, 500);
    };


    // sets active text in navigation bar and scrolls to corresponding section upon click
    $(".nav-item").click(function() {
        var $activeItem = $(this).children(".nav-text");
        if ($activeText !== $activeItem) {
            $activeItem.addClass("active-nav-text");
            $activeText.removeClass("active-nav-text");
            $activeText = $activeItem;
        }
        navScroll($(this).attr('id'));
    });

    // scrolls to section corresponding to the clicked bubble
    $(".bubble").click(function() {
        $activeText.removeClass("active-nav-text");
        navScroll($(this).attr('id'));
    });

});