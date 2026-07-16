---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "Backblaze B2 zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Dateien von Backblaze B2 zu Google Drive verschieben, ohne sie lokal herunterzuladen. RcloneView ermöglicht direkte Cloud-zu-Cloud-Übertragung mit Fortschrittsanzeige und Filterung."
keywords:
  - Backblaze B2 to Google Drive
  - migrate B2 to Google Drive
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - B2 to GDrive RcloneView
  - transfer Backblaze files
  - cloud storage migration
  - Backblaze B2 sync
  - Google Drive import
  - RcloneView migration
tags:
  - RcloneView
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 zu Google Drive migrieren — Dateien übertragen mit RcloneView

> Übertragen Sie Dateien direkt von Backblaze B2 Buckets zu Google Drive mit RcloneView — kein zwischengeschalteter lokaler Speicher erforderlich, mit Live-Fortschrittsanzeige und Filterunterstützung.

Backblaze B2 ist eine leistungsfähige Object-Storage-Lösung, aber Teams, die stark auf Google Workspace setzen, finden es möglicherweise praktischer, ihre Arbeitsdateien in Google Drive zu konsolidieren, um die Zusammenarbeit zu erleichtern. Die Migration jahrelanger B2-Archivdaten zu Google Drive erforderte früher, dass zunächst alles lokal heruntergeladen wurde — ein langsamer, speicherintensiver Prozess. RcloneView ermöglicht direkte Cloud-zu-Cloud-Übertragungen zwischen B2 und Google Drive über seine Sync-Engine und leitet Daten zwischen den beiden Anbietern weiter, ohne Ihre lokale Festplatte zu berühren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes einrichten

Bevor Sie mit der Migration beginnen, fügen Sie sowohl Backblaze B2 als auch Google Drive als Remotes in RcloneView hinzu. Gehen Sie für Backblaze B2 zum Reiter Remote, klicken Sie auf New Remote und wählen Sie Backblaze B2. Geben Sie Ihre Application Key ID und Ihren Application Key ein — beide werden in Ihrem Backblaze-Konto unter App Keys generiert. Wählen Sie für Google Drive Google Drive aus der Anbieterliste aus; es öffnet sich ein Browserfenster zur OAuth-Authentifizierung. Melden Sie sich mit Ihrem Google-Konto an und gewähren Sie den Zugriff.

Sobald beide Remotes konfiguriert sind, können Sie sie nebeneinander im Dual-Panel-File-Explorer von RcloneView öffnen. Durchsuchen Sie Ihre B2-Buckets auf der einen Seite und Ihre Google Drive-Ordner auf der anderen Seite, was Ihnen eine visuelle Referenz für die Migrationsstruktur bietet, die Sie einrichten möchten.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Die Migration durchführen

Sobald beide Remotes verbunden sind, verwenden Sie den Sync-Assistenten, um die Übertragung zu konfigurieren. Wählen Sie Ihren Backblaze B2 Bucket (oder einen bestimmten Pfad darin) als Quelle und Ihren Google Drive-Zielordner. Im Schritt Advanced Settings stellt die Checksum-Verifizierung sicher, dass jede Datei korrekt übertragen wurde — wichtig für große Archive, bei denen stille Datenkorruption unbemerkt bleiben kann.

Der Schritt Filtering ist bei großen B2-Buckets nützlich: Verwenden Sie Filter nach Dateialter, um nur Dateien zu migrieren, die älter als ein bestimmtes Datum sind, schließen Sie bestimmte Dateierweiterungen aus (wie temporäre `.tmp`-Dateien) oder begrenzen Sie die maximale Dateigröße, um die Migration in Abschnitten zu staffeln. Dies ist besonders hilfreich bei der Migration von 3 TB Projektarchiven einer Designagentur — filtern Sie nach Dateityp und Ordnertiefe, um zu steuern, was in jedem Batch verschoben wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

Bevor Sie die vollständige Migration bestätigen, führen Sie den Dry Run-Modus aus, um genau zu sehen, welche Dateien kopiert werden. Die Simulation zeigt die vollständige Liste der geplanten Vorgänge, ohne dass Änderungen vorgenommen werden — ein kritischer Sicherheitsschritt bei der Migration von Produktionsdaten.

## Übertragung überwachen und validieren

Der Reiter Transferring am unteren Rand von RcloneView zeigt den Live-Fortschritt des Jobs: Dateianzahl, Übertragungsstatus und aufgetretene Fehler. Bei großen Migrationen, die sich über mehrere Stunden erstrecken, erfasst Job History jede Ausführung mit Startzeit, Dauer, insgesamt übertragener Datenmenge und Endstatus.

Nach Abschluss der Übertragung verwenden Sie Folder Compare, um zu überprüfen, dass Google Drive nun alles aus der B2-Quelle enthält. Der Vergleich hebt alle Dateien hervor, die nur auf einer Seite existieren oder Größenunterschiede aufweisen, sodass es einfach ist, alles zu identifizieren und erneut zu übertragen, was nicht erfolgreich abgeschlossen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Backblaze B2 mit Ihrer Application Key ID und Ihrem Application Key hinzu.
3. Fügen Sie Google Drive über den OAuth-Browser-Authentifizierungsablauf hinzu.
4. Verwenden Sie den Sync-Assistenten mit Dry Run, um die Migration vor der vollständigen Übertragung zu überprüfen.

Die direkte Cloud-zu-Cloud-Migration beseitigt den Engpass des lokalen Zwischenspeichers und hält Ihre Übertragung von B2 zu Google Drive mit dem anbieterseitigen Durchsatz am Laufen.

---

**Verwandte Anleitungen:**

- [Backblaze B2 zu Amazon S3 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Google Drive Cloud-Synchronisation und Backup verwalten mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Dropbox zu Backblaze B2 sichern — preiswerter Speicher mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
