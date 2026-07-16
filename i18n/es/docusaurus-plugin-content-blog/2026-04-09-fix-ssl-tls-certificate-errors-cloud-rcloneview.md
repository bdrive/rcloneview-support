---
slug: fix-ssl-tls-certificate-errors-cloud-rcloneview
title: "Solucionar errores de certificado SSL/TLS en conexiones a la nube en RcloneView"
authors:
  - tayson
description: "Diagnostique y solucione errores de certificado SSL/TLS al conectarse al almacenamiento en la nube en RcloneView. Resuelva certificados caducados, problemas con certificados autofirmados e interceptación por proxy corporativo."
keywords:
  - rcloneview
  - ssl certificate error
  - tls certificate error
  - cloud connection ssl fix
  - self-signed certificate rclone
  - certificate verify failed
  - x509 certificate error
  - corporate proxy ssl
  - rclone tls error
  - cloud storage connection fix
tags:
  - troubleshooting
  - security
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de certificado SSL/TLS en conexiones a la nube en RcloneView

> Los errores de certificado SSL/TLS impiden que RcloneView establezca conexiones seguras con los proveedores de la nube. Estos errores van desde certificados caducados hasta interceptación por proxy corporativo; aquí le mostramos cómo diagnosticarlos y resolverlos.

Cada conexión que RcloneView establece con un proveedor de la nube utiliza HTTPS con cifrado TLS. El protocolo de enlace TLS verifica la identidad del servidor mediante su certificado SSL. Cuando esta verificación falla, RcloneView no puede conectarse: no hay exploración, ni transferencias, ni sincronización. Los errores de certificado son especialmente comunes en entornos corporativos con proxies que inspeccionan SSL, al conectarse a almacenamiento autoalojado (MinIO, Nextcloud, Seafile) o cuando la hora del sistema es incorrecta.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mensajes de error comunes

- **"x509: certificate signed by unknown authority"**: El certificado del servidor fue emitido por una Autoridad de Certificación (CA) en la que su sistema no confía. Común con almacenamiento autoalojado y proxies corporativos.
- **"x509: certificate has expired or is not yet valid"**: El período de validez del certificado no coincide con la hora actual del sistema. O bien el certificado ha caducado realmente, o el reloj del sistema está mal configurado.
- **"x509: certificate is valid for X, not Y"**: El Nombre Común o los Nombres Alternativos del Sujeto del certificado no coinciden con el nombre de host al que se está conectando. Esto ocurre cuando la URL del endpoint no coincide con el certificado.
- **"tls: failed to verify certificate"**: Un fallo genérico de verificación TLS. Revise el mensaje de error completo para más detalles.
- **"remote TLS connection closed unexpectedly"**: El protocolo de enlace TLS se interrumpió, a menudo por un firewall o un proxy.

## Solución 1: Verificar el reloj del sistema

La causa más simple y más frecuentemente pasada por alto: el reloj de su sistema está mal configurado. Los certificados TLS tienen una ventana de validez (Not Before / Not After). Si su reloj está fuera de esa ventana, todos los certificados parecerán inválidos.

En Windows, revise Configuración > Hora e idioma > Fecha y hora y asegúrese de que "Establecer la hora automáticamente" esté habilitado. En Linux, ejecute `timedatectl` y verifique que la hora sea correcta. En macOS, revise Preferencias del Sistema > Fecha y hora.

Un reloj del sistema desfasado incluso por unas pocas horas puede provocar errores de certificado, especialmente en certificados emitidos recientemente o próximos a caducar.

## Solución 2: Proxy corporativo / Inspección SSL

Muchas redes corporativas utilizan un proxy que inspecciona SSL, el cual intercepta las conexiones HTTPS, las descifra para su inspección y las vuelve a cifrar con el certificado propio de la organización. Esto efectúa una operación de intermediario (man-in-the-middle) que es de confianza para las máquinas gestionadas por la empresa (porque la CA corporativa está instalada en el almacén de confianza del sistema), pero puede no ser de confianza para el paquete de certificados integrado de rclone.

Para solucionarlo, debe indicarle a rclone que use el almacén de certificados de su sistema o proporcionar el certificado de la CA corporativa explícitamente:

