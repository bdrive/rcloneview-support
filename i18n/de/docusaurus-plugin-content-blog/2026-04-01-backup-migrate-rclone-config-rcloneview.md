---
slug: backup-migrate-rclone-config-rcloneview
title: "Rclone-Konfiguration mit RcloneView sichern, migrieren und verwalten"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Ihre rclone-Konfigurationsdatei — einschließlich verschlüsselter Remotes — mit RcloneView sichern, wiederherstellen und migrieren. Halten Sie Ihre Cloud-Verbindungen portabel und geschützt."
keywords:
  - Backup rclone Konfiguration
  - rclone Konfiguration migrieren
  - Speicherort der rclone Konfigurationsdatei
  - rcloneview Konfigurations-Backup
  - rclone Konfiguration portabel
  - rclone Remotes exportieren
  - Backup der rclone Konfigurationsdatei
  - rclone auf neuen Computer verschieben
  - rclone Konfigurationsmigration
  - rcloneview Konfigurationsverwaltung
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone-Konfiguration mit RcloneView sichern, migrieren und verwalten

> Ihre rclone-Konfigurationsdatei enthält alle Ihre Cloud-Remote-Konfigurationen — Verbindungsdetails, Authentifizierungstoken, Verschlüsselungsschlüssel und benutzerdefinierte Einstellungen. Sie zu verlieren bedeutet, jeden Remote von Grund auf neu einzurichten. So sichern und migrieren Sie sie und halten sie portabel.

Nachdem Sie Zeit investiert haben, um Dutzende von Cloud-Remotes in RcloneView zu konfigurieren — OAuth-Abläufe, API-Schlüssel, Verschlüsselungs-Passphrasen, benutzerdefinierte Endpunkte — möchten Sie diese Arbeit nicht durch einen Festplattenausfall, eine Neuinstallation des Betriebssystems oder ein Geräte-Upgrade verlieren. Die rclone-Konfigurationsdatei ist eine einzige Textdatei, die dieses gesamte Setup kodiert. Zu verstehen, wo sie liegt und wie man sie schützt, ist für jeden ernsthaften RcloneView-Nutzer essenziell.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wo befindet sich die Rclone-Konfigurationsdatei?

Der Speicherort der Konfigurationsdatei hängt von Ihrem Betriebssystem ab:

| Betriebssystem | Standardspeicherort |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

Sie können den Speicherort im **Terminal** von RcloneView überprüfen:

```bash
rclone config file
```

Dies gibt den genauen Pfad aus, der auf Ihrem System verwendet wird.

## Was steckt in der Konfigurationsdatei

Die Konfigurationsdatei ist eine reine Textdatei im INI-Format. Jeder Abschnitt repräsentiert einen Remote:

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

**Wichtig:** OAuth-Token (für Google Drive, OneDrive, Dropbox) werden in der Konfigurationsdatei gespeichert. Diese Token laufen ab und werden während der Nutzung automatisch erneuert. Sichern Sie die Konfiguration regelmäßig, um die aktuell gültigen Token zu erfassen.

## Sichern der Konfigurationsdatei

### Manuelles Backup

Kopieren Sie die Konfigurationsdatei an einen sicheren Ort:

**Windows:**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux:**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### Automatisiertes Backup mit RcloneView

Richten Sie in RcloneView einen Auftrag ein, um die Konfigurationsdatei selbst im Cloud-Speicher zu sichern:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. Erstellen Sie einen neuen **Copy**-Auftrag.
2. Quelle: der Speicherort der Konfigurationsdatei (`~/.config/rclone/`)
3. Ziel: ein Cloud-Ordner (`s3-backup:system-configs/rclone/`)
4. Zeitplan: wöchentlich oder nach größeren Änderungen.

**Sicherheitshinweis:** Die Konfigurationsdatei enthält Zugangsdaten. Sichern Sie sie nur in verschlüsseltem Speicher oder einem verschlüsselten Cloud-Ordner (z. B. einem Crypt-Remote).

## Verschlüsseln der Konfigurationsdatei im Ruhezustand

Rclone kann die gesamte Konfigurationsdatei mit einem Passwort verschlüsseln. Aktivieren Sie dies über das Terminal von RcloneView:

