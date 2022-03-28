import mensagens from "./mensagens"

const GeneroValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },

    genero: {
        required: mensagens.required,
        maxLength: {value: 14, message: mensagens.maxLength + ': 14'}
    },
    idioma: {
        required: mensagens.required,
        
    }
}

export default GeneroValidator