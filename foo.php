<?php
$to = 'animus1385@gmail.com';
$form = "From: Заявка с Сайта <Blanchard>\n\r";
$name = $_POST['name'];
$tel = $_POST['tel'];
$page = 'Страница контактов';

$message = '
<html>
<body>
<center>	
<table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
 <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Информация</b></td></tr>
 <tr>
  <td><b>Кто?</b></td>
  <td>'.$name.'</td>
 </tr>
 <tr>
  <td><b>Телефон</b></td>
  <td>'.$tel.'</td>
 </tr>
</table>
</center>	
</body>
</html>
';
$headers  = "Content-type: text/html; charset=utf-8\r\n";
$headers .= $from;

// if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
//     mail($to, $name, $tel, $headers);
// }else {
//     echo 1;
// };

$domain = substr(strrchr($tel, "+7"), 1);
$res = getmxrr($domain, $mx_records, $mx_weight);
if(false ==$res || 0 ==count($mx_records) || (1==count($records) && ($mx_records[0]== null || $mx_records[0] == "0.0.0.0"))) {
echo 1;
}
else {
    mail($to, $name, $tel, $headers);
}