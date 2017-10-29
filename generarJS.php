<?php 
    // File that creates Adobe Edge Json File
    // Inserts the string of the generated timings in the 'mouth' timeline object
    // Here we could change Stage options like width, height, file scripts, etc.
    
	$inicio = "/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    'use strict';
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'droid-sans, sans-serif': '<script src=\'http://use.edgefonts.net/droid-sans:n4,n7:all.js\'></script>',
            'didact-gothic, sans-serif': '<script src=\'http://use.edgefonts.net/didact-gothic:n4:all.js\'></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+'jquery-3.0.0.min.js'
        ],
        symbols = {
            'stage': {
                version: '6.0.0',
                minimumCompatibleVersion: '5.0.0',
                build: '6.0.0.400',
                scaleToFit: 'none',
                centerStage: 'none',
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'GRPH_PP_cuerpo_manos_abajo',
                            type: 'image',
                            rect: ['45px', '195px', '232px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)',im+'GRPH_PP_cuerpo_manos_abajo.png','0px','0px']
                        },
                        {
                            id: 'GRPH_PP_cara',
                            type: 'image',
                            rect: ['71px', '22px', '176px', '180px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ['rgba(0,0,0,0)',im+'GRPH_PP_cara.png','0px','0px']
                        },
                        {
                            id: 'GRPH_PP_ojos_frente',
                            display: 'block',
                            type: 'image',
                            rect: ['109px', '100px', '99px', '43px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ['rgba(0,0,0,0)',im+'GRPH_PP_ojos_frente.png','0px','0px']
                        },
                        {
                            id: 'GRPH_PP_ojos_cerrados',
                            display: 'block',
                            type: 'image',
                            rect: ['109px', '105px', '99px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)',im+'GRPH_PP_ojos_cerrados.png','0px','0px']
                        },
                        {
                            id: 'GRPH_PP_ojos_izquierda_45',
                            display: 'none',
                            type: 'image',
                            rect: ['409px', '220px', '99px', '43px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)',im+'GRPH_PP_ojos_izquierda_45.png','0px','0px']
                        },
                        {
                            id: 'GRPH_PP_boca_sonrisa',
                            display: 'block',
                            type: 'image',
                            rect: ['126px', '152px', '65px', '20px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ['rgba(0,0,0,0)',im+'GRPH_PP_boca_sonrisa.png','0px','0px']
                        },
                        {
                            id: 'GRPH_PP_boca_E',
                            display: 'none',
                            type: 'image',
                            rect: ['126px', '152px', '65px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)',im+'GRPH_PP_boca_E.png','0px','0px']
                        },
                        {
                            id: 'audio',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['300', '233', '320px', '45px', 'auto', 'auto'],
                            source: [aud+'audio.wav'],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '\${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '380px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(255,255,255,1)']
                        }
                    }
                },
                timeline: {
                    duration: 34925.714,
                    autoPlay: true,
                    data: [
                        [
                            'eid544',
                            'display',
                            0,
                            0,
                            'easeInOutBack',
                            '\${GRPH_PP_ojos_izquierda_45}',
                            'none',
                            'none'
                        ],
                        [
                            'eid1095',
                            'display',
                            0,
                            0,
                            'linear',
                            '\${GRPH_PP_ojos_frente}',
                            'block',
                            'block'
                        ],
                        [
                            'eid1084',
                            'opacity',
                            0,
                            0,
                            'linear',
                            '\${GRPH_PP_boca_sonrisa}',
                            '1',
                            '1'
                        ],
                        [
                            'eid4',
                            'display',
                            0,
                            0,
                            'easeInOutBack',
                            '\${GRPH_PP_ojos_cerrados}',
                            'block',
                            'block'
                        ],
                        [
                            'eid41',
                            'display',
                            1000,
                            0,
                            'linear',
                            '\${GRPH_PP_ojos_cerrados}',
                            'block',
                            'none'
                        ],
                        [
                            'eid40',
                            'display',
                            0,
                            0,
                            'easeInOutBack',
                            '\${GRPH_PP_boca_E}',
                            'none',
                            'none'
                        ],";

    $fin = "
                        ,[
                            'eid269',
                            'display',
                            0,
                            0,
                            'linear',
                            '\${GRPH_PP_cuerpo_mano_arriba3}',
                            'block',
                            'block'
                        ],
                        [
                            'eid1082',
                            'display',
                            0,
                            0,
                            'linear',
                            '\${GRPH_PP_boca_sonrisa}',
                            'block',
                            'block'
                        ],
                        [
                            'eid214',
                            'display',
                            0,
                            0,
                            'easeInOutBack',
                            '\${GRPH_PP_cuerpo_mano_arriba1}',
                            'block',
                            'block'
                        ],
                        [
                            'eid875',
                            'display',
                            0,
                            0,
                            'linear',
                            '\${GRPH_PP_cuerpo_mano_arriba2}',
                            'block',
                            'block'
                        ],
                            [ 'eid1329', 'trigger', 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '\${audio}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load('base_edgeActions.js');
})('EDGE-943959449');";


	$data = $_POST['data'];
	$cadena = implode(",", $data);
	

    $archivo = $inicio . $cadena . $fin;
    
    $f = fopen("edge/base_edge.js", "w") or die("No se puede abrir el archivo");
    fwrite($f, $archivo);
    fclose($f);
	echo 'base_edge json file created';
?>