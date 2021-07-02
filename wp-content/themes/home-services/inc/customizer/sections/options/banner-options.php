<?php
/**
 * Banner Options
 *
 * @package home_services
 */
add_action( 'customize_register', 'home_services_banner_panel' );

function home_services_banner_panel( $wp_customize)  {
    $wp_customize->get_section('header_image')->priority = 15;
    $wp_customize->get_section( 'header_image' )->title  = esc_html__('Banner', 'home-services');
    $wp_customize->get_section('header_image')->panel = 'home_service_frontpage_settings';
    $wp_customize->get_section('header_image')->priority = 1;
}

add_action( 'customize_register', 'home_services_customize_banner_options' );

function home_services_customize_banner_options( $wp_customize ) {
    $wp_customize->add_setting( 'banner_display_in_homepage', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'banner_display_in_homepage', array(
        'label' => esc_html__( 'Show in Home page','home-services' ),
        'section' => 'header_image',
        'settings' => 'banner_display_in_homepage',
        'type'=> 'home-services-toggle',
    ) ) );

    $wp_customize->add_setting( 'banner_display_in_otherpage', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'banner_display_in_otherpage', array(
        'label' => esc_html__( 'Show in all pages','home-services' ),
        'section' => 'header_image',
        'settings' => 'banner_display_in_otherpage',
        'type'=> 'home-services-toggle',
    ) ) );

    $wp_customize->add_setting( 'heading_for_banner', array(
        'transport' => 'refresh',
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'heading_for_banner', array(
        'label' => esc_html__( 'Heading', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'heading_for_banner',
        'type'=> 'text',
    ) );

    $wp_customize->selective_refresh->add_partial( 'heading_for_banner', array(
        'selector' => '.header-background-one .main-title', // You can also select a css class
    ) );

    $wp_customize->add_setting( 'content_for_banner', array(
        
        'sanitize_callback' => 'sanitize_textarea_field',
        'default' => '',
    ) );

    $wp_customize->add_control( 'content_for_banner', array(
        'label' => esc_html__( 'Body Content', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'content_for_banner',
        'type'=> 'textarea',
    ) );
    $wp_customize->selective_refresh->add_partial( 'content_for_banner', array(
        'selector' => '.header-background-one p', // You can also select a css class
    ) );

    $wp_customize->add_setting( 'cta_btn1', array(
        'default' => '',
        'type' => 'home-services-customtext',
        'capability' => 'edit_theme_options',
        'transport' => 'refresh',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'cta_btn1', array(
        'label' => esc_html__( 'Primary Button :', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'cta_btn1',
    ) ) );

    $wp_customize->add_setting( 'cta_button1_for_banner', array(
        'transport' => 'postMessage',
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'cta_button1_for_banner', array(
        'label' => esc_html__( 'Button label', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'cta_button1_for_banner',
        'type'=> 'text',
    ) );
    $wp_customize->selective_refresh->add_partial( 'cta_button1_for_banner', array(
        'selector' => '.header-background-one .button-group .cta-1', // You can also select a css class
    ) );
    $wp_customize->add_setting( 'cta_button1_link', array(
        'sanitize_callback'     =>  'esc_url_raw',
    ) );

    $wp_customize->add_control( 'cta_button1_link', array(
        'label' => esc_html__( 'Button Link', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'cta_button1_link',
        'type'=> 'url',
    ) );
    $wp_customize->add_setting( 'cta_btn2', array(
        'default' => '',
        'type' => 'home-services-customtext',
        'capability' => 'edit_theme_options',
        'transport' => 'refresh',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'cta_btn2', array(
        'label' => esc_html__( 'Secondary Button', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'cta_btn2',
    ) ) );
    
    $wp_customize->add_setting( 'cta_button2_for_banner', array(
        'transport' => 'postMessage',
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'cta_button2_for_banner', array(
        'label' => esc_html__( 'Button label', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'cta_button2_for_banner',
        'type'=> 'text',
    ) );
    $wp_customize->selective_refresh->add_partial( 'cta_button2_for_banner', array(
        'selector' => '.header-background-one .button-group .cta-2', // You can also select a css class
    ) );
    $wp_customize->add_setting( 'cta_button2_link', array(
        'sanitize_callback'     =>  'esc_url_raw',
    ) );

    $wp_customize->add_control( 'cta_button2_link', array(
        'label' => esc_html__( 'Button Link', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'cta_button2_link',
        'type'=> 'url',
    ) );
    $wp_customize->add_setting( 'contact_for_banner', array(
        'transport' => 'postMessage',
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'contact_for_banner', array(
        'label' => esc_html__( 'Text Field', 'home-services' ),
        'section' => 'header_image',
        'settings' => 'contact_for_banner',
        'type'=> 'text',
    ) );
    $wp_customize->selective_refresh->add_partial( 'contact_for_banner', array(
        'selector' => '.header-background-one .call-us', // You can also select a css class
    ) );
}