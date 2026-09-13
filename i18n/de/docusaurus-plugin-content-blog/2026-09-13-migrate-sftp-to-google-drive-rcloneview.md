---
slug: migrate-sftp-to-google-drive-rcloneview
title: "SFTP zu Google Drive migrieren — Dateien mit RcloneView übertragen"
authors:
  - kai
description: "Migrieren Sie Dateien von einem SFTP-Server zu Google Drive mit dem Dual-Pane-Explorer, der Dry-Run-Vorschau und geplanten Sync-Jobs von RcloneView."
keywords:
  - RcloneView
  - SFTP zu Google Drive migrieren
  - SFTP-zu-Cloud-Migration
  - SFTP-Dateien übertragen
  - SSH-Dateiübertragung in die Cloud
  - Cloud-Speicher-Migration
  - SFTP-Client-GUI
  - Google-Drive-Backup
  - sicheres Dateiübertragungstool
  - SFTP-Server stilllegen
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP zu Google Drive migrieren — Dateien mit RcloneView übertragen

> Einen alternden SFTP-Server außer Dienst stellen, ohne eine einzige Datei zu verlieren — mit RcloneView wandert alles direkt zu Google Drive.

Viele Teams betreiben nach wie vor einen internen SFTP-Server für Dateiablagen, doch die Pflege von SSH-Zugangsdaten, Firewall-Regeln und Speicherplatz auf dieser Maschine wird teuer im Vergleich dazu, Speicherung und Freigabe Google Drive zu überlassen. RcloneView verbindet sich im selben Fenster sowohl mit einem SFTP-Host als auch mit Google Drive, sodass Sie zwischen beiden browsen, vergleichen und übertragen können, ohne ein Terminal anzufassen. Das ist ein praktischer erster Schritt für ein kleines IT-Team, das einen veralteten Dateiserver migriert, bevor die Hardware endgültig stillgelegt wird.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP-Server und Google Drive nebeneinander verbinden

Fügen Sie zuerst das SFTP-Remote hinzu: Geben Sie im New-Remote-Assistenten die Hostadresse und die SSH-Zugangsdaten ein, standardmäßig über Port 22. Fügen Sie anschließend Google Drive als zweites Remote über den OAuth-Browser-Login hinzu — ohne Eingabe eines API-Schlüssels. Öffnen Sie beide in separaten Explorer-Panels über das geteilte Panel-Layout von RcloneView, sodass Sie die vollständige Ordnerstruktur beider Seiten gleichzeitig sehen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView bindet und synchronisiert über 90 Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux, sodass dieselbe Einrichtung funktioniert, egal ob sich der SFTP-Server im lokalen Netzwerk befindet oder nur über einen Jump-Host erreichbar ist.

## Die Migration vor der Ausführung in der Vorschau prüfen

Bevor Sie jahrelang angesammelte Dateien übertragen, führen Sie einen Folder Compare zwischen dem SFTP-Root und dem Ziel-Ordner auf Google Drive aus, um genau zu sehen, was auf der Zielseite fehlt. Konfigurieren Sie die Übertragung dann als Sync-Job und nutzen Sie Dry Run, um die Kopie zu simulieren — RcloneView listet jede Datei auf, die verschoben würde, und jeden Ordner, der erstellt würde, ohne dass tatsächlich etwas geschrieben wird, bis Sie bestätigen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

Dieser Schritt ist besonders wichtig, wenn sich auf dem SFTP-Server über Jahre verschachtelte Ordner mit inkonsistenter Benennung angesammelt haben — der Dry Run deckt Überraschungen auf, bevor sie zu einem nächtlichen Support-Vorfall werden.

## Die restliche Übertragung mit geplanten Jobs automatisieren

Versuchen Sie bei einem großen SFTP-Archiv nicht, alles in einem Rutsch zu verschieben. Speichern Sie die Migration als Job im Job Manager, stellen Sie die Anzahl der Dateiübertragungen entsprechend dem realistischen Durchsatz Ihres Netzwerks ein und lassen Sie sie im Hintergrund laufen, während Sie in anderen Explorer-Panels weiterarbeiten. Muss der SFTP-Server während der Umstellung noch ein paar Wochen weiterlaufen, sorgt die Zeitplanung der PLUS-Lizenz mit einem Crontab-artigen Zeitplan dafür, dass Google Drive bis zur Abschaltung des alten Servers auf dem neuesten Stand bleibt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren SFTP-Server mit Hostadresse und SSH-Zugangsdaten als Remote hinzu.
3. Fügen Sie Google Drive über den OAuth-Browser-Login als zweites Remote hinzu.
4. Führen Sie Folder Compare und Dry Run aus, und speichern Sie die Übertragung als Job, bevor Sie sie tatsächlich ausführen.

Sobald der Sync-Job bei einem wiederholten Lauf sauber abschließt, ohne dass noch etwas zu kopieren ist, kann der alte SFTP-Server bedenkenlos abgeschaltet werden.

---

**Verwandte Anleitungen:**

- [SFTP-Serverspeicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Google-Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [SFTP und SMB mit RcloneView als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
