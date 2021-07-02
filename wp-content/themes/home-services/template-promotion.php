<?php

get_header(); 
?>


<div class="inside-page content-area promotion-archive">
	<div class="container">
		<div class="main-content" id="main-content primary">
			<div class="row"> 
				<div class="col-sm-12">
					<?php $masionary_view = ""; ?>
					<?php set_query_var( 'masionary_view', $masionary_view ); ?>
					<?php get_template_part( 'template-parts/content-page', 'promotion' ); ?>
				</div>
			</div>
		</div>
	</div>
</div>

<?php 
get_footer();