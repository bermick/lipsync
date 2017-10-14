<?php

require __DIR__.'/../vendor/autoload.php';

use \Slim\Http\Request;
use \Slim\Http\Response;
use \Slim\Http\UploadedFile;
use \App\Classes\UtilityHelper;

$app = new \Slim\App([
	'settings' => [
		'displayErrorDetails' => true,
	]
]);

$container = $app->getContainer();

$app->post('/upload', function(Request $request, Response $response) {
    $directory = dirname(__DIR__) . 'wavs/';

    $uploadedFiles = $request->getUploadedFiles();
    // handle single input with single file upload
    $uploadedFile = $uploadedFiles['file'];
    if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
        $filename = UtilityHelper::moveUploadedFile($directory, $uploadedFile);
        $response->write('success');
    }
});



