jQuery(document).ready(function($){
	$('.btn-col-views').click(function(){
		var text = $(this).text() == 'Xem thêm' ? 'Xem thêm' : 'Ẩn bớt';
		$(this).text(text).prev('.col-view-more').toggleClass('active');
	})

	$('.serch-tenmien form').on('submit', function(e){
		e.preventDefault();
		var dm_nd = $(".serch-tenmien input").val();
		 if (dm_nd == '') {

            alert("Bạn chưa nhập domain để kiểm tra..!");

        } else {
			$('.esco_check_domain_title').remove()
        	 $(".esco_check_domain").before('<h3 class="esco_check_domain_title" style="margin-top: 30px !important">Kết quả:</h3>')
        	listid = ",.com,.vn,.net,.org,.vn,.com.vn,.net.vn"

        	listid = listid.substr(1);

            var mang_com = listid;

            var mang_domain = dm_nd;

            $(".esco_check_domain").empty()

            $.ajax({

                type: "GET",

                url: '/wp-admin/admin-ajax.php',

                dataType: 'text',

                data: ({

                    action: 'tb_load_more_new',

                    mang_com: mang_com,

                    mang_domain: mang_domain,

                }),

                beforeSend: function () {

                    $('.check-domain .loader').show();

                },

                success: function (data) {

                    if (data) {

                        $.each(JSON.parse(data), function (num, domain) {

                            $(".esco_check_domain").append('<li class="check-domain_doshow" id="check-domain_doshow' + num + '" val=' + domain + '>' + domain);

                        });

                        $('.check-domain .loader').hide();

                        esco_kq(JSON.parse(data).length);

                    }

                }

            });
        }
		function esco_kq($esco_length) {

		    for (var $i = 0; $i < $esco_length; $i++) {

		        var esco_domain = $('#check-domain_doshow' + $i).attr("val");

		        var i = $i;

		        $.ajax({

		            type: "GET",

		            url: '/wp-admin/admin-ajax.php',

		            dataType: 'text',

		            data: ({

		                action: 'tb_show_domain',

		                esco_domain: esco_domain,

		                i: i,

		            }),

		            success: function (data) {

		                if (data) {

		                    $.each(JSON.parse(data), function (num1, kq) {

		                        $("#check-domain_doshow" + num1).html(kq);

		                    });

		                }

		            }

		        });

		    };

        };
	})

});