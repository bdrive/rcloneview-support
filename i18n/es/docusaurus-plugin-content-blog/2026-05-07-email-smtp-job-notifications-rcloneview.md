---
slug: email-smtp-job-notifications-rcloneview
title: "Notificaciones de trabajos por correo electrónico SMTP: mantente informado del estado de sincronización en RcloneView"
authors:
  - tayson
description: "Configura notificaciones por correo electrónico SMTP en RcloneView PLUS para recibir alertas de finalización de trabajos de sincronización, configurar múltiples destinatarios y monitorear trabajos de copia de seguridad desatendidos por correo electrónico."
keywords:
  - notificaciones por correo electrónico de RcloneView
  - notificación de sincronización SMTP
  - alerta por correo electrónico de sincronización en la nube
  - notificación de trabajos SMTP
  - correo electrónico de monitoreo de copias de seguridad
  - notificaciones de RcloneView PLUS
  - alerta de finalización de sincronización
  - notificación por correo electrónico de rclone
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Notificaciones de trabajos por correo electrónico SMTP: mantente informado del estado de sincronización en RcloneView

> RcloneView PLUS te permite configurar notificaciones por correo electrónico SMTP directas para la finalización de trabajos de sincronización, de modo que tu equipo siempre sepa cuándo termina —o falla— una copia de seguridad, sin necesidad de comprobarlo manualmente.

Ejecutar trabajos de sincronización y copia de seguridad en la nube según una programación es solo la mitad de la ecuación de automatización. La otra mitad es conocer el resultado sin tener que abrir la aplicación y revisar el Historial de trabajos manualmente. RcloneView PLUS admite notificaciones por correo electrónico mediante configuración SMTP directa, entregando mensajes de estado de sincronización directamente a tu bandeja de entrada en el momento en que se completa un trabajo. Esto hace que el monitoreo de copias de seguridad desatendidas sea práctico tanto para individuos como para equipos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar SMTP en RcloneView

Para configurar las notificaciones por correo electrónico, abre la configuración de notificaciones de RcloneView (disponible con una licencia PLUS). Ingresa los detalles de tu servidor SMTP:

- **SMTP Host**: El servidor de correo saliente de tu proveedor de correo electrónico (por ejemplo, `smtp.gmail.com` para Gmail o el servidor Exchange/SMTP de tu organización).
- **Port**: Normalmente el puerto **587** para STARTTLS (recomendado) o el puerto 465 para SSL. Evita el puerto 25 en la mayoría de los entornos de consumo y de nube, ya que suele estar bloqueado.
- **Authentication**: Ingresa el nombre de usuario y la contraseña de tu correo electrónico o una contraseña específica de aplicación. Para Gmail, utiliza una App Password si la autenticación en dos pasos (2FA) está habilitada en tu cuenta.
- **From Address**: La dirección del remitente que aparecerá en los correos de notificación.

Después de ingresar los detalles, usa el botón **Test** para enviar un correo de prueba y confirmar que la conexión SMTP funciona antes de depender de ella para notificaciones en producción.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## Agregar destinatarios y configuración a nivel de trabajo

Una vez configurado SMTP de forma global, puedes agregar destinatarios de notificaciones a nivel de trabajo. Abre la configuración de un trabajo de sincronización e ingresa una o más direcciones de correo electrónico para notificar cuando ese trabajo se complete. Diferentes trabajos pueden notificar a diferentes personas; por ejemplo, un trabajo de copia de seguridad de documentos financieros puede notificar al equipo de finanzas, mientras que un trabajo de sincronización de contenido multimedia notifica al equipo de contenido.

RcloneView también te permite establecer umbrales para las notificaciones; por ejemplo, enviar un correo electrónico solo cuando un trabajo transfiere más de una cantidad configurable de megabytes. Esto es útil para trabajos que se ejecutan con frecuencia y suelen completarse sin cambios: solo recibes una notificación cuando realmente ocurrió algo significativo, reduciendo la fatiga por alertas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## Casos de uso de las notificaciones por correo electrónico

**El monitoreo de copias de seguridad desatendidas** es el caso de uso principal. Si programas una copia de seguridad nocturna de tus archivos locales en Backblaze B2, configura una notificación por correo electrónico a tu dirección personal. Si el trabajo falla —debido a un corte de red, un problema de credenciales o un disco lleno—, recibirás un correo de fallo por la mañana en lugar de descubrir el problema semanas después durante un intento de recuperación.

**La conciencia del equipo** es igualmente valiosa. Cuando se completa un trabajo de sincronización en la nube compartido —por ejemplo, una sincronización semanal de una carpeta de proyecto compartida a Amazon S3—, notificar a todo el equipo confirma que la sincronización está al día sin que nadie tenga que iniciar sesión en RcloneView. Puedes configurar diferentes trabajos para notificar a diferentes destinatarios, de modo que las personas adecuadas estén informadas según su área de responsabilidad.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) y activa una licencia PLUS.
2. Abre **Notification Settings** e ingresa tu host SMTP, el puerto 587 y las credenciales de autenticación.
3. Haz clic en **Test** para enviar un correo de prueba y verificar la conexión.
4. Abre la configuración de cada trabajo de sincronización y agrega las direcciones de correo electrónico a notificar.
5. Opcionalmente, establece un umbral de tamaño de transferencia para que las notificaciones se activen solo cuando se mueva una cantidad significativa de datos.

Las notificaciones por correo electrónico SMTP en RcloneView PLUS cierran el ciclo del monitoreo automatizado de copias de seguridad, dándote la tranquilidad de saber que tus trabajos de sincronización en la nube se están ejecutando correctamente, o alertándote de inmediato cuando no es así.

---

**Guías relacionadas:**

- [Alertas de notificación para la finalización de sincronización con RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Control remoto de RcloneView por Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
