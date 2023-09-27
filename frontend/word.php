<?php require_once("header.php"); ?>
    <div class="container-fluid mt-5 text-center d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
            <div class="">
                <div class="mx-auto">
                    <h2 id="string-one"></h2>
                    <h3 id="string-two-response" class="d-none">hello</h3>
                </div>
            </div>
            <div class="">
                <div class="mx-auto">
                    <button id="show-answer" value="true" class="btn btn-primary">Afficher la réponse</button>
                    <input id="string-two" type="text" class="form-control mt-2" placeholder="string_two">
                    <button id="submit-response" class="btn btn-success mt-2">Soumettre la réponse</button>
                </div>
            </div>
        </div>

        <button id="crud-button" class="btn btn-primary">CRUD</button>
        <div id="crud" class="mt-3 d-none">
            <h3>Création de nouveaux mots</h3>
            <div class="mb-3">
                <label for="string_one">String One</label>
                <input type="text" id="string_one" class="form-control">
            </div>
            <div class="mb-3">
                <label for="string_two">String Two</label>
                <input type="text" id="string_two" class="form-control">
            </div>
            <div class="mb-3">
                <label for="categorie">Catégorie</label>
                <select id="categorie" class="form-select">
                    <option value="categorie1">Catégorie 1</option>
                    <option value="categorie2">Catégorie 2</option>
                    <option value="categorie3">Catégorie 3</option>
                </select>
            </div>
            <button id="creerMot" class="btn btn-success">Créer Mot</button>
        </div>



    </div>



<script src="js/word.js"></script>
<?php require_once("footer.php"); ?>