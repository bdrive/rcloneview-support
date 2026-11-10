---
slug: global-rclone-flags-settings-rcloneview
title: "Flags globales de Rclone — Aplique opciones personalizadas a cada trabajo en RcloneView"
authors:
  - alex
description: "Use Global Rclone Flags en RcloneView para aplicar opciones adicionales de rclone en todas partes, con la configuración de registros, contraseña de configuración y ruta del binario."
keywords:
  - flags globales de rclone
  - configuración de RcloneView
  - flags de rclone GUI
  - configuración de rclone integrado
  - no-check-certificate
  - nivel de registro de rclone
  - contraseña de configuración de rclone
  - binario de rclone personalizado
  - configuración avanzada de RcloneView
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Flags globales de Rclone — Aplique opciones personalizadas a cada trabajo en RcloneView

> Defina un flag de rclone una sola vez en Settings y se aplicará en todo RcloneView, sin repetirlo trabajo por trabajo.

Algunos entornos necesitan una opción extra de rclone en todas partes: un certificado autofirmado en un servidor privado, una ubicación de registros personalizada o un archivo de configuración cifrado. La página de ajustes de Embedded Rclone es donde se encuentran. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, y estos ajustes se aplican a todo el motor integrado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dónde están los ajustes

Abra la pestaña Settings y elija Embedded Rclone. Encontrará la ubicación del binario de rclone, la ubicación de rclone.conf, las carpetas predeterminadas de descarga y subida, el interruptor Stop rclone on App Exit, las opciones de registro, el campo Config Password y el cuadro Global Rclone Flags.

Embedded Rclone escucha por defecto en `http://127.0.0.1:5582`, y RcloneView se comunica con él mediante la API RC de rclone. Cambiar estos ajustes modifica cómo arranca ese motor, así que reinicie Embedded Rclone después de editarlos.

<img src="/support/images/en/blog/new-remote.png" alt="Configuración de un remoto en RcloneView que usa los ajustes de rclone integrado" class="img-large img-center" />

## Uso de Global Rclone Flags

El campo Global Rclone Flags acepta flags adicionales de rclone que se aplican de forma general. El ejemplo documentado es `--no-check-certificate`, útil cuando un servidor WebDAV o basado en HTTPS usa un certificado autofirmado. Úselo con cuidado: desactiva la verificación de certificados, así que resérvelo para servidores privados de confianza y no para endpoints públicos.

Para ajustar un solo trabajo, prefiera los Advanced Settings de cada trabajo (transferencias, checkers, checksum, reintentos). Reserve los flags globales para opciones que realmente pertenecen a todas partes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Ajustes de trabajo en RcloneView que complementan los flags globales" class="img-large img-center" />

## Registros y protección de la configuración

Marque Enable rclone Logging, elija una carpeta y un nombre de archivo de registro, y seleccione un nivel: DEBUG, INFO, NOTICE o ERROR. DEBUG es el más detallado y es el que le pedirá el soporte cuando informe de un problema; haga clic en Restart Embedded Rclone, reproduzca el problema y envíe el archivo de registro.

Si su rclone.conf está cifrado, introduzca aquí la Config Password para que el motor integrado pueda leer sus remotos. También puede indicar a RcloneView un binario de rclone o una ruta de configuración personalizados, y el Self Update de la aplicación mantiene actualizado el rclone integrado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History usado junto con los registros de rclone en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra Settings, luego Embedded Rclone, y revise las rutas actuales.
3. Añada el flag que necesite en Global Rclone Flags y active el registro si desea tener un historial.
4. Reinicie Embedded Rclone y ejecute un pequeño trabajo de prueba.

Unos pocos ajustes globales bien elegidos mantienen la coherencia de todos los trabajos sin clics adicionales.

---

**Guías relacionadas:**

- [Log Debug: solucionar problemas de transferencias](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [Rclone Self Update en RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [Solucionar errores de certificados SSL/TLS](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
