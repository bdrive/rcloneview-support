---
slug: tiered-cloud-archive-glacier-rcloneview
title: "Gestuftes Cloud-Backup zu S3 Standard, Wasabi und Glacier Deep Archive mit RcloneView"
authors:
  - tayson
description: Bauen Sie eine Hot-Warm-Cold-Backup-Pipeline mit RcloneView über S3/Wasabi für schnelle Wiederherstellungen und Glacier Deep Archive für extrem kostengünstige Aufbewahrung, mit geplanten Sync-/Copy-Jobs und Lifecycle-Richtlinien.
keywords:
  - glacier deep archive
  - cold storage
  - gestuftes Backup
  - rclone s3
  - rcloneview
  - wasabi archive
  - lifecycle policy
  - cloud backup
  - archive retention
tags:
  - RcloneView
  - backup
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestuftes Cloud-Backup zu S3 Standard, Wasabi und Glacier Deep Archive mit RcloneView

> Halten Sie aktuelle Wiederherstellungen schnell und die Langzeitaufbewahrung günstig: heiß in S3 Standard, warm in Wasabi/R2 und archiviert in Glacier Deep Archive—mit RcloneView-Zeitplänen und Bucket-Lifecycle-Richtlinien.

Eine einzelne Storage-Klasse passt selten zu jeder Datei. Entwerfen Sie eine gestufte Pipeline: kopieren Sie frische Daten für schnellen Zugriff nach S3 Standard, spiegeln Sie diese für Georedundanz in eine kostengünstige warme Stufe (Wasabi/R2) und übertragen Sie monatliche Snapshots zur Compliance-Aufbewahrung nach Glacier Deep Archive. RcloneView legt eine GUI über rclone, sodass Sie Synchronisationen planen, mit Compare verifizieren und Lifecycle-Regeln beibehalten können—ohne Shell-Skripte.

<!-- truncate -->

**Relevante Dokumentation**

