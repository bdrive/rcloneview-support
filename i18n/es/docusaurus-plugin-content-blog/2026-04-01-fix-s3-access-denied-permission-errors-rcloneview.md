---
slug: fix-s3-access-denied-permission-errors-rcloneview
title: "Solucionar errores de Acceso Denegado y Permisos de S3 con RcloneView"
authors:
  - tayson
description: "Diagnostica y soluciona errores de 'Access Denied', 403 Forbidden y credenciales en rclone y RcloneView para S3. Cubre políticas de IAM, políticas de bucket, ACL y configuración de credenciales."
keywords:
  - fix s3 access denied rclone
  - s3 403 forbidden rclone
  - rclone s3 permission error
  - aws s3 access denied rcloneview
  - iam policy s3 rclone
  - s3 bucket policy error
  - rclone aws credentials error
  - s3 acl permission denied
  - troubleshoot s3 rclone
  - fix s3 errors rcloneview
tags:
  - amazon-s3
  - aws-s3
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de Acceso Denegado y Permisos de S3 con RcloneView

> "Access Denied" de un proveedor de almacenamiento compatible con S3 casi siempre significa una configuración incorrecta de permisos, no un error del programa. Esta guía repasa todas las causas comunes y su solución, desde políticas de IAM hasta ACL de bucket y errores tipográficos en las credenciales.

Los errores de permisos de S3 son frustrantes porque suelen ser opacos: la API devuelve `403 Access Denied` sin explicar qué permiso específico falta. El problema podría ser la política de IAM, la política del bucket, la ACL del bucket, la ACL del objeto, la configuración de cifrado o simplemente credenciales incorrectas. RcloneView muestra estos errores claramente en el historial de trabajos; esta guía te ayuda a rastrearlos hasta su origen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnóstico del error

El primer paso es leer el mensaje de error exacto en el historial de trabajos de RcloneView o en la salida de la terminal:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View S3 errors in RcloneView job history" class="img-large img-center" />

Patrones de error comunes y lo que indican:

| Mensaje de error | Causa probable |
|--------------|-------------|
| `AccessDenied: Access Denied` | Política de IAM/bucket; credenciales incorrectas |
| `403 Forbidden` | Bloqueo por política de bucket o ACL |
| `NoCredentialProviders: no valid credentials` | Credenciales no configuradas |
| `InvalidAccessKeyId` | Clave de acceso incorrecta o error tipográfico |
| `SignatureDoesNotMatch` | Clave secreta incorrecta |
| `AllAccessDisabled: All access to this object has been disabled` | Configuración de S3 Block Public Access |
| `AccountProblem` | Problema con la cuenta de AWS (facturación, suspensión) |

## Solución 1: Credenciales incorrectas o faltantes

La causa más común de `AccessDenied` es simplemente tener credenciales incorrectas en la configuración del remoto de RcloneView.

**Verifica tus credenciales:**
1. Abre **Remotes** en RcloneView.
2. Selecciona el remoto de S3 y haz clic en **Edit**.
3. Verifica que **Access Key ID** y **Secret Access Key** coincidan exactamente con lo que aparece en tu consola de AWS IAM (o consola equivalente del proveedor).
4. Vuelve a pegar las claves si tienes dudas: los espacios en blanco invisibles son una fuente común de errores tipográficos.

Para Wasabi, IDrive e2 y otros proveedores compatibles con S3, verifica también que la **Endpoint URL** coincida con el endpoint actual del proveedor para tu región.

## Solución 2: Permisos de IAM insuficientes

Si las credenciales son correctas, es probable que al usuario o rol de IAM le falten los permisos de S3 necesarios.

**Permisos mínimos para que RcloneView funcione:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

Adjunta esta política al usuario o rol de IAM que utiliza RcloneView. Para listar todos los buckets, agrega también `s3:ListAllMyBuckets` en `Resource: "*"`.

<img src="/support/images/en/blog/new-remote.png" alt="Verify S3 credentials in RcloneView remote settings" class="img-large img-center" />

