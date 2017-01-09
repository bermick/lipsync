% truncar los elementos de X

%nombre = 'X.csv';

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