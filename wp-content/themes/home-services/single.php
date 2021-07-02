<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package home_services
 */

get_header();
?>


<div class="inside-page content-area">
    <div class="container">
        <div class="row">

            <div class="col-sm-8" id="main-content">
                <section class="page-section" id="primary">
                    <div class="detail-content">

                        <?php while ( have_posts() ) : the_post(); ?>
                        <?php get_template_part( 'template-parts/content', 'single' ); ?>
                        <?php endwhile; // End of the loop. ?>
                        <?php comments_template(); ?>

                    </div><!-- /.end of deatil-content -->

                    <div class="related-posts">
                        <?php
                        $args = array (
                            'posts_per_page' => '2',
                            'post_type' => 'post',
                            'category__in' => wp_get_post_categories($post->ID),
                            'post__not_in' => array($post->ID)
                        );
                         
                        // run the query
                        $query = new WP_Query( $args ); 
                        if( $query->have_posts() ) {
                    ?>
                        <h2 class="title"><?php echo esc_html__( 'Related Posts', 'home-services' )?></h2>
                        <div class="row">
                        <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                            <div class="col-sm-6">
                                <div class="news-snippet">
                                    <div class="summary">
                                        <h4 class="news-title">
                                            <a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
                                                <?php the_title(); ?>
                                            </a>
                                        </h4>
                                        <?php echo esc_html(home_services_excerpt( 20 )); ?>
                                        <a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark" title=""
                                            class="readmore"><?php esc_html_e('Read More','home-services'); ?> </a>
                                    </div>
                                </div>
                            </div>
                            <?php endwhile; the_posts_navigation(); ?>
                        <?php wp_reset_postdata(); ?>
                        </div>
                        <?php } ?>
                    </div>
                </section> <!-- /.end of section -->
            </div>

            <div class="col-sm-4"><?php get_sidebar(); ?></div>

        </div>
    </div>
</div>

<?php
get_footer();