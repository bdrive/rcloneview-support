---
slug: immutable-backups-s3-object-lock-rcloneview
title: "Unveränderliche, ransomware-sichere Backups mit S3 Object Lock in RcloneView"
authors:
  - tayson
description: Nutzen Sie RcloneView mit S3-Object-Lock-Buckets, um unveränderliche, ransomware-sichere Backups auf AWS S3, Wasabi, Backblaze B2 oder Cloudflare R2 zu erstellen – mit Zeitplanung, Verifizierung und schnellen Wiederherstellungen.
keywords:
  - s3 object lock
  - unveränderliche backups
  - ransomware-schutz
  - rclone s3
  - rcloneview
  - wasabi object lock
  - unveränderlichkeit von cloud-backups
  - compliance-backup
tags:
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Unveränderliche, ransomware-sichere Backups mit S3 Object Lock in RcloneView

> Machen Sie sich keine Sorgen mehr über Ransomware-Rollbacks. Kombinieren Sie S3 Object Lock mit dem Scheduler von RcloneView, um Backups unantastbar zu halten.

Unveränderlicher Speicher verhindert, dass Angreifer (oder Unfälle) Ihre Backups löschen oder überschreiben, bevor Sie sie wiederherstellen können. S3 Object Lock ist auf AWS S3, Wasabi, Backblaze B2 und Cloudflare R2 verfügbar. RcloneView nutzt die Object-Lock- und Versionierungseinstellungen des Buckets, während Sie Jobs in der GUI erstellen – ohne CLI.

<!-- truncate -->

**Relevante Dokumentation**

