import mensagens from "./mensagens"

const ListaValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    genero: {
        required: mensagens.required
        
    },
    opcao: {
        required: mensagens.required
       
    }
    
}

export default ListaValidator