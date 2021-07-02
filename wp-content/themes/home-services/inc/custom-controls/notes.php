<?php

if( class_exists( 'WP_Customize_Control' ) ) {

    class Home_Services_Custom_Text extends WP_Customize_Control {
        public $type = 'home-services-customtext';
        public function render_content() {
        ?>
        <label>            
            <h3><i><?php echo esc_html( $this->label ); ?></i></h3>
        </label>
        <?php
        }
    }
}