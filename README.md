# coveralls-spike
Spike into Coveralls using PHPUnit and Jest

`XDEBUG_MODE=coverage php -dzend_extension=xdebug.so ./vendor/phpunit/phpunit/phpunit --bootstrap ./vendor/autoload.php --configuration ./phpunit.xml.dist ./tests/Service --coverage-clover=./build/php/coverage.xml`