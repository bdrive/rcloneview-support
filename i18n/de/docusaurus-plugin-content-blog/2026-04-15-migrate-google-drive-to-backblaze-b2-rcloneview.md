---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "Google Drive zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Migrieren Sie Google Drive zu Backblaze B2 mit RcloneView — übertragen Sie Dateien direkt von Cloud zu Cloud, archivieren Sie Daten kosteneffizient und überprüfen Sie die Migration mit einer GUI."
keywords:
  - Google Drive to Backblaze B2
  - migrate Google Drive
  - Backblaze B2 backup
  - cloud migration tool
  - Google Drive export
  - RcloneView migration
  - cloud-to-cloud transfer
  - S3 archive Google Drive
  - Google Drive archiving
  - Backblaze cold storage
tags:
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView

> Google Drive ist für die Zusammenarbeit konzipiert, nicht für die kalte Archivierung — RcloneView migriert Ihre Drive-Inhalte direkt zu Backblaze B2, ohne Ihre lokale Festplatte zu berühren, und spart dabei im großen Maßstab Speicherkosten.

Google Drive ist hervorragend für die Echtzeit-Zusammenarbeit geeignet, aber nicht für die kosteneffiziente Langzeitarchivierung im großen Maßstab konzipiert. Backblaze B2 bietet S3-kompatiblen Objektspeicher zu einem Bruchteil der Speicherkosten von Google und ist damit ein beliebtes Ziel für die Archivierung großer Datensätze, Videoprojekte und Geschäftsunterlagen, auf die nicht täglich zugegriffen werden muss. RcloneView übernimmt die Migration direkt zwischen beiden Clouds — ohne lokalen Festplatten-Zwischenschritt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes einrichten

Fügen Sie in RcloneView zunächst Google Drive hinzu — **Remote-Tab > Neuer Remote > Google Drive** — und authentifizieren Sie sich über den Browser via OAuth. Fügen Sie anschließend Backblaze B2 hinzu: Wählen Sie es aus der Anbieterliste aus und geben Sie Ihre Application Key ID und Ihren Application Key ein. Beide Remotes sind sofort aktiv.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Öffnen Sie beide Remotes nebeneinander im Dual-Panel-Explorer von RcloneView. Diese direkte Ansicht ist bei der Planung der Migration wertvoll: Überprüfen Sie links, was in Ihren Drive-Ordnern vorhanden ist, bestätigen Sie rechts die Struktur des Ziel-Buckets in B2, und legen Sie fest, welche Ordner vor Beginn der Übertragung priorisiert werden sollen.

## Konfigurieren des Migrationsjobs

Öffnen Sie den **Job Manager** und erstellen Sie einen neuen Sync- oder Copy-Job. Setzen Sie als Quelle Ihren Google-Drive-Ordner (oder einen bestimmten Unterordner für eine inkrementelle Migration) und als Ziel Ihren Backblaze-B2-Bucket-Pfad.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

Bei großen Migrationen — etwa wenn ein Videoproduktionsunternehmen 2 TB abgeschlossener Projekte von Drive zu B2 verschiebt — aktivieren Sie Multi-Thread-Übertragungen und erhöhen Sie die Anzahl gleichzeitiger Dateien in den erweiterten Einstellungen des Jobs. Die Funktion **Dry Run** zeigt genau an, welche Dateien übertragen werden, bevor der eigentliche Job ausgeführt wird, und verhindert so versehentliches Überschreiben oder übersprungene Inhalte. Die Aktivierung der Prüfsummenverifizierung stellt sicher, dass jede Datei unversehrt auf B2 ankommt — besonders wichtig bei der Archivierung, da auf Dateien möglicherweise jahrelang nicht zugegriffen wird.

## Überprüfung und Bereinigung nach der Migration

Verwenden Sie nach Abschluss der Übertragung den **Ordnervergleich** von RcloneView, um die Google-Drive-Quelle mit dem B2-Ziel zu vergleichen. Die Vergleichsansicht hebt nur links vorhandene Dateien (noch nicht migriert), nur rechts vorhandene Dateien (bereits auf B2) und identische Dateien hervor — so erhalten Sie eine klare, visuelle Checkliste, bevor Sie etwas aus Drive entfernen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

Es ist sicher, den Migrationsjob nach dem Vergleich ein zweites Mal auszuführen — rclone überspringt Dateien, die am Ziel bereits mit übereinstimmender Größe und Zeitstempel existieren, sodass nur verbleibende Unterschiede übertragen werden. Dieses idempotente Verhalten macht groß angelegte Migrationen auch über mehrere Sitzungen hinweg zuverlässig.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie einen Google-Drive-Remote (OAuth-Browser-Authentifizierung) und einen Backblaze-B2-Remote (Application-Key-Anmeldedaten) hinzu.
3. Öffnen Sie den **Job Manager** und erstellen Sie einen Sync- oder Copy-Job von Google Drive zu B2.
4. Aktivieren Sie Dry Run zur Vorschau, führen Sie den Job dann aus — nutzen Sie den Ordnervergleich, um den Abschluss zu überprüfen.

Die Migration zu Backblaze B2 mit RcloneView beseitigt die Komplexität des Cloud-Egress und liefert Ihnen ein verifiziertes, kosteneffizientes Archiv, ohne einen einzigen CLI-Befehl zu schreiben.

---

**Weiterführende Anleitungen:**

- [Backblaze B2 zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [Backblaze B2 Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Dropbox zu Backblaze B2 sichern — Erschwinglicher Speicher mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
