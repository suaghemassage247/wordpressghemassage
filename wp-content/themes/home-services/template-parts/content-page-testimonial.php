<?php
/**
 * Template part for displaying page content in  testimonial page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package home_services
 */

?>
<div class="promotion-page">
    <div id="filter_testimonial" class="filter">
        <label><?php esc_html_e( "Filter By Tags:", 'home-services' ); ?></label>
        <?php
        $service_taxonomy = 'service_tag';
        $service_terms = get_terms($service_taxonomy);
        $options = array();                    
        if ($service_terms) { ?>
            <select name="select_service"><option value=""><?php esc_html_e( "All", 'home-services' ); ?></option>
        <?php
            foreach ($service_terms as $service_term) {
                if ( isset( $service_term ) ) {
                    if ( isset( $service_term->term_id ) && isset( $service_term->name ) ) {
        ?>
        <option value="<?php echo esc_attr($service_term->term_id); ?>"><?php echo esc_html($service_term->name); ?></option>
        <?php       }
                }
            }
			echo '</select>';
        } ?>
    </div>
    <div class="testimonial-layout-4 category-testimonialfilter">
        <!-- testimonial layout #  -->
        <?php
        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
        global $post;
        $query_args = array(
            'post_type'				=> 'abt_testimonials',
            'posts_per_page'        => 6,
            'paged' => $paged
        );
        $all_posts = new WP_Query( $query_args );

        $temp_query = $wp_query;
        $wp_query = null;
        $wp_query = $all_posts;



        if ( $all_posts->have_posts() ) :
            while( $all_posts->have_posts() ):$all_posts->the_post();
                $custom = get_post_custom(get_the_ID());
                ?>                    
                <div class="testimonial-holder">
                    <!-- featured image -->
                    <div class="img-holder">
                        <?php if(has_post_thumbnail()){
                                $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'full');
                        ?>
                        <img width="465" height="371" src="<?php echo esc_url($image_url[0]); ?>"
                            class="attachment-full size-full wp-post-image" alt="" loading="lazy">
                        <?php } ?>
                    </div>
                    <!-- featured image -->

                    <div class="testimonial-content">

                        <!-- post_content -->
                        <?php the_content(); ?>
                        <!-- post_content -->

                        <!-- post_title -->
                        <h5 class="post-title"><?php the_title(); ?></h5>
                        <!-- post_title -->
                        <?php if ($custom['abt_source'][0]){ ?>
                        <span><a target = "_blank"
                                href="<?php echo esc_url($custom['abt_source_link'][0]); ?>"><?php echo esc_html($custom['abt_source'][0]); ?></a></span>
                        <?php } ?>
                    </div>
                </div>
            <?php endwhile; ?>

            <div class="pagination">
                <?php the_posts_navigation(); ?>
            </div>
			  
        <?php endif; wp_reset_postdata(); ?>
        <!--testimonial layout #  -->

        <?php 
            $wp_query = NULL;
            $wp_query = $temp_query;
        ?>
    </div>
</div>