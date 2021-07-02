<?php
$promotionID = get_the_ID();
	$custom = get_post_custom(get_the_ID());
	$service_taxonomy = 'service_tag';
	$service_terms = get_the_terms( $promotionID, $service_taxonomy );
	$cat_ids = array();
	if ($service_terms) {
        foreach ( $service_terms as $service_term ) {
			if ( isset( $service_term ) ) {
				if ( isset( $service_term->name ) ) {
					$cat_ids[] = $service_term->term_id;
				}
			}
		}
	}
?>
<div class="promotion-content">
    <div class="promotions-layout-4">
        <div class="promotion-block">
            <div class="promotion-holder">
                <div class="img-holder">
                    <?php
                        if(has_post_thumbnail()){
						$image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'');
					?>
                    <img src="<?php echo esc_url($image_url[0]); ?>" alt="">
                    <?php } ?>
                </div>
                <div class="summary">

                    <h2 class="post-title"><?php the_title(); ?></h2>

                    <?php the_excerpt(); ?>

                    <p class="disclaimer"><?php echo esc_html($custom['abt_disclaimer'][0]); ?></p>

                </div>
            </div>
        </div>
    </div>
    <div class="paragraph-detail">
        <?php the_content(); ?>
    </div>
    <div class="realted-promotions">
        <?php
        $args = array(
            'posts_per_page' => '2',
            'post_type'      => 'abt_promotion',
            'post_status'    => 'publish',
            'order'          => 'DESC',
            'post__not_in' => [$promotionID],
            'tax_query'      => [
                [
                    'taxonomy'   => 'service_tag',
                    'field'      => 'id',
                    'terms'       => $cat_ids,
                ]
            ]
        );
        $all_posts = new WP_Query( $args );
        if ( $all_posts->have_posts() ) :
        ?>
        <h2 class="main-title">Related Promotions</h2>
        <div class="promotions-layout-2">
            <div class="promotion-block">
                <?php
					while( $all_posts->have_posts() ):$all_posts->the_post();
					$custom = get_post_custom(get_the_ID());
				?>
                <div class="promotion-holder">
                    <div class="img-holder">
                        <?php if(has_post_thumbnail()){
							$image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'');
						?>
                        <img src="<?php echo esc_url($image_url[0]); ?>" alt="">
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
				?>
            </div>
        </div>
        <?php 
            endif;
        ?>
    </div>
</div>