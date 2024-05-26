---
# El título es obligatorio para que la página funcione
title: Curso básico de fonética
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 99.0 Percepción de la melodía de la voz
  # Orden (Número más bajo aparece más arriba)
  order: 900
---


# Percepción de la melodía de la voz

La f0 se considera el parámetro acústico correlato de la melodía percibida de la voz y de la actividad de los pliegues vocales. Como se trata de un valor frecuencial, la unidad de medida son los Hz que representan bien el aspecto acústico y la actividad glotal pero no la percepción melódica.


Mientras que la periodicidad de la señal en el oscilograma es una buena representación del valor puro en Hz y de la velocidad de la actividad de los pliegues vocales, la melodía de la voz tiene una propiedad especial: *es logarítmica, no lineal*. Es decir, 100 Hz de diferencia entre dos frecuencias no tienen el mismo *efecto* si se dan entre 100 y 200 o entre 2000 y 2100. En ambos casos la diferencia es de 100 Hz pero el efecto *melódico* es muy diferente.

Esta es la diferencia entre dos tonos de 100 Hz y 200 Hz:

<audio controls src="/sonidos/100_200.mp3"></audio>

Esta, la diferencia entre dos tonos de 2000 y 2100 Hz:

<audio controls src="/sonidos/2000_2100.mp3"></audio>


La unidad de medida más adecuada para efectos de la percepción de la f0 son los semitonos. Un st es una unidad perceptiva de variación de la f0. Para el habla, se ha establecido que entre 1,5 st y 2 st como la mínima diferencia perceptible.

Si tomamos dos valores de frecuencia, podemos calcular la distancia en st entre ambos valores. Siempre que las frecuencias se duplican, habrá 12 st (una octava musical) de distancia. Por esta razón, en la parte baja de las frecuencias las diferencias perceptibles requieren menos Hz.

La fórmula para hacer el cálculo de st es

      12*log2(frecuencia1/frecuencia2)

El punto de partida para un análisis melódico es la información en Hz pero se debe trabajar con unidades perceptuales para poder hablar de su percepción.

En fonética de la entonación hay varias categorías analíticas, ya consagradas, que tienen relevancia para las descripciones.

# Estilización

Sin duda una de las posibilidades más interesantes para el investigador consiste en la simplificación de los valores de la curva de f0 a una más simple que no considere las variaciones microprosódicas que no superen el umbral perceptivo ya sea de 1.5 o de 2.0 st. La estilización da como resultado una curva en la que se puede apreciar perfectamente bien (aunque a veces requiere correcciones según el algoritmo que se utilice) los movimientos perceptivos del tono.


# Rango entre máximo y mínimo

El valor mínimo y el valor máximo en Hz se pueden entender como una diferencia en st que va a decir cuál es el rango tonal o el espectro entonacional en que se mueve un hablante.


# Declinación

Desde el punto de partida de una emisión hacia el final hay un movimiento que en general, para expresiones declarativas, es descendente. Tanto los mínimos como los máximos descienden a lo largo del enunciado y, con ello, la línea media de la f0.


# Propuesta: la pendiente

Entre dos puntos relevantes del análisis se puede establecer el valor de la pendiente entendida como el número de semitonos que desciende (pendiente negativa) o asciende (pendiente positiva) por segundo.

La fórmula para su cálculo es la siguiente:


      pendiente = diferencia en st entre dos puntos / tiempo entre los dos puntos


Lo que este valor señala es la velocidad del cambio tonal, aspecto que parece relevante para descripciones fonéticas de variado tipo, entre otras, las dialectales o las de registro.

Es posible que sea conveniente aplicar una amplificación numérica para efectos de dar mayor legibilidad al valor de la pendiente.


## Pendiente de un enunciado

La pendiente de un enunciado da una información general sobre el mismo. Una pendiente de valor 0 muestra nula diferencia entre valor inicial y valor final.

Una variación positiva significa que hay un final más alto que el inicio (como puede sueceder en el habla ascendente) y, a la inversa, una emisión con declinación típica tendrá variación negativa, es decir un final más bajo que el inicio.

Una decisión del investigador es dónde tomar los valores iniciales y finales. Una posibilidad con ventajas para la automatización de resultados es la detección automática del primer y último valor de f0. Otra posibilidad es tomar valores en la primera y última vocal (dado que son los elementos principales en términos de información prosódica).


## Pendiente del tonema

El tonema se ha consderado como la variación tonal entre la última vocal de un grupo fónico (terminología de TNT) y el final del mismo. La pendiente del tonema puede ser especialmente relevante para distinguir modalidades dialectales o de registro.

Se debe aplicar la misma fórmula para el valor en Hz en el centro de la última vocal del grupo fónico y el último rastro de la f0 en el mismo grupo.



# Referencias

t'Hart A perceptual...

TNT



