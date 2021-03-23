<main class="container my-4">
    <h1>Cadastre-se</h1>

    <div class="alert alert-warning d-none" id="error"></div>

    <div class="alert alert-success d-none" id="success">
        <strong>Parabéns!</strong> Cadastrado com sucesso.
        <a href="/login" class="alert-link">Faça o login agora</a>
    </div>

    <div class="alert alert-warning d-none" id="error_email">
        E-mail já existente!
        <a href="/login" class="alert-link">Faça o login agora</a>
    </div>

    <form name="register" method="POST">
        <div class="form-group">
            <label for="fantasy_name">Nome Fantasia:</label>
            <input type="text" name="fantasy_name" id="fantasy_name" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="cnpj">CNPJ:</label>
            <input type="text" name="cnpj" id="cnpj" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="company_name">Nome da Empresa:</label>
            <input type="text" name="company_name" id="company_name" class="form-control" required>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="phone">Telefone:</label>
                <input type="tel" name="phone" id="phone" class="form-control">
            </div>
            <div class="form-group col-md-4">
                <label for="cell_phone">Celular:</label>
                <input type="text" name="cell_phone" id="cell_phone" class="form-control" required>
            </div>
            <div class="form-group col-md-4">
                <label for="responsible_contact">Nome do Responsável para Contato:</label>
                <input type="text" name="responsible_contact" id="responsible_contact" class="form-control" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-10">
                <label for="public_place">Logradouro:</label>
                <input type="text" name="public_place" id="public_place" class="form-control" required>
            </div>
            <div class="form-group col-md-2">
                <label for="number">Número:</label>
                <input type="text" name="number" id="number" class="form-control" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="neighborhood">Bairro:</label>
                <input type="text" name="neighborhood" id="neighborhood" class="form-control" required>
            </div>
            <div class="form-group col-md-6">
                <label for="complement">Complemento:</label>
                <input type="text" name="complement" id="complement" class="form-control">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="city">Cidade:</label>
                <input type="text" name="city" id="city" class="form-control" required>
            </div>
            <div class="form-group col-md-2">
                <label for="uf">Estado:</label>
                <input type="text" name="uf" id="uf" class="form-control" required>
            </div>
            <div class="form-group col-md-4">
                <label for="zip_code">CEP:</label>
                <input type="text" name="zip_code" id="zip_code" class="form-control" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-7">
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" class="form-control" required>
            </div>
            <div class="form-group col-md-5">
                <label for="password">Senha:</label>
                <input type="password" name="password" id="password" class="form-control" required>
            </div>
        </div>
        <button class="btn btn-outline-dark">Cadastrar</button>
    </form>
</main>