// создание плавного скролла при использовании навигации по сайту
$(document).ready(function() {
    $(".nav-link").click(function() {
    var headerHeight = $("header").height();                      
    $(".nav-list").removeClass("show-menu"); // навигационный блок будет скрываться при нажатии на любой пункт навигации 
    $(".header-menu-close").removeClass("active");
    $(".header-menu-open").addClass("active");
    var href = $(this).attr("href");
    $("html, body").animate ({
        scrollTop: $(href).offset().top - headerHeight // вычитаем высоту хедера, чтобы он не перекрывал контент
    }, 1000);
    return false;
    });
});
 


// выпадающий блок с навигацией (при max-width: 991px)
function toggleMobileNavMenu(state = $(".header-menu-open").hasClass("active")) {
    if (state === true) {
        $(".nav-list").addClass("show-menu");
        $(".header-menu-open").removeClass("active");
        $(".header-menu-close").addClass("active");
    } else {
        $(".nav-list").removeClass("show-menu");
        $(".header-menu-close").removeClass("active");
        $(".header-menu-open").addClass("active");
    }
}

$(document).ready(function() {
    $(".header-menu").click(function() {
        toggleMobileNavMenu();
    })
})



// удаление класса "show-menu" при ширине окна браузера большей, чем 991px, для предотвращения багов
$(window).resize(function() {
    if ($(window).width() > 991 && $('.nav-list').hasClass("show-menu")) {
        $('.nav-list').removeClass('show-menu');
        $(".header-menu-close").removeClass("active");
        $(".header-menu-open").addClass("active");
    } 
}).resize();



// Создание спойлера с информацией о компании. 
$(".spoiler-click").click(function() {
    var headerHeight = $("header").height();    
    if($(".spoiler-text").is(":visible")) {
        $(".spoiler-text").hide(400);
        $(".spoiler-icon-js").css("transform", "rotate(360deg)")
    } else {
        $(".spoiler-text").show(400);
        $(".spoiler-icon-js").css("transform", "rotate(180deg)")
        $("html, body").animate ({                                 // создание скролла к началу текста о компании при открытии спойлера
            scrollTop: $(".spoiler-click").offset().top - headerHeight
        }, 1000);
        return false;
    }
});



// работа с popup-блоком
function delegate(event, selector, callback) {
    document.addEventListener(event, function(evt) {
        if (evt.target.matches(selector)) callback(evt)
    })
}

delegate("click", "a.popup-open", function(evt) {

    toggleMobileNavMenu(false);

    var attr = evt.target.getAttribute("href");
    var id = attr.substring(1);
    var popupBlock = document.getElementById(id);
    if (attr)
        popupBlock.classList.add("active");
})


delegate("click", "div.popup-wrapper", function(evt) {

    var popupBlock = evt.target.closest(".popup");
    popupBlock.classList.remove("active");
})


delegate("click", "div.popup-close", function(evt) {

    var popupBlock = evt.target.closest(".popup");
    popupBlock.classList.remove("active");
})





