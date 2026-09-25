# En casa · Compras y comidas

App para organizar las compras por mes, anotar lo que hay en la despensa y descubrir comidas posibles con esos alimentos. Se adapta a celular y computadora.

## Funciones

- Lista de compras por mes, agrupada por categoría, con cantidad y progreso.
- Al marcar un producto como comprado, se puede pasarlo a la despensa con **↗**.
- Despensa con buscador, cantidades y avisos de vencimiento.
- Recetas que priorizan ingredientes disponibles y permiten agregar faltantes a la lista actual.
- Ideas personalizadas con IA cuando se configura el servidor.
- Datos guardados en `localStorage` del navegador. En otro dispositivo o navegador, la lista es independiente.

## Abrir la app

Se puede publicar el contenido de la rama `main` en **GitHub Pages** desde *Settings → Pages → Deploy from a branch → main / root*. La app base funciona sin instalación ni cuenta. La dirección sería `https://mayerlucass.github.io/listaYcomidas/` cuando Pages termine de publicar.

Para probar en tu computadora, abrí el proyecto con un servidor local, por ejemplo `python -m http.server 8000`, y visitá `http://localhost:8000`. Los módulos JavaScript requieren HTTP, por lo que abrir `index.html` como archivo puede fallar.

## Activar las ideas con IA

GitHub Pages solo publica archivos estáticos y no ejecuta `api/ideas.js`. El proyecto incluye un endpoint de servidor para un proveedor compatible con funciones `/api` (por ejemplo, Vercel). Para usarlo:

1. Importá este repositorio en Vercel como proyecto web. El directorio raíz es la raíz del repositorio y no hay comando de compilación.
2. En las variables de entorno del proyecto configurá **`OPENAI_API_KEY`** con una clave de la plataforma API de OpenAI. Nunca la pongas en un archivo público, un commit o el navegador. La suscripción de ChatGPT no proporciona esa clave.
3. Desplegá el proyecto. En ese dominio, el botón **Pedir ideas con IA** usará `/api/ideas`.

El endpoint acepta la despensa y una preferencia breve, devuelve tres propuestas y usa `gpt-5-mini` por defecto (configurable con `OPENAI_MODEL`). El uso de la API puede tener costo según tu cuenta. Si hacés público el despliegue con IA, agregá autenticación y límites de uso antes de abrirlo a terceros para evitar uso no autorizado de la clave en el servidor.

## Desarrollo

`npm test` ejecuta las pruebas de sugerencias. La app no necesita dependencias de producción.
