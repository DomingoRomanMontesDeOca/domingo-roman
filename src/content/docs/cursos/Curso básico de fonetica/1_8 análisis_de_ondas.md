---
# El título es obligatorio para que la página funcione
title: Curso básico de fonética
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 1.8 Análisis de ondas o espectro
  # Orden (Número más bajo aparece más arriba)
  order: 9
---
# 1.8 Análisis de ondas o espectro

El camino inverso a la creación de ondas complejas, periódicas o aperiódicas, a partir de ondas simples, que podemos llamar *síntesis*, es la descomposición de una onda compleja, periódica o aperiódica, o *análisis espectral*. El resultado de este análisis es un *espectro* que tiene la información de cuántas ondas simples componen la compleja y qué frecuencias y qué amplitudes tiene cada una de ellas.
El espectro tiene la información de un determinado punto de la señal; por lo que no informa de estos valores en el transcurso del tiempo sino solo en un momento dado. Para tener información en puntos diferentes, se debe hacer un espectro por cada punto de interés.
Por ejemplo, si una señal compleja (en este caso, periódica) tiene cuatro componentes de 100 Hz, 200 Hz, 300 Hz y 400 Hz cuyas amplitudes son, respectivamente, 0.5, 0.25, 0.4 y 0.3 tendrá esta forma:

![Espectro de una onda compuesta por cuatro sinusoides](/imagenes/espectro_0.png)

En eje vertical se muestran las amplitudes de cada componente y en el horizontal las frecuencias.

Los gráficos de espectros pueden tener formas variadas pero, en lo central, la información es del tipo de la que muestra la imagen de arriba.

Se dijo que el espectro tiene información sobre un punto específico de la señal. Estrictamente hablando, cuando se hace un espectro, se señala el punto en que uno quiere tener la información y el análisis se realiza tomando una porción de la señal en torno al punto marcado. Esta porción se denomina *ventana de análisis* y, como es una porción temporal, puede ser más larga o más corta.
El efecto de la longitud de la ventana es que si la ventana es más bien larga, el análisis de las frecuencias será bastante fino y detallado pero no la definición temporal. Si la ventana es más bien breve, tendrá mayor precisión temporal pero la definición frecuencial será más gruesa o menos fina.



