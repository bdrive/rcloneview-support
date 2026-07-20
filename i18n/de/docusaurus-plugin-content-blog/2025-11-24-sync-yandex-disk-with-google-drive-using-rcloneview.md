---
slug: sync-yandex-disk-with-google-drive-using-rcloneview
title: "Yandex Disk mit Google Drive synchronisieren mit RcloneView — Multi-Cloud-Workflow leicht gemacht"
authors:
  - tayson
description: "Verbinden Sie Yandex Disk und Google Drive, sehen Sie Unterschiede in der Vorschau und führen Sie geplante Synchronisationen mit Prüfsummenverifizierung in RcloneView durch."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud sync
  - rclone sync
  - multi cloud
  - checksum verification
  - scheduler
  - compare
  - mount
  - webdav
  - backup
  - migration
  - gui
  - cloud to cloud
  - transfer monitor
  - job history
  - bandwidth limits
  - dry run
  - sync jobs
tags:
  - RcloneView
  - cloud-storage
  - cloud-to-cloud
  - sync
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk mit Google Drive synchronisieren mit RcloneView — Multi-Cloud-Workflow leicht gemacht

> Verschieben und synchronisieren Sie Dateien zwischen Yandex Disk und Google Drive, ohne CLI-Flags anzufassen. RcloneView bietet Ihnen Vergleiche nebeneinander, prüfsummenverifizierte Jobs und einen Scheduler, um beide Clouds im Gleichschritt zu halten.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum Yandex Disk und Google Drive synchronisieren?

- Konsolidieren Sie verstreute Ordner über persönliche und Team-Konten hinweg.
- Halten Sie einen Live-Spiegel für Redundanz oder regionalen Zugriff bereit.
- Bereiten Sie Migrationen sicher vor mit Vorschauen, Dry-Runs und Prüfsummen vor der Umstellung.
- Reduzieren Sie Anbieterbindung: Bewahren Sie eine verifizierte Kopie in einer anderen Cloud ohne manuelle Exporte.
- Erhalten Sie die Verfügbarkeit: Wenn ein Anbieter drosselt, bleibt der andere nutzbar.

## Schritt 1 — Beide Remotes verbinden

- Fügen Sie Yandex Disk (WebDAV oder OAuth) über `+ New Remote` hinzu. Anleitung: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Fügen Sie Google Drive mit demselben Ablauf hinzu; wählen Sie den richtigen Umfang (Meine Ablage oder geteilte Ablage).
- Überprüfen Sie beide im **Remote Explorer**, damit Sie sicher sind, dass Pfade und Berechtigungen korrekt sind.
- Optionale Plausibilitätsprüfungen: Bestätigen Sie Zeitzone und Konsistenz der Änderungszeit bei einigen Testdateien, um unerwartete Überschreibungen zu vermeiden.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Schritt 2 — Vor der Synchronisation vergleichen

- Öffnen Sie **Compare**, um zu sehen, was sich zwischen Yandex Disk und Google Drive unterscheidet: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filtern Sie nach Dateierweiterungen, wenn Sie sich auf Dokumente, Medien oder Archive konzentrieren möchten.
- Speichern Sie den Vergleich als Job, damit Sie Prüfungen nach jeder Synchronisation erneut ausführen können.
- Nutzen Sie den Vergleich als Ihren Dry-Run: Er zeigt Hinzufügungen/Aktualisierungen/Löschungen an, ohne Daten zu verändern.
- Wenn Sie unerwartete Löschungen sehen, ändern Sie Ihren Job auf `copy` (nicht `sync`), bis Sie sich sicher sind.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

## Schritt 3 — Einen sicheren Synchronisationsjob erstellen

- Erstellen Sie einen Job von Yandex Disk zu Google Drive (oder bidirektional, falls nötig): [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Beginnen Sie beim ersten Lauf mit **copy**, um ungewollte Löschungen zu vermeiden; wechseln Sie zu **sync**, sobald validiert.
- Aktivieren Sie die Prüfsummenverifizierung, um stille Beschädigungen zu erkennen.
- Schließen Sie Temp-/Cache-Ordner aus, damit Sie nur das verschieben, was wichtig ist.
- Wählen Sie bei geteilten Ablagen den richtigen Zielordner (vermeiden Sie das Stammverzeichnis), um ACLs sauber zu halten.
- Halten Sie die Groß-/Kleinschreibung der Pfade konsistent, um doppelt aussehende Ordner bei Groß-/Kleinschreibung-sensitiven vs. -insensitiven Backends zu vermeiden.
- Ziehen Sie Chunk-Größen und Parallelität nur in Betracht, wenn Sie an API-Limits stoßen; die Standardwerte sind für die meisten Nutzer ausreichend.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />



## Schritt 4 — Planen und überwachen

- Legen Sie den Scheduler für Nebenzeiten fest, um API-Drosselung zu reduzieren: [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)    
- Beobachten Sie Live-Durchsatz und stockende Dateien im **Transfer Monitor**: [real-time-transfer-monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring).
- Benachrichtigungsgewohnheit: Überprüfen Sie den Job-Verlauf jeden Morgen während Migrationswochen, um Anomalien frühzeitig zu erkennen.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />


## Schritt 5 — Für bedarfsgerechten Zugriff einbinden (optional)

- Binden Sie eine der Clouds lokal ein, um zu durchsuchen, ohne alles herunterzuladen: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Windows: Weisen Sie einen Laufwerksbuchstaben zu; macOS: Wählen Sie einen Einbindungspfad unter `/Volumes`.
- Gut zur Validierung: Öffnen Sie nach einer Synchronisation einige Dateien direkt aus jedem eingebundenen Laufwerk, um Berechtigungen und Lesbarkeit zu bestätigen.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  

## Wiederherstellen oder Umkehren

- Um die Richtung umzukehren (Google Drive zu Yandex Disk), duplizieren Sie den Job und tauschen Quelle/Ziel.
- Für selektive Wiederherstellungen führen Sie **copy** mit einer eingegrenzten Include-Liste aus, um gute Daten nicht zu überschreiben.
- Behalten Sie einen kleinen, bekanntermaßen guten "Kanarienvogel"-Ordner und stellen Sie sicher, dass jeder Lauf ihn unverändert lässt; er ist Ihre schnelle Gesundheitsprüfung.

## Kurztipps

- Halten Sie auf beiden Seiten konsistente Ordnerstrukturen, um Pfadabweichungen zu reduzieren.
- Verwenden Sie Voreinstellungen pro Team (Dokumente, Medien, Archive), damit Läufe vorhersehbar bleiben.
- Testen Sie zuerst mit einem kleinen Ordner und skalieren Sie dann auf den vollständigen Baum.
- Dokumentieren Sie Ihre Job-Einstellungen (Modus, Filter, Zeitplan), damit jeder im Team sicher erneut ausführen kann.
- Halten Sie während umfangreicher Migrationen die eingebundenen Laufwerke für Nutzer schreibgeschützt, um Bearbeitungen während des Laufs zu verhindern.

RcloneView macht die Synchronisation zwischen Yandex Disk und Google Drive unkompliziert: erst vergleichen, sicher kopieren, den Rest planen und alles von einem Dashboard aus überwachen.


<CloudSupportGrid />
