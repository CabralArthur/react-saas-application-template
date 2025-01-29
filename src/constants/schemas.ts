import * as yup from 'yup';
export const translation = {
	mixed: {
		default: '${label} é inválido.',
		required: '${label} é um campo obrigatório.',
		oneOf: '${label} deve ser um dos seguintes valores: ${values}.',
		notOneOf: '${label} não pode ser um dos seguintes valores: ${values}.'
	},
	string: {
		length: '${label} deve ter exatamente ${length} caracteres.',
		min: '${label} deve ter pelo menos ${min} caracteres.',
		max: '${label} deve ter no máximo ${max} caracteres.',
		email: '${label} tem o formato de e-mail inválido.',
		url: '${label} deve ter um formato de URL válida.',
		trim: '${label} não deve conter espaços no início ou no fim.',
		lowercase: '${label} deve estar em maiúsculo.',
		uppercase: '${label} deve estar em minúsculo.'
	},
	number: {
		min: '${label} deve ser no mínimo ${min}.',
		max: '${label} deve ser no máximo ${max}.',
		lessThan: '${label} deve ser menor que ${less}.',
		moreThan: '${label} deve ser maior que ${more}.',
		notEqual: '${label} não pode ser igual à ${notEqual}.',
		positive: '${label} deve ser um número positivo.',
		negative: '${label} deve ser um número negativo.',
		integer: '${label} deve ser um número inteiro.'
	},
	date: {
		min: '${label} deve ser maior que a data ${min}.',
		max: '${label} deve ser menor que a data ${max}.'
	},
	array: {
		min: '${label} deve ter no mínimo ${min} itens.',
		max: '${label} deve ter no máximo ${max} itens.'
	}
};

export const NULLABLE_STRING = yup.string().nullable();
export const REQUIRED_STRING = NULLABLE_STRING.required();

export const LOGIN_SCHEMA = yup.object().shape({
	email: REQUIRED_STRING.min(1).label('User email'),
	password: REQUIRED_STRING.min(6).max(30).label('Password')
});

yup.setLocale(translation);