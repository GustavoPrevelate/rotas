'use strict'

const routes = {
    '/'              :   '/pages/home.html',
    '/vermelho'      :   '/pages/vermelho.html',
    '/azul'          :   '/pages/azul.html',
    '/verde'         :   '/pages/verde.html',
    '/amarelo'       :   '/pages/amarelo.html',
    '/laranja'       :   '/pages/laranja.html',
    '/roxo'          :   '/pages/roxo.html',
    '/lilas'         :   '/pages/lilas.html',
    '/marrom'        :   '/pages/marrom.html',
    '/jade'          :   '/pages/jade.html',
    '/cinza'         :   '/pages/cinza.html',
    '/azul-marinho'  :   '/pages/azul-marinho.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({},"", window.event.target.href)
    
    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    console.log(html)
}

window.route = route