<?php

use JetBrains\PhpStorm\ArrayShape;
use Symfony\Component\HttpKernel\Exception\HttpException;

if (!function_exists('jsonError')) {
    /**
     * Return error status and message to the front
     *
     * @param $msg
     * @param bool|array $additional
     * @return array
     */
    #[ArrayShape(['withResponse' => "bool", 'status' => "int", 'msg' => ""])]
    function jsonError($msg, bool|array $additional = []): array
    {
        return $additional ?
            [
                'withResponse' => true,
                'status' => 0,
                'msg' => $msg,
                ...$additional
            ] :
            [
                'withResponse' => true,
                'status' => 0,
                'msg' => $msg
            ];
    }
}

if (!function_exists('jsonSuccess')) {
    /**
     * Return success status and message to the front
     *
     * @param $msg
     * @param bool|array $additional
     * @return array
     */
    #[ArrayShape(['status' => "int", 'msg' => "string"])]
    function jsonSuccess($msg, bool|array $additional = []): array
    {
        return $additional ?
            [
                'withResponse' => true,
                'status' => 1,
                'msg' => $msg,
                ...$additional
            ] :
            [
                'withResponse' => true,
                'status' => 1,
                'msg' => $msg,
            ];
    }
}

if (!function_exists('tryCatch')) {

    /**
     * Simplifies try catch block
     *
     * @param $callB
     * @param $successMsg
     * @param $errorMsg
     * @return array
     */
    function tryCatch($callB, $successMsg, $errorMsg): array
    {
        try {
            $callB();

            return jsonSuccess($successMsg);

        } catch (Exception $e) {

            if(get_class($e) === 'Symfony\Component\HttpKernel\Exception\HttpException'){
                throw new HttpException(422, $e->getMessage());
            }

            return jsonError($e->getMessage());
        }
    }
}

