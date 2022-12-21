<?php

namespace App\Service;

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

    public function getUncoveredFunctionMessage(): string {
        return "This is an uncovered function (getUncoveredFunctionMessage). ";
    }
}