- Sync-Jobs erstellen: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Job-Zeitplanung & Ausführung (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Ordner vergleichen: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Als lokales Laufwerk einbinden: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Warum Object Lock + RcloneView

- Unveränderliche Kopien: Aufbewahrungsdaten blockieren Löschungen/Überschreibungen für den festgelegten Zeitraum.
- Cloud-Wahlfreiheit: Funktioniert mit S3, Wasabi, R2, B2 und S3-kompatiblen NAS-Gateways.
- Kein Scripting: Erstellen Sie Sync-Jobs in der GUI, planen Sie sie (Plus) und behalten Sie Verlauf/Logs im Blick.
- Schnelle Prüfungen: Nutzen Sie Compare, um zu bestätigen, dass das Ziel übereinstimmt und aufbewahrte Versionen anzeigt.
- Einfache Wiederherstellung: Mounten oder synchronisieren Sie vom gesperrten Bucket zurück, ohne die Aufbewahrung zu ändern.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## Voraussetzungen

- Ein S3-kompatibler Bucket, der bei der Erstellung mit aktiviertem Object Lock angelegt wurde.
- Versionierung für diesen Bucket aktiviert (erforderlich für Object Lock).
- RcloneView installiert mit einem bereits verbundenen S3-Remote.
- Ein IAM-/API-Benutzer mit Berechtigungen für `PutObject` und `PutObjectRetention`.
- (Optional) Plus-Lizenz, wenn Sie Jobs automatisch zeitplanen möchten.


## Schritt 1: Object Lock am Bucket aktivieren

1. Erstellen Sie den Bucket mit aktiviertem Object Lock (kann später nicht umgeschaltet werden). Aktivieren Sie bei AWS S3 die Option „Enable Object Lock“. Wählen Sie bei Wasabi/R2/B2 die Object-Lock-Option während der Bucket-Erstellung.
2. Aktivieren Sie die Versionierung für diesen Bucket.
3. Legen Sie Ihre Standardaufbewahrung fest: Governance (einfachere Überschreibungen) oder Compliance (keine Überschreibungen) sowie die Aufbewahrungsdauer (z. B. 30–90 Tage).

## Schritt 2: Einen Sync-/Copy-Job auf den Object-Lock-Bucket ausrichten

RcloneView zeigt keine Object-Lock-Flags pro Objekt an. Verlassen Sie sich stattdessen auf die Object-Lock- und Versionierungs-Standardeinstellungen des Buckets und richten Sie Ihre Jobs weiterhin auf dieses Ziel aus.

1. Erstellen Sie einen neuen **Sync**-Job (oder **Copy**, wenn Sie keine Löschungen wünschen): Quelle = Ihre Daten, Ziel = der Object-Lock-Bucket.
2. Legen Sie in den **Erweiterten Einstellungen** die Übertragungsanzahl fest und aktivieren Sie den Prüfsummenvergleich, wenn beide Seiten Hashes unterstützen.
3. Schließen Sie in den **Filtereinstellungen** Cache-/Temp-Pfade aus, damit Sie keine Aufbewahrung an unnötige Daten verschwenden.
4. Speichern Sie den Job, damit dieselben Einstellungen bei jedem Lauf gelten (Job-Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Schritt 3: Unveränderliche Backups zeitplanen

1. Aktivieren Sie im Job-Assistenten (Schritt 4: Zeitplanung, Plus) die Zeitplanung für den unveränderlichen Backup-Job.
2. Legen Sie einen täglichen oder stündlichen Rhythmus fest und nutzen Sie **Simulate**, um kommende Läufe zu prüfen.
3. Legen Sie in den Erweiterten Einstellungen Wiederholungsversuche für instabile Verbindungen fest.
4. Führen Sie wöchentlich einen manuellen Compare durch, um aufbewahrte Objekte zu validieren.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Schritt 4: Aufbewahrung und Integrität verifizieren

- Nutzen Sie Compare, um die Objektanzahl nach Uploads zu verifizieren.
- Prüfen Sie in der S3-Konsole (oder in den RcloneView-Logs), dass Objekte `Compliance`/`Governance` sowie das erwartete „Retain Until“-Datum anzeigen.
- Versuchen Sie, eine Testdatei am Ziel zu löschen; dies sollte bis zum Ablauf des Aufbewahrungszeitraums blockiert sein.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Schritt 5: Aus unveränderlichen Backups wiederherstellen

Wenn Sie wiederherstellen müssen:

1. Erstellen Sie einen neuen Job: Ziel (Object-Lock-Bucket) -> Quelle (Wiederherstellungsort), und führen Sie Sync/Copy aus.
2. Nutzen Sie für ad-hoc Wiederherstellungen Mount, um den gesperrten Bucket zu durchsuchen und Dateien herauszuziehen.
3. Verwenden Sie bei Wiederherstellungen Copy (nicht Sync), wenn Sie vermeiden möchten, dass neuere Dateien am Wiederherstellungsort gelöscht werden.

## Best Practices und Feinabstimmung

- Legen Sie die Aufbewahrung lang genug für Erkennung plus Untersuchung fest (z. B. 30–90 Tage).
- Nutzen Sie den Governance-Modus für Flexibilität in Testumgebungen; Compliance für Produktion und regulierte Daten.
- Passen Sie die Übertragungsanzahl in den Erweiterten Einstellungen für große Mediendateien oder VM-Images an.
- Halten Sie mindestens zwei Regionen oder Anbieter vor (z. B. Wasabi + R2) und rotieren Sie die Zeitpläne.
- Behalten Sie die Kosten im Auge: Object Lock behält alle Versionen, kombinieren Sie es daher mit Lifecycle-Regeln nach Ablauf der Aufbewahrung.

## Checkliste zur Fehlerbehebung

- Upload schlägt mit AccessDenied fehl: stellen Sie sicher, dass die IAM-Rolle `PutObjectRetention` erlaubt.
- Objekte nicht gesperrt: bestätigen Sie, dass der Bucket mit Object Lock erstellt wurde und die Versionierung aktiviert ist.
- Langsame Übertragungen: reduzieren Sie die Übertragungsanzahl oder nutzen Sie Bandbreitenbegrenzungen bei schwacher Verbindung.
- Wiederherstellung löscht Live-Daten: verwenden Sie Copy statt Sync, wenn Sie aus dem gesperrten Bucket abrufen.



Sperren Sie Ihre Backups einmal und lassen Sie RcloneView sie im Autopilot-Modus sicher halten.

<CloudSupportGrid />
