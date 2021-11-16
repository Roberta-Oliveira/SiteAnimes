class AnimesService {

    getAll() {
        const animes = localStorage.getItem('animes')
        return animes ? JSON.parse(animes) : []
    }

    get(id) {
        const animes = this.getAll()
        return animes[id]
    }

    create(dados) {
        const animes = this.getAll()
        animes.push(dados)

        localStorage.setItem('animes', JSON.stringify(animes))
    }

    update(dados, id) {
        const animes = this.getAll()
        animes.splice(id, 1, dados)
        localStorage.setItem('animes', JSON.stringify(animes))
    }

    delete(id) {
        const animes = this.getAll()
        animes.splice(id, 1)
        localStorage.setItem('animes', JSON.stringify(animes))
    }
}

export default new AnimesService()