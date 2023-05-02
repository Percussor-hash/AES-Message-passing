<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $text = $_POST['text'];

  $file = fopen('inputs2.txt', 'a');
  fwrite($file, $text . "\n");
  fclose($file);
}
?>
