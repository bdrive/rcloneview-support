---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "Google Photos-Speicher verwalten — Fotos mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verbinden Sie Google Photos mit RcloneView und sichern Sie Ihre Fotobibliothek auf lokalem Speicher oder anderen Cloud-Anbietern. Verwalten Sie Google Photos, ohne Originale zu verlieren."
keywords:
  - Google Photos RcloneView Backup
  - Google Photos lokales Backup herunterladen
  - Google Photos Cloud-Synchronisation
  - rclone Google Photos GUI
  - Google Photos auf externer Festplatte sichern
  - Google Photos zu S3 Backup
  - Google Photos-Speicher verwalten
  - RcloneView Google Photos
tags:
  - RcloneView
  - google-photos
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Photos-Speicher verwalten — Fotos mit RcloneView synchronisieren und sichern

> RcloneView verbindet sich über OAuth mit Google Photos, sodass Sie Ihre Fotobibliothek durchsuchen, Originale auf lokalem Speicher oder anderen Cloud-Anbietern sichern und geplante Exporte ausführen können.

Google Photos ist die Standardlösung für die Fotosicherung von Milliarden Android-Nutzern — doch es ist selbst kein Backup. Wenn Ihr Google-Konto kompromittiert wird, das Speicherkontingent überschritten ist oder sich die Nutzungsbedingungen ändern, ist Ihre Fotobibliothek gefährdet. RcloneView verbindet sich mit Google Photos als separater Remote, getrennt von Google Drive, und gibt Ihnen direkten Zugriff auf Ihre Bibliothek zum Herunterladen und Sichern auf externen Festplatten, NAS-Geräten oder kaltem Cloud-Speicher wie Amazon S3 oder Backblaze B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Photos in RcloneView einrichten

Google Photos erscheint als separater Anbieter in der Remote-Einrichtung von RcloneView. Gehen Sie zu **Remote-Tab → Neuer Remote → Google Photos** und authentifizieren Sie sich per OAuth-Browser-Login. Sie werden aufgefordert, RcloneView (über rclone) Lesezugriff auf Ihre Fotos zu gewähren — nach der Autorisierung erscheint Ihre Bibliothek im Explorer-Bereich, organisiert nach Jahr und Album.

Beachten Sie, dass die Google Photos API Fotos in einer bestimmten Struktur darstellt: nach Album oder nach datumsbasierten Ordnern. Sie können Fotos über die API nicht neu organisieren, aber Sie können die Originale in voller Auflösung durchsuchen und herunterladen — einschließlich RAW-Dateien, die von einer Kamera hochgeladen wurden, sofern Sie Google-One-Speicher besitzen.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## Google Photos auf lokalem Speicher sichern

Der häufigste Anwendungsfall ist das Herunterladen Ihrer gesamten Google Photos-Bibliothek auf eine externe Festplatte oder ein NAS. Erstellen Sie im Job Manager einen Kopierauftrag mit Google Photos als Quelle und Ihrer lokalen externen Festplatte (oder dem NAS-Pfad) als Ziel. Aktivieren Sie **vorhandene Dateien überspringen**, damit nachfolgende Läufe inkrementell erfolgen — es werden nur neue Fotos seit dem letzten Backup heruntergeladen.

Für eine Familie mit 10 Jahren an Fotos, verteilt auf 50.000 Bilder mit insgesamt 150 GB, dauert der erste Download mehrere Stunden. Führen Sie ihn über Nacht aus, wobei der Zeitplan auf einmalige Ausführung eingestellt ist. Künftige, wöchentlich geplante Läufe fügen nur die in dieser Woche hochgeladenen neuen Fotos hinzu — so bleibt Ihr lokales Backup aktuell, ohne dass alles erneut übertragen werden muss.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## Cloud-übergreifendes Backup: Google Photos zu S3 oder Backblaze B2

Für ein Cloud-zu-Cloud-Backup legen Sie Google Photos als Quelle und Amazon S3 oder Backblaze B2 als Ziel fest. So entsteht ein unabhängiges Backup Ihrer Fotobibliothek bei einem separaten Cloud-Anbieter — ein Schutz vor Problemen mit dem Google-Konto, ohne dass lokale Speicherkapazität erforderlich ist.

Verwenden Sie Filterregeln in Schritt 3 des Synchronisationsassistenten, um nur bestimmte Dateitypen einzuschließen (`.jpg`, `.heic`, `.mp4`, `.raw`) und Googles Metadaten-JSON-Begleitdateien auszuschließen, falls diese nicht benötigt werden. Setzen Sie in Ihrem regulären Auftrag einen Filter für das maximale Dateialter, um nur Fotos der letzten 12 Monate zu sichern, und richten Sie für das historische Archiv einen separaten einmaligen Auftrag ein.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Google Photos als Remote über die OAuth-Browser-Authentifizierung im Assistenten für neue Remotes hinzu.
3. Erstellen Sie einen Kopierauftrag von Google Photos zu Ihrer externen Festplatte oder Ihrem Cloud-Backup-Bucket.
4. Planen Sie wöchentliche inkrementelle Läufe, um neue Fotos automatisch zu erfassen.

Mit RcloneView wird Google Photos zu einer Quelle, die Sie zuverlässig sichern können — so haben Ihre unersetzlichen Erinnerungen eine Kopie, die unabhängig von Googles Infrastruktur ist.

---

**Weiterführende Anleitungen:**

- [Google Photos mit RcloneView auf externer Festplatte und NAS sichern](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Ihre Cloud-Fotobibliothek mit RcloneView aufräumen](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [Google Drive Cloud-Synchronisation und Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
