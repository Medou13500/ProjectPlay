<?php
// En-têtes CORS pour autoriser l'accès depuis React
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Informations de connexion à la base de données
$host = 'localhost';
$dbname = 'ProjectFilm';
$username = 'root';
$password = '';

try {
    // Tentative de connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Réponse JSON en cas de succès
    echo json_encode(["status" => "success", "message" => "Connexion à la base de données réussie !"]);
} catch (PDOException $e) {
    // Réponse JSON en cas d'erreur
    echo json_encode(["status" => "error", "message" => "Erreur de connexion : " . $e->getMessage()]);
}
?>
