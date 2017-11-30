var swiperWrapper=(function () {
    var $container = $('.swiper-container'),
        $wrapper = $container.find('.swiper-wrapper'),
        musicAudio=$('#musicAudio')[0],
        $musicBtn=$('.music-img');

function change(ex) {
    var index=ex.activeIndex,
        slideAry=ex.slides;
    $.each(slideAry,function (n,item) {
        item.id=index===n?`page${index+1}`:``;
        item.style.opcity=index===n?'1':'0';
    });
}
    return {init:function (index) {
        musicAudio.play();
        $musicBtn.tap(function () {
            if(musicAudio.paused){
                musicAudio.play();
                $musicBtn.addClass('move');
                autoTimer=setInterval(comptedAlready,1000);
                return;
            }
            musicAudio.pause();
            $musicBtn.removeClass('move');
            clearInterval(autoTimer);
        });
        var example= new Swiper('.swiper-container', {
            direction: "vertical",
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false,
            onInit:change,
            onTransitionEnd: change
        });
        example.slideTo(index,0)
    }}
})();

swiperWrapper.init(0);
