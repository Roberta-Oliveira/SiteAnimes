import mensagens from "./mensagens"

const AnimesValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    genero: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    temporadas: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    idioma: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
}

export default AnimesValidator