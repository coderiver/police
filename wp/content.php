<?php if ( is_single() ) : ?>

	<!-- content -->
	<div class="content">
		<div class="content__title"><?php the_title(); ?></div>
		<div class="content__pic">


			

		</div>
		<div class="content__date"><?php the_time( get_option( 'date_format' ) ); ?></div>
		<div class="content__text"><?php the_content(); ?></div>
	</div>

<?php else : ?>

	<div class="blog__item">
		<!-- article -->
		<a class="article" href="<?php the_permalink(); ?>" rel="bookmark">
			<div class="article__pic">
				<img class="article__pic-el" src="<?php the_field('picture'); ?>" alt="">
			</div>
			<div class="article__title"><?php the_title(); ?></div>
			<div class="article__text"><?php $description = the_field('description'); echo $description; ?></div>
			<div class="article__foot">
				<div class="article__date"><?php the_time( get_option( 'date_format' ) ); ?></div>
				<div class="article__more">
					<i class="icon icon-arrow-right"></i>
				</div>
			</div>
		</a>
	</div>

<?php endif; ?>




