#! /usr/bin/octave-cli -qf
	pkg load signal;
	pkg load geometry;

	archivo = '/home/ubuntu/public_html/lipsync/wavs/voice.wav';

	% lee el wav y pone en y 
	[x, h, nbits] = wavread(archivo);
	fs = h;
	m = floor(size(x)(1) / h);

	% dejamos solo uno de los dos canales:
	x = (x(:, 1));

	coef = ones(1, h)/h;

	ruta = '/home/ubuntu/public_html/lipsync/csv/';

	%envoltura = filter(coef, 1, abs(hilbert(y)));
	%salidaNormalizada = normalizeVector(envoltura);
	%salidaNormalizada = salidaNormalizada(1:44:end);

	%csvwrite('X.csv', salidaNormalizada);

	%descomentar las siguientes líneas para graficar la envoltura del audio
	%envoltura = filter(coef, 1, abs(hilbert(x)));
	%figure;plot(envoltura)

	X = zeros(m,1000);

	paso = idivide (int16 (h), int16 (1000), 'fix');

	for j = 1:m
		% obtener los j-ésimos 44.1k (1 segundo) elementos
		y = x( (fs*(j-1) + 1 ): fs*j );

		%filtramos y obtenemos la envoltura hilbert
		envoltura = filter(coef, 1, abs(hilbert(y)));

		%normalizamos la envoltura obtenida
		salidaNormalizada = envoltura;%normalizeVector(envoltura); creo que no es necesario normalizarlo
		size(salidaNormalizada);

		% salidaNormalizada es de 44.1k elementos, muestrear cada 44 elementos para obtener un vector de 1000 elementos
		salidaNormalizada2 = salidaNormalizada(1:paso:end );


		%nombre del archivo en el que se guardará la salida
		%nombre = strcat('X',num2str(j), '.csv');

		%escribimos en un archivo con su número al ginal
		%csvwrite(nombre, salidaNormalizada2);

		% si se pasa de los 1000 elementos, quitarle los necesarios
		if size(salidaNormalizada2)(1) > 1000
			dif = size(salidaNormalizada2) - 1000;
			salidaNormalizada2 = salidaNormalizada2(1:end-dif);
		end

		X(j, 1:1000) = salidaNormalizada2;
	end



	csvwrite([ruta 'X.csv'], X);

	%truncar X
	X = csvread([ruta 'X.csv']);
	m = floor(size(X)(1));

		for i = 1:m
			for j = 1:1000
				% X(i,j) = chop(X(i,j), 4, 10);
				if(X(i, j) < 0.0055 )
					X(i,j) = 0;
				end
				X(i,j) = str2num(sprintf('%5.4f', X(i, j)));
			end
		end

	csvwrite([ruta 'X_truncada.csv'], X);

	fprintf('1');
