CREATE DATABASE IF NOT EXISTS `app_db`;

GRANT ALL ON `app_db`.* TO 'app_user' @'%';

SET
    session wait_timeout = 300;