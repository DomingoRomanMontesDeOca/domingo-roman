---
# El título es obligatorio para que la página funcione
title: Curso básico de fonética
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 5.3 Percepción de la melodía de la voz
  # Orden (Número más bajo aparece más arriba)
  order: 25
---


### Elementos para el análisis de percepción de la melodía de la voz

La f0 se considera el parámetro acústico correlato de la melodía percibida de la voz y de la actividad de los pliegues vocales. Como se trata de un valor frecuencial, la unidad de medida son los Hz que representan bien el aspecto acústico que, a su vez, se corresponde con la actividad glotal.

Mientras que la periodicidad de la señal en el oscilograma es una buena representación del valor puro en Hz y de la velocidad de la actividad de los pliegues vocales, la melodía de la voz tiene una propiedad especial: *es logarítmica, no lineal*. Es decir, 100 Hz de diferencia entre dos frecuencias no tienen el mismo *efecto* si se dan entre 100 y 200 o entre 2000 y 2100. En ambos casos la diferencia es de 100 Hz pero el efecto *melódico* es muy diferente.

Esta es la diferencia entre dos tonos de 100 Hz y 200 Hz:

<audio controls src="/sonidos/100_200.mp3"></audio>

Esta, la diferencia entre dos tonos de 2000 y 2100 Hz:

<audio controls src="/sonidos/2000_2100.mp3"></audio>


La unidad de medida más adecuada para efectos de la percepción de la f0 son los semitonos. Un st es una unidad perceptiva de variación de la f0. Para el habla, se ha establecido que entre 1,5 st y 2 st como la mínima diferencia perceptible.

Si tomamos dos valores de frecuencia, podemos calcular la distancia en st entre ambos valores aplicando la fórmula

     >> 12*log2(frecuencia1/frecuencia2)

. Siempre que las frecuencias se duplican, habrá 12 st (una octava musical) de distancia. Por esta razón, en la parte baja de las frecuencias las diferencias perceptibles requieren menos Hz.

El punto de partida para un análisis melódico es la información en Hz, que es, estrictamente hablando, un dato acústico; pero se debe trabajar con unidades perceptuales para poder hablar del efecto en el oyente.

En fonética de la entonación hay varias categorías analíticas, ya consagradas, que tienen relevancia para las descripciones.

### Estilización

Sin duda una de las posibilidades más interesantes para el investigador consiste en la simplificación de los valores de la curva de f0 a unos más simples que no considere las variaciones microprosódicas que no superen el umbral perceptivo ya sea de 1.5 o de 2.0 st. La estilización da como resultado una curva en la que se puede apreciar perfectamente bien (aunque a veces requiere correcciones según el algoritmo que se utilice) los movimientos relevantes en la percepción del tono.

La siguiente figura muestra una curva estilizada automáticamente mediante la rutina de Praat *Manipulation > Stylize pitch (2 st)*. Se muestra en gris la curva con valores de f0 sin estilizar y en línea roja segmentada la línea estilizada.

![Curva de f0 natural y estilizada](/imagenes/estilizada_leenellibroloslideres.png)

Otra manera de estilizar es tomar los valores en Hz y la posición temporal de cada vocal. Esto se siguió en el proyecto AMPER y también el Mapa prosódico de Chile. Se debe tomar la decisión acerca de cuántos puntos por vocal se deben tomar. Por ejemplo, en el mencionado proyecto AMPER se tomaban tres puntos por vocal.

![Estilización por vocales](/imagenes/estilizada_por_vocales_leenellibroloslideres.png)



![Tres tipos de estilizaciones](/imagenes/tres_estilizaciones_superpuestas.png)



### Rango entre máximo y mínimo

El valor mínimo y el valor máximo en Hz se pueden entender como una diferencia en st que va a decir cuál es el rango tonal o el espectro entonacional en que se mueve un hablante (no en Hz, sino en st).


### Declinación

Desde el punto de partida de una emisión hacia el final hay un movimiento que en general, para expresiones declarativas, es descendente. Tanto los mínimos como los máximos descienden a lo largo del enunciado y, con ello, la línea media de la f0.


