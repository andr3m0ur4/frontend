//const host = 'http://10.0.0.104:8080'
const host = 'http://localhost:8080'
const numberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const myStorage = localStorage

if (!myStorage.getItem('gwt')) {
    const jwt = myStorage.getItem('jwt')
}

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

    getTotal() {
        $.ajax({
            url: `${host}/stores/total`,
            success: data => {
                if (!data.error) {
                    $('#stores').html(data.total)
                }
            }
        })
    }
}

class Product {
    constructor() {
        this.jwt = isLogged()
    }

    getMyList() {
        $.ajax({
            url: `${host}/products/my-list`,
            headers: {
                jwt: this.jwt
            },
            success: data => {
                return data
            }
        }).then(data => data.data.forEach(product => {
            const tr = new TableRow(product)
            $('tbody').append(tr.fillTr())
        }))
    }

    getLatestProducts() {
        $.ajax({
            url: `${host}/products/latest-products`,
            success: data => {
                if (!data.error) {
                    return data
                }
            }
        }).then(products => products.data.forEach(product => {
            const tr = new TableRow(product)
            $('tbody').append(tr.fillTr2())
        }))
    }

    getProduct(id, callback) {
        $.ajax({
            url: `${host}/products/get/${id}`,
            headers: {
                jwt: this.jwt
            },
            success: data => {
                if (!data.error) {
                    callback(data.data)
                }
            }
        })
    }

    getTotal() {
        $.ajax({
            url: `${host}/products/total`,
            success: data => {
                if (!data.error) {
                    $('#products').html(data.total)
                }
            }
        })
    }

    delete(id) {
        $.ajax({
            url: `${host}/products/${id}`,
            type: 'DELETE',
            headers: {
                jwt: this.jwt
            },
            success: data => {
                if (!data.error) {
                    location.href = location.href
                }
            }
        })
    }
}

class Category {
    constructor() {
        this.categories
    }

    getCategories() {
        $.ajax({
            url: `${host}/categories`,
            dataType: 'json',
            success: data => {
                this.fillComboBox(data.categories)
            }
        })
    }

    fillComboBox(categories) {
        categories.forEach(category => {
            const option = $('<option>')
            $(option).attr('value', category.id)
            $(option).html(category.name)
            $('#category').append(option)
        })
    }
}

class Form {
    constructor(data = {}) {
        this.product = data
    }

    fillField() {
        $('#category').val(this.product.id_category).change()
        $('#name').val(this.product.name)
        $('#price').val(this.product.price)
        $('#availability').val(this.product.availability)
        $('#description').val(this.product.description)
    }
}

class TableRow {
    constructor(product) {
        this.id = product.id
        this.name = product.name
        this.description = product.description
        this.price = product.price
        this.availability = product.availability
        this.picture = product.picture
        this.id_category = product.id_category
        this.id_store = product.id_store
    }

    createImg(picture) {
        const img = $('<img>')
        if (!picture) {
            $(img).attr('src', '/assets/images/default.jpg')
        } else {
            $(img).attr('src', `/assets/images/anuncios/${picture}`)
        }
        $(img).attr({
            height: "75",
            alt: "Foto Anúncio"
        })
        return img
    }

    createLink() {
        const a  = $('<a>')
        $(a).attr('href', `/produto/${this.id}`)
        $(a).html(this.name)
        return a
    }

    createSpan() {
        const span = $('<span>')
        $(span).addClass('d-block')
        $(span).html(this.id_category)
        return span
    }

    edit() {
        const a = $('<a>')
        $(a).attr('href', `/anuncios/editar/${this.id}`)
        $(a).addClass('btn btn-primary mr-2')
        $(a).html('Editar')
        return a
    }

    delete() {
        const button = $('<button>')
        $(button).addClass('btn btn-danger')
        $(button).click(() => {
            $('.modal-footer button').eq(1).click(() => {
                const product = new Product()
                product.delete(this.id)
            })
            $('#product').html(this.name)
            $('#modal').modal('show')
        })
        $(button).html('Excluir')
        return button
    }

