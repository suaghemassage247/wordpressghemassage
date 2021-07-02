<?php
/**
 * Template Name: promotion with sidebar
 * Template Post Type: abt_promotion
 */
	get_header(); 
	while (have_posts()):the_post();
	$promID = get_the_ID();
	$custom = get_post_custom(get_the_ID());
	$service_taxonomy = 'service_tag';
    $service_terms = get_the_terms( $promID, $service_taxonomy );
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

<div class="inside-page content-area promotion-detail">
    <div class="container">
        <div class="main-content" id="main-content primary">
            <div class="row">
                <div class="col-sm-8">
                    <?php get_template_part( 'template-parts/content-single', 'promotion' ); ?>
                </div>
                <div class="col-sm-4">
                    <?php if ( is_active_sidebar( 'promotion-sidebar' ) ) : ?>
					   <aside id="secondary" class="widget-area">
					        <?php dynamic_sidebar( 'promotion-sidebar' ); ?>
					   </aside>
					<?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
	endwhile;
	get_footer();
	?>