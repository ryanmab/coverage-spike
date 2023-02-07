<?php

namespace App\Service;

use App\Tests\Service\SimpleServiceTest;

class SimpleService
{
    public function getCoveredFunctionMessage(): string {
        $message = "This is a covered function (getCoveredFunctionMessage). ";

        $message .= $this->getSecondaryCoveredFunctionMessage();

        return trim($message);
    }

    private function getSecondaryCoveredFunctionMessage(): string {
        return "This is also a covered function (getSecondaryCoveredFunctionMessage). ";
    }

    public function getPartiallyCoveredFunctionMessage(bool $useUncoveredReturn = false): string {
        if ($useUncoveredReturn) {
            /**
             * This should remain uncovered, because in the Service test ({@see SimpleServiceTest::testPartiallyCoveredFunction()}),
             * we only test the $useUncoveredReturn = false path!
             */
            return "This is a uncovered function (getPartiallyCoveredFunctionMessage).";
        }

        return "This is a covered function (getPartiallyCoveredFunctionMessage).";
    }
}