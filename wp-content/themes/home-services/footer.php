<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package home_services
 */
?> 

<footer id="colophon" class="site-footer footer-one">
    <div class="container">
        <div class="footer-section">
            
            <div class="f-block">
                <?php dynamic_sidebar( 'footer-widget' ); ?>
            </div>
            
        </div>
        <div class="site-info">
            <?php 
                if ( home_services_set_pro_active() ) {
                    $copyright = get_theme_mod( 'footer_copyright_text', '' );
                    echo wp_kses_post( $copyright );
                }
                else { ?>

                    <div class="copyright text-center">
                        <?php esc_html_e( "Powered by", 'home-services' ); ?>
                        <a href="<?php echo esc_url( 'http://wordpress.org/' ); ?>">
                            <?php esc_html_e( "WordPress", 'home-services' ); ?>
                        </a>
                        <?php echo esc_html( ' | ' ); ?>
                        <?php echo esc_html( 'Developed by ' ); ?>
                        <a href="<?php echo esc_url( 'https://alleythemes.com/' ); ?>" target="_blank"  rel="nofollow">
                            <?php esc_html_e( 'AlleyThemes', 'home-services' ); ?>
                        </a>
                    </div>
            <?php } ?>
            <?php get_template_part('template-parts/header-social', 'icon'); ?>
        </div><!-- .site-info -->
    </div>
</footer><!-- #colophon -->

 

<?php if ( home_services_set_pro_active() ) { ?>
  <button onclick="topFunction()" id="scrollTop" title="Go to top"><span class="fas fa-chevron-up"></span></button>
<?php } ?>

 

</div><!-- #page -->

<?php if ( home_services_set_pro_active() ) { ?>
    <div class="mobile-cta">
        <?php 
        if(get_theme_mod( 'hide_show_contact_responsive')){ ?>
        <a href="tel:<?php echo esc_html(get_theme_mod('home_services_contact_num')); ?>" class="cta-btn"><span
                class="fa fa-phone" aria-hidden="true"></span>
            <?php echo esc_html( get_theme_mod('home_services_contact_num') ); ?></a>
        <?php }
            if(get_theme_mod( 'hide_show_header_button_1', 'true' )){



            if(get_theme_mod( 'hide_show_header1_responsive')){
        ?>
        <a href="<?php echo esc_url(get_theme_mod('header_button1_link')); ?>" class="cta-btn">
            <?php echo esc_html(get_theme_mod('header_button1_label')); ?></a>



        <?php } }
            if(get_theme_mod( 'hide_show_header_button_2', 'true' )){



            if(get_theme_mod( 'hide_show_header2_responsive' )){
        ?>
        <a href="<?php echo esc_url(get_theme_mod('header_button2_link')); ?>"
            class="cta-btn"><?php echo esc_html(get_theme_mod('header_button2_label')); ?></a>
        <?php } } ?>
    </div>
<?php } ?>


<?php wp_footer(); ?>

 
</body>
</html>