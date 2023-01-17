
document.addEventListener("DOMContentLoaded",() =>)
{

const user = localStorage.getItem("user");
if (user) {
  //ToDo:obtener usuario
}else{
    window.location = "/login.html"
}
}