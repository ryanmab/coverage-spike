<?php

use App\Service\SimpleService;

require_once("../vendor/autoload.php");

$simpleService = new SimpleService();

echo nl2br($simpleService->getCoveredFunctionMessage());