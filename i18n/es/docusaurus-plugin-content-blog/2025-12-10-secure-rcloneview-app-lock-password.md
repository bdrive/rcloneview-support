---
slug: secure-rcloneview-app-lock-password
title: "Protege RcloneView con App Lock: Protege Remotos, Trabajos e Historial"
authors:
  - tayson
description: "Añade una barrera con contraseña a RcloneView con App Lock para que solo los usuarios autorizados puedan ver remotos, historial de transferencias, trabajos, montajes y la base de datos interna, incluso en PCs compartidos."
keywords:
  - seguridad de rcloneview
  - bloqueo de aplicación de rcloneview
  - proteger rclone con contraseña
  - gui de rclone segura
  - proteger remotos de rclone
  - rclone_view.db
  - seguridad de automatización en la nube
  - seguridad de pc compartida
  - protección del historial de trabajos
  - protección del historial de transferencias
tags:
  - RcloneView
  - security
  - backup
  - job-management
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# Protege RcloneView con App Lock: Protege Remotos, Trabajos e Historial

> ¿PC compartido o de empresa? Activa App Lock para exigir una contraseña antes de que cualquiera pueda abrir RcloneView, manteniendo remotos, trabajos e historial de transferencias fuera de la vista.

App Lock de RcloneView añade una sencilla pantalla de contraseña al iniciar o al reabrir la aplicación. Protege la base de datos interna (`rclone_view.db`), que almacena tus remotos, definiciones de trabajos, ajustes de montaje, historial de trabajos y registros de transferencias, de modo que la automatización sensible permanece privada incluso si el equipo se comparte.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Qué protege App Lock

- Definiciones de remotos y credenciales almacenadas en `rclone.conf` (acceso controlado por la aplicación)  
- Historial de transferencias y registros  
- Configuración y programación de trabajos  
- Configuraciones de montaje y estado de la interfaz  
- La base de datos SQLite (`rclone_view.db`) que lo conecta todo

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## A quién beneficia

- Equipos que comparten una estación de trabajo o un servidor de salto  
- Administradores de TI que ejecutan trabajos programados de sincronización/montaje y necesitan resistencia a manipulaciones  
- Usuarios con flujos de trabajo sensibles entre nubes (copias de seguridad, archivos de cumplimiento normativo)  
- Cualquiera que desee una capa de seguridad rápida sin cambios a nivel de sistema operativo

## Cómo activar App Lock (toma un minuto)

1) Abre **Configuración → Configuración general** en el menú superior.  
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) En **General**, marca **Activar App Lock**, introduce tu contraseña y haz clic en **Cerrar**.  
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

Eso es todo. La próxima vez que RcloneView se inicie o se reabra su ventana, verás el aviso de desbloqueo.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Restablecer cuando olvidas la contraseña

- En la pantalla de desbloqueo, haz clic en **Restablecer aplicación**.  
- Confirma el restablecimiento para borrar App Lock y todos los datos internos (configuración, trabajos, historial de transferencias, historial de trabajos).  
- Tu `rclone.conf` permanece intacto, por lo que las definiciones de remotos siguen disponibles al volver a abrir la aplicación.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## Buenas prácticas para operaciones seguras

- Usa App Lock en PCs compartidos o en oficinas donde varios usuarios puedan abrir tu sesión.  
- Combínalo con contraseñas de cuenta del sistema operativo o cifrado de disco para una protección por capas.  
- Nombra los trabajos con claridad, pero evita incluir secretos en los nombres o notas de los trabajos.  
- Haz una copia de seguridad de `rclone_view.db` en una ubicación segura y con permisos de escritura para el usuario (consulta [cambiar la ubicación de la base de datos](/tutorials/change-rcloneview-database-location)).  
- Mantén el programador activado solo para los trabajos en los que confíes y supervísalos mediante el Historial de trabajos.

## Preguntas frecuentes

**¿App Lock detiene los trabajos programados?**  
No: los trabajos que hayas programado siguen ejecutándose. App Lock restringe el acceso a la interfaz para que otros no puedan verlos ni modificarlos.

**¿Qué pasa si restablezco App Lock?**  
Los datos internos se borran, pero `rclone.conf` persiste, por lo que los remotos permanecen. Vuelve a crear los trabajos/el historial según sea necesario.

**¿Puedo seguir usando la Terminal?**  
Sí. Una vez desbloqueada, la Terminal integrada funciona con normalidad; App Lock solo controla el acceso al iniciar.

## Conclusión

Un aviso de contraseña puede parecer algo pequeño, pero es un escudo poderoso para tus remotos, tu automatización y tu historial. Activa App Lock, mantén tu `rclone_view.db` en una ubicación segura y ejecuta tus flujos de trabajo en la nube sabiendo que permanecen privados, incluso en máquinas compartidas.

<CloudSupportGrid />
