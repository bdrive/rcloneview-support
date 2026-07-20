---
sidebar_position: 3
description: "Aprende a detectar automáticamente un NAS Synology en tu red local y conectarlo a RcloneView mediante WebDAV, SMB o SFTP."
keywords:
  - rcloneview
  - Synology NAS
  - detección automática
  - transferencia de NAS a la nube
  - SMB
  - WebDAV
  - SFTP
  - integración con Synology
  - sincronización de almacenamiento en la nube
  - copia de seguridad en la nube
  - google drive
  - onedrive
  - arrastrar y soltar
  - programador de trabajos
  - gestión multi-nube
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Integración sin esfuerzo de Synology NAS con RcloneView: detección automática, configuración y transferencia de archivos

Conecta fácilmente tu NAS Synology a servicios en la nube como Google Drive, OneDrive o iCloud usando **RcloneView**. Con detección automática, soporte integrado para SMB, WebDAV y SFTP, y sin necesidad de configuraciones complejas, puedes transferir, sincronizar o programar trabajos entre tu NAS y tus unidades en la nube, todo desde una GUI fácil de usar.

## **✅ ¿Por qué usar RcloneView para transferencias de NAS a la nube?**

Si utilizas un NAS Synology como servidor doméstico, copia de seguridad de oficina o bóveda multimedia, es probable que también tengas cuentas de almacenamiento en la nube. Con RcloneView, no necesitas depender de la descarga manual de archivos ni aprender herramientas de línea de comandos.

En su lugar, obtienes:

- 🚀 Detección automática de dispositivos NAS en tu red local
    
- 🔄 Trabajos de sincronización y transferencia entre el NAS y el almacenamiento en la nube
    
- 👨‍💻 Configuración basada en GUI para WebDAV, SMB, FTP y SFTP
    
- 📅 Programación de trabajos de copia de seguridad automatizados desde el NAS a la nube
    
- ✅ Comparación del contenido de carpetas antes de sincronizar
    
- 🧠 No se requieren conocimientos de línea de comandos
  

Ya seas principiante o administrador de sistemas, **RcloneView simplifica la gestión de NAS a la nube**.

## **🧰 Paso 1: Detecta tu NAS en la red local**
  

RcloneView escanea automáticamente tu red local en busca de dispositivos NAS Synology.

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- Asegúrate de que tu NAS y tu computadora estén en la **misma red local**.
    
- Los dispositivos NAS detectados aparecerán en una lista que muestra:
    
    - Nombre del dispositivo, IP, dirección MAC, puerto DSM
        
    - Enlace para abrir **DSM (DiskStation Manager)**


:::info La detección automática de NAS no funciona en VLAN
Si estás usando una VLAN (Virtual Local Area Network), es posible que RcloneView no pueda detectar automáticamente tu NAS Synology.  

Esto se debe a que la función de detección automática se basa en protocolos multicast o broadcast, que normalmente están restringidos o bloqueados entre VLAN por motivos de seguridad y aislamiento del tráfico.
:::

  
### Selecciona un método de conexión

  En el menú desplegable, elige cómo conectarte:

- **WebDAV** (predeterminado y recomendado)
- **SMB**
- **FTP**
- **SFTP**

**🔗 ¿Necesitas configurar esto primero en Synology?**

Consulta las guías oficiales de configuración de DSM:

