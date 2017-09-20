<?php

require __DIR__.'/../vendor/autoload.php';

use \Slim\Http\Request;
use \Slim\Http\Response;
use \Slim\Http\UploadedFile;


$app = new \Slim\App([
	'settings' => [
		'displayErrorDetails' => true,
	]
]);

$container = $app->getContainer();
$container['upload_directory'] = '/tmp/';

$app->get('/', function($request, $response){
	return 'Home';
});


$app->post('/upload', function(Request $request, Response $response) {
    $directory = '/tmp/';// $this->get('upload_directory');

    $uploadedFiles = $request->getUploadedFiles();
//echo $response->write($uploadedFiles);
    // handle single input with single file upload
    $uploadedFile = $uploadedFiles['file'];
    if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
        $filename = moveUploadedFile($directory, $uploadedFile);
        $response->write('uploaded ' . $filename . '<br/>');
	$cmd = "octave-cli -qf /var/www/html/lipsync/octave/generarX.m";
	echo exec($cmd);
	$response->write('processed by octave');
    }
});

/**
 * Moves the uploaded file to the upload directory and assigns it a unique name
 * to avoid overwriting an existing uploaded file.
 *
 * @param string $directory directory to which the file is moved
 * @param UploadedFile $uploaded file uploaded file to move
 * @return string filename of moved file
 */
function moveUploadedFile($directory, UploadedFile $uploadedFile)
{
    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
    $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
    $filename = sprintf('%s.%0.8s', $basename, $extension);

    $filename = "/var/www/html/lipsync/wavs/voice.wav";
    if(file_exists($filename)) unlink($filename);
    $uploadedFile->moveTo($filename);
    chmod($filename, 0777);
    return $filename;
}

