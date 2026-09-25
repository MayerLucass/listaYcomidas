# En casa · Compras y comidas

App para organizar las compras por mes, anotar lo que hay en la despensa y descubrir comidas posibles con esos alimentos. Se adapta a celular y computadora.

## Funciones

- Lista de compras por mes, agrupada por categoría, con cantidad y progreso.
- Al marcar un producto como comprado, se agrega automáticamente a la despensa. Desmarcarlo revierte esa entrada vinculada sin modificar alimentos cargados manualmente. Las compras ya marcadas antes de esta versión se incorporan al abrir la app.
- Despensa con buscador, cantidades y avisos de vencimiento.
- Recetas que priorizan ingredientes disponibles, muestran qué hay y qué falta, y permiten agregar los faltantes a la lista actual. La sección espera alimentos en la despensa antes de proponer platos.
- Diseño con navegación horizontal, portada verde, menú de comida destacado y tarjetas adaptadas a celular y computadora. Los íconos vectoriales son propios y se ven nítidos a cualquier tamaño.
- En GitHub Pages, el botón de ChatGPT prepara una consulta con la despensa y las preferencias. Tocá **Copiar y abrir ChatGPT** y pegá el texto en el chat. La respuesta se ve en ChatGPT. No se necesita clave API.
- Ideas personalizadas dentro de la app cuando se configura el servidor.
- Datos guardados en `localStorage` del navegador. En otro dispositivo o navegador, la lista es independiente.

## Abrir la app

Se puede publicar el contenido de la rama `main` en **GitHub Pages** desde *Settings → Pages → Deploy from a branch → main / root*. La app base funciona sin instalación ni cuenta. La dirección sería `https://mayerlucass.github.io/listaYcomidas/` cuando Pages termine de publicar.

Para probar en tu computadora, abrí el proyecto con un servidor local, por ejemplo `python -m http.server 8000`, y visitá `http://localhost:8000`. Los módulos JavaScript requieren HTTP, por lo que abrir `index.html` como archivo puede fallar.

## Activar las ideas con IA

GitHub Pages solo publica archivos estáticos y no ejecuta `api/ideas.js`. La opción de **Copiar y abrir ChatGPT** sí funciona ahí: usa tu sesión de ChatGPT, y vos decidís cuándo pegar la consulta. Para recibir la respuesta de IA dentro de la app, el proyecto incluye un endpoint de servidor para un proveedor compatible con funciones `/api` (por ejemplo, Vercel). Para activarlo:

1. Importá este repositorio en Vercel como proyecto web. El directorio raíz es la raíz del repositorio y no hay comando de compilación.
2. En las variables de entorno del proyecto configurá **`OPENAI_API_KEY`** con una clave de la plataforma API de OpenAI. Nunca la pongas en un archivo público, un commit o el navegador. La suscripción de ChatGPT no proporciona esa clave.
3. Desplegá el proyecto. En ese dominio, el botón **Pedir ideas con IA** usará `/api/ideas`.

El endpoint acepta la despensa y una preferencia breve, devuelve tres propuestas y usa `gpt-5-mini` por defecto (configurable con `OPENAI_MODEL`). El uso de la API puede tener costo según tu cuenta. Si hacés público el despliegue con IA, agregá autenticación y límites de uso antes de abrirlo a terceros para evitar uso no autorizado de la clave en el servidor.

## Desarrollo

`npm test` ejecuta las pruebas de sugerencias. La app no necesita dependencias de producción.
