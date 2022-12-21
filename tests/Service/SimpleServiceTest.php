<?php

namespace App\Tests\Service;

use App\Service\SimpleService;
use PHPUnit\Framework\TestCase;

class SimpleServiceTest extends TestCase
{
    public function testCoveredFunction(): void
    {
        $simpleService = new SimpleService();

        $this->assertEquals(
            "This is a covered function (getCoveredFunctionMessage). This is also a covered function (getSecondaryCoveredFunctionMessage).",
            $simpleService->getCoveredFunctionMessage()
        );
    }
}
