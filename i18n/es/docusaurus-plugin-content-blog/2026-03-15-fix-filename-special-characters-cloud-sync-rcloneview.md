---
slug: fix-filename-special-characters-cloud-sync-rcloneview
title: "Corrige los errores de nombre de archivo demasiado largo y caracteres especiales en la sincronización en la nube — Guía de RcloneView"
authors:
  - tayson
description: "¿La sincronización en la nube falla por los nombres de archivo? Las rutas largas, los caracteres especiales y las incompatibilidades de codificación provocan errores ocultos. Aprende a diagnosticar y corregir estos problemas en RcloneView."
keywords:
  - filename too long cloud
  - special characters cloud sync
  - cloud sync filename error
  - path too long error
  - rclone filename encoding
  - cloud storage filename limit
  - unicode filename cloud
  - onedrive path length limit
  - google drive filename issues
  - fix cloud sync file errors
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige los errores de nombre de archivo demasiado largo y caracteres especiales en la sincronización en la nube — Guía de RcloneView

> Tu trabajo de sincronización falla en 47 archivos. El error dice "filename too long" o "invalid character". Los archivos se ven perfectamente normales de tu lado. Bienvenido a la compatibilidad de nombres de archivo entre proveedores.

Cada proveedor de la nube tiene reglas diferentes sobre los nombres de archivo. Lo que es perfectamente válido en Google Drive puede ser ilegal en OneDrive. Una ruta que funciona en S3 puede exceder el límite de caracteres en Dropbox. Al sincronizar entre proveedores, estas incompatibilidades generan errores frustrantes que pueden bloquear trabajos de transferencia completos. Esta guía cubre los problemas más comunes y cómo solucionarlos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Problemas comunes de nombres de archivo

### Límites de longitud de ruta

| Proveedor | Longitud máxima de ruta |
|----------|----------------|
| OneDrive | 400 caracteres |
| SharePoint | 400 caracteres |
| Google Drive | 32,768 caracteres |
| S3 | 1,024 caracteres |
| Dropbox | 260 caracteres |
| Local (Windows) | 260 caracteres (por defecto) |

Las carpetas profundamente anidadas con nombres largos superan rápidamente los límites de OneDrive o Dropbox.

### Caracteres no permitidos

| Carácter | Google Drive | OneDrive | S3 | Dropbox |
|-----------|-------------|----------|-----|---------|
| `\` | Permitido | No permitido | Permitido | No permitido |
| `?` | Permitido | No permitido | Permitido | No permitido |
| `*` | Permitido | No permitido | Permitido | No permitido |
| `:` | Permitido | No permitido | Permitido | No permitido |
| `<` `>` `\|` | Permitido | No permitido | Permitido | No permitido |

Los archivos creados en Google Drive con `?` o `:` en sus nombres fallarán al sincronizarse con OneDrive.

### Espacios y puntos al final

OneDrive y Windows rechazan los nombres de archivo que terminan con espacios o puntos. Google Drive los permite. Esto genera fallos de sincronización invisibles.

### Problemas de Unicode y codificación

Los caracteres no ASCII (japonés, coreano, chino, emoji) funcionan en la mayoría de los proveedores, pero pueden causar problemas con sistemas antiguos o proveedores compatibles con S3 específicos.

## Cómo diagnosticar

### Revisa el historial de trabajos

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Find filename errors in job history" class="img-large img-center" />

El historial de trabajos muestra exactamente qué archivos fallaron y por qué. Busca mensajes de error que mencionen "invalid", "too long" o "not allowed".

### Identifica los archivos problemáticos

La terminal de RcloneView te permite ejecutar `rclone check` con salida detallada para listar todos los archivos que fallarían antes de intentar la transferencia.

## Soluciones

### Renombra los archivos problemáticos en el origen

La solución más limpia: renombra los archivos para eliminar caracteres no permitidos o acortar las rutas antes de sincronizar.

### Usa las opciones de codificación de rclone

Rclone puede codificar automáticamente los caracteres no permitidos durante la transferencia. Configura esto en los ajustes de remoto de RcloneView para gestionar la compatibilidad entre proveedores.

### Aplana estructuras de carpetas profundas

Si el problema es la longitud de la ruta, reorganiza las carpetas profundamente anidadas en una estructura más plana.

### Usa la comparación de carpetas para encontrar discrepancias

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find filename mismatches" class="img-large img-center" />

La comparación de carpetas resalta los archivos que existen en el origen pero no en el destino, a menudo los que fallaron debido a problemas de nombres de archivo.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ejecuta una sincronización de prueba** en una carpeta pequeña primero.
3. **Revisa el historial de trabajos** en busca de errores relacionados con nombres de archivo.
4. **Corrige los nombres de archivo** en el origen o configura la codificación.
5. **Vuelve a ejecutar y verifica** con la comparación de carpetas.

La solución suele ser más sencilla de lo que sugiere el mensaje de error.

---

**Guías relacionadas:**

- [Corrige los errores de permiso denegado](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Límites de tasa de la API en la nube](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)
- [Soluciona problemas de errores de rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
