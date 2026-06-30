/* ============================================================
   Coffee Comparator — comparador.js
   Construye la tabla comparativa desde /data/cafeteras.js
   y marca en verde quién gana en cada característica.
   ============================================================ */
(function(){
  "use strict";
  var datos = window.CAFETERAS || [];
  var cont = document.getElementById("cmp-tabla");
  var selOrden = document.getElementById("cmp-orden");
  if(!cont) return;

  // Filas de la tabla: clave en specs, etiqueta, tipo de "ganador"
  var FILAS = [
    {k:"presion",      lab:"Presión",            tipo:"max", suf:" bar"},
    {k:"molinillo",    lab:"Molinillo",          tipo:"txt"},
    {k:"leche",        lab:"Sistema de leche",   tipo:"txt"},
    {k:"bebidas",      lab:"Bebidas",            tipo:"max"},
    {k:"pantalla",     lab:"Pantalla",           tipo:"txt"},
    {k:"perfiles",     lab:"Perfiles de usuario",tipo:"max"},
    {k:"depositoAgua", lab:"Depósito de agua",   tipo:"max", suf:" L"},
    {k:"depositoGrano",lab:"Depósito de grano",  tipo:"max", suf:" g"},
    {k:"premolido",    lab:"Admite premolido",   tipo:"bool"},
    {k:"grupoExtraible",lab:"Grupo extraíble",   tipo:"bool"},
    {k:"conectividad", lab:"App / Wi-Fi",        tipo:"bool"},
    {k:"medidas",      lab:"Medidas (al×an×fo)", tipo:"txt"},
    {k:"potencia",     lab:"Potencia",           tipo:"max", suf:" W"}
  ];

  function ordenar(modo){
    var arr = datos.slice();
    if(modo === "precio") arr.sort(function(a,b){return a.precio-b.precio;});
    else if(modo === "rating") arr.sort(function(a,b){return b.rating-a.rating;});
    return arr;
  }

  function ganadores(arr, fila){
    // devuelve un set de índices ganadores para esa fila
    var win = {};
    if(fila.tipo === "max"){
      var best = -Infinity;
      arr.forEach(function(c){ var v=c.specs[fila.k]; if(typeof v==="number" && v>best) best=v; });
      arr.forEach(function(c,i){ if(c.specs[fila.k]===best && arr.length>1) win[i]=true; });
    } else if(fila.tipo === "bool"){
      arr.forEach(function(c,i){ if(c.specs[fila.k]===true) win[i]=true; });
    }
    return win;
  }

  function celda(c, fila, esWin){
    var v = c.specs[fila.k];
    var cls = esWin ? "win" : "";
    var txt;
    if(fila.tipo === "bool"){
      return '<td class="'+(v?"":"")+'">'+(v?'<span class="si">Sí</span>':'<span class="no">No</span>')+'</td>';
    }
    txt = (v===undefined||v===null||v==="") ? "—" : v + (fila.suf||"");
    return '<td class="'+cls+'">'+txt+'</td>';
  }

  function render(modo){
    var arr = ordenar(modo);

    var thead = '<thead><tr><th class="attr">Modelo</th>';
    arr.forEach(function(c){
      thead += '<th><div class="cmp-prod">'+
        '<img src="'+c.imagen+'" alt="'+c.marca+' '+c.nombre+'" loading="lazy" onerror="this.style.visibility=\'hidden\'">'+
        '<a class="nombre" href="/cafeteras/'+c.slug+'.html">'+c.marca+' '+shortName(c.nombre)+'</a>'+
        '<span class="pico">'+c.picoPrecio+'</span>'+
        '</div></th>';
    });
    thead += '</tr></thead>';

    var tbody = '<tbody>';
    // Fila de precio (gana el más barato)
    var minP = Math.min.apply(null, arr.map(function(c){return c.precio;}));
    tbody += '<tr><td class="attr">Precio</td>';
    arr.forEach(function(c){
      var w = (c.precio===minP && arr.length>1) ? "win" : "";
      tbody += '<td class="'+w+'"><span class="cmp-precio">'+c.precio+' €</span></td>';
    });
    tbody += '</tr>';
    // Fila de valoración
    tbody += '<tr><td class="attr">Valoración</td>';
    var maxR = Math.max.apply(null, arr.map(function(c){return c.rating;}));
    arr.forEach(function(c){
      var w = (c.rating===maxR && arr.length>1) ? "win" : "";
      tbody += '<td class="'+w+'">'+estrellas(c.rating)+'<br><small>'+c.rating.toFixed(1)+' · '+miles(c.numResenas)+'</small></td>';
    });
    tbody += '</tr>';
    // Filas de specs
    FILAS.forEach(function(fila){
      var win = ganadores(arr, fila);
      tbody += '<tr><td class="attr">'+fila.lab+'</td>';
      arr.forEach(function(c,i){ tbody += celda(c, fila, win[i]); });
      tbody += '</tr>';
    });
    // Fila de compra
    tbody += '<tr><td class="attr">Comprar</td>';
    arr.forEach(function(c){
      tbody += '<td class="cmp-buy"><a class="btn btn-amber" rel="sponsored nofollow noopener" target="_blank" href="'+c.enlace+'">Ver precio en Amazon</a></td>';
    });
    tbody += '</tr></tbody>';

    cont.innerHTML = '<table class="cmp tnum">'+thead+tbody+'</table>';
  }

  function shortName(n){ return n.split(" ").slice(0,3).join(" "); }
  function estrellas(r){
    var full = Math.round(r);
    return '<span class="stars" aria-label="'+r+' de 5">'+ "★".repeat(full) + "☆".repeat(5-full) +'</span>';
  }
  function miles(n){ return n>=1000 ? (n/1000).toFixed(n%1000===0?0:1).replace(".",",")+"k reseñas" : n+" reseñas"; }

  if(selOrden){
    selOrden.addEventListener("change", function(){ render(selOrden.value); });
  }
  render(selOrden ? selOrden.value : "default");
})();
