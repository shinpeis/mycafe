		$(function(){
			// 1. 上からスライド
			// $("#drawer_toggle").click(function(){
			// 	$(this).toggleClass("open");
			// 	$("#global_nav").slideToggle();
			// });
			
			// 2. フェードイン
			// $("#drawer_toggle").click(function(){
			// 	$(this).toggleClass("open");
			// 	$("#global_nav").fadeToggle();
			// });

			// 3. 横からスライド
			$("#drawer_toggle").click(function(){
				$(this).toggleClass("open");
				$("#global_nav").toggleClass("sp_open");
        $('body').toggleClass('noscroll');
			});
      $('#global_nav').on('click', function(){
        $('#drawer_toggle').removeClass('open');
        $('#global_nav').removeClass('sp_open'); 
        $('body').toggleClass('noscroll');
      }) 
		});
    