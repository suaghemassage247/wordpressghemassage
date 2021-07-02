<?php
/**
 * Template part for displaying single posts.
 *
 * @package home_services
 */

?>

<?php $post_details = get_theme_mod( 'detail_post_show_hide_details', array( 'date', 'categories', 'tags', 'author' ) ); ?>
<h1 class="page-title"><?php the_title(); ?></h1>

<div class="single-post">

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
                 if(get_theme_mod( 'hide_show_date', 'true' )){ 
                   if( in_array( 'date', $post_details ) ) { ?>
            <?php $archive_year  = get_the_time('Y'); $archive_month = get_the_time('m'); $archive_day = get_the_time('d'); ?>
            <li><i class="fas fa-clock"></i> <a
                    href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day ) ); ?>"><?php echo get_the_date(); ?></a>
            </li>
            <?php } }?>

            <?php if( in_array( 'categories', $post_details ) ) { ?>
                
            <li>
                <?php $categories = get_the_category();
                      if( ! empty( $categories ) ) :
                         echo  __('Category:','home-services');
                        foreach ( $categories as $category ) { ?>
                <span class="category"><a
                        href="<?php echo esc_url( get_category_link( $category->term_id ) ); ?>"><?php echo esc_html( $category->name ); ?></a></span>
                <?php }
                      endif; ?>
            </li>
            <?php } ?>
            
            <?php if( in_array( 'tags', $post_details ) ) { ?>
            <?php $tags = get_the_tags($post->ID);

                    if( ! empty( $tags ) ) :
                        echo  __('Tag:','home-services');
                      foreach ( $tags as $post_tag ) { ?>
            <li><a
                    href="<?php echo esc_url( get_category_link( $post_tag->term_id ) ); ?>"><?php echo esc_html( $post_tag->name ); ?></a>
            </li>
            <?php }
                    endif; ?>
            <?php } ?>


            <?php if( in_array( 'number_of_comments', $post_details ) ) { ?>
            <li><i class="fa fa-comments-o"></i>
                <?php comments_popup_link( __( 'zero comment', 'home-services' ), __( 'one comment', 'home-services' ), __( '% comments', 'home-services' ) ); ?>
            </li>
            <?php } ?>

        </ul>
    </div>
    <?php endif; ?>




    <div class="post-content">

        <?php if ( has_post_thumbnail() ) : ?>
        <figure class="feature-image">
            <?php the_post_thumbnail( 'full' ); ?>
        </figure>
        <?php endif; ?>

        <article>
            <?php the_content(); ?>

            <?php
        wp_link_pages( array(
          'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'home-services' ),
          'after'  => '</div>',
        ) );
      ?>
        </article>

    </div>

    <?php $author_block = get_theme_mod( 'show_hide_author_block_details', 'author' ); ?>

    <?php if( is_array( $author_block ) && in_array( 'author', $author_block ) ) : ?>
    <div class="author-post clearfix">
        <?php $avatar = get_avatar( get_the_author_meta( 'ID' ), $size = 75 ); ?>
        <?php if( $avatar ) : ?>
        <div class="author-image">
            <a
                href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>"><?php echo esc_url($avatar); ?></a>
        </div>
        <?php endif; ?>
        <div class="author-details">
            <h4><a
                    href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>"><?php echo esc_html( get_the_author() ); ?></a>
            </h4>
            <p><?php echo esc_html( get_the_author_meta('description') ); ?></p>
        </div>
    </div>
    <?php endif; ?>

</div>