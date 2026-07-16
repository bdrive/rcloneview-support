---
slug: backup-migrate-rclone-config-rcloneview
title: "Cómo hacer copia de seguridad, migrar y gestionar tu configuración de Rclone con RcloneView"
authors:
  - tayson
description: "Aprende a hacer copia de seguridad, restaurar y migrar tu archivo de configuración de rclone — incluyendo remotos cifrados — usando RcloneView. Mantén tus conexiones en la nube portátiles y protegidas."
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo hacer copia de seguridad, migrar y gestionar tu configuración de Rclone con RcloneView

> Tu archivo de configuración de rclone contiene todas las configuraciones de tus remotos en la nube — detalles de conexión, tokens de autenticación, claves de cifrado y ajustes personalizados. Perderlo significa reconfigurar cada remoto desde cero. Aquí te explicamos cómo hacer una copia de seguridad, migrarlo y mantenerlo portátil.

Después de invertir tiempo configurando docenas de remotos en la nube en RcloneView — flujos OAuth, claves API, frases de contraseña de cifrado, endpoints personalizados — lo último que quieres es perder ese trabajo por un fallo de disco, una reinstalación del sistema operativo o una actualización de equipo. El archivo de configuración de rclone es un único archivo de texto que codifica toda esa configuración. Entender dónde se encuentra y cómo protegerlo es un mantenimiento esencial para cualquier usuario serio de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Dónde está el archivo de configuración de Rclone?

La ubicación del archivo de configuración depende de tu sistema operativo:

| SO | Ubicación predeterminada |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

Puedes verificar la ubicación en el **Terminal** de RcloneView:

```bash
rclone config file
```

Esto imprime la ruta exacta que se está usando en tu sistema.

## Qué hay dentro del archivo de configuración

El archivo de configuración es un archivo de texto plano en formato INI. Cada sección representa un remoto:

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**Importante:** Los tokens OAuth (para Google Drive, OneDrive, Dropbox) se almacenan en el archivo de configuración. Estos tokens caducan y se renuevan automáticamente durante el uso. Haz copias de seguridad del archivo de configuración con regularidad para capturar los tokens válidos más recientes.

## Hacer copia de seguridad del archivo de configuración

### Copia de seguridad manual

Copia el archivo de configuración a una ubicación segura:

**Windows:**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux:**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### Copia de seguridad automatizada con RcloneView

Configura un trabajo en RcloneView para hacer copia de seguridad del propio archivo de configuración en almacenamiento en la nube:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. Crea un nuevo trabajo de **Copia**.
2. Origen: la ubicación del archivo de configuración (`~/.config/rclone/`)
3. Destino: una carpeta en la nube (`s3-backup:system-configs/rclone/`)
4. Programación: semanal o después de cambios importantes.

**Nota de seguridad:** El archivo de configuración contiene credenciales. Haz copia de seguridad únicamente en almacenamiento cifrado o en una carpeta en la nube cifrada (por ejemplo, un remoto Crypt).

## Cifrar el archivo de configuración en reposo

Rclone puede cifrar todo el archivo de configuración con una contraseña. Actívalo desde el terminal de RcloneView:

```bash
rclone config
# Choose: s - Set configuration password
```

Después de establecer una contraseña, el archivo de configuración queda cifrado en el disco. Necesitarás la contraseña cada vez que se inicie RcloneView o al ejecutar comandos de rclone. Esto protege las credenciales incluso si el archivo de configuración es robado.

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## Migrar a un equipo nuevo

### Método 1 — Copia directa

La migración más sencilla:

1. Copia `rclone.conf` desde tu equipo antiguo a la misma ruta en el equipo nuevo.
2. Instala RcloneView en el equipo nuevo.
3. Abre RcloneView — todos tus remotos aparecen de inmediato.

No se necesita volver a autenticar la mayoría de los remotos (S3, WebDAV, FTP, etc.). Los remotos OAuth (Google Drive, OneDrive, Dropbox) usarán los tokens almacenados, que son válidos hasta que caduquen (normalmente entre 60 y 90 días desde el último uso).

### Método 2 — Volver a autenticar remotos OAuth

Si los tokens OAuth han caducado, vuelve a autorizar cada remoto afectado:

1. Abre **Remotos** en RcloneView.
2. Selecciona el remoto y elige **Editar**.
3. Haz clic en **Reautorizar** para generar tokens nuevos.

Solo los remotos con tokens OAuth caducados necesitan este paso.

### Método 3 — Usar la opción `--config`

Si mantienes la configuración en una ubicación no estándar (por ejemplo, Dropbox para mayor portabilidad), usa:

```bash
rclone --config /path/to/rclone.conf <command>
```

O establece la variable de entorno `RCLONE_CONFIG` para que sea la opción predeterminada en todas las operaciones de rclone en ese equipo.

## Ver y editar la configuración en RcloneView

La interfaz de gestión de remotos de RcloneView ofrece una GUI para añadir y editar remotos — pero para usuarios avanzados que prefieren el acceso directo, el archivo de configuración siempre es una forma válida de hacer cambios. Después de editar manualmente el archivo de configuración, reinicia RcloneView para aplicar los cambios.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## Mejores prácticas

| Práctica | Por qué |
|----------|-----|
| Hacer copia de seguridad de la configuración semanalmente | Los tokens OAuth se renuevan; captura el último estado válido |
| Cifrar la ubicación de la copia de seguridad | La configuración contiene credenciales y tokens |
| Usar una contraseña de configuración para instalaciones sensibles | Protección adicional si el equipo se ve comprometido |
| No subir la configuración a repositorios Git públicos | Las claves de acceso y los tokens quedarían expuestos |
| Probar la restauración periódicamente | Verifica que tu copia de seguridad realmente sea utilizable |

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Encuentra tu archivo de configuración** usando `rclone config file` en el terminal de RcloneView.
3. **Configura un trabajo de copia de seguridad automatizado** para copiar la configuración a almacenamiento en la nube cifrado.
4. **Guarda la contraseña de configuración** (si la has establecido) en un gestor de contraseñas — perderla significa perder el acceso a la configuración.

Tu configuración de rclone es el archivo más importante de tu instalación de RcloneView. Protégelo en consecuencia.

---

**Guías relacionadas:**

- [Cifra tus copias de seguridad en la nube con el remoto Crypt](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Terminal de RcloneView: la CLI dentro de la GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Protege RcloneView con bloqueo de aplicación](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />
