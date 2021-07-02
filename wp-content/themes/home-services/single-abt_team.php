<?php 
get_header(); 
while (have_posts()):the_post();
$custom = get_post_custom(get_the_ID());
	?>


	<div class="inside-page content-area contact-page">
		<div class="container">
			<div class="main-content" id="main-content primary">
				<div class="team-detail">
					<div class="img-info-block">
						<div class="img-holder">
						<?php
                        if(has_post_thumbnail()){
						$image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'');
					?>
                    <img src="<?php echo esc_url($image_url[0]); ?>" alt="">
                    <?php } ?>
						</div>
						<div class="info-block">
							<h2 class="team-title"><?php the_title(); ?></h2>
							<span class="organization"><?php echo esc_html($custom['abt_position'][0]); ?></span>
						</div>
					</div>
					<div class="detail-block">
						<?php the_content(); ?>
					</div>
				</div>
			</div>
		</div>
	</div>



	<?php
endwhile;
get_footer();