    fillTr() {
        const tr = $('<tr>')
        $(tr).append($('<td>').append(this.createImg(this.picture)))
        $(tr).append($('<td>').html(this.name))
        $(tr).append($('<td>').html(numberFormat.format(this.price)))
        $(tr).append($('<td>').append(this.edit(), this.delete()))
        return tr
    }

    fillTr2() {
        const tr = $('<tr>')
        $(tr).append($('<td>').append(this.createImg(this.picture)))
        $(tr).append($('<td>').append(this.createLink(), this.createSpan()))
        $(tr).append($('<td>').html(numberFormat.format(this.price)))
        return tr
    }
}

function isLogged() {
    if (!myStorage.getItem('gwt')) {
        const jwt = myStorage.getItem('jwt')
        return jwt
    }
}

function logout(e) {
    e.preventDefault()
    myStorage.removeItem('jwt')
    window.location.href = '/'
}

function parseJson(form) {
    const data = new FormData(form)
    const object = {}
    data.forEach((value, key) => object[key] = value)
    return JSON.stringify(object)
}

$(() => {

    const jwt = isLogged()
    const store = new Store(jwt)
    store.getStore()

    $('#logout').click(logout)

    switch (window.location.pathname) {
        case '/': 
            home()
            break;

        case '/cadastrar':
            register()
            break

        case '/login':
            login()
            break

        case '/anuncios':
            myProducts()

        case '/anuncios/adicionar':
            addProduct()
            break
    }

    if (window.location.pathname.slice(0, 16) == '/anuncios/editar') {
        editProduct()
    }
    if (window.location.pathname.slice(0, 8) == '/produto') {
        viewProduct()
    }
    
})

function home() {
    const product = new Product()
    product.getTotal()

    const store = new Store()
    store.getTotal()

    const category = new Category()
    category.getCategories();

    product.getLatestProducts()
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
        const json = parseJson(form)

        $.ajax({
            url: `${host}/stores/login`,
            type: 'POST',
            data: json,
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

function myProducts() {
    const product = new Product()
    product.getMyList()
}

function addProduct() {
    const category = new Category()
    category.getCategories()

    $('form').submit(e => {
        e.preventDefault()

        const form = e.target
        const json = parseJson(form)
        const jwt = isLogged()
        
        $.ajax({
            url: `${host}/products/new`,
            type: 'POST',
            data: json,
            headers: { jwt },
            success: data => {
                console.log(data);
                if (!data.error) {
                    $('#success').removeClass('d-none')
                    form.reset()
                } else {
                    $('#error').html(data.error)
                    $('#error').removeClass('d-none')
                }
            }
        })
    })
}

function viewProduct() {
    const id = location.pathname.split('/')[location.pathname.split('/').length - 1]

    const product = new Product()
    product.getProduct(id, data => {
        $('#name').html(data.name)
        $('#category').html(data.category)
        $('#description').html(data.description)
        $('#price').html(numberFormat.format(data.price))
        $('#company').html(data.fantasy_name)
        $('#phone').html(data.phone)
        $('#cell_phone').html(data.cell_phone)
    })
}

function editProduct() {
    const id = location.pathname.split('/')[location.pathname.split('/').length - 1]

    const category = new Category()
    category.getCategories()

    const product = new Product()
    product.getProduct(id, data => {
        const form = new Form(data)
        form.fillField()
    })

    $('form').submit(e => {
        e.preventDefault()

        const form = e.target
        const json = parseJson(form)
        const jwt = isLogged()

        $.ajax({
            url: `${host}/products/${id}`,
            type: 'PUT',
            headers: { jwt },
            data: json,
            success: data => {
                if (data.error) {
                    $('#success').removeClass('d-none')
                    $(window).scrollTop(0)
                }
            }
        })
    })
}