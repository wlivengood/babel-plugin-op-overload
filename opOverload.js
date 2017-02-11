module.exports = function({types: t}) {
	return {
		visitor: {
			BinaryExpression(path) {
				let {operator, left, right} = path.node;

				path.replaceWith(
					t.expressionStatement(
						t.callExpression(
							t.identifier("_binaryOperators"),
							[t.stringLiteral(operator),left, right]
						)
					)
				);
			},

			UnaryExpression(path) {
				let {operator, argument} = path.node;
				path.replaceWith(
					t.expressionStatement(
						t.callExpression(
							t.identifier("_unaryOperators"),
							[t.stringLiteral(operator), argument]
						)
					)
				);
			}
		}
	}
}