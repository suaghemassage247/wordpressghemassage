<?php
/**
 * Template Name: Testimoinal Page
 */
get_header(); 
?>


<div class="inside-page content-area testimonial-archive">
    <div class="container">
        <div class="main-content" id="main-content primary">
            <div class="row">
                <div class="col-sm-12">
                    <?php get_template_part( 'template-parts/content-page', 'testimonial' ); ?>
                </div>
            </div>
        </div>
    </div>
</div>


<?php 
get_footer();