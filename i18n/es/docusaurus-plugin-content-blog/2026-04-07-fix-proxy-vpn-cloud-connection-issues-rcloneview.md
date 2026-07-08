---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "Soluciona problemas de conexión con proxy y VPN en la nube en RcloneView"
authors:
  - tayson
description: "Resuelve los fallos de sincronización y transferencia en la nube en RcloneView cuando estás detrás de proxies corporativos o VPN. Cubre la configuración de HTTP_PROXY, errores de certificados SSL, split tunneling, problemas de resolución DNS y técnicas para evitar el firewall."
keywords:
  - configuración de proxy en rclone
  - error de conexión VPN en rclone
  - solución de proxy corporativo en rclone
  - error de certificado SSL en rclone
  - configuración de HTTPS_PROXY en rclone
  - fallo de resolución DNS en rclone
  - firewall bloqueado en rclone
  - configuración de proxy en rcloneview
  - split tunneling VPN en rclone
  - solucionar conexión de rclone detrás de un proxy
tags:
  - RcloneView
  - troubleshooting
  - guide
  - tips
  - security
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona problemas de conexión con proxy y VPN en la nube en RcloneView

> Los proxies corporativos y las VPN suelen romper las conexiones de sincronización en la nube con errores crípticos de tiempo de espera y de certificado. Esta guía cubre todos los escenarios comunes y cómo configurar RcloneView para que funcione de forma fiable detrás de restricciones de red.

Muchas organizaciones enrutan el tráfico de internet a través de servidores proxy o exigen conexiones VPN para los trabajadores remotos. Aunque estas medidas mejoran la seguridad, con frecuencia interfieren con las llamadas a la API del almacenamiento en la nube. Rclone y RcloneView necesitan acceso HTTPS directo a los endpoints de los proveedores de la nube, y cualquier elemento que se sitúe entre tu máquina y esos endpoints —proxies, firewalls, túneles VPN o dispositivos de inspección SSL— puede provocar fallos de conexión. Los errores van desde tiempos de espera agotados y fallos de DNS hasta errores de handshake TLS y rechazos de certificados. Esta guía repasa cada problema y ofrece soluciones concretas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar las variables de entorno HTTP_PROXY y HTTPS_PROXY

Rclone respeta las variables de entorno estándar de proxy HTTP que utilizan la mayoría de las herramientas de red. Si tu organización requiere un proxy para acceder a internet, debes configurar estas variables para que rclone sepa hacia dónde enrutar su tráfico.

### Configurar las variables de proxy

**Windows (variables de entorno del sistema):**

1. Abre **Configuración > Sistema > Acerca de > Configuración avanzada del sistema > Variables de entorno**.
2. En las variables del sistema (o del usuario), añade:
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. Reinicia RcloneView para que tome las nuevas variables.

**macOS / Linux (perfil de shell):**

Añade a `~/.bashrc`, `~/.zshrc`, o `/etc/environment`:

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

Vuelve a cargar el archivo o reinicia tu sesión de terminal.

### Proxies autenticados

Si tu proxy requiere un usuario y una contraseña, incluye las credenciales en la URL:

```
http://username:password@proxy.company.com:8080
```

Los caracteres especiales en la contraseña deben codificarse en formato URL (por ejemplo, `@` se convierte en `%40`, `#` se convierte en `%23`).

### Proxies SOCKS5

Para proxies SOCKS5 (habituales con túneles SSH), utiliza:

```
socks5://proxy.company.com:1080
```

Configura esto tanto en `HTTP_PROXY` como en `HTTPS_PROXY`.

### Verificar la configuración del proxy

Comprueba que rclone puede alcanzar un proveedor de la nube a través del proxy:

```bash
rclone lsd remote: --dump headers -v
```

Si la conexión se realiza correctamente, verás el listado del directorio. La opción `--dump headers` muestra las cabeceras HTTP, lo que puede confirmar que el proxy se está utilizando.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Solucionar errores de certificado SSL

