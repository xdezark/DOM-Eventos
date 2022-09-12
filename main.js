const ID= document.getElementById("#id"),
      tipo= document.getElementById("#tipo"),
      color= document.getElementById("#color"),
      talle= document.getElementById("#talle"),
      precio= document.getElementById("#precio"),
      img= document.getElementById("#img"),
      cargar= document.getElementById("#btncargar"),
      ul = document.getElementById("#ul");
 

const radios = querySelectorAll("input[type='radio']");

const prendas = [{
  id: 1, tipo: "BUZO", talle: "M", color: "ROSA Y NEGRO", precio: 2100, img: "buzo1.jpg",
},
{
  id: 2, tipo: "BUZO", talle: "S", color: "BLANCO Y VIOLETA", precio: 2100, img: "buzo2.jpg",
},
]

for (const prenda of prendas) {
  let li = document.createElement('li')

  li.innerHTML=`
  <h3>${prenda.id}</h3>
  <h3>${prenda.tipo}</h3>
  <h3>${prenda.color}</h3>
  <h3>${prenda.precio}/h3>
  <img src="${prenda.img}" alt="">`

  ul.append(li)
}

function crearPrenda (id, tipo, color, talle, precio, img){
  this.ID = ID;
  this.tipo = tipo;
  this.color = color;
  this.talle = talle;
  this.precio = parseFloat(precio);
  this.precio = precio;
  this.img = img;
}

