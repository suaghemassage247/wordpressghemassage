<?php
function home_services_filter_promotion_category() {
    get_template_part( '/inc/ajax-template/filter', 'promotion' );
    die();
}
add_action('wp_ajax_nopriv_home_services_filter_promotionCategory', 'home_services_filter_promotion_category');
add_action('wp_ajax_home_services_filter_promotionCategory', 'home_services_filter_promotion_category');

function home_services_filter_testimonial_category() {
    get_template_part( '/inc/ajax-template/filter', 'testimonial' );
    die();
}
add_action('wp_ajax_nopriv_home_services_filter_testimonialCategory', 'home_services_filter_testimonial_category');
add_action('wp_ajax_home_services_filter_testimonialCategory', 'home_services_filter_testimonial_category');