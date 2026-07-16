---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "Cloudinary-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - jay
description: "Erfahren Sie, wie Sie Ihre digitalen Cloudinary-Assets mit RcloneView zu Amazon S3, Google Drive oder anderem Cloud-Speicher verwalten, synchronisieren und sichern."
keywords:
  - Cloudinary mit RcloneView verwalten
  - Cloudinary-Backup zu S3
  - Cloudinary-Synchronisation Google Drive
  - Cloudinary rclone
  - Cloudinary-Assets sichern
  - Cloudinary-Cloud-Speicherverwaltung
  - Cloudinary-Dateien synchronisieren
  - Backup digitaler Assets Cloudinary
tags:
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudinary-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Cloudinary speichert Ihre produktiven Bild- und Video-Assets — mit RcloneView sichern Sie diese zu Amazon S3, Google Drive oder jeder anderen Cloud, ohne ein einziges Skript zu schreiben.

Cloudinary hat sich zur bevorzugten Plattform für Entwickler und Kreativteams entwickelt, die große Bibliotheken mit Bildern, Videos und Rich-Media-Dateien verwalten. Doch alles nur in Cloudinary zu speichern, schafft einen einzelnen Fehlerpunkt: versehentliches Massenlöschen, Kontoprobleme oder API-Ausfälle können Ihre gesamte Medienbibliothek innerhalb von Minuten unzugänglich machen. RcloneView, aufgebaut auf dem Cloudinary-Backend von rclone, bietet Ihnen eine visuelle Oberfläche, um Ihr Cloudinary-Konto zu durchsuchen, zu synchronisieren und zu jedem anderen unterstützten Cloud-Speicher zu sichern — so behalten Sie eine verifizierte Kopie unter Ihrer eigenen Kontrolle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cloudinary mit RcloneView verbinden

Öffnen Sie RcloneView und wechseln Sie zum Reiter Remote, dann klicken Sie auf Neuer Remote. Wählen Sie Cloudinary aus der Anbieterliste und geben Sie Ihre Zugangsdaten ein, um die Einrichtung abzuschließen. Sobald die Verbindung besteht, erscheint Ihr Cloudinary-Speicher als durchsuchbarer Remote im Explorer-Bereich — nutzen Sie den Ordnerbaum links, um durch Ihre Medienbibliothek zu navigieren, und die Dateiliste rechts, um einzelne Assets mit Name, Größe und Änderungsdatum zu prüfen.

Die Miniaturansicht ist besonders nützlich für Cloudinary-Inhalte: Wechseln Sie in der Dateiliste in den Miniaturansicht-Modus, um ein visuelles Raster Ihrer Bilder anstelle reiner Dateinamen zu erhalten — so lässt sich leicht bestätigen, dass Sie den richtigen Ordner betrachten, bevor Sie eine Aktion auslösen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## Cloudinary-Assets in eine andere Cloud sichern

Öffnen Sie Cloudinary in einem Explorer-Bereich und ein Ziel wie Amazon S3, Backblaze B2 oder Google Drive im anderen, und starten Sie einen Synchronisationsjob über Home-Reiter > Sync. Der 4-stufige Assistent lässt Sie genau festlegen, was übertragen wird:

- Wählen Sie Ihren Cloudinary-Ordner als Quelle und Ihre Backup-Cloud als Ziel
- Verwenden Sie die vordefinierten Dateifilter in Schritt 3 (Bild, Video), um bestimmte Medientypen anzusteuern und unnötige Dateien zu überspringen
- Legen Sie ein maximales Dateialter fest, um inkrementelle Synchronisationen durchzuführen, die nur neu aktualisierte Assets erfassen

Führen Sie immer zuerst einen **Dry Run** (Testlauf) aus — er zeigt genau, welche Dateien übertragen oder übersprungen werden, ohne etwas zu verändern. Bei einer großen Cloudinary-Bibliothek erkennen Sie so Filterfehler, bevor sie zu verpassten Backups führen.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## Automatisierte Cloudinary-Backups planen

Für den fortlaufenden Schutz Ihrer Assets fügt RcloneView PLUS in Schritt 4 des Sync-Assistenten eine crontab-artige Zeitplanung hinzu. Eine nächtliche Synchronisation um 2 Uhr erfasst die am Tag neu hochgeladenen Assets und hält die Bandbreitennutzung außerhalb der Spitzenzeiten. Nutzen Sie die Zeitplan-Simulation, um die nächsten Ausführungszeiten vor dem Speichern zu überprüfen — so gibt es beim ersten geplanten Lauf keine Überraschungen.

Sobald der Job läuft, informieren Sie Benachrichtigungen über den Jobabschluss mit Status, Anzahl der übertragenen Dateien und Datenvolumen. Für Teams mit Dutzenden aktiven Cloudinary-Transformationen und täglichen Uploads bedeutet diese passive Benachrichtigung, dass Sie wissen, dass das Backup korrekt gelaufen ist, ohne sich zur Kontrolle einloggen zu müssen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## Vollständigkeit des Backups überprüfen

Nutzen Sie die Funktion Ordnervergleich (Home-Reiter > Compare), um Ihre Cloudinary-Quelle jederzeit mit dem Backup-Ziel zu vergleichen. RcloneView zeigt nur-links, nur-rechts, identische und unterschiedliche Dateien nebeneinander an — so erkennen Sie Lücken in der Abdeckung auf einen Blick und können fehlende Dateien direkt aus der Vergleichsansicht kopieren, ohne einen neuen Job einzurichten. Für besonders wichtige Medien-Assets verifiziert die Aktivierung von Prüfsummen in den erweiterten Einstellungen des Sync-Jobs den Dateiinhalt über den reinen Größenabgleich hinaus und bestätigt, dass jede Datei unversehrt angekommen ist.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Cloudinary als Remote über Remote-Reiter > Neuer Remote hinzu und schließen Sie die Konfiguration ab.
3. Fügen Sie Ihr Backup-Ziel (Amazon S3, Backblaze B2, Google Drive) als zweiten Remote hinzu.
4. Erstellen Sie einen Synchronisationsjob von Cloudinary zum Ziel, führen Sie einen Dry Run aus, und aktivieren Sie anschließend die PLUS-Zeitplanung für automatisierte tägliche Backups.

Cloudinary speichert Ihre sichtbarsten produktiven Assets — eine synchronisierte Kopie in einer zweiten Cloud verwandelt einen einzelnen Fehlerpunkt in ein zuverlässiges, nachvollziehbares Backup, das vollständig unter Ihrer Kontrolle steht.

---

**Related Guides:**

- [Digitale Assets über mehrere Clouds hinweg mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [Amazon-S3-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Google Fotos auf externer Festplatte oder NAS mit RcloneView sichern](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
