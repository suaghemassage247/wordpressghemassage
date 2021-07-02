<?php

/**
 * Form style for Conatct Form 7
 *
 * @package home_services
 */
if ( class_exists( 'WPCF7' ) ) {
add_action( 'customize_register', 'home_services_customize_form_style' );

function home_services_customize_form_style( $wp_customize ) {

    $wp_customize->add_section( 'home_services_form_style', array(
        'title'          => esc_html__( 'Form Setting', 'home-services' ),
        'description'    => esc_html__( 'Contact Form 7 Styler for the theme:', 'home-services' ), 
        'priority'       => 12,       
    ) );
            
   $wp_customize->add_setting( 'form_field_color', array(
        'default'     => '#ffffff',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'form_field_color', array(
        'label'      => esc_html__( 'Field Background Color', 'home-services' ),
        'section'    => 'home_services_form_style',
        'settings'   => 'form_field_color',
        'priority'   => 1
    ) ) );
    $wp_customize->add_setting( 'form_field_text_color', array(
        'default'     => '#232323',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'form_field_text_color', array(
        'label'      => esc_html__( 'Field Text Color', 'home-services' ),
        'section'    => 'home_services_form_style',
        'settings'   => 'form_field_text_color',
        'priority'   => 1
    ) ) );

    $wp_customize->add_setting( 'form_field_border_color', array(
        'default'     => '#232323',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'form_field_border_color', array(
        'label'      => esc_html__( 'Field Border Color', 'home-services' ),
        'section'    => 'home_services_form_style',
        'settings'   => 'form_field_border_color',
        'priority'   => 1
    ) ) );

    $wp_customize->add_setting( 'form_button_style', 
            array(
              'default'  =>  false,
              'sanitize_callback' => 'home_services_sanitize_checkbox'
            )
        );
        $wp_customize->add_control( 'form_button_style', 
            array(
              'label'   => __( 'Enable Full Width Button', 'home-services' ),
              'section' => 'home_services_form_style',
              'settings' => 'form_button_style',
              'type'    => 'checkbox',
            )
        );

}
}
