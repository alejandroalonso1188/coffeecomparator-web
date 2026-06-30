/* ============================================================
   COFFEE COMPARATOR — BASE DE DATOS DE CAFETERAS
   ------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA:
     · cambiar un precio        -> campo "precio"
     · cambiar el enlace Amazon -> campo "enlace" (TU enlace de afiliado)
     · añadir una cafetera      -> copia un bloque { ... } y rellénalo

   Los 3 modelos de abajo son EJEMPLOS para que veas el comparador
   funcionando. Reemplázalos por los datos reales que tú reúnas.
   (Claude rellena pros/contras, "ideal para" y resúmenes a partir
    de tus specs + reseñas — tú solo aportas los datos en bruto.)

   Direcciones de "quién gana" en el comparador:
     presion, bebidas, perfiles, depositoAgua, depositoGrano -> más alto gana
     precio -> más bajo gana
     premolido, grupoExtraible, conectividad -> "sí" gana
   ============================================================ */

window.CAFETERAS = [
  {
    slug:"delonghi-magnifica-s",
    marca:"De'Longhi",
    nombre:"Magnifica S ECAM22.110.SB",
    destacado:"Mejor calidad-precio",
    precio:306,
    precioAntes:399,
    enlace:"https://www.amazon.es/dp/B00OL0E9SU?tag=TU-TAG-21", // <-- TU enlace de afiliado
    imagen:"/img/cafeteras/delonghi-magnifica-s.jpg",          // sube la foto a /img/cafeteras/
    rating:4.6,
    numResenas:18450,
    picoPrecio:"Gama media",
    idealPara:"quien busca su primera superautomática fiable sin gastar de más",
    specs:{
      presion:15, molinillo:"Cónico (13 niveles)", leche:"Espumador manual",
      bebidas:5, pantalla:"Botones", perfiles:1,
      depositoAgua:1.8, depositoGrano:250, premolido:true, grupoExtraible:true,
      conectividad:false, medidas:"35 × 24 × 43 cm", peso:"9 kg", potencia:1450, color:"Plata"
    },
    pros:["Muy fiable y fácil de usar","Grupo de infusión extraíble (limpieza sencilla)","Relación calidad-precio difícil de batir"],
    contras:["Espumador de leche manual","Sin pantalla ni perfiles de usuario"],
    resenas:[
      {estrellas:5,quien:"Cliente verificado",texto:"[Pega aquí una reseña real de Amazon, tal cual, positiva.]"},
      {estrellas:2,quien:"Cliente verificado",texto:"[Pega aquí una reseña real menos positiva, para dar equilibrio.]"}
    ]
  },
  {
    slug:"philips-serie-2200",
    marca:"Philips",
    nombre:"Serie 2200 LatteGo EP2220/10",
    destacado:"Más vendida",
    precio:244,
    precioAntes:329,
    enlace:"https://www.amazon.es/dp/B0CLABCDEF?tag=TU-TAG-21",
    imagen:"/img/cafeteras/philips-serie-2200.jpg",
    rating:4.5,
    numResenas:9120,
    picoPrecio:"Gama media",
    idealPara:"quien quiere pantalla y molinillo cerámico al mejor precio",
    specs:{
      presion:15, molinillo:"Cerámico (12 niveles)", leche:"Espumador clásico",
      bebidas:3, pantalla:"Táctil", perfiles:1,
      depositoAgua:1.8, depositoGrano:275, premolido:true, grupoExtraible:true,
      conectividad:false, medidas:"37 × 25 × 43 cm", peso:"8 kg", potencia:1500, color:"Negro"
    },
    pros:["Molinillo cerámico silencioso y duradero","Pantalla táctil intuitiva","Grupo de infusión extraíble"],
    contras:["Solo 3 bebidas preconfiguradas","Espumador clásico (no automático)"],
    resenas:[
      {estrellas:5,quien:"Cliente verificado",texto:"[Pega aquí una reseña real de Amazon.]"},
      {estrellas:3,quien:"Cliente verificado",texto:"[Pega aquí una reseña real con alguna pega.]"}
    ]
  },
  {
    slug:"delonghi-magnifica-evo",
    marca:"De'Longhi",
    nombre:"Magnifica Evo ECAM290.61.B",
    destacado:"Mejor para capuchino",
    precio:429,
    precioAntes:549,
    enlace:"https://www.amazon.es/dp/B0CGHIJKLM?tag=TU-TAG-21",
    imagen:"/img/cafeteras/delonghi-magnifica-evo.jpg",
    rating:4.7,
    numResenas:6230,
    picoPrecio:"Gama media-alta",
    idealPara:"amantes del capuchino que quieren leche automática y recetas",
    specs:{
      presion:15, molinillo:"Cónico (13 niveles)", leche:"LatteCrema automático",
      bebidas:6, pantalla:"Panel táctil", perfiles:1,
      depositoAgua:1.8, depositoGrano:250, premolido:true, grupoExtraible:true,
      conectividad:false, medidas:"24 × 44 × 36 cm", peso:"9.5 kg", potencia:1450, color:"Negro"
    },
    pros:["Sistema de leche automático LatteCrema","Recetas listas (capuchino, latte, flat white)","Compacta para lo que ofrece"],
    contras:["Precio algo superior","Sin conexión a app"],
    resenas:[
      {estrellas:5,quien:"Cliente verificado",texto:"[Pega aquí una reseña real de Amazon.]"},
      {estrellas:4,quien:"Cliente verificado",texto:"[Pega aquí otra reseña real.]"}
    ]
  }
];
