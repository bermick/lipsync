<?php

namespace App\Classes;

require __DIR__.'/../vendor/autoload.php';

class UtilityHelper
{
	public static function moveUploadedFile($directory, \Slim\Http\UploadedFile $uploadedFile)
	{
	    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);

	    $filename = $directory . "voice." . $extension;
	    if(file_exists($filename)) unlink($filename);
	    $uploadedFile->moveTo($filename);
	    chmod($filename, 0775);
	    return [$filename, $extension];
	}

	public static function convertUploadedFile($filename, $fileExtension)
	{
		if($fileExtension == 'wav')
			return true;

		$wavRateFile = '44100';
		$wavFile = 'wavs/voice.wav';

		$convertToWavCmd = 'mpg123 --wav ' . $wavFile. ' --rate ' . $wavRateFile .' '. $filename;
		self::callExternalScript($convertToWavCmd);
		return chmod($wavFile, 0775);
	}

	public static function callExternalScript($command, $viewResult = false)
	{
    	$execResult = exec($command);
    	if($viewResult)
    		return $execResult;
	}
}
