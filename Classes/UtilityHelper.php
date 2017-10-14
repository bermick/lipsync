<?php

namespace App\Classes;

require __DIR__.'/../vendor/autoload.php';

use \Slim\Http\UloadedFile as UploadedFile;

class UtilityHelper
{
	public static function moveUploadedFile($directory, \Slim\Http\UploadedFile $uploadedFile)
	{
	    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
	    $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
	    $filename = sprintf('%s.%0.8s', $basename, $extension);

	    $filename = $directory . "voice.wav";
	    if(file_exists($filename)) unlink($filename);
	    $uploadedFile->moveTo($filename);
	    chmod($filename, 0775);
	    return $filename;
	}

	public static function callOctaveScript()
	{
    	$cmd = "octave-cli -qf /var/www/html/lipsync/octave/generarX.m";
    	$execResult = exec($cmd);
    	return $execResult;
	}
}
