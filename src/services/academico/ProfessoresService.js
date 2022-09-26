class ProfessoresService {

    getAll() {
        const professores = localStorage.getItem('professores')
        return professores ? JSON.parse(professores) : []
    }

    get(id) {
        const professores = this.getAll()
        return professores[id]
    }

    create(dados) {
        const professores = this.getAll()
        professores.push(dados)

        localStorage.setItem('professores', JSON.stringify(professores))
    }

    update(dados, id) {
        const professores = this.getAll()
        professores.splice(id, 1, dados)
        localStorage.setItem('professores', JSON.stringify(professores))
    }

    delete(id) {
        const professores = this.getAll()
        professores.splice(id, 1)
        localStorage.setItem('professores', JSON.stringify(professores))
    }
}

export default new ProfessoresService()