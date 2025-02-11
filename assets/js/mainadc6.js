jQuery(document).ready(function($) {
	$('.gallery-box .box-image').before('<svg><rect x="0" y="0" fill="none" width="100%" height="100%"></rect></svg>')
	$('.box-logo .img ').before('<svg><rect x="0" y="0" fill="none" width="100%" height="100%"></rect></svg>')
	$('.slide-re').each(function(){
		let $this = $(this);
		let heightR = 0;
		$this.find('.box-re .col-inner').each(function(){
			let $thisC = $(this);
			if($thisC.height()>heightR){
				heightR = $thisC.height();
			}
		})
		if(heightR> 0 && $(window).width() > 850){
			$this.find('.box-re .col-inner').height(heightR)
		}
	})
    $('.btn-filter').click(function() {
		$('.select-btn').removeClass('open');
		$('.col-filter-none').hide();
		let checkItem = false;
		var selectedDepartments = $('.container_posts_filter[data-filter="department"] .item.checked').map(function() {
			return $(this).attr('data-filter_value');
		}).get();

		var selectedTypeJobs = $('.container_posts_filter[data-filter="type_job"] .item.checked').map(function() {
			return $(this).attr('data-filter_value');
		}).get();

		var selectedPositionJobs = $('.container_posts_filter[data-filter="position_job"] .item.checked').map(function() {
			return $(this).attr('data-filter_value');
		}).get();

		$('.recruit-data').hide();

		$('.recruit-data').each(function() {
			var departmentData = $(this).data('department').split(', ');
			var typeData = $(this).data('type').split(', ');
			var positionData = $(this).data('position').split(', ');

			var showItem = true;

			if (selectedDepartments.length > 0 && !arrayContainsArray(departmentData, selectedDepartments)) {
				showItem = false;
			}
			if (selectedTypeJobs.length > 0 && !arrayContainsArray(typeData, selectedTypeJobs)) {
				showItem = false;
			}
			if (selectedPositionJobs.length > 0 && !arrayContainsArray(positionData, selectedPositionJobs)) {
				showItem = false;
			}

			if (showItem) {
				checkItem = true;
				$(this).show();
			}
		});
		if (!checkItem) {
			$('.col-filter-none').show();
		}
	});

    // Hàm kiểm tra một mảng có chứa tất cả các phần tử của một mảng khác hay không
    function arrayContainsArray(superset, subset) {
	
		return subset.some(function(value) {
			return superset.indexOf(value) >= 0;
		});
	}
    

    // Xử lý sự kiện khi click vào các item để chọn hoặc bỏ chọn
 	$('.select-btn').click(function(){
		$('.select-btn').not($(this)).removeClass('open');
		$(this).toggleClass('open')
	})
	$('.container_posts_filter li').click(function(){
		$(this).toggleClass('checked');
		let countCheck = $(this).closest('.list-items').find('li.checked').length;
		if(countCheck > 0){
			$(this).closest('.container_posts_filter').find('.btn-text-count').text(countCheck).show()
		}else{
			$(this).closest('.container_posts_filter').find('.btn-text-count').hide().text('')
		}
	})

    // Xử lý sự kiện khi click vào nút Clear All
    $('#btn-clear').click(function() {
        $('.container_posts_filter .item').removeClass('checked');
		$('.select-btn').removeClass('open');
        $('.recruit-data').show();
		$('.col-filter-none').hide();
		$('.btn-text-count').hide().text('')
    });
	
});


jQuery(document).ready(function ($) {
	$('.dich-vu-template-service-template2').find('#header').addClass('transparent has-transparent')
	
	$("a.tel-link, .tel-link a").each(function() {
		var hrefValue = $(this).attr("href");
		var newHrefValue = hrefValue.replace(/^.*\/tel:/, "tel:");
		$(this).attr("href", newHrefValue);
	});
	$("a.mail-link, .mail-link a").each(function() {
		var hrefValue = $(this).attr("href");
		var newHrefValue = hrefValue.replace(/^.*\/mailto:/, "mailto:");
		$(this).attr("href", newHrefValue);
	});
	$('.has-mobile-slide ').lazyFlickity({
		"watchCSS": true,
		autoPlay: 2000,
		prevNextButtons: false,
		pageDots: false,
		cellAlign: 'left'
	})
	$('.slide-cat ').lazyFlickity({
		autoPlay: 2000,
		pageDots: false,
		cellAlign: 'left',
		wrapAround: true,
		contain: true,
		freeScroll: true,
		groupCells: 1
	})
	if ( jQuery().slick ) {
		jQuery('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav',
			lazyLoad: 'ondemand',
		});
		jQuery('.slider-nav').slick({
			centerMode: true,
			slidesToShow: 9,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			dots: false,
			centerPadding: '0',
			arrows: false,
			infinite: true,
			asNavFor: '.slider-for',
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 9,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						autoplay: false,
						arrows: true,
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 576,
					settings: {
						arrows: true,
						autoplay: false,
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				}
			]
		});
	}
	$('.row-tm').lazyFlickity({
		pageDots: false,
		cellAlign: 'left',
		wrapAround: true,
		contain: true,
		autoPlay: 2000,
		freeScroll: true,
		groupCells: 1
	})
	$('.slide-mobile').lazyFlickity({
		cellAlign: 'left',
		watchCSS: true,
		autoPlay: 2000,
		wrapAround: true,
		contain: true,
		groupCells: 1
	})
});