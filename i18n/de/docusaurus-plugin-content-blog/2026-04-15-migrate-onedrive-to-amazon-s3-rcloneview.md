---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "OneDrive zu Amazon S3 migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Migrieren Sie OneDrive zu Amazon S3 mit RcloneView — übertragen Sie Dateien Cloud-zu-Cloud, archivieren Sie Dokumente und reduzieren Sie die Abhängigkeit von Microsoft-Speicher mit einer GUI."
keywords:
  - OneDrive zu Amazon S3 Migration
  - OneDrive zu S3 Übertragung
  - Cloud-Migrationstool
  - RcloneView OneDrive
  - S3-Archiv
  - OneDrive-Export
  - Microsoft zu AWS Migration
  - Cloud-zu-Cloud-Übertragung
  - OneDrive S3 Backup
  - OneDrive-Kosten reduzieren
tags:
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive zu Amazon S3 migrieren — Dateien übertragen mit RcloneView

> OneDrive passt gut zu Microsoft-365-Workflows, aber S3 punktet bei kosteneffizienter Archivierung und AWS-Integration — RcloneView migriert Ihre OneDrive-Inhalte direkt zu S3, ohne dass ein lokaler Download nötig ist.

OneDrive lässt sich nahtlos in Microsoft-365-Umgebungen integrieren, doch Organisationen, die Microsoft-Lizenzkosten senken, auf AWS-Infrastruktur konsolidieren oder S3-native Archivierung benötigen, müssen manchmal OneDrive-Inhalte zu Amazon S3 verschieben. RcloneView bietet einen direkten Cloud-zu-Cloud-Migrationspfad — es verbindet OneDrive und S3 gleichzeitig und überträgt Daten zwischen ihnen, ohne lokalen Speicherplatz zu belegen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive und Amazon S3 verbinden

Fügen Sie **Microsoft OneDrive** in RcloneView per OAuth-Browser-Authentifizierung hinzu — **Remote-Tab > New Remote > Microsoft OneDrive**. Fügen Sie anschließend **Amazon S3** mit Ihrer Access Key ID, Ihrem Secret Access Key und der AWS-Region hinzu. Bei OneDrive-for-Business-Konten konfigurieren Sie den Remote so, dass er auf den Tenant Ihrer Organisation und die passende Bibliothek zeigt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes aktiv sind, durchsuchen Sie sie im Dual-Panel-Explorer von RcloneView nebeneinander — die Ordnerhierarchie von OneDrive links, die Struktur Ihres S3-Buckets rechts. Diese Ansicht hilft Ihnen, die Migrationszuordnung zu planen: welche OneDrive-Ordner in welchen S3-Präfixen landen.

## Dateien übertragen

Erstellen Sie im **Job Manager** einen **Copy**-Job von Ihrem OneDrive-Ordner zum Ziel-S3-Bucket-Pfad. Für ein Unternehmen, das 1,5 TB archivierte Projektdateien von OneDrive zu S3 migriert, ist Copy (statt Sync) der richtige Job-Typ — er bewahrt die Quelldateien während des Migrationsfensters, während alles zu S3 kopiert wird, und lässt Zeit für die Überprüfung vor der Löschung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

Mehrfaden-Übertragungen und die Einstellung der gleichzeitigen Dateianzahl in den erweiterten Einstellungen maximieren den Durchsatz. Das zugrunde liegende rclone von RcloneView übernimmt das API-Throttling von OneDrive und automatische Wiederholungsversuche — die Migration läuft ohne manuelles Eingreifen weiter, auch wenn der Anbieter Anfragen vorübergehend drosselt.

## Überprüfen und Aufräumen

Nutzen Sie nach der Migration **Folder Compare**, um zu bestätigen, dass alle Dateien korrekt übertragen wurden. Vergleichen Sie die OneDrive-Quelle mit dem S3-Ziel — die Vergleichsansicht zeigt Dateien, die nur auf einer Seite existieren, sowie übereinstimmende Dateien, und liefert Ihnen eine verbindliche Checkliste, bevor Sie OneDrive-Inhalte entfernen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

Nach der Bestätigung können OneDrive-Inhalte in Phasen archiviert oder gelöscht werden. Das **Job-History**-Protokoll liefert eine dauerhafte Aufzeichnung der Migration — was wann übertragen wurde und wie viele Daten bewegt wurden — nützlich als Compliance-Dokumentation bei der Stilllegung eines Microsoft-365-Abonnements.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie den **OneDrive**-Remote (OAuth) und den **Amazon-S3**-Remote (Access-Key-Zugangsdaten) hinzu.
3. Erstellen Sie einen **Copy**-Job im Job Manager von OneDrive zu Ihrem S3-Bucket.
4. Nutzen Sie **Folder Compare**, um zu überprüfen, dass alle Dateien übertragen wurden, bevor Sie OneDrive-Inhalte entfernen.

Die Migration von OneDrive zu Amazon S3 mit RcloneView verwandelt ein komplexes IT-Projekt in einen gut überwachten automatisierten Job — mit voller Transparenz und Verifizierung bei jedem Schritt.

---

**Verwandte Anleitungen:**

- [OneDrive zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [OneDrive zu Backblaze B2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [OneDrive-Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
