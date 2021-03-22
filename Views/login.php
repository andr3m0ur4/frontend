<main class="container mt-3">
    <h1>Login</h1>

    <div class="alert alert-danger d-none" id="error">
        Usuários e/ou Senha inválidos!
    </div>

    <form name="login" method="POST">
        <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" name="password" id="password" class="form-control" required>
        </div>
        <button class="btn btn-outline-dark">Fazer Login</button>
    </form>
</main>