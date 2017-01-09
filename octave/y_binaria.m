
y_unos = csvread([ruta 'y.csv']);

m = size(y_unos, 1);

Y = zeros(m, 20);

for i=1:m
  for j=1:20
    if( y_unos(i,j) > 0)
        Y(i,j) = 1;
    endif
  endfor
endfor

csvwrite([ruta 'ybin.csv'], Y);