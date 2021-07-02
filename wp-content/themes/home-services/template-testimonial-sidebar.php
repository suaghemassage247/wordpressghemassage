<?php
/**
 * Template Name: Testimoinal Page with Sidebar
 */
get_header(); 
?>


<div class="inside-page content-area testimonial-archive">
    <div class="container">
        <div class="main-content" id="main-content primary">
            <div class="row">
                <div class="col-sm-8">
                    <?php get_template_part( 'template-parts/content-page', 'testimonial' ); ?>
                </div>
                <div class="col-sm-4">
                    <?php if ( is_active_sidebar( 'testimonial-sidebar' ) ) : ?>
                       <aside id="secondary" class="widget-area">
                            <?php dynamic_sidebar( 'testimonial-sidebar' ); ?>
                       </aside>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>


<?php 
get_footer();