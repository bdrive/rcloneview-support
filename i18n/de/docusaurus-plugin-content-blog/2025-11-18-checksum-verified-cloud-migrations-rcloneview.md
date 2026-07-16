---
slug: checksum-verified-cloud-migrations-rcloneview
title: "Checksum-verifizierte Cloud-Migrationen mit RcloneView (Drive, Dropbox, S3, R2)"
authors:
  - tayson
description: Verschieben Sie Daten zwischen Google Drive, Dropbox, OneDrive, S3 oder Cloudflare R2 mit Checksum-Validierung und Drift-Erkennung mithilfe der Sync- und Compare-Jobs von RcloneView – ohne Kommandozeile.
keywords:
  - checksum migration
  - rclone checksum
  - Datenintegrität
  - rcloneview
  - Cloud-Migration
  - google drive zu dropbox
  - s3 zu r2
  - compare sync
tags:
  - migration
  - compare
  - sync
  - safety
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Checksum-verifizierte Cloud-Migrationen mit RcloneView (Drive, Dropbox, S3, R2)

> Bewegen Sie Petabytes nur einmal. Nutzen Sie RcloneView, um zu synchronisieren, mit Checksums zu verifizieren und Drift zu erkennen, bevor Sie die Apps umstellen.

Von Google Drive zu Dropbox oder von S3 zu R2 zu kopieren ist einfach – zu beweisen, dass jedes Objekt unversehrt angekommen ist, ist schwieriger. Rclone verfügt über bewährte Checksum- und Compare-Modi; RcloneView verpackt diese in eine GUI, sodass Sie integritätsgeprüfte Migrationen mit Zeitplänen, Protokollen und ganz ohne Shell-Skripte durchführen können.

<!-- truncate -->

**Relevante Dokumentation**

- Sync-Jobs erstellen: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Job-Planung & Ausführung (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Ordner vergleichen: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Als lokales Laufwerk einbinden: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Warum checksum-verifizierte Migrationen

- Stille Datenkorruption vermeiden: Checksums erkennen Bitrot und unvollständige Uploads.
- Schnellere Umstellungen: Compare zeigt Abweichungen auf, bevor Sie die Endpunkte umschalten.
- Multi-Cloud-fähig: Funktioniert mit Drive, Dropbox, OneDrive, S3, Wasabi, R2, B2 und NAS.
- Kein Scripting nötig: Erstellen, planen und wiederholen Sie Jobs visuell.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Migrationsplan

```
[Source cloud/NAS] --(RcloneView Sync with checksum enabled)--> [Target cloud]
                                           \
                                            --(RcloneView Compare)--> [Drift report]
```

- Stufe 1: Baseline-Synchronisation mit Checksum, um alles einmalig hochzuladen.
- Stufe 2: Inkrementelle Synchronisationen nach Zeitplan, um das Umstellungsfenster zu verkleinern.
- Stufe 3: Compare, um Objektanzahl und Hashes abzugleichen.
- Stufe 4: Umstellung/Einbinden des Ziels für den Produktivbetrieb.

## Voraussetzungen

- In RcloneView hinzugefügte Remotes für Quelle und Ziel (z. B. `drive:team`, `dropbox:prod`, `s3:archive`, `r2:mirror`).
- Das Ziel verfügt über ausreichend Kontingent und, falls S3-kompatibel, aktivierte Versionierung zur Sicherheit.
- API-/IAM-Schlüssel erlauben List/Read/Write und, bei S3, Multipart-Uploads.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  

## Schritt 1: Einen Checksum-Sync-Job erstellen

1. Neuer Sync-Job: Quelle = aktuelles System, Ziel = Ziel-Cloud.
2. Aktivieren Sie in den **Advanced Settings** den Checksum-Vergleich, falls beide Remotes Hashes unterstützen, und passen Sie die Anzahl der Transfers/Checker an Ihre Verbindung an.
3. Fügen Sie unter **Filtering Settings** Include-/Exclude-Filter für Cache-/Temp-Ordner hinzu.
4. Speichern Sie den Job, damit erneute Ausführungen dieselben Integritätseinstellungen beibehalten (Job Manager).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Schritt 2: Inkrementelle Läufe planen

1. Aktivieren Sie im Job-Assistenten (Schritt 4: Scheduling, Plus) die Planung für den Migrationsjob.
2. Führen Sie diesen nächtlich oder stündlich aus, um das endgültige Umstellungsdelta zu reduzieren; nutzen Sie **Simulate**, um Läufe vorab zu prüfen.
3. Legen Sie Wiederholungsversuche in den Advanced Settings für Drosselungsfälle fest.
4. Protokollierung und Verlauf werden automatisch gespeichert; prüfen Sie die Job History für Audit-Hinweise.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Schritt 3: Mit Compare verifizieren

- Führen Sie nach der Baseline einen Compare zwischen Quelle und Ziel aus, um den Inhalt zu validieren – nicht nur die Größe.
- Fügen Sie eine wöchentliche Compare-Routine hinzu, um späten Drift zu erkennen (manuell aus Compare ausgeführt; der Scheduler gilt nur für Jobs).
- Prüfen Sie den Bericht/die Protokolle auf Abweichungen; führen Sie Sync erneut aus, um nur die Unterschiede zu beheben.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

## Schritt 4: Sicher umstellen

1. Schreibzugriffe auf die Quelle einfrieren (Wartungsfenster).
2. Einen letzten Sync mit aktivierter Checksum durchführen, um die Lücke zu schließen.
3. Ein letztes Mal Compare ausführen; erwarten Sie null Abweichungen.

## Optimierungstipps

- Verbindungen mit hoher Latenz: Anzahl der Transfers reduzieren; bei großen Mediendateien Multi-Thread-Übertragungen aktiviert lassen, falls das Backend dies unterstützt.
- Gemischte Clouds: Falls ein Anbieter keine Checksums unterstützt, auf Größen-/Zeitabgleich vertrauen und kritische Daten manuell prüfen.
- Bandbreitenbegrenzungen: Grenzen während der Geschäftszeiten in den Einstellungen festlegen; größere Läufe über Nacht planen.
- Sicherheitsnetz: Versionierung am Ziel aktiviert lassen; Object Lock verwenden, wo unterstützt.

## Checkliste zur Fehlerbehebung

- Abweichende Anzahlen: Compare erneut ausführen; prüfen, ob beide Seiten Hashes bereitstellen (manche Anbieter unterstützen keine Checksums).
- Langsame Verifizierungen: Anzahl der Checker/Transfers reduzieren, falls die Verbindung ausgelastet ist.
- AccessDenied bei S3-Uploads: sicherstellen, dass Multipart- und List-Berechtigungen erteilt sind.
- Gelöschte Dateien erscheinen erneut: Delete-Flags erst nach der endgültigen Umstellung entfernen, wenn Sie eine strikte Spiegelung benötigen.


Verifizieren Sie jede Migration per Checksum, und Sie müssen die Daten nur einmal bewegen.

<CloudSupportGrid />
