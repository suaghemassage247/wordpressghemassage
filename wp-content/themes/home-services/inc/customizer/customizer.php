<?php
/**
 * home_services Theme Customizer
 *
 * @package home_services
 */

add_action( 'customize_register', 'home_services_change_homepage_settings_options' );
function home_services_change_homepage_settings_options( $wp_customize )  {
    
	$wp_customize->get_section( 'title_tagline' )->priority = 10;
    $wp_customize->get_section( 'static_front_page' )->priority = 20;

    $wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
    $wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

    $wp_customize->selective_refresh->add_partial( 'blogname', array(
	    'selector' => '.site-title a',
	) );
	$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
	    'selector' => '.site-description',
	) );

    require get_template_directory() . '/inc/google-fonts.php';    
}

$sections = array(  'header-options','banner-options', 'cta-block', 'color-options', 'blog-options', 'container-width','footer-options','form-options','frontpage-options');



if( ! empty( $sections ) ) {
	foreach( $sections as $section ) {
	    require get_template_directory() . '/inc/customizer/sections/options/' . $section . '.php';
	}
}

/**
 * Enqueue the customizer javascript.
 */
function home_services_customize_preview_js() {
 	wp_enqueue_script( 'home-services-customizer-preview', get_template_directory_uri() . '/js/customizer.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'customize_preview_init', 'home_services_customize_preview_js' );


/**
 * Sanitization Functions
*/
require get_template_directory() . '/inc/customizer/sanitization-functions.php';

add_action( 'customize_register', 'home_services_site_identity_settings' );

function home_services_site_identity_settings( $wp_customize ) {

    $wp_customize->add_setting( 'site_title_color_option', array(
        'capability'  => 'edit_theme_options',
        'default'     => '#4169e1',
        'transport' => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'site_title_color_option', array(
        'label'      => esc_html__( 'Site Title Color', 'home-services' ),
        'section'    => 'title_tagline',
        'settings'   => 'site_title_color_option',
    ) ) );

    $wp_customize->add_setting( 'site_title_size', array(
        'default'           => 30,
        'sanitize_callback' => 'absint',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_control( new Home_Services_Slider_Control( $wp_customize, 'site_title_size', array(
        'section' => 'title_tagline',
        'settings' => 'site_title_size',
        'label'   => esc_html__( 'Logo Size', 'home-services' ),
        'choices'     => array(
            'min'   => 15,
            'max'   => 60,
            'step'  => 1,
        )
    ) ) );

    $wp_customize->add_setting( 'site_identity_font_family', array(
        'transport' => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_google_fonts',
        'default'     => 'Poppins',
    ) );

    $wp_customize->add_control( 'site_identity_font_family', array(
        'settings'    => 'site_identity_font_family',
        'label'       =>  esc_html__( 'Site Identity Font Family', 'home-services' ),
        'section'     => 'title_tagline',
        'type'        => 'select',
        'choices'     => home_services_google_fonts(),
    ) );
    
}
