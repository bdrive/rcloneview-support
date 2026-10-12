---
slug: fix-premiumize-sync-errors-rcloneview
title: "premiumize.me-Synchronisationsfehler beheben — Autorisierungs- und Übertragungsprobleme mit RcloneView lösen"
authors:
  - casey
description: "Beheben Sie premiumize.me-Synchronisationsfehler wie abgelaufene Autorisierung, fehlgeschlagene Übertragungen und fehlende Dateien mit den Logs, dem Job-Verlauf und Folder Compare von RcloneView."
keywords:
  - premiumize.me Synchronisationsfehler beheben
  - premiumize rclone Fehler
  - premiumize Autorisierung fehlgeschlagen
  - premiumize Übertragung fehlgeschlagen
  - premiumize Fehlerbehebung
  - RcloneView premiumize
  - Cloud-Synchronisation Fehlerbehebung
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# premiumize.me-Synchronisationsfehler beheben — Autorisierungs- und Übertragungsprobleme mit RcloneView lösen

> Wenn ein premiumize.me-Job fehlschlägt, zeigen der Job-Verlauf, die DEBUG-Logs und Folder Compare von RcloneView, ob die Ursache das Login, die Übertragungslast oder nie angekommene Dateien sind.

Ein premiumize.me-Job, der vorzeitig abbricht oder einen Ordner nur halb kopiert zurücklässt, lässt sich über die reine Kommandozeile schwer diagnostizieren. RcloneView vereint die Remote-Prüfung, den Job-Eintrag, das Log und einen Seite-an-Seite-Vergleich in einem Fenster, sodass Sie die eigentliche Ursache beheben, statt blind erneut zu starten. RcloneView bindet über 90 Anbieter in einem Fenster ein (Mount) und synchronisiert sie – unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Das Remote neu autorisieren

premiumize.me verbindet sich per OAuth im Browser. Wenn Jobs innerhalb von Sekunden fehlschlagen, ist zuerst das Login verdächtig. Öffnen Sie im Remote-Tab den Remote Manager, bearbeiten Sie das premiumize.me-Remote und melden Sie sich über die Browser-Eingabeaufforderung erneut an.

Öffnen Sie dann das Remote in einem Explorer-Panel und durchsuchen Sie den Stammordner. Wird er normal aufgelistet, ist die Verbindung in Ordnung und der Fehler liegt in der Übertragung selbst.

<img src="/support/images/en/blog/new-remote.png" alt="Neuautorisierung eines premiumize.me-Remotes in RcloneView" class="img-large img-center" />

## Job-Verlauf lesen und DEBUG-Logs aktivieren

Öffnen Sie Job History und prüfen Sie Status, Dauer und Dateianzahl des fehlgeschlagenen Laufs. Ein Job, der mittendrin einen Fehler meldet, deutet meist auf bestimmte Dateien oder auf Last hin, nicht auf Zugangsdaten.

Für die genaue Meldung pro Datei gehen Sie zu Settings > Embedded Rclone, aktivieren das rclone-Logging, setzen die Stufe auf DEBUG und klicken auf Restart Embedded Rclone. Reproduzieren Sie den Fehler und lesen Sie dann den Log-Tab oder die Logdatei im konfigurierten Ordner.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView-Job-Verlauf mit einem fehlerhaften premiumize.me-Job" class="img-large img-center" />

## Last reduzieren und den erneuten Lauf in der Vorschau prüfen

Sporadische Fehler lassen oft mit weniger gleichzeitigen Übertragungen nach. Verringern Sie in Schritt 2 des Sync-Assistenten die Anzahl der Dateiübertragungen und setzen Sie die Equality Checkers auf 4 oder weniger. Belassen Sie „Retry entire sync if fails“ auf 3, damit vorübergehende Fehler wiederholt werden.

Nutzen Sie vor dem erneuten Lauf Dry Run, um zu sehen, welche Dateien kopiert oder gelöscht würden, damit der erneute Versuch keine Überraschungen birgt.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Erneutes Ausführen eines premiumize.me-Jobs mit geringerer Parallelität" class="img-large img-center" />

## Mit Folder Compare bestätigen

Öffnen Sie nach dem erneuten Lauf Compare mit einem lokalen Ordner auf der einen und premiumize.me auf der anderen Seite. Filtern Sie nach nur links vorhandenen, nur rechts vorhandenen und abweichenden Dateien und kopieren Sie dann nur das, was noch fehlt, statt den gesamten Job zu wiederholen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zeigt auf premiumize.me fehlende Dateien" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Autorisieren Sie das premiumize.me-Remote neu und prüfen Sie, ob der Stammordner aufgelistet wird.
3. Prüfen Sie Job History und aktivieren Sie das DEBUG-Logging für den fehlgeschlagenen Job.
4. Verringern Sie die Parallelität, führen Sie einen Dry Run aus, starten Sie erneut und prüfen Sie mit Folder Compare.

Wenn die Ursache in Logs und Vergleich sichtbar wird, ist ein premiumize.me-Fehler schnell und reproduzierbar behoben.

---

**Verwandte Anleitungen:**

- [premiumize.me-Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [premiumize.me-Cloud-Downloads mit RcloneView synchronisieren](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [put.io-Synchronisationsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
