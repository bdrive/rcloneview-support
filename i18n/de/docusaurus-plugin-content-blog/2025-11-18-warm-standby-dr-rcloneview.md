---
slug: warm-standby-disaster-recovery-rcloneview
title: "Warm-Standby Disaster Recovery über mehrere Clouds mit RcloneView (S3, Wasabi, R2, OneDrive)"
authors:
  - tayson
description: Erstellen Sie ein Multi-Region-Warm-Standby-DR-Setup mit RcloneView und rclone über AWS S3, Wasabi, Cloudflare R2, OneDrive oder Google Drive mithilfe von geplanter Synchronisation, Vergleich und Mount-basiertem Failover.
keywords:
  - warm standby
  - disaster recovery
  - multi-region backup
  - rclone s3
  - rcloneview
  - cloud failover
  - compare sync
  - cloudflare r2
  - wasabi s3
tags:
  - disaster-recovery
  - multi-cloud
  - sync
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Warm-Standby Disaster Recovery über mehrere Clouds mit RcloneView (S3, Wasabi, R2, OneDrive)

> Halten Sie eine Live-Kopie Ihrer Produktionsdaten in einer anderen Region oder Cloud vor und wechseln Sie im Störungsfall innerhalb von Minuten.

Warm-Standby-DR kombiniert einen primären Standort (z. B. AWS S3 oder OneDrive) mit einem kontinuierlich aktualisierten Standby (z. B. Cloudflare R2 oder Wasabi). RcloneView legt eine GUI über rclone, sodass Sie regelmäßige Synchronisationen planen, Abweichungen mit Compare validieren und den Standby für ein schnelles Failover einbinden (mount) können – ganz ohne Shell-Skripte.

<!-- truncate -->

**Relevante Dokumentation**

- Sync-Jobs erstellen: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Job-Planung & Ausführung (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Als lokales Laufwerk einbinden: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive
- Ordner vergleichen: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Warum Warm-Standby mit RcloneView

- Schnellere Wiederherstellung: Standby-Kopien liegen innerhalb von Minuten/Stunden hinter dem Primärsystem, nicht Tagen.
- Cloud-Wahl: Kombinieren Sie S3, Wasabi, R2, B2, Google Drive, Dropbox oder OneDrive.
- Keine Skripte: Erstellen Sie Jobs per Assistent statt mit YAML/Cron.
- Sichtbare Abweichungen: Compare zeigt Diskrepanzen an, bevor ein Failover nötig wird.
- Sicherere Wiederherstellungen: Binden Sie den Standby ein und kopieren Sie zurück, ohne die Produktion zu berühren.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## Strategie und Architektur

```
[Primary cloud/local/NAS] --(RcloneView scheduled Sync)--> [Standby cloud/region]
                                                \
                                                 --(Weekly Compare)--> [Drift report]
```

- Primär: wo Anwendungen schreiben (S3-Bucket, OneDrive-Site, GDrive-Workspace, NAS).
- Standby: eine andere Region/Anbieter mit Versionierung (R2/Wasabi/S3/B2).
- Steuerung: RcloneView führt die Synchronisation in Intervallen aus; Compare prüft die Integrität; Mount ermöglicht schnellen Zugriff während des Failovers.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Voraussetzungen

- Zwei in RcloneView konfigurierte Remotes (z. B. `s3:prod-bucket` und `r2:standby-bucket`).
- Versionierung auf dem Standby aktiviert, zur Absicherung von Rollbacks.
- IAM-/API-Berechtigungen für List/Read/Write auf beiden Seiten.
- Bandbreitenfenster für die geplante Replikation (nächtlich oder stündlich).

## Schritt 1: Den Basis-Sync-Job erstellen

1. Erstellen Sie einen Sync-Job: Quelle = Primärsystem, Ziel = Standby.
2. Verwenden Sie eine einseitige Synchronisation, um neue/aktualisierte Dateien zu spiegeln; behalten Sie Löschungen bei, wenn Sie eine strikte Parität wünschen.
3. Fügen Sie im Schritt „Filtering“ Filter für störende Pfade hinzu (z. B. Cache/Temp).
4. Passen Sie unter **Advanced Settings** die Übertragungsanzahl an und aktivieren Sie den Checksummenvergleich, falls beide Seiten Hashes unterstützen.
5. Speichern Sie den Job, damit dieselben Einstellungen bei jedem Lauf gelten (Job Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Schritt 2: Kontinuierliche Aktualisierungen planen

1. Aktivieren Sie im Job-Assistenten (Schritt 4: Scheduling, Plus-Lizenz) die Planung für den DR-Job.
2. Wählen Sie den Rhythmus: stündlich für Anwendungsdaten, nächtlich für Archive, und nutzen Sie **Simulate**, um kommende Läufe vorab zu prüfen.
3. Legen Sie unter Advanced Settings Wiederholungsversuche für instabile Verbindungen fest.
4. Führen Sie zusätzlich einen manuellen wöchentlichen Compare durch, um Abweichungen frühzeitig zu erkennen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Schritt 3: Überprüfen und überwachen

- Nutzen Sie Compare, um sicherzustellen, dass die Objektanzahl übereinstimmt, bevor Sie den Standby für bereit erklären.
- Prüfen Sie die Job History auf Fehler oder Wiederholungen und starten Sie den Job erneut, falls ein Zeitfenster verpasst wurde.
- Behalten Sie die Versionierung auf dem Standby bei, damit versehentliche Löschungen wiederhergestellt werden können.

## Schritt 4: Failover-Playbook

1. Standby einbinden: Verwenden Sie den Mount Manager, um das Ziel-Remote auf einen festen Pfad/Laufwerksbuchstaben einzubinden.
2. Richten Sie Workloads auf den eingebundenen Pfad oder den Standby-Bucket-Endpunkt aus.
3. Halten Sie das Primärsystem schreibgeschützt oder offline, bis die Störungsanalyse abgeschlossen ist.


## Tuning-Tipps

- Latenzsensible Anwendungen: Reduzieren Sie die Übertragungsanzahl in den Advanced Settings und planen Sie die Ausführung in verkehrsarmen Zeiten.
- Compliance: Behalten Sie die Versionierung auf dem Standby bei und exportieren Sie die Job History für Audits.
- Kostenkontrolle: Schließen Sie Staging-/Temp-Ordner über Filter aus und wenden Sie Lifecycle-Richtlinien auf der Standby-Cloud an.
- Multi-Cloud: Führen Sie separate Jobs aus, wenn Sie zwei Standbys (z. B. R2 + Wasabi) aus demselben Primärsystem benötigen.

## Checkliste zur Fehlerbehebung

- Abweichende Anzahl: Führen Sie Compare erneut aus und prüfen Sie die Job History auf übersprungene Elemente; stellen Sie sicher, dass die Versionierung aktiviert ist.
- Berechtigungsfehler: Stellen Sie sicher, dass die API-Schlüssel List/Read/Write auf beiden Clouds erlauben.
- Wiederherstellung löscht Daten: Verwenden Sie Copy (nicht Sync), wenn Sie Daten zurück in die Produktion bringen.


Halten Sie Ihren Standby warm, getestet und einsatzbereit, damit Failover ein Schalter ist – kein Wettlauf gegen die Zeit.

<CloudSupportGrid />
