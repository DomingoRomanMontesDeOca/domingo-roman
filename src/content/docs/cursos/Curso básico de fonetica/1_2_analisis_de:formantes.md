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

[pronto]

es posible detectar varios centros frecuenciales en aquellas bandas de frecuencia en que hay una concentración de energía.

Esos centros posibles estarían más o menos en las partes que se muestran ahora:

[pronto]

Existe una técnica que permite encontrar con precisión esos centros. Se trata de la técnica llamada *LPC* (*linear predictive coding*). 

En la siguiente imagen, se muestra el gráfico LPC superpuesto a los espectros anteriores.

[pronto]

Como se puede observar, con la técnica LPC se obtiene un centro frecuencial muy preciso. De izquierda a derecha podemos ver ... puntos en que se observa un centro frecuencial. Esos centros frecuenciales tienen dos propiedades relevantes: el valor del centro mismo y el ancho de banda.

En el siguiente gráfico, 



