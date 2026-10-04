---
slug: migrate-google-drive-to-mega-rcloneview
title: "Google Drive zu Mega migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Google Drive mit RcloneView zu Mega migrieren: Cloud-zu-Cloud-Kopie, Dry-Run-Vorschau, Filter und Überprüfung in einer GUI, ganz ohne manuelle Downloads."
keywords:
  - Google Drive zu Mega migrieren
  - Google Drive zu Mega Übertragung
  - Dateien zu Mega verschieben
  - RcloneView
  - Cloud-zu-Cloud-Übertragung
  - Mega Cloud-Speicher
  - Google-Drive-Migration
  - rclone GUI
  - Cloud-Migrationstool
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive zu Mega migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine komplette Google-Drive-Bibliothek nach Mega, ohne etwas manuell herunterzuladen und wieder hochzuladen.

Der Wechsel von Google Drive zu Mega bedeutet meist, Archive zu exportieren, auf Downloads zu warten und alles erneut hochzuladen. RcloneView verbindet beide Dienste als Remotes und kopiert zwischen ihnen in einem Zwei-Fenster-Layout, mit einem Dry Run zur Vorschau, bevor auch nur eine Datei verschoben wird. RcloneView bindet 90+ Anbieter in einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Google Drive nutzt OAuth: RcloneView öffnet Ihren Browser, Sie melden sich an, und das Remote wird automatisch erstellt. Mega verwendet E-Mail und Passwort, die direkt im Dialog „New Remote“ eingegeben werden. Sobald beide Remotes im Remote Manager erscheinen, können Sie sie nebeneinander in zwei Explorer-Panels öffnen.

<img src="/support/images/en/blog/new-remote.png" alt="Google-Drive- und Mega-Remotes in RcloneView hinzufügen" class="img-large img-center" />

Nehmen wir eine Freiberuflerin mit 300 GB Projektordnern in Drive. Wenn sie beide Konten in benachbarten Panels durchsucht, kann sie Quellordner und Zielstruktur vor dem Start prüfen.

## Zwischen Clouds kopieren

Ziehen Sie einen Ordner aus dem Google-Drive-Panel in das Mega-Panel. Das Ziehen zwischen verschiedenen Remotes führt eine Kopie aus, sodass Ihre Drive-Daten unangetastet bleiben, bis Sie anders entscheiden. Für größere Aufgaben erstellen Sie stattdessen einen Copy-Job im Job Manager, der Fortschrittsüberwachung und einen gespeicherten Verlauf bietet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Google Drive zu Mega" class="img-large img-center" />

Wenn Sie Google-Docs-Dateien nicht übertragen möchten, schließt der vordefinierte Filter „Google Docs“ im Filterschritt sie aus. Sie können auch Dateigröße oder Alter begrenzen, damit nur relevante Daten verschoben werden.

## Job in der Vorschau ansehen und überwachen

Führen Sie zuerst einen Dry Run aus. Er listet die Dateien auf, die kopiert würden, sodass Sie einen falschen Quellordner erkennen, bevor er Sie Stunden kostet. Starten Sie dann den Job und beobachten Sie im Tab Transferring Geschwindigkeit, Dateianzahl und Fortschritt. Wenn lange Läufe Probleme machen, können Sie die Anzahl gleichzeitiger Dateiübertragungen in den Advanced Settings anpassen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Übertragungsfortschritt in RcloneView überwachen" class="img-large img-center" />

## Ergebnis überprüfen

Wenn der Job abgeschlossen ist, öffnen Sie Folder Compare für die Drive- und Mega-Ordner. Es hebt Dateien hervor, die nur links, nur rechts oder unterschiedlich vorhanden sind, und Fehlendes können Sie direkt in der Vergleichsansicht kopieren. Der Job History speichert Status, Dauer und Größe jedes Laufs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen Google Drive und Mega" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** [rcloneview.com](https://rcloneview.com/src/download.html) von dieser Seite.
2. Fügen Sie Google Drive (OAuth) und Mega (E-Mail und Passwort) über „New Remote“ hinzu.
3. Öffnen Sie beide Remotes in zwei Panels und führen Sie einen Dry Run für einen Testordner aus.
4. Erstellen Sie einen Copy-Job für die gesamte Bibliothek und überprüfen Sie ihn mit Folder Compare.

Eine visuelle Migration ohne Skripte lässt Ihr Drive intakt, bis Sie sicher sind, dass Mega alles enthält.

---

**Verwandte Anleitungen:**

- [Mega zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [Mega Cloud-Speicher verwalten](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Dry Run: Synchronisation vor der Übertragung in der Vorschau ansehen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