## Solución 3: Política de bucket que bloquea el acceso

Una política de bucket puede anular los permisos de IAM. Revisa la política del bucket en la consola de AWS:

1. Ve a **S3 → Your Bucket → Permissions → Bucket Policy**.
2. Busca cualquier declaración `Deny` que pueda aplicarse a tu usuario de IAM.
3. Revisa también la configuración de **Block Public Access**; si intentas establecer ACL públicas en los objetos, esta configuración lo bloqueará.

Un error común es una declaración `Deny` general que bloquea accidentalmente a tu usuario de IAM:

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:*",
  "Condition": {
    "Bool": { "aws:SecureTransport": "false" }
  }
}
```

Esta es en realidad una política válida de aplicación de HTTPS; rclone usa HTTPS de forma predeterminada, así que esto no debería causar problemas a menos que hayas forzado explícitamente el uso de HTTP.

## Solución 4: Problemas de ACL a nivel de objeto

Algunas configuraciones de S3 exigen que los objetos subidos usen una ACL específica (`bucket-owner-full-control` en configuraciones entre cuentas). Si estás subiendo archivos al bucket de otra persona y obtienen `Access Denied` al leer tus subidas:

Agrega `--s3-acl bucket-owner-full-control` en el campo **Custom flags** de RcloneView para el trabajo.

## Solución 5: Requisitos de cifrado del lado del servidor (SSE)

Algunos buckets requieren que los objetos se suban con una clave de cifrado específica (SSE-KMS). Subir archivos sin la clave produce Access Denied.

En los flags personalizados del trabajo de RcloneView:
```
--s3-sse aws:kms --s3-sse-kms-key-id arn:aws:kms:us-east-1:123456789:key/your-key-id
```

## Solución 6: MFA Delete u Object Lock

Si Object Lock o MFA Delete está habilitado en el bucket, ciertas operaciones (eliminar, sobrescribir) quedan bloqueadas sin pasos de autenticación adicionales. Para trabajos de solo lectura (Copy, no Sync), esto no importa. Para trabajos de Sync que necesitan eliminar archivos huérfanos, necesitarás una de estas opciones:

- Un usuario con permisos elevados y MFA, o
- Un modo de trabajo que no elimine archivos (Copy en lugar de Sync).

## Solución 7: Discrepancia de región

Conectarse a un bucket de S3 en `us-west-2` a través del endpoint `us-east-1` a veces devuelve Access Denied. Asegúrate de que el endpoint o la región de tu remoto coincida con la región real del bucket.

En RcloneView, edita el remoto y establece la **Region** al valor correcto (por ejemplo, `us-west-2`).

## Resumen de la lista de verificación

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Debug S3 issues systematically" class="img-large img-center" />

Sigue esta lista de verificación en orden:

1. ✅ Las credenciales (clave de acceso y clave secreta) están copiadas correctamente sin errores tipográficos
2. ✅ El usuario/rol de IAM tiene permisos ListBucket, GetObject, PutObject en el bucket
3. ✅ Ninguna declaración Deny en la política del bucket afecta a este usuario
4. ✅ La configuración de Block Public Access no impide las operaciones previstas
5. ✅ La región/endpoint coincide con la región real del bucket
6. ✅ Se cumplen los requisitos de cifrado (SSE-KMS) si el bucket los exige
7. ✅ Se cumplen los requisitos de ACL para subidas entre cuentas

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Revisa el historial de trabajos** para ver el mensaje de error exacto.
3. **Compara el error** con la solución correspondiente arriba.
4. **Actualiza las credenciales o políticas de IAM** y vuelve a ejecutar el trabajo.

Los errores de permisos de S3 casi siempre son problemas de configuración, no errores del programa. Un diagnóstico metódico los elimina rápidamente.

---

**Guías relacionadas:**

- [Solucionar errores de cuota de la API de Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Copia de seguridad inmutable con S3 Object Lock](https://rcloneview.com/support/blog/immutable-s3-object-lock-rcloneview)
- [Solucionar errores de Rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
