---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "Cifra tus copias de seguridad en la nube con Rclone Crypt — Cifrado de conocimiento cero para Google Drive, S3 y más"
authors:
  - tayson
description: "Cifra tus archivos en la nube antes de subirlos con el remoto crypt de rclone. Guía completa de cifrado de conocimiento cero para Google Drive, OneDrive, S3 y cualquier proveedor en la nube usando RcloneView."
keywords:
  - encrypt cloud storage
  - rclone crypt remote
  - zero knowledge encryption cloud
  - encrypt google drive files
  - encrypted cloud backup
  - rclone encryption guide
  - encrypt onedrive files
  - client side encryption cloud
  - encrypt s3 files
  - encrypted cloud storage tool
tags:
  - encryption
  - crypt
  - security
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cifra tus copias de seguridad en la nube con Rclone Crypt — Cifrado de conocimiento cero para Google Drive, S3 y más

> Cuando subes archivos a Google Drive, Google puede leerlos. Cuando almacenas datos en S3, Amazon puede acceder a ellos. El remoto crypt de rclone cambia esto: tus archivos se cifran antes de salir de tu máquina.

Los proveedores de la nube cifran los datos "en reposo" en sus servidores, pero ellos tienen las claves. Esto significa que el proveedor (y potencialmente agencias gubernamentales, hackers que vulneren al proveedor, o empleados malintencionados) pueden acceder a tus archivos. El remoto crypt de rclone ofrece un verdadero cifrado de conocimiento cero: los archivos se cifran en tu máquina antes de subirlos, y solo tú tienes la clave.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Qué es un remoto crypt?

Un remoto crypt es una capa virtual que se sitúa encima de cualquier remoto en la nube existente:

```
Your Files → Crypt Remote (encrypts) → Cloud Remote (uploads encrypted blobs)
```

Cuando lees archivos:

```
Cloud Remote (encrypted blobs) → Crypt Remote (decrypts) → Your Files
```

El proveedor de la nube almacena solo datos cifrados. Los nombres de archivo, los nombres de directorio y el contenido de los archivos están todos cifrados. El proveedor no puede ver qué estás almacenando.

## Cómo funciona el cifrado de crypt

### Estándares de cifrado

- **Contenido del archivo**: AES-256 en modo CTR con autenticación HMAC-SHA256.
- **Nombres de archivo**: AES-256 EME (encrypt-mix-encrypt) con ofuscación opcional.
- **Nombres de directorio**: Igual que los nombres de archivo (cifrados por defecto).

### Qué se cifra

| Componente | Modo estándar | Con cifrado de nombres |
|-----------|:---:|:---:|
| Contenido de los archivos | ✅ Cifrado | ✅ Cifrado |
| Nombres de archivo | ❌ Visible | ✅ Cifrado |
| Nombres de directorio | ❌ Visible | ✅ Cifrado |
| Tamaños de archivo | ❌ Visible (ligeramente ajustado) | ❌ Visible (ligeramente ajustado) |
| Estructura de directorios | ❌ Visible | ✅ Cifrado |

**Recomendación**: Activa siempre el cifrado de nombres de archivo para una privacidad máxima.

## Configurar crypt en RcloneView

### Paso 1: Ten un remoto existente

Primero, agrega tu almacenamiento en la nube como un remoto normal (por ejemplo, Google Drive, S3, Backblaze B2):

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### Paso 2: Crea un remoto crypt encima

Agrega un nuevo remoto de tipo **Crypt**. Configúralo para que apunte a una carpeta en tu remoto existente:

- **Remoto**: `gdrive:encrypted-backup/` (una carpeta en tu Google Drive).
- **Cifrado de nombres de archivo**: Estándar (cifrado).
- **Cifrado de nombres de directorio**: Verdadero.
- **Contraseña**: Una contraseña fuerte (esta es tu clave de cifrado — **no la pierdas**).
- **Password2 (salt)**: Una contraseña adicional para mayor seguridad.

### Paso 3: Usa el remoto crypt

