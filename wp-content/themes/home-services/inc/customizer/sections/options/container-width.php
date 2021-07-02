<?php

/**
 * Container width Settings
 *
 * @package home_services
 */

if ( home_services_set_pro_active() ) {
add_action( 'customize_register', 'home_services_customize_container_width' );

function home_services_customize_container_width( $wp_customize ) {

    $wp_customize->add_section( 'home_services_container_width', array(
        'title'          => esc_html__( 'Container Width', 'home-services' ),
        'description'    => esc_html__( 'Container Width :', 'home-services' ), 
        'priority'       => 12,       
    ) );
            
    $wp_customize->add_setting( 'container_width', array(
        'default'           => 1140,
        'sanitize_callback' => 'absint',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_control( new Home_Services_Slider_Control( $wp_customize, 'container_width', array(
        'section' => 'home_services_container_width',
        'settings' => 'container_width',
        'label'   => esc_html__( 'Container Width', 'home-services' ),
        'choices'     => array(
            'min'   => 1024,
            'max'   => 1600,
            'step'  => 1,
        )
    ) ) );

    
}
}
