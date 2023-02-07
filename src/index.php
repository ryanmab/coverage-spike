<?php

use App\Service\SimpleService;

require_once("../vendor/autoload.php");

$simpleService = new SimpleService();

echo nl2br($simpleService->getCoveredFunctionMessage());

// Use the uncovered argument here, meaning in practice, this path has not been tested
echo nl2br(($simpleService->getPartiallyCoveredFunctionMessage(true)));