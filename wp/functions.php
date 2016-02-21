<?php
/**
 * @package WordPress
 * @subpackage Police
 */

/*
Fix Posts=>News
*/
function revcon_change_post_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'News';
    $submenu['edit.php'][5][0] = 'News';
    $submenu['edit.php'][10][0] = 'Add News';
    $submenu['edit.php'][16][0] = 'News Tags';
    echo '';
}
function revcon_change_post_object() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'News';
    $labels->singular_name = 'News';
    $labels->add_new = 'Add News';
    $labels->add_new_item = 'Add News';
    $labels->edit_item = 'Edit News';
    $labels->new_item = 'News';
    $labels->view_item = 'View News';
    $labels->search_items = 'Search News';
    $labels->not_found = 'No News found';
    $labels->not_found_in_trash = 'No News found in Trash';
    $labels->all_items = 'All News';
    $labels->menu_name = 'News';
    $labels->name_admin_bar = 'News';
}
 
add_action( 'admin_menu', 'revcon_change_post_label' );
add_action( 'init', 'revcon_change_post_object' );
/*
End of Fix for Posts-news
*/




add_theme_support( 'automatic-feed-links' );
add_theme_support( 'post-thumbnails' ); 

add_theme_support( 'print-style' );


/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @since Simpla 1.01
 */
function simpla_wp_title( $title, $sep ) {
	global $page, $paged;

	if ( is_feed() )
		return $title;

	// Add the blog name
	// $title .= ' | '.get_bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ){
        $title .= get_bloginfo( 'name' );
		$title .= " | $site_description  ";
    }
    else{
        $title .= ' | '.get_bloginfo( 'name' );
    }

	

	return $title;
}
add_filter( 'wp_title', 'simpla_wp_title', 10, 2 );



remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'start_post_rel_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link');

// add_filter( 'wp_title', 'filter_wp_title' );
/**
 * Filters the page title appropriately depending on the current page
 *
 * This function is attached to the 'wp_title' fiilter hook.
 *
 * @uses    get_bloginfo()
 * @uses    is_home()
 * @uses    is_front_page()
 */
// function filter_wp_title( $title ) {
//     global $page, $paged;

//     if ( is_feed() )
//         return $title;

//     $site_description = get_bloginfo( 'description' );

//     $filtered_title = $title . get_bloginfo( 'name' );
//     $filtered_title .= ( ! empty( $site_description ) && ( is_home() || is_front_page() ) ) ? ' | ' . $site_description: '';
//     $filtered_title .= ( 2 <= $paged || 2 <= $page ) ? ' | ' . sprintf( __( 'Page %s' ), max( $paged, $page ) ) : '';

//     return $filtered_title;
// }
// function qtrans_menuitem2( $item ) {
//     foreach ($item as $key=>$values){
//     $item[$key]->title = qtrans_useTermLib($values->title);
// }
// qtrans_useCurrentLanguageIfNotFoundUseDefaultLanguage( $item->title );
//    return $item;
// }
// add_filter('wp_nav_menu_objects',      'qtrans_menuitem2', 0);

// function qtrans_menuitem( $menu_item ) {
//    $menu_item->title = qtrans_useCurrentLanguageIfNotFoundUseDefaultLanguage( $menu_item->title );
//    $menu_item->title = qtrans_useTermLib( $menu_item->title );
//    return $menu_item;
// }
// add_filter('wp_setup_nav_menu_item',      'qtrans_menuitem', 0);
?>






