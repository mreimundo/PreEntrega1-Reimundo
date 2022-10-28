# Gaming Gear
Este proyecto fue realizado mediante el framework ReactJS, con el fin de implementar los conceptos aprendidos en el curso de Coderhouse.

## Introducción

El sitio trata de un e-commerce en el cual el usuario podrá visualizar distintos productos relacionados a la industria del gaming y seleccionar la cantidad de los productos deseados, para luego añadirlos al carrito. Desde el mismo, puede eliminar los productos que desee, así como vaciar directamente todo el carrito, o proceder a la compra. Para esto último, se redirige a un formulario que solicita datos del cliente, y una vez todos estos sean válidos, puede concretar su compra y ver su ID de comprobante.

## Inicialización del proyecto

En la consola de su ordenador, puede escribir los siguientes comandos en orden secuencial para inicializar el proyecto:

### `Clonar repositorio`

Cree una carpeta, y copie los archivos de esta rama escribiendo

```sh
git clone https://github.com/mreimundo/gaminggear.git
```

Ejecute luego

```sh
cd gaminggear
```

Para ubicarse en la raiz del directorio del proyecto e instalar las dependencias a continuación
### `Instalación de dependencias`

Primero, se debe instalar NodeJS. Esto se puede hacer siguiendo los pasos en la siguiente página
https://nodejs.org/en/download/

Para validar que se instaló correctamente, puede ejecutar

```sh
node -v
```

Posteriormente, en la consola ejecute

```sh
npm install react
```

Después se deben instalar las dependencias utilizadas específicamente para este proyecto:

Para implementar la navegabilidad del sitio, se utilizó react-router-dom. Se puede instalar ejecutando la siguiente línea de comando:

```sh
npm install react-router-dom
```

Para almacenar los datos se utilizó Firebase. Dicha dependencia se instala como

```sh
npm install --save firebase
```

Para el armado del formulario, se hizo uso de la librería Formik (https://formik.org/) cuya instalación se realiza mediante

```sh
npm install formik --save
```

Y la validación del formulario fue facilitada por una librería de esquema-objeto denominada Yup e instalada como

```sh
npm install -S yup
```

Mientras que algunos diseños fueron posibles gracias a Bootstrap (https://getbootstrap.com/), obtenida a través del comando

```sh
npm install bootstrap@5.2.2
```

Algunas notificaciones fueron diseñadas y desplegadas haciendo uso de SweetAlert2 (https://sweetalert2.github.io/), con la siguiente línea de comando:

```sh
npm install --save sweetalert2 sweetalert2-react-content
```

## Ejecución del e-commerce

Ejecute 

```sh
npm install react-scripts
```

Para instalar los comandos de ejecución

Finalmente, el e-commerce es desplegado utilizando el comando

### `npm start`

Con el mismo, verá que el sitio se pondrá en funcionamiento en una URL localhost:3000

## Otras consideraciones

Para que el proyecto tenga contenido, se utilizaron variables de entorno que son almacenadas de manera local, por lo que no se visualizarán los productos a menos de que el desarrollador le de acceso a las variables de entorno de manera privada. Para almacenar los datos de los productos y categorías se creó un proyecto en Firebase.

El proyecto también se encuentra disponible para visualizar y comprobar el funcionamiento en la plataforma Vercel. Acceda a través de


