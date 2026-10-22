---
slug: fix-cloudinary-sync-errors-rcloneview
title: "Cloudinary-Synchronisationsfehler beheben — Verbindungs-, Übertragungs- und Fehldateiprobleme mit RcloneView lösen"
authors:
  - jay
description: "Cloudinary-Synchronisationsfehler mit RcloneView beheben: Remote erneut prüfen, Jobverlauf und DEBUG-Logs lesen, Parallelität senken und Ergebnisse mit Folder Compare verifizieren."
keywords:
  - Cloudinary-Synchronisationsfehler beheben
  - Cloudinary-Synchronisation fehlgeschlagen
  - Cloudinary rclone-Fehler
  - RcloneView Fehlerbehebung
  - Cloudinary fehlende Dateien
  - rclone DEBUG-Log
  - Ordnervergleich
  - Cloud-Synchronisation Fehlerbehebung
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudinary-Synchronisationsfehler beheben — Verbindungs-, Übertragungs- und Fehldateiprobleme mit RcloneView lösen

> Wenn ein Cloudinary-Job fehlschlägt, zeigen Jobverlauf, DEBUG-Logs und Folder Compare in RcloneView, ob die Ursache beim Remote, bei der Übertragungslast oder bei nie angekommenen Dateien liegt.

Eine Cloudinary-Synchronisation, die mit einer vagen Fehlermeldung abbricht oder mit scheinbar unvollständigen Ordnern endet, lässt sich allein über die Kommandozeile schwer diagnostizieren. RcloneView vereint Remote-Prüfung, Jobprotokoll, Log und einen direkten Vergleich in einem Fenster, sodass Sie anhand von Belegen arbeiten können, statt blind erneut zu starten. RcloneView bindet über 90 Anbieter in einem Fenster ein und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Prüfen, ob das Remote noch verbunden ist

Wenn ein Job innerhalb von Sekunden fehlschlägt, verdächtigen Sie zuerst das Remote und nicht die Daten. Öffnen Sie den Remote Manager über den Tab Remote, bearbeiten Sie das Cloudinary-Remote und geben Sie die Zugangsdaten erneut ein, falls sie sich geändert haben oder abgelaufen sind. Öffnen Sie dann das Remote in einem Explorer-Panel und durchsuchen Sie den Stammordner. Wird er normal aufgelistet, ist die Verbindung in Ordnung und das Problem liegt woanders.

Im integrierten Terminal-Tab können Sie außerdem `rclone about "remote:"` ausführen und `remote` durch den Namen Ihres Remotes ersetzen, um schnell zu prüfen, ob das Konto antwortet.

<img src="/support/images/en/blog/new-remote.png" alt="Bearbeiten eines Cloudinary-Remotes im RcloneView Remote Manager" class="img-large img-center" />

## Jobverlauf lesen und DEBUG-Logging aktivieren

Öffnen Sie Job History und prüfen Sie Status, Dauer und Dateianzahl des fehlgeschlagenen Laufs. Ein Job, der mittendrin abbricht, deutet meist auf bestimmte Dateien oder die Übertragungslast hin, nicht auf die Zugangsdaten.

Für die genaue Meldung pro Datei gehen Sie zu Settings > Embedded Rclone, aktivieren das rclone-Logging, stellen die Stufe auf DEBUG und klicken auf Restart Embedded Rclone. Reproduzieren Sie den Fehler und lesen Sie das Log im Tab Log oder in Ihrem konfigurierten Log-Ordner.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView-Jobverlauf mit einem fehlerhaften Cloudinary-Job" class="img-large img-center" />

## Parallelität senken und den erneuten Lauf in der Vorschau prüfen

Sporadische Fehler lassen oft nach, wenn weniger Dateien gleichzeitig übertragen werden. Verringern Sie in Schritt 2 des Sync-Assistenten die Anzahl der Dateiübertragungen und setzen Sie die Equality Checkers auf 4 oder weniger, was die Empfehlung für langsame Backends ist. Belassen Sie „Retry entire sync if fails“ auf 3, damit vorübergehende Fehler bis zu dreimal wiederholt werden.

Prüfen Sie vor dem erneuten Lauf mit Dry Run, welche Dateien kopiert oder gelöscht werden, damit die Wiederholung Sie nicht überrascht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Erneutes Ausführen eines Cloudinary-Jobs mit reduzierter Parallelität in RcloneView" class="img-large img-center" />

## Mit Folder Compare verifizieren

Öffnen Sie nach dem erneuten Lauf Compare mit Ihrem lokalen Ordner auf der einen und Cloudinary auf der anderen Seite. Filtern Sie nach left-only-, right-only- und different-Dateien, um zu sehen, was noch fehlt oder abweicht, und kopieren Sie dann nur diese Elemente, statt den gesamten Job zu wiederholen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mit auf Cloudinary fehlenden Dateien" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie das Cloudinary-Remote im Remote Manager erneut und vergewissern Sie sich, dass der Stammordner aufgelistet wird.
3. Prüfen Sie Job History und aktivieren Sie DEBUG-Logging für den fehlgeschlagenen Job.
4. Senken Sie die Parallelität, führen Sie einen Dry Run aus, starten Sie erneut und bestätigen Sie das Ergebnis mit Folder Compare.

Sobald die Ursache in Logs und Vergleich sichtbar ist, wird ein Cloudinary-Fehler zu einer kurzen, wiederholbaren Korrektur.

---

**Weiterführende Anleitungen:**

- [Cloudinary-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [SugarSync-Synchronisationsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [Cloud-Übertragungen protokollieren und debuggen — Probleme in RcloneView beheben](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
