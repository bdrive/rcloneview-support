---
id: strj3b5c92
title: Storj White Label Explorer (Vista previa)
description: Vista previa privada de una experiencia de escritorio Storj Explorer completamente personalizada con la marca del cliente, impulsada por RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Storj White Label Explorer (Vista previa)

Esta página es una vista previa privada de cómo RcloneView puede entregarse como una aplicación de escritorio **Storj Explorer** completamente personalizada con la marca de Storj para sus usuarios.

El objetivo de esta propuesta de marca blanca es:

- Colocar la **marca Storj en el centro de atención** en todo el producto.
- Hacer que sea **sencillo para los usuarios conectar su cuenta de Storj** inmediatamente después de la instalación.
- Asegurar que **Storj sea la primera opción** en cada flujo de gestión y navegación.
- Proporcionar **soporte y mantenimiento prioritarios** específicamente para las implementaciones con la marca Storj.

---

## 1. Kit de marca e integración visual

Proporcionamos un kit de marca en el que Storj es la marca principal y visible en todo el producto. Toda la marca de RcloneView se elimina o se conserva únicamente donde sea legalmente necesario (por ejemplo, en cadenas de versión internas).

Elementos clave:

- Nombre de la aplicación configurado como **“Storj Explorer”** (u otra etiqueta acordada).
- Todos los logotipos de RcloneView reemplazados por el **logotipo de Storj**:
  - Accesos directos de escritorio e iconos de la barra de tareas.
  - Iconos del instalador.
  - Encabezado dentro de la aplicación e icono de ventana.
- Acentos de color ajustados para coincidir con la paleta de marca de Storj cuando corresponda.


<img src="/support/images/en/howto/remote-storage-connection-settings/storj-brandkit-example.png" alt="storj brandkit example" class="img-large img-center" />


---

## 2. Asistente de remoto Storj posterior a la instalación

Inmediatamente después de la instalación, se guía a los usuarios para que conecten su cuenta de Storj, de modo que puedan comenzar a usar el servicio sin pasos de configuración adicionales.

Comportamientos principales:

- Al final del asistente de configuración, al iniciar la aplicación se abre **“Agregar remoto Storj”** como flujo de incorporación predeterminado.
- El asistente está simplificado y preconfigurado para Storj:
  - El tipo de proveedor se preselecciona como **Storj**.
  - Solo se muestran las opciones específicas de Storj de forma predeterminada.
  - Las opciones avanzadas permanecen disponibles detrás de un enlace **“Mostrar opciones avanzadas”**.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-storj-remote-wizard.png" alt="post install storj remote wizard" class="img-large img-center" />

### Asistente de acceso rápido en la pantalla de inicio

Si el usuario omite la conexión inicial o cierra el asistente:

- El panel del lado derecho de la pantalla de inicio muestra un **mosaico grande de Storj**.
- Al hacer clic en el mosaico, se vuelve a abrir el asistente **“Agregar remoto Storj”** en cualquier momento.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-storj.png" alt="on home quick access wizard for storj" class="img-large img-center" />

Esto garantiza que conectar Storj sea siempre la acción siguiente más visible para usuarios nuevos o recurrentes.

---

## 3. Navegación y gestión con prioridad para Storj

Una vez que se agrega un remoto de Storj, la interfaz se optimiza para mantener a Storj visible de forma prominente en todas las pantallas clave de navegación y gestión.

### 3.1 Panel de Storj fijado al reiniciar

Después de configurar un remoto de Storj:

- En los inicios posteriores, la interfaz se abre con un **panel de Storj fijado** de forma predeterminada.
- Diseño típico:
  - Lado izquierdo: disco local u otro origen.
  - Lado derecho: el remoto **MYStorj** del usuario.
- Los usuarios pueden reorganizar libremente los paneles mediante arrastrar y soltar, de modo que el panel de Storj se puede mover entre el lado izquierdo y el derecho según su flujo de trabajo preferido.
- Esto convierte las operaciones repetidas de sincronización o copia entre carpetas locales y Storj en una acción de un solo clic, independientemente del lado en el que se encuentre actualmente el panel de Storj.

<img src="/support/images/en/howto/remote-storage-connection-settings/storj-panel-pinned-on-re-launch.png" alt="storj panel pinned on re launch" class="img-large img-center" />


### 3.2 Storj en primer lugar en “Nuevo remoto” y “Administrador de remotos”

Para destacar a Storj como proveedor de almacenamiento principal:

- En el diálogo de **Nuevo remoto**:
  - Storj aparece en la **parte superior de la lista de proveedores**.
  - El mosaico de Storj se destaca visualmente para fomentar su selección.
- En el **Administrador de remotos**:
  - El remoto de Storj (por ejemplo, `MYStorj`) se muestra en la **parte superior de la lista de remotos**.
  - Tanto en la vista de lista como en la de tarjetas, el remoto de Storj se destaca visualmente para un acceso más rápido.



<img src="/support/images/en/howto/remote-storage-connection-settings/storj-first-in-management-dialog.png" alt="storj first in management dialog" class="img-large img-center" />

---

## 4. Soporte y mantenimiento prioritarios para Storj

Para la implementación de marca blanca de Storj, proporcionamos una vía dedicada de soporte y mantenimiento.

Servicios incluidos:

- **Documentación dedicada**  
  - Páginas de manual independientes específicamente para usuarios de **Storj Explorer**.  
  - Guías paso a paso para conectar, sincronizar y solucionar problemas con Storj.

- **Gestión prioritaria de incidencias**  
  - Los problemas de los usuarios de Storj tienen prioridad en la cola de soporte.  
  - **Respuesta de emergencia** para incidentes críticos que afecten a los usuarios de Storj (por ejemplo, fallos de conexión, problemas de acceso a datos).

- **Actualizaciones continuas del producto**  
  - Actualizaciones periódicas del cliente de escritorio incluidas como parte del acuerdo de mantenimiento.  
  - Posibilidad de lanzar nuevas funciones de RcloneView bajo la marca Storj tras la aprobación conjunta.

---

## 5. Próximos pasos

Si desea avanzar con este producto de marca blanca:

1. **Alineación de marca**
   - Confirmar las pautas de uso del logotipo de Storj y los colores de marca.
   - Decidir el nombre final del producto (por ejemplo, *Storj Explorer*).
2. **Definición de la experiencia**
   - Validar el flujo de incorporación y los comportamientos con prioridad para Storj descritos anteriormente.
   - Ajustar cualquier configuración predeterminada (por ejemplo, modo de sincronización predeterminado, ruta de montaje predeterminada).
3. **Compilación piloto**
   - Entregamos una compilación piloto privada y documentación específica de Storj para pruebas internas.

Esta página y su URL están destinadas únicamente a Storj y a las partes interesadas asociadas, y no aparecerán en la navegación pública ni en las búsquedas. Se puede compartir de forma segura como enlace directo durante las evaluaciones y discusiones piloto.
