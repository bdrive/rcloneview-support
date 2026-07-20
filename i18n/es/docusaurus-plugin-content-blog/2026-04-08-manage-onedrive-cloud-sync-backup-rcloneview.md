---
slug: manage-onedrive-cloud-sync-backup-rcloneview
title: "Gestiona archivos de OneDrive y la sincronización en la nube con RcloneView"
authors:
  - tayson
description: "Gestiona archivos de OneDrive con RcloneView. Sincroniza, realiza copias de seguridad y transfiere datos entre OneDrive Personal o Business y otros proveedores de nube usando una GUI visual."
keywords:
  - rcloneview
  - onedrive sync rcloneview
  - onedrive backup
  - onedrive file manager
  - onedrive cloud sync tool
  - onedrive to google drive
  - onedrive rclone gui
  - onedrive business backup
  - onedrive multi-cloud
  - onedrive automated backup
tags:
  - RcloneView
  - onedrive
  - cloud-storage
  - cloud-sync
  - guide
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona archivos de OneDrive y la sincronización en la nube con RcloneView

> OneDrive se integra estrechamente con Microsoft 365, pero gestionar copias de seguridad y sincronización entre nubes requiere una herramienta dedicada: **RcloneView** lo hace sencillo.

Microsoft OneDrive da servicio a cientos de millones de usuarios entre los planes Personal y Business, ofreciendo 5 GB gratuitos y hasta almacenamiento ilimitado en los niveles empresariales. Aunque el cliente nativo de OneDrive gestiona bien la sincronización de local a la nube, no ofrece ningún mecanismo integrado para replicar datos hacia AWS S3, Google Drive o un NAS. RcloneView se conecta a OneDrive a través de la API de Microsoft Graph y proporciona una interfaz de gestión de archivos completa: explorar, sincronizar, copiar, mover y programar copias de seguridad entre OneDrive y cualquier otro proveedor de almacenamiento.

Ya seas un usuario particular que respalda fotos personales o un administrador de TI que gestiona OneDrive for Business en toda una organización, RcloneView te da el control sobre tus datos que el cliente nativo simplemente no ofrece.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar OneDrive en RcloneView

Añadir OneDrive a RcloneView utiliza el flujo estándar de OAuth 2.0. Abre el Remote Manager, selecciona **Microsoft OneDrive** y haz clic en autorizar. Se abrirá una ventana del navegador donde inicias sesión en tu cuenta de Microsoft y concedes acceso. El token resultante se almacena de forma segura en tu configuración local de rclone.

Durante la configuración, RcloneView detecta si estás usando OneDrive Personal, OneDrive for Business o bibliotecas de documentos de SharePoint, y configura la conexión en consecuencia. Para cuentas Business, puedes elegir conectarte a tu unidad personal o a la biblioteca de documentos de un sitio de SharePoint. Esta flexibilidad significa que una sola instancia de RcloneView puede gestionar múltiples tenants de OneDrive en paralelo.

La API de OneDrive aplica limitación de peticiones (throttling), típicamente 10.000 llamadas a la API por ventana de 10 minutos para cuentas Business, con límites más bajos en los planes Personal. RcloneView gestiona automáticamente las respuestas 429 (demasiadas solicitudes) con retroceso exponencial, de modo que las transferencias grandes continúan sin intervención manual.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a OneDrive remote in RcloneView Remote Manager" class="img-large img-center" />

## Diferencias entre OneDrive Personal y Business

OneDrive Personal y OneDrive for Business difieren en aspectos importantes que afectan al comportamiento de la sincronización. Las cuentas Personal usan un espacio de nombres plano y tienen un tamaño máximo de archivo de 250 GB. Las cuentas Business admiten estructuras de sitios anidadas, integración con SharePoint y restricciones de nombre de archivo más estrictas (ciertos caracteres como `#` y `%` no están permitidos).

RcloneView gestiona estas diferencias de forma transparente. Al sincronizar desde un proveedor que permite caracteres especiales (como Google Drive) hacia OneDrive for Business, RcloneView codifica o reemplaza automáticamente los caracteres restringidos para evitar fallos en la transferencia. Si estás migrando datos entre cuentas Personal y Business, se aplica la misma lógica, sin necesidad de limpieza manual de nombres de archivo.

## Sincronizar OneDrive con otros proveedores de nube

El explorador de dos paneles de RcloneView coloca OneDrive junto a cualquier otro remoto. Puedes sincronizar todo tu OneDrive con Google Drive, copiar una carpeta de proyecto específica a AWS S3 o mover archivos archivados a Backblaze B2 para un almacenamiento a largo plazo rentable.

OneDrive usa QuickXorHash para la verificación de integridad de archivos, una función hash propietaria exclusiva de Microsoft. RcloneView admite QuickXorHash de forma nativa, por lo que las comparaciones de archivos durante la sincronización son precisas y eficientes. Los archivos que no han cambiado se omiten automáticamente, reduciendo tanto el tiempo de transferencia como el uso de la API.

