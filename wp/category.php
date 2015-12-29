<?php get_header(); ?>
<?php include('top.php'); ?>
<!-- blog -->
<div class="blog">
	<!-- center -->
	<div class="blog__center center">
		<!-- subscribe -->
		<div class="subscribe">
			<button class="subscribe__close">
				<i class="icon icon-close"></i>
			</button>
			<div class="subscribe__title">Узнавайте о новостях и предстоящих событиях!</div>
			<div class="subscribe__form">
				<input class="subscribe__input" type="text" placeholder="Ваш e-mail">
				<button class="subscribe__btn">
					<span class="subscribe__btn-title">подписаться</span>
					<span class="subscribe__btn-icon">
						<i class="icon icon-arrow-right"></i>
					</span>
				</button>
			</div>
		</div>
		<div class="blog__wrap">
			<!-- title -->
			<div class="blog__title title">БЛОГ</div>
			<div class="blog__l">
				<div class="blog__section">
					<div class="blog__list">
						<div class="blog__item">
							<!-- article -->
							<a class="article" href="#">
								<div class="article__pic">
									<img class="article__pic-el" src="http://placehold.it/300x170" alt="">
								</div>
								<div class="article__title">ПИВКУЛЬТУРА – особенный день.</div>
								<div class="article__text">В этот день мы вместе с организаторами культивировали эстетику потребления, как традиционных сортов пива, так и особенно эксклюзивных.</div>
								<div class="article__foot">
									<div class="article__date">4/10/2015</div>
									<div class="article__more">
										<i class="icon icon-arrow-right"></i>
									</div>
								</div>
							</a>
						</div>
						<div class="blog__item">
							<!-- article -->
							<a class="article" href="#">
								<div class="article__pic">
									<img class="article__pic-el" src="http://placehold.it/300x170" alt="">
								</div>
								<div class="article__title">ПИВКУЛЬТУРА – особенный день.</div>
								<div class="article__text">В этот день мы вместе с организаторами культивировали эстетику потребления, как традиционных сортов пива, так и особенно эксклюзивных.</div>
								<div class="article__foot">
									<div class="article__date">4/10/2015</div>
									<div class="article__more">
										<i class="icon icon-arrow-right"></i>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="blog__aside">
					<!-- search -->
					<div class="search">
						<input class="search__input" type="text" placeholder="Искать в блоге...">
						<button class="search__btn">
							<i class="icon icon-search"></i>
						</button>
					</div>
					<!-- widget -->
					<div class="widget">
						<img src="http://placehold.it/290x230" alt="">
					</div>
					<!-- pop -->
					<div class="pop">
						<div class="pop__head">Популярные</div>
						<div class="pop__list">
							<a class="pop__item" href="#">
								<div class="pop__pic">
									<img class="pop__pic-el" src="http://placehold.it/55x55" alt="">
								</div>
								<div class="pop__info">
									<div class="pop__title">Пивкультура – особенный день</div>
									<div class="pop__date">4/10/2015</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>