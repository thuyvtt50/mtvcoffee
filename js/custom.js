// JavaScript Document
$('#banner').owlCarousel({
   	 loop:true,	// cho lap lại
	items:1,// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:10000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	nav:true,	 //cho xuất hiện bộ nút tới lui 
	  })

$('#blog-carousel').owlCarousel({
   	loop:true,	// cho lap lại		
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
   	 autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	//nav:true,	 cho xuất hiện bộ nút tới lui 
	margin:50,
// xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i


	 responsive:{
        0:{
            items:1,
           dots:false,
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
	
	  })