Para implementaciones grandes de OneDrive for Business, puedes limitar la sincronización a carpetas específicas o bibliotecas de documentos de SharePoint en lugar de sincronizar toda la unidad. Este enfoque focalizado minimiza las llamadas a la API y el tiempo de transferencia, garantizando al mismo tiempo que los datos críticos queden respaldados.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing OneDrive files to another cloud provider in RcloneView" class="img-large img-center" />

## Programar copias de seguridad automatizadas de OneDrive

Depender únicamente de OneDrive para archivos críticos introduce riesgos: las eliminaciones accidentales se propagan entre dispositivos, y el historial de versiones de OneDrive está limitado a 30 días en los planes Personal (aunque los planes Business ofrecen retención configurable). Una copia de seguridad independiente en un proveedor separado añade una red de seguridad fundamental.

El programador de RcloneView automatiza este proceso. Configura una tarea de sincronización diaria de OneDrive a Backblaze B2 o AWS S3, y RcloneView se encarga de la detección de deltas, la transferencia y el registro. El panel de historial de tareas registra cada ejecución con estadísticas: archivos transferidos, archivos omitidos, bytes totales movidos y tiempo transcurrido.

Para organizaciones con requisitos de cumplimiento normativo, combinar las copias de seguridad programadas con destinos de almacenamiento inmutable (como S3 Object Lock) garantiza que, incluso si los datos de OneDrive se ven comprometidos, la copia de seguridad permanezca intacta e inalterable.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated OneDrive backup in RcloneView" class="img-large img-center" />

## Comparar carpetas y verificar datos

Antes de comprometerte con una sincronización grande, la función de comparación de RcloneView te permite ver exactamente qué va a cambiar. Selecciona dos carpetas, una en OneDrive y otra en otro remoto, y RcloneView resalta los archivos que existen solo en un lado, los archivos que difieren en tamaño o hash, y los archivos que son idénticos.

Esto resulta especialmente valioso después de una migración. Ejecuta una operación de comparación entre tu origen de OneDrive y el destino de la copia de seguridad para verificar que todos los archivos llegaron intactos. La comparación visual facilita detectar carencias y resolverlas antes de retirar los datos originales.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive files with another cloud in RcloneView explorer" class="img-large img-center" />

## Montar OneDrive como unidad local

RcloneView puede montar OneDrive como una letra de unidad local en Windows o como un punto de montaje en macOS y Linux. Esto te permite acceder a los archivos de OneDrive directamente desde cualquier aplicación (gestores de archivos, reproductores multimedia o herramientas de línea de comandos) sin descargarlos primero.

Para obtener el mejor rendimiento, habilita el almacenamiento en caché VFS. Esto guarda localmente los archivos accedidos recientemente, de modo que las lecturas posteriores son instantáneas. El tamaño de la caché y su caducidad son configurables, lo que te permite equilibrar el uso de disco y la velocidad de acceso. Montar es especialmente útil en flujos de trabajo donde necesitas explorar o previsualizar archivos de OneDrive sin una sincronización completa.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting OneDrive as a local drive in RcloneView" class="img-large img-center" />

## Monitorear transferencias en tiempo real

Durante las transferencias grandes, RcloneView proporciona un panel de monitoreo en tiempo real que muestra la velocidad de transferencia, el progreso por archivo y el porcentaje de finalización general. Puedes pausar, reanudar o cancelar transferencias individuales sin afectar al resto de la cola. También está disponible la limitación de ancho de banda para evitar que las transferencias de OneDrive saturen tu red: establece un límite durante el horario laboral y permite velocidad completa durante la noche.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for OneDrive in RcloneView" class="img-large img-center" />

## Explorar y gestionar archivos

El explorador de RcloneView ofrece funciones que la interfaz web de OneDrive no tiene: operaciones masivas sobre decenas de miles de archivos, arrastrar y soltar entre dos proveedores de nube cualesquiera, y comparación en paralelo. Puedes renombrar, mover, eliminar y crear carpetas directamente en OneDrive a través del explorador. Para usuarios de OneDrive for Business con acceso a múltiples sitios de SharePoint, cada sitio aparece como un árbol navegable en el panel del explorador.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from OneDrive in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autoriza tu cuenta de Microsoft mediante OAuth en el Remote Manager y selecciona tu tipo de OneDrive (Personal, Business o SharePoint).
3. Explora tu OneDrive en el explorador de dos paneles y configura una tarea de sincronización o copia hacia otro proveedor.
4. Programa una copia de seguridad diaria para mantener una copia redundante en S3, B2 u otra nube.

OneDrive gestiona la colaboración de Microsoft 365, pero RcloneView garantiza que tus datos estén respaldados, sean portátiles y accesibles en todas las nubes que uses.

---

**Guías relacionadas:**

- [Explorar y gestionar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Añadir remoto mediante inicio de sesión por navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Crear tareas de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
