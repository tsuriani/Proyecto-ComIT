# ProyectoFinal-ComIT
La idea del proyecto es una página para descargar y leer comics online:<br />
<b>Lado del cliente (Front end):</b> <br />
Casi terminado, el problema radica en que tengo un archivo HTML para cada indice/capítulo de comic. La idea es tener un sólo archivo HTML utilizable para cualquier comic, ya que el contenido del mismo deberá depender del comic que se esté viendo.
El plan es guardar toda la información de los comics en un archivo JSON, y que los datos de este, sean los que se visualicen en el archivo HTML.

Archivos y funciones:
1) inicio.html: inicio y sección principal del sitio.<br />
2) indice.html: donde se muestra toda la información del comic en cuestión (título, enlaces, cover, etc).<br />
3) pagComic.html: dónde se visualizan las páginas del comic en cuestión.<br />
4) buscar.html: se carga la información de todos los comics en la tabla y el imput sirve como buscador mediante strings.<br />
5) contacto.html: formulario de contacto (método POST) para ponerse en contacto.<br />
6) confirmación.hmtl: confirmación de formulario recibido exitosamente.<br />

<b>Lado del Servidor (Back End):</b> <br />
Acá es donde se me complican las cosas... debido a mi dificultad para entender y aplicar.<br />
Primero: Como mencioné arriba, debó hacer que la información del JSON sea la que se visualice en el HTML. <br />
Segundo: Eso se logra, si mal no recuerdo, con Handlebars.js cuando no tengo la menor idea de cómo hacer.<br />
Tercero: Luego debó utilizar Templates (Handelbar.js) para guardar fragmentos de código HTML los cuales puedan usarse en cualquier HTML, esto sirve por ejemplo para usar un sólo header para todos los HTML y no escribir siempre lo mismo en todos los archivos.<br />
Tercero: Guardar la respuesta y datos del formulario recibido en una base de datos.<br />
Cuarto: Confirmarle al usuario con un HTML estático (ver: confirmacion.html) la llegada exitosa del formulario .<br />

Archivos y funciones:
1) biblioteca.JSON: almacenamiento de toda la información de los comics, incluyendo las URL de las páginas.
2) servidor.js: servidor Express y de las rutas de todas las carpetas y archivos necesarios para el lado del cliente.
