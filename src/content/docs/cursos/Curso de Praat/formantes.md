---
# El título es obligatorio para que la página funcione
title: Curso básico de Praat
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 5. Análisis de formantes
  # Orden (Número más bajo aparece más arriba)
  order: 5
---
## 5. Formantes

Para analizar los formantes se debe crear el objeto *Formant* con los parámetros ajustados según se trate de voz femenina, masculina o infantil. Siempre es conveniente ver los formantes en la ventana de edición. 

![](/imagenes/manualPraatFormantes01.png)

En la imagen de arriba, se ve el oscilograma y el espectrograma. Es conveniente tener el mismo valor en máxima frecuencia para el espectrograma y para la búsqueda de formantes.
En el formulario siguiente se puede establecer el valor máximo que se muestra en el espectrograma.

![](/imagenes/manualPraatFormantes02.png)

Al disponer ambos análisis con el mismo valor máximo (por ejemplo, 5500 Hz) la superposición de la pista de formantes coincidirá con las bandas frecuenciales más intensas del espectrograma.

![](/imagenes/manualPraatFormantes03.png)

La siguiente imagen muestra el formulario para establecer el máximo valor en Hz para encontrar los formantes.

![](/imagenes/manualPraatFormantes04.png)

En este momento, se puede hacer la operación de mostrar los formantes y aparecerán sobre el espectrograma

![](/imagenes/manualPraatFormantes05.png)

También es posible no mostrar el espectrograma y solo la pista de formantes, como se ve en la siguiente imagen.
![](/imagenes/manualPraatFormantes07.png)

Llegados a este punto, se puede observar la pista de formantes en la ventana de edición. Sin embargo, para obtener valores confiables se debe crear el objeto *Formant*.
Esto se hace con la rutina *To Formant (burg)...*

![](/imagenes/manualPraatFormantes08.png)

Al marcar esta opción, se despliega un formulario con los parámetros para encontrar formantes. Se debe situar el valor máximo con el mismo valor que se indicó en la ventana de edición.

![](/imagenes/manualPraatFormantes09.png)

Con ello, aparece un nuevo objeto en el panel de objetos de Praat.

![](/imagenes/manualPraatFormantes10.png)

Con el objeto *Formant* se puede activar la opción *Query* que, entre otras, permite obtener la información de un formante en un determinado tiempo.

![/imagenes/manualPraatFormantes11.png]
