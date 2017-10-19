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

$app->get('/test', function(Request $request, Response $response) {
	$response->write('prueba');
});

$app->post('/upload', function(Request $request, Response $response) {
    $directory = dirname(__DIR__) . '/wavs/';
    $uploadedFiles = $request->getUploadedFiles();
    // handle single input with single file upload
    $uploadedFile = $uploadedFiles['file'];
    if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
        list($filename, $extension) = UtilityHelper::moveUploadedFile($directory, $uploadedFile);
        $achieved = UtilityHelper::prepareAudioForEdge($filename, $extension);
        if($achieved)
            $response->write('success');
    }
});

$app->post('/generate', function(Request $request, Response $response) {
    $result = UtilityHelper::callExternalScript("octave-cli -qf /home/ubuntu/public_html/lipsync/octave/generarX.m", true);
    if($result == "1")
        $response->write('success');
    else
        $response->write('error');
});



