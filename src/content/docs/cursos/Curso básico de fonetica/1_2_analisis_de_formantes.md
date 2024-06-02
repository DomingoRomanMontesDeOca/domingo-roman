---
# El título es obligatorio para que la página funcione
title: Curso básico de fonética
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 12 formantes
  # Orden (Número más bajo aparece más arriba)
  order: 56
---
# 12. Vocales: formantes

Una señal acústica que corresponde a una vocal se puede analizar de manera muy interesante y productiva con la categoría de los *formantes*.

Dados dos espectros (uno de banda estrecha y el otro de banda ancha) como los siguientes (superpuestos) de una misma señal

![Espectros de banda ancha y estrecha supuerpuestos](/imagenes/espectros_vocales_ancho_estre_superpuestos.png)

es posible detectar varios centros frecuenciales en aquellas bandas de frecuencia en que hay una concentración de energía.

Esos centros posibles estarían más o menos en las partes que se muestran ahora:

[pronto]

Existe una técnica que permite encontrar con precisión esos centros. Se trata de la técnica llamada *LPC* (*linear predictive coding*). 

En la siguiente imagen, se muestra el gráfico LPC superpuesto a los espectros anteriores.

[pronto]

Como se puede observar, con la técnica LPC se obtiene un centro frecuencial muy preciso. De izquierda a derecha podemos ver ... puntos en que se observa un centro frecuencial. Esos centros frecuenciales tienen dos propiedades relevantes: el valor del centro mismo y el ancho de banda.

En los siguientes dos gráficos, se destaca el centro frecuencial de cada centro detectado por el análisis LPC. En el de la izquierda, se presenta la intensidad (vertical) y la frecuencia (horizontal). En el de la derecha la frecuencia está en el eje vertical. La intensidad no se representa. Sí se representa el momento en que el LPC fue realizado. En efecto, el eje x representa el tiempo.

[pronto]

Cada centro es centro de lo que se denomina *formante* (estas concentraciones de energía cuyo centro se señala). Los formantes se numeran (Formante 1, Formante 2, Formante 3, etc.) desde las bajas frecuencias hasta las altas.

[pronto]



