<?php

require __DIR__.'/../vendor/autoload.php';
namespace App\Classes;

class UtilityHelper
{
	/**
	* Moves the uploaded file to the upload directory and assigns it a unique name
	* to avoid overwriting an existing uploaded file.
	*
	* @param string $directory directory to which the file is moved
	* @param UploadedFile $uploaded file uploaded file to move
	* @return string filename of moved file
	*/
	public static function moveUploadedFile($directory, UploadedFile $uploadedFile)
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
}