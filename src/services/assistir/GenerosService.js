class GenerosService {

    getAll() {
        const generos = localStorage.getItem('generos')
        return generos ? JSON.parse(generos) : []
    }

    get(id) {
        const generos = this.getAll()
        return generos[id]
    }

    create(dados) {
        const generos = this.getAll()
        generos.push(dados)

        localStorage.setItem('generos', JSON.stringify(generos))
    }

    update(dados, id) {
        const generos = this.getAll()
        generos.splice(id, 1, dados)
        localStorage.setItem('generos', JSON.stringify(generos))
    }

    delete(id) {
        const generos = this.getAll()
        generos.splice(id, 1)
        localStorage.setItem('generos', JSON.stringify(generos))
    }
}

export default new GenerosService()