Los errores de certificado SSL/TLS son el problema más común detrás de proxies corporativos. Muchas organizaciones utilizan inspección SSL (también llamada interceptación HTTPS o inspección de tipo man-in-the-middle), donde el proxy descifra y vuelve a cifrar el tráfico HTTPS utilizando la propia autoridad certificadora (CA) de la organización. Rclone no confía en esta CA por defecto, lo que provoca errores como:

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### Solución: añadir el certificado de la CA corporativa

1. **Obtén el certificado raíz de la CA corporativa** de tu departamento de TI. Suele ser un archivo `.pem` o `.crt`.
2. **Indica a rclone que confíe en él** usando la opción `--ca-cert`:
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. **Hazlo permanente** configurándolo en el entorno de tu configuración de rclone. Añade a tu perfil de shell:
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. En RcloneView, añade `--ca-cert /path/to/corporate-ca.pem` como opción personalizada en la configuración de tu remoto o trabajo.

### Solución: añadir la CA al almacén de confianza del sistema

Como alternativa, añade la CA corporativa al almacén de confianza de tu sistema operativo para que todas las aplicaciones (incluido rclone) confíen en ella automáticamente:

**Windows:**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS:**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux (Debian/Ubuntu):**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### Último recurso: desactivar la verificación SSL

Si no puedes obtener el certificado de la CA corporativa, puedes desactivar por completo la verificación SSL. Esto **no se recomienda** para uso en producción, ya que elimina la protección frente a ataques reales de tipo man-in-the-middle:

```bash
rclone lsd remote: --no-check-certificate
```

Utiliza esto solo para pruebas, con el fin de confirmar que el certificado es el problema, y luego busca una solución adecuada con el certificado de la CA.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Resolver problemas de DNS detrás de VPN

Las conexiones VPN suelen sobrescribir la configuración de DNS de tu sistema, lo que puede provocar que los dominios de los proveedores de la nube no se resuelvan o se resuelvan a direcciones incorrectas.

### Síntomas

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- Conexiones que funcionaban antes de conectar la VPN ahora fallan.

### Soluciones

**Comprobar la resolución DNS:**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

Si estos comandos fallan o devuelven IPs inesperadas mientras estás en la VPN, el DNS es el problema.

**Utilizar un servidor DNS específico:**

Algunos clientes VPN permiten configurar los ajustes de DNS. Asegúrate de que tu VPN utiliza servidores DNS capaces de resolver dominios públicos de proveedores en la nube. Si tu VPN te obliga a usar servidores DNS internos que no pueden resolver dominios externos, pide a tu equipo de TI que añada reglas de reenvío de DNS para los dominios de los proveedores en la nube.

**Anulación manual de DNS (temporal):**

Añade los endpoints de los proveedores en la nube a tu archivo hosts como solución temporal:

