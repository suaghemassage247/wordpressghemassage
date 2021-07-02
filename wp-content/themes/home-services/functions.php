<?php
/**
 * home_services functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package home_services
 */



if ( ! defined( 'HOME_SERVICES_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'HOME_SERVICES_VERSION', '1.0.0' );
}

if ( ! function_exists( 'home_services_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function home_services_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on home_services, use a find and replace
		 * to change 'home_services' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'home-services' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'main-menu' => esc_html__( 'Primary Menu', 'home-services' )
			)
		);

		if ( home_services_set_pro_active() ) {
			register_nav_menus(
				array(
					'top-menu' => esc_html__( 'Secondary Menu', 'home-services' )
				)
			);
		}

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support('custom-background',
			apply_filters(
				'home_services_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		remove_theme_support( 'header_textcolor' );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 170,
				'width'       => 54,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
		add_editor_style( get_stylesheet_uri() );
	}
endif;
add_action( 'after_setup_theme', 'home_services_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function home_services_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'home_services_content_width', 640 );
}
add_action( 'after_setup_theme', 'home_services_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function home_services_widgets_init() {
	
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer Widget', 'home-services' ),
			'id'            => 'footer-widget',
			'description'   => esc_html__( 'Add widgets here.', 'home-services' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar( array(
        'name'          => esc_html__( 'Main Sidebar', 'home-services' ),
        'id'            => 'sidebar-1',
        'description'   => '',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h5 class="widget-title">',
        'after_title'   => '</h5>',
    ) );
    if(home_services_set_pro_active()){
	    register_sidebar( array(
	        'name'          => esc_html__( 'Promotion Sidebar', 'home-services' ),
	        'id'            => 'promotion-sidebar',
	        'description'   => esc_html__( 'Add widgets here to display in promotion template sidebar', 'home-services' ),
	        'before_widget' => '<section id="%1$s" class="widget %2$s">',
	        'after_widget'  => '</section>',
	        'before_title'  => '<h5 class="widget-title">',
	        'after_title'   => '</h5>',
	    ) );
	    register_sidebar( array(
	        'name'          => esc_html__( 'Testimonial Sidebar', 'home-services' ),
	        'id'            => 'testimonial-sidebar',
	        'description'   => esc_html__( 'Add widgets here to display in testimonial template sidebar', 'home-services' ),
	        'before_widget' => '<section id="%1$s" class="widget %2$s">',
	        'after_widget'  => '</section>',
	        'before_title'  => '<h5 class="widget-title">',
	        'after_title'   => '</h5>',
	    ) );
	}
}
add_action( 'widgets_init', 'home_services_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function home_services_scripts() {
	$font_family = get_theme_mod( 'font_family', 'Quicksand' );
	$heading_font_family = get_theme_mod( 'heading_font_family', 'Poppins' );
	$site_identity_font_family = esc_attr( get_theme_mod( 'site_identity_font_family', 'Poppins' ) );
	
	wp_enqueue_style( 'home-services-googlefonts', 'https://fonts.googleapis.com/css?family='. esc_attr( $font_family ) . ':200,300,400,500,600,700,800,900|' . esc_attr( $heading_font_family ) . ':200,300,400,500,600,700,800,900|' . esc_attr( $site_identity_font_family ) . ':200,300,400,500,600,700,800,900|' );

	wp_enqueue_style( 'home-services-style', get_stylesheet_uri(), array(), HOME_SERVICES_VERSION );
	wp_style_add_data( 'home-services-style', 'rtl', 'replace' );
	wp_enqueue_style( 'all-fontawesome', get_template_directory_uri() . '/css/all.min.css', array(), HOME_SERVICES_VERSION );
	wp_enqueue_style( 'owl-style', get_template_directory_uri() . '/css/owl.carousel.css', array(), HOME_SERVICES_VERSION );
	
	wp_enqueue_script( 'all-fontawesome', get_template_directory_uri() . '/js/all.min.js', array(), HOME_SERVICES_VERSION, true );
	wp_enqueue_script( 'owl-script', get_template_directory_uri() . '/js/owl.carousel.js', array(), HOME_SERVICES_VERSION, true );
	wp_enqueue_script( 'home-services-script', get_template_directory_uri() . '/js/script.js', array(), HOME_SERVICES_VERSION, true );
	wp_enqueue_script( 'home-services-navigation', get_template_directory_uri() . '/js/navigation.js', array(), HOME_SERVICES_VERSION, true );
	wp_enqueue_script( 'home-services-ajax-js', get_template_directory_uri() . '/js/ajax.js', array( 'jquery' ), HOME_SERVICES_VERSION, true );
	wp_localize_script( 'home-services-ajax-js', 'home_services_ajax_params', array( 
		'ajaxurl' => esc_url_raw(admin_url( 'admin-ajax.php' ) ),
		'nonce'	  => wp_create_nonce(  'nonce_name' )
	) );

	wp_enqueue_script( 'home-services-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), HOME_SERVICES_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'home_services_scripts' );

// add async and defer attributes to enqueued scripts
function home_services_script_loader_tag($tag, $handle, $src) {
	
	if ($handle === 'all-fontawesome') {
		
		if (false === stripos($tag, 'async')) {
			
			$tag = str_replace(' src', ' async="async" src', $tag);
			
		}
		
		if (false === stripos($tag, 'defer')) {
			
			$tag = str_replace('<script ', '<script defer ', $tag);
			
		}
		
	}
	
	return $tag;
	
}
add_filter('script_loader_tag', 'home_services_script_loader_tag', 10, 3);

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';



require get_template_directory() . '/inc/custom-controls/custom-control.php';
/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer/customizer.php';

/**
 * Customizer changes css
 */
require get_template_directory() . '/inc/dynamic-css.php';



/**
 * Recommended Plugins
 */
require get_template_directory() . '/inc/tgmpa/recommended-plugins.php';





/**
 * ajax function
 */
require get_template_directory() . '/inc/ajax-template/ajax-function.php';


// Breadcrumbs
require get_template_directory() . '/inc/breadcrumbs.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


function home_services_excerpt( $limit ) {
    $excerpt = explode( ' ', get_the_excerpt(), $limit );
    if ( count( $excerpt ) >= $limit ) {
        array_pop( $excerpt );
    }
    $excerpt = implode( " ", $excerpt ).'...';
	$excerpt = preg_replace( '`[[^]]*]`', '', $excerpt );
	return esc_html( $excerpt );
}



function home_services_set_pro_active() {

	$is_pro = false;
	if ( class_exists( 'Alley_Business_Toolkit' ) ) {
		$ABT = new Alley_Business_Toolkit();
		$is_pro = $ABT->alley_business_toolkit_is_premium();
	}

	return $is_pro;

}


if (function_exists('add_image_size')) {
    add_image_size('home_services_banner_size', 1920, 560);
    add_image_size('home_services_service_section', 310, 206);
    add_image_size('home_services_feature_image', 348, 250);
}