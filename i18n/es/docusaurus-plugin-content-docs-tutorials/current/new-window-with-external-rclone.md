---
sidebar_position: 5
description: Aprende a sincronizar Google Drive y AWS S3 directamente en la nube usando RcloneView conectado a una instancia externa de Rclone que se ejecuta en AWS EC2.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Sincronizar AWS S3 y Google Drive mediante Rclone externo en EC2

Sincronizar datos entre servicios de almacenamiento en la nube (por ejemplo, Google Drive ↔ AWS S3) con **RcloneView** es sencillo gracias a su **Rclone integrado**. Cuando instalas RcloneView, este motor integrado se incluye automáticamente y normalmente se usa para gestionar transferencias de archivos desde tu **PC local**.

Sin embargo, usar el Rclone integrado significa que **todo el tráfico de transferencia pasa por tu equipo local**. Esto puede ralentizar considerablemente el proceso, especialmente al sincronizar conjuntos de datos grandes o al operar en una red más lenta.

Por ejemplo, sincronizar archivos de **Google Drive a AWS S3** usando el Rclone integrado implica descargar los archivos a tu equipo local y luego subirlos a S3. Esta doble transferencia no solo añade latencia, sino que también consume tu ancho de banda local.

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
En este caso, una mejor solución es **ejecutar Rclone directamente en una instancia en la nube**, como **un servidor AWS EC2**. Al conectar RcloneView a ese **Rclone externo ejecutándose en EC2**, puedes:

- Evitar que el tráfico pase por tu PC local  
- Realizar transferencias de nube a nube directamente dentro de la nube (Google → EC2 → S3)  
- Aprovechar la infraestructura de red en la nube de mayor velocidad    

Esta arquitectura mejora significativamente el rendimiento y reduce la carga sobre tu dispositivo local.

En este tutorial, te guiaremos a través del uso de la **función Nueva ventana de RcloneView** para conectarte a un **Rclone externo en EC2**, y luego sincronizar archivos entre **Google Drive** y **AWS S3** completamente desde la nube.

:::caution Es posible que se apliquen tarifas de AWS EC2 y de transferencia de red

Ejecutar Rclone en una instancia EC2 puede generar transferencias más rápidas, pero ten en cuenta que **AWS puede cobrar por el uso de cómputo y la transferencia de datos salientes a otros servicios**.

