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

Una de las cuestiones básicas en la investigación acústica es determinar el momento en el que se hace un determinado análisis. En un oscilograma, esto es simple: se sitúa el cursor donde se quiere determinar, por ejemplo, el valor de los formantes o el de la frecuencia fundamental y, luego, se observa en la ventana de edición cuál es el valor de ese parámetro. O, si se trata de la duración de un segmento, se selecciona con el cursor la parte que quiere medir y con eso se obtiene el valor deseado.

Sin embargo, lo más productivo es poder guardar —como archivo— un tipo de objeto del que dispone Praat con toda la información temporal de modo que sea posible

  - automatizar la obtención de datos
  - repetir el análisis en el mismo punto exacto

Este tipo de objeto es el *TextGrid* y es un objeto de la misma duración que el audio a partir del cual se ha creado. El *TextGrid* tiene capas o estratos (*tiers*) de dos tipos: puntuales y de intervalos. Como lo señala el nombre, en los del primer tipo se pueden marcar puntos específicos, con el texto que se quiera. En los del segundo tipo, se puede poner el texto que se quiera en un segmento o intervalo de la señal.

El procedimiento para crear el TextGrid de un audio es el siguiente:

  - seleccionar el audio en el panel de objetos
  - en el menú *Annotate* seleccionar la opción *To TextGrid...*
  - completar el formulario
  -   con los nombres de todos los *tiers* o capas
  -   indicar cuáles *tiers* serán de punto (los no señalados, serán considerados "de intervalos")


![Menú para crear el TextGrid de un audio seleccionado](/imagenes/manualPraatEdicion20.png)



![Formulario para indicar los estratos](/imagenes/manualPraatEdicion21.png)


![Formulario con nombres de estratos](/imagenes/manualPraatEdicion22.png)


![Selección del audio y del TextGrid](/imagenes/manualPraatEdicion23.png)


![Ventana de edición](/imagenes/manualPraatEdicion24.png)


![Ejemplo de audio y TextGrid con dos estratos](/imagenes/manualPraatEdicion25.png)
