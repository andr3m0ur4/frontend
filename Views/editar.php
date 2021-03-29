<main class="container my-4">
    <h1>Meus Anúncios - Editar Anúncio</h1>

    <div class="alert alert-success d-none" id="success">
        Produto editado com sucesso!
    </div>

    <form method="POST" enctype="multipart/form-data">

        <div class="form-group">
            <label for="category">Categoria:</label>
            <select name="id_category" id="category" class="form-control"></select>
        </div>
        <div class="form-group">
            <label for="name">Título:</label>
            <input type="text" name="name" id="name" class="form-control" required>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="price">Valor:</label>
                <input type="text" name="price" id="price" class="form-control" required>
            </div>
            <div class="form-group col-md-6">
                <label for="availability">Quantidade em estoque:</label>
                <input type="number" name="availability" id="availability" class="form-control" required>
            </div>
        </div>
        <div class="form-group">
            <label for="description">Descrição:</label>
            <textarea name="description" id="description" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <label for="fotos">Fotos do anúncio:</label>
            <input type="file" name="fotos[]" id="fotos" class="form-control" multiple>

            <div class="card mt-4">
                <div class="card-header">Fotos do Anúncio</div>
                <div class="card-body d-flex">
                    <div class="foto-item mr-2 text-center">
                        <img src="/assets/images/anuncios/" alt="Foto Anúncio" class="img-fluid img-thumbnail">
                        <a href="/anuncios/excluir-foto/" class="btn btn-danger mt-1">Excluir Imagem</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-outline-dark">Salvar</button>

    </form>
</main>