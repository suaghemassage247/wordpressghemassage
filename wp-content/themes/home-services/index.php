<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package home_services
 */
get_header();

?>

<?php
global $wp_query;
?>

<?php
$layout = get_theme_mod( 'blog_post_layout', 'sidebar-right' );
$view = get_theme_mod( 'blog_post_view', 'grid-view' );

$content_column_class = 'col-sm-8';
$sidebar_left_class = 'col-sm-4';
$sidebar_right_class = 'col-sm-4';

if( $layout == 'no-sidebar' ) {
    $content_column_class = 'col-sm-12';
}
?>
<?php if ( have_posts() ) { ?>

    <div class="home-archive inside-page post-list" id="primary">
        <div class="container">

            <div class="row">
                <?php if( $layout == 'sidebar-left' ) { ?>
                    <div class="<?php echo esc_attr( $sidebar_left_class ); ?> sidebar"><?php get_sidebar(); ?></div>
                <?php } ?>
                <div class="<?php echo esc_attr( $content_column_class ); ?>">
                    <div class="<?php echo esc_attr( $view ); ?> blog-list-block">

                        <?php /* Start the Loop */ ?>
                        <?php while ( have_posts() ) : the_post(); ?>
                            <?php

                            /*
                             * Include the Post-Format-specific template for the content.
                             * If you want to override this in a child theme, then include a file
                             * called content-___.php (where ___ is the Post Format name) and that will be used instead.
                             */
                            get_template_part( 'template-parts/content' );
                            ?>
                        <?php endwhile; ?>
                        <?php the_posts_navigation(); ?>

                    </div>
                </div>
                <?php wp_reset_postdata(); ?>
                <?php if( $layout == 'sidebar-right' ) { ?>
                    <div class="<?php echo esc_attr( $sidebar_right_class ); ?> sidebar"><?php get_sidebar(); ?></div>
                <?php } ?>
            </div>
        </div>
    </div>

<?php } ?>


<?php get_footer();
?>