- Windows: `C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux: `/etc/hosts`

Esto es frágil porque los proveedores de la nube rotan las direcciones IP, pero puede desbloquearte mientras se organiza una solución de DNS adecuada.

**Vacía la caché de DNS** después de realizar los cambios:

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## Configurar split tunneling

El split tunneling enruta solo el tráfico corporativo a través de la VPN, dejando que el tráfico de almacenamiento en la nube vaya directamente a internet. Esto evita tanto el proxy como la VPN para las conexiones con los proveedores en la nube, y a menudo resuelve todos los problemas de una vez.

### Cómo configurarlo

El split tunneling se configura normalmente en el cliente VPN o por parte de tu departamento de TI. Debes solicitar que los siguientes dominios o rangos de IP queden excluidos del túnel VPN:

**Google Drive / Google Cloud:**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure:**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3:**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox:**
- `*.dropbox.com`
- `*.dropboxapi.com`

**Otros proveedores:** Consulta la documentación del proveedor para conocer los dominios de sus endpoints de API.

Si tu departamento de TI no puede configurar el split tunneling, las soluciones de proxy y certificado descritas anteriormente son tus mejores alternativas.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Evitar los firewalls corporativos

Los firewalls corporativos pueden bloquear puertos, protocolos o dominios específicos que rclone necesita. Problemas comunes relacionados con el firewall:

### Puertos bloqueados

Rclone utiliza HTTPS (puerto 443) para la mayoría de los proveedores en la nube. Si el puerto 443 está bloqueado para tráfico que no proviene de navegadores, las conexiones de rclone agotarán el tiempo de espera. Consulta con tu departamento de TI para asegurarte de que el tráfico HTTPS saliente esté permitido para el proceso de rclone.

### Dominios bloqueados

Algunos firewalls bloquean el acceso a dominios específicos de almacenamiento en la nube. Si tu organización no admite oficialmente un proveedor de la nube en particular, sus endpoints de API pueden estar en una lista de bloqueo. Verás errores de tiempo de espera o mensajes de conexión rechazada. La única solución es solicitar a tu equipo de TI que añada los dominios necesarios a la lista de permitidos.

### Inspección profunda de paquetes

Algunos firewalls de nueva generación inspeccionan el tráfico HTTPS más allá del nivel de certificado. Pueden bloquear conexiones que no parezcan tráfico estándar de un navegador. La cabecera User-Agent de rclone lo identifica como rclone, lo que algunas reglas de DPI (inspección profunda de paquetes) pueden marcar. Puedes establecer un User-Agent personalizado:

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

Esto es una solución alternativa y solo debe usarse si se confirma que es necesaria y está aprobada por tu equipo de TI.

### Renovación de tokens OAuth a través de proxies

Los proveedores en la nube que utilizan OAuth (Google Drive, OneDrive, Dropbox) renuevan periódicamente los tokens de acceso. Si el endpoint de renovación del token está bloqueado o el proxy interfiere con el flujo de OAuth, verás errores de autenticación aunque tus credenciales sean correctas. Asegúrate de que los siguientes endpoints de OAuth sean accesibles:

- `oauth2.googleapis.com` (Google)
- `login.microsoftonline.com` (Microsoft)
- `api.dropbox.com/oauth2/token` (Dropbox)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Solucionar tiempos de espera de conexión agotados

Cuando las conexiones agotan el tiempo de espera detrás de un proxy o una VPN, sigue estos pasos para identificar la causa:

1. **Probar la conectividad básica:**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   Si curl funciona pero rclone no, es probable que el problema sea que rclone no está tomando las variables de entorno del proxy.

2. **Probar con registro detallado (verbose logging):**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   Esto muestra exactamente lo que rclone envía y recibe.

3. **Comprobar interferencias del proxy:**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   Si esto funciona pero el comando normal no, la inspección SSL es la culpable.

4. **Probar sin VPN** (si es posible) para confirmar que la VPN está implicada.

5. **Aumentar los tiempos de espera** para conexiones de proxy lentas:
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. **Revisa los registros de RcloneView** en el Historial de trabajos para ver mensajes de error detallados.

## Configuración persistente en RcloneView

Una vez que encuentres la combinación adecuada de ajustes de proxy, rutas de certificados y opciones, guárdalos para no tener que volver a descubrirlos:

- **Variables de entorno**: configura `HTTP_PROXY`, `HTTPS_PROXY` y `RCLONE_CA_CERT` en el perfil de tu sistema para que se apliquen a todas las operaciones de rclone.
- **Opciones personalizadas en los trabajos**: en la configuración de trabajos de RcloneView, añade opciones como `--ca-cert`, `--timeout` o `--contimeout` como parámetros personalizados.
- **Ajustes por remoto**: algunos ajustes se pueden añadir directamente a la configuración del remoto en `rclone.conf`.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Configura las variables de entorno del proxy** si tu red lo requiere.
3. **Instala tu certificado de CA corporativo** si se utiliza inspección SSL.
4. **Prueba la conectividad** con un simple comando `rclone lsd remote:` antes de configurar trabajos de sincronización.
5. **Guarda las configuraciones que funcionen** como trabajos de RcloneView para lograr sincronizaciones consistentes y repetibles.

Las restricciones de red no tienen por qué impedirte gestionar el almacenamiento en la nube de forma eficaz. Con la configuración adecuada de proxy y certificados, RcloneView funciona de manera fiable incluso en los entornos corporativos más restringidos.

---

**Guías relacionadas:**

- [Añadir almacenamiento remoto](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Añadir inicio de sesión en línea OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Ejecutar y gestionar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
