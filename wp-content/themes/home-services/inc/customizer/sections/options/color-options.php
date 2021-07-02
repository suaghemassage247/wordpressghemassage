<?php
/**
 * Color and Fonts options
 */

add_action( 'customize_register', 'home_services_colors_panel' );

function home_services_colors_panel( $wp_customize)  {
    $wp_customize->get_section( 'colors' )->priority = 11;
    $wp_customize->get_section( 'colors' )->title  = esc_html__('Color & Fonts', 'home-services' );
}

add_action( 'customize_register', 'home_services_color_fonts_options_section' );

function home_services_color_fonts_options_section( $wp_customize ) {

    $wp_customize->add_setting( 'body_options_text', array(
        'default' => '',
        'type' => 'home-services-customtext',
        'capability' => 'edit_theme_options',
        'transport' => 'refresh',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'body_options_text', array(
        'label' => esc_html__( 'Body Font:', 'home-services' ),
        'section' => 'colors',
        'settings' => 'body_options_text',
    ) ) );

    $wp_customize->add_setting( 'body_line_height', array(
        'default'           => 1.5,
        'sanitize_callback' => 'home_services_sanitize_float',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_control( new Home_Services_Slider_Control( $wp_customize, 'body_line_height', array(
        'section' => 'colors',
        'settings' => 'body_line_height',
        'label'   => esc_html__( 'Line Height', 'home-services' ),
        'choices'     => array(
            'min'   => 0.1,
            'max'   => 10,
            'step'  => 0.1,
        )
    ) ) );
    $wp_customize->add_setting( 'font_family', array(
        'transport' => 'postMessage',
        'default'     => 'Quicksand',
        'sanitize_callback' => 'home_services_sanitize_google_fonts',
    ) );

    $wp_customize->add_control( 'font_family', array(
        'settings'    => 'font_family',
        'label'       =>  esc_html__( 'Choose Font Family For Your Site', 'home-services' ),
        'section'     => 'colors',
        'type'        => 'select',
        'choices'     => home_services_google_fonts()
    ) );

    $wp_customize->add_setting( 'font_size', array(
        'transport' => 'postMessage',
        'default'     => '14px',
        'sanitize_callback' => 'home_services_sanitize_select',
    ) );

    $wp_customize->add_control( 'font_size', array(
        'settings'    => 'font_size',
        'label'       =>  esc_html__( 'Choose Font Size', 'home-services' ),
        'section'     => 'colors',
        'type'        => 'select',
        'default'     => '13px',
        'choices'     =>  array(
            '13px' => '13px',
            '14px' => '14px',
            '15px' => '15px',
            '16px' => '16px',
            '17px' => '17px',
            '18px' => '18px',
        ),
        'priority'    =>  101
    ) );

    $wp_customize->add_setting( 'body_font_weight', array(
        'default'           => 500,
        'sanitize_callback' => 'absint',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_control( new Home_Services_Slider_Control( $wp_customize, 'body_font_weight', array(
        'section' => 'colors',
        'settings' => 'body_font_weight',
        'label'   => esc_html__( 'Font Weight', 'home-services' ),
        'priority' => 103,
        'choices'     => array(
            'min'  => 100,
            'max'  => 900,
            'step' => 100,
        ),
    ) ) );

    $wp_customize->add_setting( 'heading_options_text', array(
        'default' => '',
        'type' => 'home-services-customtext',
        'capability' => 'edit_theme_options',
        'transport' => 'refresh',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'heading_options_text', array(
        'label' => esc_html__( 'Heading Options :', 'home-services' ),
        'section' => 'colors',
        'settings' => 'heading_options_text',
        'priority'    => 103
    ) ) );

    $wp_customize->add_setting( 'header_line_height', array(
        'default'           => 1.5,
        'sanitize_callback' => 'home_services_sanitize_float',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_control( new Home_Services_Slider_Control( $wp_customize, 'header_line_height', array(
        'section' => 'colors',
        'settings' => 'header_line_height',
        'label'   => esc_html__( 'Line Height', 'home-services' ),
        'priority'    => 103,
        'choices'     => array(
            'min'   => 0.1,
            'max'   => 10,
            'step'  => 0.1,
        )  
    ) ) );

    $wp_customize->add_setting( 'heading_font_family', array(
        'transport' => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_google_fonts',
        'default'     => 'Poppins',
    ) );

    $wp_customize->add_control( 'heading_font_family', array(
        'settings'    => 'heading_font_family',
        'label'       =>  esc_html__( 'Font Family', 'home-services' ),
        'section'     => 'colors',
        'type'        => 'select',
        'choices'     => home_services_google_fonts(),
        'priority'    => 103
    ) );

    $wp_customize->add_setting( 'heading_font_weight', array(
        'default'           => 600,
        'sanitize_callback' => 'absint',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_control( new Home_Services_Slider_Control( $wp_customize, 'heading_font_weight', array(
        'section' => 'colors',
        'settings' => 'heading_font_weight',
        'label'   => esc_html__( 'Font Weight', 'home-services' ),
        'priority' => 103,
        'choices'     => array(
            'min'  => 100,
            'max'  => 900,
            'step' => 100,
        ),
    ) ) );

    $default_size = array(
        '1' =>  32,
        '2' =>  28,
        '3' =>  24,
        '4' =>  21,
        '5' =>  15,
        '6' =>  12,
    );

    for( $i = 1; $i <= 6 ; $i++ ) {

        $max_size = $i == '1'? '150' : '50';
        $wp_customize->add_setting( 'home_services_heading_' . $i . '_size', array(
            'default'           => $default_size[$i],
            'sanitize_callback' => 'absint',
            'transport' => 'postMessage',
        ) );

        $wp_customize->add_control( 'home_services_heading_' . $i . '_size', array(
            'type'  => 'number',
            'section'   => 'colors',
            'label' => esc_html__( 'Heading ', 'home-services' ) . $i . esc_html__(' Size', 'home-services' ),
            'priority' => 104,
            'input_attrs' => array(
                'min' => 10,
                'max' => $max_size,
                'step'  =>  1
            ),
        ) );
    }

    $wp_customize->add_setting( 'primary_color', array(
        'default'     => '#05398e',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'primary_color', array(
        'label'      => esc_html__( 'Primary Color', 'home-services' ),
        'section'    => 'colors',
        'settings'   => 'primary_color',
        'priority'   => 1
    ) ) );

    $wp_customize->add_setting( 'secondary_color', array(
        'default'     => '#faaa29',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_color', array(
        'label'      => esc_html__( 'Secondary Color', 'home-services' ),
        'section'    => 'colors',
        'settings'   => 'secondary_color',
        'priority'   => 1
    ) ) );
            
    $wp_customize->add_setting( 'text_color', array(
        'default'     => '#010101',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'text_color', array(
        'label'      => esc_html__( 'Text Color', 'home-services' ),
        'section'    => 'colors',
        'settings'   => 'text_color',
        'priority'   => 1
    ) ) );

    $wp_customize->add_setting( 'accent_color', array(
        'default'     => '#05398e',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'accent_color', array(
        'label'      => esc_html__( 'Accent Color', 'home-services' ),
        'section'    => 'colors',
        'settings'   => 'accent_color',
        'priority'   => 1
    ) ) );

    $wp_customize->add_setting( 'light_color', array(
        'default'     => '#ffffff',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'light_color', array(
        'label'      => esc_html__( 'Light Color', 'home-services' ),
        'section'    => 'colors',
        'settings'   => 'light_color',
        'priority'   => 1
    ) ) );

    $wp_customize->add_setting( 'dark_color', array(
        'default'     => '#010101',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'dark_color', array(
        'label'      => esc_html__( 'Dark Color', 'home-services' ),
        'section'    => 'colors',
        'settings'   => 'dark_color',
        'priority'   => 1
    ) ) );

    $wp_customize->add_setting( 'grey_color', array(
        'default'     => '#aaaaaa ',
        'transport'   => 'postMessage',
        'sanitize_callback' => 'home_services_sanitize_hex_color'
    ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'grey_color', array(
        'label'      => esc_html__( 'Grey Color', 'home-services' ),
        'section'    => 'colors',
        'settings'   => 'grey_color',
        'priority'   => 1
    ) ) );

    


}

