---
slug: fix-azure-files-connection-errors-rcloneview
title: "Solucionar errores de conexión de Azure Files — Resolver problemas de SMB de Azure con RcloneView"
authors:
  - tayson
description: "Soluciona errores de conexión de Azure Files en RcloneView — corrige credenciales incorrectas, bloqueos del firewall en el puerto SMB 445, discrepancias de TLS y problemas con el nombre del recurso compartido."
keywords:
  - error de conexión de Azure Files
  - solución de problemas SMB de Azure
  - RcloneView Azure Files
  - puerto SMB 445
  - solución de Azure File Storage
  - credenciales de Azure Files
  - solución de problemas de almacenamiento en la nube
  - rclone Azure Files
tags:
  - RcloneView
  - azure-files
  - troubleshooting
  - tips
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de conexión de Azure Files — Resolver problemas de SMB de Azure con RcloneView

> Los errores de conexión de Azure Files en RcloneView casi siempre se deben a uno de tres problemas: credenciales incorrectas, un puerto SMB bloqueado o una discrepancia en la configuración de TLS. Aquí te explicamos cómo solucionar cada uno.

Azure Files ofrece recursos compartidos de archivos SMB y NFS administrados y alojados en Azure, y RcloneView admite Azure File Storage directamente como tipo de remoto. Sin embargo, las conexiones de Azure Files fallan con más frecuencia que las de otros proveedores porque dependen de que las credenciales correctas, las reglas del firewall y la configuración de TLS se alineen simultáneamente. Esta guía cubre los modos de fallo más comunes y cómo resolverlos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verificar tus credenciales de Azure Files

Azure Files requiere tres datos: el **nombre de la cuenta de almacenamiento** (Storage Account Name), la **clave compartida** (Shared Key, también llamada Storage Account Key) y el **nombre del recurso compartido** (Share Name). Una discrepancia en cualquiera de estos tres campos provoca un fallo de autenticación inmediato. Los mensajes de error de Azure en estos casos no siempre especifican con claridad qué campo es incorrecto.

En RcloneView, abre la configuración de tu remoto de Azure Files y verifica cada campo:
- **Account Name**: Es el nombre de la cuenta de almacenamiento, no el nombre para mostrar ni el nombre de la suscripción.
- **Account Key**: Se encuentra en el Portal de Azure, dentro de tu cuenta de almacenamiento, en **Access Keys** > Key1 o Key2. Copia la clave completa: son cadenas base64 largas y es fácil truncarlas por accidente.
- **Share Name**: El nombre exacto del recurso compartido de archivos dentro de la cuenta de almacenamiento, distingue entre mayúsculas y minúsculas.

Si has rotado recientemente tus claves de acceso en el Portal de Azure, actualiza la clave en la configuración del remoto de RcloneView de inmediato, ya que la clave anterior quedará invalidada.

<img src="/support/images/en/blog/new-remote.png" alt="Azure Files remote configuration in RcloneView with Account Name and Key fields" class="img-large img-center" />

## Problemas del firewall en el puerto SMB 445

Azure Files utiliza el protocolo SMB sobre el puerto TCP 445. Muchas redes corporativas y proveedores de internet bloquean el puerto 445 saliente como medida de seguridad frente a vulnerabilidades antiguas de SMB. Si tus credenciales son correctas pero las conexiones siguen agotando el tiempo de espera, el bloqueo del puerto 445 es la causa más probable.

Para comprobar si el puerto 445 es accesible, ejecuta `Test-NetConnection -ComputerName <storage-account>.file.core.windows.net -Port 445` en PowerShell (Windows) o `nc -zv <storage-account>.file.core.windows.net 445` en Linux/macOS. Si la conexión falla, tienes dos opciones: coordinar con tu administrador de red para permitir el puerto 445 saliente, o usar Azure Files a través de NFS (donde esté disponible) o acceder en su lugar al Azure Blob Storage subyacente.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Diagnosing Azure Files port 445 connectivity for RcloneView" class="img-large img-center" />

## Configuración de TLS y del endpoint

El remoto de Azure Files de RcloneView utiliza HTTPS para el plano de control y SMB para la transferencia de datos. Asegúrate de que tu endpoint esté configurado correctamente: para las cuentas de almacenamiento estándar de Azure, el endpoint es `<accountname>.file.core.windows.net`. Si utilizas Azure Government, Azure China o un endpoint privado, el nombre de host será diferente y debe especificarse explícitamente en la configuración del remoto.

Las discrepancias de versión de TLS pueden producirse en sistemas Windows más antiguos donde TLS 1.2 no está habilitado de forma predeterminada. Azure Files requiere TLS 1.2 o superior. En Windows, habilita TLS 1.2 mediante el registro o a través de una directiva de grupo (Group Policy) si las conexiones fallan con mensajes de error relacionados con TLS. En Linux, asegúrate de que la versión de OpenSSL de tu sistema sea compatible con TLS 1.2 (cualquier distribución moderna lo es).

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Successful Azure Files connection and transfer monitoring in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifica que tu **Account Name**, **Account Key** y **Share Name** sean correctos y coincidan exactamente con el Portal de Azure.
3. Prueba la conectividad saliente al puerto 445 usando `nc` o `Test-NetConnection` de PowerShell.
4. Si el puerto 445 está bloqueado, contacta a tu equipo de red o considera un método de acceso alternativo.
5. Asegúrate de que TLS 1.2 esté habilitado en tu sistema si ves errores de negociación TLS.

Resolver los errores de conexión de Azure Files suele ser cuestión de revisar las credenciales y la configuración de red; una vez que estas son correctas, el remoto funciona de forma fiable en RcloneView para explorar, sincronizar y realizar copias de seguridad.

---

**Guías relacionadas:**

- [Administrar Azure Files — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Solucionar errores de montaje de recursos compartidos de red SMB de Windows con RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)
- [Solucionar errores de autenticación con token SAS de Azure Blob con RcloneView](https://rcloneview.com/support/blog/fix-azure-blob-sas-token-auth-errors-rcloneview)

<CloudSupportGrid />
