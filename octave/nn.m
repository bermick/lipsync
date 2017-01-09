%% Machine Learning Lip Sync
%% Based on ex4 exercise of Machine Learning Course by Stanford University in coursera
%% Implemented by Bernardo Mtz.
%%
%% This files trains the NN to generate the Theta params for later use in Feedforward

% Parámetros para NN de lipsync
% input_layer_size = 1000; % La entrada es de 1seg de audio a 44khz, por lo tanto para tomar mil muestras la Fm = 440
% hidden_layer_size = 50;  % 
% num_labels = 20;         % 20 elementos de salida, los espacios 'en blanco' irán marcados en 0 o en -1

% 1. Leer wavs en un arreglo de entrada de mx1000
% 2. Escribir un .mat que tenga los tiempos de salida en un arreglo de mx20 del training set. 1segundo/20 = 0.05seg =50miliseg
%    Para esto se necesita tener arreglos de zeros(20) y escribir el tiempo en el elemento más cercano. Por ejemplo si el tiempo fue 78mseg-129mseg, entonces sería:
%    [50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000]
%    [78  0  199  0  270   0   0   0 459  0   0   0   0   0   0   0   0   0   0    0 ]
%    [ 1  0   1   0   1   0    0   0   1  0   0   0   0   0   0   0   0   0   0    0 ]

% Podrían ser tiempos en cada casilla [ 0 30 0 90] o bien simplemente indicadores de cuándo hay un movimiento [ 0 1 0 1]

%% Clean all
clear ; close all; clc

%% Setup the parameters for the network
input_layer_size  = 1000; % se obtuvieron 1k muestras por segundo, después de normalizarse la envoltura 
hidden_layer_size = 50;   % 50 capas intermedias
num_labels = 20;          % vectores de salida de 20 elementos (los 20 posibles momentos en los que se abre/cierra la boca)

%% =========== Part 1: Load Data =============
fprintf('Cargando datos ...\n')

X = load('X_truncada.csv');
y = load('ybin.csv');

m = size(X, 1); % número de muestras.

fprintf('\nDatos cargados. Presiona enter para continuar\n')
pause;

% Unroll parameters 
initial_Theta1 = randInitializeWeights(input_layer_size, hidden_layer_size);
initial_Theta2 = randInitializeWeights(hidden_layer_size, num_labels);

% Unroll parameters
% vector columna? de ambas matrices 'unrolled'
nn_params = [initial_Theta1(:) ; initial_Theta2(:)];

fprintf('\nInicializando parámetros de la NN ...\n')

initial_Theta1 = randInitializeWeights(input_layer_size, hidden_layer_size);
initial_Theta2 = randInitializeWeights(hidden_layer_size, num_labels);

% Unroll parameters
% vector columna? de ambas matrices 'unrolled'
initial_nn_params = [initial_Theta1(:) ; initial_Theta2(:)];


fprintf('\nTraining NN... \n')


options = optimset('MaxIter', 600);

%probar diferentes lambdas
lambda = 0;

% "short hand" para la función de costo a minimizar
costFunction = @(p) nnCostFunction(p, ...
                                   input_layer_size, ...
                                   hidden_layer_size, ...
                                   num_labels, X, y, lambda);

% Now, costFunction is a function that takes in only one argument (the neural network parameters)
[nn_params, cost] = fmincg(costFunction, initial_nn_params, options);

% Obtain Theta1 and Theta2 back from nn_params
Theta1 = reshape(nn_params(1:hidden_layer_size * (input_layer_size + 1)), ...
                 hidden_layer_size, (input_layer_size + 1));

Theta2 = reshape(nn_params((1 + (hidden_layer_size * (input_layer_size + 1))):end), ...
                 num_labels, (hidden_layer_size + 1));


% Guardar los parámetros
csvwrite('Theta1.csv', Theta1);
csvwrite('Theta2.csv', Theta2);

fprintf('\nTerminado... \n')
pause;


%% predicción de prueba e intentar medir la precisión. Ahora está mal implementado el cálculo
pred = predict(Theta1, Theta2, X);

total = m * 20;

fprintf('\nExactitud: %f \n', (sum(sum((pred == y))))/total );


