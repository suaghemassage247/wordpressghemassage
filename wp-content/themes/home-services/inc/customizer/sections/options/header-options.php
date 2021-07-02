<?php
/**
 * Header options
 */

add_action( 'customize_register', 'home_services_header_options_section' );

function home_services_header_options_section( $wp_customize ) {

    $wp_customize->add_section( 'home_services_header_options_section', array(
        'title'          => esc_html__( 'Header Options', 'home-services' ),
        'description'    => esc_html__( 'Enable Sticky Menu', 'home-services' ),
        'priority'       => 14,
        'capability'     => 'edit_theme_options',
    ) );

    $wp_customize->add_setting( 'home_services_header_sticky_menu_option', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
      ) );
  
    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'home_services_header_sticky_menu_option', array(
        'label' => esc_html__( 'Enable Sticky Menu','home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'home_services_header_sticky_menu_option',
        'type'=> 'home-services-toggle',
    ) ) );

    $default_header_layout = 'one';
    if( home_services_set_pro_active() ) {
        $default_header_layout = 'two';
    }

    $wp_customize->add_setting( 'home_services_header_layouts', array(
        'sanitize_callback' => 'home_services_sanitize_choices',
        'default'     => $default_header_layout,
    ) );

    if ( home_services_set_pro_active() ) {

        $choices = array(
            'one'   => get_template_directory_uri() . '/images/homepage/header-layouts/header-layout-one.jpg',
            'two'   => get_template_directory_uri() . '/images/homepage/header-layouts/header-layout-two.jpg',
            'three'   => get_template_directory_uri() . '/images/homepage/header-layouts/header-layout-three.jpg',
        );
    }
    else {
        $choices = array(
            'one'   => get_template_directory_uri() . '/images/homepage/header-layouts/header-layout-one.jpg',
            'two'   => get_template_directory_uri() . '/images/homepage/header-layouts/header-layout-two.jpg',
        );
    }

    $wp_customize->add_control( new Home_Services_Radio_Image_Control( $wp_customize, 'home_services_header_layouts', array(
        'label' => esc_html__( 'Header Layout','home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'home_services_header_layouts',
        'type'=> 'home-services-radio-image',
        'choices'     => $choices
    ) ) );


    $wp_customize->add_setting( 'home_services_contact_text', array(
        'sanitize_callback' => 'sanitize_text_field',
        'default' => ''
    ) );

    $wp_customize->add_control( 'home_services_contact_text', array(
        'label' => esc_html__('Contact Text', 'home-services'),
        'section' => 'home_services_header_options_section',
        'settings' => 'home_services_contact_text',
        'type' => 'text',
    ) );

    if ( home_services_set_pro_active() ) {
    $wp_customize->add_setting( 'hide_show_contact_responsive', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_contact_responsive', array(
        'label' => esc_html__( 'Enable Contact In Mobile View','home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'hide_show_contact_responsive',
        'type'=> 'home-services-toggle',
    ) ) );
}

    $wp_customize->add_setting( 'home_services_contact_num', array(
        'transport' => 'postMessage',
        'sanitize_callback' => 'sanitize_text_field',
        'default' => ''
    ) );

    $wp_customize->add_control( 'home_services_contact_num', array(
        'label' => esc_html__('Enter Contact Number', 'home-services'),
        'section' => 'home_services_header_options_section',
        'settings' => 'home_services_contact_num',
        'type' => 'text',
    ) );

    $wp_customize->selective_refresh->add_partial('home_services_contact_num', array(
        'selector' => '.header-wrapper .contact-number .contact-btn', // You can also select a css class
    ));
    

    $wp_customize->add_setting( 'hide_show_header_button_1', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_header_button_1', array(
        'label' => esc_html__( 'Enable Header Button 1','home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'hide_show_header_button_1',
        'type'=> 'home-services-toggle',
    ) ) );
    if ( home_services_set_pro_active() ) {
    $wp_customize->add_setting( 'hide_show_header1_responsive', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_header1_responsive', array(
        'label' => esc_html__( 'Enable Header Button 1 in Mobile View','home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'hide_show_header1_responsive',
        'type'=> 'home-services-toggle',
        'active_callback' => function(){
            return get_theme_mod( 'hide_show_header_button_1', true );
        },
    ) ) );
    }

    $wp_customize->add_setting( 'header_button1_label', array(
        'transport' => 'postMessage',
        'sanitize_callback'     =>  'sanitize_text_field',
        'default' => ''
    ) );

    $wp_customize->add_control( 'header_button1_label', array(
        'label' => esc_html__( 'Header Button 1 Label', 'home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'header_button1_label',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'hide_show_header_button_1', true );
        },
    ) );

    $wp_customize->selective_refresh->add_partial('header_button1_label', array(
        'selector' => '.header-wrapper .contact-number .schedule-btn', // You can also select a css class
    ));

    $wp_customize->add_setting( 'header_button1_link', array(
        'sanitize_callback'     =>  'esc_url_raw',
    ) );

    $wp_customize->add_control( 'header_button1_link', array(
        'label' => esc_html__( 'Header Button 1 Link', 'home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'header_button1_link',
        'type'=> 'url',
        'active_callback' => function(){
            return get_theme_mod( 'hide_show_header_button_1', true );
        },
    ) );

    $wp_customize->add_setting( 'hide_show_header_button_2', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_header_button_2', array(
        'label' => esc_html__( 'Enable Header Button 2','home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'hide_show_header_button_2',
        'type'=> 'home-services-toggle',
    ) ) );
    if ( home_services_set_pro_active() ) {
    $wp_customize->add_setting( 'hide_show_header2_responsive', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_header2_responsive', array(
        'label' => esc_html__( 'Enable Header Button 2 in Mobile View','home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'hide_show_header2_responsive',
        'type'=> 'home-services-toggle',
        'active_callback' => function(){
            return get_theme_mod( 'hide_show_header_button_2', true );
        },
    ) ) );
    }

    $wp_customize->add_setting( 'header_button2_label', array(
        'transport' => 'postMessage',
        'sanitize_callback'     =>  'sanitize_text_field',
        'default' => ''
    ) );

    $wp_customize->add_control( 'header_button2_label', array(
        'label' => esc_html__( 'Header Button 2 Label', 'home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'header_button2_label',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'hide_show_header_button_2', true );
        },
    ) );

    $wp_customize->selective_refresh->add_partial('header_button2_label', array(
        'selector' => '.header-wrapper .contact-number .financing-btn', // You can also select a css class
    ));

    $wp_customize->add_setting( 'header_button2_link', array(
        'sanitize_callback'     =>  'esc_url_raw',
    ) );

    $wp_customize->add_control( 'header_button2_link', array(
        'label' => esc_html__( 'Header Button 2 Link', 'home-services' ),
        'section' => 'home_services_header_options_section',
        'settings' => 'header_button2_link',
        'type'=> 'url',
        'active_callback' => function(){
            return get_theme_mod( 'hide_show_header_button_2', true );
        },
    ) );
}