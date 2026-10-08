---
slug: fix-sugarsync-sync-errors-rcloneview
title: "SugarSync-Synchronisationsfehler beheben — Autorisierungs-, Übertragungs- und Fehldateiprobleme mit RcloneView lösen"
authors:
  - morgan
description: "SugarSync-Synchronisationsfehler wie fehlgeschlagene Autorisierung, unterbrochene Übertragungen und fehlende Dateien mit den Protokollen, dem Job-Verlauf und Folder Compare von RcloneView analysieren."
keywords:
  - SugarSync Synchronisationsfehler beheben
  - SugarSync rclone Fehler
  - SugarSync Autorisierung fehlgeschlagen
  - SugarSync Upload fehlgeschlagen
  - SugarSync Fehlerbehebung
  - RcloneView SugarSync
  - rclone SugarSync Remote
  - Cloud-Synchronisation Fehlerbehebung
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSync-Synchronisationsfehler beheben — Autorisierungs-, Übertragungs- und Fehldateiprobleme mit RcloneView lösen

> Wenn ein SugarSync-Job fehlschlägt, zeigen der Job-Verlauf, die DEBUG-Protokolle und Folder Compare von RcloneView, ob die Ursache beim Remote, bei der Übertragungslast oder bei Dateien liegt, die nie angekommen sind.

Eine SugarSync-Synchronisation, die mit einer vagen Fehlermeldung stoppt oder mit scheinbar unvollständigen Ordnern endet, lässt sich allein über die Befehlszeile schwer diagnostizieren. RcloneView vereint Remote-Prüfung, Job-Protokoll, Log und Seite-an-Seite-Vergleich in einem Fenster, sodass Sie anhand von Belegen arbeiten, statt blind erneut zu starten. RcloneView bindet über 90 Anbieter in einem Fenster ein (mount) und synchronisiert sie – unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Prüfen, ob das Remote noch verbunden ist

Schlägt ein Job schon nach Sekunden fehl, verdächtigen Sie zuerst das Remote und nicht die Daten. Öffnen Sie im Tab Remote den Remote Manager, bearbeiten Sie das SugarSync-Remote und autorisieren Sie es neu, falls sich die Kontodaten geändert haben. Öffnen Sie das Remote anschließend in einem Explorer-Bereich und durchsuchen Sie den Stammordner. Wird er normal aufgelistet, ist die Verbindung in Ordnung und das Problem liegt woanders.

Im integrierten Tab Terminal können Sie außerdem `rclone about "remote:"` ausführen (ersetzen Sie `remote` durch den Namen Ihres Remotes), um schnell zu prüfen, ob das Konto antwortet.

<img src="/support/images/en/blog/new-remote.png" alt="SugarSync-Remote im RcloneView Remote Manager bearbeiten" class="img-large img-center" />

## Job-Verlauf lesen und DEBUG-Protokollierung einschalten

Öffnen Sie den Job History und prüfen Sie Status, Dauer und Dateianzahl des fehlgeschlagenen Laufs. Ein Job, der mittendrin einen Fehler meldet, deutet meist auf bestimmte Dateien oder die Übertragungslast hin, nicht auf die Zugangsdaten.

Für die genaue Meldung pro Datei gehen Sie zu Settings > Embedded Rclone, aktivieren die rclone-Protokollierung, stellen die Stufe auf DEBUG und klicken auf Restart Embedded Rclone. Reproduzieren Sie den Fehler und lesen Sie das Protokoll im Tab Log oder im konfigurierten Log-Ordner.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView-Job-Verlauf mit einem fehlerhaften SugarSync-Job" class="img-large img-center" />

## Parallelität senken und den erneuten Lauf in der Vorschau prüfen

Sporadische Upload-Fehler lassen oft nach, wenn weniger Dateien gleichzeitig übertragen werden. Verringern Sie in Schritt 2 des Sync-Assistenten die Anzahl der Dateiübertragungen und setzen Sie die Equality Checkers auf 4 oder weniger – das ist die Empfehlung für langsame Backends. Lassen Sie „Retry entire sync if fails“ auf 3, damit vorübergehende Fehler bis zu dreimal wiederholt werden.

Prüfen Sie vor dem erneuten Lauf mit Dry Run, welche Dateien kopiert oder gelöscht werden, damit die Wiederholung keine Überraschungen bringt.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="SugarSync-Job in RcloneView mit reduzierter Parallelität erneut ausführen" class="img-large img-center" />

## Mit Folder Compare überprüfen

Öffnen Sie nach dem erneuten Lauf Compare, mit Ihrem lokalen Ordner auf der einen und SugarSync auf der anderen Seite. Filtern Sie nach Dateien, die nur links, nur rechts oder unterschiedlich vorhanden sind, um zu sehen, was noch fehlt oder abweicht, und kopieren Sie dann nur diese Elemente, statt den gesamten Job zu wiederholen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare listet Dateien auf, die in SugarSync fehlen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisieren Sie das SugarSync-Remote im Remote Manager neu und prüfen Sie, ob der Stammordner aufgelistet wird.
3. Prüfen Sie den Job History und aktivieren Sie die DEBUG-Protokollierung für den fehlschlagenden Job.
4. Senken Sie die Parallelität, führen Sie einen Dry Run aus, starten Sie den Job erneut und bestätigen Sie das Ergebnis mit Folder Compare.

Sobald die Ursache in den Protokollen und im Vergleich sichtbar ist, wird ein SugarSync-Fehler zu einer kurzen, wiederholbaren Korrektur.

---

**Verwandte Anleitungen:**

- [SugarSync-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [SugarSync mit RcloneView zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [OpenDrive-Synchronisationsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