```bash
rclone config
# Choose: s - Set configuration password
```

Nachdem Sie ein Passwort festgelegt haben, ist die Konfigurationsdatei auf der Festplatte verschlüsselt. Sie benötigen das Passwort jedes Mal, wenn RcloneView startet oder wenn Sie rclone-Befehle ausführen. Dies schützt Zugangsdaten selbst dann, wenn die Konfigurationsdatei gestohlen wird.

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## Migration auf einen neuen Computer

### Methode 1 — Direktes Kopieren

Die einfachste Migration:

1. Kopieren Sie `rclone.conf` von Ihrem alten Computer an denselben Pfad auf dem neuen Computer.
2. Installieren Sie RcloneView auf dem neuen Computer.
3. Öffnen Sie RcloneView — alle Ihre Remotes erscheinen sofort.

Für die meisten Remotes (S3, WebDAV, FTP usw.) ist keine erneute Authentifizierung erforderlich. OAuth-Remotes (Google Drive, OneDrive, Dropbox) verwenden die gespeicherten Token, die gültig bleiben, bis sie ablaufen (typischerweise 60–90 Tage seit der letzten Nutzung).

### Methode 2 — OAuth-Remotes erneut authentifizieren

Wenn OAuth-Token abgelaufen sind, autorisieren Sie jeden betroffenen Remote erneut:

1. Öffnen Sie **Remotes** in RcloneView.
2. Wählen Sie den Remote aus und klicken Sie auf **Edit**.
3. Klicken Sie auf **Re-authorize**, um neue Token zu generieren.

Nur Remotes mit abgelaufenen OAuth-Token benötigen diesen Schritt.

### Methode 3 — Das `--config`-Flag verwenden

Wenn Sie die Konfiguration an einem nicht standardmäßigen Ort aufbewahren (z. B. in Dropbox zur besseren Portabilität), verwenden Sie:

```bash
rclone --config /path/to/rclone.conf <command>
```

Oder setzen Sie die Umgebungsvariable `RCLONE_CONFIG`, um dies zum Standard für alle rclone-Operationen auf diesem Computer zu machen.

## Anzeigen und Bearbeiten der Konfiguration in RcloneView

Die Remote-Verwaltungsoberfläche von RcloneView bietet eine grafische Oberfläche zum Hinzufügen und Bearbeiten von Remotes — aber für Poweruser, die den direkten Zugriff bevorzugen, ist die Konfigurationsdatei immer eine gültige Möglichkeit, Änderungen vorzunehmen. Starten Sie RcloneView nach manueller Bearbeitung der Konfigurationsdatei neu, damit die Änderungen übernommen werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## Best Practices

| Praxis | Warum |
|----------|-----|
| Konfiguration wöchentlich sichern | OAuth-Token werden erneuert; den aktuell gültigen Zustand erfassen |
| Backup-Speicherort verschlüsseln | Die Konfiguration enthält Zugangsdaten und Token |
| Konfigurationspasswort für sensible Installationen verwenden | Zusätzlicher Schutz, falls der Computer kompromittiert wird |
| Konfiguration nicht in öffentliche Git-Repositories einchecken | Zugriffsschlüssel und Token wären offengelegt |
| Wiederherstellung regelmäßig testen | Überprüfen, ob das Backup tatsächlich nutzbar ist |

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Finden Sie Ihre Konfigurationsdatei** mit `rclone config file` im Terminal von RcloneView.
3. **Richten Sie einen automatisierten Backup-Auftrag ein**, um die Konfiguration in verschlüsseltem Cloud-Speicher zu sichern.
4. **Speichern Sie das Konfigurationspasswort** (falls gesetzt) in einem Passwort-Manager — es zu verlieren bedeutet, den Zugriff auf die Konfiguration zu verlieren.

Ihre rclone-Konfiguration ist die wichtigste einzelne Datei in Ihrem RcloneView-Setup. Schützen Sie sie entsprechend.

---

**Weiterführende Anleitungen:**

- [Cloud-Backups mit Crypt-Remote verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneView Terminal: CLI innerhalb der GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [RcloneView mit App Lock absichern](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />
