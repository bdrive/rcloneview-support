---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "DigitalOcean Spaces verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie DigitalOcean Spaces mit RcloneView und verwalten Sie Ihren Object Storage mit einer grafischen Oberfläche. Synchronisieren, sichern und übertragen Sie Dateien über Regionen hinweg – ganz ohne CLI-Befehle."
keywords:
  - DigitalOcean Spaces RcloneView
  - DigitalOcean Spaces Synchronisation
  - DigitalOcean Spaces Backup
  - S3-kompatible Object-Storage-GUI
  - DigitalOcean Spaces Verwaltung
  - rclone DigitalOcean Spaces
  - Cloud-Object-Storage-Synchronisation
  - DigitalOcean Backup-Tool
tags:
  - digitalocean-spaces
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DigitalOcean Spaces verwalten — Dateien synchronisieren und sichern mit RcloneView

> RcloneView verbindet sich über die S3-kompatible API mit DigitalOcean Spaces und bietet Ihnen einen visuellen Dateimanager für Ihre Object-Storage-Buckets in jeder Region.

DigitalOcean Spaces ist ein entwicklerfreundlicher Object-Storage-Dienst mit einem flachen Preismodell und integriertem CDN. Teams, die Workloads auf DigitalOcean Droplets betreiben, speichern oft Backups, statische Assets und Deployment-Artefakte in Spaces. RcloneView legt eine grafische Schicht über das S3-kompatible Backend von rclone, sodass Sie Buckets visuell durchsuchen, geplante Synchronisationen ausführen und lokale Verzeichnisse mit dem Remote-Speicher vergleichen können — ganz ohne die CLI zu benutzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichtung von DigitalOcean Spaces in RcloneView

DigitalOcean Spaces verwendet S3-kompatible APIs, daher konfigurieren Sie es in RcloneView als S3-Remote. Navigieren Sie zu **Remote-Tab → Neuer Remote → Amazon S3 Compatible** und wählen Sie **DigitalOcean Spaces** als Anbieter. Sie benötigen:

- **Access Key ID** — generiert im DigitalOcean Control Panel unter API → Spaces Keys
- **Secret Access Key** — wird nur einmal bei der Erstellung angezeigt
- **Endpoint** — regionsspezifisch, zum Beispiel `nyc3.digitaloceanspaces.com`

Nach dem Speichern erscheinen Ihre Spaces-Buckets sofort im Explorer-Panel. Sie können den Bucket-Inhalt durchsuchen, Dateien per Drag-and-Drop aus lokalen Ordnern hochladen und Panels nebeneinander öffnen, um das Backup-Verzeichnis eines Droplets mit dem Spaces-Bucket zu vergleichen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## Lokale Server mit DigitalOcean Spaces synchronisieren

Ein typischer Anwendungsfall: Ein Entwicklungsteam erzeugt auf einem CI-Server Build-Artefakte und möchte diese nachts zur Langzeitspeicherung nach Spaces übertragen. Erstellen Sie mit dem Job-Manager von RcloneView einen Synchronisationsjob vom lokalen Artefakt-Verzeichnis zu `do-spaces:artifacts-bucket/builds`. Legen Sie den Zeitplan auf 3:00 Uhr fest, aktivieren Sie die Prüfsummenverifizierung und fügen Sie einen Filter für die maximale Dateigröße hinzu, um temporäre Dateien über 500 MB auszuschließen.

Mit der 1:N-Synchronisationsoption können Sie dasselbe Artefakt-Verzeichnis gleichzeitig mit DigitalOcean Spaces und Amazon S3 spiegeln — nützlich für Teams, die eine regionsübergreifende Redundanz pflegen oder zwischen Speicheranbietern wechseln.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## Regionen- und anbieterübergreifende Übertragungen

Wenn Sie Daten zwischen Spaces-Regionen verschieben müssen (z. B. von `nyc3` nach `sfo3`) oder vollständig zu einem anderen S3-kompatiblen Anbieter migrieren, führt RcloneView dies als direkte Cloud-zu-Cloud-Übertragung aus. Öffnen Sie zwei Explorer-Panels — eines mit dem Quell-Spaces-Bucket und eines mit dem Ziel — und nutzen Sie dann Drag-and-Drop oder den Synchronisationsassistenten.

Für große Migrationen setzen Sie **Anzahl der Dateiübertragungen** in Schritt 2 des Synchronisationsassistenten auf 8–16, um den Durchsatz zu maximieren. Der Echtzeit-Übertragungsmonitor von RcloneView zeigt den Fortschritt pro Datei und die Gesamtgeschwindigkeit an, sodass Sie die Fertigstellungszeit für große Datensätze abschätzen können.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erzeugen Sie einen Spaces-Zugriffsschlüssel im DigitalOcean Control Panel.
3. Erstellen Sie in RcloneView einen neuen S3-Remote mit Ihren Spaces-Zugangsdaten und dem Endpoint.
4. Erstellen Sie im Job-Manager einen Synchronisationsjob für Ihren Spaces-Bucket und legen Sie einen Zeitplan fest.

DigitalOcean Spaces wird zu einem vollständig verwalteten, geplanten Backup-Ziel — mit Echtzeitüberwachung und Jobverlauf in einer einzigen Oberfläche.

---

**Weiterführende Anleitungen:**

- [Google Drive mit RcloneView zu DigitalOcean Spaces migrieren](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [DigitalOcean Spaces mit RcloneView als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
