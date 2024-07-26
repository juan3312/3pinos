let logo, menu;
let hasChanged = false;
let imagenes = [];
imagenes[0] = "https://res.cloudinary.com/ddm3kjlbm/image/upload/v1721974004/3pinos/Logos/azul.png";
imagenes[1] = "https://res.cloudinary.com/ddm3kjlbm/image/upload/v1721974004/3pinos/Logos/blanco.png";
window.onload = ()=>{
  logo = document.getElementById("logo");
  menu = document.querySelector(".menu");
  document.addEventListener('scroll',cambiarImagen);
}

function cambiarImagen(event){
// Obtener la altura total del documento y la posición de scroll actual
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            
            // Calcular el punto medio de la página
            const halfwayPoint = documentHeight / 2;
            
          //alert(scrollTop + " " + windowHeight+ " " + halfwayPoint);  
            // Verificar si el scroll ha llegado a la mitad de la página
            //if (scrollTop + windowHeight >= halfwayPoint)
            if(scrollTop >50)
            {
              logo.src = imagenes[0];
            } 
            else 
            {
              logo.src = imagenes[1];
            }
}