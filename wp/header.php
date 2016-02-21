<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php wp_title(''); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="stylesheet" media="all" href="<?php bloginfo('template_directory'); ?>/css/app.css">
	<?php wp_head();?>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-73801756-1', 'auto');
	  ga('send', 'pageview');

	</script>
</head>
<?php if(is_home()){$class = 'is-homepage';}else{$class = '';}?>
<body class="<?php echo $class ?>">
<?php get_template_part( 'top' ); ?>
