<?php
function home_services_dynamic_css() {
	wp_enqueue_style(
		'home-services-dynamic-css', get_template_directory_uri() . '/css/dynamic.css'
        );
        $site_title_size = absint( get_theme_mod( 'site_title_size', '30') );
        $logo_size = absint( $site_title_size * 2 );
        $site_identity_font_family = esc_html( get_theme_mod( 'site_identity_font_family', 'Poppins') );
        $container_width = absint( get_theme_mod('container_width', '1140') );


        $site_title_color = sanitize_hex_color( get_theme_mod( 'site_title_color_option', '#3867D8' ) );
        
        $primary_color = sanitize_hex_color( get_theme_mod( 'primary_color', '#05398e' ) );
        $secondary_color = sanitize_hex_color( get_theme_mod( 'secondary_color', '#faaa29' ) );
        $text_color = sanitize_hex_color( get_theme_mod( 'text_color', '#010101' ) );
        $accent_color = sanitize_hex_color( get_theme_mod( 'accent_color', '#05398e' ) );
        $light_color = sanitize_hex_color( get_theme_mod( 'light_color', '#ffffff' ) );
        $dark_color = sanitize_hex_color( get_theme_mod( 'dark_color', '#010101' ) );
        $grey_color = sanitize_hex_color( get_theme_mod( 'grey_color', '#aaaaaa' ) );

        $form_field_bg_color = sanitize_hex_color( get_theme_mod( 'form_field_color', '#ffffff' ) );
        $form_field_text_color = sanitize_hex_color( get_theme_mod( 'form_field_text_color', '#232323' ) );
        $form_field_border_color = sanitize_hex_color( get_theme_mod( 'form_field_border_color', '#232323' ) );

        $home_promotion_bg_color = sanitize_hex_color(get_theme_mod('promotion_bg_color','#F4F6FE'));
        $home_wws_bg_color = sanitize_hex_color(get_theme_mod('wws_bg_color','#F4F6FE'));
        if(esc_html(get_theme_mod('form_button_style'))){
                $button_width='100%';
        }else{
              $button_width='auto';
        }
        if(get_theme_mod('disable_sidebar_mobile')){
            $mobile_sidebar_option ='none';
        }else{
             $mobile_sidebar_option ='block';
        }

        $font_family = esc_attr( get_theme_mod( 'font_family', 'Quicksand' ) );
        $font_size = esc_attr( get_theme_mod( 'font_size', '16px' ) );
        $body_font_weight = esc_attr( get_theme_mod( 'body_font_weight', 500 ) );
        $body_line_height = esc_attr( get_theme_mod( 'body_line_height', '1.5') );


        $heading_font_family = esc_attr( get_theme_mod( 'heading_font_family', 'Poppins' ) );
        $heading_font_weight = esc_attr( get_theme_mod( 'heading_font_weight', 600 ) );
        $header_line_height = esc_attr( get_theme_mod( 'header_line_height', '1.5') );
        $default_size = array(
                '1' =>  32,
                '2' =>  28,
                '3' =>  24,
                '4' =>  21,
                '5' =>  15,
                '6' =>  12,
        );

	    for( $i = 1; $i <= 6 ; $i++ ) {
	    	$heading[$i] = absint( get_theme_mod( 'home_services_heading_' . $i . '_size', absint( $default_size[$i] ) ) );
	    }

        $dynamic_css = "

                :root {
                        --primary-color: $primary_color;
                        --secondary-color: $secondary_color;
                        --text-color: $text_color;
                        --accent-color: $accent_color;
                        --light-color: $light_color;
                        --dark-color: $dark_color;
                        --grey-color: $grey_color;
                        --form-field-bg-color:$form_field_bg_color;
                        --form-field-text-color:$form_field_text_color;
                        --form-field-border-color:$form_field_border_color;
                }
                
                /* font family */
                body{ font: $body_font_weight"." $font_size"." $font_family; line-height: {$body_line_height};}

                h1{ font: $heading_font_weight {$heading[1]}"."px $heading_font_family }
                h2{ font: $heading_font_weight {$heading[2]}"."px $heading_font_family }
                h3{ font: $heading_font_weight {$heading[3]}"."px $heading_font_family }
                h4{ font: $heading_font_weight {$heading[4]}"."px $heading_font_family }
                h5{ font: $heading_font_weight {$heading[5]}"."px $heading_font_family }
                h6{ font: $heading_font_weight {$heading[6]}"."px $heading_font_family }

                h1,h2,h3,h4,h5,h6{
                        line-height: {$header_line_height};
                }


                /* site title size */
                .site-title a{color: $site_title_color;}
                .site-title{font-size: $site_title_size"."px; font-family: {$site_identity_font_family}; }

                header .custom-logo{ height: {$logo_size}"."px; }

                /* container width */
                .container{max-width: {$container_width}"."px; }


                /* Footer widget font Colors */
                .site-footer .widget-title{font-family: $font_family;}
                .at-form-style input.wpcf7-form-control.wpcf7-submit{width:$button_width;}
                .promotion-wraper{background:$home_promotion_bg_color;}
                .wws-wraper{background:$home_wws_bg_color;}
                @media(max-width:767px){
                    .col-sm-4.sidebar{display:$mobile_sidebar_option;}
                }

                
        ";
        wp_add_inline_style( 'home-services-dynamic-css', $dynamic_css );
}
add_action( 'wp_enqueue_scripts', 'home_services_dynamic_css' );
