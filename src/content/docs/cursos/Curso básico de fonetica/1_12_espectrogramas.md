---
# El título es obligatorio para que la página funcione
title: Curso básico de fonética
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 1.22 Espectrogramas
  # Orden (Número más bajo aparece más arriba)
  order: 12
---
## 1.12 Espectrogramas

Se ha afirmado que el espectro es un análisis de las frecuencias en un punto determinado a partir de una ventana de análisis que puede ser larga o corta. Lo anterior hace que se disponga de espectros de banda estrecha y de espectros de banda ancha.
Con una serie de espectros sucesivos se construye un **espectrograma** que permiten observar el comportamiento frecuencial a través del tiempo. Si se construye con espectros de banda estrecha, se tratará de un **espectrograma de banda estrecha** y si se construye con espectros de banda ancha se tratará de un **espectrograma de banda ancha**.

Lógicamente, en el espectrograma de banda estrecha se tendrá mucho detalle y precisión frecuencial y el análisis del tiempo será mucho menos preciso, dado que trabaja con una ventana temporal larga. por su parte, el espectrograma de banda ancha tendrá mayor precisión temporal, dado que la ventana de análisis es corta, pero una definición frecuencial menos precisa.

En primer lugar, en esta sección se presentan los dos tipos de espectros de una sinusoide de 500 Hz y los dos tipos de espectrogramas acompañados del oscilograma.

El siguiente es el oscilograma de una sinusoide de 500 Hz:

![Oscilograma de un tono de 500 Hz](/imagenes/tono_500.png)

Como se sabe, el espectro estrecho mostrará un único relieve en los 500 Hz, con bastante precisión:

![Espectro de un tono de 500 Hz](/imagenes/espectro_estrecho_tono500.png)

Dado que la señal es constante, el espectro será el mismo en cualquier parte de la señal. Es decir que si hacemos el espectro al inicio, al centro o al final, tendrá siempre la misma forma.

El espectro de banda ancha mostrará lo mismo pero de manera menos precisa y también repetirá su forma en cualquier parte de la señal

![Espectro ancho de un tono de 500 Hz](/imagenes/espectro_ancho_tono500.png)


Ahora bien, imagínese que podemos hacer muchos espectros seguidos y los podemos disponer en una sucesión continua. En esta nueva representación se tendrá el tiempo en el eje horizontal y la frecuencia en el eje vertical. Las frecuencias altas se observarán en la parte alta de la representación y las bajas en la parte baja. El tiempo se representará, como es habitual en nuestra cultura, como si avanzara de izquierda a derecha.

La mejor manera de disponer estos espectros, sería girando cada uno tal como se muestra en la imagen siguiente:

![espectro girando](/imagenes/espectro_500_Hz_girando.png)

Así, la punta del espectro queda "mirando al lector" y su posicion en el eje vertical indica de qué frecuencia se trata. La información que se ha perdido es la de la amplitud de esta frecuencia.

No obstante si, antes de hacer el giro mencionado, se pintara con distinto color o con diferente intensidad de color según la magnitud y, por ejemplo, las zonas con magnitudes mayores se indicaran con un color negro y las débiles con tonos de grises más claros, más o menos como se muestra en la figura siguiente, se tendría que las frecuencias con mayor relieve serían más oscuras que las frecuencias con menos relieves.

![espectro girando](/imagenes/espectro_estrecho_tono500_a_negro.png)

La siguiente imagen muestra el espectro (esta vez ha sido girado para beneficio de la explicación) y, al lado se ha dispuesto lo que podría ser el mismo espectro puesto de frente al espectador tal como lo señalamos más arriba. Lo importante de esta imagen es que se entienda la relación entre la distinta intensidad del color negro en la imagen de la derecha y la amplitud del mismo componente que se muestra a la izquierda:

![espectro y sección del espectrograma](/imagenes/espectro_y_espectro_segmentado_volteado.png)

A la figura en tonos de grises de la derecha en la imagen de arriba, la llamaremos "sección" para facilitar la exposición.

Una sucesión de secciones consecutivas se denomina **espectrograma** y es uno de los gráficos más productivos en la investigación fonética del lenguaje.  

En un espectrograma se representan las frecuencias en el eje vertical y el tiempo en el eje horizontal. La amplitud o intensidad no se observa sino por el tono de gris.

El siguiente es un esquema vacío que señala qué se indica en cada eje:

![Esquema para interpretar los espectrogramas](/imagenes/esquema_espectrograma_vacio.png)

Un espectrograma de banda estrecha de un tono de 500 Hz tendrá la forma siguiente:

![Espectrograma de banda estrecha de un tono de 500 Hz](/imagenes/espectrograma_estrecho_tono500.png)

El espectrograma de banda ancha del mismo tono de 500 Hz tendrá la siguiente forma:

![Espectrograma de banda ancha de un tono de 500 Hz](/imagenes/espectrograma_ancho_tono500.png)

En estos espectrogramas hay una zona al inicio y al final que está en blanco. No es porque no haya señal; la razón tiene que ver con la ventana de análisis (corta en un caso, larga en el otro). Más adelante se resolverá este misterio.

La siguiente figura muestra el oscilograma de una señal de audio correspondiente a una voz humana femenina y los dos tipos de espectrogramas:

![Espectrograma de banda ancha de un tono de 500 Hz](/imagenes/ambos_espectrogramas_ejemplo.png)

