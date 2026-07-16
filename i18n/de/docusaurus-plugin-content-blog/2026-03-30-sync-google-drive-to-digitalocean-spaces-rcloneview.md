---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "Google Drive mit DigitalOcean Spaces synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Synchronisieren Sie Google Drive mit DigitalOcean Spaces für ein erschwingliches, S3-kompatibles Cloud-Backup. Richten Sie automatisierte Synchronisationsjobs mit der visuellen Oberfläche von RcloneView ein."
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit DigitalOcean Spaces synchronisieren — Cloud-Backup mit RcloneView

> Ein Backup von Google Drive zu DigitalOcean Spaces bietet Ihnen ein erschwingliches, S3-kompatibles Sicherheitsnetz für jede Datei in Ihrem Drive.

Google Drive eignet sich hervorragend für Zusammenarbeit und Echtzeitbearbeitung, ist aber nicht als Ziel für Archiv-Backups konzipiert. DigitalOcean Spaces bietet S3-kompatiblen Objektspeicher zum Pauschalpreis von 5 $ pro Monat für 250 GB (zusätzlicher Speicher kostet 0,02 $/GB) und ist damit ein berechenbares und erschwingliches Ziel für Drive-Backups. RcloneView verbindet beide Dienste und hält sie über geplante Jobs mit Echtzeit-Fortschrittsüberwachung synchron.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum DigitalOcean Spaces für Google-Drive-Backups

DigitalOcean Spaces bietet S3-kompatiblen Objektspeicher in mehreren Regionen (NYC, SFO, AMS, SGP, FRA). Das Pauschalpreismodell verhindert die unerwarteten Kosten pro Anfrage, die bei AWS S3 auftreten können. Für Teams, die bereits Infrastruktur auf DigitalOcean betreiben, lässt sich Spaces nativ integrieren — von Google Drive synchronisierte Dateien sind sofort für Droplets, Kubernetes-Cluster und Serverless-Funktionen zugänglich.

Die nativen Backup-Optionen von Google Drive sind begrenzt. Google Takeout erstellt einmalige Exporte, keine kontinuierlichen Spiegelungen. Backup-Tools von Drittanbietern verlangen oft Gebühren pro Nutzer, die mit den Kosten zusätzlicher Google-Workspace-Lizenzen konkurrieren. Die Synchronisation von Drive zu Spaces über RcloneView kostet nur die Spaces-Speichergebühr und läuft auf Ihrem eigenen Rechner oder Server.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Einrichten der Remotes

Fügen Sie ein Google-Drive-Remote in RcloneView hinzu, indem Sie „Google Drive" als Anbieter auswählen. Der OAuth-Ablauf authentifiziert über Ihren Browser — melden Sie sich mit Ihrem Google-Konto an und erteilen Sie den Zugriff. Sie können das Remote auf Ihr gesamtes Drive, ein bestimmtes geteiltes Drive oder einen einzelnen Ordner beschränken, indem Sie die Root-Ordner-ID konfigurieren.

Erstellen Sie für DigitalOcean Spaces ein S3-kompatibles Remote. Wählen Sie „Amazon S3 Compliant" und dann „DigitalOcean Spaces" aus dem Anbieter-Dropdown. Geben Sie Ihren Spaces-Zugriffsschlüssel und geheimen Schlüssel ein (generiert im DigitalOcean-Kontrollpanel unter API > Spaces Keys). Setzen Sie den Endpunkt auf Ihre bevorzugte Region, z. B. `nyc3.digitaloceanspaces.com` oder `fra1.digitaloceanspaces.com`. RcloneView validiert die Anmeldedaten und listet Ihre vorhandenen Spaces auf.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## Den Synchronisationsjob erstellen

Öffnen Sie den Job-Manager von RcloneView und erstellen Sie einen neuen Job. Legen Sie Google Drive als Quelle und Ihren DigitalOcean Space als Ziel fest. Wählen Sie den Modus „Sync", um eine exakte Spiegelung zu erhalten, oder „Copy", wenn Sie gelöschte Dateien in Spaces auch dann behalten möchten, wenn sie aus Drive entfernt wurden.

Google Drive speichert Google Docs, Sheets und Slides als Cloud-native Formate ohne herkömmliche Dateierweiterungen. RcloneView exportiert diese während der Übertragung automatisch als Microsoft-Office-Äquivalente (`.docx`, `.xlsx`, `.pptx`), damit sie als nutzbare Dateien in Spaces landen. Sie können das Exportformat in der Remote-Konfiguration anpassen, wenn Sie PDF oder andere Formate bevorzugen.

Konfigurieren Sie parallele Übertragungen, um die erste Synchronisation zu beschleunigen. Vier bis acht gleichzeitige Übertragungen funktionieren in der Regel gut innerhalb der API-Kontingente von Google Drive. Legen Sie ein Bandbreitenlimit fest, wenn Sie die Verbindung mit anderen Diensten teilen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## Planung und laufende Wartung

Planen Sie den Synchronisationsjob so, dass er nächtlich oder wöchentlich läuft, je nachdem, wie häufig sich Ihr Drive ändert. Der Scheduler von RcloneView unterstützt cron-artige Zeitplanung, und jeder Lauf überträgt nur Dateien, die sich seit der letzten Synchronisation geändert haben. Das Job-Verlaufspanel protokolliert jeden Lauf mit Zeitstempeln, Dateianzahlen und Übertragungsvolumen.

DigitalOcean Spaces unterstützt ein integriertes CDN. Sobald Ihre Drive-Dateien synchronisiert sind, können Sie das Spaces-CDN aktivieren, um Dateien global auszuliefern — nützlich für die Verteilung von Marketingmaterial, Dokumentation oder Medien, die ursprünglich in Google Drive lagen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Authentifizieren Sie Ihr Google-Drive-Konto über OAuth und beschränken Sie das Remote optional auf einen bestimmten Ordner oder ein geteiltes Drive.
3. Fügen Sie Ihr DigitalOcean-Spaces-Remote mit Ihren API-Schlüsseln und dem Region-Endpunkt hinzu.
4. Erstellen Sie einen Sync-Job und planen Sie ihn für einen wiederkehrenden Ablauf zum kontinuierlichen Backup.

Mit einer Synchronisation von Google Drive zu DigitalOcean Spaces leben Ihre Dateien in zwei unabhängigen Clouds — geschützt vor versehentlichem Löschen, Kontosperrungen und Anbieterausfällen.

---

**Verwandte Anleitungen:**

- [Google Drive einfach auf ein anderes Konto übertragen](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [DigitalOcean Spaces als lokales Laufwerk mit RcloneView einbinden](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [Linode Object Storage, S3 und Google Drive mit RcloneView synchronisieren](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />
