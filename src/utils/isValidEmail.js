// CR: better to use an external package or use input type=email.
// CR: this is not the RFC-822 email validation
function isEmail(emailAdress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
}
 export default isEmail;