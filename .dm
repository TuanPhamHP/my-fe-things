// ~/handle_form.php
<h2>Form Data</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        
        if (empty($name) || empty($email)) {
            echo "Name and email are required.";
        } else {
            echo "Name: " . $name . "<br>";
            echo "Email: " . $email . "<br>";
        }
    } else {
        echo "Invalid request method.";
    }
?>