Consulta: [Precios de AWS – Transferencia de datos](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
Esta guía te explica cómo:

1. Iniciar y configurar **Rclone** en una instancia AWS EC2  
2. Abrir una nueva ventana de RcloneView  
3. Conectarte al **Rclone externo** en EC2  
4. Añadir remotos de **Google Drive** y **AWS S3**  
5. Sincronizar archivos directamente entre ellos con un mejor rendimiento

---

## Parte 1: Desplegar Rclone en EC2 (Rclone externo)

Sigue la guía de AWS EC2 para lanzar Ubuntu, abrir el puerto 5572, instalar Rclone y ejecutar el demonio `rcd`  

👉 Consulta: [Cómo ejecutar Rclone en un servidor AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**Puntos clave**:

- `rclone rcd` se está ejecutando con `--rc-addr=0.0.0.0:5572`  
- Abre el puerto `5572` en tu grupo de seguridad de EC2
- La autenticación básica HTTP está configurada (`--rc-user`, `--rc-pass`)  
- Ejecuta el demonio con:

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- Verifica el acceso mediante:

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## Parte 2: Abrir una nueva ventana de RcloneView

Para mantener las conexiones organizadas, RcloneView permite que cada ventana funcione con su propio motor Rclone.

1. Inicia **RcloneView**
    
2. Haz clic en el botón **`Nueva ventana`** en el menú `Inicio`
    
3. Se abrirá una nueva ventana de la aplicación. Esta instancia es independiente de la ventana principal y mantendrá su propio contexto de conexión.
    

  📌 _Conectarás esta ventana a tu Rclone externo (EC2) en el siguiente paso._

  
👉 Más información: [Usar múltiples conexiones de Rclone con Nueva ventana](/howto/rcloneview-advanced/multi-window)

---

## Parte 3: Conectar el Rclone externo alojado en EC2

En la **ventana recién abierta**, sigue estos pasos para conectarte a tu Rclone externo alojado en EC2:

1. Abre el **`Administrador de conexiones`** desde el menú `Configuración`.

2. Haz clic en **`Nueva conexión`** para crear un nuevo perfil de conexión de Rclone.

3. Completa los campos requeridos:

    - **Nombre para mostrar**: `ec2-rclone` (o cualquier nombre que prefieras)

    - **Dirección remota**: `http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Usuario / Contraseña**: Usa los valores que configuraste en la Parte 1 al iniciar el demonio de Rclone  
      (por ejemplo, `--rc-user=admin`, `--rc-pass=admin`)

4. Haz clic en **`Probar conexión`** para verificar la configuración.  
   Deberías ver una respuesta de conexión exitosa.

5. Si la prueba se supera, haz clic en **`Guardar`** y luego en **`Conectar`**.

6. Ahora estás conectado a tu **instancia de Rclone externo ejecutándose en EC2**, y el estado de la conexión debería aparecer en la parte superior de la ventana.

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 Más información: [Añadir un nuevo Rclone externo](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## Parte 4: Añadir remotos de AWS S3 y Google Drive (mediante Rclone externo)

  
Todavía en la ventana de RcloneView conectada a EC2:

### ➕ Añadir remoto de AWS S3

1. Haz clic en **`+ Nuevo remoto`** en el menú `Remoto`
    
2. En la pestaña **Proveedor**, busca y selecciona S3
    
3. En la pestaña **`Opciones`**:
    
    - Configura **`Provider`** en AWS
        
    - Introduce tu **`Access Key ID`** y **`Secret Access Key`** de AWS
        
    - Configura **`Region`** y, opcionalmente, establece **Endpoint** para servicios compatibles con S3
        
    
4. Haz clic en **Guardar**, ponle un nombre (por ejemplo, ec2-s3)
    
👉 Más información: [Añadir remoto de AWS S3](/howto/remote-storage-connection-settings/s3)

### ➕ Añadir remoto de Google Drive (usando un token de acceso OAuth)

En lugar de completar un nuevo flujo de inicio de sesión mediante el navegador, puedes seguir los pasos de la guía a continuación para usar el **token de acceso OAuth** obtenido anteriormente:

👉 Consulta: [Configurar Google Drive en Rclone externo sin navegador](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. Ve a **`+ Nuevo remoto`** en el menú `Remoto`
2. Selecciona **Google Drive** como proveedor
3. En la pestaña **Opciones**, desplázate hacia abajo y haz clic en **Mostrar opciones avanzadas**
4. Pega el token copiado previamente en el campo **`token`**
5. Ponle un nombre al remoto (por ejemplo, `ec2-gdrive`) y guarda

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## Parte 5: Sincronizar archivos entre AWS S3 y Google Drive

 Ahora puedes transferir archivos entre Google Drive y S3 a través de tu instancia de Rclone en EC2.

  ### **📁 Método A: Comparar y sincronizar bajo demanda**

1. Ve a la pestaña **Explorar**
    
2. Carga el **remoto de Google Drive** en el panel izquierdo (ec2-gdrive:)
    
3. Carga el **remoto de AWS S3** en el panel derecho (ec2-s3:)
    
4. Haz clic en **Comparar** en el menú superior
    
5. Revisa las diferencias:
    
    - Archivos presentes solo en un lado
        
    - Tamaños diferentes
        
    - Coincidencias idénticas
        
    
6. Usa **Copiar →**, **← Copiar** o **Eliminar** para sincronizar
    

💡 El progreso se muestra en la barra de estado y en la pestaña del registro de transferencias.

  👉 Más información: [Comparar contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 Método B: Configurar un trabajo de sincronización programado**

1. Ve a **Inicio → Administrador de trabajos**, luego haz clic en **Añadir trabajo**
    
2. Selecciona **Sincronización**
    
    - Origen: ec2-gdrive:folder
        
    - Destino: ec2-s3:folder
        
    
3. Configura:
    
    - Dirección de sincronización
        
    - Reglas de filtrado (opcional)
        
    
4. (Opcional) Habilita la **Programación**
    
    - Establece el patrón de tiempo
        
    - Previsualiza la programación con el simulador integrado
        
    
5. Haz clic en **Guardar y habilitar**
    

  Una vez programado, RcloneView ejecutará las sincronizaciones automáticamente usando tu backend de Rclone alojado en EC2.

👉 Más información:
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y administrar trabajos](/howto/rcloneview-basic/execute-manage-job)
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## Verificación final

- Confirma que tu sincronización se completó correctamente mediante el panel de **Registro de transferencias** o **Historial de trabajos**
    
- Realiza comprobaciones periódicas en EC2 para confirmar que permanece conectado y responde correctamente
    

---

## 🔗 Guías relacionadas

- [Cómo ejecutar Rclone en un servidor AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Usar múltiples conexiones de Rclone con Nueva ventana](/howto/rcloneview-advanced/multi-window)
- [Añadir un nuevo Rclone externo](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Añadir remoto de AWS S3](/howto/remote-storage-connection-settings/s3)
- [Comparar contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)
-  [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y administrar trabajos](/howto/rcloneview-basic/execute-manage-job)
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
