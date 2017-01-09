
Theta1 = csvread('Theta1.csv'); % 50 x 1001
Theta2 = csvread('Theta2.csv');

X = csvread('prueba_truncada.csv');
m = size(X, 1);
%total = m * 20;

p = zeros(m, 1); %vetor columna de m renglones

h1 = sigmoid([ones(m, 1) X] * Theta1'); %agregar vectores columna de unos
h2 = sigmoid([ones(m, 1) h1] * Theta2');


csvwrite('predecido1.csv', h2);
p = h2 > 0.3;
csvwrite('predecido2.csv', p);

%y = csvread('ybin.csv');
%fprintf('\nExactitud: %f \n', (sum(sum((p == y))))/total );
