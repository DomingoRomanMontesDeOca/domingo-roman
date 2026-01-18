---
# El título es obligatorio para que la página funcione
title: Curso básico de fonética
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: Materiales_PA_2025
  # Orden (Número más bajo aparece más arriba)
  order: 6000
---
# Investigacion

# Introducción

Dentro de las preguntas que aún esperan respuestas dentro del campo de la prosodia chilena es la diferencia entre hombres y mujeres.

[Revisión bibliográfica]

En esta investigación, se hará una descripción de las curvas de f0 para identificar semejanzas y, sobre todo, diferencias entre las emisiones de hombres y las de mujeres a partir de una misma secuencia de palabras que se enunciará como afirmación y también como pregunta.

Sabido es que el acento se manifiesta por el relieve de la frecuencia fundamental asociado a la sílaba tónica (citar); también se sabe que esta asociación es compleja y que suele no ser la sílaba tónica la portadora del mayor número de Hz, sino que el pico de f0 suele desplazarse hacia alguna sílaba posterior. (Citar)



# Metodología

Los informantes eran hombres y mujeres chilenos (con una excepción de una mujer peruana) y sumaron un total de xxx, de los cuales xx eran hombres y xx, mujeres. La mayoría estaba en su primer año de universidad, por lo que su edad en promedio está alrededor de los 19 y 20 años. Uno de los informantes declaró que se encuentra en tratamiento hormonal, algo que podría incidir en los datos.

En la tabla 1 se presentan los número de informantes

hombres	mujeres	total
xxx	xxxx	xxxx



En el presente trabajo se estudiaron varias frases en dos modalidades: interrogativa y afirmativa. Aunque las frases fueron diferentes, todas tenían los mismos requisitos: la estructura de todas las sílabas era consonante-vocal y las sílabas 2, 6 y 10 debían ser tónicas. El acento en la sexta sílaba estaba en una palabra esdrújula. 

Las frases fueron grabadas durante el año 2026 en distintos lugares. Algunas de ellas fueron registradas en la cabina del laboratorio de fonética de la USACH.

Los archivos wav fueron etiquetados con la herramienta TextGrid de Praat (citar la fuente). Se creó una capa o tier de punto y se marcaron las vocales nucleares de toda la frase. En total, cada TextGrid tenía 10 vocales etiquetadas.

Se crearon los correspondietes objetos Pitch en el mismo programa. Estos fueron revisados y corregidos manualmente para solucionar errores en el resultado del algoritmo de autocorrelación.

Luego, en el objeto Pitch, se encontraron automáticamente [manualmente] los valores de f0 en cada punto etiquetado y se llevaron a un archivo de texto simple para la visualización de los resultados en R (citar R).

Resultará interesante observar los promedios de frecuencia fundamental en cada sílaba tanto en de las emisiones de los hombres como en las de las mujeres en ambos tipos de oraciones. También se quiere observar la diferencia entre los valores mínimos y los valores máximos en Hz para determinar el rango o campo tonal en cada grupo y en cada modalidad de las oraciones. Estos valores se expresarán en semitonos para normalizar los datos de ambos sexos, dado que las voces femeninas tienen naturalmente una f0 más alta que la de los hombres. Otro aspecto de interés es la alineación tonal para lo cual se observará cuáles son las sílabas que tienen el máximo valor de f0, lo que permitirá una aproximación al fenómeno de la alineación al menos para los casos en que la sílaba de mayor f0 se pueda relacionar con uno de los acentos de la frase.

En síntesis, se hará una comparación a partir de la descripción de los movimientos tonales


# Resultados
![Resultados generales: promedio de f0](/imagenes/pa2026promediosf0.png)