- [Configurar WebDAV en Synology](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [Habilitar SMB en Synology](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [Configurar FTP en Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [Configurar SFTP en Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important Configuración de reenvío de puertos y DDNS

Si tu NAS está detrás de un router o funcionando en un entorno NAT (Network Address Translation), debes **configurar el reenvío de puertos** en tu router después de habilitar WebDAV, SMB, FTP o SFTP en DSM.

📘 Más información: [Guía de reenvío de puertos de Synology](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

Además, para acceder a tu NAS a través de internet usando **acceso basado en dominio en lugar de dirección IP**, puedes configurar el servicio **DDNS (Dynamic DNS)** de Synology.

🌐 Más información: [Guía de configuración de DDNS de Synology](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 Paso 2: Añadir el NAS Synology como remoto**

Después de seleccionar tu NAS y el método de conexión, RcloneView te guiará automáticamente a través del asistente **`+ New Remote`**:

- El **Proveedor** se selecciona automáticamente según el método de conexión elegido (por ejemplo, WebDAV, SMB, SFTP).
- El **Nombre del remoto** se completa automáticamente (por ejemplo, `Synology-28`), pero puedes cambiarlo si lo deseas.
- **URL y puerto**:  
  - Para **WebDAV**, introduce la URL completa (por ejemplo, `https://abc.synology.me:5006`)  
  - Para **SMB / FTP / SFTP**, introduce el **host** (por ejemplo, `192.168.1.100`) y el **puerto** correspondiente:
    - `445` para SMB  
    - `21` para FTP  
    - `22` para SFTP
- **Usuario y contraseña**: introduce las credenciales de la cuenta NAS que usas para acceder a las carpetas compartidas.

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **¿Necesitas más ayuda con cada método?**  
Aquí tienes guías de configuración detalladas:

- 👉 [Cómo añadir un remoto SFTP](/howto/remote-storage-connection-settings/sftp)
- 👉 [Cómo añadir un remoto WebDAV](/howto/remote-storage-connection-settings/webdav)



✅ Una vez añadido, tu remoto NAS aparecerá en la Lista de remotos.  
Luego puedes abrirlo en el panel **Explorer** para navegar por los archivos o iniciar transferencias.

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 Paso 2.5: Montar el NAS como unidad local (Explorer/Finder)**

Monta cualquier carpeta del NAS como unidad local en Windows (por ejemplo, `W:`) o como ubicación en el Finder de macOS. Usa el botón Montar en la barra de herramientas del Explorer.

### Cómo montar

1. En **Browse/Explorer** de RcloneView, abre tu remoto NAS y navega hasta la carpeta que deseas montar.
2. Haz clic en el ícono **Montar (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)** en la barra de herramientas superior.
3. Configura las opciones:
   - Windows: elige una letra de unidad (Automática o selecciona una)
   - macOS: confirma el nombre de la carpeta de montaje (predeterminado como `~/homefolder/<Remote name>`),
4. Haz clic en **Guardar y montar**. La carpeta aparecerá como un disco local:
   - Windows: en “Este equipo”, por ejemplo, `synology-28-webdav … (W:)`
   - macOS: en “Ubicaciones” del Finder

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip Desmontar
Para desmontar, haz clic en **Unmount** en RcloneView o expulsa la unidad desde el sistema operativo.
:::

:::note Requisitos previos
Montar mediante `rclone mount` puede requerir un controlador de sistema de archivos del sistema operativo. Si no está instalado, sigue los siguientes enlaces:
- Windows: [WinFsp](https://winfsp.dev/)
- macOS: [macFUSE](https://osxfuse.github.io/)

Para mejorar el rendimiento, RcloneView activa una **caché VFS** durante operaciones intensas. La carga inicial de metadatos puede tardar un momento según las condiciones de la red.
:::

Para más detalles y métodos adicionales, consulta:

- [Método 1: Montar desde el Explorer de remotos](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [Método 2: Montar mediante el Administrador de montaje](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [Ver y gestionar unidades montadas](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [Montaje rápido desde la bandeja del sistema](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 Paso 3: Transferir o sincronizar archivos**

  
Una vez que tu NAS esté conectado como remoto, RcloneView te ofrece **4 potentes formas de gestionar archivos** entre este y tu almacenamiento en la nube.

  
### **🖱️ Método 1: Arrastrar y soltar**

1. Abre la pestaña **Browse**.
    
2. Carga tu remoto **NAS** en un panel y tu remoto en la nube (por ejemplo, Google Drive) en el otro.
    
3. Simplemente arrastra archivos de un panel y suéltalos en el otro.
    
4. La transferencia se inicia al instante. Puedes monitorearla en la pestaña **Transfer Logs**.
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 Más información: [Explorar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 Método 2: Comparar el contenido de carpetas**

1. Abre las carpetas del NAS y de la nube en los paneles del Explorer.
    
2. Haz clic en **Compare** en la pestaña **Home** del menú superior.
    
3. RcloneView resaltará:
    
    - Archivos que están solo en un lado
        
    - Archivos con conflictos de tamaño o checksum
        
    - Archivos idénticos
        
    
4. Usa **Copy →**, **← Copy** o **Delete** para actuar sobre los archivos.
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 Más información: [Comparar carpetas](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 Método 3: Sincronización o trabajo único**

1. Selecciona el origen (NAS) y el destino (nube).
    
2. Haz clic en **Sync** para abrir las opciones de sincronización.
    
3. Elige la dirección, la ejecución de prueba (dry-run), los filtros, etc.
    
4. Ejecuta la sincronización de inmediato o haz clic en **Save to Jobs**.
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 Más información:

- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
    
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ Método 4: Programar un trabajo recurrente**

1. Ve a **Job Manager** → haz clic en **Add Job**.
    
2. Selecciona tus carpetas del NAS y de la nube.
    
3. Define el horario (diario, semanal, cron).
    
4. Guarda y habilita el trabajo.
    

  ✅ Los trabajos se ejecutarán automáticamente en segundo plano a la hora programada.
 

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 Resumen**

  

Con la integración de Synology NAS de RcloneView, puedes:

- Detectar y conectarte al NAS sin configuración técnica
    
- Usar SMB, SFTP, FTP o WebDAV fácilmente
    
- Transferir, sincronizar o programar trabajos de copia de seguridad hacia cualquier nube
    
  
Sin línea de comandos. Sin scripts. Solo una gestión de archivos en la nube rápida, potente y flexible.

  
## **🔗 Guías relacionadas**

- [Cómo añadir un remoto SFTP](/howto/remote-storage-connection-settings/sftp)
- [Cómo añadir un remoto WebDAV](/howto/remote-storage-connection-settings/webdav)
- [Comparar el contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)
- [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **Comienza a conectar tu NAS a la nube hoy mismo con RcloneView.**

<CloudSupportGrid />
