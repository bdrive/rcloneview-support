---
slug: fix-digitalocean-spaces-connection-errors-rcloneview
title: "Solucionar errores de conexión de DigitalOcean Spaces — Diagnostica problemas de endpoint y claves con RcloneView"
authors:
  - jay
description: "Soluciona errores de conexión de DigitalOcean Spaces como acceso denegado y discrepancia de firma comprobando el endpoint, la región y las claves en RcloneView."
keywords:
  - solucionar error de conexión de DigitalOcean Spaces
  - DigitalOcean Spaces acceso denegado
  - Spaces SignatureDoesNotMatch
  - endpoint y región de DigitalOcean Spaces
  - solución de problemas de almacenamiento compatible con S3
  - rclone DigitalOcean Spaces
  - RcloneView DigitalOcean Spaces
  - clave de acceso de Spaces
tags:
  - RcloneView
  - troubleshooting
  - tips
  - digitalocean-spaces
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de conexión de DigitalOcean Spaces — Diagnostica problemas de endpoint y claves con RcloneView

> La mayoría de los fallos de conexión de DigitalOcean Spaces se reducen a tres ajustes: el endpoint, la región y las claves de acceso.

Añadiste un remoto de Spaces, pero la lista de buckets está vacía, o cada solicitud devuelve acceso denegado o un error de firma. Como Spaces es un servicio compatible con S3, la causa suele ser una pequeña discrepancia en la configuración del remoto. RcloneView te permite inspeccionar y corregir el remoto, y luego volver a probarlo desde la misma ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprueba primero el endpoint y la región

Los endpoints de Spaces son específicos de cada región, con el formato `<region>.digitaloceanspaces.com`, por ejemplo `nyc3.digitaloceanspaces.com`. Si la región del endpoint difiere de la región donde se creó el Space, las solicitudes fallan aunque tus claves sean correctas. Abre Remote Manager desde la pestaña Remote, edita el remoto y compara el endpoint con la región que aparece en tu panel de control de DigitalOcean.

Usa el endpoint regional simple, no la URL específica del Space que incluye el nombre del bucket. Añadir el nombre del bucket al endpoint es una causa habitual de resultados extraños de tipo «bucket not found».

<img src="/support/images/en/blog/new-remote.png" alt="Edición del endpoint de un remoto compatible con S3 en RcloneView" class="img-large img-center" />

## Verifica la clave de acceso y el secreto

Spaces usa su propio par de claves de acceso, independiente de tu token de API de DigitalOcean. Pegar un token de API en el campo de la clave es un error frecuente. Si tienes dudas, regenera un par de claves de Spaces y pega de nuevo ambos valores, atento a los espacios iniciales o finales que se cuelan al copiar.

Si el listado funciona pero las subidas fallan, es posible que la clave no tenga permiso de escritura en ese Space. Crea una clave con el acceso adecuado y actualiza el remoto.

## Prueba desde el terminal integrado

RcloneView incluye una pestaña Terminal en el Info View inferior. Ejecuta `rclone listremotes` para confirmar que el remoto existe y luego `rclone about "myspaces:"` o un listado sencillo para ver el texto de error sin procesar. El mensaje exacto indica si el problema es de autenticación, de endpoint o de red.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de RcloneView con transferencias con errores" class="img-large img-center" />

Revisa la pestaña Log y Job History en busca de fallos repetidos. Si los errores aparecen solo en transferencias grandes, reduce el número de transferencias de archivos en Advanced Settings del trabajo para aliviar la carga.

## Descarta problemas de red y de hora

Un error de firma también puede deberse a un reloj del sistema muy desajustado, ya que las solicitudes firmadas dependen de la hora actual. Corrige el reloj y vuelve a intentarlo. Los proxies corporativos y los firewalls que inspeccionan TLS también pueden interrumpir las conexiones, así que prueba desde otra red si las claves y el endpoint parecen correctos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Ejecución de una transferencia a DigitalOcean Spaces en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Remote Manager, edita tu remoto de Spaces y confirma el endpoint regional.
3. Vuelve a introducir la clave de acceso y el secreto de Spaces.
4. Prueba con la copia de una carpeta pequeña y luego vuelve a ejecutar tu trabajo completo.

Un endpoint y un par de claves bien configurados convierten un fallo vago en un flujo de trabajo fiable y repetible.

---

**Guías relacionadas:**

- [Gestiona DigitalOcean Spaces — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Solucionar errores de permisos de acceso denegado en S3 con RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Solucionar errores de certificado SSL/TLS con RcloneView](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
