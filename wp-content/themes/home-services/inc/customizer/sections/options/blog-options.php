<?php
/**
 * Blog List Settings
 * 
 * @package home_services
 */


add_action( 'customize_register', 'home_services_customize_blog_option' );

function home_services_customize_blog_option( $wp_customize ) {

    $wp_customize->add_section( 'home_services_customize_blog_option', array(
        'title'          => esc_html__( 'Blog Options', 'home-services' ),
        'priority'       => 17,        
    ) );

        $wp_customize->add_setting( 'blog_post_layout', array(
            'capability'  => 'edit_theme_options',        
            'sanitize_callback' => 'home_services_sanitize_choices',
            'default'     => 'sidebar-right',
        ) );
    
        $wp_customize->add_control( new Home_Services_Buttonset_Control( $wp_customize, 'blog_post_layout', array(
            'label' => esc_html__( 'Layouts :', 'home-services' ),
            'section' => 'home_services_customize_blog_option',
            'settings' => 'blog_post_layout',
            'type'=> 'home-services-radio-buttonset',
            'choices'     => array(
                'sidebar-left' => esc_html__( 'Sidebar at left', 'home-services' ),
                'no-sidebar'    =>  esc_html__( 'No sidebar', 'home-services' ),
                'sidebar-right' => esc_html__( 'Sidebar at right', 'home-services' ),            
            ),
        ) ) );
        
        $wp_customize->add_setting( 'blog_post_view', array(
            'capability'  => 'edit_theme_options',     
            'sanitize_callback' => 'home_services_sanitize_choices',
            'default'     => 'grid-view',
        ) );
    
        $wp_customize->add_control( new Home_Services_Buttonset_Control( $wp_customize, 'blog_post_view', array(
            'label' => esc_html__( 'Post View :', 'home-services' ),
            'section' => 'home_services_customize_blog_option',
            'settings' => 'blog_post_view',
            'type'=> 'home-services-radio-buttonset',
            'choices'     => array(
                'grid-view' => esc_html__( 'Grid View', 'home-services' ),
                'list-view' => esc_html__( 'List View', 'home-services' ),
                'col-3-view' => esc_html__( 'Column 3 View', 'home-services' ),
                'full-width-view' => esc_html__( 'Fullwidth View', 'home-services' ),
            ),
        ) ) );   

        $wp_customize->add_setting( 'hide_show_date', array(
            'sanitize_callback'     =>  'home_services_sanitize_checkbox',
            'default'               =>  true
        ) );
    
        $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_date', array(
            'label' => esc_html__( 'Show Date','home-services' ),
            'section' => 'home_services_customize_blog_option',
            'settings' => 'hide_show_date',
            'type'=> 'home-services-toggle',
        ) ) );

        $wp_customize->add_setting( 'hide_show_author', array(
            'sanitize_callback'     =>  'home_services_sanitize_checkbox',
            'default'               =>  true
        ) );
    
        $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_author', array(
            'label' => esc_html__( 'Show Author','home-services' ),
            'section' => 'home_services_customize_blog_option',
            'settings' => 'hide_show_author',
            'type'=> 'home-services-toggle',
        ) ) );

        $wp_customize->add_setting( 'hide_show_comment', array(
            'sanitize_callback'     =>  'home_services_sanitize_checkbox',
            'default'               =>  true
        ) );
    
        $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_comment', array(
            'label' => esc_html__( 'Show Comment','home-services' ),
            'section' => 'home_services_customize_blog_option',
            'settings' => 'hide_show_comment',
            'type'=> 'home-services-toggle',
        ) ) );
        $wp_customize->add_setting( 'hide_show_category', array(
            'sanitize_callback'     =>  'home_services_sanitize_checkbox',
            'default'               =>  true
        ) );
    
        $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_category', array(
            'label' => esc_html__( 'Show Category','home-services' ),
            'section' => 'home_services_customize_blog_option',
            'settings' => 'hide_show_category',
            'type'=> 'home-services-toggle',
        ) ) );
        $wp_customize->add_setting( 'hide_show_tags', array(
            'sanitize_callback'     =>  'home_services_sanitize_checkbox',
            'default'               =>  true
        ) );
    
        $wp_customize->add_control( new Home_Services_Toggle_Control( $wp_customize, 'hide_show_tags', array(
            'label' => esc_html__( 'Show Tags','home-services' ),
            'section' => 'home_services_customize_blog_option',
            'settings' => 'hide_show_tags',
            'type'=> 'home-services-toggle',
        ) ) );
        $wp_customize->add_setting( 'disable_sidebar_mobile', 
            array(
              'default'  =>  false,
              'sanitize_callback' => 'home_services_sanitize_checkbox'
            )
        );
        $wp_customize->add_control( 'disable_sidebar_mobile', 
            array(
              'label'   => __( 'Disable sidebar on mobile device', 'home-services' ),
              'section' => 'home_services_customize_blog_option',
              'settings' => 'disable_sidebar_mobile',
              'type'    => 'checkbox',
            )
        );


}