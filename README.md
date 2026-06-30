# Coffee Comparator — manual de la web

Web estática (HTML + CSS + JS, sin WordPress ni plugins) para comparar cafeteras
superautomáticas. Se despliega sola: subes los cambios a GitHub y Hostinger los
publica en `coffeecomparator.com`.

---

## 1) Subir la web a GitHub (la primera vez)

Tienes el repositorio creado: **coffeecomparator-web** (usuario alejandroalonso1188).

**Forma fácil, sin instalar nada:**
1. Entra en tu repo en GitHub.
2. Botón **Add file → Upload files**.
3. Arrastra **todo el contenido de esta carpeta** (las carpetas `css`, `js`,
   `data`, `img`, `cafeteras`, `blog`, `legal` y los archivos `index.html`,
   `comparador.html`, `robots.txt`, `sitemap.xml`, etc.).
   > Sube el **contenido**, no la carpeta `coffeecomparator-web` dentro de otra carpeta.
4. Abajo, **Commit changes**.

> Los archivos `build_pages.py` y `build_fichas.py` son solo herramientas internas
> para generar páginas. Puedes subirlos o no; no afectan a la web.

---

## 2) Conectar Hostinger con GitHub (auto-despliegue)

En **hPanel → Sitios web → coffeecomparator.com → Panel → Avanzado → Git**:
1. **Conéctate con GitHub** y autoriza.
2. Repositorio: `alejandroalonso1188/coffeecomparator-web` · Rama: `main`.
3. Carpeta de destino: **`public_html`**.
4. Activa el **despliegue automático** (auto-deploy en cada push).

A partir de aquí, **cada vez que subas un cambio a GitHub, la web se actualiza sola**.

> ⚠️ Configura Git **solo** en el sitio `coffeecomparator.com`. No lo toques en tus
> webs de WordPress.

---

## 3) Lo que tienes que rellenar antes de lanzar

1. **Tu enlace de afiliado.** En `data/cafeteras.js`, cambia cada `enlace` por tu
   enlace real de Amazon (con tu tag de afiliado, p. ej. `?tag=tucodigo-21`).
   El truco: cambiar el precio o el enlace **aquí** lo actualiza en toda la web.
2. **Datos legales.** En las páginas de `legal/`, `sobre-nosotros.html` y
   `contacto.html` busca los recuadros amarillos `[RELLENA: ...]` y pon tus datos
   (nombre/NIF/dirección/email). Son plantillas: revísalas a tu gusto.
3. **Fotos de las cafeteras.** Sube las imágenes a `img/cafeteras/` con el mismo
   nombre que aparece en `data/cafeteras.js` (p. ej. `delonghi-magnifica-s.jpg`).
   Usa SiteStripe de Amazon o aloja tú la imagen; no enlaces fotos de Google Drive.
4. **Reseñas reales.** Donde pone `[Pega aquí una reseña real...]`, pega opiniones
   reales de clientes de Amazon (positivas y alguna negativa).

---

## 4) Cómo añadir una cafetera nueva (tu flujo diario)

1. Tú me pasas los datos en bruto de la cafetera (nombre, enlace, precio, specs y
   3–5 reseñas reales).
2. Yo te devuelvo: la entrada para `data/cafeteras.js` (para el comparador y las
   tarjetas) **y** la ficha completa `cafeteras/su-slug.html`.
3. Tú subes los archivos a GitHub y pides indexación en Search Console.

Ritmo recomendado: **2–3 páginas al día**, para no dar señales de spam en un
dominio nuevo.

---

## 5) Estructura de archivos

```
index.html                  Home
comparador.html             Comparador visual (tabla con ganadores en verde)
cafeteras/                  Una ficha por modelo
blog/                       Guías (índice + artículo pilar)
legal/                      Aviso legal, privacidad, cookies, afiliados
data/cafeteras.js           ★ FUENTE DE DATOS (precios, enlaces, specs)
css/style.css               Diseño (paleta Espresso & Crema)
js/main.js                  Menú, cookies, precios en vivo
js/comparador.js            Construye la tabla del comparador
img/                        Logos + fotos de producto
robots.txt / sitemap.xml    SEO técnico
```

---

## 6) Recuerda

- Los precios se muestran como **orientativos**; el válido es el de Amazon.
- El banner de cookies ya está; cuando añadas Google Analytics, pega su script en
  la función `cargarAnaliticaConConsentimiento()` de `js/main.js` (así solo se
  carga si el usuario acepta — cumple RGPD).
- Cuando lances la versión en inglés (`/en/`), activa las etiquetas `hreflang`
  que están comentadas en el `<head>` de `index.html`.
