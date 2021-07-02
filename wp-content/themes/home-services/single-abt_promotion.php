<?php 
	get_header(); 
	while (have_posts()):the_post();
?>


<div class="inside-page content-area promotion-detail">
    <div class="container">
        <div class="main-content" id="main-content primary">
            <div class="row">
                <div class="col-sm-12">
                    <?php get_template_part( 'template-parts/content-single', 'promotion' ); ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
	endwhile;
	get_footer();