# Juegos del Hambre

## Instrucciones generales
1. Se valora el uso de buenas prácticas y patrones de diseño.
2. Construye un código que se auto-documente por si solo.
3. Cualquier duda me pueden escribir. La idea es replicar un ambiente real de trabajo.
4. Clona el proyecto y súbelo a tu cuenta de Github
5. Una vez terminado, comparte tu repo.

# Ejercicio 1
Dependiendo de tu nivel, elige un ejercicio de https://adventjs.dev/es#retos
* Solo los practicantes pueden elegir el nivel fácil
* Tu solución debe estar en tu repo y debes indicar que ejercicio resolviste.
* La solucion se encuentra aqui https://github.com/erickquiber/reto_adventjs_num4 :D

# Ejercicio 2


![conjurados](https://github.com/user-attachments/assets/89a67dc7-3999-4ab4-8aa9-5ce4dfe7a18c)

Para esta solución, lo primero que hice fue modularizar la funcionalidad, ya que inicialmente era difícil de comprender. Basándome en los principios SOLID, decidí separar cada tipo de artículo en su propio archivo, lo que redujo el acoplamiento en el archivo principal. Además, extraje la clase `Item` a un archivo independiente para respetar el principio de responsabilidad única; las clases, como `Item`, deben estar en su propio archivo separado del resto del código.

En cuanto a la implementación de las nuevas reglas, en el archivo correspondiente a los artículos "Conjurados" se aplicó la lógica de degradación, donde la calidad se reduce al doble de velocidad con cada día que pasa. Como se puede observar en la imagen, al crear ítems con la palabrita "Conjured" o "conjured", la regla se aplica de manera correcta, disminuyendo en 2 el valor de `quality` por cada día :D.


//

> Para resolver este ejercicio, debes usar como base lo que encuentras en la carpeta `js-mocha`

Bienvenido al equipo de **Gilded Rose**.
Como quizá sabes, somos una pequeña posada ubicada estratégicamente en una prestigiosa ciudad, atendida por la amable **Allison**.
También compramos y vendemos mercadería de alta calidad.
Por desgracia, nuestra mercadería va bajando de calidad a medida que se aproxima la fecha de venta.

Tenemos un sistema instalado que actualiza automáticamente el `inventario`.
Este sistema fue desarrollado por un muchacho con poco sentido común llamado Leeroy, que ahora se dedica a nuevas aventuras.
Tu tarea es agregar una nueva característica al sistema para que podamos comenzar a vender una nueva categoría de items.

## Descripción preliminar

Pero primero, vamos a introducir el sistema:

* Todos los artículos (`Item`) tienen una propiedad `sellIn` que denota el número de días que tenemos para venderlo
* Todos los artículos tienen una propiedad `quality` que denota cúan valioso es el artículo
* Al final de cada día, nuestro sistema decrementa ambos valores para cada artículo mediante el método `updateQuality`

Bastante simple, ¿no? Bueno, ahora es donde se pone interesante:

* Una vez que ha pasado la fecha recomendada de venta, la `calidad` se degrada al doble de velocidad
* La `calidad` de un artículo nunca es negativa
* El "Queso Brie envejecido" (`Aged brie`) incrementa su `calidad` a medida que se pone viejo
    * Su `calidad` aumenta en `1` unidad cada día
    * luego de la `fecha de venta` su `calidad` aumenta `2` unidades por día
* La `calidad` de un artículo nunca es mayor a `50`
* El artículo "Sulfuras" (`Sulfuras`), siendo un artículo legendario, no modifica su `fecha de venta` ni se degrada en `calidad`
* Una "Entrada al Backstage", como el queso brie, incrementa su `calidad` a medida que la `fecha de venta` se aproxima
    * si faltan 10 días o menos para el concierto, la `calidad` se incrementa en `2` unidades
    * si faltan 5 días o menos, la `calidad` se incrementa en `3` unidades
    * luego de la `fecha de venta` la `calidad` cae a `0`

## El requerimiento

Hace poco contratamos a un proveedor de artículos *conjurados mágicamente*.
Esto requiere una actualización del sistema:

* Los artículos `conjurados` degradan su `calidad` al doble de velocidad que los normales

Siéntete libre de realizar cualquier cambio al mensaje `updateQuality` y agregar el código que sea necesario, mientras que todo siga funcionando correctamente. Sin embargo, **no alteres el objeto `Item` ni sus propiedades** ya que pertenecen al goblin que está en ese rincón, que en un ataque de ira te va a liquidar de un golpe porque no cree en la cultura de código compartido.

## Notas finales

Para aclarar: un artículo nunca puede tener una `calidad` superior a `50`, sin embargo las Sulfuras siendo un artículo legendario posee una calidad inmutable de `80`.
