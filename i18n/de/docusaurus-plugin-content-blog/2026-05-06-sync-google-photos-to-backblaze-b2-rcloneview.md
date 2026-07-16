---
slug: sync-google-photos-to-backblaze-b2-rcloneview
title: "Google Fotos mit Backblaze B2 synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Sichern Sie Ihre Google Fotos-Bibliothek mit RcloneView auf Backblaze B2. Automatisieren Sie die Foto-Archivierung direkt von Google Fotos in den Objektspeicher — ohne manuelle Downloads."
keywords:
  - sync Google Photos to Backblaze B2
  - Google Photos Backblaze B2 backup
  - RcloneView Google Photos backup
  - Google Photos to B2 transfer
  - backup Google Photos object storage
  - Google Photos archive B2
  - RcloneView photo backup
  - Google Photos cloud backup tool
  - Backblaze B2 photo archive
  - automated Google Photos backup
tags:
  - RcloneView
  - google-photos
  - backblaze-b2
  - cloud-to-cloud
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Fotos mit Backblaze B2 synchronisieren — Cloud-Backup mit RcloneView

> RcloneView erstellt eine automatisierte Backup-Pipeline von Google Fotos zu Backblaze B2 — Ihre Fotobibliothek bleibt mit minimalem Aufwand sicher in kostengünstigem Objektspeicher aufbewahrt.

Google Fotos ist die Fotobibliothek für Milliarden von Nutzern, doch sich für unersetzliche Erinnerungen allein auf einen Cloud-Anbieter zu verlassen, birgt reale Risiken. Professionelle Fotografen, Familienarchivare und Content-Ersteller, die Google Fotos als primäre Bibliothek nutzen, profitieren enorm von einem automatisierten Zweit-Backup auf Backblaze B2 — einer kosteneffizienten Objektspeicher-Plattform. RcloneView übernimmt diese Pipeline automatisch und synchronisiert neue Fotos von Google Fotos zu B2 nach einem von Ihnen festgelegten Zeitplan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Fotos und Backblaze B2 in RcloneView verbinden

Beide Anbieter lassen sich unkompliziert in RcloneView hinzufügen. Für Google Fotos gehen Sie zu Remote-Tab > Neues Remote, wählen Google Fotos aus und schließen die browserbasierte OAuth-Authentifizierung ab. Für Backblaze B2 wählen Sie Backblaze B2 aus und geben Ihre Application Key ID und Ihren Application Key aus der B2-Konsole ein.

Die Google Fotos-Integration von RcloneView zeigt Ihre Bibliothek organisiert nach Album und Datum an. Sie können Jahr/Monat-Ordner durchsuchen und über den Datei-Explorer auf alle Mediendateien — Fotos und Videos — zugreifen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Den Synchronisationsjob von Google Fotos zu B2 konfigurieren

Erstellen Sie in RcloneView einen Synchronisationsjob mit Ihrem Google Fotos-Remote als Quelle und einem Backblaze B2-Bucket als Ziel. Ein Fotostudio, das 500 GB an Kundenaufnahmen sichert, kann bestimmte Google Fotos-Alben als Quellordner festlegen und jedes Album einer entsprechenden B2-Ordnerstruktur zuordnen.

Aktivieren Sie in den erweiterten Einstellungen des Synchronisationsjobs die **Prüfsummen**-Verifizierung, um zu bestätigen, dass jede zu B2 übertragene Foto- und Videodatei mit der Quelle übereinstimmt. Dies ist bei Fotoarchiven entscheidend, da stille Datenkorruption verheerend wäre.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Photos to Backblaze B2 in RcloneView" class="img-large img-center" />

## Automatisierte Foto-Backups planen (PLUS)

Mit einer PLUS-Lizenz können Sie die Synchronisation von Google Fotos zu B2 automatisch ausführen lassen. Eine tägliche Synchronisation um 3 Uhr morgens erfasst die Fotos und Videos des Vortages, ohne die Leistung tagsüber zu beeinträchtigen. Die inkrementelle Synchronisation von RcloneView überträgt nur neue und geänderte Dateien, wodurch die Jobdauer nach Abschluss des anfänglichen vollständigen Backups kurz bleibt.

Der Filter **Max file age** kann inkrementelle Synchronisationen weiter verfeinern — mit `Max file age: 7d` werden nur Fotos übertragen, die in der letzten Woche hinzugefügt wurden, ideal für häufige, aber schlanke Synchronisationsjobs.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Photos to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Fortschritt überwachen und Backup-Vollständigkeit prüfen

Der Transfer-Tab von RcloneView zeigt den Backup-Fortschritt live an: Dateinamen, Übertragungsgeschwindigkeit und Gesamtbytes. Nach jedem geplanten Lauf erfasst der Job-Verlauf eine vollständige Zusammenfassung. Bei Fotobibliotheken mit Tausenden von Dateien dient dieses Verlaufsprotokoll als Nachweis der Backup-Vollständigkeit — unverzichtbar für Fotografen, die ihren Kunden zusichern müssen, dass ihre Bilder sicher archiviert sind.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos to Backblaze B2 sync progress in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Google Fotos (OAuth) und Backblaze B2 (Application Key) als Remotes hinzu.
3. Erstellen Sie einen Synchronisationsjob von Google Fotos zu Ihrem B2-Bucket mit aktivierter Prüfsumme.
4. Planen Sie automatisierte tägliche Läufe mit PLUS und verfolgen Sie den Fortschritt im Job-Verlauf.

Mit RcloneView, das Ihre Pipeline von Google Fotos zu Backblaze B2 automatisiert, ist Ihre Fotobibliothek stets in einem unabhängigen Zweitarchiv in der Cloud geschützt.

---

**Weiterführende Anleitungen:**

- [Google Fotos-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Backblaze B2-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Google Fotos mit RcloneView zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-google-photos-to-onedrive-rcloneview)

<CloudSupportGrid />
