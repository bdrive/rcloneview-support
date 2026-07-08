---
slug: rcloneview-fedora-rhel-centos-linux
title: "Instalar y usar RcloneView en Fedora, RHEL y CentOS Linux"
authors:
  - tayson
description: "Instala RcloneView en distribuciones Linux basadas en RPM — Fedora, RHEL, CentOS y Rocky Linux. Configura sincronización y copia de seguridad en la nube en Linux empresarial y de estación de trabajo."
keywords:
  - rcloneview fedora
  - rcloneview rhel
  - rcloneview centos
  - rclone gui rpm linux
  - install rcloneview fedora linux
  - rclone gui red hat linux
  - rcloneview rocky linux
  - cloud sync fedora linux
  - rclone centos gui
  - rpm based linux cloud management
tags:
  - RcloneView
  - linux
  - platform
  - installation
  - guide
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Instalar y usar RcloneView en Fedora, RHEL y CentOS Linux

> Fedora, Red Hat Enterprise Linux (RHEL), CentOS Stream y Rocky Linux son distribuciones basadas en RPM ampliamente utilizadas en estaciones de trabajo y servidores empresariales. RcloneView funciona en todas ellas, aportando gestión visual de almacenamiento en la nube al ecosistema de Red Hat.

Mientras que las distribuciones basadas en Ubuntu y Debian reciben la mayor parte de la atención en los tutoriales de Linux, la familia basada en RPM — Fedora (escritorios y estaciones de trabajo), RHEL (empresarial), CentOS Stream (pruebas upstream) y Rocky Linux/AlmaLinux (alternativas a RHEL) — representa una gran parte de los despliegues de Linux. La versión Linux de RcloneView funciona en toda esta familia, y la configuración es sencilla.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Distribuciones compatibles

| Distribución | Versión | Arquitectura |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## Paso 1 — Instalar RcloneView

Descarga el paquete de Linux correspondiente desde [rcloneview.com](https://rcloneview.com/src/download.html).

Para distribuciones basadas en RPM, RcloneView se distribuye como un **AppImage** o un binario directo — un ejecutable autocontenido que no requiere instalación en el sistema.

**Descargar y ejecutar (AppImage):**

```bash
# Download RcloneView AppImage
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# Make it executable
chmod +x RcloneView.AppImage

# Run
./RcloneView.AppImage
```

Alternativamente, para una entrada de aplicación de escritorio:

```bash
# Move to a standard location
mkdir -p ~/.local/bin
mv RcloneView.AppImage ~/.local/bin/rcloneview

# Create a desktop entry (optional)
cat > ~/.local/share/applications/rcloneview.desktop << EOF
[Desktop Entry]
Name=RcloneView
Exec=/home/$USER/.local/bin/rcloneview
Icon=rcloneview
Type=Application
Categories=Utility;Network;
EOF
```

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Linux" class="img-large img-center" />

## Paso 2 — Instalar FUSE (para funciones de montaje)

La función de montaje de unidades en la nube requiere FUSE. En distribuciones basadas en RPM:

**Fedora:**
```bash
sudo dnf install fuse fuse3
sudo modprobe fuse
```

**RHEL / CentOS Stream / Rocky Linux:**
```bash
sudo dnf install fuse fuse3
# Add your user to the fuse group
sudo usermod -aG fuse $USER
```

En sistemas basados en RHEL, es posible que también debas habilitar el módulo FUSE:
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

Verifica que FUSE esté disponible:
```bash
fusermount3 --version
```

## Paso 3 — Instalar Rclone (si no está incluido)

RcloneView requiere que rclone esté instalado por separado. En distribuciones basadas en RPM:

**Usando el instalador oficial de rclone (recomendado):**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**Usando dnf en Fedora:**
```bash
sudo dnf install rclone
```

**Verificar la instalación:**
```bash
rclone version
```

## Paso 4 — Iniciar RcloneView y agregar remotos

Inicia RcloneView y agrega tus cuentas en la nube:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

Para remotos que requieren OAuth (Google Drive, OneDrive, Dropbox), RcloneView abre el navegador del sistema. En instalaciones de servidor RHEL sin escritorio, usa la opción `--auth-no-browser` de rclone o autoriza desde una máquina que tenga navegador y copia el token.

## Despliegue en servidor sin interfaz gráfica (RHEL/CentOS)

Para servidores RHEL sin entorno de escritorio, ejecuta RcloneView en su modo backend y accede a él a través de un navegador remoto:

1. Inicia el backend de la API de RcloneView:
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. Accede desde una máquina remota mediante reenvío de puertos SSH:
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. Abre `http://localhost:5572` en tu navegador local.

## Programación de tareas en Linux

Para copias de seguridad automatizadas en RHEL o Fedora, usa temporizadores de systemd o cron junto con la programación de tareas de RcloneView:

**Usando cron:**
```bash
# Edit crontab
crontab -e

# Add nightly backup at 2 AM
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**Usando un temporizador de systemd** (preferido en RHEL 8/9):

Crea `/etc/systemd/system/rclone-backup.service`:
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

Crea `/etc/systemd/system/rclone-backup.timer`:
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

Habilita e inicia:
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## Consideraciones sobre SELinux

Las distribuciones basadas en RHEL ejecutan SELinux en modo enforcing de forma predeterminada. Si RcloneView tiene problemas para acceder a ciertas rutas o montar unidades:

```bash
# Check for SELinux denials
sudo ausearch -m avc -ts recent | grep rclone

# Allow rclone to read user home directories (if needed)
sudo setsebool -P user_home_t:process allow_execmem 1
```

La mayoría de las operaciones funcionan sin modificaciones de SELinux. Las operaciones de montaje pueden requerir el contexto SELinux adecuado en el punto de montaje.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Instala FUSE** para soporte de montaje: `sudo dnf install fuse fuse3`.
3. **Instala rclone** mediante el instalador oficial.
4. **Ejecuta RcloneView**, agrega tus remotos en la nube y comienza a gestionar el almacenamiento en la nube.

Las estaciones de trabajo Fedora y los servidores RHEL son ciudadanos de primera clase en el soporte de Linux de RcloneView. Más de 70 proveedores de nube, montaje, cifrado, programación y comparación de carpetas funcionan igual que en cualquier otra plataforma.

---

**Guías relacionadas:**

- [Instalar RcloneView en Ubuntu y Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Ejecutar RcloneView en ARM Linux](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [Ejecutar RcloneView en Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
