function [J grad] = nnCostFunction(nn_params, ...
                                   input_layer_size, ...
                                   hidden_layer_size, ...
                                   num_labels, ...
                                   X, y, lambda)

% Reshape nn_params back into the parameters Theta1 and Theta2, the weight matrices
% for our 2 layer neural network
Theta1 = reshape(nn_params(1:hidden_layer_size * (input_layer_size + 1)), ...
                 hidden_layer_size, (input_layer_size + 1));

Theta2 = reshape(nn_params((1 + (hidden_layer_size * (input_layer_size + 1))):end), ...
                 num_labels, (hidden_layer_size + 1));

% Setup some useful variables
m = size(X, 1);

J = 0;
Theta1_grad = zeros(size(Theta1));
Theta2_grad = zeros(size(Theta2));

	% m = 80
	% X son los training sets, que cada fila cpde a 1000 elementos
	% matriz de 80*1001
	% se le agrega la primer columna de 1's pq cpde a los términos bias
	a1 = [ones(m, 1) X]; % agrega un vector columna de unos al ppio de la matrix

	z2 = a1 * Theta1'; % dim(Theta1) = 50x1001. dim(z2) = 80x50
	a2 = sigmoid(z2); % dim(a2) debe ser 80x50. Obtiene sigmoide para cada elemento de z2

	     	% 80x1       800x25
	a2 = [ ones(size(a2, 1), 1) a2]; % dim(a2) = 80 x 51

		%80x51 %51x20
	z3 = a2 * Theta2'; % 80x20. 

	a3 = sigmoid(z3); % salida h(x). Salen 80 vectores de 20elementos, con las 'predicciones'
	

	%Y = zeros(m, num_labels); % regresa un arreglo de m (60) * num_labels (20) de zeros

	% esto va a cambiar para la sync
	%for i = 1:m
	%	Y(i, y(i)) = 1; % inicializa los vectores de salida dependiendo del valor del training set. Y(1) = [1 0 0 0 0 0 0 0 0 0]
	%end

	% y ya viene preparada como una matriz de 60*20

	J = 1/m * sum(sum(-1*y .* log(a3)-(1-y) .* log(1-a3))); % se verifica qué tan costoso fueron los a3 obtenidos

	regTerm = (sum(sum(Theta1(:,2:end).^2)) + sum(sum(Theta2(:,2:end).^2))) * (lambda/(2*m));

	J = J + regTerm;


% Part 2: Implement the backpropagation algorithm to compute the gradients
%         Theta1_grad and Theta2_grad. You should return the partial derivatives of
%         the cost function with respect to Theta1 and Theta2 in Theta1_grad and
%         Theta2_grad, respectively. After implementing Part 2, you can check
%         that your implementation is correct by running checkNNGradients
%
%         Note: The vector y passed into the function is a vector of labels
%               containing values from 1..K. You need to map this vector into a 
%               binary vector of 1's and 0's to be used with the neural network
%               cost function.
%
% Part 3: Implement regularization with the cost function and gradients.
%
%         Hint: You can implement this around the code for
%               backpropagation. That is, you can compute the gradients for
%               the regularization separately and then add them to Theta1_grad
%               and Theta2_grad from Part 2.
%


	for j = 1:m

		a1 = [1; X(j,:)'];

		z2 = Theta1 * a1;
		a2 = [1; sigmoid(z2)];

		z3 = Theta2 * a2;
		a3 = sigmoid(z3);
		%y2 = ([1:num_labels] == y(j))';

		y2 = y(j,:)';%( zeros(20,1) == y(j))';


		d3 = a3 - y2;
		d2 = (Theta2' * d3) .* [1; sigmoidGradient(z2)];
		%
		d2 = d2(2:end);

		%
		Theta1_grad = Theta1_grad + d2 * a1';
		Theta2_grad = Theta2_grad + d3 * a2';

	end

	Theta1_grad(:,1) = Theta1_grad(:,1)./m;
	Theta2_grad(:,1) = Theta2_grad(:,1)./m;

	%Theta1_grad = (1/m) * Theta1_grad + (lambda / m ) * [zeros(size(Theta1, 1), 1) Theta1(:,2:end)];
	Theta1_grad(:,2:end) = Theta1_grad(:,2:end)./m + ( (lambda/m) * Theta1(:,2:end) );
	Theta2_grad(:,2:end) = Theta2_grad(:,2:end)./m + ( (lambda/m) * Theta2(:,2:end) );

% -------------------------------------------------------------

% =========================================================================

% Unroll gradients
grad = [Theta1_grad(:) ; Theta2_grad(:)];


end
