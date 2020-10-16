let amigo = {nome:'José', 
            localizar(envelhecer=0) {
                this.idade += envelhecer
                return 'Portugal!'
            }
        }

amigo.sexo = 'M'
amigo.idade = 69

amigo.localizar(1)
console.log(amigo)
