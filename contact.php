<?php
if(isset($_POST['Name']) && isset($_POST['Email']) && isset($_POST['Phone']) && isset($_POST['Message']) ){

	$EmailFrom = Trim(stripslashes($_POST['Email']));
	$EmailTo = "admin@email.com"; //Change With Admin's Email Address
	$Subject = "Your Subject"; //Change With Your Subject
	$Name = Trim(stripslashes($_POST['Name'])); 
	$Phone = Trim(stripslashes($_POST['Phone'])); 
	$Message = Trim(stripslashes($_POST['Message']));

	if(!empty($EmailFrom) && !empty($Name) && !empty($Phone) && !empty($Message)){
		// email body text
		$Body = "";
		$Body .= "Name: ";
		$Body .= $Name;
		$Body .= "\n";
		$Body .= "Phone: ";
		$Body .= $Phone;
		$Body .= "\n";
		$Body .= "Email: ";
		$Body .= $EmailFrom;
		$Body .= "\n";
		$Body .= "Message Message: ";
		$Body .= $Message;
		$Body .= "\n";

		if(filter_var($EmailFrom, FILTER_VALIDATE_EMAIL)){
			// send email 
			$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
            print "<meta http-equiv=\"refresh\" content=\"0;URL=thanks.html\">";
		}

	}

}
?>