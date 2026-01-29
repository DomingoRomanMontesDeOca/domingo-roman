---
# El título es obligatorio para que la página funcione
title: Curso básico de Praat
# Configuracion de la barra de navegación
sidebar:
  # Nombre
  label: 3. Edición y modificación de audio
  # Orden (Número más bajo aparece más arriba)
  order: 3
---
# 3. Edición y modificaciones básicas

Un objeto de tipo *Sound* puede ser modificado de varias maneras en Praat. Aquí se presentan las más relevantes y útiles para preparar un audio para su análisis.

  - Cortar un fragmento de audio
  - Extraer un fragmento
  - Pegar una parte del audio en cierta posición
  - Silenciar una parte del audio
  - Amplificar la amplitud de toda la señal
  - Convertir un audio de estéreo a mono
  - Submuestrear un audio
  - Filtrar ciertas frecuencias

- Cortar. La primera operación es de uso muy frecuente ya que la la mayoría de las ocasiones la parte de interés de un audio no coincide con el audio completo. Entonces, lo que habitualmente se hace es cortar la parte que no sirve (un silencio, por ejemplo, o un ruido que no es parte de la investigación o de lo que se quiere mostrar). En estos casos, se marca la parte sobrante y se elimina.

![Cortar un fragmento de un audio](/imagenes/manualPraatEdicion01.png)

- Extraer. A la inversa, es posible que un segmento del audio sea de nuestro particular interés. En ese caso, queremos guardar la selección.

![Cortar un fragmento de un audio](/imagenes/manualPraatEdicion02.png)

- Pegar. Seleccionado una parte de un audio es posible copiarla en otra parte del mismo audio. En primer lugar, se hace la selección, luego se usa el comando *Copy selection to Sound clipboard*, en seguida se pone el cursor donde quiero repetir el fragmento y luego se usa el comando *Paste* con la opción que más convenga a la tarea (*Paste before selectior*, *Paste over selection* o *Paste after selection*).


![Copiar un fragmento de un audio](/imagenes/manualPraatEdicion03.png)

![Pegar un fragmento de un audio](/imagenes/manualPraatEdicion04.png)

Con lo que resulta:

![Resultado del pegado de un fragmento de un audio](/imagenes/manualPraatEdicion05.png)


- Silenciar. Una parte del audio se puede convertir en silencio, es decir, todas las muestras de ese fragmento quedarán con una amplitud de 0 Pa.

![Selección que se quiere silenciar](/imagenes/manualPraatEdicion06.png)

Resultado: la parte seleccionada se ha convertido en silencio.

![Parte convertida en silencio](/imagenes/manualPraatEdicion07.png)

- Amplificar. El valor máximo de amplitud que se puede tener en una señal es de 1 y -1 Pa. Sobre esos valores, la amplitud no se puede representar. Seleccionado el audio en el panel de objetos, se puede usar la opción Modify > Scale Peak que por defecto, tiene el valor 0.99, es decir, lo máximo posible sin que alcance el valor 1. Con esta operación, la señal se amplifica de tal modo que el punto de mayor amplitud se acercará al valor de 0.99 y todos los demás valores de las muestras lo harán proporcionalmente. El efecto es que el sonido se escuchará más fuerte sin afectar los análisis frecuenciales.


![Audio que se va a amplificar](/imagenes/manualPraatEdicion08.png)

Nótese que los valores de amplitud son relativamente bajos considerando que el máximo posible es 1.
El audio original se escucha así: <audio controls src="/sonidos/manualPraatEdicion_audio_img09.wav"></audio>


![Scale peak](/imagenes/manualPraatEdicion09.png)

Este es el formulario para amplificar la amplitud:

![Formulario](/imagenes/manualPraatEdicion10.png)

![Formulario](/imagenes/manualPraatEdicion11.png)

Ahora los valores están más cercanos a 1. 
El audio modificado, se escucha así: <audio controls src="/sonidos/manualPraatEdicionAudio_img11.wav"></audio>


- Conversión a mono. Los archivos en dos canales solo se justifican cuando se han usado dos micrófonos diferentes, por ejemplo, en la grabación de un diálogo. Pero muchas veces se crean archivos en estéreo con la señal idéntica en los dos canales. Esto significa un uso irracional del espacio de almacenamiento y de la memoria del computador. Con la opción *Convert* se puede transformar un audio estéreo a uno mono.

Aquí se observa un audio con dos canales exactamente iguales.

![Un audio con dos canales idénticos](/imagenes/manualPraatEdicion12.png)


El menú para convertirlo en uno de un solo canal:

![Opción para convertir a mono](/imagenes/manualPraatEdicion13.png)

Resultado: con el consiguiente ahorro de espacio en el disco y en la memoria:

![Resultado](/imagenes/manualPraatEdicion14.png)



- Submuestrear. Las frecuencias de muestreo muy altas, se justifican totalmente en casos de grabaciones profesionales de música y en grabaciones de sonidos de ciertos animales. Para las muestras de lenguaje humano hablado, con 22.050 muestras por segundo está bastante bien si se toma en cuenta que de acuerdo con el teorema de [Teorema de Nyquist](https://es.wikipedia.org/wiki/Teorema_de_muestreo_de_Nyquist-Shannon) con esa frecuencia se podrá representar bien hasta los 11 KHz. Para submuestrear un objeto de tipo *Sound* en el menú *Convert* existe la opción *Resample*.

![Submuestrear una señal](/imagenes/manualPraatEdicion15.png)



Filtrado. Por diferentes razones es posible querer borrar ciertas frecuencias de una señal. Por ejemplo, cuando se graban voces en cabinas insonorizadas con micrófonos de condensador de respuesta frecuencial amplia, es posible que aparezcan en los análisis una frecuencias muy bajas. Por ejemplo, en la imagen siguiente se observa este fenómeno. Las partes en recuadro rojo corresponden a bajas frecuencias que aparecen en una zona de la señal que corresponde a silencio.

![Señal con bajas frecuencias en las zonas de silencio](/imagenes/manualPraatEdicion16.png)

Si se aplica un filtro que elimine las frecuencias bajo los 85 Hz, por ejemplo, se obtiene una mejor vista de la señal. Esto se hace con el menú *Filter* y con la selección *Filter( Stop Hann band)*:

![Menú para filtrar la señal](/imagenes/manualPraatEdicion17.png)

En el formulario se señala el rango de frecuencias que se desea eliminar, en este caso, de 0 a 85 Hz.

![Formulario para especificar el rango de frecuencias del filtro](/imagenes/manualPraatEdicion18.png)

Como se puede apreciar, el resultado mejora bastante la visión de la señal:

![Resultado del filtrado](/imagenes/manualPraatEdicion19.png)

