---
slug: fix-firewall-antivirus-blocking-cloud-sync-rcloneview
title: "Solucionar el bloqueo de la sincronización en la nube por el firewall y el antivirus — Resolver errores de conexión con RcloneView"
authors:
  - robin
description: "Diagnostica y soluciona los trabajos de sincronización en la nube que se detienen o fallan porque un firewall, un antivirus o una herramienta de seguridad de endpoint está bloqueando las conexiones de RcloneView."
keywords:
  - firewall bloquea sincronización en la nube
  - antivirus bloquea rclone
  - conexión de RcloneView bloqueada
  - sincronización en la nube atascada firewall
  - solucionar errores de red de rclone
  - protección de endpoint sincronización en la nube
  - permitir RcloneView en el firewall
  - falla de conexión de copia de seguridad en la nube
  - problemas de sincronización en la nube con VPN
  - API RC de rclone bloqueada
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar el bloqueo de la sincronización en la nube por el firewall y el antivirus — Resolver errores de conexión con RcloneView

> Cuando un trabajo de sincronización se detiene en el 0 % o falla con un error de conexión genérico, el verdadero culpable suele ser el software de seguridad local, no el proveedor de la nube.

Un trabajo de sincronización que nunca se inicia, se queda atascado en 0 % transferido o termina con un mensaje de tiempo de espera vago no siempre indica una configuración remota incorrecta. Tanto en estaciones de trabajo gestionadas como en redes domésticas muy restringidas, los firewalls, las suites antivirus y los agentes de protección de endpoint suelen interceptar las conexiones salientes que necesita RcloneView —tanto hacia la API del proveedor de la nube como hacia su propio proceso rclone integrado local— y el fallo se ve idéntico a una interrupción de red real. RcloneView se ejecuta completamente en tu máquina local, así que cada una de estas conexiones proviene de un proceso que puedes inspeccionar y añadir a una lista blanca directamente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reconocer un bloqueo del firewall o el antivirus

Las señales reveladoras son la consistencia y la inmediatez: el trabajo falla uno o dos segundos después de iniciar, en lugar de tras una lucha lenta; el mismo trabajo funciona bien en otra red; o un remoto recién creado falla su prueba de conexión antes de siquiera llegar al proveedor. El rclone integrado de RcloneView escucha localmente en `127.0.0.1:5582`, y las herramientas antivirus que inspeccionan el tráfico de bucle local o bloquean a ejecutables no reconocidos la apertura de sockets de red pueden cortar silenciosamente ese enlace, aunque la aplicación en sí parezca funcionar con normalidad.

<img src="/support/images/en/blog/new-remote.png" alt="Prueba de conexión remota que falla inmediatamente por una conexión bloqueada" class="img-large img-center" />

Si te conectas a una instancia externa de rclone en lugar de la integrada, la misma lógica aplica al puerto 5572 —los firewalls corporativos que solo permiten tráfico en puertos web estándar (80/443) lo descartarán silenciosamente.

## Aislar la conexión bloqueada

Inicia una transferencia manual y observa la pestaña Transferring: un trabajo que muestra 0 B/s indefinidamente, sin error y sin progreso, normalmente significa que la conexión con los servidores del proveedor de la nube se está filtrando en la salida, no que el proveedor esté caído. Activar el registro de rclone en Settings a nivel DEBUG y reproducir el problema suele revelar una entrada `connection reset` o `i/o timeout` que señala el host exacto que está siendo bloqueado.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo de sincronización que se atasca por una conexión de red bloqueada" class="img-large img-center" />

Job History también es útil aquí: los trabajos que terminan consistentemente en "Errored" en un tiempo transcurrido casi idéntico, en distintos remotos, apuntan a una política de red local en lugar de un problema específico del proveedor.

## Permitir RcloneView en el software de seguridad

Una vez confirmado el bloqueo, añade RcloneView (y su binario de rclone incluido) como aplicación permitida en las reglas de tu firewall y antivirus, en lugar de desactivar la protección por completo. En Windows, eso significa una regla de entrada/salida en el Firewall de Windows Defender o en tu suite de terceros; en macOS, conceder acceso a la red en Privacidad y seguridad si se solicita; en Linux, revisar `ufw` o `iptables` junto con cualquier agente de endpoint gestionado de forma centralizada por tu organización. Si estás en una VPN o proxy corporativo, confirma que los dominios de la API del proveedor de la nube también estén permitidos allí —una configuración incorrecta de túnel dividido produce el mismo síntoma de transferencia atascada que un bloqueo de firewall local.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Una sincronización en la nube transfiriendo con normalidad tras eliminar un bloqueo de firewall" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho.
2. Reproduce el fallo con el registro de rclone en nivel DEBUG activado y anota el host o puerto exacto que aparece en el error.
3. Añade RcloneView y su proceso rclone integrado como aplicaciones permitidas en la configuración de tu firewall y antivirus.
4. Vuelve a ejecutar el trabajo y confirma que ahora muestra progreso de transferencia real en la pestaña Transferring.

Una sola entrada en la lista blanca suele resolver lo que parece un fallo de sincronización persistente e inexplicable —vale la pena descartarlo antes de asumir que el proveedor de la nube o la configuración remota son los culpables.

---

**Guías relacionadas:**

- [Solucionar problemas de conexión en la nube con proxy y VPN con RcloneView](https://rcloneview.com/support/blog/fix-proxy-vpn-cloud-connection-issues-rcloneview)
- [Solucionar errores de tiempo de espera en la sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)
- [Solucionar errores de certificado SSL/TLS en la sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
