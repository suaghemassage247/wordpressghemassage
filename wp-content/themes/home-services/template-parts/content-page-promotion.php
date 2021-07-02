<?php
/**
 * Template part for displaying page content in promotion page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package home_services
 */

?>
<div class="promotion-page">
    <div id="filter_promotion" class="filter">
        <label><?php esc_html_e( "Filter By Tags:", 'home-services' ); ?></label>
        <?php
        $service_taxonomy = 'service_tag';
        $service_terms = get_terms($service_taxonomy);
        $options = array();
            if ($service_terms) {
                echo '<select name="select_service"><option value="">All</option>';
                foreach ($service_terms as $service_term) {
                    if ( isset( $service_term ) ) {
                        if ( isset( $service_term->term_id ) && isset( $service_term->name ) ) {
                        ?>
                        <option value="<?php echo esc_attr($service_term->term_id); ?>"><?php echo esc_html($service_term->name); ?></option>
             <?php } } }
				echo '</select>';
            } ?>
    </div>
    
    <?php $masionary_view = get_query_var( 'masionary_view' ); ?>
    <div class="promotions-layout-2<?php echo esc_attr( $masionary_view ); ?>">
        <div class="promotion-block category-promotiofilter">
            <?php
                $query_args = array(
                    'post_type'				=> 'abt_promotion',
                    'no_found_rows'  		=> true,
                    'post__not_in'          => get_option( 'sticky_posts' ),
                    'ignore_sticky_posts'   => true,
                    'order'					=> 'DESC',            
                    );
                    $all_posts = new WP_Query( $query_args );
                    if ( $all_posts->have_posts() ) :
                    while( $all_posts->have_posts() ):$all_posts->the_post();
                    $custom = get_post_custom(get_the_ID());       
             ?>
            <div class="promotion-holder">
                <div class="img-holder">
                    <?php if(has_post_thumbnail()){
                        $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'');
                    ?>
                    <img width="465" height="371" src="<?php echo esc_url($image_url[0]); ?>"
                        class="attachment-full size-full wp-post-image" alt="" loading="lazy">
                    <?php } ?>
                </div>
                <div class="summary">

                    <h3 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>

                    <?php the_excerpt(); ?>

                    <p class="disclaimer"><?php echo esc_html($custom['abt_disclaimer'][0]); ?></p>

                    <a class="btn apply-btn" href="<?php the_permalink(); ?>">Read More »</a>

                </div>
            </div>
            <?php
				endwhile;
                wp_reset_postdata();  
                endif;		
            ?>

        </div>
    </div>
</div>