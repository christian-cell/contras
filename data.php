<?php
  

  if(isset($_POST['iniciar_sesion'])){
      $user = $_POST['Username'];
      $pass = $_POST['password'];
      $pass = $_POST['dblcheck'];
      echo$user."\n";
      echo$pass;
  }
  
?>