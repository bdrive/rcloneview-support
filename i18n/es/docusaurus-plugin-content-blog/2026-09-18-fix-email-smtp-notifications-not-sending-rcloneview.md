---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "Solucionar Notificaciones de Correo SMTP que No se Envían — Guía de Solución de Problemas para RcloneView"
authors:
  - morgan
description: "Solucione las notificaciones de correo SMTP de RcloneView que no se envían. Resuelva el bloqueo de puertos, errores de autenticación y una configuración incorrecta del umbral para las alertas de trabajos."
keywords:
  - solucionar notificaciones de correo de RcloneView
  - notificación SMTP no se envía
  - error de alerta de correo de RcloneView
  - fallo de autenticación SMTP
  - solución de problemas de notificación de trabajos de sincronización
  - puerto 587 bloqueado SMTP
  - alerta de copia de seguridad no recibida
  - notificaciones RcloneView PLUS
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar Notificaciones de Correo SMTP que No se Envían — Guía de Solución de Problemas para RcloneView

> Cuando las notificaciones por correo electrónico de RcloneView dejan de llegar, la causa casi siempre es la configuración SMTP, el bloqueo de puertos o un umbral de transferencia demasiado alto — aquí se explica cómo diagnosticar y solucionar cada caso.

Las alertas por correo solo son útiles si realmente llegan. Cuando una copia de seguridad programada falla silenciosamente y la notificación nunca llega a la bandeja de entrada, se pierde todo el sentido de la supervisión desatendida. El sistema de notificaciones SMTP de RcloneView depende de una serie de ajustes fáciles de configurar mal, y esta guía repasa los puntos de fallo más comunes para que las alertas de tus trabajos vuelvan a funcionar de forma fiable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Errores de autenticación y de host

La causa más frecuente de fallos silenciosos en las notificaciones es una autenticación SMTP incorrecta. Si tu proveedor de correo requiere una contraseña específica de aplicación (algo habitual en cuentas de Gmail y Microsoft 365 con autenticación de dos factores activada), introducir tu contraseña normal de la cuenta hará que falle la conexión, aunque el campo la acepte sin un error evidente. Genera una contraseña de aplicación en la configuración de seguridad de tu proveedor y utilízala en su lugar.

Comprueba también el campo **Host SMTP** — un error tipográfico como `smtp.gmial.com`, o usar el host IMAP de tu proveedor en lugar del host SMTP, hará que falle la conexión. Después de corregir las credenciales, utiliza siempre el botón **Probar** antes de confiar en la configuración para trabajos reales; esto aísla los problemas de autenticación de los problemas de configuración a nivel de trabajo.

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## Bloqueo de puertos y problemas de red

RcloneView recomienda el **puerto 587** con STARTTLS para la entrega de SMTP. Si ejecutas RcloneView en una red con reglas de firewall de salida restrictivas — algo habitual en redes corporativas, algunos proveedores de VPS y ciertos ISP residenciales — el puerto 587 (y especialmente el puerto 25) puede estar completamente bloqueado, provocando que el correo de prueba se agote en lugar de fallar con un error claro.

Si la prueba se agota constantemente en lugar de devolver un error de autenticación, el problema es casi con toda seguridad de nivel de red, no de credenciales. Prueba a cambiar al puerto 465 (SSL) si tu proveedor lo admite, o verifica con tu administrador de red que el tráfico SMTP saliente esté permitido. Si te conectas a una instancia externa de rclone en un servidor remoto o un contenedor Docker, confirma que las reglas de salida de ese servidor también permiten el tráfico SMTP, ya que la conexión se origina desde donde realmente se ejecuta rclone.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## Configuración incorrecta del umbral y de los destinatarios

Si SMTP conecta y las pruebas tienen éxito, pero las notificaciones de los trabajos reales nunca llegan, revisa el umbral de notificación a nivel de trabajo. RcloneView permite establecer un tamaño mínimo de transferencia (en MB o GB) antes de enviar una notificación — esto es útil para reducir la fatiga de alertas en trabajos que se ejecutan con frecuencia y mueven poco o ningún dato, pero también significa que un trabajo que transfiere solo unos pocos archivos puede quedar por debajo del umbral y no generar ningún correo. Reduce o elimina temporalmente el umbral para confirmar si esta es la causa.

Verifica también que las direcciones de los destinatarios estén introducidas correctamente a nivel de trabajo, no solo en la configuración SMTP global — RcloneView requiere que los destinatarios de notificaciones se configuren por trabajo, de modo que una conexión SMTP que funciona globalmente pero sin destinatarios asignados a un trabajo concreto nunca enviará una alerta para ese trabajo. Las notificaciones por correo son una función de la licencia PLUS, así que si SMTP, los destinatarios y los umbrales están todos correctos pero las alertas siguen sin llegar, confirma tu nivel de licencia antes de seguir investigando.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho, y abre la Configuración de notificaciones.
2. Vuelve a introducir las credenciales SMTP usando una contraseña específica de aplicación si tu proveedor la requiere, y luego haz clic en **Probar**.
3. Si la prueba se agota, cambia del puerto 587 al puerto 465 o revisa las reglas de firewall que bloquean el SMTP saliente.
4. Revisa el umbral de notificación y la lista de destinatarios de cada trabajo para confirmar que están configurados como se espera.

Con las credenciales SMTP, el acceso de red y la configuración a nivel de trabajo verificados, las notificaciones por correo se convierten en una red de seguridad fiable para cada sincronización programada que se ejecuta en segundo plano.

---

**Guías relacionadas:**

- [Notificaciones de trabajos por correo electrónico SMTP: mantente informado del estado de sincronización en RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [Configura notificaciones y alertas para la sincronización en la nube en RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Solucionar la sincronización programada que no se ejecuta — Diagnostica trabajos automatizados en la nube en RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
