class ListaService {

    getAll() {
        const listas = localStorage.getItem('listas')
        return listas ? JSON.parse(listas) : []
    }

    get(id) {
        const listas = this.getAll()
        return listas[id]
    }

    create(dados) {
        const listas = this.getAll()
        listas.push(dados)

        localStorage.setItem('listas', JSON.stringify(listas))
    }

    update(dados, id) {
        const listas = this.getAll()
        listas.splice(id, 1, dados)
        localStorage.setItem('listas', JSON.stringify(listas))
    }

    delete(id) {
        const listas = this.getAll()
        listas.splice(id, 1)
        localStorage.setItem('listas', JSON.stringify(listas))
    }
}

export default new ListaService()