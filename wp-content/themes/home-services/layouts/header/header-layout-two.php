<div class="header-layout-2">
	
		<div class="top-header header-wrapper">
			<div class="container">
			<div class="top-social">
			<?php
			 if (class_exists('Alley_Business_Toolkit')) {
				do_action('ABT_social_media');
			}?></div>
				<div class="contact-number">
					<a href="tel:<?php echo esc_html(get_theme_mod('home_services_contact_num')); ?>"><span><?php echo esc_html( get_theme_mod( 'home_services_contact_text' ) ); ?></span>
					<?php if (get_theme_mod( 'home_services_contact_text' ) && get_theme_mod( 'home_services_contact_num' )){
						echo "|&nbsp;";
					}?><?php if(get_theme_mod( 'home_services_contact_num' )){ echo esc_html(get_theme_mod('home_services_contact_num')); } ?>
					</a>
				</div>
			</div>
		</div>
	<div class="middle-header header-wrapper">
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
				<p class="site-description"><?php echo $home_services_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
				<?php endif; ?>
			</div><!-- .site-branding -->
			<div class="button-group">
				<?php
					if(get_theme_mod( 'hide_show_header_button_1' )){
						if(get_theme_mod('header_button1_label') && get_theme_mod('header_button1_link')){
				?>
					<a href="<?php echo esc_url(get_theme_mod('header_button1_link')); ?>" class="btn schedule-btn"><?php echo esc_html(get_theme_mod('header_button1_label')); ?></a>
				<?php } }
					if(get_theme_mod( 'hide_show_header_button_2' )){
					if(get_theme_mod('header_button2_label') && get_theme_mod('header_button2_link')){
				?>
					<a href="<?php echo esc_url(get_theme_mod('header_button2_link')); ?>" class="btn financing-btn"><?php echo esc_html(get_theme_mod('header_button2_label')); ?></a>
				<?php } } ?>
			</div>
		</div>
	</div>
	<?php
	$sticky_header = get_theme_mod('home_services_header_sticky_menu_option');
	$sticky_class = $sticky_header == '1' ? 'sticky-menu' : '';
	?>
	<div class="bottom-header <?php echo esc_attr($sticky_class) ; ?>">
		<div class="container">
			<div class="site-branding">
				<?php
				the_custom_logo();
				if ( is_front_page() && is_home() ) :
					?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
				else :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
				endif;
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