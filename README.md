# coveralls-spike
Spike into Coveralls using PHPUnit and Jest

`XDEBUG_MODE=coverage php -dzend_extension=xdebug.so ./vendor/phpunit/phpunit/phpunit --bootstrap ./vendor/autoload.php --configuration ./phpunit.xml.dist ./tests --coverage-clover=./build/php/coverage.xml`


## CodeClimate
1. `cc-test-reporter before-build
2. `cc-test-reporter format-coverage ./build/php/coverage.xml -t clover -o ./build/codeclimate.json`
3. `cc-test-reporter sum-coverage ./build/codeclimate.json ./build/codeclimate_2.json -o ./build/codeclimate_sum.json`
4. `cc-test-reporter upload-coverage -i ./build/codeclimate_sum.json -r REPORTER_ID`