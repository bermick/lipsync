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

	public static function prepareAudioForEdge($filename, $fileExtension)
	{
		$edgeMediaFile = __DIR__.'/../edge/media/audio.wav';
		
		if(file_exists($edgeMediaFile))
			unlink($edgeMediaFile);

		if($fileExtension == 'wav'){
			rename($filename, $edgeMediaFile);
			return true;
		}

		$wavRateFile = '44100';
		$wavFile = 'wavs/voice.wav';

		$convertToWavCmd = 'mpg123 --wav ' . $wavFile. ' --rate ' . $wavRateFile .' '. $filename;
		self::callExternalScript($convertToWavCmd);

		if(!chmod($wavFile, 0775))
			return false;
		if(!rename($wavFile, $edgeMediaFile))
			return false;

		return true;
	}

	public static function callExternalScript($command, $viewResult = false)
	{
    	$execResult = exec($command);
    	if($viewResult)
    		return $execResult;
	}
}
