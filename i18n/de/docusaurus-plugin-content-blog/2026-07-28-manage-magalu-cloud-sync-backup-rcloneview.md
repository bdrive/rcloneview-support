---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu Cloud Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - casey
description: "Verbinde Magalu Cloud Objektspeicher mit RcloneView für Drag-and-Drop-Dateiverwaltung, geplante Synchronisierung und Cloud-übergreifende Backups."
keywords:
  - Magalu Cloud RcloneView
  - Magalu Objektspeicher GUI
  - Magalu Cloud Speicher verwalten
  - S3-kompatibles Cloud-Backup
  - Magalu Cloud Synchronisationstool
  - Brasilien Objektspeicher GUI
  - Magalu Cloud Dateimanager
  - RcloneView S3-kompatibles Remote
  - Cloud-Speicher Synchronisation Backup
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Magalu Cloud Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuche, synchronisiere und sichere Magalu Cloud Objektspeicher mit einem vollständigen Drag-and-Drop-Dateimanager, statt API-Zugangsdaten im Terminal hin- und herzujonglieren.

Magalu Cloud ist ein S3-kompatibler Objektspeicherdienst, was bedeutet, dass er sich direkt in jedes Tool einfügt, das auf dem S3-Protokoll aufbaut. RcloneView behandelt ihn genau wie Amazon S3 oder Backblaze B2: Gib einen Zugriffsschlüssel, einen geheimen Schlüssel und einen Endpunkt ein, und der Bucket erscheint im Dateibrowser neben jedem anderen Remote, das du verwaltest. Das macht ihn praktisch für Teams, die bereits Workloads aus Brasilien oder Lateinamerika betreiben und eine Objektspeicheroption möchten, ohne die S3-Tools zu verlassen, die sie bereits kennen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ein Magalu Cloud Remote verbinden

Das Hinzufügen von Magalu Cloud folgt demselben Ablauf zur Eingabe von Zugangsdaten, den RcloneView für jeden S3-kompatiblen Anbieter verwendet: Öffne New Remote, wähle den S3-kompatiblen Typ und gib die Access Key ID, den Secret Access Key sowie die Magalu Cloud Endpunkt-URL für deine Region ein. Nach dem Speichern wird der Bucket in ein Explorer-Panel geladen — mit vollständiger Ordnerbaum-Navigation, Miniaturansichten für Bilder und Rechtsklick-Zugriff zum Kopieren, Umbenennen, Löschen und Ermitteln der Größe — ganz ohne separaten S3-Konsolen-Tab.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

Da RcloneView über das S3-Backend von rclone verbindet, gilt das übliche Object-Storage-Verhalten: Ordner sind virtuelle Konstrukte, die aus Key-Präfixen gebildet werden, und Dateioperationen werden auf die zugrunde liegenden PUT/GET/DELETE-Aufrufe abgebildet, die rclone ausführt. Anders als bei reinen Mount-Tools synchronisiert und vergleicht RcloneView Ordner auch mit der FREE-Lizenz, sodass ein Magalu-Bucket nicht auf passives Durchsuchen beschränkt bleibt.

## Magalu Cloud mit anderem Speicher synchronisieren

Die meisten Teams nutzen Objektspeicher nicht isoliert — er steht neben lokalen Laufwerken, NAS-Boxen oder anderen Cloud-Anbietern als Teil eines Backup- oder Migrationsplans. Der 4-Schritte-Synchronisationsassistent erlaubt es dir, einen Magalu-Bucket als Quelle oder Ziel festzulegen, die Anzahl gleichzeitiger Übertragungen und Gleichheitsprüfer für zuverlässige Großübertragungen zu konfigurieren und Filter (maximale Dateigröße, maximales Alter, Ausschluss nach Erweiterung) anzuwenden, sodass nur die Dateien verschoben werden, die du tatsächlich möchtest.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

Führe zuerst einen Dry Run aus, um genau zu sehen, welche Dateien kopiert oder gelöscht werden, bevor du dich auf eine Live-Übertragung festlegst — besonders nützlich, wenn du zum ersten Mal einen Synchronisationsjob auf einen neuen Bucket richtest, wenn es besonders darauf ankommt, Quell- und Zielordner richtig einzustellen.

## Wiederkehrende Magalu-Backups planen

Für laufende Backup-Routinen können Nutzer mit PLUS-Lizenz jedem Synchronisationsjob einen crontab-artigen Zeitplan zuweisen, sodass ein lokaler Projektordner oder ein anderes Cloud-Remote automatisch in Magalu Cloud gespiegelt wird — nächtlich, wöchentlich oder in einem beliebigen benutzerdefinierten Intervall. Job History verfolgt anschließend Dauer, Übertragungsgeschwindigkeit, Dateianzahl und Abschlussstatus jedes Laufs und liefert so einen klaren Prüfpfad, ohne ein Terminal-Log zu prüfen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## Erste Schritte

1. **Lade RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffne New Remote, wähle den S3-kompatiblen Anbietertyp und gib deinen Magalu Cloud Access Key, Secret Key und Endpunkt ein.
3. Durchsuche den Bucket im Explorer-Panel, um Verbindung und Ordnerstruktur zu bestätigen.
4. Erstelle einen Synchronisations- oder Backup-Job, der auf das Magalu-Remote zielt, führe einen Dry Run aus und starte dann die Übertragung.

Sobald die Verbindung steht, verhält sich ein Magalu Cloud Bucket wie jedes andere Remote in RcloneView — bereit für den täglichen Gebrauch, Cloud-übergreifende Übertragungen und geplanten Schutz.

---

**Verwandte Anleitungen:**

- [IDrive e2 S3 Cloud-Backup verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Cloudflare R2 verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Cloud-Synchronisation mit RcloneView vor der Übertragung in der Vorschau ansehen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
