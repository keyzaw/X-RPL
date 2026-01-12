<style>
    .section-1{
            background-color: white;
            margin-bottom: 20px;
            padding: 15px;
            margin-top: 0px;
            border-radius: 10px;
            color: #11035cff;
    }

    .section-2{
        background-color: white;
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 10px;
        margin-top: 0px;
        text-align: center;
        color: #11035cff;
    }

    
</style>

<div class="container mt-5">
    <h1 class="mb-4 section-2">Kontak</h1>

    <form action="#" method="post" class="max-auto section-1">
        

        
        <div class="mb-3">
            <label for="InputNama" class="form-label">Nama : </label>
            <input type="text" class="form-control" id="InputNama" required>
        </div>

        <br>
        <div class="mb-3">
            <label for="InputEmail" class="form-label">Email : </label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" required>
        </div>

        <br>
        <div class="mb-3">
            <label for="InputPesan" class="form-label">Pesan : </label>
            <textarea type="text" class="form-label" id="InputPesan" required></textarea>
        </div>

        <br>
        <button type="submit" class="btn btn-primary">Kirim</button>
    </form>
 </div>


<?php 
    
    if (isset($_POST['Tombol'])) {
        $nama = $_POST['Nama'];
        $nama = $_POST['Pesan'];
        $nama = $_POST['Email'];

        echo "Nama : $nama <br>";
        echo "Pesan : $pesan <br>";
        echo "Email : $email <br>";
    }

?>