class LancamentosService {

    getAll() {
        const lancamentos = localStorage.getItem('lancamentos')
        return lancamentos ? JSON.parse(lancamentos) : []
    }

    get(id) {
        const lancamentos = this.getAll()
        return lancamentos[id]
    }

    create(dados) {
        const lancamentos = this.getAll()
        lancamentos.push(dados)

        localStorage.setItem('lancamentos', JSON.stringify(lancamentos))
    }

    update(dados, id) {
        const lancamentos = this.getAll()
        lancamentos.splice(id, 1, dados)
        localStorage.setItem('lancamentos', JSON.stringify(lancamentos))
    }

    delete(id) {
        const lancamentos = this.getAll()
        lancamentos.splice(id, 1)
        localStorage.setItem('lancamentos', JSON.stringify(lancamentos))
    }
}

export default new LancamentosService()