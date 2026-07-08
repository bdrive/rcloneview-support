---
slug: fix-pcloud-sync-errors-rcloneview
title: "Solucionar errores de sincronización de pCloud — Resuelve los problemas más comunes de pCloud con RcloneView"
authors:
  - tayson
description: "Soluciona los errores comunes de sincronización de pCloud en RcloneView — corrige la expiración del token OAuth, los límites de tasa de la API, las discrepancias de región de servidor y los problemas de subida lenta."
keywords:
  - pCloud sync errors
  - RcloneView pCloud
  - pCloud troubleshooting
  - OAuth token expired
  - pCloud Europe US server
  - pCloud API rate limit
  - cloud sync fix
  - rclone pCloud
tags:
  - RcloneView
  - pcloud
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de pCloud — Resuelve los problemas más comunes de pCloud con RcloneView

> Los fallos de sincronización de pCloud casi siempre se deben a uno de un puñado de problemas conocidos — aquí te explicamos cómo diagnosticarlos y solucionar los más comunes en RcloneView.

pCloud es un proveedor de almacenamiento en la nube centrado en la privacidad, con servidores tanto en Estados Unidos como en Europa, y esa división regional es la causa raíz de muchos fallos de sincronización misteriosos. Combinado con la expiración del token OAuth y los límites de tasa de la API, pCloud puede generar errores confusos que parecen no estar relacionados con el problema real. Esta guía repasa los problemas más comunes de pCloud encontrados en RcloneView y cómo resolver cada uno.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Expiración del token OAuth y reautorización

pCloud utiliza OAuth para la autenticación, lo que significa que RcloneView mantiene un token de acceso que caduca periódicamente. Cuando el token expira, los trabajos de sincronización fallarán con errores de autenticación como `401 Unauthorized` o `invalid_token`. La solución es sencilla: ve a tu lista de remotos en RcloneView, selecciona el remoto de pCloud y elige **Reautorizar** (o elimina y vuelve a crear el remoto). Esto activa un nuevo flujo OAuth en tu navegador, emitiendo un nuevo token válido.

Para evitar interrupciones repetidas por reautorización, asegúrate de que tu remoto de pCloud en RcloneView se haya creado con la región de servidor correcta seleccionada (ver más abajo). Una discrepancia de región puede hacer que los tokens parezcan válidos pero fallen en las llamadas reales a la API, lo cual se ve idéntico a la expiración del token.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorizing a pCloud remote in RcloneView" class="img-large img-center" />

## Discrepancia de región de servidor: Europa vs. EE. UU.

Este es el problema más común específico de pCloud. Las cuentas de pCloud creadas en Europa se alojan en servidores europeos (`eapi.pcloud.com`), mientras que las cuentas de EE. UU. usan el endpoint predeterminado de EE. UU. (`api.pcloud.com`). Si creaste una cuenta de pCloud con una región europea pero RcloneView está configurado para usar el endpoint de EE. UU., todas las llamadas a la API fallarán.

Al configurar un remoto de pCloud en RcloneView, busca el campo **Hostname** o **API Endpoint** durante la configuración. Para cuentas europeas, configúralo como `eapi.pcloud.com`. Si tu remoto se creó sin especificar esto, elimínalo y vuelve a crearlo con el hostname correcto. Esta única corrección resuelve la gran mayoría de los fallos de conexión de pCloud.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="pCloud remote configuration showing region endpoint in RcloneView" class="img-large img-center" />

## Límites de tasa de la API y subidas lentas

pCloud aplica límites de tasa de la API, particularmente para cuentas del nivel gratuito. Cuando alcanzas estos límites, rclone recibirá errores como `too many requests` o las transferencias se ralentizarán drásticamente. RcloneView respeta la lógica de reintento integrada de rclone, pero puedes ajustarla aún más modificando las banderas `--retries` y `--retries-sleep` en la configuración de **Global Rclone Flags**.

Para las subidas lentas en particular, el nivel gratuito de pCloud tiene restricciones de ancho de banda que son independientes del límite de tasa. Considera dividir los trabajos de sincronización grandes en lotes más pequeños usando reglas de filtro, o programar los trabajos durante horas de menor actividad con una programación de licencia PLUS. Si las subidas agotan el tiempo de espera con frecuencia, añadir `--timeout 300s` a tus banderas globales da a las transferencias más tiempo para completarse antes de que rclone las considere fallidas.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring pCloud transfer progress in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Si ves errores de autenticación, reautoriza tu remoto de pCloud en el panel de configuración de remotos.
3. Comprueba si tu cuenta de pCloud es de región UE y actualiza el endpoint a `eapi.pcloud.com` si es necesario.
4. Para errores de límite de tasa, añade `--retries 10 --retries-sleep 30s` a Global Rclone Flags en las preferencias.
5. Ejecuta una **simulación (dry run)** antes de cada sincronización para confirmar que el remoto es accesible y que los archivos correctos están dentro del alcance.

La mayoría de los problemas de sincronización de pCloud en RcloneView se resuelven con uno de estos pasos — solo la corrección del endpoint de región representa la mayoría de los fallos reportados.

---

**Guías relacionadas:**

- [Gestionar Koofr — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Gestionar Proton Drive — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Solucionar la expiración del token OAuth en la nube y problemas de actualización con RcloneView](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)

<CloudSupportGrid />
