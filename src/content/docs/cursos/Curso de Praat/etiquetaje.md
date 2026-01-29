---
# El título es obligatorio para que la página funcione
title: Curso básico de Praat
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 4. Etiquetaje
  # Orden (Número más bajo aparece más arriba)
  order: 4
---
## 4. Etiquetaje de un archivo de audio

Una de las cuestiones básicas en la investigación acústica es determinar el momento en el que se hace un determinado análisis. En un oscilograma, esto es simple. Uno sitúa el cursor donde quiere determinar, por ejemplo, el valor de los formantes o el de la frecuencia fundamental y, luego, revisa en la parte de la ventana de edición cuál es el valor que se obtiene. O, si se trata de la duración de un segmento, uno selecciona con el cursor la parte que quiere medir y con eso se obtiene el valor deseado.

Sin embargo, lo más importante es poder guardar como archivo un tipo de objeto del que dispone Praat para tener toda la información temporal guardada de modo que

  - podamos automatizar la obtención de datos
  - podamos repetir el análisis en el mismo punto exacto

El tipo de objeto del que hablamos es el *TextGrid* y es un objeto de la misma duración que el audio a partir del cual lo hemos creado. El *TextGrid* permite crear etiquetas de dos tipos: puntuales y de intervalos.
