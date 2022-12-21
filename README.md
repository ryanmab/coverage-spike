# coveralls-spike
Spike into Coveralls using PHPUnit and Jest

## Compile Coverage
- `composer run php:test:coverage` (Backend tests)
- `npm run js:test:coverage` (Frontend tests)

## CodeClimate
1. `cc-test-reporter before-build`
2. `cc-test-reporter format-coverage ./build/php/coverage.xml -t clover -o ./build/codeclimate.json`
3. `cc-test-reporter sum-coverage {LIST_OF_FORMATTED_FILES} -o ./build/codeclimate_sum.json`
4. `cc-test-reporter upload-coverage -i ./build/codeclimate_sum.json -r {REPORTER_ID}`