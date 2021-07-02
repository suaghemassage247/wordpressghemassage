<?php
    $seviceTag = isset( $_REQUEST['seviceTag'] ) ? intval(wp_unslash( $_REQUEST['seviceTag'])) : array();
if(!empty($seviceTag)) {
    $args = array(
        'post_type'      => 'abt_promotion',
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
        'post_type'				=> 'abt_promotion',
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
        <div class="promotion-holder">
			<div class="img-holder">
                <?php if(has_post_thumbnail()){
                    $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'full');
                ?>                
					<img width="465" height="371" src="<?php echo esc_url($image_url[0]); ?>" class="attachment-full size-full wp-post-image" alt="" loading="lazy">
				<?php } ?>
            </div> 
			<div class="summary">
                <h2 class="post-title"><?php the_title(); ?></h2>

				<?php the_excerpt(); ?>

				<p class="disclaimer"><?php echo esc_html($custom['abt_disclaimer'][0]); ?></p>

				<a class="btn apply-btn" href="<?php the_permalink(); ?>"><?php echo esc_html__( 'Read More »', 'home-services' )?></a>

			</div>
		</div>
<?php
    endwhile;
    wp_reset_postdata();  
    endif;
             
  

