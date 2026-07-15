---
id: wsbi2b5c92
title: Wasabi White Label Explorer (Vista previa)
description: Vista previa privada de una experiencia de escritorio Wasabi Explorer totalmente personalizada con la marca, impulsada por RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Wasabi White Label Explorer (Vista previa)

Esta página es una vista previa privada de cómo RcloneView puede entregarse como una aplicación de escritorio **Wasabi Explorer** totalmente personalizada con la marca para sus usuarios.

El objetivo de esta propuesta de marca blanca es:

- Poner la **marca Wasabi en primer plano** en todo el producto.
- Hacer que sea **sencillo para los usuarios conectar su cuenta de Wasabi** inmediatamente después de la instalación.
- Garantizar que **Wasabi sea la primera opción** en todos los flujos de gestión y navegación.
- Proporcionar **soporte y mantenimiento prioritarios** específicamente para las implementaciones con la marca Wasabi.

---

## 1. Kit de marca e integración visual

Proporcionamos un kit de marca en el que Wasabi es la marca principal y visible en todo el producto. Toda la marca de RcloneView se elimina o se conserva solo donde sea legalmente necesario (por ejemplo, cadenas de versión internas).

Elementos clave:

- Nombre de la aplicación establecido como **“Wasabi Explorer”** (u otra etiqueta acordada).
- Todos los logotipos de RcloneView reemplazados por el **logotipo de Wasabi**:
  - Accesos directos del escritorio e iconos de la barra de tareas.
  - Iconos del instalador.
  - Encabezado de la aplicación e icono de la ventana.
- Acentos de color ajustados para coincidir con la paleta de marca de Wasabi cuando corresponda.


<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-brandkit-example.png" alt="wasabi brandkit example" class="img-large img-center" />

---

## 2. Asistente de remoto Wasabi posterior a la instalación

Inmediatamente después de la instalación, se guía a los usuarios para que conecten su cuenta de Wasabi y así puedan empezar a usar el servicio sin pasos de configuración adicionales.

Comportamientos principales:

- Al final del asistente de configuración, al iniciar la aplicación se abre **“Añadir remoto Wasabi”** como flujo de incorporación predeterminado.
- El asistente está simplificado y preconfigurado para Wasabi:
  - El tipo de proveedor está preseleccionado como **Wasabi**.
  - Por defecto solo se muestran las opciones específicas de Wasabi.
  - Las opciones avanzadas siguen disponibles detrás de un enlace **“Mostrar opciones avanzadas”**.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-wasabi-remote-wizard.png" alt="post install wasabi remote wizard" class="img-large img-center" />


### Asistente de acceso rápido en la pantalla de inicio

Si el usuario omite la conexión inicial o cierra el asistente:

- El panel derecho de la pantalla de inicio muestra un **mosaico grande de Wasabi**.
- Al hacer clic en el mosaico se vuelve a abrir el asistente **“Añadir remoto Wasabi”** en cualquier momento.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-wasabi.png" alt="on home quick access wizard for wasabi" class="img-large img-center" />

Esto garantiza que conectar Wasabi sea siempre la acción siguiente más visible para usuarios nuevos o recurrentes.

---

## 3. Navegación y gestión centradas en Wasabi

Una vez añadido un remoto Wasabi, la interfaz se optimiza para mantener a Wasabi visible de forma destacada en todas las pantallas clave de navegación y gestión.

### 3.1 Panel de Wasabi fijado al reiniciar

Después de haber configurado un remoto Wasabi:

- En los inicios posteriores, la interfaz se abre con un **panel de Wasabi fijado** de forma predeterminada.
- Diseño típico:
  - Lado izquierdo: disco local u otro origen.
  - Lado derecho: el remoto **MYWasabi** del usuario.
- Los usuarios pueden reorganizar libremente los paneles mediante arrastrar y soltar, de modo que el panel de Wasabi se puede mover entre el lado izquierdo y el derecho según su flujo de trabajo preferido.
- Esto convierte las operaciones repetidas de sincronización o copia entre carpetas locales y Wasabi en una acción de un solo clic, independientemente del lado en el que se encuentre actualmente el panel de Wasabi.

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-panel-pinned-on-re-launch.png" alt="wasabi panel pinned on re launch" class="img-large img-center" />


### 3.2 Wasabi en primer lugar en “Nuevo remoto” y “Administrador de remotos”

Para destacar a Wasabi como proveedor de almacenamiento principal:

- En el diálogo **Nuevo remoto**:
  - Wasabi aparece en la **parte superior de la lista de proveedores**.
  - El mosaico de Wasabi está visualmente destacado para fomentar su selección.
- En el **Administrador de remotos**:
  - El remoto Wasabi (por ejemplo, `MYWasabi`) se muestra en la **parte superior de la lista de remotos**.
  - Tanto en la vista de lista como en la de tarjetas, el remoto Wasabi se destaca visualmente para un acceso más rápido.

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-first-in-management-dialog.png" alt="wasabi first in management dialog" class="img-large img-center" />


---

## 4. Soporte y mantenimiento prioritarios para Wasabi

Para la implementación de marca blanca de Wasabi, ofrecemos un canal dedicado de soporte y mantenimiento.

Servicios incluidos:

- **Documentación dedicada**  
  - Páginas de manual independientes específicamente para usuarios de **Wasabi Explorer**.  
  - Guías paso a paso para conectar, sincronizar y solucionar problemas con Wasabi.

- **Gestión prioritaria de incidencias**  
  - Los problemas de los usuarios de Wasabi se priorizan en la cola de soporte.  
  - **Respuesta de emergencia** para incidentes críticos que afecten a los usuarios de Wasabi (por ejemplo, fallos de conexión, problemas de acceso a datos).

- **Actualizaciones continuas del producto**  
  - Actualizaciones periódicas del cliente de escritorio incluidas como parte del acuerdo de mantenimiento.  
  - Posibilidad de lanzar nuevas funciones de RcloneView bajo la marca Wasabi tras la aprobación conjunta.

---

## 5. Próximos pasos

Si desea avanzar con este producto de marca blanca:

1. **Alineación de marca**
   - Confirmar las directrices de uso del logotipo de Wasabi y los colores de marca.
   - Decidir el nombre final del producto (por ejemplo, *Wasabi Explorer*).
2. **Definición de la experiencia**
   - Validar el flujo de incorporación y los comportamientos centrados en Wasabi descritos anteriormente.
   - Ajustar cualquier configuración predeterminada (por ejemplo, modo de sincronización predeterminado, ruta de montaje predeterminada).
3. **Compilación piloto**
   - Entregamos una compilación piloto privada y documentación específica de Wasabi para pruebas internas.

Esta página y su URL están destinadas únicamente a Wasabi y a las partes interesadas asociadas, y no aparecerán en la navegación pública ni en las búsquedas. Se puede compartir de forma segura como enlace directo durante las evaluaciones y discusiones piloto.