### Propuesta: la pendiente

La presente propuesta se basa en el dato de que dos emisiones pueden tener la misma diferencia en st, por ejemplo, en el tonema, pero en la percepción influye la duración del tonema. Así, es posible que existan diferencias en cuanto a pendientes más o menos acentuadas; lo mismo es válido para la comparación entre inicio y final del enunciado completo y, eventualmente, otras realizaciones prosódicas marcadas, como por ejemplo, la focalización.

El procedimiento para el análisis es tomar dos puntos relevantes del enunciado, por ejemplo, inicio y fin del tonema, y obtener la duración entre esos puntos y la diferencia en st entre ellos. Se entenderá como pendiente el número de semitonos que desciende (pendiente negativa) o asciende (pendiente positiva) por segundo.

La fórmula para su cálculo es la siguiente:


      >> pendiente = diferencia en st entre dos puntos / tiempo entre los dos puntos


Lo que este valor señala es la velocidad del cambio tonal, aspecto que parece relevante para descripciones fonéticas de variado tipo, entre otras, las dialectales o las de registro.

![Diferencia Hz](/imagenes/intro_distancia_pendiente.png)

En el ejemplo anterior, el punto 1 se encuentra en la posición 0.1 con una frecuencia de 200 Hz y el punto final en la posición 0.9, con un valor en Hz de 90.

Están a la distancia temporal de 0.8 segundo. La diferencia en Hz entre ambos puntos es de 110 Hz que en esas frecuencias es 13.82 st.

El cálculo de la pendiente arroja el valor de 17.275  (13.82/(0.9-0.1)

En el siguiente ejemplo, se trata de una pendiente descendente más pronunciada pues en menos tiempo se realiza una variación mayor de st.

![Diferencia Hz](/imagenes/intro_distancia_pendiente_2.png)


### Pendiente de un enunciado

La pendiente de un enunciado da una información general sobre el mismo. Una pendiente de valor 0 muestra nula diferencia entre valor inicial y valor final.

Una variación positiva significa que hay un final más alto que el inicio (como puede sueceder en el habla ascendente) y, a la inversa, una emisión con declinación típica tendrá variación negativa, es decir un final más bajo que el inicio.

Una decisión del investigador es dónde tomar los valores iniciales y finales. Una posibilidad con ventajas para la automatización de resultados es la detección automática del primer y último valor de f0. Otra posibilidad es tomar valores en la primera y última vocal (dado que son los elementos principales en términos de información prosódica).

![Pendiente en un enunciado](/imagenes/pendiente_leen_el_libro_los_lideres.png)

En el ejemplo de la figura anterior, se obtiene una pendiente de -2.87 st por segundo.

### Pendiente del tonema

El tonema se ha consderado como la variación tonal entre la última vocal de un grupo fónico (terminología de TNT) y el final del mismo. La pendiente del tonema puede ser especialmente relevante para distinguir modalidades dialectales o de registro.

Se debe aplicar la misma fórmula para el valor en Hz en el centro de la última vocal del grupo fónico y el último rastro de la f0 en el mismo grupo.

![Pendiente en el tonema](/imagenes/pendiente_leen_el_libro_los_lideres_tonema_01.png)

Un acercamiento a la imagen anterior es la siguiente:

![Pendiente en el tonema](/imagenes/delmundo_tonema.png)

En este tonema, la diferencia en Hz entre inicio (177.95 Hz) y final (136.52) es de 41.4 Hz, los st entre ambos puntos es de 4.58 Hz y el tiempo entre ambos puntos es de 0.6 s. Con ello, la pendiente del tonema es de 7.62 st por segundo.

### Referencias

t'Hart A perceptual...

Swerts, Marc, Eva Strangert, Mattias Heldner. F0 Declination In Read-Aloud And Spontaneous Speech. Proceed- ings from the International Conference on Spoken Language Processing (ICSLP) 1996. 
http://citeseer.ist.psu.edu/swerts96declination.html

TNT



