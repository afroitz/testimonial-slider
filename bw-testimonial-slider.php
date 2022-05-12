<?php
/**
 * Plugin Name:       Bw Testimonial Slider
 * Description:       Display a nice slider for testimonials
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bw-testimonial-slider
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_bw_testimonial_slider_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_bw_testimonial_slider_block_init' );

function bw_ts_enqueue_script(){
	wp_enqueue_script(
		'bw-ts-functionality',
		plugins_url( 'assets/bw-ts-functionality.js', __FILE__ ),
		array( 'jquery' ),
		1.1,
		true
	);
}

add_action( 'wp_enqueue_scripts', 'bw_ts_enqueue_script' );
