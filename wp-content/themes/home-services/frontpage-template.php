<?php
/**
 * Template Name: Front Page for Theme
 * Template Name: Fullwidth Page
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package home_services
 */

get_header();
?>
<?php
if ( home_services_set_pro_active() ) {
	if(get_theme_mod('promotion_show_hide') && get_theme_mod('promotion_heading_text')){?>
		<div class="promotion-wraper home-block">
			<div class="container">
				<div class="row home-pomotion-header">
					<div class="col-sm-8">
						<?php 
							if(get_theme_mod('promotion_heading_text')){
								echo '<h2>'.esc_html(get_theme_mod('promotion_heading_text')).'</h2>';
							}
							if(get_theme_mod('desc_promotion_section')){
								echo '<p>'.esc_html(get_theme_mod('desc_promotion_section')).'</p>';
							}
						?>
					</div>
					<div class="col-sm-4">
						<?php if(get_theme_mod('promotion_btn_text')){
									if(get_theme_mod('promotion_btn_text_link')){
										$promotion_all_link = get_theme_mod('promotion_btn_text_link');
									}else{
										$promotion_all_link='#';
									}?>
									<div class="button-group">
										<a class="btn promotion-btn" href="<?php echo esc_url($promotion_all_link);?>"> <?php echo esc_html(get_theme_mod('promotion_btn_text'));?></a>
									</div>
							<?php }
						?>
					</div>
				</div>
				<div class="row promotion-list">
					<div class="promotion-holder-wraper">
						<?php
			            $seviceTag = get_theme_mod('home_services_promotion_tags');
			            if(!empty($seviceTag)) {
						    $home_service_promotion_args = array(
						        'post_type'      => 'abt_promotion',
						        'post_status'    => 'publish',
						        'order'          => 'DESC',
						        'posts_per_page'	 => 3,
						        'tax_query'      => [
						            [
						                'taxonomy'   => 'service_tag',
						                'field'      => 'slug',
						                'terms'       => $seviceTag

						            ]
						        ]
						    );
						    $all_posts = get_posts( $home_service_promotion_args );
						}
						
						if(empty($all_posts) || empty($seviceTag)){
							$additionl_args = array(
						        'post_type'				=> 'abt_promotion',
						  		'post_status'    => 'publish',
						        'ignore_sticky_posts'   => true,
						        'order'					=> 'DESC',
						        'posts_per_page'	 		=> 3,
						    );
						    $final_posts = new WP_Query( $additionl_args );
						}else{
							$final_posts = new WP_Query( $home_service_promotion_args );
						}   
		                if ( $final_posts->have_posts() ) :
		                while( $final_posts->have_posts() ):$final_posts->the_post();
		                $custom = get_post_custom(get_the_ID());?>
			            <div class="promotion-holder">
		                    <?php if(has_post_thumbnail()){
		                    	$summary_sub_class= 'with-thumbnails';?>
		                    	<div class="img-holder">
			                       <?php $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'');?>
			                    		<img width="465" height="371" src="<?php echo esc_url($image_url[0]); ?>"
			                        class="attachment-full size-full wp-post-image" alt="" loading="lazy">
		                        </div>
		                    <?php } else{
		                    	$summary_sub_class= 'without-thumbnails';
		                    }?>
			                
			                <div class="summary <?php echo $summary_sub_class;?>">

			                    <h3 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>

			                    <?php the_excerpt(); ?>
			                    <?php if(get_theme_mod('promotion_hide_disclaimer')){?>
			                    	 <p class="disclaimer"><?php echo esc_html($custom['abt_disclaimer'][0]); ?></p>
			                   <?php } ?>
			                   

			                    <a class="btn apply-btn" href="<?php the_permalink(); ?>">
			                    	<?php 
			                    		if(get_theme_mod('promotion_readmore_text')){
			                    			echo esc_html(get_theme_mod('promotion_readmore_text'));
			                    		}else{
			                    			echo __('Read More','home-services');
			                    		}
			                    		
			                    	?>
			                    		
			                    	</a>

			                </div>
			            </div>
			            <?php
							endwhile;
			                wp_reset_postdata();  
			            endif;?>
			        </div>
				</div>
			</div>
		</div><!-- end of promotion-->
	<?php }
	if(get_theme_mod('about_us_show_hide') && get_theme_mod('about_heading_text')){
		$alley_about_feature_image = get_theme_mod('about_us_section_image');
		if($alley_about_feature_image){
			$about_content_class='col-sm-6';
		}else{
			$about_content_class='col-sm-12';
		}
		?>
		<div class="about-wraper home-block">
			<div class="container">
				<div class="<?php echo esc_html($about_content_class);?> text-block">
					<?php 
						if(get_theme_mod('about_heading_text')){
							echo '<h2>'.esc_html(get_theme_mod('about_heading_text')).'</h2>';
						}
						if(get_theme_mod('desc_aboutus_section')){
							echo '<p>'.esc_html(get_theme_mod('desc_aboutus_section')).'</p>';
						}?>
						<?php if(get_theme_mod('about_us_btn_one_link') || get_theme_mod('about_us_btn_two_link') ){?>
							<div class="button-group">
							<?php if(get_theme_mod('about_us_btn_one_link')){?>
								<a class="btn" href="<?php echo esc_url(get_theme_mod('about_us_btn_one_link'));?>">
									<?php echo esc_html(get_theme_mod('about_us_btn_one'));?>
								</a>
							<?php } ?>
							<?php if(get_theme_mod('about_us_btn_two_link')){?>
								<a class="btn primary-btn" href="<?php echo esc_url(get_theme_mod('about_us_btn_two_link'));?>">
									<?php echo esc_html(get_theme_mod('about_us_btn_two'));?>
								</a>
							<?php } ?>
						</div>
						<?php } ?>
						
					
				</div>
				
					
					<?php	if ( !empty($alley_about_feature_image) ) { ?>
	 						<div class="col-sm-6 image-block"><img src="<?php echo esc_url($alley_about_feature_image); ?>" /></div>
						<?php } 
					?>
				
			</div>
		</div>
	<?php } 
	if(get_theme_mod('wws_show_hide')){
		$home_services_wws_status_1 = get_theme_mod('wws_item_heading_1');
        $home_services_wws_status_2 = get_theme_mod('wws_item_heading_2');
        $home_services_wws_status_3 = get_theme_mod('wws_item_heading_3');
        
        $home_services_wws_items_array = array($home_services_wws_status_1,$home_services_wws_status_2,$home_services_wws_status_3);
        $home_services_wws_items_array_filter = array_filter($home_services_wws_items_array);
        $home_services_wws_total_items = sizeof($home_services_wws_items_array_filter);
        if($home_services_wws_total_items > 0){
        ?>
		<div class="wws-wraper home-block">
			<div class="container">
				<div class="row home-wws-header aligncenter">	
					<?php 
						if(get_theme_mod('wws_heading_text')){
							echo '<h2>'.esc_html(get_theme_mod('wws_heading_text')).'</h2>';
						}
						if(get_theme_mod('wws_desc_section')){
							echo '<p>'.esc_html(get_theme_mod('wws_desc_section')).'</p>';
						}
					?>
				</div>

				<div class="wws-block" id="primary">
		    		<div class="container">
				        <div class="banner-blocks-holder">
				            <?php 
				            
				            // echo $home_services_wws_total_items;
				            
				            for($i= 1; $i < $home_services_wws_total_items+1 ; $i++){
				            	$count=1;
				                $image[] = get_theme_mod( 'wws_item_'.$i, 'size=home_services_service_section');
				                
				                $titles[] = get_theme_mod( 'wws_item_heading_'.$i);
				                $content[] = get_theme_mod( 'wws_item_info_'.$i);
				                $linkUrl[] = get_theme_mod( 'wws_item_link_'.$i);
				                $results = array_map( null, $image, $titles, $content, $linkUrl );
				            }
				            foreach ($results as $result){
				                $imageID = attachment_url_to_postid($result[0]);
				                if(isset($result[3])){
				                	$itemurl = esc_html($result[3]);
				                }else{
				                	$itemurl = '#';
				                }
				            ?>
				            <a target= "_blank" href="<?php echo $itemurl; ?>">
				            <div class="block-holder">
				            	<?php
				            	if(!empty(get_theme_mod('wws_item_'.$count))){?>
				            		<span class="wws-icon"><img src="<?php echo esc_url(get_theme_mod('wws_item_'.$count));?>" /></span>
				            	<?php }
				                
				                ?>
					                <div class="block-content">
					                    <h4 class="title"><?php echo esc_html($result[1]); ?></h4>
					                    <p><?php echo esc_textarea($result[2]);?></p>  
					                </div>
					           
				            </div> </a>
				            <?php $count++;} ?>
				        </div>
				    </div>
				</div>
			</div>
		</div>
	<?php } 
	}
	if(get_theme_mod('testimonial_show_hide') && get_theme_mod('testimonial_heading_text')){?>
	<div class="testimonial-wraper home-block">
		<div class="container">
			<div class="row">
				<div class="col-sm-4 testimonial-info">
					<?php 
						if(get_theme_mod('testimonial_heading_text')){
							echo '<h2>'.esc_html(get_theme_mod('testimonial_heading_text')).'</h2>';
						}
						if(get_theme_mod('desc_testimonial_section')){
							echo '<p>'.esc_html(get_theme_mod('desc_testimonial_section')).'</p>';
						}
					?>
				</div>
				<div class="col-sm-8 testimonial-carosuel">
					<div class="home-testimonial-layout-1 owl-carousel">
					    <?php
				            $seviceTag = get_theme_mod('home_services_testomonial_tags');
				            if(!empty($seviceTag)) {
							    $home_service_testimonial_args = array(
							        'post_type'      => 'abt_testimonials',
							        'post_status'    => 'publish',
							        'order'          => 'DESC',
							        'posts_per_page'	 => 3,
							        'tax_query'      => [
							            [
							                'taxonomy'   => 'service_tag',
							                'field'      => 'slug',
							                'terms'       => $seviceTag

							            ]
							        ]
							    );
							    $all_testimonial_posts = get_posts( $home_service_testimonial_args );
							}
							
							if(empty($all_testimonial_posts) || empty($seviceTag)){
								$extra_args = array(
							        'post_type'				=> 'abt_testimonials',
							  		'post_status'    => 'publish',
							        'ignore_sticky_posts'   => true,
							        'order'					=> 'DESC',
							        'posts_per_page'	 		=> 3,
							    );
							    $final_posts = new WP_Query( $extra_args );
							}else{
								$final_posts = new WP_Query( $home_service_testimonial_args );
							}   
			                if ( $final_posts->have_posts() ) :
				                while( $final_posts->have_posts() ):$final_posts->the_post();
					                $id = get_the_ID();
					                $taxonomy = 'service_tag';
					                $recent_terms = get_the_terms( $id, $taxonomy );
				                	$custom = get_post_custom(get_the_ID());?>
						            <div class="testimonial-holder">
						                
						                <div class="summary">
						                    <?php the_excerpt(); ?>
						                    <div class="img-holder">
						                    <?php if(has_post_thumbnail()){
						                        $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(),'');
						                    ?>
						                    <img width="100" height="100" src="<?php echo esc_url($image_url[0]); ?>"
						                        class="attachment-full size-full wp-post-image" alt="" loading="lazy">
						                    <?php } ?>
						                </div>
						                    <h4 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
						                    <?php if ($custom['abt_source'][0]){ ?>
				                        	<span class="review-source"><a target = "_blank"
				                                href="<?php echo esc_url($custom['abt_source_link'][0]); ?>"><?php echo esc_html($custom['abt_source'][0]); ?></a></span>
					                        <?php }  
										        if ($recent_terms) {
										          echo '<ul>';
										          foreach ( $recent_terms as $term ) {
										            if ( isset( $term ) ) {
										              if ( isset( $term->name ) ) {
										                echo '<li>'.$term->name.'</li>';
										              }
										            }
										          }
										          echo '</ul>';
										        } ?>
						                </div>
						            </div>
				            	<?php endwhile;
				                wp_reset_postdata();  
				            endif;?>
				        </div>
				</div>
			</div>
		</div>
	</div>
	<?php } 
	if(get_theme_mod('cta_show_hide') && get_theme_mod('cta_heading_text')){?>

	<div class="cta-wraper home-block">
		<?php $alley_cta_bg_image = esc_html(get_theme_mod('cta_section_image'));
			if ( !empty($alley_cta_bg_image) ) { ?>
					<img class="cta-bg-img" src="<?php echo $alley_cta_bg_image; ?>" />
			<?php } 
		?>
		<div class="cta-content">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<?php 
							if(get_theme_mod('cta_heading_text')){
								echo '<h1 class="text-light">'.esc_html(get_theme_mod('cta_heading_text')).'</h1>';
							}
							if(get_theme_mod('desc_cta_section')){
								echo '<p>'.esc_html(get_theme_mod('desc_cta_section')).'</p>';
							}
							if(get_theme_mod('cta_btn_text_link')){?>
								<div class="button-group">
									<a class="btn" href="<?php echo esc_url(get_theme_mod('cta_btn_text_link'));?>">
										<?php echo esc_html(get_theme_mod('cta_btn_text'));?>
									</a>
								</div>
							<?php } ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php }
}?>
<?php get_footer();