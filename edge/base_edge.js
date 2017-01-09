/*jslint */
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
                        '${Stage}': {
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
                            '${GRPH_PP_ojos_izquierda_45}',
                            'none',
                            'none'
                        ],
                        [
                            'eid1095',
                            'display',
                            0,
                            0,
                            'linear',
                            '${GRPH_PP_ojos_frente}',
                            'block',
                            'block'
                        ],
                        [
                            'eid1084',
                            'opacity',
                            0,
                            0,
                            'linear',
                            '${GRPH_PP_boca_sonrisa}',
                            '1',
                            '1'
                        ],
                        [
                            'eid4',
                            'display',
                            0,
                            0,
                            'easeInOutBack',
                            '${GRPH_PP_ojos_cerrados}',
                            'block',
                            'block'
                        ],
                        [
                            'eid41',
                            'display',
                            1000,
                            0,
                            'linear',
                            '${GRPH_PP_ojos_cerrados}',
                            'block',
                            'none'
                        ],
                        [
                            'eid40',
                            'display',
                            0,
                            0,
                            'easeInOutBack',
                            '${GRPH_PP_boca_E}',
                            'none',
                            'none'
                        ],['eid4000',"display",1005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4001',"display",1105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4002',"display",1205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4003',"display",1355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4004',"display",1505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4005',"display",1605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4006',"display",1705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4007',"display",2105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4008',"display",2555,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4009',"display",2605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4010',"display",2705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4011',"display",2755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4012',"display",2805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4013',"display",2855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4014',"display",2955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4015',"display",3005,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4016',"display",3055,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4017',"display",3155,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4018',"display",3305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4019',"display",3355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4020',"display",3455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4021',"display",3555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4022',"display",3705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4023',"display",3805,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4024',"display",3855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4025',"display",3955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4026',"display",4005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4027',"display",4105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4028',"display",4205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4029',"display",4255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4030',"display",4355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4031',"display",4505,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4032',"display",4605,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4033',"display",4755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4034',"display",4855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4035',"display",4955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4036',"display",5005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4037',"display",5105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4038',"display",5205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4039',"display",5255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4040',"display",5305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4041',"display",5405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4042',"display",5505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4043',"display",5605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4044',"display",5655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4045',"display",5705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4046',"display",5855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4047',"display",6205,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4048',"display",6305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4049',"display",6355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4050',"display",6405,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4051',"display",6505,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4052',"display",6655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4053',"display",6755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4054',"display",6905,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4055',"display",7055,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4056',"display",7155,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4057',"display",7305,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4058',"display",7355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4059',"display",7405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4060',"display",7505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4061',"display",7555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4062',"display",7705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4063',"display",7755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4064',"display",7855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4065',"display",7905,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4066',"display",7955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4067',"display",8055,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4068',"display",8155,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4069',"display",8255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4070',"display",8305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4071',"display",8405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4072',"display",8455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4073',"display",8555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4074',"display",8655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4075',"display",8705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4076',"display",8805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4077',"display",8855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4078',"display",8955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4079',"display",9105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4080',"display",9205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4081',"display",9255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4082',"display",9355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4083',"display",9405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4084',"display",9505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4085',"display",9605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4086',"display",9655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4087',"display",9755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4088',"display",9855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4089',"display",9955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4090',"display",10005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4091',"display",10055,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4092',"display",10155,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4093',"display",10205,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4094',"display",10305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4095',"display",10355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4096',"display",10455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4097',"display",10555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4098',"display",10605,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4099',"display",10705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4100',"display",10755,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4101',"display",10805,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4102',"display",10905,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4103',"display",10955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4104',"display",11005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4105',"display",11105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4106',"display",11205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4107',"display",11255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4108',"display",11305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4109',"display",11355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4110',"display",11455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4111',"display",11555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4112',"display",11655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4113',"display",11705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4114',"display",11805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4115',"display",11955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4116',"display",12005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4117',"display",12105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4118',"display",12255,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4119',"display",12355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4120',"display",12405,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4121',"display",12505,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4122',"display",12605,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4123',"display",12655,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4124',"display",12755,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4125',"display",12805,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4126',"display",12905,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4127',"display",12955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4128',"display",13055,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4129',"display",13105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4130',"display",13205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4131',"display",13255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4132',"display",13355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4133',"display",13405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4134',"display",13455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4135',"display",13555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4136',"display",13655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4137',"display",13705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4138',"display",13805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4139',"display",13855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4140',"display",13955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4141',"display",14055,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4142',"display",14155,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4143',"display",14305,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4144',"display",14405,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4145',"display",14555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4146',"display",14655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4147',"display",14755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4148',"display",14855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4149',"display",15105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4150',"display",15255,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4151',"display",16355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4152',"display",16505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4153',"display",16605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4154',"display",16705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4155',"display",16755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4156',"display",16855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4157',"display",17005,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4158',"display",17155,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4159',"display",17255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4160',"display",17355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4161',"display",17455,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4162',"display",17555,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4163',"display",17705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4164',"display",17805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4165',"display",17905,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4166',"display",17955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4167',"display",18105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4168',"display",18205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4169',"display",18255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4170',"display",18355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4171',"display",18405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4172',"display",18505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4173',"display",18555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4174',"display",18655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4175',"display",18705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4176',"display",18755,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4177',"display",18855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4178',"display",18955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4179',"display",19005,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4180',"display",19105,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4181',"display",19155,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4182',"display",19255,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4183',"display",19355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4184',"display",19455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4185',"display",19555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4186',"display",19705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4187',"display",19805,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4188',"display",19955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4189',"display",20105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4190',"display",20505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4191',"display",20605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4192',"display",20655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4193',"display",20705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4194',"display",20805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4195',"display",20955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4196',"display",21005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4197',"display",21055,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4198',"display",21105,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4199',"display",21205,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4200',"display",21305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4201',"display",21405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4202',"display",21455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4203',"display",21505,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4204',"display",21555,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4205',"display",21705,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4206',"display",21805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4207',"display",21955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4208',"display",22005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4209',"display",22105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4210',"display",22555,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4211',"display",22605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4212',"display",22705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4213',"display",22855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4214',"display",22955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4215',"display",23005,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4216',"display",23105,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4217',"display",23255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4218',"display",23355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4219',"display",23405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4220',"display",23505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4221',"display",23605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4222',"display",23705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4223',"display",23855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4224',"display",23955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4225',"display",24105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4226',"display",24205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4227',"display",24255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4228',"display",24355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4229',"display",24405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4230',"display",24505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4231',"display",24655,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4232',"display",24805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4233',"display",25505,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4234',"display",25605,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4235',"display",25655,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4236',"display",25705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4237',"display",25755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4238',"display",25805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4239',"display",25855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4240',"display",25905,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4241',"display",25955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4242',"display",26005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4243',"display",26105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4244',"display",26205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4245',"display",26255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4246',"display",26355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4247',"display",26405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4248',"display",26505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4249',"display",26605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4250',"display",26655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4251',"display",26755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4252',"display",26855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4253',"display",26955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4254',"display",27005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4255',"display",27155,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4256',"display",27255,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4257',"display",27355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4258',"display",27455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4259',"display",27555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4260',"display",27655,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4261',"display",27755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4262',"display",27805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4263',"display",27955,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4264',"display",28055,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4265',"display",28205,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4266',"display",28305,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4267',"display",28755,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4268',"display",28855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4269',"display",29005,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4270',"display",29105,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4271',"display",29155,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4272',"display",29255,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4273',"display",29355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4274',"display",29405,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4275',"display",29505,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4276',"display",29605,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4277',"display",29655,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4278',"display",29705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4279',"display",29805,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4280',"display",29955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4281',"display",30105,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4282',"display",30205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4283',"display",30355,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4284',"display",30505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4285',"display",30655,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4286',"display",30955,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4287',"display",31255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4288',"display",31355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4289',"display",31405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4290',"display",31505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4291',"display",31655,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4292',"display",31755,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4293',"display",31855,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4294',"display",31905,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4295',"display",32255,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4296',"display",32355,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4297',"display",32405,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4298',"display",32505,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4299',"display",32605,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4300',"display",32805,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4301',"display",32905,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4302',"display",33005,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4303',"display",33055,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4304',"display",33205,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4305',"display",33305,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4306',"display",33455,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4307',"display",33555,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4308',"display",33705,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4309',"display",33805,0,"linear","${GRPH_PP_boca_E}","none","block"],['eid4310',"display",33855,0,"linear","${GRPH_PP_boca_E}","block","none"],['eid4311',"display",33955,0,"linear","${GRPH_PP_boca_E}","none","block"]
                        ,[
                            'eid269',
                            'display',
                            0,
                            0,
                            'linear',
                            '${GRPH_PP_cuerpo_mano_arriba3}',
                            'block',
                            'block'
                        ],
                        [
                            'eid1082',
                            'display',
                            0,
                            0,
                            'linear',
                            '${GRPH_PP_boca_sonrisa}',
                            'block',
                            'block'
                        ],
                        [
                            'eid214',
                            'display',
                            0,
                            0,
                            'easeInOutBack',
                            '${GRPH_PP_cuerpo_mano_arriba1}',
                            'block',
                            'block'
                        ],
                        [
                            'eid875',
                            'display',
                            0,
                            0,
                            'linear',
                            '${GRPH_PP_cuerpo_mano_arriba2}',
                            'block',
                            'block'
                        ],
                            [ 'eid1329', 'trigger', 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load('base_edgeActions.js');
})('EDGE-943959449');