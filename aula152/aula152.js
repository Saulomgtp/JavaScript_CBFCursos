

const configdgv = {
    endpoint: "produtos.json",
}

const dgvDados = document.querySelector("#dgvDados")

const dgv = (configdgv) => {
    dgvDados.innerHTML = ""
    fetch(configdgv.endpoint)
        .then(res => res.json())
        .then(res => {
            res.map((e) => {
                const novoElemento = document.createElement("div")
                novoElemento.setAttribute("class", "dgvLinha")
                const c1 = document.createElement("div")
                c1.setAttribute("class", "c1")
                c1.innerHTML = e.id
                const c2 = document.createElement("div")
                c2.setAttribute("class", "c2")
                c2.innerHTML = e.produto
                const c3 = document.createElement("div")
                c3.setAttribute("class", "c3")
                c3.innerHTML = e.marca
                const c4 = document.createElement("div")
                c4.setAttribute("class", "c4")
                c4.innerHTML = e.modelo
                
                const imgDel = document.createElement("img")
                imgDel.setAttribute("class", "dgvIcon")
                imgDel.setAttribute("src", "lixeira.svg")

                const imgEdit = document.createElement("img")
                imgEdit.setAttribute("class", "dgvIcon")
                imgEdit.setAttribute("src", "edit.svg")

                const imgEye = document.createElement("img")
                imgEye.setAttribute("class", "dgvIcon")
                imgEye.setAttribute("src", "eye.svg")


                const c5 = document.createElement("div")
                c5.setAttribute("class", "c5")
                c5.appendChild(imgDel)
                c5.appendChild(imgEdit)
                c5.appendChild(imgEye)
                

                novoElemento.appendChild(c1)
                novoElemento.appendChild(c2)
                novoElemento.appendChild(c3)
                novoElemento.appendChild(c4)
                novoElemento.appendChild(c5)
                dgvDados.appendChild(novoElemento)
                



            })
            console.log(res)
        })
}
dgv(configdgv)