- Sync-Jobs erstellen: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Job-Planung & Ausführung (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Ordner vergleichen: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Als lokales Laufwerk einbinden: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Warum gestuftes Backup mit RcloneView

- Wiederherstellungsgeschwindigkeit: Aktuelle Dateien bleiben in S3 Standard für Zugriffe mit niedriger Latenz.
- Kostenkontrolle: Warme Kopie in Wasabi/R2; Deep Archive in Glacier für Cent-Beträge pro TB-Monat.
- Ausfallsicherheit: Multi-Cloud und Multi-Region reduzieren das Risiko eines einzelnen Anbieters.
- Kein Scripting: Visuelle Jobs, Zeitpläne und Protokolle statt Cron/YAML.
- Nachweis: Compare-Jobs zeigen Abweichungen auf, bevor eine Wiederherstellung nötig wird.

## Architektur im Überblick

```
[Primär (NAS/Drive/OneDrive)] --(Stündliche Sync)--> [S3 Standard Hot-Kopie]
                                         \
                                          --(Tägliche Sync)--> [Wasabi/R2 Warm-Kopie]
                                          --(Monatliche Copy)--> [Glacier Deep Archive]
```

- Hot: S3 Standard (schnelle Wiederherstellung).
- Warm: Wasabi oder R2 (günstig + egress-freundlich für Wiederherstellungen).
- Cold: Glacier Deep Archive für 90-365 Tage Aufbewahrung (Bucket-Lifecycle zum Übergang der Objekte nutzen).

## Voraussetzungen

- Drei Remotes in RcloneView konfiguriert (z. B. `s3:hot`, `wasabi:warm`, `s3:archive`).
- Versionierung auf Hot-/Warm-Buckets; Lifecycle-Regeln auf dem Archiv-Bucket für den Übergang zu Glacier Deep Archive.
- IAM-/API-Berechtigungen: list/read/write + multipart; Glacier-Restore-Berechtigungen für die Cold-Stufe.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Schritt 1: Hot- und Warm-Sync-Jobs erstellen

1. Erstellen Sie einen **Sync**-Job (Primär -> S3 Hot).
2. Legen Sie in den **Erweiterten Einstellungen** die Übertragungsanzahl fest und aktivieren Sie den Checksummenvergleich, falls beide Seiten Hashes unterstützen.
3. Schließen Sie in den **Filtereinstellungen** Cache-/Temp-Ordner aus.
4. Erstellen Sie einen zweiten **Sync**-Job (Primär -> Wasabi/R2 Warm) mit ähnlichen Einstellungen und Filtern.
5. Speichern Sie beide Jobs im Job Manager.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Schritt 2: Den Cold-Archive-Copy-Job hinzufügen

1. Erstellen Sie einen **Copy**-Job (S3 Hot -> Glacier-Archiv-Bucket). Verwenden Sie Copy statt Sync, um Löschungen im Archiv zu vermeiden.
2. Legen Sie in den **Erweiterten Einstellungen** die Übertragungsanzahl und den Checksummenvergleich nach Bedarf fest.
3. Verwenden Sie Bucket-Lifecycle-Regeln, um Objekte zu Glacier Deep Archive zu übertragen und alte Versionen nach Compliance-Fristen ablaufen zu lassen.

## Schritt 3: Alles planen

- Legen Sie im Job-Assistenten (Schritt 4: Planung, Plus) die Taktung fest: stündlich Hot, nächtlich Warm, monatlich Cold.
- Verwenden Sie **Simulate**, um Zeitpläne vorab anzuzeigen, und legen Sie in den Erweiterten Einstellungen die Anzahl der Wiederholungsversuche fest.
- Fügen Sie einen wöchentlichen Compare (Hot vs. Warm) hinzu, um Abweichungen frühzeitig zu erkennen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Schritt 4: Integrität verifizieren

- Führen Sie nach der ersten vollständigen Synchronisation einen Compare zwischen Hot und Warm aus.
- Führen Sie für das Archiv Stichprobenwiederherstellungen durch: eine kleine Glacier-Abfrage durchführen und prüfen, ob sich die Dateien korrekt öffnen lassen.
- Halten Sie in jeder Stufe eine kleine Canary-Datei (z. B. `canary.txt`) vor und prüfen Sie deren Vorhandensein in den Compare-Berichten.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Schritt 5: Wiederherstellungs-Playbook

- Schnelle Wiederherstellungen: aus Warm (Wasabi/R2) oder Hot (S3 Standard) beziehen, je nach Egress/Standort.
- Tiefe Wiederherstellungen: Glacier-Restore für das benötigte Präfix initiieren; anschließend per Copy zurück nach Warm/Hot.
- Nutzen Sie Mount in RcloneView zum Durchsuchen vor der Massenkopie, um das Wiederherstellen falscher Ordner zu vermeiden.

## Optimierungstipps

- Latenz-/Egress-empfindlich: Übertragungsanzahl während der Geschäftszeiten senken; außerhalb erhöhen.
- Glacier-Kosten: Archive monatlich bündeln; häufige kleine Uploads vermeiden, um PUT- und Retrieval-Anfragen zu reduzieren.
- Sicherheit: Hot/Warm mit Object Lock kombinieren (siehe Immutable-Guide), um Ransomware-Löschungen zu blockieren.
- Benennung: Snapshots mit Datumsordnern versehen (z. B. `archive/2025-11/`), um Lifecycle und Wiederherstellungen zu vereinfachen.

## Checkliste zur Fehlerbehebung

- Wiederherstellungsverzögerungen: Glacier-Abfragen können Stunden dauern—planen Sie RPO/RTO entsprechend.
- AccessDenied im Archiv: sicherstellen, dass die IAM-Rolle `glacier:InitiateJob`/Restore für den Bucket erlaubt.
- Abweichung festgestellt: Hot/Warm-Sync erneut ausführen; fehlen Objekte im Archiv, das Delta erneut von Hot kopieren (Copy).
- Kosten steigen: Lifecycle-Ablauf nach der Aufbewahrungsfrist aktivieren; Nebenläufigkeit während Spitzen-Egress-Zeiten begrenzen.



Einmal stufen, immer planen—und behalten Sie mit RcloneView sowohl Kosten als auch RPO unter Kontrolle.

<CloudSupportGrid />
