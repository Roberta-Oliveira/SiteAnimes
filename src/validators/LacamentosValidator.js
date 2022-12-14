import mensagens from "./mensagens"

const LacamentosValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },

    genero: {
        required: mensagens.required,
        maxLength: {value: 14, message: mensagens.maxLength + ': 14'}
    },
}

export default LacamentosValidator