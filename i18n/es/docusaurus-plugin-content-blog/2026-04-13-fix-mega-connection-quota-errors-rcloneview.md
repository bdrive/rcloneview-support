---
slug: fix-mega-connection-quota-errors-rcloneview
title: "Soluciona errores de conexión y cuota de Mega — Resuélvelos con RcloneView"
authors:
  - tayson
description: "Soluciona errores de sincronización de Mega en RcloneView, incluidos overquota, fallos de conexión y problemas de autenticación. Solución de problemas paso a paso para el almacenamiento en la nube de Mega."
keywords:
  - error de conexión de Mega
  - error de overquota de Mega
  - solucionar sincronización de Mega
  - solución de problemas de Mega en RcloneView
  - cuota de Mega excedida
  - error de autenticación de Mega
  - solucionar almacenamiento en la nube de Mega
  - error de Mega en RcloneView
  - problema de sincronización de Mega
  - solución de problemas de sincronización en la nube
tags:
  - RcloneView
  - mega
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona errores de conexión y cuota de Mega — Resuélvelos con RcloneView

> Soluciona los fallos de sincronización de Mega en RcloneView — resuelve errores de overquota, problemas de autenticación e interrupciones de conexión al sincronizar o transferir archivos de Mega.

Mega es un servicio de almacenamiento en la nube conocido por su cifrado de extremo a extremo y su generoso nivel gratuito de almacenamiento. Aunque funciona bien para el acceso manual a archivos, sincronizar grandes cantidades de datos a través de Mega usando RcloneView puede generar condiciones de error específicas: limitación por overquota, fallos de autenticación tras la expiración de la sesión e interrupciones de conexión. Esta guía cubre los errores más comunes de Mega en RcloneView y los pasos para resolverlos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Errores de overquota de Mega (límite de ancho de banda excedido)

Mega impone límites de ancho de banda de descarga — particularmente en cuentas gratuitas — y superarlos activa una limitación que se manifiesta como errores de "overquota" o velocidades de transferencia drásticamente reducidas. Cuando esto ocurre durante un trabajo de sincronización en RcloneView, es posible que veas errores que contienen `EOVERQUOTA` u otros códigos similares en la pestaña de registros (Log).

**Soluciones inmediatas:**
- **Espera a que se restablezca la ventana de cuota.** Los límites de ancho de banda de Mega se restablecen en una ventana de tiempo continua, normalmente de varias horas. Pausar las sincronizaciones y reintentarlas más tarde suele resolver el problema sin necesidad de otros cambios.
- **Reduce las transferencias simultáneas.** En la configuración avanzada del trabajo de sincronización, reduce el número de transferencias de archivos a 1 o 2. Menos conexiones simultáneas reduce la tasa de consumo de ancho de banda, ayudándote a mantenerte por debajo del umbral de cuota.
- **Usa el paso de filtrado** para limitar cada ejecución de sincronización a un subconjunto de archivos, evitando transferencias grandes en una sola ejecución que agoten rápidamente el ancho de banda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Mega sync settings to avoid overquota errors in RcloneView" class="img-large img-center" />

## Errores de autenticación e inicio de sesión

Mega utiliza autenticación por correo electrónico y contraseña en rclone. Los errores de autenticación normalmente aparecen como fallos de inicio de sesión o mensajes de sesión expirada. Causas comunes:

**Credenciales incorrectas:** Verifica tu correo electrónico y contraseña de Mega en el Administrador de remotos. Si cambiaste recientemente tu contraseña de Mega, edita el remoto en RcloneView y actualiza las credenciales. Navega a la pestaña Remoto > Administrador de remotos, selecciona tu remoto de Mega y haz clic en Editar.

**Autenticación de dos factores (2FA):** Si la 2FA está habilitada en tu cuenta de Mega, rclone puede tener dificultades con el inicio de sesión estándar por correo electrónico y contraseña. Consulta la documentación de Mega para saber si el acceso a la API con 2FA habilitada requiere algún token especial o configuración de contraseña de aplicación.

**Expiración de sesión:** Las operaciones de sincronización de larga duración pueden superar la vigencia de un token de sesión. Si un trabajo falla a mitad de camino con un error de autenticación, volver a editar el remoto para activar una nueva autenticación y luego reanudar la sincronización resuelve este problema.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authenticating Mega remote in RcloneView" class="img-large img-center" />

## Tiempos de espera de conexión y transferencias interrumpidas

Las conexiones de Mega pueden agotar el tiempo de espera durante transferencias grandes debido a inestabilidad de red o a la limitación de velocidad por parte del servidor de Mega. El motor de sincronización de RcloneView reintenta automáticamente las operaciones fallidas (por defecto: 3 reintentos), por lo que los fallos transitorios suelen recuperarse sin intervención. Si un trabajo falla constantemente después de todos los reintentos, revisa la pestaña de registros (Log) para ver mensajes de error específicos.

Para problemas persistentes de tiempo de espera, añade las banderas `--timeout` y `--contimeout` mediante Configuración > Rclone integrado > Banderas globales de Rclone para extender los valores de tiempo de espera de conexión. Esto le da a la API de Mega más tiempo para responder antes de que rclone declare un fallo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Mega sync error logs and job history in RcloneView" class="img-large img-center" />

## Reanudación de trabajos de sincronización de Mega interrumpidos

Si una sincronización grande de Mega se interrumpe — ya sea por overquota, tiempo de espera o suspensión del sistema — volver a ejecutar el mismo trabajo de sincronización en RcloneView continúa desde donde se quedó. El comportamiento de sincronización incremental de rclone compara el origen y el destino y solo transfiere los archivos que faltan o son diferentes, omitiendo todo lo que ya se transfirió correctamente.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Habilita el registro DEBUG (Configuración > Rclone integrado > Nivel de registro: DEBUG) para capturar información detallada de errores de las operaciones de Mega.
3. Reduce las transferencias simultáneas en la configuración avanzada de tu trabajo de sincronización si se producen errores de overquota.
4. Vuelve a editar el remoto de Mega en el Administrador de remotos para actualizar las credenciales si persisten los errores de autenticación.

Comprender las limitaciones de ancho de banda y sesión de Mega te ayuda a configurar trabajos de sincronización que se completen de forma fiable sin encontrar estas condiciones de error comunes.

---

**Guías relacionadas:**

- [Copia de seguridad de Mega a OneDrive con RcloneView](https://rcloneview.com/support/blog/backup-mega-to-onedrive-with-rcloneview)
- [Cifra y sincroniza archivos de Mega con RcloneView](https://rcloneview.com/support/blog/encrypt-sync-protect-mega-files-rcloneview)
- [Automatiza la copia de seguridad de Mega a Google Drive con RcloneView](https://rcloneview.com/support/blog/automate-mega-to-google-drive-backup)

<CloudSupportGrid />
