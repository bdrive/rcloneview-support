---
slug: fix-hetzner-storage-box-connection-errors-rcloneview
title: "Corrige errores de conexión de Hetzner Storage Box — Solución de problemas con RcloneView"
authors:
  - kai
description: "Soluciona fallos de conexión de Hetzner Storage Box en RcloneView, desde una mala configuración del endpoint hasta errores de credenciales y de montaje."
keywords:
  - error de conexión de Hetzner Storage Box
  - solución de problemas de Hetzner S3
  - arreglar sincronización en la nube de Hetzner
  - errores de almacenamiento de objetos de Hetzner
  - RcloneView Hetzner
  - error de configuración del endpoint S3
  - conexión rechazada de almacenamiento en la nube
  - configuración de credenciales de Hetzner
tags:
  - RcloneView
  - troubleshooting
  - hetzner
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige errores de conexión de Hetzner Storage Box — Solución de problemas con RcloneView

> Los fallos de conexión al almacenamiento de objetos compatible con S3 de Hetzner casi siempre se deben a un endpoint, región o par de credenciales incorrectos — la prueba de conexión de RcloneView muestra exactamente cuál de ellos falla antes de que pierdas tiempo con una sincronización completa.

El almacenamiento de objetos de Hetzner se accede a través del protocolo compatible con S3 de rclone, lo que significa que el remoto necesita una Access Key, una Secret Key y un endpoint introducidos correctamente — a diferencia de los proveedores basados en OAuth, donde un inicio de sesión en el navegador gestiona la autenticación automáticamente. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, pero los remotos compatibles con S3 como Hetzner requieren un poco más de cuidado al configurarlos que los remotos OAuth de un solo clic. Así se diagnostican los fallos de conexión más comunes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verificar que el endpoint y la región coincidan

La causa más común de un error de conexión con Hetzner es un endpoint que no coincide con la región donde se creó la storage box. Los endpoints de almacenamiento de objetos de Hetzner son específicos de cada región, y pegar el equivocado — o dejar un endpoint copiado de otro proveedor compatible con S3 — produce un fallo de conexión que parece idéntico a una credencial incorrecta.

<img src="/support/images/en/blog/new-remote.png" alt="Editar la configuración del remoto de Hetzner Storage Box en RcloneView" class="img-large img-center" />

Abre Remote Manager, selecciona el remoto de Hetzner y comprueba el campo del endpoint contra el valor exacto mostrado en la Hetzner Cloud Console para esa storage box en concreto. Los desajustes de región son fáciles de pasar por alto porque el remoto suele seguir cargando la pantalla de configuración sin error — el fallo solo aparece cuando RcloneView intenta realmente listar archivos.

## Probar la conexión antes de una sincronización completa

En lugar de descubrir un problema de credenciales a mitad de la transferencia, usa la prueba de conexión de RcloneView al añadir o editar el remoto. Si la prueba falla con un error de autenticación, sospecha antes del Access Key ID o la Secret Access Key que del endpoint — comprueba si hay un espacio en blanco al final o si una clave se regeneró en la consola de Hetzner después de configurar por primera vez el remoto en RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar archivos locales con Hetzner Storage Box tras corregir un error de conexión" class="img-large img-center" />

Si la prueba tiene éxito pero un trabajo de sincronización sigue fallando a mitad de camino, revisa la pestaña Log en la Info View inferior — Hetzner a veces devuelve respuestas de límite de tasa durante subidas por lotes grandes, y el registro detallado mostrará el estado HTTP concreto en lugar de un tiempo de espera genérico.

## Confirmar el acceso del firewall y la red

Los firewalls corporativos y algunas configuraciones de VPN bloquean el tráfico saliente hacia endpoints S3 menos comunes mientras permiten el tráfico hacia proveedores importantes como Amazon S3. Si la prueba de conexión se queda colgada en lugar de fallar rápido, confirma que la máquina puede alcanzar directamente el endpoint de Hetzner — un bloqueo a nivel de red se verá idéntico a un remoto mal configurado desde dentro de RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisar el historial de trabajos tras resolver un problema de conexión con Hetzner" class="img-large img-center" />

Una vez que un trabajo se ejecuta correctamente, Job History guarda un registro de la velocidad de transferencia y el número de archivos, lo cual resulta útil para confirmar que la solución se mantuvo durante toda una sincronización completa.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Remote Manager y vuelve a comprobar el endpoint de Hetzner contra la región mostrada en la Hetzner Cloud Console.
3. Vuelve a introducir la Access Key y la Secret Key si la prueba de conexión falla con un error de autenticación.
4. Ejecuta una sincronización Dry Run antes de la transferencia real para detectar cualquier problema restante sin mover datos.

Un endpoint y un par de credenciales correctamente configurados resuelven la gran mayoría de los problemas de conexión con Hetzner, permitiendo que los trabajos de sincronización y copia de seguridad se ejecuten de forma fiable en adelante.

---

**Guías relacionadas:**

- [Gestiona Hetzner Storage Box — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Corrige errores de conexión y autenticación de MinIO con RcloneView](https://rcloneview.com/support/blog/fix-minio-connection-authentication-errors-rcloneview)
- [Corrige errores de conexión de Linode Object Storage con RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)

<CloudSupportGrid />
