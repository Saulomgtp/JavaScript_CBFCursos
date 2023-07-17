class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = "https://loginv1.cfbcursos.repl.co/";
    //https://loginv1.cfbcursos.repl.co/?matricula=123&senha=321

    static login = (login, senha) => {
        this.endpoint += `?matricula=${login}&senha=${senha}`
        fetch(this.endpoint)
        .then(data => data.json())
        .then(data=> {
            if (data) {
                this.logado = true;
                this.matlogado = login;
                this.nomelogado = data.nome;
                this.acessologado = data.acesso;
                console.log(data)
            } else {
                console.log("Usuário não encontrado")
            }
        })
    }
}
export {Login};