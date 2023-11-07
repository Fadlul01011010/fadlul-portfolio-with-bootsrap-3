// anonimus function 
// (function() {

// })();
// 

// buat even u menangkap event ketika link di klick

$('.page-scroll').on('click', function(){
    // amabil isi href 
    var tujuan = $(this).attr('href');
    // console.log(href); 
    var elementTejuan = $(tujuan);

    // untuk mengetahui jarak 
    // elementTejuan.offset().top
    // console.log($('body').scrollTop());
    $('body').animate({
        scrollTop : elementTejuan.offset().top - 50
    }, 1000);
    
    // e.preventDefault(); 

});
