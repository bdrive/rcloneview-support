---
slug: fix-synology-nas-detection-connection-errors-rcloneview
title: "Solucione errores de detección y conexión de Synology NAS — Copias de seguridad fiables con RcloneView"
authors:
  - casey
description: "Solucione problemas de autodetección y fallos de conexión de Synology NAS en RcloneView, con soluciones para el descubrimiento en red local y la configuración manual."
keywords:
  - Synology NAS RcloneView
  - error de autodetección de Synology
  - conexión NAS de RcloneView
  - solucionar NAS no detectado
  - copia de seguridad en la nube de Synology
  - almacenamiento de red local NAS
  - solución de problemas de RcloneView
  - montaje SMB de Synology
  - sincronización de almacenamiento local
tags:
  - RcloneView
  - troubleshooting
  - synology
  - nas
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucione errores de detección y conexión de Synology NAS — Copias de seguridad fiables con RcloneView

> Cuando RcloneView no encuentra su Synology en la red local, la solución suele ser un ajuste, no un NAS averiado.

RcloneView puede autodetectar un Synology NAS en su red local, pero la autodetección depende de la visibilidad de la red, no solo de que el NAS esté encendido. Un estudio fotográfico que respalda 2 TB de archivos RAW cada noche puede perder toda una ventana de copia de seguridad por un NAS que deja de aparecer silenciosamente en el explorador. Esta guía repasa las causas comunes de los fallos de detección y conexión de Synology y cómo resolver cada una en RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué falla la autodetección

El ajuste de autodetección de Synology de RcloneView escanea el segmento de red local al que está conectado su equipo. Si el NAS está detrás de una VLAN, en una subred diferente o dentro de un túnel VPN, la difusión nunca lo alcanza y el NAS no aparece automáticamente — esto es una limitación de la topología de red, no un fallo de RcloneView. Primero confirme que el ajuste esté activado: Settings > General > Auto-detect Synology NAS debe estar habilitado, ya que es un interruptor y es fácil dejarlo desactivado tras una instalación nueva.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Interruptor de autodetección de Synology NAS en la configuración de RcloneView" class="img-large img-center" />

Si el interruptor está activado y la detección sigue fallando, compruebe que tanto el equipo cliente como el NAS estén en el mismo segmento de red físico o virtual. Las redes corporativas con aislamiento de clientes habilitado en el punto de acceso Wi-Fi bloquean por completo el descubrimiento entre dispositivos, aunque ambos aparezcan como "conectados".

## Conexión manual cuando la autodetección no alcanza el NAS

Cuando la autodetección no es viable — oficinas remotas, redes segmentadas o unidades NAS en una VLAN diferente — conéctese manualmente en lugar de solucionar problemas de descubrimiento. Añada el Synology como remoto SFTP o SMB/CIFS en el Administrador de remotos usando directamente su dirección IP o nombre de host, evitando por completo el escaneo de red local.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un Synology NAS manualmente como remoto SFTP" class="img-large img-center" />

Esta ruta manual también resuelve el problema secundario más común: tiempos de espera de conexión que parecen fallos de detección pero en realidad son problemas de autenticación. Verifique que el servicio SSH o SMB del NAS esté habilitado en el propio panel de control de Synology — RcloneView no puede conectarse a un servicio que el NAS mismo no está ejecutando.

## Verificar la conexión y automatizar las copias de seguridad

Una vez añadido el remoto, use Probar conexión (Test Connection) antes de guardar para confirmar credenciales y accesibilidad en un solo paso, en lugar de descubrir un fallo a mitad de la transferencia. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que una vez que el Synology se conecta, aparece en el mismo explorador que sus remotos en la nube, sin necesidad de una aplicación aparte.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos mostrando una ejecución de copia de seguridad de Synology completada" class="img-large img-center" />

A partir de ahí, cree un trabajo de sincronización que refleje el NAS en un destino en la nube y revise el Historial de trabajos tras la primera ejecución — un trabajo que se completa con cero archivos transferidos suele significar que la ruta de origen era incorrecta, no que la conexión esté rota.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Active Auto-detect Synology NAS en Settings, o conéctese manualmente vía SFTP/SMB usando la dirección IP del NAS.
3. Ejecute Probar conexión antes de guardar el remoto.
4. Configure un trabajo de sincronización a un destino en la nube y confirme la transferencia en el Historial de trabajos.

Un NAS que se conecta de forma fiable vale los cinco minutos de solución de problemas de red — las copias de seguridad automatizadas solo lo protegen si realmente se ejecutan.

---

**Guías relacionadas:**

- [Sincronice Synology con Google Drive sin pérdida de datos](https://rcloneview.com/support/blog/sync-synology-google-drive-without-data-loss)
- [Copia de seguridad de Synology en la nube con RcloneView](https://rcloneview.com/support/blog/synology-to-cloud-backup-with-rcloneview)
- [Solucione errores de montaje de recursos compartidos de red SMB/Windows — RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)

<CloudSupportGrid />
