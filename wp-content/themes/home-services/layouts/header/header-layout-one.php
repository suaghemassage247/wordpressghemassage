<div class="header-layout-1">
	
		<div class="top-header header-wrapper">
			<div class="container">
			<?php
			 if (class_exists('Alley_Business_Toolkit')) {
				do_action('ABT_social_media');
			}?>
				<?php get_template_part('template-parts/header-social', 'icon'); ?>
				<div class="contact-number">
				<a href="tel:<?php echo esc_html(get_theme_mod('home_services_contact_num')); ?>"><span><?php echo esc_html( get_theme_mod( 'home_services_contact_text' ) ); ?></span>
					<?php if (get_theme_mod( 'home_services_contact_text' ) && get_theme_mod( 'home_services_contact_num' )){
						echo "|&nbsp;";
					}?>
					<?php if(get_theme_mod( 'home_services_contact_num' )){ echo esc_html(get_theme_mod('home_services_contact_num')); } ?>
					</a>
				</div>
			</div>
		</div>

	<?php
	$sticky_header = get_theme_mod('home_services_header_sticky_menu_option');
	$sticky_class = $sticky_header == '1' ? 'sticky-menu' : '';
	?>
	<div class="middle-header header-wrapper <?php echo esc_attr($sticky_class) ; ?>">
		<div class="container">
			<div class="site-branding">
				<?php
				the_custom_logo();
					$name = get_bloginfo('name');
						if ( $name ){
							  echo '<div class="site-title"><a href="'.esc_url(home_url()).'" rel="home">' .esc_html( $name ) . '</a></div>';
							}
					?>
				<?php 
				$home_services_description = get_bloginfo( 'description', 'display' );
				if ( $home_services_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo esc_textarea($home_services_description); ?></p>
				<?php endif; ?>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
					<div id="nav-icon">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
				<?php
				wp_nav_menu(
					array(
					'theme_location' => 'main-menu',
					'menu_id'        => 'primary-menu',
					)
				);
				?>
			</nav><!-- #site-navigation -->
		</div>
	</div>
</div>