<?php
    $seviceTag = isset( $_REQUEST['seviceTag'] ) ? intval(wp_unslash( $_REQUEST['seviceTag'])) : array();
  
if(!empty($seviceTag)) {
    $args = array(
        'post_type'      => 'abt_testimonials',
        'post_status'    => 'publish',
        'order'          => 'DESC',
        'tax_query'      => [
            [
                'taxonomy'   => 'service_tag',
                'field'      => 'id',
                'terms'       => $seviceTag

            ]
        ]
    );
}else{
    $args = array(
        'post_type'				=> 'abt_testimonials',
        'no_found_rows'  		=> true,
        'post__not_in'          => get_option( 'sticky_posts' ),
        'ignore_sticky_posts'   => true,
        'order'					=> 'DESC',
    );
}
    $all_posts = new WP_Query( $args );
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
        <img width="465" height="371" src="<?php echo esc_url($image_url[0]); ?>" class="attachment-full size-full wp-post-image"
            alt="" loading="lazy">
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
        <span><a
                href="<?php echo esc_url($custom['abt_source_link'][0]); ?>"><?php echo esc_html($custom['abt_source'][0]); ?></a></span>
        <?php } ?>
    </div>
</div>
<?php
    endwhile;
    wp_reset_postdata();  
    endif;
             
  