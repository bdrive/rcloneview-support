---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "Transfiere archivos entre pCloud y Google Drive con RcloneView"
authors:
  - tayson
description: "¿Mover datos entre pCloud y Google Drive sin volver a descargarlos? Usa RcloneView para arrastrar y soltar, Comparar, Sincronizar y programar Trabajos con OAuth y cargas multihilo."
keywords:
  - pcloud a google drive
  - google drive a pcloud
  - rcloneview
  - transferencia de nube a nube
  - carga multihilo
  - sincronización por arrastrar y soltar
  - trabajos programados
  - comparar carpetas
  - inicio de sesión oauth
  - transferencias reanudables
tags:
  - RcloneView
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfiere archivos entre pCloud y Google Drive con RcloneView

> Olvídate del ciclo de descargar y volver a subir. RcloneView te permite arrastrar y soltar, comparar, sincronizar y programar transferencias pCloud ↔ Google Drive en una GUI guiada, sin necesidad de CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué usar RcloneView para transferencias multi-nube?

- OAuth seguro para Google Drive y simple correo/contraseña para pCloud; sin tokens que pegar.
- Cargas multihilo y reanudables con registros de progreso y reintentos.
- Explorador de dos paneles para arrastrar y soltar directamente entre nubes.
- Comparar para previsualizar diferencias antes de copiar o limpiar.
- Sincronización con filtros de inclusión/exclusión, simulación (dry-run) y decisiones basadas en tamaño.
- Trabajos en segundo plano y programación para automatizar movimientos recurrentes.

RcloneView combina la fiabilidad de rclone con un flujo de trabajo visual para que equipos y administradores puedan mover carpetas grandes con confianza.

## Antes de empezar

- Inicia sesión en ambas cuentas y confirma la cuota y los límites de la API (Google Drive impone un límite de carga de 750 GB/día por usuario).
- Instala la última versión de RcloneView: [Descargar](https://rcloneview.com/src/download.html).
- Para pCloud, ten a mano tu correo/contraseña; habilita contraseñas de aplicación si tu configuración de seguridad lo requiere.
- Prefiere una conexión cableada o Wi-Fi estable durante transferencias grandes y mantén RcloneView en ejecución para trabajos sin interrupciones.

## Paso 1: Conecta tus remotos en la nube

1. Abre **Remoto → + Nuevo remoto**.
2. Selecciona **pCloud** e ingresa tu **correo** y **contraseña**, luego guarda.
3. Repite para **Google Drive**, haciendo clic en **Conectar** para finalizar el inicio de sesión OAuth en el navegador.
4. Confirma que ambos remotos aparecen en el Administrador de remotos.  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 Más información:
  - [Agregar remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [Agregar un nuevo remoto (OAuth)](/howto/remote-storage-connection-settings/add-oath-online-login)

## Paso 2: Abre ambos remotos en el panel del Explorador

1. Ve a **Explorar**.
2. En el panel izquierdo, haz clic en **+** y abre tu remoto de **pCloud**.
3. En el panel derecho, haz clic en **+** y abre tu remoto de **Google Drive**.
4. Navega a las carpetas de origen y destino que planeas mover.

<!-- Image placeholder: add `/support/images/en/tutorials/open-pcloud-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## Cuatro métodos para transferencias pCloud ↔ Google Drive

### Método 1: Arrastrar y soltar entre paneles

1. Selecciona archivos o carpetas en el panel de pCloud.
2. Arrástralos al panel de Google Drive (o en sentido contrario).
3. Observa el progreso en la pestaña **Transferencia**; pausa o reanuda si es necesario.  

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 Más detalles: [Explorar y administrar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Método 2: Comparar, luego copiar o eliminar

1. Abre la carpeta de origen a la izquierda y la de destino a la derecha.
2. Haz clic en **Comparar** en la barra de herramientas.
3. RcloneView resalta elementos únicos, diferencias de tamaño y coincidencias.
4. Selecciona lo que quieras mover, luego elige **Copiar →** o **← Copiar**.
5. Usa **Eliminar** con cuidado para limpiar duplicados o datos obsoletos.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 Más información: [Comparar contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)

### Método 3: Sincronizar o guardar como un Trabajo

1. Selecciona tu origen en pCloud y tu destino en Google Drive.
2. Haz clic en **Sincronizar** y elige sincronización unidireccional o bidireccional.
3. Previsualiza los cambios, ajusta los filtros (inclusión/exclusión) y luego inicia.
4. Haz clic en **Guardar en Trabajos** para reutilizar la misma configuración más adelante.  

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 Más información:
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y administrar trabajos](/howto/rcloneview-basic/execute-manage-job)


### Método 4: Programar trabajos de sincronización recurrentes

1. Abre **Administrador de trabajos → Agregar trabajo**.
2. Establece **pCloud** como origen y **Google Drive** como destino (o al revés).
3. Elige una programación (cada hora, diaria, semanal o personalizada tipo cron).
4. Activa el trabajo y deja que RcloneView lo ejecute automáticamente.
5. Revisa los registros y el historial para verificar ejecuciones exitosas.

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## Consejos para transferencias fluidas

- Ejecuta una **simulación (dry-run)** antes de sincronizaciones grandes para confirmar el plan.
- Usa **límites de ancho de banda** durante el horario laboral para reducir el riesgo de limitación.
- Para carpetas cifradas de pCloud, asegúrate de tener las claves de acceso o descifra localmente antes de mover.
- Al acercarte al límite diario de Google Drive, divide los trabajos entre varios días o cuentas.
- Mantén la pestaña **Transferencia** abierta para monitorear reintentos, velocidades y respuestas de la API.

## Resumen

RcloneView ofrece transferencias rápidas, fiables y sin CLI entre **pCloud** y **Google Drive**. Con exploración lado a lado, Comparar, Sincronizar, Trabajos reutilizables y programación, puedes gestionar migraciones o copias de seguridad recurrentes sin descargas ni cargas manuales.

<CloudSupportGrid />
