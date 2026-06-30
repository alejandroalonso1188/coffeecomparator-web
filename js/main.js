/* ============================================================
   Coffee Comparator — main.js (compartido en todas las páginas)
   ============================================================ */
(function(){
  "use strict";

  /* ---- Menú móvil ---- */
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");
  if(menuBtn && nav){
    menuBtn.addEventListener("click", function(){
      nav.classList.toggle("abierto");
      var open = nav.classList.contains("abierto");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- Año actual en el footer ---- */
  var y = new Date().getFullYear();
  document.querySelectorAll(".year").forEach(function(el){ el.textContent = y; });

  /* ---- Banner de cookies (RGPD) ---- */
  var KEY = "cc_cookies_v1";
  var banner = document.getElementById("cookies");
  function elegir(valor){
    try{ localStorage.setItem(KEY, valor); }catch(e){}
    if(banner) banner.classList.remove("show");
    if(valor === "accept") cargarAnaliticaConConsentimiento();
  }
  if(banner){
    var saved = null;
    try{ saved = localStorage.getItem(KEY); }catch(e){}
    if(!saved){ banner.classList.add("show"); }
    else if(saved === "accept"){ cargarAnaliticaConConsentimiento(); }
    var bAcc = banner.querySelector("[data-cookie='accept']");
    var bRej = banner.querySelector("[data-cookie='reject']");
    if(bAcc) bAcc.addEventListener("click", function(){ elegir("accept"); });
    if(bRej) bRej.addEventListener("click", function(){ elegir("reject"); });
  }
  function cargarAnaliticaConConsentimiento(){
    /* Cuando tengas Google Analytics, pega aquí su script.
       Así SOLO se carga si el usuario acepta cookies (cumple RGPD). */
  }

  /* ---- Precio y enlace de afiliado en vivo desde /data/cafeteras.js ----
     Cualquier elemento con data-cc-price="slug" o data-cc-link="slug"
     se rellena con el dato del archivo de datos. Así, cambiar un precio
     en cafeteras.js lo actualiza en TODA la web a la vez. ---- */
  function aplicarDatos(){
    if(!window.CAFETERAS) return;
    var mapa = {};
    window.CAFETERAS.forEach(function(c){ mapa[c.slug] = c; });
    document.querySelectorAll("[data-cc-price]").forEach(function(el){
      var c = mapa[el.getAttribute("data-cc-price")];
      if(c) el.textContent = c.precio + " €";
    });
    document.querySelectorAll("[data-cc-link]").forEach(function(el){
      var c = mapa[el.getAttribute("data-cc-link")];
      if(c){ el.setAttribute("href", c.enlace); el.setAttribute("rel","sponsored nofollow noopener"); el.setAttribute("target","_blank"); }
    });
  }
  aplicarDatos();
})();
