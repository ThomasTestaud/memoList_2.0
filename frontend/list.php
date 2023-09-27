<?php require_once("header.php"); ?>

<div>
    <h1>Create List</h1>
    <label for="title">List's name:</label>
    <input type="text" id="title">
    <label for="description">List's name:</label>
    <input type="text" id="description">
    <button id="validate">Validate</button>
</div>
<div id="all-lists">

</div>
<style>
    /* CSS for the hover effect */
    .card:hover {
        background-color: #b7b7b7;
    }
</style>

<script src="js/list.js"></script>
<?php require_once("footer.php"); ?>