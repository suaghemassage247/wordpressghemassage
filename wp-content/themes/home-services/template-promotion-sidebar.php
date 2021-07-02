<?php
/**
 * Template Name: Promotion page with Sidebar
 */
get_header(); 
?>


<div class="inside-page content-area promotion-archive">
	<div class="container">
		<div class="main-content" id="main-content primary">
			<div class="row"> 
				<div class="col-sm-8">
					<?php $masionary_view = " masionary-view"; ?>
					<?php set_query_var( 'masionary_view', $masionary_view ); ?>
					<?php get_template_part( 'template-parts/content-page', 'promotion' ); ?>
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
get_footer();