---
slug: telegram-bot-notifications-rcloneview
title: "Notificaciones de bot de Telegram — Alertas de sincronización en la nube en vivo en RcloneView"
authors:
  - casey
description: "Configura alertas de bot de Telegram en RcloneView para recibir notificaciones instantáneas del estado de tareas de sincronización, copia de seguridad y transferencia en la nube en tu teléfono."
keywords:
  - rcloneview telegram
  - notificaciones de bot de telegram
  - alertas de sincronización en la nube
  - integración de rclone con telegram
  - notificación de finalización de tarea
  - alertas móviles de sincronización en la nube
  - configurar chat id de telegram
  - notificaciones de sincronización en segundo plano
  - supervisión de tareas remotas
  - alertas de copia de seguridad en la nube
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Notificaciones de bot de Telegram — Alertas de sincronización en la nube en vivo en RcloneView

> Deja de volver al escritorio para comprobar una transferencia — deja que un mensaje de Telegram te avise en el momento en que un trabajo de sincronización en la nube termine, falle o necesite atención.

Los trabajos en la nube de larga duración rara vez terminan mientras estás frente a la pantalla. Una copia de seguridad de varios cientos de gigabytes a Backblaze B2 puede ejecutarse durante toda la noche; una sincronización programada entre dos remotos puede activarse mientras vas de camino al trabajo. **RcloneView** incluye una integración de bot de Telegram en su configuración de Notification & Remote Control, de modo que las actualizaciones de estado de los trabajos llegan a tu teléfono en el instante en que ocurre algo, en lugar de tener que ir a comprobarlo tú mismo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué Telegram es mejor que comprobarlo manualmente

Las notificaciones emergentes del escritorio son útiles mientras estás frente a tu equipo, pero desaparecen en cuanto te alejas. Las notificaciones de Telegram resuelven un problema distinto: te siguen a donde vayas. Ya sea que estés lejos de tu escritorio, viajando, o simplemente usando otra aplicación en otro dispositivo, un mensaje de Telegram llega igual que lo haría un SMS.

Esto importa sobre todo en flujos de trabajo desatendidos: copias de seguridad nocturnas, sincronizaciones programadas entre un NAS y almacenamiento en la nube, o migraciones grandes y puntuales que lanzas antes de salir de la oficina. A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas con la licencia FREE, y combinar eso con un canal de alertas móvil significa que puedes confiar en que los trabajos en segundo plano se ejecuten sin tener que vigilarlos.

<img src="/support/images/en/blog/new-remote.png" alt="Pantalla de configuración de remotos y trabajos en RcloneView" class="img-large img-center" />

## Configurar el bot de Telegram en RcloneView

Para que las alertas funcionen se necesitan dos datos: un token de bot y un ID de chat.

1. **Crea un bot.** En Telegram, envía un mensaje a `@BotFather`, ejecuta `/newbot` y sigue las indicaciones. BotFather te devolverá un token de bot: cópialo.
2. **Obtén tu ID de chat.** Envía cualquier mensaje a tu nuevo bot y luego consulta el feed de actualizaciones del bot (o usa un pequeño bot auxiliar como `@getidsbot`) para encontrar tu ID de chat numérico.
3. **Introduce ambos valores en RcloneView.** Abre la pestaña Settings > Notification & Remote Control, selecciona Telegram y pega el token de bot y el ID de chat.
4. **Guarda y prueba.** Ejecuta un trabajo manualmente para confirmar que el mensaje llega.

Una vez configurado, RcloneView publica las actualizaciones de estado de los trabajos —finalización, fallo, o ambas cosas, según cómo configures el disparador— directamente en ese chat.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creación de un trabajo programado en RcloneView" class="img-large img-center" />

## Combinar las alertas de Telegram con trabajos programados

Las notificaciones de Telegram son más valiosas cuando se combinan con la programación de trabajos de RcloneView. Configura un trabajo de sincronización o copia de seguridad para que se ejecute en un horario estilo crontab, activa el disparador de Telegram, y el trabajo se vuelve completamente autónomo: se ejecuta a la hora programada y solo necesitas echar un vistazo al teléfono para confirmar el resultado.

En los trabajos que ejecutas manualmente, la misma alerta se dispara en el momento en que termina la transferencia, algo útil para migraciones grandes y puntuales en las que no quieres dejar abierta una pestaña del navegador o una ventana de terminal solo para vigilar una barra de progreso.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Panel Job History de RcloneView mostrando ejecuciones anteriores" class="img-large img-center" />

Si una alerta de Telegram informa de un fallo, el panel Job History te ofrece el panorama completo: detalles del error, duración de la transferencia y cuántos archivos se completaron antes de que el trabajo se detuviera.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un bot de Telegram a través de `@BotFather` y anota el token de bot.
3. Abre Settings > Notification & Remote Control e introduce tu token de bot y tu ID de chat.
4. Vincula la notificación a un trabajo —programado o puntual— y ejecuta una prueba para confirmar la entrega.

Con Telegram conectado, la sincronización en la nube desatendida deja de ser un acto de fe y se convierte en algo que puedes comprobar desde cualquier lugar.

---

**Guías relacionadas:**

- [Configurar notificaciones y alertas para la sincronización en la nube en RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Automatizar la sincronización en la nube con notificaciones de Slack](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)
- [Notificaciones de trabajos por SMTP de correo electrónico](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
