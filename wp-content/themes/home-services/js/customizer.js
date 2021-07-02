/* global wp, jQuery */
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */


( function( $ ) {
    wp.customize('primary_color',function ( value ) {
            value.bind(function ( to ) {
                    document.body.style.setProperty('--primary-color', to);
                }
            );
        }
	);
	wp.customize('secondary_color',function ( value ) {
		value.bind(function ( to ) {
				document.body.style.setProperty('--secondary-color', to);
			}
		);
	}
	);
	wp.customize('text_color',function ( value ) {
		value.bind(function ( to ) {
				document.body.style.setProperty('--text-color', to);
			}
		);
	}
	);
	wp.customize('accent_color',function ( value ) {
		value.bind(function ( to ) {
				document.body.style.setProperty('--accent-color', to);
			}
		);
	}
	);
	wp.customize('light_color',function ( value ) {
		value.bind(function ( to ) {
				document.body.style.setProperty('--light-color', to);
			}
		);
	}
	);
	wp.customize('dark_color',function ( value ) {
		value.bind(function ( to ) {
				document.body.style.setProperty('--dark-color', to);
			}
		);
	}
	);
	wp.customize('grey_color',function ( value ) {
		value.bind(function ( to ) {
				document.body.style.setProperty('--grey-color', to);
			}
		);
	}
	);
	// Site title color
	wp.customize( 'site_title_color_option', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).css( 'color', to );
		} );
	} );
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );
	wp.customize( 'footer_copyright_text', function( value ) {
		value.bind( function( to ) {
			$( '.site-footer .site-info' ).text( to );
		} );
	} );
	wp.customize( 'heading_for_banner', function( value ) {
		value.bind( function( to ) {
			$( '.header-background-one .main-title' ).text( to );
		} );
	} );
	wp.customize( 'content_for_banner', function( value ) {
		value.bind( function( to ) {
			$( '.header-background-one .caption-holder p' ).text( to );
		} );
	} );
	wp.customize( 'cta_button1_for_banner', function( value ) {
		value.bind( function( to ) {
			$( '.header-background-one .button-group .cta-1' ).text( to );
		} );
	} );
	wp.customize( 'cta_button2_for_banner', function( value ) {
		value.bind( function( to ) {
			$( '.header-background-one .button-group .cta-2' ).text( to );
		} );
	} );
	wp.customize( 'contact_for_banner', function( value ) {
		value.bind( function( to ) {
			$( '.header-background-one .caption-holder .call-us' ).text( to );
		} );
	} );
	wp.customize( 'home_services_contact_num', function( value ) {
		value.bind( function( to ) {
			$( '.header-wrapper .contact-number .contact-btn' ).text( to );
		} );
	} );
	wp.customize( 'header_button1_label', function( value ) {
		value.bind( function( to ) {
			$( '.header-wrapper .contact-number  .schedule-btn' ).text( to );
		} );
	} );
	wp.customize( 'header_button2_label', function( value ) {
		value.bind( function( to ) {
			$( '.header-wrapper .contact-number  .financing-btn' ).text( to );
		} );
	} );

	// Site title size 
	wp.customize( 'site_title_size', function( value ) {
		value.bind( function( to ) {
			$( '.site-title' ).css( 'font-size', to + "px" );
			$( 'header .custom-logo' ).css( 'height', ( to * 2 ) + "px" );
		} );
	} );

	// font family
	wp.customize( 'site_identity_font_family', function( value ) {
		value.bind( function( to ) {
			$("head").append("<link href='https://fonts.googleapis.com/css?family=" + to + ":200,300,400,500,600,700,800,900|' rel='stylesheet' type='text/css'>");
			$( '.site-title' ).css( 'font-family', to );
		} );
	} );

	//container width
	wp.customize( 'container_width', function( value ) {
		value.bind( function( to ) {
			$( '.container' ).css( 'max-width', to + "px" );
		} );
	} );


	// font family
	wp.customize( 'font_family', function( value ) {
		value.bind( function( to ) {
			$("head").append("<link href='https://fonts.googleapis.com/css?family=" + to + ":200,300,400,500,600,700,800,900|' rel='stylesheet' type='text/css'>");
			$( 'body,p' ).css( 'font-family', to );
		} );
	} );

	// body line height
	wp.customize( 'body_line_height', function( value ) {
		value.bind( function( to ) {
			$( 'body' ).css( 'line-height', to );
		} );
	} );	
	
	wp.customize( 'font_size', function( value ) {
		value.bind( function( to ) {
			$( 'body,p' ).css( 'font-size', to );
		} );
	} );

	// General Options: Heading Options

	wp.customize( 'heading_font_family', function( value ) {
		value.bind( function( to ) {
			$("head").append("<link href='https://fonts.googleapis.com/css?family=" + to + ":200,300,400,500,600,700,800,900|' rel='stylesheet' type='text/css'>");
			$( 'h1, h2, h3, h4, h5, h6,  .speaker-title' ).css( 'font-family', to );
		} );
	} );

	wp.customize( 'body_font_weight', function( value ) {
		value.bind( function( to ) {
			$( 'body' ).css( 'font-weight', to );
		} );
	} );

	wp.customize( 'heading_font_weight', function( value ) {
		value.bind( function( to ) {
			$( 'h1, h2, h3, h4, h5, h6, .speaker-title' ).css( 'font-weight', to );
		} );
	} ); 

	// heading line height
	wp.customize( 'header_line_height', function( value ) {
		value.bind( function( to ) {
			$( 'h1, h2, h3, h4, h5, h6' ).css( 'line-height', to );
		} );
	} );
	wp.customize( 'home_services_heading_1_size', function( value ) {
		value.bind( function( to ) {
			$( 'h1' ).css( 'font-size', to + 'px' );
		} );
	} );

	wp.customize( 'home_services_heading_2_size', function( value ) {
		value.bind( function( to ) {
			$( 'h2' ).css( 'font-size', to + 'px' );
		} );
	} );

	wp.customize( 'home_services_heading_3_size', function( value ) {
		value.bind( function( to ) {
			$( 'h3' ).css( 'font-size', to + 'px' );
		} );
	} );

	wp.customize( 'home_services_heading_4_size', function( value ) {
		value.bind( function( to ) {
			$( 'h4,  .speaker-title' ).css( 'font-size', to + 'px' );
		} );
	} );

	wp.customize( 'home_services_heading_5_size', function( value ) {
		value.bind( function( to ) {
			$( 'h5' ).css( 'font-size', to + 'px' );
		} );
	} );

	wp.customize( 'home_services_heading_6_size', function( value ) {
		value.bind( function( to ) {
			$( 'h6' ).css( 'font-size', to + 'px' );
		} );
	} );

	
	// Footer widget title font.
	wp.customize( 'footer_font_family', function( value ) {
		value.bind( function( to ) {
			$("head").append("<link href='https://fonts.googleapis.com/css?family=" + to + ":200,300,400,500,600,700,800,900|' rel='stylesheet' type='text/css'>");
			$( '.site-footer .widget-title' ).css( 'font-family', to );
		} );
	} );

	
} )( jQuery );

