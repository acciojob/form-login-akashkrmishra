function getFormvalue() {
    //Write your code here
	const firstname = document.getElementByName('fname')[0].value;
	const lastname  = document.getElementByName('lname')[0].value;
	alert(`First name: ${firstName}\nLast name: ${lastName}`);
	
}
