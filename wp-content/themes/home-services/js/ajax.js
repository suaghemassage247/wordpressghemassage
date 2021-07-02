// promotion
jQuery('#filter_promotion select').on('change',function(){    
    var seviceTag  = jQuery("select[name='select_service']").val();
    home_services_call_ajax_Promotion(seviceTag);
});
function home_services_call_ajax_Promotion(seviceTag) {
    jQuery.ajax({
        url: home_services_ajax_params.ajaxurl,
        type: "POST",
        data: {
            action: 'home_services_filter_promotionCategory',
            seviceTag : seviceTag,
        },
        success: function (data) {
            jQuery('.category-promotiofilter').html(data);
        },
        error: function (request, status, error) {

            console.log(request.responseText);

        }
    });

}
// testimonial
jQuery('#filter_testimonial select').on('change',function(){    
    var seviceTag  = jQuery("select[name='select_service']").val();
    home_services_call_ajax_testimonial(seviceTag);
});

function home_services_call_ajax_testimonial(seviceTag) {
    jQuery.ajax({
        url: home_services_ajax_params.ajaxurl,
        type: "POST",
        data: {
            action: 'home_services_filter_testimonialCategory',
            seviceTag : seviceTag,
        },
        success: function (data) {
            jQuery('.category-testimonialfilter').html(data);
        },
       error: function (request, status, error) {

            console.log(request.responseText);

        }
    });

}