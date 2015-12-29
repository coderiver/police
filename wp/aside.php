<!-- search -->
<form class="search search_desktop" action="/" method="get">
	<input class="search__input" type="text" name="s" id="search"  placeholder="Искать в блоге..." value="<?php the_search_query(); ?>" required>
	<!-- <input type="hidden" value="29" name="cat" id="scat"> -->
	<button class="search__btn" type="submit">
		<i class="icon icon-search"></i>
	</button>
</form>
<!-- widget -->
<div class="widget">
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5&appId=1457049151248753";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	<div class="fb-page" data-href="https://www.facebook.com/concept.glass.kiev" data-width="290" data-height="230" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/concept.glass.kiev"><a href="https://www.facebook.com/concept.glass.kiev">Concept.Glass LLC</a></blockquote></div></div>
</div>
<!-- pop -->
<div class="pop">
	<div class="pop__head">
	<?php echo __( '<!--:en-->TOP READS<!--:--><!--:ru-->Популярные<!--:--><!--:ua-->Популярнi<!--:-->' ); ?>
	</div>
	<div class="pop__list">

		<?php
			$args = array( 'showposts' => 10, 'meta_key' => 'post_views', 'orderby' => 'meta_value_num', 'order' => 'DESC' );
			query_posts($args);
			while ( have_posts() ) : the_post(); ?>

			<a class="pop__item" href="<?php the_permalink(); ?>">
				<div class="pop__pic">
					<img class="pop__pic-el" src="<?php the_field('picture'); ?>" alt="">
				</div>
				<div class="pop__info">
					<div class="pop__title"><?php the_title(); ?></div>
					<div class="pop__date"><?php the_time( get_option( 'date_format' ) ); ?></div>
				</div>
			</a>

		<?php endwhile; wp_reset_query(); ?>
		
	</div>
</div>