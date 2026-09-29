---
slug: fix-put-io-sync-errors-rcloneview
title: "Put.io-Synchronisationsfehler beheben — mit RcloneView diagnostizieren und lösen"
authors:
  - kai
description: "Put.io-Synchronisationsfehler mit RcloneView beheben: OAuth neu autorisieren, Übertragungen abstimmen, Job-Verlauf und Logs lesen und Ergebnisse mit Folder Compare prüfen."
keywords:
  - put.io Synchronisationsfehler beheben
  - put.io Authentifizierungsfehler
  - put.io Übertragung fehlgeschlagen
  - putio rclone Fehler
  - RcloneView put.io
  - put.io oauth neu autorisieren
  - Cloud-Synchronisation Fehlerbehebung
  - put.io Download schlägt fehl
  - rclone Log Debug
  - put.io Synchronisation GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io-Synchronisationsfehler beheben — mit RcloneView diagnostizieren und lösen

> Gehen Sie die üblichen Ursachen fehlgeschlagener Put.io-Übertragungen durch, von abgelaufener Autorisierung bis zu zu vielen parallelen Übertragungen, mit den in RcloneView integrierten Werkzeugen.

Bricht eine Put.io-Synchronisation auf halbem Weg ab, rätselt man oft: Lag es am Login, am Netzwerk oder an den Job-Einstellungen? RcloneView bündelt die Hinweise an einer Stelle. Der Tab Transferring, Job History und die Log-Ansicht zeigen jeweils einen anderen Ausschnitt des Geschehens, und Folder Compare zeigt Ihnen anschließend, was noch fehlt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mit der Autorisierung beginnen

Put.io verbindet sich über browserbasiertes OAuth. Schlägt ein Job sofort mit einer Authentifizierungs- oder Berechtigungsmeldung fehl, ist die gespeicherte Autorisierung der erste Verdächtige. Öffnen Sie den **Remote Manager** im Tab Remote, bearbeiten Sie das Put.io-Remote und durchlaufen Sie die Anmeldung im Browser erneut. Melden Sie sich unbedingt mit demselben Put.io-Konto an, das Ihre Dateien enthält, denn ein zweites Konto im selben Browser ist eine häufige Ursache für leere Listen.

<img src="/support/images/en/blog/new-remote.png" alt="Erneute Autorisierung eines Put.io-Remotes in RcloneView" class="img-large img-center" />

Aktualisieren Sie nach der erneuten Autorisierung das Put.io-Panel mit F5 (Cmd+R unter macOS) und prüfen Sie, dass Ihre Ordner korrekt aufgelistet werden, bevor Sie einen Job erneut ausführen.

## Job-Verlauf und Logs lesen

Wenn ein Job zwischendurch fehlschlägt, öffnen Sie **Job History**. Jeder Lauf protokolliert Ausführungsart, Startzeit, benötigte Zeit, Status (Completed, Errored oder Canceled), Gesamtgröße, Geschwindigkeit und Dateianzahl. Der Vergleich eines fehlgeschlagenen Laufs mit einem früheren erfolgreichen zeigt, ob er früh scheiterte, was auf Zugangsdaten hindeutet, oder spät, was auf Netzwerk- oder Mengenprobleme hindeutet.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mit fehlerhaften und abgeschlossenen Put.io-Läufen" class="img-large img-center" />

Für Details aktivieren Sie unter **Settings > Embedded Rclone** die Dateiprotokollierung, setzen die Log-Stufe auf DEBUG und klicken auf Restart Embedded Rclone. Reproduzieren Sie den Fehler und lesen Sie im Log-Tab die betroffene Datei und den Fehlertext. Im Tab Terminal können Sie außerdem `rclone about "putio:"` (mit Ihrem eigenen Remote-Namen) ausführen, um zu prüfen, ob das Remote antwortet.

## Job-Einstellungen anpassen

Fehlgeschlagene Übertragungen zu entfernten Diensten sind oft hausgemacht. Verringern Sie in den Advanced Settings des Sync-Assistenten **Number of file transfers** und **Number of equality checkers**; für langsame Backends wird empfohlen, die Checkers bei 4 oder weniger zu halten. Belassen Sie **Retry entire sync if fails** beim Standardwert 3, damit sich kurze Unterbrechungen von selbst beheben. Liegt das Problem bei sehr großen Dateien, nutzen Sie den Filter für die maximale Dateigröße, um die Arbeit in einen ersten Durchgang mit kleineren Dateien und einen separaten Durchgang für den Rest aufzuteilen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführung eines Put.io-Sync-Jobs nach angepassten Einstellungen" class="img-large img-center" />

## Fehlendes bestätigen

Öffnen Sie nach einem erneuten Lauf **Compare** mit Put.io auf der einen und Ihrem Ziel auf der anderen Seite. Left-only-Dateien sind diejenigen, die nie angekommen sind, und **Copy right** sendet nur diese. RcloneView bietet dies wie Mount und Sync mit der FREE-Lizenz an, sodass Sie die Wiederherstellung ohne Upgrade abschließen können.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mit Dateien, die im Ziel noch fehlen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisieren Sie das Put.io-Remote im Remote Manager neu und aktualisieren Sie die Liste.
3. Prüfen Sie Job History und aktivieren Sie DEBUG-Logging, wenn die Ursache nicht offensichtlich ist.
4. Verringern Sie die Parallelität, führen Sie den Job erneut aus und kopieren Sie mit Compare alles Übrige.

Wer zuerst die Belege liest, macht aus einem vagen Fehler eine konkrete, behebbare Einstellung.

---

**Verwandte Anleitungen:**

- [Put.io-Speicher verwalten](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Put.io zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [Fehler durch abgelaufene OAuth-Token bei der Cloud-Synchronisation beheben](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
