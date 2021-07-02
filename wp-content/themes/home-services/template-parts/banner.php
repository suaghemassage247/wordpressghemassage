<?php
/**
 * Banner part for displaying banner
 * @package home_services
 */
?>
<div class="header-background-one" id="primary">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 caption-holder-wrapper">
            <?php 
                $heading_for_banner = get_theme_mod('heading_for_banner');
                $content_for_banner = get_theme_mod('content_for_banner');
                $cta_button1_for_banner = get_theme_mod('cta_button1_for_banner');
                $cta_button1_link = get_theme_mod('cta_button1_link');
                $cta_button2_for_banner = get_theme_mod('cta_button2_for_banner');
                $cta_button2_link = get_theme_mod('cta_button2_link');
                if($heading_for_banner || $content_for_banner || $cta_button1_for_banner || $cta_button2_for_banner ){ 
                ?>
                <div class="caption-holder">
                    <?php 
                    if($heading_for_banner){ ?>
                        <h1 class="main-title">
                            <?php echo esc_html($heading_for_banner, 'home-services'); ?>
                        </h1>
                        <?php 
                    } 
                    if($content_for_banner){
                        ?>
                        <p><?php echo esc_html($content_for_banner); ?></p>
                    <?php } ?>
 
 
 
                    <div class="button-group">
                        <?php 
                        $cta_button1_for_banner = get_theme_mod('cta_button1_for_banner');
                        $cta_button1_link = get_theme_mod('cta_button1_link');
                        if($cta_button1_for_banner && $cta_button1_link){ ?>
                            <a href="<?php echo esc_url($cta_button1_link); ?>" class="btn cta-1"><?php echo esc_html($cta_button1_for_banner); ?></a>
                            <?php
                        } 
                        $cta_button2_for_banner = get_theme_mod('cta_button2_for_banner');
                        $cta_button2_link = get_theme_mod('cta_button2_link');
                        if($cta_button2_for_banner && $cta_button2_link){ ?>
                            <a href="<?php echo esc_url($cta_button2_link); ?>" class="btn cta-2"><?php echo esc_html($cta_button2_for_banner); ?></a>
                        <?php } ?>
                    </div>
                    <?php 
                        $contact_for_banner = get_theme_mod('contact_for_banner');
                        if($contact_for_banner){ ?>
                        <div class="call-us"><?php echo esc_html($contact_for_banner); ?></div>
                    <?php } ?>
                </div>
                    <?php } ?>
            </div>
            <div class="col-sm-6">
                <div class="img-holder">
                    <img src="<?php header_image(); ?>" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
