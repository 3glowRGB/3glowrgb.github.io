function labnolThumb(a) {
    var b = '<img src="images/videoss.png">',
        c = '<div class="play"></div>';
    return b.replace("ID", a) + c
}

function labnolIframe() {
    var a = document.createElement("iframe");
    a.setAttribute("src", "https://www.youtube.com/embed/videoseries?list=" + this.dataset.id + "&autoplay=1"), a.setAttribute("frameborder", "0"), a.setAttribute("allowfullscreen", "1"), this.parentNode.replaceChild(a, this)
}
$(document).ready(function() {
    ! function() {
        [].slice.call(document.querySelectorAll(".tabs")).forEach(function(a) {
            new CBPFWTabs(a)
        })
    }(), $("#main-nav").sidr(), $("#fullpage").fullpage({
        verticalCentered: !0,
        easing: "easeInOutCirc",
        css3: !1,
        scrollingSpeed: 900,
        slidesNavigation: !0,
        slidesNavPosition: "bottom",
        easingcss3: "ease",
        navigation: !0,
        anchors: ["Home", "Features", "Video", "Calculator", "Contact"],
        navigationPosition: "left"
    }), $(document).mouseup(function(a) {
        if ($(".sidr-open ")[0]) {
            var b = $("#sidr");
            b.is(a.target) || 0 !== b.has(a.target).length || $(".sidr-open #main-nav").click()
        }
    }), $("#submit").click(function() {
        return $.post("contact.php", $("#contact-form").serialize(), function(a) {
            $("#success").fadeIn().html(a), $("#success").delay(2e3).fadeOut()
        }), !1
    }), $("#sss_link").click(function(a) {
        return $("#sss_container").show(), $("#sss_container").modal({
            fadeDuration: 250
        }), !1
    }),    
    $(".ms-dd").msDropdown(),
    $("#card").flip({
      trigger: 'manual'
    }),
    $(".front").css("position", "absolute");
    $(".back").css("position", "absolute");
    
    
}), jQuery(window).load(function() {
    jQuery("#preloader").fadeOut()
}), document.addEventListener("DOMContentLoaded", function() {
    var a, b, c = document.getElementsByClassName("youtube");
    for (b = 0; b < c.length; b++) a = document.createElement("div"), a.setAttribute("data-id", c[b].dataset.id), a.innerHTML = labnolThumb(c[b].dataset.id), a.onclick = labnolIframe, c[b].appendChild(a)
});

function calc() {
	var packet = {
		led_type: $('#led_type').val(),
		led_count: $('#led_count').val(),
		strip_length: $('#strip_length').val(),
		strip_voltage: $('#strip_voltage').val(),
		lang: $('#lang').val()
	}
	$.ajax({
		type: 'post',
		url: 'calc.php',
		data: {query: packet},
		success: function(result) {
			$('#calc_answer').html(result);
			$(".front").fadeOut();
			$("#card").flip(true);
		},
		error: function(err) {
			$(".front").fadeOut();
			$("#card").flip(true);
			$('#calc_answer').html("Hata!! " + err);
			
		}
	});
}