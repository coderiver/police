<?php get_header(); ?>
<?php include('top.php'); ?>
<!-- blog -->
<div class="blog">
	<!-- center -->
	<div class="blog__center center">
		
		<?php include('subscribe.php'); ?>

		<div class="blog__wrap">
			<!-- title -->
			<div class="blog__title title"><?php echo get_cat_name(29) ?></div>
			<div class="blog__l">
				<div class="blog__section">
					<div class="blog__list">

						<?php if ( have_posts() ) : 

							// Start the Loop.
							while ( have_posts() ) : the_post();

							/*
							 * Include the post format-specific template for the content. If you want to
							 * use this in a child theme, then include a file called called content-___.php
							 * (where ___ is the post format) and that will be used instead.
							 */
							get_template_part( 'content', get_post_format() );

							endwhile;

						endif; ?>

					</div>
				</div>
				<div class="blog__aside">
					<?php include('aside.php'); ?>
				</div>
			</div>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>