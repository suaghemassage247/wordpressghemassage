<?php

if ($showBlogs= get_theme_mod( 'cta_blocks_show_hide')){

$home_services_service_status_1 = get_theme_mod('title_for_cta_block_1');
$home_services_service_status_2 = get_theme_mod('title_for_cta_block_2');
$home_services_service_status_3 = get_theme_mod('title_for_cta_block_3');

$home_services_service_items_array = array($home_services_service_status_1,$home_services_service_status_2,$home_services_service_status_3);
$home_services_services_items_array_filter = array_filter($home_services_service_items_array);
$home_services_services_total_items = sizeof($home_services_services_items_array_filter);
if($home_services_services_total_items >0 ){
?>

<div class="banner-blocks home-block" id="primary">
    <div class="container">
        <h2><?php echo esc_html( get_theme_mod( 'services_heading' ) ); ?></h2>
        <div class="banner-blocks-holder">
            <?php
            
                for($i= 1; $i < $home_services_services_total_items+1 ; $i++){
                    $count=1;
                    $image[] = get_theme_mod( 'cta_block_'.$i.'_image', 'size=home_services_service_section');
                    
                    $titles[] = get_theme_mod( 'title_for_cta_block_'.$i.'');
                    $content[] = get_theme_mod( 'content_for_cta_block_'.$i.'');
                    $linkBtn[] = get_theme_mod( 'cta_block_'.$i.'_link_label');
                    $linkUrl[] = get_theme_mod( 'cta_block_'.$i.'_link');
                    $results = array_map( null, $image, $titles, $content, $linkBtn, $linkUrl );
                }
                foreach ($results as $result){
                    // $imageID = attachment_url_to_postid($result[0]);
                ?>
                <div class="block-holder">
                <?php
                    // echo wp_get_attachment_image( $imageID, 'home_services_service_section' );
                    ?>
                    <img src="<?php echo esc_url(get_theme_mod('cta_block_'.$count.'_image'));?>" />
                    <div class="block-content">
                        <h3 class="title"><?php echo esc_html($result[1]); ?></h3>
                        <p><?php echo esc_textarea($result[2]);?></p>
                        
                        <a target= "_blank" href="<?php if(isset($result[4])) echo esc_html($result[4]);?>" class="btn">
                            <?php if(isset($result[3])) echo esc_html($result[3]);?>
                        </a>
                        
                    </div>
                </div>
                <?php  $count++;
            }?>
        </div>
    </div>
</div>
<?php }
} ?>