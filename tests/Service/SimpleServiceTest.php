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

    public function testPartiallyCoveredFunction(): void
    {
        $simpleService = new SimpleService();

        // Only test the false argument, meaning theres a missing path in the method
        $this->assertEquals(
            "This is a covered function (getPartiallyCoveredFunctionMessage).",
            $simpleService->getPartiallyCoveredFunctionMessage(false)
        );
    }
}
