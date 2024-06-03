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

![Espectros supuerpuestos con marcas en centros frecuenciales](/imagenes/espectros_superpuestos_centros_frecuenciales_marcados.png)

Existe una técnica que permite encontrar con precisión esos centros. Se trata de la técnica llamada *LPC* (*linear predictive coding*). 

En la siguiente imagen, se muestra el gráfico LPC superpuesto a los espectros anteriores.

![Espectros supuerpuestos con marcas en centros frecuenciales](/imagenes/espectros_superpuestos_mas_lpc.png)

Como se puede observar, con la técnica LPC se obtiene un centro frecuencial muy preciso. De izquierda a derecha podemos ver tres puntos en que se observa un centro frecuencial. Esos centros frecuenciales tienen dos propiedades relevantes: el valor del centro mismo y el ancho de banda (para ambas mediciones se usa el Hz). Se observa además que la coincidencia no es exacta entre el gráfico LPC y los dos espectros.

En el siguiente gráfico aparecen destacados los centros frecuenciales detectados por el análisis LPC:

![Espectros supuerpuestos con marcas en centros lpc](/imagenes/espectros_superpuestos_mas_lpc_marcado.png)


En el siguiente gráfico, se destaca el centro frecuencial de cada centro detectado por el análisis LPC. Se representan valores relacionado con la intensidad (vertical) y con la frecuencia (horizontal).

![LPC con centros frecuenciales marcados](/imagenes/lpc_marcados_centros.png)

Cada centro es el centro frecuencial de lo que se denomina *formante* (estas concentraciones de energía de mayor relieve detectadas por el análisis LPC). Los formantes se numeran (Formante 1, Formante 2, Formante 3, etc.) desde las bajas frecuencias hasta las altas.

![LPC con números de formantes](/imagenes/lpc_f1f2f3.png)



