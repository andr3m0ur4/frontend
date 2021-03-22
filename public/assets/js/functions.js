const host = 'http://10.0.0.104:8080'
const myStorage = localStorage

class Store {
    constructor(jwt) {
        this.jwt = jwt
    }

    getStore() {
        $.ajax({
            url: `${host}/stores/get-store`,
            headers: {
                jwt: this.jwt
            },
            success: data => {
                if (data.logged) {
                    $('nav li').eq(0).html(data.store.fantasy_name)
                    $('nav li').eq(0).removeClass('d-none')
                    $('nav li').eq(1).removeClass('d-none')
                    $('nav li').eq(2).removeClass('d-none')
                    $('nav li').eq(3).addClass('d-none')
                    $('nav li').eq(4).addClass('d-none')
                }
            }
        })
    }
}

function logged() {
    if (!myStorage.getItem('gwt')) {
        const jwt = myStorage.getItem('jwt')
        const store = new Store(jwt)
        store.getStore()
    }
}

$(() => {

    logged()

    if (window.location.pathname == '/') {
        home()
    }
    if (window.location.pathname == '/cadastrar') {
        register()
    }
    if (window.location.pathname == '/login') {
        login()
    }
    if (window.location.pathname == '/login') {

        if ($('#sucesso').length > 0) {
            window.location.href = '/'
        }
        
    }

})

function home() {

}

function register() {
    $('form[name=register]').submit(e => {
        e.preventDefault()
        
        const form = e.target
        const data = new FormData(form)
        const store = {}
        const address = {}
        data.forEach((value, key) => {
            if (
                key == 'public_place' || key == 'number' || key == 'neighborhood' ||
                key == 'complement' || key == 'city' || key == 'uf' || key == 'zip_code'
            ) { 
                address[key] = value
            } else {
                store[key] = value
            }
        })
        const obj = {
            store,
            address
        }

        $.ajax({
            url: `${host}/stores/register`,
            type: 'POST',
            data: obj,
            success: data => {
                if (!data.error) {
                    myStorage.setItem('jwt', data.jwt)
                    $('#success').removeClass('d-none')
                    form.reset()
                } else if (data.error_email) {
                    $('#error_email').removeClass('d-none')
                } else {
                    $('#error_email').html(data.error)
                    $('#error_email').removeClass('d-none')
                }
            }
        })
    })
}

function login() {
    $('form[name="login"]').submit(e => {
        e.preventDefault()

        const form = e.target
        const data = new FormData(form)

        $.ajax({
            url: `${host}/stores/login`,
            type: 'POST',
            data,
            processData: false,
            contentType: false,
            success: data => {
                if (!data.error) {
                    myStorage.setItem('jwt', data.jwt)
                    window.location.href = '/'
                } else {
                    $('#error').removeClass('d-none')
                }
            }
        })
    })
}