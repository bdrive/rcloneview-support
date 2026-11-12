---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "Cloud-Speicher für Ahnenforscher — Familiengeschichte-Archive mit RcloneView bewahren"
authors:
  - tayson
description: "Schützen Sie gescannte Urkunden, Stammbaumdateien und Zeitzeugen-Aufnahmen mit RcloneView: Multi-Cloud-Backup, Verschlüsselung und Prüfung für genealogische Archive."
keywords:
  - Cloud-Speicher für Ahnenforschung
  - Backup der Familiengeschichte
  - Backup genealogischer Archive
  - Stammbaumdateien sichern
  - gescannte Familiendokumente in der Cloud
  - Backup von Zeitzeugen-Aufnahmen
  - Dateispeicher für genealogische Vereine
  - Familienfotos in mehreren Clouds bewahren
  - verschlüsseltes Backup von DNA-Daten
  - RcloneView Ahnenforschung
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Ahnenforscher — Familiengeschichte-Archive mit RcloneView bewahren

> Jahrzehnte an Forschung können auf einer einzigen Laptop-Festplatte liegen. RcloneView kopiert sie in mehrere Clouds und prüft, dass jede Kopie übereinstimmt.

Genealogische Archive wachsen in ungewöhnlichen Formen. Ein Familienforscher besitzt vielleicht 40.000 TIFF-Scans von Kirchenbüchern, einige GEDCOM-Exporte des Stammbaums, stundenlange WAV-Interviews mit älteren Verwandten und rohe DNA-Datendateien. Ehrenamtliche genealogische Vereine bewahren dieselbe Mischung auf gemeinsamen Laufwerken und übrig gebliebenen USB-Festplatten auf. RcloneView bietet beiden Gruppen eine Desktop-App, um dieses Archiv in den Cloud-Speicher zu kopieren, den sie bereits nutzen, und die Kopien aktuell zu halten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Alle Archivorte in einem Fenster

Die meisten Forscher verteilen ihr Material auf mehrere Dienste: einen Google Drive-Ordner, den sie mit Cousins teilen, einen Dropbox-Link von einem entfernten Archiv und eine externe Festplatte mit den Master-Scans. In RcloneView fügen Sie jeden davon als Remote hinzu. Google Drive, Dropbox, OneDrive und pCloud werden über eine Browser-Anmeldung verbunden. Backblaze B2 benötigt eine Application Key ID und einen Schlüssel. Ein Synology NAS kann im lokalen Netzwerk erkannt werden.

Öffnen Sie bis zu vier Explorer-Panels nebeneinander und ziehen Sie einen Ordner mit Scans von der externen Festplatte auf ein Cloud-Remote. Ziehen zwischen verschiedenen Remotes kopiert, sodass die Originale an ihrem Platz bleiben.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## Mehr als eine Kopie unersetzlicher Scans

Eine neu gescannte Volkszählungsseite ist lästig. Eine verlorene Aufnahme der Stimme eines Großelternteils ist für immer weg. Nutzen Sie die 1:N-Synchronisation, um einen Quellordner in einem Job an mehrere Ziele zu senden, zum Beispiel einen Master-Scan-Ordner sowohl an pCloud als auch an einen Backblaze B2-Bucket. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese- und Schreibzugriff auf der FREE License.

Verwenden Sie vor dem ersten Lauf Dry Run, um aufzulisten, was kopiert und gelöscht wird. Eine einseitige Synchronisation ändert nur das Ziel, sodass der Master-Ordner auf Ihrer Festplatte nie angetastet wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## DNA-Daten und Unterlagen lebender Verwandter schützen

Rohe DNA-Dateien und Unterlagen über lebende Personen erfordern mehr Sorgfalt als ein Heiratsregister aus dem 19. Jahrhundert. Umhüllen Sie einen Cloud-Ordner mit einem **Crypt**-Remote, und RcloneView verschlüsselt Dateinamen, Ordnernamen und Inhalte vor dem Hochladen. Der Anbieter speichert nur verschlüsselte Daten, und Sie durchsuchen sie in RcloneView wie gewohnt entschlüsselt. Bewahren Sie das Crypt-Passwort an einem sicheren Ort auf: Ohne es können die Dateien nicht entschlüsselt werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## Kopien prüfen und Aktualisierungen automatisieren

Vergleichen Sie mit Folder Compare den lokalen Master mit jeder Cloud-Kopie. Filter zeigen Dateien, die nur auf einer Seite existieren oder sich in der Größe unterscheiden, und Copy right oder Copy left schließt eine Lücke mit einem Klick. Mit einer PLUS License kann ein Zeitplan im crontab-Stil die Synchronisation jeden Sonntagabend ausführen, und Job History zeichnet Status, Größe und Dateianzahl jedes Laufs auf.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Ihre externe Festplatte oder Ihr NAS sowie zwei Cloud-Remotes hinzu, etwa pCloud und Backblaze B2.
3. Erstellen Sie einen Synchronisationsjob von Ihrem Master-Archivordner mit beiden Clouds als Ziel und führen Sie dann einen Dry Run aus.
4. Fügen Sie ein Crypt-Remote für DNA-Dateien und Unterlagen lebender Personen hinzu und prüfen Sie die Kopien mit Folder Compare.

Mit zwei geprüften Kopien außer Haus überdauert Ihre Forschung jede einzelne Festplatte.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für Museen und Archive](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [1:N-Synchronisation zu mehreren Zielen](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [Cloud-Backups mit einem Crypt-Remote verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
