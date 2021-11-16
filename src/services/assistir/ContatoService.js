class ContatoService {

    getAll() {
        const contatos = localStorage.getItem('contatos')
        return contatos ? JSON.parse(contatos) : []
    }

    get(id) {
        const contatos = this.getAll()
        return contatos[id]
    }

    create(dados) {
        const contatos = this.getAll()
        contatos.push(dados)

        localStorage.setItem('contatos', JSON.stringify(contatos))
    }

    update(dados, id) {
        const contatos = this.getAll()
        contatos.splice(id, 1, dados)
        localStorage.setItem('contatos', JSON.stringify(contatos))
    }

    delete(id) {
        const contatos = this.getAll()
        contatos.splice(id, 1)
        localStorage.setItem('contatos', JSON.stringify(contatos))
    }
}

export default new ContatoService()