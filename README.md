# Coverage Solutions Spike
Spike into Coveralls using PHPUnit and Jest

## Compile Coverage
- `composer run php:test:coverage` (Backend tests)
- `npm run js:test:coverage` (Frontend tests)

## CodeClimate
1. `cc-test-reporter before-build`
2. `cc-test-reporter format-coverage ./build/php/coverage.xml -t clover -o ./build/codeclimate_backend.json`
3. `cc-test-reporter format-coverage ./build/js/clover.xml -t clover -o ./build/codeclimate_frontend.json`
4. `cc-test-reporter sum-coverage ./build/codeclimate_backend.json ./build/codeclimate_frontend.json -o ./build/aggregated_codeclimate_report.json`
5. `cc-test-reporter upload-coverage -i ./build/aggregated_codeclimate_report.json -r {REPORTER_ID}`