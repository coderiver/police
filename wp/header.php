<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Patrol Police</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="stylesheet" media="all" href="<?php bloginfo('template_directory'); ?>/css/app.css">
</head>
<?php if(is_home()){$class = 'is-homepage';}else{$class = '';}?>
<body class="<?php echo $class ?>">
<?php get_template_part( 'top' ); ?>
