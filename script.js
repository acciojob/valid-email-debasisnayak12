function validEmail(str) {
  //your JS code here.
	//check if string is empty
	if(str.includes(' ') || !str){
		return false;
	} 
	const[localPart, domainPart] = str.split('@'); 
 
	// check the localPart
	if( !/[a-zA-Z0-9_-]/.test(localPart) ||
	   localPart.includes('..') ||
	   localPart.endsWith('.')) { 
		return false;
	   }    
	//check the domainPart
	if(!domainPart.includes('.') || domainPart.length < 3){
		return false;
	}
	return true;	
}

// Do not change the code below.
const str = prompt("Enter an email address."); 
alert(validEmail(str));
