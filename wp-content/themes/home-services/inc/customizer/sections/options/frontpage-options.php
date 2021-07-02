<?php

/**
 * Front Page Options for Theme
 *
 * @package home_services
 */

add_action( 'customize_register', 'home_services_frontpage_options' );

function home_services_frontpage_options( $wp_customize ) {
    //promotion section
    $wp_customize->add_panel( 'home_service_frontpage_settings', 
        array(
            'priority'       => 2,
            'capability'     => 'edit_theme_options',
            'title'      =>  esc_html__('Front Page Settings', 'home-services'),
        ) 
    );
    if ( home_services_set_pro_active() ) {
        $wp_customize->add_section( 'home_services_customize_promotion_options', array(
            'title'          => esc_html__( 'Promotion', 'home-services' ),
            'priority'       => 16,
            'panel'          =>'home_service_frontpage_settings',
        ) );

        $wp_customize->add_setting( 'promotion_show_hide', 
                array(
                  'default'  =>  false,
                  'sanitize_callback' => 'home_services_sanitize_checkbox',
                )
            );
        $wp_customize->add_control( 'promotion_show_hide', 
            array(
              'label'   =>  esc_html__( 'Show Promotion Section', 'home-services' ),
              'section' => 'home_services_customize_promotion_options',
              'settings' => 'promotion_show_hide',
              'type'    => 'checkbox',
            )
        );
        $wp_customize->add_setting( 'promotion_bg_color',
            array(
                'default'     => '#F4F6FE',
                'transport'   => 'refresh',
                'sanitize_callback' => 'home_services_sanitize_hex_color'
            )
        );

        $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 
            'promotion_bg_color', 
                array(
                    'label'      => esc_html__( 'Background Color', 'home-services' ),
                    'section'    => 'home_services_customize_promotion_options',
                    'settings'   => 'promotion_bg_color',
                    'active_callback' => function(){
                        return get_theme_mod( 'promotion_show_hide', true );
                    },
                ) 
            ) 
        );

        $wp_customize->add_setting( 'promotion_hide_disclaimer', 
                array(
                  'default'  =>  false,
                  'sanitize_callback' => 'home_services_sanitize_checkbox',
                )
            );
        $wp_customize->add_control( 'promotion_hide_disclaimer', 
            array(
              'label'   =>  esc_html__( 'Show disclaimer on the section', 'home-services' ),
              'section' => 'home_services_customize_promotion_options',
              'settings' => 'promotion_hide_disclaimer',
              'type'    => 'checkbox',
              'active_callback' => function(){
                    return get_theme_mod( 'promotion_show_hide', true );
                },
            )
        );

        $wp_customize->add_setting( 'promotion_heading_text', 
            array(
                'sanitize_callback'     =>  'sanitize_text_field',
                'default'               =>  '',
            ) 
        );

        $wp_customize->add_control( 'promotion_heading_text', 
            array(
                'label' => esc_html__( 'Section Heading', 'home-services' ),
                'section' => 'home_services_customize_promotion_options',
                'settings' => 'promotion_heading_text',
                'type' => 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'promotion_show_hide', true );
                },
            ) 
        );
        $wp_customize->selective_refresh->add_partial( 'promotion_heading_text', array(
            'selector' => '.home-pomotion-header h2', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'desc_promotion_section', 
            array(
                'sanitize_callback' => 'sanitize_textarea_field',
                'default' => '',
            ) 
        );

        $wp_customize->add_control( 'desc_promotion_section',
            array(
                'label' => esc_html__( 'Description Content', 'home-services' ),
                'section' => 'home_services_customize_promotion_options',
                'settings' => 'desc_promotion_section',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'promotion_show_hide', true );
                },
            )
        );
        $wp_customize->selective_refresh->add_partial( 'desc_promotion_section', array(
            'selector' => '.home-pomotion-header p', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'promotion_btn_text', 
            array(
               
                'default'               =>  '',
                'sanitize_callback'     =>  'sanitize_text_field',
            ) 
        );

        $wp_customize->add_control( 'promotion_btn_text', 
            array(
                'label' => esc_html__( 'Button Label', 'home-services' ),
                'section' => 'home_services_customize_promotion_options',
                'settings' => 'promotion_btn_text',
                'type'=> 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'promotion_show_hide', true );
                },
            ) 
        );
        $wp_customize->selective_refresh->add_partial( 'promotion_btn_text', array(
            'selector' => '.home-pomotion-header a.promotion-btn', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'promotion_btn_text_link', 
            array(
                'sanitize_callback'     =>  'esc_url_raw',
            ) 
        );

        $wp_customize->add_control( 'promotion_btn_text_link', 
            array(
                'label' => esc_html__( 'Link', 'home-services' ),
                'section' => 'home_services_customize_promotion_options',
                'settings' => 'promotion_btn_text_link',
                'type'=> 'url',
                'active_callback' => function(){
                    return get_theme_mod( 'promotion_show_hide', true );
                },
            ) 
        );
        
        $wp_customize->add_setting('home_services_promotion_tags',
            array(
                'default'           => '',
                'capability'        => 'edit_theme_options',
                'sanitize_callback' => 'sanitize_text_field',
            )
        );
        $wp_customize->add_control( new Home_Service_Promotion_Tags_Control($wp_customize, 'home_services_promotion_tags', array(
                    'label'       => esc_html__('Select Tag', 'home-services'),
                    'description' => esc_html__('Select tag to be display on promotion section', 'home-services'),
                    'section'     => 'home_services_customize_promotion_options',
                    'type'        => 'taxonomy-dropdown',
                    'args' => array(),
                    'settings'    => 'home_services_promotion_tags',
                    'priority'    => 10,
                    'active_callback' => function(){
                        return get_theme_mod( 'promotion_show_hide', true );
                    },
                )
            )
        );

        $wp_customize->add_setting( 'promotion_readmore_text', 
            array(
               
                'default'               =>  '',
                'sanitize_callback'     =>  'sanitize_text_field',
            ) 
        );

        $wp_customize->add_control( 'promotion_readmore_text', 
            array(
                'label' => esc_html__( 'Read More Label', 'home-services' ),
                'description'=>esc_html__('Read more text to be shown in individual promotion item.','home-services'),
                'section' => 'home_services_customize_promotion_options',
                'settings' => 'promotion_readmore_text',
                'type'=> 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'promotion_show_hide', true );
                },
            ) 
        );

        /*About Section*/
         $wp_customize->add_section( 'home_services_customize_about_options', array(
            'title'          => esc_html__( 'About Us', 'home-services' ),
            'priority'       => 16,
            'panel'          =>'home_service_frontpage_settings',
        ) );
        $wp_customize->add_setting( 'about_us_show_hide', 
                array(
                  'default'  =>  false,
                  'sanitize_callback' => 'home_services_sanitize_checkbox',
                )
            );
        $wp_customize->add_control( 'about_us_show_hide', 
            array(
              'label'   =>  esc_html__( 'Show About Section', 'home-services' ),
              'section' => 'home_services_customize_about_options',
              'settings' => 'about_us_show_hide',
              'type'    => 'checkbox',
            )
        );


        $wp_customize->add_setting( 'about_heading_text', 
            array(
                'default'               =>  '',
                'sanitize_callback'     =>  'sanitize_text_field',
            ) 
        );

        $wp_customize->add_control( 'about_heading_text', 
            array(
                'label' => esc_html__( 'Section Heading', 'home-services' ),
                'section' => 'home_services_customize_about_options',
                'settings' => 'about_heading_text',
                'type' => 'text',
                'transport' => 'refresh',
                'active_callback' => function(){
                    return get_theme_mod( 'about_us_show_hide', true );
                },
            ) 
        );
        $wp_customize->selective_refresh->add_partial( 'about_heading_text', array(
            'selector' => '.about-wraper .text-block h2', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'desc_aboutus_section', 
            array(
                'default'               =>  '',
                'sanitize_callback' => 'sanitize_textarea_field',
            ) 
        );

        $wp_customize->add_control( 'desc_aboutus_section',
            array(
                'label' => esc_html__( 'Content', 'home-services' ),
                'section' => 'home_services_customize_about_options',
                'settings' => 'desc_aboutus_section',
                'transport' => 'refresh',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'about_us_show_hide', true );
                },
            )
        );
        $wp_customize->selective_refresh->add_partial( 'desc_aboutus_section', array(
            'selector' => '.about-wraper .text-block p', // You can also select a css class
        ) );
        $wp_customize->add_setting('about_us_section_image', array(
            'transport'         => 'refresh',
            'sanitize_callback'     =>  'home_services_sanitize_file',
        ));

        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'about_us_section_image', array(
            'label'             =>  esc_html__('Image', 'home-services'),
            'description'       =>  esc_html__('Upload image to be shown on about us section','home-services'),
            'section'           => 'home_services_customize_about_options',
            'settings'          => 'about_us_section_image',
            'active_callback' => function(){
                return get_theme_mod( 'about_us_show_hide', true );
            },
        )));
        $wp_customize->selective_refresh->add_partial( 'about_us_section_image', array(
            'selector' => '.about-wraper .image-block', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'about_us_btn_one', 
            array(
               
                'default'               =>  '',
                'sanitize_callback'     =>  'sanitize_text_field',
            ) 
        );

        $wp_customize->add_control( 'about_us_btn_one', 
            array(
                'label' => esc_html__( 'Button 1 Label', 'home-services' ),
                'section' => 'home_services_customize_about_options',
                'settings' => 'about_us_btn_one',
                'type'=> 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'about_us_show_hide', true );
                },
            ) 
        );
        
        $wp_customize->add_setting( 'about_us_btn_one_link', 
            array(
                'sanitize_callback'     =>  'esc_url_raw',
            ) 
        );

        $wp_customize->add_control( 'about_us_btn_one_link', 
            array(
                'label' => esc_html__( 'Button 1 Link', 'home-services' ),
                'section' => 'home_services_customize_about_options',
                'settings' => 'about_us_btn_one_link',
                'type'=> 'url',
                'active_callback' => function(){
                    return get_theme_mod( 'about_us_show_hide', true );
                },
            ) 
        );
        $wp_customize->add_setting( 'about_us_btn_two', 
            array(
               
                'default'               =>  '',
                'sanitize_callback'     =>  'sanitize_text_field',
            ) 
        );
        $wp_customize->add_control( 'about_us_btn_two', 
            array(
                'label' => esc_html__( 'Button 2 Label', 'home-services' ),
                'section' => 'home_services_customize_about_options',
                'settings' => 'about_us_btn_two',
                'type'=> 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'about_us_show_hide', true );
                },
            ) 
        );
        
        $wp_customize->add_setting( 'about_us_btn_two_link', 
            array(
                'sanitize_callback'     =>  'esc_url_raw',
            ) 
        );

        $wp_customize->add_control( 'about_us_btn_two_link', 
            array(
                'label' => esc_html__( 'Button 2 Link', 'home-services' ),
                'section' => 'home_services_customize_about_options',
                'settings' => 'about_us_btn_two_link',
                'type'=> 'url',
                'active_callback' => function(){
                    return get_theme_mod( 'about_us_show_hide', true );
                },
            ) 
        );

        /*wws Section*/
         $wp_customize->add_section( 'home_services_customize_wws_options', array(
            'title'          => esc_html__( 'Why Choose Us', 'home-services' ),
            'priority'       => 16,
            'panel'          =>'home_service_frontpage_settings',
        ) );
        $wp_customize->add_setting( 'wws_show_hide', 
                array(
                  'default'  =>  false,
                  'sanitize_callback' => 'home_services_sanitize_checkbox',
                )
            );
        $wp_customize->add_control( 'wws_show_hide', 
            array(
              'label'   =>  esc_html__( 'Show Why Choose Us', 'home-services' ),
              'section' => 'home_services_customize_wws_options',
              'settings' => 'wws_show_hide',
              'type'    => 'checkbox',
            )
        );
        $wp_customize->add_setting( 'wws_bg_color',
            array(
                'default'     => '#F4F6FE',
                'transport'   => 'refresh',
                'sanitize_callback' => 'home_services_sanitize_hex_color'
            )
        );

        $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 
            'wws_bg_color', 
                array(
                    'label'      => esc_html__( 'Background Color', 'home-services' ),
                    'section'    => 'home_services_customize_wws_options',
                    'settings'   => 'wws_bg_color',
                    'active_callback' => function(){
                        return get_theme_mod( 'wws_show_hide', true );
                    },
                ) 
            ) 
        );

        $wp_customize->add_setting( 'wws_heading_text', 
            array(
                'sanitize_callback'     =>  'sanitize_text_field',
                'default'               =>  '',
            ) 
        );

        $wp_customize->add_control( 'wws_heading_text', 
            array(
                'label' => esc_html__( 'Section Heading', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_heading_text',
                'type' => 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            ) 
        );
        $wp_customize->selective_refresh->add_partial( 'wws_heading_text', array(
            'selector' => '.home-wws-header h2', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'wws_desc_section', 
            array(
                'sanitize_callback' => 'sanitize_textarea_field',
                'default'=>'',
            ) 
        );

        $wp_customize->add_control( 'wws_desc_section',
            array(
                'label' => esc_html__( 'Description Content', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_desc_section',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            )
        );
        
        /*WWS Item 1*/
        $wp_customize->add_setting( 'heading_wws_block_1', array(
            'default' => '',
            'type' => 'home-services-customtext',
            'capability' => 'edit_theme_options',
            'transport' => 'refresh',
            'sanitize_callback' => 'sanitize_text_field',
        ) );

        $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'heading_wws_block_1', array(
            'label' => esc_html__( 'WWS 1 :', 'home-services' ),
            'section' => 'home_services_customize_wws_options',
            'settings' => 'heading_wws_block_1',
            'active_callback' => function(){
                return get_theme_mod( 'wws_show_hide', true );
            },
        ) ) );
        $wp_customize->add_setting('wws_item_1', array(
            'transport'         => 'refresh',
            'sanitize_callback'     =>  'home_services_sanitize_file',
        ));

        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'wws_item_1', array(
            'label'             => __('Icon Image', 'home-services'),
            'section'           => 'home_services_customize_wws_options',
            'settings'          => 'wws_item_1',
            'active_callback' => function(){
                return get_theme_mod( 'wws_show_hide', true );
            },
        )));

        $wp_customize->add_setting( 'wws_item_heading_1', 
            array(
                'sanitize_callback'     =>  'sanitize_text_field',
                'default'               =>  '',
            ) 
        );

        $wp_customize->add_control( 'wws_item_heading_1', 
            array(
                'label' => esc_html__( 'Heading', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_heading_1',
                'type' => 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            ) 
        );
        
        $wp_customize->add_setting( 'wws_item_info_1', 
            array(
                'sanitize_callback' => 'sanitize_textarea_field',
                'default' => '',
            ) 
        );

        $wp_customize->add_control( 'wws_item_info_1',
            array(
                'label' => esc_html__( 'Description', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_info_1',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            )
        );
        $wp_customize->add_setting( 'wws_item_link_1', 
            array(
                'sanitize_callback'     =>  'esc_url_raw',
            ) 
        );

        $wp_customize->add_control( 'wws_item_link_1', 
            array(
                'label' => esc_html__( 'Link', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_link_1',
                'type'=> 'url',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            ) 
        );

        /*WWS Item 2*/
        $wp_customize->add_setting( 'heading_wws_block_2', array(
            'default' => '',
            'type' => 'home-services-customtext',
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );

        $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'heading_wws_block_2', array(
            'label' => esc_html__( 'WWS 2 :', 'home-services' ),
            'section' => 'home_services_customize_wws_options',
            'settings' => 'heading_wws_block_2',
            'active_callback' => function(){
                return get_theme_mod( 'wws_show_hide', true );
            },
        ) ) );
        $wp_customize->add_setting('wws_item_2', array(
            'transport'         => 'refresh',
            'sanitize_callback'     =>  'home_services_sanitize_file',
        ));

        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'wws_item_2', array(
            'label'             =>  esc_html__('Icon Image', 'home-services'),
            'section'           => 'home_services_customize_wws_options',
            'settings'          => 'wws_item_2',
            'active_callback' => function(){
                return get_theme_mod( 'wws_show_hide', true );
            },
        )));

        $wp_customize->add_setting( 'wws_item_heading_2', 
            array(
                'sanitize_callback'     =>  'sanitize_text_field',
                'default'               =>  '',
            ) 
        );

        $wp_customize->add_control( 'wws_item_heading_2', 
            array(
                'label' => esc_html__( 'Heading', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_heading_2',
                'type' => 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            ) 
        );
        
        $wp_customize->add_setting( 'wws_item_info_2', 
            array(
                'transport' => 'refresh',
                'sanitize_callback' => 'sanitize_textarea_field',
            ) 
        );

        $wp_customize->add_control( 'wws_item_info_2',
            array(
                'label' => esc_html__( 'Description', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_info_2',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            )
        );
        $wp_customize->add_setting( 'wws_item_link_2', 
            array(
                'sanitize_callback'     =>  'esc_url_raw',
                'default' => '',
            ) 
        );

        $wp_customize->add_control( 'wws_item_link_2', 
            array(
                'label' => esc_html__( 'Link', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_link_2',
                'type'=> 'url',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            ) 
        );

        /*WWS Item 3*/
        $wp_customize->add_setting( 'heading_wws_block_3', array(
            'default' => '',
            'type' => 'home-services-customtext',
            'capability' => 'edit_theme_options',
            'transport' => 'refresh',
            'sanitize_callback' => 'sanitize_text_field',
        ) );

        $wp_customize->add_control( new Home_Services_Custom_Text( $wp_customize, 'heading_wws_block_3', array(
            'label' => esc_html__( 'WWS 3 :', 'home-services' ),
            'section' => 'home_services_customize_wws_options',
            'settings' => 'heading_wws_block_3',
            'active_callback' => function(){
                return get_theme_mod( 'wws_show_hide', true );
            },
        ) ) );
        $wp_customize->add_setting('wws_item_3', array(
            'transport'         => 'refresh',
            'sanitize_callback'     =>  'home_services_sanitize_file',
        ));

        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'wws_item_3', array(
            'label'             =>  esc_html__('Icon Image', 'home-services'),
            'section'           => 'home_services_customize_wws_options',
            'settings'          => 'wws_item_3',
            'active_callback' => function(){
                return get_theme_mod( 'wws_show_hide', true );
            },
        )));

        $wp_customize->add_setting( 'wws_item_heading_3', 
            array(
                'sanitize_callback'     =>  'sanitize_text_field',
                'default'               =>  '',
            ) 
        );

        $wp_customize->add_control( 'wws_item_heading_3', 
            array(
                'label' => esc_html__( 'Heading', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_heading_3',
                'type' => 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            ) 
        );
        $wp_customize->add_setting( 'wws_item_info_3', 
            array(
                'transport' => 'refresh',
                'sanitize_callback' => 'sanitize_textarea_field',
               
            ) 
        );

        $wp_customize->add_control( 'wws_item_info_3',
            array(
                'label' => esc_html__( 'Description', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_info_3',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            )
        );
        $wp_customize->add_setting( 'wws_item_link_3', 
            array(
                'sanitize_callback'     =>  'esc_url_raw',
            ) 
        );

        $wp_customize->add_control( 'wws_item_link_3', 
            array(
                'label' => esc_html__( 'Link', 'home-services' ),
                'section' => 'home_services_customize_wws_options',
                'settings' => 'wws_item_link_3',
                'type'=> 'url',
                'active_callback' => function(){
                    return get_theme_mod( 'wws_show_hide', true );
                },
            ) 
        );


        /*Testimonial*/
        $wp_customize->add_section( 'home_services_customize_testimonial_options', array(
            'title'          => esc_html__( 'Testimonial', 'home-services' ),
            'priority'       => 16,
            'panel'          =>'home_service_frontpage_settings',
        ) );
        $wp_customize->add_setting( 'testimonial_show_hide', 
                array(
                  'default'  =>  false,
                  'sanitize_callback' => 'home_services_sanitize_checkbox',
                )
            );
        $wp_customize->add_control( 'testimonial_show_hide', 
            array(
              'label'   =>  esc_html__( 'Show Testimonial Section', 'home-services' ),
              'section' => 'home_services_customize_testimonial_options',
              'settings' => 'testimonial_show_hide',
              'type'    => 'checkbox',
            )
        );


        $wp_customize->add_setting( 'testimonial_heading_text', 
            array(
                'sanitize_callback'     =>  'sanitize_text_field',
                'default'               =>  '',
            ) 
        );

        $wp_customize->add_control( 'testimonial_heading_text', 
            array(
                'label' => esc_html__( 'Section Heading', 'home-services' ),
                'section' => 'home_services_customize_testimonial_options',
                'settings' => 'testimonial_heading_text',
                'type' => 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'testimonial_show_hide', true );
                },
            ) 
        );
        $wp_customize->selective_refresh->add_partial( 'testimonial_heading_text', array(
            'selector' => '.testimonial-wraper .testimonial-info', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'desc_testimonial_section', 
            array(
                'sanitize_callback' => 'sanitize_textarea_field',
                'transport' => 'refresh',
            ) 
        );

        $wp_customize->add_control( 'desc_testimonial_section',
            array(
                'label' => esc_html__( 'Description Content', 'home-services' ),
                'section' => 'home_services_customize_testimonial_options',
                'settings' => 'desc_testimonial_section',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'testimonial_show_hide', true );
                },
            )
        );
        $wp_customize->add_setting('home_services_testomonial_tags',
            array(
                'default'           => '',
                'capability'        => 'edit_theme_options',
                'sanitize_callback' => 'sanitize_text_field',
            )
        );
        $wp_customize->add_control( new Home_Service_testimonial_Tags_Control($wp_customize, 'home_services_testomonial_tags', array(
                    'label'       => esc_html__('Select Tag', 'home-services'),
                    'description' => esc_html__('Select tag to be display on Testimonial section', 'home-services'),
                    'section'     => 'home_services_customize_testimonial_options',
                    'type'        => 'taxonomy-dropdown',
                    'settings'    => 'home_services_testomonial_tags',
                    'priority'    => 10,
                    'active_callback' => function(){
                        return get_theme_mod( 'testimonial_show_hide', true );
                    },
                )
            )
        );
        


        /*CTA SECTION*/
        $wp_customize->add_section( 'home_services_customize_cta_options', array(
            'title'          => esc_html__( 'CTA', 'home-services' ),
            'priority'       => 16,
            'panel'          =>'home_service_frontpage_settings',
        ) );
        $wp_customize->add_setting( 'cta_show_hide', 
                array(
                  'default'  =>  false,
                  'sanitize_callback' => 'home_services_sanitize_checkbox',
                )
            );
        $wp_customize->add_control( 'cta_show_hide', 
            array(
              'label'   => __( 'Show CTA', 'home-services' ),
              'section' => 'home_services_customize_cta_options',
              'settings' => 'cta_show_hide',
              'type'    => 'checkbox',
            )
        );


        $wp_customize->add_setting( 'cta_heading_text', 
            array(
                'sanitize_callback'     =>  'sanitize_text_field',
                'default'               =>  '',
            ) 
        );

        $wp_customize->add_control( 'cta_heading_text', 
            array(
                'label' => esc_html__( 'Section Heading', 'home-services' ),
                'section' => 'home_services_customize_cta_options',
                'settings' => 'cta_heading_text',
                'type' => 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'cta_show_hide', true );
                },
            ) 
        );
        $wp_customize->selective_refresh->add_partial( 'cta_heading_text', array(
            'selector' => '.cta-wraper h1', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'desc_cta_section', 
            array(
                'sanitize_callback' => 'sanitize_textarea_field',
                'transport' => 'refresh',
            ) 
        );

        $wp_customize->add_control( 'desc_cta_section',
            array(
                'label' => esc_html__( 'Description Content', 'home-services' ),
                'section' => 'home_services_customize_cta_options',
                'settings' => 'desc_cta_section',
                'type'=> 'textarea',
                'active_callback' => function(){
                    return get_theme_mod( 'cta_show_hide', true );
                },
            )
        );

        $wp_customize->selective_refresh->add_partial( 'desc_cta_section', array(
            'selector' => '.cta-wraper p', // You can also select a css class
        ) );
        $wp_customize->add_setting('cta_section_image', array(
            'transport'         => 'refresh',
            'sanitize_callback'     =>  'home_services_sanitize_file',
        ));

        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'cta_section_image', array(
            'label'             =>  esc_html__('Background Image', 'home-services'),
            'description'       =>  esc_html__('Upload background image for cta section','home-services'),
            'section'           => 'home_services_customize_cta_options',
            'settings'          => 'cta_section_image',
            'active_callback' => function(){
                return get_theme_mod( 'cta_show_hide', true );
            },
        ))); 
        $wp_customize->add_setting( 'cta_btn_text', 
            array(
               
                'default'               =>  '',
                'sanitize_callback'     =>  'sanitize_text_field',
            ) 
        );

        $wp_customize->add_control( 'cta_btn_text', 
            array(
                'label' => esc_html__( 'Button Label', 'home-services' ),
                'section' => 'home_services_customize_cta_options',
                'settings' => 'cta_btn_text',
                'type'=> 'text',
                'active_callback' => function(){
                    return get_theme_mod( 'cta_show_hide', true );
                },
            ) 
        );
        $wp_customize->selective_refresh->add_partial( 'cta_btn_text', array(
            'selector' => '.cta-wraper a.btn', // You can also select a css class
        ) );
        $wp_customize->add_setting( 'cta_btn_text_link', 
            array(
                'sanitize_callback'     =>  'esc_url_raw',
            ) 
        );

        $wp_customize->add_control( 'cta_btn_text_link', 
            array(
                'label' => esc_html__( 'Button Link', 'home-services' ),
                'section' => 'home_services_customize_cta_options',
                'settings' => 'cta_btn_text_link',
                'type'=> 'url',
                'active_callback' => function(){
                    return get_theme_mod( 'cta_show_hide', true );
                },
            ) 
        );
    }
}
