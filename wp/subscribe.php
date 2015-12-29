<!-- subscribe -->
<div class="subscribe">
	<button class="subscribe__close">
		<i class="icon icon-close"></i>
	</button>
	<div class="subscribe__title">
	<?php

	$content_post = get_page_by_path('podpiska'); 
	$content = $content_post->post_content;
	$content = apply_filters('the_content', $content);
	$content = str_replace(']]>', ']]&gt;', $content);
	echo $content;
	?>
	</div>
	<div class="subscribe__form">
	<?
	echo do_shortcode("[subscribe2]");
	?>
	</div>
	<form class="subscribe__form" style="display:none">
		<input class="subscribe__input" type="text" placeholder="Ваш e-mail" required>
		<button class="subscribe__btn">
			<span class="subscribe__btn-title">подписаться</span>
			<span class="subscribe__btn-icon">
				<i class="icon icon-arrow-right"></i>
			</span>
		</button>
	</form>
</div>
