---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "China Mobile Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - jay
description: "Verbinden Sie den S3-kompatiblen Objektspeicher von China Mobile mit RcloneView für plattformübergreifendes Durchsuchen, Drag-and-Drop-Übertragungen und geplante Backup-Aufgaben."
keywords:
  - China Mobile Objektspeicher
  - China Mobile Cloud-Speicher verwalten
  - S3-kompatibler Speicher GUI
  - RcloneView China Mobile
  - China Mobile Objektspeicher synchronisieren
  - S3-kompatiblen Speicher sichern
  - China Mobile Ecloud EOS
  - Objektspeicher Dateimanager
  - Multi-Cloud GUI-Client
  - S3-Endpunkt Zugriffsschlüssel einrichten
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# China Mobile Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, übertragen und sichern Sie den S3-kompatiblen Objektspeicher von China Mobile aus demselben Fenster, das Sie für jede andere Cloud nutzen, ganz ohne Terminal.

Teams, die ihre Infrastruktur über den S3-kompatiblen Objektspeicher von China Mobile betreiben, verwalten diesen oft mit rohen CLI-Aufrufen oder Einzelskripten, getrennt vom Rest ihrer Cloud-Landschaft. RcloneView behandelt ihn wie jeden anderen S3-kompatiblen Remote — derselbe Datei-Explorer, dieselben Synchronisationsaufgaben, derselbe Ordnervergleich — sodass ein Bucket auf China Mobile neben Google Drive, Backblaze B2 oder einer lokalen Festplatte in einer einzigen Oberfläche liegt. S3, Azure und Backblaze B2 lassen sich mit voller Lese-/Schreibberechtigung in der FREE-Lizenz verbinden, und das gilt genauso für jeden S3-kompatiblen Endpunkt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## China Mobile Objektspeicher verbinden

Der Objektspeicher von China Mobile wird über das S3-Protokoll von rclone angesprochen — denselben Weg, den RcloneView auch für Wasabi, MinIO oder Cloudflare R2 verwendet. Wählen Sie im New-Remote-Bildschirm den S3-kompatiblen Anbietertyp und geben Sie drei Werte an: Access Key ID, Secret Access Key und den Service-Endpunkt. Es gibt keinen OAuth-Ablauf — es handelt sich um Anmeldedaten-Eingabe, also prüfen Sie die Endpunkt-Zeichenfolge doppelt, denn ein Tippfehler dort ist der häufigste Grund, warum ein neuer Remote seinen ersten Verbindungstest nicht besteht.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines China Mobile S3-kompatiblen Remotes in RcloneView" class="img-large img-center" />

Sobald der Remote verbunden ist, erscheint er als Tab im Explorer-Bereich wie jeder andere Speichertyp. Sie können ihn mit einem zweiten Bereich nebeneinander öffnen — lokale Festplatte, eine andere Cloud oder ein völlig anderer Bucket — mit dem Layout aus 1 bis 4 Bereichen.

## Dateien durchsuchen und übertragen

Bei geöffnetem Remote zeigt die File List Buckets und Objekte mit denselben Spalten, die man von einem lokalen Dateimanager erwartet: Name, Typ, Änderungsdatum, Größe. Per Rechtsklick stehen Copy, Cut, Paste, Rename, New Folder, Download und Upload zur Verfügung, oder Sie nutzen Strg+Klick und Umschalt+Klick, um mehrere Elemente vor Stapeloperationen auszuwählen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Übertragung von Dateien zwischen China Mobile Objektspeicher und einem anderen Remote" class="img-large img-center" />

Drag-and-drop folgt einer einfachen Regel: Das Verschieben von Dateien innerhalb desselben Remotes verlagert sie, während das Ziehen zwischen zwei verschiedenen Remotes sie kopiert. Dadurch wird eine spontane Übertragung zwischen Objektspeicher und anderen Clouds zu einer Sache des Ziehens einer Auswahl über die Bereiche hinweg, statt erst lokal herunterzuladen.

## Wiederkehrende Backups planen

Für alles Wiederkehrende verwandelt der vierstufige Assistent des Job Managers eine einmalige Übertragung in eine gespeicherte Aufgabe: Quelle und Ziel auswählen, Übertragungsparallelität und Wiederholungsverhalten anpassen, Filter wie maximale Dateigröße oder -alter anwenden und — bei einer PLUS-Lizenz — einen Zeitplan im Crontab-Stil festlegen. Führen Sie zuerst einen Dry Run aus, um genau in der Vorschau zu sehen, was kopiert oder gelöscht würde, bevor Sie es tatsächlich ausführen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen einer Backup-Aufgabe für China Mobile Objektspeicher in RcloneView" class="img-large img-center" />

Job History verfolgt danach jeden Durchlauf — Status, benötigte Zeit, Übertragungsgeschwindigkeit, Dateianzahl — sodass Sie einen Nachweis darüber haben, was sich wann bewegt hat, ohne durch rohe Log-Ausgaben zu wühlen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie New Remote, wählen Sie den S3-kompatiblen Anbietertyp und geben Sie Ihre China Mobile Access Key ID, Secret Access Key und den Endpunkt ein.
3. Durchsuchen Sie den Bucket im Explorer und testen Sie eine manuelle Kopie zu oder von einem anderen Remote.
4. Erstellen Sie im Job Manager eine Synchronisationsaufgabe für jede Übertragung, die Sie wiederholen möchten, und führen Sie vor der ersten echten Ausführung einen Dry Run aus.

Sobald der China Mobile Objektspeicher zusammen mit Ihren anderen Remotes in einem Explorer liegt, hört das Verschieben von Daten auf, eine Skriptaufgabe zu sein, und wird zu einer Drag-and-Drop-Aufgabe.

---

**Verwandte Anleitungen:**

- [RackCorp Objektspeicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [Scaleway Objektspeicher verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Ceph Objektspeicher verwalten mit RcloneView — S3-kompatible GUI für Ihr Ceph-Cluster](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />
