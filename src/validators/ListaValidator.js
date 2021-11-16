import mensagens from "./mensagens"

const ListaValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    genero: {
        required: mensagens.required,
        maxLength: {value: 1, message: mensagens.maxLength + ': 1'}
    }
    
}

export default ListaValidator