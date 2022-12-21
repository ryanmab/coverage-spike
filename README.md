# Coverage Solutions Spike
Spike into various coverage solutions which can be used with PHPUnit and Jest.

Currently, this repo has 2 integrations:
1. CodeClimate
2. SonarQube

## Compile Coverage
- `composer run php:test:coverage` (Backend tests)
- `npm run js:test:coverage` (Frontend tests)

## CodeClimate (Upload process)
1. `cc-test-reporter before-build`
2. `cc-test-reporter format-coverage ./build/php/coverage.xml -t clover -o ./build/codeclimate_backend.json`
3. `cc-test-reporter format-coverage ./build/js/clover.xml -t clover -o ./build/codeclimate_frontend.json`
4. `cc-test-reporter sum-coverage ./build/codeclimate_backend.json ./build/codeclimate_frontend.json -o ./build/aggregated_codeclimate_report.json`
5. `cc-test-reporter upload-coverage -i ./build/aggregated_codeclimate_report.json -r {REPORTER_ID}`