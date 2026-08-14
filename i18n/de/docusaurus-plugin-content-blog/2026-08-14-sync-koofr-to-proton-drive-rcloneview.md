---
slug: sync-koofr-to-proton-drive-rcloneview
title: "Koofr mit Proton Drive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - alex
description: "Erfahren Sie, wie Sie Dateien von Koofr zu Proton Drive synchronisieren – mit RcloneView, einer plattformübergreifenden GUI, mit der zwei Clouds im Backup miteinander synchron gehalten werden."
keywords:
  - Koofr zu Proton Drive synchronisieren
  - Koofr Proton Drive Backup
  - RcloneView Koofr
  - RcloneView Proton Drive
  - Cloud-zu-Cloud-Synchronisation
  - Koofr Backup
  - Proton Drive Synchronisation
  - verschlüsseltes Cloud-Backup
  - Multi-Cloud-Synchronisationstool
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr mit Proton Drive synchronisieren — Cloud-Backup mit RcloneView

> Halten Sie ein stehendes Backup Ihrer Koofr-Dateien auf Proton Drive, ohne zuerst etwas auf ein lokales Laufwerk herunterzuladen.

Koofr ist ein europäischer Cloud-Speicherdienst, der auch andere Konten aggregieren kann, während Proton Drive Ende-zu-Ende-verschlüsselten Speicher von den Machern von Proton Mail bietet. Manche Nutzer möchten beides — Koofr für die vereinheitlichte Ansicht, Proton Drive für die Privatsphäre-Garantien — und RcloneView lässt Sie beide nebeneinander verbinden und direkt von Cloud zu Cloud synchronisieren, ohne Dateien über ein lokales Laufwerk zu leiten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr und Proton Drive als Remotes hinzufügen

Fügen Sie Koofr über den Remote Manager mit den Kontozugangsdaten als Remote hinzu und wiederholen Sie den Vorgang für Proton Drive, das sich mit Ihrer Proton-E-Mail-Adresse, Ihrem Passwort und optional einem Zwei-Faktor-Code authentifiziert. Beide Remotes erscheinen als separate Tabs im Explorer, sodass Sie Koofr in einem Panel und Proton Drive im anderen öffnen können, um sie direkt nebeneinander zu vergleichen, bevor Sie eine Übertragung einrichten.

<img src="/support/images/en/blog/new-remote.png" alt="Koofr und Proton Drive als Remotes in RcloneView hinzufügen" class="img-large img-center" />

Auch S3, Azure oder Backblaze B2 lassen sich mit voller Lese-/Schreibberechtigung bereits mit der FREE-Lizenz verbinden, sodass eine Koofr-zu-Proton-Drive-Synchronisation neben allen Object-Storage-Backups steht, die Sie bereits betreiben — alles aus demselben Fenster.

## Eine Einweg-Synchronisation einrichten

Öffnen Sie den Sync-Assistenten über den Home-Tab und wählen Sie Koofr als Quelle, Proton Drive als Ziel und "Modifying destination only" für ein Einweg-Backup, das Ihre Koofr-Originale niemals verändert. Aktivieren Sie unter Advanced Settings den Checksummen-Vergleich, damit Dateien anhand von Hash und Größe statt nur anhand des Änderungsdatums abgeglichen werden — wichtig, wenn Koofr und Proton Drive Zeitstempel unterschiedlich melden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Einrichtung einer Einweg-Synchronisation von Koofr zu Proton Drive" class="img-large img-center" />

Bevor Sie sie live ausführen, nutzen Sie Dry Run, um genau zu sehen, welche Dateien kopiert werden, und wenden Sie Filter — nach Dateityp, maximaler Größe oder Ordnertiefe — an, falls nur bestimmte Ordner gespiegelt werden sollen statt des gesamten Koofr-Kontos.

## Backup planen und verfolgen

Speichern Sie die Konfiguration als Job im Job Manager; PLUS-Lizenznutzer können einen Zeitplan im Crontab-Stil anhängen, sodass die Koofr-zu-Proton-Drive-Synchronisation automatisch in einem festgelegten Rhythmus läuft, mit einer Vorschau der kommenden Ausführungszeiten vor dem Bestätigen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung einer wiederkehrenden Koofr-zu-Proton-Drive-Synchronisation" class="img-large img-center" />

Jede Ausführung wird mit Dauer, Übertragungsgeschwindigkeit, Dateianzahl und übertragener Gesamtgröße in der Job History protokolliert — ein Nachweis, mit dem Sie bestätigen können, dass das Backup sauber gelaufen ist, oder einen Lauf finden, der wiederholt werden muss.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Koofr und Proton Drive als Remotes im Remote Manager hinzu.
3. Erstellen Sie einen Einweg-Sync-Job von Koofr zu Proton Drive und führen Sie zuerst einen Dry Run aus.
4. Speichern Sie den Job und hängen Sie, falls Sie PLUS nutzen, einen Zeitplan für müheloses wiederkehrendes Backup an.

Nach der Einrichtung bleiben Ihre Koofr-Dateien bei jedem Lauf mit Proton Drive gespiegelt — eine verschlüsselte Kopie, ohne RcloneView jemals zu verlassen.

---

**Verwandte Anleitungen:**

- [Proton Drive Storage verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Koofr Storage verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Proton Drive zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
