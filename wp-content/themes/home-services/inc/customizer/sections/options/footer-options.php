<?php

/**
 * footer Fonts Settings
 *
 * @package home_services
 */


add_action( 'customize_register', 'home_services_customize_register_footer_options_section' );
function home_services_customize_register_footer_options_section( $wp_customize ) {

    $wp_customize->add_section( 'home_services_customize_register_footer_options_section', array(
        'title'          => esc_html__( 'Footer Options', 'home-services' ),
        'description'    => esc_html__( 'Footer widget title Fonts :', 'home-services' ),
        'priority'       => 18,        
    ) );

    
    if ( home_services_set_pro_active() ) {
    $wp_customize->add_setting( 'footer_copyright_text', array(
        'transport' => 'postMessage',
        'sanitize_callback'     =>  'wp_kses_post',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'copyright_text', array(
        'label' => esc_html__( 'Copyright :', 'home-services' ),
        'section' => 'home_services_customize_register_footer_options_section',
        'settings' => 'footer_copyright_text',
        'type'=> 'textarea',
    ) );

    $wp_customize->selective_refresh->add_partial('footer_copyright_text', array(
        'selector' => 'footer .site-info', // You can also select a css class
    ));
}

}

