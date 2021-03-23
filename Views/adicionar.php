<main class="container my-4">
    <h1>Meus Anúncios - Adicionar Anúncio</h1>

    <div class="alert alert-success d-none" id="success">
        Produto adicionado com sucesso!
    </div>
    <div class="alert alert-warning d-none" id="error"></div>

    <form method="POST" enctype="multipart/form-data">

        <div class="form-group">
            <label for="category">Categoria:</label>
            <select name="id_category" id="category" class="form-control"></select>
        </div>
        <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" class="form-control" required>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="price">Valor:</label>
                <input type="text" name="price" id="price" class="form-control" required>
            </div>
            <div class="form-group col-md-6">
                <label for="availability">Disponibilidade em Estoque:</label>
                <input type="number" name="availability" id="availability" class="form-control" required>
            </div>
        </div>
        <div class="form-group">
            <label for="description">Descrição:</label>
            <textarea name="description" id="description" class="form-control"></textarea>
        </div>
        
        <button class="btn btn-outline-dark">Adicionar</button>
    </form>
</main>