---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "Solucionar bloqueos de rclone integrado — Reiniciar y recuperar con RcloneView"
authors:
  - tayson
description: "Solucione las caídas de conexión del rclone integrado en RcloneView con pasos de reinicio, registro de logs y opciones de respaldo con rclone externo."
keywords:
  - bloqueo de rclone integrado
  - conexión rclone perdida
  - solución de problemas RcloneView
  - reiniciar rclone integrado
  - errores rclone rc api
  - archivo de registro rclone
  - conexión rclone externa
  - rcloneview no conecta
  - autoactualización de rclone
  - corregir errores de rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar bloqueos de rclone integrado — Reiniciar y recuperar con RcloneView

> Cuando el pie de página muestra "desconectado" en lugar de un número de versión, el motor de rclone integrado ha dejado de responder — así puedes recuperarlo sin perder tu historial de trabajos.

RcloneView incluye un binario de rclone integrado que se comunica con la aplicación a través de una dirección de API local, `http://127.0.0.1:5582` por defecto. La mayor parte del tiempo esta conexión es invisible — nunca piensas en ella porque simplemente funciona. Pero si el proceso integrado es finalizado por un límite de recursos del sistema operativo, una regla de firewall local en conflicto o un bloqueo de configuración corrupto, la información de conexión del pie de página deja de mostrar una versión y todos los remotos de tus paneles del Explorer dejan de responder a la vez. Esa es la señal de que estás lidiando con un bloqueo del rclone integrado, no con un problema de autenticación de un remoto concreto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirmar si es el motor integrado y no un remoto concreto

La forma más rápida de distinguirlo: si solo falla la carga de una pestaña o remoto mientras el resto de tus paneles funciona con normalidad, es un problema específico de ese remoto — token de OAuth inválido, credenciales incorrectas, caída del proveedor. Si todos los remotos de todos los paneles dejan de responder simultáneamente y la versión de rclone del pie de página desaparece, es el propio proceso integrado el que se ha detenido. Revisa la pestaña Settings > Embedded Rclone; si el campo de versión está vacío o muestra un error, lo has confirmado.

RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, y todo eso pasa por este único proceso integrado, que es exactamente por qué un bloqueo aquí parece una caída total en lugar de un error específico de un proveedor.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## Reiniciar el proceso integrado

Ve a la pestaña Settings > Embedded Rclone y usa el control de reinicio que hay ahí — esto vuelve a lanzar el binario incluido sin necesidad de cerrar y reabrir RcloneView. Cualquier trabajo que estuviera en medio de una transferencia cuando ocurrió el bloqueo aparecerá como Errored en Job History en lugar de Completed, así que revísalo después y vuelve a ejecutar lo que no haya terminado; el ajuste Retry entire sync if fails de RcloneView (que se encuentra en el paso Advanced Settings de cada trabajo) ayuda a absorber automáticamente este tipo de interrupciones en ejecuciones futuras.

Si los reinicios siguen fallando, comprueba la ruta del binario de rclone en Settings > Embedded Rclone > Local Rclone location. Una ruta que apunte a un binario movido, eliminado o puesto en cuarentena por un antivirus impedirá que el proceso se inicie incluso después de pulsar reiniciar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## Activar el registro para bloqueos repetidos

Un bloqueo puntual rara vez necesita una investigación a fondo, pero uno recurrente sí. Activa Enable rclone Logging en Settings > Embedded Rclone, establece Log level en DEBUG y reinicia el proceso integrado para comenzar un nuevo archivo de registro. Reproduce el bloqueo y luego revisa la pestaña Log en la Info View inferior, o el archivo de registro directamente en la ruta configurada en Log folder. Si necesitas ayuda para interpretarlo, el equipo de soporte de RcloneView acepta archivos de registro en rcloneview@bdrive.com — adjunta el registro de nivel DEBUG en lugar de un resumen, ya que la línea exacta del error es lo importante.

Confirma también que el campo Global Rclone Flags de la misma sección de ajustes no contenga una marca suelta o incompatible que haya quedado de una sesión de resolución de problemas anterior — una marca inválida puede impedir que el proceso integrado se inicie correctamente cada vez.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## Recurrir a una instancia de rclone externa

Si el motor integrado sigue bloqueándose en una máquina concreta — algo habitual en hardware con recursos limitados —, puedes hacer que RcloneView apunte a una instancia de rclone externa en su lugar. Ejecuta `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572` desde una terminal, y luego añádela en Settings > Connect Manager > New Connection usando esa dirección y esas credenciales. Esto desacopla el ciclo de vida del proceso de rclone de la aplicación RcloneView, de modo que un problema de la interfaz gráfica no pueda tumbar tu motor de transferencia, y viceversa.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si necesitas una instalación nueva.
2. Comprueba en Settings > Embedded Rclone si el campo de versión está vacío para confirmar un bloqueo.
3. Usa el control de reinicio y luego revisa Job History en busca de elementos marcados como Errored.
4. Activa el registro DEBUG si el bloqueo se repite, y cambia a una conexión de rclone externa si sigue ocurriendo.

Un proceso integrado bloqueado resulta alarmante porque todos los remotos se apagan a la vez, pero la solución suele estar a un simple reinicio de distancia — y el registro convierte un misterio en un diagnóstico de una sola línea la próxima vez que ocurra.

---

**Guías relacionadas:**

- [Solucionar errores de contraseña de configuración de Rclone — Resolver problemas de configuración cifrada con RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [Corregir el alto uso de memoria y CPU en las transferencias de Rclone con RcloneView](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Autoactualización de Rclone — Mantén tu motor integrado al día en RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
