---
slug: sync-box-to-wasabi-rcloneview
title: "Box mit Wasabi synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Box mit Wasabi über RcloneView synchronisieren: beide Remotes verbinden, per Dry Run in der Vorschau prüfen, ein einseitiges Backup ausführen und das Ergebnis mit Folder Compare verifizieren."
keywords:
  - Box mit Wasabi synchronisieren
  - Box-zu-Wasabi-Backup
  - Box-Wasabi-Übertragung
  - RcloneView box
  - RcloneView wasabi
  - Cloud-zu-Cloud-Synchronisation
  - Box-Backup im Objektspeicher
  - Wasabi-S3-Backup
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box mit Wasabi synchronisieren — Cloud-Backup mit RcloneView

> Bewahren Sie mit einer wiederholbaren einseitigen Synchronisation eine unabhängige Kopie Ihrer Box-Inhalte im Wasabi-Objektspeicher auf.

Box ist ein praktischer Ort für die Zusammenarbeit, doch eine zweite Kopie außerhalb der Plattform schützt vor versehentlichem Löschen, Kontosperrungen und Lücken bei der Aufbewahrung. Wasabi ist S3-kompatibler Objektspeicher und damit ein naheliegendes Ziel für diese Kopie. RcloneView verbindet beide Dienste in einem Fenster, und grundlegende Synchronisation sowie Dry Run sind mit der FREE-Lizenz verfügbar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Wasabi als Remotes verbinden

Box verwendet browserbasiertes OAuth. Fügen Sie in RcloneView ein neues Remote hinzu, wählen Sie Box und melden Sie sich an, sobald sich der Browser öffnet. Wenn Ihre Organisation Box for Business nutzt, benötigt das Remote `box_sub_type = enterprise`. Wasabi wird als S3-kompatibles Remote hinzugefügt: Geben Sie Ihren Access Key, Secret Key und den Endpunkt Ihrer Wasabi-Region ein.

Sobald beide Remotes im Remote-Manager (Remote Manager) erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Panels. So können Sie links den Box-Ordnerbaum und rechts einen Wasabi-Bucket durchsuchen, bevor Sie etwas konfigurieren.

<img src="/support/images/en/blog/new-remote.png" alt="Box- und Wasabi-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Vor der Synchronisation per Dry Run prüfen

Stellen Sie sich eine Designagentur mit 800 GB an Kundenprojektordnern in Box vor. Führen Sie vor der ersten Synchronisation einen Dry Run aus. Er listet auf, welche Dateien kopiert und welche gelöscht würden, ohne etwas zu verändern. So vermeiden Sie, eine Synchronisation auf den falschen Bucket-Pfad zu richten.

Für ein Backup ist die einseitige Synchronisation („Modifying destination only") die richtige Richtung: Box bleibt die maßgebliche Quelle und Wasabi spiegelt sie. Bedenken Sie, dass eine Synchronisation auch Zieldateien löscht, die in der Quelle nicht mehr existieren – verwenden Sie daher einen eigenen Bucket oder ein eigenes Präfix für die Spiegelung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung zwischen Box und Wasabi" class="img-large img-center" />

## Den Synchronisationsjob konfigurieren

Der Job-Assistent führt durch vier Schritte: Speicher, erweiterte Einstellungen, Filter und Zeitplan. Erhöhen Sie die Anzahl der Dateiübertragungen, wenn Sie viele kleine Dokumente haben, und aktivieren Sie den Prüfsummenvergleich, wenn Sie eine Hash-basierte Verifizierung wünschen. Zu den vordefinierten Filtern gehört eine Box-Docs-Option, nützlich, weil Box Notes und ähnliche reine Online-Elemente sich nicht wie normale Dateien verhalten.

Benennen Sie den Job mit Buchstaben, Ziffern, Bindestrichen oder Unterstrichen, speichern Sie ihn und führen Sie ihn aus. Fortschritt, Geschwindigkeit und Dateianzahl erscheinen im Tab Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Gespeicherten Box-zu-Wasabi-Synchronisationsjob ausführen" class="img-large img-center" />

## Zeitplan und Verifizierung

Die zeitplanbasierte Synchronisation ist eine PLUS-Funktion mit Feldern im crontab-Stil und einem Simulator, der kommende Ausführungszeiten anzeigt. Ein nächtlicher Lauf hält die Wasabi-Kopie aktuell. Prüfen Sie nach jedem Lauf im Job-Verlauf (Job History) Status, Größe und Dateianzahl, oder nutzen Sie Folder Compare, um zu bestätigen, dass beide Seiten übereinstimmen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Wiederkehrenden Synchronisationsjob in RcloneView planen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Box-Remote per OAuth und Ihr Wasabi-Remote mit Schlüsseln und Endpunkt hinzu.
3. Erstellen Sie einen Synchronisationsjob von Box in einen dedizierten Wasabi-Bucket und führen Sie zuerst einen Dry Run aus.
4. Führen Sie den Job aus und verifizieren Sie dann mit Folder Compare und Job-Verlauf.

Eine getestete, zeitgesteuerte Spiegelung macht Box von einem Single Point of Failure zur einen Hälfte eines echten Backups.

---

**Weiterführende Anleitungen:**

- [Box zu Wasabi migrieren](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [Google Drive mit Box synchronisieren](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Wasabi-Synchronisationsfehler beheben](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