- **Opción A**: Configure el indicador `--ca-cert` en los indicadores personalizados de RcloneView para que apunte al archivo del certificado de la CA corporativa. Por ejemplo: `--ca-cert /path/to/corporate-ca.pem`.
- **Opción B**: En Linux, asegúrese de que el certificado de la CA corporativa esté instalado en el almacén de confianza del sistema (`/etc/ssl/certs/` en Debian/Ubuntu, `/etc/pki/tls/certs/` en RHEL/CentOS). Ejecute `update-ca-certificates` después de agregar el certificado.
- **Opción C**: En Windows, si la CA corporativa está instalada en el almacén de certificados de Windows, es posible que rclone no la use de forma predeterminada (utiliza su propia implementación de TLS en Go). Exporte la CA corporativa desde el almacén de certificados de Windows como un archivo PEM y use `--ca-cert`.

Póngase en contacto con su departamento de TI para obtener el certificado de la CA corporativa si no lo tiene.

## Solución 3: Certificados autofirmados (almacenamiento autoalojado)

Al conectarse a almacenamiento autoalojado como MinIO, Nextcloud vía WebDAV, o un servidor SFTP privado con un certificado TLS autofirmado, rclone rechazará la conexión porque el certificado no fue emitido por una CA de confianza.

Tiene dos opciones:

- **Recomendado**: Agregue su certificado autofirmado al almacén de confianza del sistema o use `--ca-cert` para apuntar al archivo del certificado. Esto mantiene la verificación TLS a la vez que confía en su certificado específico.
- **No recomendado, pero a veces necesario**: Use `--no-check-certificate` en los indicadores personalizados. Esto desactiva por completo la verificación de certificados, dejando la conexión vulnerable a ataques de intermediario (man-in-the-middle). Utilícelo únicamente para pruebas en redes de confianza, nunca en producción.

Para MinIO en particular, considere generar un certificado adecuado usando Let's Encrypt (gratuito) en lugar de usar un certificado autofirmado.

## Solución 4: Certificado del servidor caducado

Si el certificado del proveedor de la nube ha caducado realmente, no hay nada que pueda hacer del lado del cliente: el proveedor debe renovarlo. Esto es poco común en los principales proveedores (AWS, Google, Microsoft, Dropbox), pero puede ocurrir con proveedores más pequeños o soluciones autoalojadas.

Verifíquelo revisando el certificado en un navegador web: navegue a la URL del proveedor y haga clic en el icono del candado para ver los detalles del certificado. Si el certificado ha caducado, póngase en contacto con el proveedor. Para almacenamiento autoalojado, renueve el certificado usando su CA o Let's Encrypt.

## Solución 5: Discrepancia de nombre de host

Las discrepancias de nombre de host en el certificado ocurren cuando la URL a la que se conecta no coincide con el Nombre Común o los Nombres Alternativos del Sujeto del certificado. Esto es común cuando:

- Se conecta a un endpoint compatible con S3 usando una dirección IP en lugar del nombre de host.
- La URL del endpoint tiene un error tipográfico o usa un subdominio diferente al que cubre el certificado.
- Está accediendo a un servicio a través de un balanceador de carga o proxy inverso que presenta un certificado diferente.

Solucione esto usando el nombre de host exacto para el que se emitió el certificado. Revise la configuración del remoto en el Administrador de Remotos de RcloneView y verifique que la URL del endpoint coincida con los nombres de host del certificado.

## Solución 6: Actualizar rclone y RcloneView

Las versiones antiguas de rclone pueden usar un paquete de certificados desactualizado que no incluye las Autoridades de Certificación más recientes. Actualice a la última versión de RcloneView, que incluye un binario de rclone actualizado con certificados de CA vigentes.

## Diagnóstico de problemas de certificado

Cuando ocurre un error de certificado, reúna detalles usando la terminal integrada de RcloneView:

1. Ejecute `rclone lsd remote:` con `--verbose` para ver el mensaje de error completo, incluidos los detalles del certificado.
2. Use `openssl s_client -connect endpoint:443` (si está disponible) para inspeccionar la cadena de certificados del servidor.
3. Revise el emisor del certificado, la fecha de caducidad y los Nombres Alternativos del Sujeto para identificar el problema específico.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Si encuentra errores de certificado, revise primero el reloj de su sistema.
3. Para entornos corporativos, obtenga y configure el certificado de la CA corporativa.
4. Para almacenamiento autoalojado, agregue el certificado autofirmado a su almacén de confianza.

Los errores de certificado SSL/TLS siempre se pueden resolver: la solución depende de si el problema es el reloj de su sistema, un proxy corporativo, un certificado autofirmado o un certificado del servidor caducado. Identificar la causa raíz a partir del mensaje de error es la clave para una resolución rápida.

---

**Guías relacionadas:**

- [Agregar AWS S3 y almacenamiento compatible con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Agregar WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [Explorar y administrar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

<CloudSupportGrid />
