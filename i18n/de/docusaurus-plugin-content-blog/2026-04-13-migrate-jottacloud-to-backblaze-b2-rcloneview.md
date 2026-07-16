---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "Jottacloud zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Migrieren Sie Dateien von Jottacloud zu Backblaze B2 mit RcloneView. Übertragen Sie Ihren norwegischen Cloud-Speicher direkt zu erschwinglichem S3-kompatiblem Objektspeicher."
keywords:
  - Jottacloud zu Backblaze B2
  - Jottacloud migrieren
  - Jottacloud-Migration
  - Backblaze-B2-Migration
  - Cloud-zu-Cloud-Übertragung
  - Jottacloud RcloneView
  - Backblaze B2 Backup
  - Cloud-Speicher-Migration
  - Norwegischer Cloud-Speicher
  - RcloneView-Übertragung
tags:
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Ihre Jottacloud-Dateien mit RcloneView zu Backblaze-B2-Objektspeicher — direkte Cloud-zu-Cloud-Migration ohne lokalen Zwischenschritt.

Jottacloud ist ein norwegischer Cloud-Speicherdienst mit starkem Fokus auf Datenschutz, der von Privatpersonen und Unternehmen in Skandinavien und Europa genutzt wird. Wenn der Speicherbedarf wächst, migrieren manche Nutzer zu Backblaze B2 wegen der S3-kompatiblen API, des programmatischen Zugriffs und der gestuften Speicheroptionen, die besser für große Archive oder Entwickler-Workflows geeignet sind. RcloneView verbindet beide Dienste und übernimmt die Übertragung direkt — kein lokales Laufwerk als Zwischenspeicher erforderlich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloud und Backblaze B2 einrichten

Das Hinzufügen beider Remotes zu RcloneView dauert nur wenige Minuten. Öffnen Sie für Jottacloud den Tab Remote, klicken Sie auf Neuer Remote und wählen Sie Jottacloud aus der Anbieterliste. Die Einrichtung nutzt Ihre Jottacloud-Kontodaten. Für Backblaze B2 wählen Sie Backblaze B2 und geben Ihre Application Key ID und Ihren Application Key ein — generiert in Ihrem Backblaze-Konto unter App Keys. Beide Remotes erscheinen anschließend als zugängliche Dateibäume in den Explorer-Panels.

Durchsuchen Sie Ihre Jottacloud-Ordner, um die Inhalte zu erfassen, die Sie verschieben möchten. Jottacloud organisiert Dateien in Geräte und Ordner — verstehen Sie die Struktur, bevor Sie Ihren Migrationsjob erstellen, damit Sie den richtigen Quellpfad auswählen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Die Migration durchführen

Erstellen Sie einen Synchronisationsjob mit dem Jottacloud-Ordner als Quelle und einem Backblaze-B2-Bucket als Ziel. Falls Sie noch keinen Ziel-Bucket haben, können Sie einen direkt in der Backblaze-Konsole erstellen, bevor Sie die Migration starten. Im Schritt Erweiterte Einstellungen des Sync-Assistenten können Sie gleichzeitige Dateiübertragungen konfigurieren und die Prüfsummenverifizierung aktivieren — Letztere bestätigt, dass jede Datei unversehrt angekommen ist, was bei großen Foto- oder Videoarchiven wertvoll ist.

Für einen Fotografen, der 500 GB an Jottacloud-RAW-Dateien zu Backblaze B2 migriert, macht der Schritt Filterung phasenweise Migrationen handhabbar. Filtern Sie nach Dateierweiterung (`.raw`, `.cr3`, `.arw`), um zuerst Kameradateien zu migrieren, und behandeln Sie andere Dateitypen in nachfolgenden Jobs. Filter für das maximale Dateialter helfen dabei, aktuelle Arbeiten vor älterem Material zu priorisieren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

Verwenden Sie vor einer produktiven Migration immer Dry Run. Die Simulation listet jede Datei auf, die kopiert oder entfernt würde, sodass Sie den Umfang vor der Ausführung mit Ihrer Absicht abgleichen können.

## Die abgeschlossene Migration überprüfen

Nach Abschluss der Übertragung nutzen Sie den Ordnervergleich, um die Vollständigkeit zu überprüfen. Wählen Sie den Quellordner in Jottacloud und das Backblaze-B2-Ziel aus, und die Vergleichsansicht hebt alle Dateien hervor, die nur auf einer Seite existieren oder sich in der Größe unterscheiden. So werden fehlende Dateien oder abgebrochene Übertragungen erkannt, die bei einer großen Migration sonst leicht unbemerkt bleiben.

Das Panel Job-Verlauf zeigt für jeden Migrationslauf Zeitpunkt, Dateianzahl, übertragene Gesamtdatenmenge und Endstatus an. Wurde ein Lauf unterbrochen — durch ein Netzwerkproblem oder den Ruhezustand des Systems — können Sie den Synchronisationsjob erneut ausführen; durch das inkrementelle Verhalten von rclone werden nur fehlende oder geänderte Dateien erneut übertragen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Jottacloud als Remote mit Ihren Jottacloud-Kontodaten hinzu.
3. Fügen Sie Backblaze B2 mit Ihrer Application Key ID und Ihrem Application Key hinzu.
4. Führen Sie Dry Run zur Vorschau aus und starten Sie dann die Synchronisation, um Dateien in Ihren B2-Bucket zu migrieren.

Die Migration von Jottacloud zu Backblaze B2 mit RcloneView erfolgt inkrementell, ist fortsetzbar und vollständig über die GUI steuerbar — kein Scripting erforderlich.

---

**Verwandte Anleitungen:**

- [Jottacloud-Cloud-Synchronisation und -Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Dropbox mit RcloneView zu Backblaze B2 sichern](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Wasabi mit RcloneView zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
