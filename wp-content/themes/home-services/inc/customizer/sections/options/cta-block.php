<?php

/**
 * footer Fonts Settings
 *
 * @package home_services
 */

add_action( 'customize_register', 'home_services_customize_cta_block_options_section' );
function home_services_customize_cta_block_options_section( $wp_customize ) {

    $wp_customize->add_section( 'home_services_customize_cta_block_options_section', array(
        'title'          => esc_html__( 'Services', 'home-services' ),
        'priority'       => 3,
        'panel'          =>'home_service_frontpage_settings',    
    ) );
            
    $wp_customize->add_setting( 'cta_blocks_show_hide', array(
        'sanitize_callback'     =>  'home_services_sanitize_checkbox',
        'default'               =>  false
    ) );

    $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'cta_blocks_show_hide', array(
        'label' => esc_html__( 'Show Services Section in Home Page','home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'cta_blocks_show_hide',
        'type'=> 'home-services-toggle',
    ) ) );

    $wp_customize->add_setting( 'services_heading', array(
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'services_heading', array(
        'label' => esc_html__( 'Section Heading', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'services_heading',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );
    $wp_customize->selective_refresh->add_partial('services_heading', array(
        'selector' => '.banner-blocks h2 ', // You can also select a css class
    ));

    $wp_customize->add_setting( 'heading_cta_block_1', array(
        'default' => '',
        'type' => 'home-services-customtext',
        'capability' => 'edit_theme_options',
        'transport' => 'refresh',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'heading_cta_block_1', array(
        'label' => esc_html__( 'Service 1 :', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'heading_cta_block_1',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) ) );

    $wp_customize->add_setting('cta_block_1_image', array(
        'transport'         => 'refresh',
        'capability' => 'edit_theme_options',
        'sanitize_callback'     =>  'home_services_sanitize_file',
        'type' => 'theme_mod',
    ));

    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'cta_block_1_image', array(
        'label'             => __('Image', 'home-services'),
        'section'           => 'home_services_customize_cta_block_options_section',
        'settings'          => 'cta_block_1_image',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    )));   

    $wp_customize->add_setting( 'title_for_cta_block_1', array(
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'title_for_cta_block_1', array(
        'label' => esc_html__( 'Title', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'title_for_cta_block_1',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'content_for_cta_block_1', array(
        'sanitize_callback' => 'sanitize_textarea_field',
        'transport' => 'refresh',
    ) );

    $wp_customize->add_control( 'content_for_cta_block_1', array(
        'label' => esc_html__( 'Description', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'content_for_cta_block_1',
        'type'=> 'textarea',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'cta_block_1_link_label', array(
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'cta_block_1_link_label', array(
        'label' => esc_html__( 'Link Label', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'cta_block_1_link_label',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );
 
    $wp_customize->add_setting( 'cta_block_1_link', array(
        'sanitize_callback'     =>  'esc_url_raw',
    ) );

    $wp_customize->add_control( 'cta_block_1_link', array(
        'label' => esc_html__( 'Link', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'cta_block_1_link',
        'type'=> 'url',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'heading_cta_block_2', array(
        'default' => '',
        'type' => 'home-services-customtext',
        'capability' => 'edit_theme_options',
        'transport' => 'refresh',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'heading_cta_block_2', array(
        'label' => esc_html__( 'Serivce 2 :', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'heading_cta_block_2',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) ) );

    $wp_customize->add_setting('cta_block_2_image', array(
        'transport'         => 'refresh',
        'capability' => 'edit_theme_options',
        'sanitize_callback'     =>  'home_services_sanitize_file',
        'height'         => '',
        'type' => 'theme_mod'
    ));

    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'cta_block_2_image', array(
        'label'             => __('Image', 'home-services'),
        'section'           => 'home_services_customize_cta_block_options_section',
        'settings'          => 'cta_block_2_image',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    )));   

    $wp_customize->add_setting( 'title_for_cta_block_2', array(
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'title_for_cta_block_2', array(
        'label' => esc_html__( 'Title', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'title_for_cta_block_2',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'content_for_cta_block_2', array(
        'sanitize_callback' => 'sanitize_textarea_field',
        'transport' => 'refresh',
    ) );

    $wp_customize->add_control( 'content_for_cta_block_2', array(
        'label' => esc_html__( 'Description', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'content_for_cta_block_2',
        'type'=> 'textarea',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'cta_block_2_link_label', array(
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'cta_block_2_link_label', array(
        'label' => esc_html__( 'Link Label', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'cta_block_2_link_label',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );
 
    $wp_customize->add_setting( 'cta_block_2_link', array(
        'sanitize_callback'     =>  'esc_url_raw',
    ) );

    $wp_customize->add_control( 'cta_block_2_link', array(
        'label' => esc_html__( 'Link', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'cta_block_2_link',
        'type'=> 'url',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'heading_cta_block_3', array(
        'default' => '',
        'type' => 'home-services-customtext',
        'capability' => 'edit_theme_options',
        'transport' => 'refresh',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    
    $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'heading_cta_block_3', array(
        'label' => esc_html__( 'Service 3 :', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'heading_cta_block_3',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) ) );

    $wp_customize->add_setting('cta_block_3_image', array(
        'transport'         => 'refresh',
        'sanitize_callback'     =>  'home_services_sanitize_file',
        'height'         => '',
        'capability' => 'edit_theme_options',
        'type' => 'theme_mod'
    ));

    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'cta_block_3_image', array(
        'label'             => __('Image', 'home-services'),
        'section'           => 'home_services_customize_cta_block_options_section',
        'settings'          => 'cta_block_3_image',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ))); 

    $wp_customize->add_setting( 'title_for_cta_block_3', array(
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'title_for_cta_block_3', array(
        'label' => esc_html__( 'Title', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'title_for_cta_block_3',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'content_for_cta_block_3', array(
        'sanitize_callback' => 'sanitize_textarea_field',
        'transport' => 'refresh',
    ) );

    $wp_customize->add_control( 'content_for_cta_block_3', array(
        'label' => esc_html__( 'Description', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'content_for_cta_block_3',
        'type'=> 'textarea',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );

    $wp_customize->add_setting( 'cta_block_3_link_label', array(
        'sanitize_callback'     =>  'sanitize_text_field',
        'default'               =>  ''
    ) );

    $wp_customize->add_control( 'cta_block_3_link_label', array(
        'label' => esc_html__( 'Link Label', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'cta_block_3_link_label',
        'type'=> 'text',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );
 
    $wp_customize->add_setting( 'cta_block_3_link', array(
        'sanitize_callback'     =>  'esc_url_raw',
    ) );

    $wp_customize->add_control( 'cta_block_3_link', array(
        'label' => esc_html__( 'Link', 'home-services' ),
        'section' => 'home_services_customize_cta_block_options_section',
        'settings' => 'cta_block_3_link',
        'type'=> 'url',
        'active_callback' => function(){
            return get_theme_mod( 'cta_blocks_show_hide', true );
        },
    ) );
}
