<?php get_header(); ?>

<?php get_template_part( 'slider' ); ?>


<div class="l l-main-page">
<div class="l-main-page__left">
  <!-- BEGIN news -->
  <div class="head">
    <h3 class="title"><a href='/news'>Новини</a></h3>
  </div>

  <?php get_template_part( 'homepage-news' ); ?>

  <div class="align-right">
    <a href="/news" class="btn"><span class="btn__text">Усі новини</span></a>
  </div>
  <!-- END news -->
</div>
<div class="l-main-page__right">
  <!-- BEGIN akcents -->
  <div class="head">
    <h3 class="title"><a href="/akcents">Акценти</a></h3>
  </div>

  <?php get_template_part( 'homepage-akcents' ); ?>
  
  <div class="align-right">
  	<a href="/akcents" class="btn"><span class="btn__text">Усі акценти</span></a>
  </div>
  <!-- END akcents -->
</div>
</div>

<?php get_footer(); ?>
