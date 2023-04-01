$(function(){
  //clickイベント
        $('#ham-btn').on('click',function(){
        $(this).toggleClass('is-active');
        $('#g-nav').toggleClass('g-nav-shown');   
    });

  //scrollイベント
    var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#area-2').offset().top;//#area-2の位置まできたら
  var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
    //IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
    //ヘッダーが上から出現する
    $('#header').removeClass('UpMove'); //#headerにUpMoveというクラス名を除き
    $('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
    //ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
    $('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ

  //item-detailのスライド
        //item-detailのスライドの変数
        let point1 = $('#img1').offset().top;
        let point2 = $('#img2').offset().top;
        let point3 = $('#img3').offset().top;
        console.log(point1); 
        let y = $(this).scrollTop();
      if(y >= point1 - 50 && y < point2 - 50){
       $('#dot1').addClass('current').siblings('li').removeClass('current');
       }else if(y >= point2 - 50 && y < point3 - 50){
        $('#dot2').addClass('current').siblings('li').removeClass('current');
       }else if(y > point3 - 100){
        $('#dot3').addClass('current').siblings('li').removeClass('current');
       }
      
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    var headerH = $("#header").outerHeight(true);//headerの高さを取得    
    $('#g-nav li a').click(function () {
  var elmHash = $(this).attr('href'); 
  var pos = $(elmHash).offset().top-headerH;//header分の高さを引いた高さまでスクロール
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});

//slide
        $('.main-slider').bxSlider({
            mode: 'fade',
            auto: true,
            speed: 400,
            controls: false,
            pager: false,
        });
        $('.sub-slider').bxSlider({
            // mode: 'fade',
            auto: true,
            controls: false,
            pager: false,
        });
        // $('.sub-slider-1').bxSlider({
        //     minSlides: 4,
        //     maxSlides: 4,
        //     slideWidth: 360,
        //     slideMargin: 10,
        //     infiniteLoop: false,
        // });

        $('.sub-slider-1').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 2,
            prevArrow: '<img src="img/left.svg" class="slick-arrow prev-arrow">',
            nextArrow: '<img src="img/right.svg" class="slick-arrow next-arrow">',
            responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 961,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 501,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        swipeToSlide: true,
        touchMove: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
        });
        $('.sub-slider-1').slick({      
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: '<img src="img/left.svg" class="slick-arrow prev-arrow">',
          nextArrow: '<img src="img/right.svg" class="slick-arrow next-arrow">',
          responsive: [
          {
            breakpoint: 501,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: false,
              nextArrow: false,
              swipeToSlide: true,
              touchMove: true,
            }
          }
        ]
        });
    });