---
slug: fix-cloudflare-r2-upload-errors-rcloneview
title: "Cómo corregir errores de carga de Cloudflare R2 — Solución con RcloneView"
authors:
  - jay
description: "Diagnostica y corrige errores de carga y sincronización de Cloudflare R2 en RcloneView — abarcando permisos de tokens de API, configuración de endpoints, fallos en cargas multiparte y problemas de límite de tasa."
keywords:
  - errores de carga de Cloudflare R2 RcloneView
  - corregir errores de sincronización de R2
  - error de token de API de Cloudflare R2
  - fallo de carga multiparte de R2
  - solución de problemas de Cloudflare R2 en RcloneView
  - corregir error de permiso 403 de R2
  - problemas de conexión de Cloudflare R2
  - solución de carga de rclone R2
tags:
  - RcloneView
  - cloudflare-r2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo corregir errores de carga de Cloudflare R2 — Solución con RcloneView

> Cloudflare R2 tiene requisitos específicos de credenciales y endpoint que provocan errores cuando se configuran incorrectamente. Así es como diagnosticar y corregir los fallos más comunes de carga y sincronización de R2 en RcloneView.

Cloudflare R2 es un servicio de almacenamiento de objetos compatible con S3 que elimina las tarifas de salida de datos, lo que lo hace atractivo para la distribución de contenido y las cargas de trabajo de copia de seguridad. Sin embargo, el modelo de autenticación de R2 difiere ligeramente del S3 estándar de AWS: utiliza un ID de cuenta junto con tokens de API en lugar de los pares de claves estilo IAM que la mayoría de los usuarios de S3 conocen. Configurar correctamente estos detalles en RcloneView es la clave para resolver la mayoría de los errores de R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Error: 403 Forbidden o credenciales inválidas

El error más común en R2 es una respuesta `403 Forbidden`, generalmente causada por una configuración incorrecta del token de API. Al agregar Cloudflare R2 en **pestaña Remoto → Nuevo Remoto**, necesitas tres datos: el **Token de API de R2** (con permisos de lectura/escritura de objetos para el bucket específico), el **ID de cuenta** (que se encuentra en el panel de Cloudflare) y la URL del endpoint de R2 con el formato `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.

Un error común es usar la Clave de API Global en lugar de un token de API específico de R2. Genera un token de API dedicado en la sección R2 de Cloudflare, bajo **Manage API Tokens**, y asegúrate de que tenga al menos permisos de "Object Read & Write" para el bucket de destino. Si obtienes errores `403` al listar el bucket pero no al acceder a archivos individuales, es posible que al token le falten permisos de listado a nivel de bucket — vuelve a generarlo con el alcance "Account → R2 → Read/Write".

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Cloudflare R2 credentials in RcloneView" class="img-large img-center" />

## Error: Carga multiparte fallida o cargas incompletas

R2 admite cargas multiparte (necesarias para archivos de más de 100 MB), pero las cargas multiparte incompletas pueden dejar partes huérfanas en tu bucket y provocar que las cargas posteriores del mismo nombre de archivo fallen. En la **pestaña Log** de RcloneView, busca mensajes como `upload multipart failed` o `NoSuchUpload`.

La solución consiste en primero limpiar las cargas multiparte huérfanas de tu bucket de R2 usando el panel de Cloudflare o la terminal de rclone dentro de RcloneView. Luego, vuelve a intentar la carga con un número menor de flujos multiparte concurrentes en la Configuración Avanzada del trabajo. Establecer `--s3-upload-concurrency 4` mediante la opción **Global Rclone Flags** en Configuración puede estabilizar las cargas grandes a R2.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Retrying a failed R2 upload job in RcloneView" class="img-large img-center" />

## Errores de endpoint y región

Cloudflare R2 no utiliza los códigos de región estándar de AWS. Si ves errores `NoSuchBucket` o `InvalidLocationConstraint`, verifica la URL del endpoint en la configuración de tu remoto. El formato correcto es `https://<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com` — el ID de cuenta debe coincidir exactamente con tu cuenta de Cloudflare. El campo de región debe dejarse vacío o establecerse en `auto` para R2.

Si copiaste el endpoint de otro servicio S3, verifica que comience con el prefijo de tu ID de cuenta y no con una URL de región de AWS como `s3.us-east-1.amazonaws.com`.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring R2 upload after fixing configuration errors" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifica que tu Token de API de R2 tenga permisos de lectura/escritura de objetos en el bucket de destino.
3. Confirma que la URL del endpoint use el formato `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.
4. Para archivos grandes, reduce la concurrencia de cargas multiparte y limpia las cargas huérfanas.

Configurado correctamente, Cloudflare R2 con RcloneView ofrece un excelente rendimiento para copias de seguridad y archivado con un costo predecible.

---

**Guías relacionadas:**

- [Administra el almacenamiento en la nube de Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Corrige errores de permiso de acceso denegado en S3 con RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Corrige fallos de carga multiparte en S3 con RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
