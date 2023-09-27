<?php require_once("header.php"); ?>

<div class="container">
  <h2 class="mt-4">Create new List</h2>
    <div class="form-group">
      <label for="title">List's name:</label>
      <input type="text" class="form-control" id="title">
    </div>
    <div class="form-group">
      <label for="description">List's description:</label>
      <input type="text" class="form-control" id="description">
    </div>
    <button type="button" class="btn btn-success mt-1 mb-4" id="validate">Validate</button>
</div>
<div id="all-lists" style="margin: auto; max-width: 500px;">
</div>
<div id="edit-popup" class="none">
    <div id="edit-form">
    <div class="form-group">
      <label for="title">Modify name:</label>
      <input type="text" class="form-control" id="title-edit">
    </div>
    <div class="form-group">
      <label for="description">Modify description:</label>
      <input type="text" class="form-control" id="description-edit">
    </div>
    <div class="d-flex justify-content-center">
        <button id="validate-edit" class="btn btn-success m-1 mt-2">Validate</button>
        <button id="cancel-edit" class="btn btn-warning m-1 mt-2">Cancel</button>
    </div>
    </div>
</div>
<style>
    /* CSS for the hover effect */
    .card:hover {
        background-color: #b7b7b7;
    }

    #edit-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        transform: translate(-50%,-50%);
    }

    #edit-form {
        margin: auto;
        margin-top:30vh;
        max-width: 500px;
    }

    .none {
        display: none;
    }
</style>

<script src="js/list.js"></script>
<?php require_once("footer.php"); ?>