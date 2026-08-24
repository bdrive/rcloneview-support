---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "Backblaze B2 zu DigitalOcean Spaces migrieren — Dateien mit RcloneView übertragen"
authors:
  - kai
description: "Migrieren Sie Dateien von Backblaze B2 zu DigitalOcean Spaces mit RcloneView mithilfe von Checksum-verifizierten Übertragungen, Filtern und Dry-Run-Vorschauen."
keywords:
  - Backblaze B2 zu DigitalOcean Spaces migrieren
  - Backblaze zu DigitalOcean Übertragung
  - RcloneView Objektspeicher-Migration
  - B2 zu Spaces Migration
  - S3-kompatible Cloud-Migration
  - DigitalOcean Spaces einrichten
  - Backblaze B2 zu Spaces
  - Cloud-Speicheranbieter wechseln
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 zu DigitalOcean Spaces migrieren — Dateien mit RcloneView übertragen

> Um Objektspeicher zwischen zwei S3-kompatiblen Anbietern zu verschieben, müssen Sie keine rclone-Befehle von Hand skripten — RcloneView übernimmt Übertragung, Verifizierung und Filterung über seine grafische Oberfläche.

Teams, die von Backblaze B2 zu DigitalOcean Spaces wechseln, tun dies meist, um ihre Infrastruktur bei einem einzigen Anbieter neben bestehenden Droplets oder App-Platform-Diensten zu konsolidieren. Da beide S3-kompatible Remotes sind, kann RcloneView sich mit einem Access Key, Secret Key und Endpoint mit beiden verbinden und Daten dann direkt zwischen ihnen übertragen, ohne den Umweg über eine lokale Festplatte. Bei Buckets mit Hunderten von Gigabyte an Anwendungs-Backups oder Medien-Assets spart dieser direkte Cloud-zu-Cloud-Pfad im Vergleich zu einem Download-dann-Upload-Workflow erheblich Zeit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes einrichten

Fügen Sie Ihr Backblaze B2 Remote mit der Application Key ID und dem Application Key aus dem B2-Dashboard hinzu, und legen Sie anschließend ein separates Remote für DigitalOcean Spaces mit eigenem Access Key, Secret Key und regionalem Endpoint an (zum Beispiel `nyc3.digitaloceanspaces.com`). Beide erscheinen als Tabs in den Explorer-Panels von RcloneView, sodass Sie den Quell-Bucket und den Ziel-Space vor Beginn jeder Übertragung nebeneinander durchsuchen können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Nutzen Sie ein geteiltes Panel-Layout, um beide Buckets gleichzeitig zu betrachten, und bestätigen Sie, dass Ordnerstruktur und Benennungskonventionen den Erwartungen Ihrer Anwendung entsprechen, bevor Sie sich auf eine vollständige Migration festlegen.

## Eine Checksum-verifizierte Übertragung ausführen

Konfigurieren Sie die Migration als Copy- oder Sync-Job mit aktiviertem Checksum-Vergleich in Schritt 2 des Assistenten — dieser vergleicht Dateien anhand von Hash und Größe statt nur anhand von Zeitstempeln, was wichtig ist, wenn zwischen zwei unterschiedlichen Speicher-Backends migriert wird, die Änderungszeiten möglicherweise unterschiedlich melden. Legen Sie die Anzahl der Dateiübertragungen und Multi-Thread-Übertragungen entsprechend Ihrer Bandbreite fest; vier gleichzeitige Übertragungen sind ein vernünftiger Ausgangspunkt für große Buckets.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

Verwenden Sie vor der vollständigen Migration Dry Run, um genau zu sehen, welche Dateien kopiert würden — so entdecken Sie Namenskonflikte oder unerwartete Dateianzahlen, bevor sich Daten bewegen. S3, Azure und Backblaze B2 lassen sich mit vollem Lese-/Schreibzugriff bereits mit der FREE-Lizenz verbinden, sodass keine Lizenzstufe diesen Migrationspfad blockiert.

## Die Umstellung planen

Führen Sie bei einer schrittweisen Migration zunächst eine vollständige Synchronisation durch, gefolgt von geplanten inkrementellen Synchronisationen (PLUS-Lizenz), die alle vor der endgültigen Umstellung zu Backblaze B2 hinzugefügten Dateien erfassen. So bleiben beide Buckets während der Übergangsphase synchron, statt eine einzige große, riskante Übertragung durchführen zu müssen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Remotes sowohl für Ihren Backblaze B2 Bucket als auch für das DigitalOcean Spaces Ziel hinzu.
3. Führen Sie einen Dry Run aus, um die Übertragung vor dem Kopieren von Dateien zu prüfen.
4. Führen Sie den Copy- oder Sync-Job mit aktivierter Checksum-Verifizierung aus und bestätigen Sie anschließend, dass die Dateianzahlen auf beiden Seiten übereinstimmen.

Eine verifizierte, direkte Cloud-zu-Cloud-Migration bedeutet, dass Ihre Daten intakt in DigitalOcean Spaces ankommen, ohne dass etwas über eine lokale Maschine geleitet wird.

---

**Weitere Anleitungen:**

- [Backblaze B2 Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Backblaze B2 zu AWS S3 migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Google Drive mit RcloneView zu DigitalOcean Spaces migrieren](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
