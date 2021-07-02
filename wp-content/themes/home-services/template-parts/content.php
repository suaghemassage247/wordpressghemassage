<?php
/**
 * Template part for displaying posts.
 *
 * @package home_services
 */
?>

<?php $post_details = get_theme_mod( 'blog_post_show_hide_details', array( 'date', 'categories', 'tags', 'author' ) ); ?>
<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="news-snippet">
        <?php if ( has_post_thumbnail() ) : ?>
        <a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark" class="featured-image">
            <?php the_post_thumbnail( 'home_services_feature_image' ); ?>
        </a>
        <?php endif; ?>
     
        <div class="summary">
            <?php  if(get_theme_mod( 'hide_show_category', 'true' )){?>
                <span class="category">
                    <?php if( in_array( 'categories', $post_details ) ) { ?>
                    <?php $categories = get_the_category();
                  if( ! empty( $categories ) ) :
                    foreach ( $categories as $category ) { ?>
                        <a
                            href="<?php echo esc_url( get_category_link( $category->term_id ) ); ?>"><?php echo esc_html( $category->name ); ?></a>
                        <?php }
                 endif; ?>
                        <?php } ?>
                </span>
            <?php } ?>
            <h4 class="news-title"><a href="<?php echo esc_url( get_permalink() ); ?>"
                    rel="bookmark"><?php the_title(); ?></a></h4>
            <?php if( is_array( $post_details ) && ! empty( $post_details ) ) : ?>
            <div class="info">
                <ul class="list-inline">

                    <?php 
          if(get_theme_mod( 'hide_show_author', 'true' )){
            if( in_array( 'author', $post_details ) ) { ?>
                    <li>
                        <a class="url fn n"
                            href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
                            <?php $avatar = get_avatar( get_the_author_meta( 'ID' ), $size = 60 ); ?>
                            <?php if( $avatar ) : ?>
                            <div class="author-image">
                                <?php echo esc_url($avatar); ?>
                            </div>
                            <?php endif; ?>
                            <?php echo esc_html( get_the_author() ); ?>
                        </a>
                    </li>
                    <?php } } ?>

                    <?php 
        if(get_theme_mod( 'hide_show_date', 'true' )){ ?>
                    <?php if( in_array( 'date', $post_details ) ) { ?>
                    <?php $archive_year  = get_the_time('Y'); $archive_month = get_the_time('m'); $archive_day = get_the_time('d'); ?>
                    <li><i class="fa fa-clock"></i> <a
                            href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day ) ); ?>"><?php echo get_the_date(); ?></a>
                    </li>
                    <?php } } ?>
                   <?php if(get_theme_mod( 'hide_show_tags', 'true' )){?>
                    <?php if( in_array( 'tags', $post_details ) ) { ?>
                    <?php $tags = get_the_tags($post->ID);
                    if( ! empty( $tags ) ) :
                        foreach ( $tags as $post_tag ) { ?>
                            <li><i class="fa fa-tag" aria-hidden="true"></i> <a
                                        href="<?php echo esc_url( get_category_link( $post_tag->term_id ) ); ?>"><?php echo esc_html( $post_tag->name ); ?></a>
                            </li>
                        <?php }
                    endif; ?>
                    <?php } 
                }?>


                    <?php if( in_array( 'number_of_comments', $post_details ) ) { ?>
                    <li><i class="fa fa-comments-o"></i>
                        <?php comments_popup_link( __( 'zero comment', 'home-services' ), __( 'one comment', 'home-services' ), __( '% comments', 'home-services' ) ); ?>
                    </li>
                    <?php } ?>

                </ul>
            </div>
            <?php endif; ?>

            <p><?php echo esc_html(home_services_excerpt( 40 )); ?></p>

            <a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark" title=""
                class="readmore"><?php esc_html_e('Read More','home-services'); ?> </a>

        </div>
    </div>
</div>