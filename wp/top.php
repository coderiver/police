<!-- BEGIN header -->
<header class="header">
  <div class="header__logo">
    <a href="/" class="main-logo main-logo_adaptive main-logo_beta"></a>
  </div>

  <div class="header__content">

    <div class="header__phones">
      <a href="tel:102" class="header-call">
        <span class="header-call__text">Викликати патруль</span>
        <span class="header-call__number">
          <i class="icon icon-phone"></i>
          102
        </span>
      </a>

      <a href="tel:0442549488" class="header-call">
        <span class="header-call__text">Гаряча лінія</span>
        <span class="header-call__number">
          <i class="icon icon-phone"></i>
          (044) 254-94-88
        </span>
      </a>
      <a href="/contacts" class="header-others">Інші контакти</a>
    </div>

    <div class="header__menu">
      <!-- <nav class="main-menu">
        <a class="main-menu__link <?php if(is_home()) echo 'is-active';?>" href="/">Головна</a>
        <a class="main-menu__link <?php if(is_page('news')) echo 'is-active';?>" href="/news">Новини</a>
        <a class="main-menu__link <?php if(is_page('akcents')) echo 'is-active';?>" href="/akcents">Детальна інформація</a>
        <a class="main-menu__link <?php if(is_page('contacts')) echo 'is-active';?>" href="/contacts">Контакти</a>
        <a class="main-menu__link <?php if(is_page('faq')) echo 'is-active';?>" href="/faq">Часті запитання</a>
      </nav> -->

      <div class="header__right">
        <form action="" class="global-search">
          <input class="global-search__input" name="global_search" placeholder="Пошук" type="text">
          <i class="global-search__icon icon icon-search"></i>
        </form>

        <div class="lang">
        

          <div class="lang__item">
            <span><?php echo __('[:ua]Українською[:][:ru]По-русски[:]');?></span>
            <i class="icon icon-chevron-down"></i>
          </div>
          <?php 
          
          qtranxf_generateLanguageSelectCode('both');
          ?>
         <!--  <ul class="lang__list">
            <li class="lang__item">
              <span>Українською</span>
            </li>
            <li class="lang__item">
              <span>По-русски</span>
            </li>
          </ul> -->
        </div>
      </div>
    </div>

    <div class="header__menu-btn visible-sm">
      <button class="hamburger" type="button"><span></span></button>
    </div>

  </div>
</header>
<!-- END header -->