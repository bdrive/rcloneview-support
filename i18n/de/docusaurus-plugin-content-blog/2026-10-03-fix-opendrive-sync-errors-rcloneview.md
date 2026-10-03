---
slug: fix-opendrive-sync-errors-rcloneview
title: "OpenDrive-Synchronisationsfehler beheben — Login-, Upload- und Listing-Probleme mit RcloneView lösen"
authors:
  - kai
description: "Analysieren Sie OpenDrive-Synchronisationsfehler wie fehlgeschlagene Logins, unterbrochene Uploads und fehlende Dateien mit Jobverlauf, Logs und Folder Compare von RcloneView."
keywords:
  - OpenDrive Synchronisationsfehler beheben
  - OpenDrive rclone Fehler
  - OpenDrive Login fehlgeschlagen
  - OpenDrive Upload fehlgeschlagen
  - OpenDrive Fehlerbehebung
  - RcloneView OpenDrive
  - rclone OpenDrive Remote
  - Cloud-Synchronisation Fehlerbehebung
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive-Synchronisationsfehler beheben — Login-, Upload- und Listing-Probleme mit RcloneView lösen

> Wenn eine OpenDrive-Synchronisation fehlschlägt, zeigen Jobverlauf, Logs und Folder Compare in RcloneView, ob die Ursache bei den Zugangsdaten, der Übertragungslast oder bei nie angekommenen Dateien liegt.

Ein fehlgeschlagener Sync erklärt sich selten von selbst. Ein Job kann sofort stoppen, mit fehlenden Dateien enden oder einen Ordner hinterlassen, der unvollständig aussieht. Statt blind neu zu starten, können Sie den Jobverlauf von RcloneView lesen, das DEBUG-Logging aktivieren und beide Seiten vergleichen, um die eigentliche Ursache zu finden. RcloneView bindet über 90 Anbieter in einem Fenster ein und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verbindungs- und Zugangsdatenprobleme ausschließen

Wenn ein Job innerhalb weniger Sekunden fehlschlägt, liegt der Verdacht auf dem Remote selbst. Öffnen Sie den Remote Manager über den Remote-Tab, bearbeiten Sie das OpenDrive-Remote und geben Sie die Kontodaten erneut ein. Öffnen Sie das Remote anschließend in einem Explorer-Bereich und durchsuchen Sie den Stammordner. Wird er normal aufgelistet, ist die Verbindung in Ordnung und der Fehler liegt woanders.

Sie können außerdem im integrierten Terminal-Tab `rclone about "remote:"` ausführen, um zu prüfen, ob das Konto antwortet; ersetzen Sie `remote` durch den Namen Ihres Remotes.

<img src="/support/images/en/blog/new-remote.png" alt="Bearbeiten eines OpenDrive-Remotes im RcloneView Remote Manager" class="img-large img-center" />

## Jobverlauf lesen und DEBUG-Logs aktivieren

Öffnen Sie Job History und prüfen Sie Status, Dauer und Dateianzahl des fehlgeschlagenen Laufs. Ein Job, der mittendrin mit einem Fehler abbricht, deutet meist auf eine bestimmte Datei oder ein Problem mit der Übertragungslast hin, nicht auf ein falsches Login.

Um die genaue Meldung pro Datei zu sehen, gehen Sie zu Settings > Embedded Rclone, aktivieren das rclone-Logging, setzen die Stufe auf DEBUG und starten das eingebettete rclone neu. Reproduzieren Sie den Fehler und lesen Sie dann das Log im Log-Tab oder im konfigurierten Log-Ordner.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView-Jobverlauf mit einem fehlerhaften OpenDrive-Job" class="img-large img-center" />

## Last bei unterbrochenen Übertragungen reduzieren

Uploads, die sporadisch fehlschlagen, werden oft besser, wenn weniger Dateien gleichzeitig übertragen werden. Verringern Sie in Schritt 2 des Sync-Assistenten die Anzahl der Dateiübertragungen und der Equality Checker (für langsame Backends gilt ein Richtwert von 4 oder weniger). Belassen Sie „Retry entire sync if fails“ bei 3, damit vorübergehende Fehler automatisch wiederholt werden.

Nutzen Sie vor dem erneuten Lauf einen Dry Run, um zu prüfen, ob die Liste der zu kopierenden oder zu löschenden Dateien Ihren Erwartungen entspricht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Erneutes Ausführen eines OpenDrive-Jobs mit reduzierter Parallelität in RcloneView" class="img-large img-center" />

## Mit Folder Compare überprüfen

Öffnen Sie nach dem erneuten Lauf Compare mit dem lokalen Ordner auf einer und OpenDrive auf der anderen Seite. Filtern Sie nach left-only-, right-only- und different-Dateien, um genau zu sehen, was noch fehlt oder abweicht, und kopieren Sie dann nur diese Elemente, statt den gesamten Job zu wiederholen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zeigt auf OpenDrive fehlende Dateien" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Geben Sie die OpenDrive-Zugangsdaten im Remote Manager erneut ein und prüfen Sie, dass der Stammordner aufgelistet wird.
3. Prüfen Sie Job History und aktivieren Sie DEBUG-Logging für den fehlerhaften Job.
4. Verringern Sie die Parallelität, führen Sie einen Dry Run aus, starten Sie den Job erneut und bestätigen Sie das Ergebnis mit Folder Compare.

Wenn die Ursache aus Logs und Vergleichen bekannt ist, lassen sich OpenDrive-Fehler mit einer kurzen, wiederholbaren Korrektur beheben.

---

**Verwandte Anleitungen:**

- [OpenDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Gofile-Synchronisationsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [Hängende und blockierte Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