Ahora, cuando navegues o transfieras archivos a través del remoto crypt, todo se cifra de forma transparente. Sube a través del remoto crypt → los archivos llegan cifrados a Google Drive. Descarga a través del remoto crypt → los archivos se descifran automáticamente.

## Flujo de trabajo de copia de seguridad cifrada

### Configura un trabajo de copia de seguridad cifrada

Crea un trabajo de copia (Copy) desde tu almacenamiento local (u otra nube) hacia el remoto crypt:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### Programa copias de seguridad cifradas diarias

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### Qué ve el proveedor de la nube

Si alguien navega por tu Google Drive, ve:

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

Los nombres de archivo son ilegibles. El contenido está cifrado. Incluso la estructura de carpetas está oculta.

### Lo que tú ves (a través del remoto crypt)

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

Archivos normales y legibles — descifrados al vuelo.

## Casos de uso prácticos

### 1) Copia de seguridad cifrada de Google Drive

Tu Google Drive personal para uso diario. Una copia de seguridad cifrada de archivos sensibles en el mismo Google Drive:

```
gdrive:Documents/     ← Normal files (Google can see)
gdrive-crypt:Sensitive/ ← Encrypted (Google sees only blobs)
```

### 2) Archivo cifrado en S3

Archiva datos sensibles en S3 con cifrado del lado del cliente. Incluso si tu cuenta de AWS se ve comprometida, los datos son ilegibles sin tu contraseña.

### 3) Almacenamiento para HIPAA/cumplimiento normativo

Datos de salud, legales y financieros que requieren cifrado en reposo. Los remotos crypt ofrecen un cifrado verificable del lado del cliente.

### 4) Protección de datos transfronteriza

Almacenar datos en regiones de la nube donde no confías plenamente en las políticas de acceso a datos del proveedor.

## Verifica las copias de seguridad cifradas

Usa la Comparación de carpetas a través del remoto crypt para verificar que tu copia de seguridad cifrada coincide con el origen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## Advertencias críticas

### No pierdas tu contraseña

No existe recuperación de tipo "olvidé mi contraseña". Si pierdes tu contraseña de crypt, tus datos cifrados quedan permanentemente inaccesibles. Nadie — ni rclone, ni Google, ni Amazon — puede recuperarlos.

**Guarda tu contraseña de forma segura:**

- Anótala y guárdala en una caja fuerte física.
- Usa un gestor de contraseñas (separado de la nube que estás cifrando).
- Conserva al menos dos copias en ubicaciones diferentes.

### No modifiques los archivos cifrados directamente

Nunca edites los blobs cifrados directamente en el proveedor de la nube. Accede a ellos siempre a través del remoto crypt. La modificación directa corromperá los archivos.

### Impacto en el rendimiento

El cifrado añade algo de sobrecarga de CPU:

- Insignificante en ordenadores de escritorio y portátiles modernos.
- Perceptible en Raspberry Pi o dispositivos de baja potencia.
- No afecta la velocidad de red (el cifrado ocurre antes de la subida).

## Múltiples remotos crypt

Puedes crear diferentes remotos crypt para distintos propósitos:

| Remoto crypt | Apunta a | Contraseña | Caso de uso |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | Contraseña A | Archivos personales sensibles |
| crypt-work | s3:work-encrypted/ | Contraseña B | Documentos de trabajo |
| crypt-archive | b2:archive-encrypted/ | Contraseña C | Archivo a largo plazo |

Cada uno usa una contraseña diferente y un almacenamiento subyacente distinto.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega tu almacenamiento en la nube** como un remoto normal.
3. **Crea un remoto crypt** que apunte a una carpeta en esa nube.
4. **Establece una contraseña fuerte** y guárdala de forma segura.
5. **Usa el remoto crypt** para todas las operaciones con archivos sensibles.
6. **Programa copias de seguridad cifradas** para automatizarlas.

Tus datos. Tus claves. Tu control.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Almacenamiento en la nube compatible con HIPAA](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />
