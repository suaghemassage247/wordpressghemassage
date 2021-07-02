<?php
/**
 * Customizer Control: Promotion category dropdown.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
if( ! class_exists( 'Home_Service_Promotion_Tags_Control' ) ){
    class Home_Service_Promotion_Tags_Control extends WP_Customize_Control{
    public $type= 'home-service-promotion-tags-select';
    private $tags = false;

    public function __construct($manager, $id, $args = array(), $options = array()){

      $this->tags = get_terms('service_tag');

      parent::__construct( $manager, $id, $args );
    }

    /**
     * Render the content of the tag dropdown
     *
     * @return HTML
     */
    public function render_content(){
            if(!empty($this->tags)){
                ?>
                    <label>
                      <span class="customize-category-select-control"><?php echo esc_html( $this->label ); ?></span>
                      <select <?php $this->link(); ?>>
                          <option><?php echo esc_html('None','home-services');?></option>
                           <?php
                                foreach ( $this->tags as $tag ){
                                  $promoargs = array(
                                      'post_type' => 'abt_promotion',
                                      'post_status' => 'publish',
                                      'hide_empty' => true,
                                      'tax_query'    => [
                                            [
                                                'taxonomy'   => 'service_tag',
                                                'field'      => 'id',
                                                'terms'       => $tag

                                            ]
                                        ]
                                    );
                                    $all_promotions = get_posts( $promoargs );
                                    if(!empty($all_promotions)){
                                      printf('<option value="%s" %s>%s</option>', $tag->name, selected($this->value(), $tag->name, false), $tag->name);
                                    }
                                }
                           ?>
                      </select>
                    </label>
                <?php
            }
            else{?>
        <select>
                  <option><?php echo esc_html('Tag Not found','home-services');?></option>
              </select>
      <?php }
       }
    }
}