---
slug: rcloneview-fedora-rhel-centos-linux
title: "RcloneView unter Fedora, RHEL und CentOS Linux installieren und verwenden"
authors:
  - tayson
description: "RcloneView auf RPM-basierten Linux-Distributionen installieren — Fedora, RHEL, CentOS und Rocky Linux. Cloud-Synchronisation und Backup auf Enterprise- und Workstation-Linux einrichten."
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
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter Fedora, RHEL und CentOS Linux installieren und verwenden

> Fedora, Red Hat Enterprise Linux (RHEL), CentOS Stream und Rocky Linux sind RPM-basierte Distributionen, die weit verbreitet für Workstations und Enterprise-Server eingesetzt werden. RcloneView läuft auf allen davon und bringt visuelle Cloud-Speicher-Verwaltung in das Red-Hat-Ökosystem.

Während Ubuntu- und Debian-basierte Distributionen in Tutorials die meiste Aufmerksamkeit unter Linux erhalten, stellt die RPM-basierte Familie — Fedora (Desktops und Workstations), RHEL (Enterprise), CentOS Stream (Upstream-Testing) und Rocky Linux/AlmaLinux (RHEL-Alternativen) — einen großen Teil der Linux-Einsätze dar. RcloneViews Linux-Build funktioniert über diese gesamte Familie hinweg, und die Einrichtung ist unkompliziert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Unterstützte Distributionen

| Distribution | Version | Architektur |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## Schritt 1 — RcloneView installieren

Laden Sie das passende Linux-Paket von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.

Für RPM-basierte Distributionen wird RcloneView als **AppImage** oder als direkte Binärdatei vertrieben — eine eigenständige ausführbare Datei, die keine Systeminstallation erfordert.

**Herunterladen und ausführen (AppImage):**

```bash
# Download RcloneView AppImage
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# Make it executable
chmod +x RcloneView.AppImage

# Run
./RcloneView.AppImage
```

Alternativ, für einen Desktop-Anwendungseintrag:

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

## Schritt 2 — FUSE installieren (für Mount-Funktionen)

Die Funktion zum Einbinden von Cloud-Laufwerken erfordert FUSE. Auf RPM-basierten Distributionen:

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

Auf RHEL-basierten Systemen müssen Sie möglicherweise auch das FUSE-Modul aktivieren:
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

Überprüfen Sie, ob FUSE verfügbar ist:
```bash
fusermount3 --version
```

## Schritt 3 — Rclone installieren (falls nicht mitgeliefert)

RcloneView benötigt eine separat installierte rclone-Instanz. Auf RPM-basierten Distributionen:

**Mit dem offiziellen rclone-Installer (empfohlen):**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**Mit dnf unter Fedora:**
```bash
sudo dnf install rclone
```

**Installation überprüfen:**
```bash
rclone version
```

## Schritt 4 — RcloneView starten und Remotes hinzufügen

Starten Sie RcloneView und fügen Sie Ihre Cloud-Konten hinzu:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

Für Remotes, die OAuth erfordern (Google Drive, OneDrive, Dropbox), öffnet RcloneView den System-Browser. Bei RHEL-Server-Installationen ohne Desktop verwenden Sie das rclone-Flag `--auth-no-browser` oder autorisieren Sie über einen Rechner mit Browser und kopieren Sie das Token.

## Headless-Server-Bereitstellung (RHEL/CentOS)

Für RHEL-Server ohne Desktop-Umgebung führen Sie RcloneView im Backend-Modus aus und greifen über einen entfernten Browser darauf zu:

1. Starten Sie das API-Backend von RcloneView:
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. Zugriff von einem entfernten Rechner über SSH-Portweiterleitung:
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. Öffnen Sie `http://localhost:5572` in Ihrem lokalen Browser.

## Jobs unter Linux planen

Für automatisierte Backups unter RHEL oder Fedora verwenden Sie systemd-Timer oder cron zusammen mit der Job-Planung von RcloneView:

**Mit cron:**
```bash
# Edit crontab
crontab -e

# Add nightly backup at 2 AM
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**Mit einem systemd-Timer** (bevorzugt unter RHEL 8/9):

Erstellen Sie `/etc/systemd/system/rclone-backup.service`:
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

Erstellen Sie `/etc/systemd/system/rclone-backup.timer`:
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

Aktivieren und starten:
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## SELinux-Überlegungen

RHEL-basierte Distributionen führen SELinux standardmäßig im Enforcing-Modus aus. Falls RcloneView Probleme beim Zugriff auf bestimmte Pfade oder beim Einbinden von Laufwerken hat:

```bash
# Check for SELinux denials
sudo ausearch -m avc -ts recent | grep rclone

# Allow rclone to read user home directories (if needed)
sudo setsebool -P user_home_t:process allow_execmem 1
```

Die meisten Vorgänge funktionieren ohne SELinux-Änderungen. Mount-Vorgänge erfordern möglicherweise den passenden SELinux-Kontext auf dem Mount-Punkt.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **FUSE installieren** für Mount-Unterstützung: `sudo dnf install fuse fuse3`.
3. **rclone installieren** über den offiziellen Installer.
4. **RcloneView starten**, Ihre Cloud-Remotes hinzufügen und mit der Verwaltung von Cloud-Speicher beginnen.

Fedora-Workstations und RHEL-Server sind erstklassige Bürger in RcloneViews Linux-Unterstützung. Alle 70+ Cloud-Anbieter, Einbinden (mount), Verschlüsselung, Planung und Ordnervergleich funktionieren genauso wie auf jeder anderen Plattform.

---

**Weitere Anleitungen:**

- [RcloneView unter Ubuntu und Debian Linux installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView auf ARM Linux ausführen](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [RcloneView in Docker ausführen](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
