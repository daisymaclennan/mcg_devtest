<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mcg' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3307' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fxS4T5WQAL4|5t+mA}uVBS#*q~!|yJ8|Uhc2oYp,NQMCf)!um67[|7<bHHhgM5z8' );
define( 'SECURE_AUTH_KEY',  'yLl8,;7gbI*jNYkEK)2} f`I.qlXH$|?VjW5=XHZw#}n|`Ar{p%^z@aVRXNRZKYx' );
define( 'LOGGED_IN_KEY',    'Mz[|0,2_ifG `fndUAxDuDkjv11[=qJbAs~P(j6.!:lu2=:oIaB[AiVTBflo9iB.' );
define( 'NONCE_KEY',        ')1$cM6[z+us5U<|8Dlh^R;9B<XB1#>cQRlq8(_hf;sffW}AeTcu|=eVA&CiOlC(2' );
define( 'AUTH_SALT',        'keV](`Q4g~K2}W1{pXljSyt1y0}$^GJ*{Hi?=rB[A~;Lz51_PH%hHWfet:+OFMAI' );
define( 'SECURE_AUTH_SALT', ';Y^Ps[N~3q3O{z(neudZ1=L_59L#ZHJJV:x{b;UeMU?7Wm[E$Wg3CnFNYEIi(A/&' );
define( 'LOGGED_IN_SALT',   '*(*&.}q6yEs5o.gSieS2()Ot4AH>E%9,eW]}x}ILPx(C~ ZM-~RT@^2e&V?Lt1Pa' );
define( 'NONCE_SALT',       'EJPtiSL?p}-T$v99_Q;UR<ei1TGz&i5mZ<8!t7y1olVP0kEZx2QWi=^Y^YQQ:@va' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
