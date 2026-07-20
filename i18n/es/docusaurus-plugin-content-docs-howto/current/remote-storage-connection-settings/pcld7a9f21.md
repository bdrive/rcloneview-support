---
id: pcld7a9f21
title: pCloud White Label Explorer (Vista previa)
description: Vista previa privada de una experiencia de escritorio pCloud Explorer totalmente personalizada, impulsada por RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# pCloud White Label Explorer (Vista previa)

Esta página es una vista previa privada de cómo RcloneView puede entregarse como una aplicación de escritorio **pCloud Explorer** totalmente personalizada para tus usuarios.

El objetivo de esta propuesta de marca blanca es:

- Poner la **marca pCloud en primer plano** en todo el producto.
- Hacer que sea **fácil para los usuarios conectar su cuenta de pCloud** inmediatamente después de la instalación.
- Garantizar que **pCloud sea la primera opción** en cada flujo de gestión y navegación.
- Proporcionar **soporte y mantenimiento prioritarios** específicamente para las implementaciones con marca pCloud.

---

## 1. Kit de marca e integración visual

Proporcionamos un kit de marca donde pCloud es la marca principal y visible en todo el producto. Toda la marca de RcloneView se elimina o se mantiene únicamente donde sea legalmente necesario (por ejemplo, cadenas internas de versión).

Elementos clave:

- Nombre de la aplicación configurado como **"pCloud Explorer"** (u otra etiqueta acordada).
- Todos los logotipos de RcloneView reemplazados por el **logotipo de pCloud**:
  - Accesos directos de escritorio e iconos de la barra de tareas.
  - Iconos del instalador.
  - Encabezado de la aplicación e icono de ventana.
- Acentos de color ajustados para coincidir con la paleta de marca de pCloud cuando corresponda.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-brandkit-examples.png" alt="pcloud brandkit examples" class="img-large img-center" />


---

## 2. Asistente de remoto pCloud posterior a la instalación

Inmediatamente después de la instalación, se guía a los usuarios para que conecten su cuenta de pCloud, de modo que puedan empezar a usar el servicio sin pasos de configuración adicionales.

Comportamientos principales:

- Al finalizar el asistente de configuración, al iniciar la aplicación se abre **"Agregar remoto pCloud"** como flujo de incorporación predeterminado.
- El asistente está simplificado y preconfigurado para pCloud:
  - El tipo de proveedor está preseleccionado como **pCloud**.
  - Solo se muestran las opciones específicas de pCloud de forma predeterminada.
  - Las opciones avanzadas siguen disponibles detrás de un enlace **"Mostrar opciones avanzadas"**.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-pcloud-remote-wizard.png" alt="post install pcloud remote wizard" class="img-large img-center" />

### Asistente de acceso rápido en la pantalla de inicio

Si el usuario omite la conexión inicial o cierra el asistente:

- El panel derecho de la pantalla de inicio muestra un **mosaico grande de pCloud**.
- Al hacer clic en el mosaico, se vuelve a abrir el asistente **"Agregar remoto pCloud"** en cualquier momento.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard.png" alt="on home quick access wizard" class="img-large img-center" />


Esto garantiza que conectar pCloud sea siempre la acción siguiente más visible para usuarios nuevos o recurrentes.

---

## 3. Navegación y gestión centradas en pCloud

Una vez agregado un remoto de pCloud, la interfaz se optimiza para mantener a pCloud visible de forma destacada en todas las pantallas clave de navegación y gestión.

### 3.1 Unidad pCloud en RcloneView Explorer

Cuando el remoto de pCloud se monta como una unidad local:

- La unidad pCloud (por ejemplo, `pCloud Drive (P:/)`) se muestra en la **parte superior de la lista de remotos locales de RcloneView**.
- La unidad utiliza el **icono de pCloud** para distinguirse visualmente de las demás unidades.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="pcloud first in explorer" class="img-medium img-center" />

### 3.2 Panel de pCloud fijado al reiniciar

Después de haber configurado un remoto de pCloud:

- En los inicios posteriores, la interfaz se abre con un **panel de pCloud fijado** de forma predeterminada.
- Diseño típico:
  - Lado izquierdo: disco local u otro origen.
  - Lado derecho: el remoto **MYpCloud** del usuario.
- Esto convierte las operaciones repetidas de sincronización o copia entre carpetas locales y pCloud en una acción de un solo clic.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-panel-pinned-on-re-launch.png" alt="pcloud panel pinned on re launch" class="img-large img-center" />


### 3.3 pCloud en primer lugar en "Nuevo remoto" y "Administrador de remotos"

Para destacar a pCloud como proveedor de almacenamiento principal:

- En el diálogo **Nuevo remoto**:
  - pCloud aparece en la **parte superior de la lista de proveedores**.
  - El mosaico de pCloud está resaltado visualmente para fomentar su selección.
- En el **Administrador de remotos**:
  - El remoto de pCloud (por ejemplo, `MYpCloud`) se muestra en la **parte superior de la lista de remotos**.
  - Tanto en la vista de lista como en la de tarjetas, el remoto de pCloud se destaca visualmente para un acceso más rápido.


<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-management-dialog.png" alt="pcloud first in management-dialog" class="img-large img-center" />

---

## 4. Soporte y mantenimiento prioritarios para pCloud

Para la implementación con marca blanca de pCloud, ofrecemos una línea de soporte y mantenimiento dedicada.

Servicios incluidos:

- **Documentación dedicada**  
  - Páginas de manual independientes específicamente para usuarios de **pCloud Explorer**.  
  - Guías paso a paso para conectar, sincronizar y solucionar problemas con pCloud.

- **Gestión prioritaria de incidentes**  
  - Los problemas de los usuarios de pCloud se priorizan en la cola de soporte.  
  - **Respuesta de emergencia** para incidentes críticos que afecten a los usuarios de pCloud (por ejemplo, fallos de conexión, problemas de acceso a datos).

- **Actualizaciones continuas del producto**  
  - Actualizaciones periódicas del cliente de escritorio incluidas como parte del acuerdo de mantenimiento.  
  - Posibilidad de lanzar nuevas funciones de RcloneView bajo la marca pCloud tras la aprobación conjunta.

---

## 5. Próximos pasos

Si deseas avanzar con este producto de marca blanca:

1. **Alineación de marca**
   - Confirmar las pautas de uso del logotipo de pCloud y los colores de marca.
   - Decidir el nombre final del producto (por ejemplo, *pCloud Explorer*).
2. **Definición de la experiencia**
   - Validar el flujo de incorporación y los comportamientos centrados en pCloud descritos anteriormente.
   - Ajustar cualquier configuración predeterminada (por ejemplo, modo de sincronización predeterminado, ruta de montaje predeterminada).
3. **Compilación piloto**
   - Entregamos una compilación piloto privada y documentación específica de pCloud para pruebas internas.

Esta página y su URL están destinadas únicamente a pCloud y a las partes interesadas asociadas, y no aparecerán en la navegación pública ni en las búsquedas. Puede compartirse de forma segura como enlace directo durante las evaluaciones y discusiones piloto.

