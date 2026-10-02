---
slug: fix-gofile-sync-errors-rcloneview
title: "Gofile-Synchronisationsfehler beheben — Token-, Upload- und Listenprobleme mit RcloneView lösen"
authors:
  - jay
description: "Beheben Sie Gofile-Synchronisationsfehler wie ungültige Tokens, fehlgeschlagene Uploads und leere Listen mit dem Jobverlauf, den Protokollen und dem integrierten Terminal von RcloneView."
keywords:
  - Gofile Synchronisationsfehler beheben
  - Gofile rclone Fehler
  - Gofile ungültiges Token
  - Gofile Upload fehlgeschlagen
  - Gofile Fehlerbehebung
  - RcloneView Gofile
  - Gofile Konto-API-Token
  - rclone Gofile Remote
  - Cloud-Synchronisation Fehlerbehebung
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile-Synchronisationsfehler beheben — Token-, Upload- und Listenprobleme mit RcloneView lösen

> Die meisten Gofile-Synchronisationsfehler lassen sich auf wenige Ursachen zurückführen: ein veraltetes Token, ein falscher Stammordner oder eine Übertragung, die wiederholt werden muss — und RcloneView zeigt Ihnen jede davon im Jobverlauf und in den Protokollen.

Gofile authentifiziert sich über ein Konto-API-Token statt über eine Browser-Anmeldung, daher zeigen sich Fehler meist als „unauthorized“-Meldungen oder als scheinbar leere Ordner. Statt auf der Kommandozeile zu raten, können Sie mit dem Jobverlauf, den Protokollen und dem Terminal von RcloneView genau sehen, welcher Schritt fehlgeschlagen ist. RcloneView bindet über 90 Anbieter in einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beginnen Sie mit dem Konto-API-Token

Die häufigste Fehlerursache ist ein ungültiges oder veraltetes Token. Gofile-Tokens finden Sie im Feld Account API Token auf Ihrer Gofile-Profilseite. Wenn Sie das Token neu erzeugt oder mit einem Leerzeichen am Ende eingefügt haben, wird jede Anfrage abgelehnt.

Öffnen Sie den Remote Manager über den Tab Remote, bearbeiten Sie das Gofile-Remote und fügen Sie das Token erneut ein. Durchsuchen Sie anschließend das Stammverzeichnis des Remotes in einem Explorer-Bereich. Wird die Liste geladen, ist die Authentifizierung in Ordnung und das Problem liegt woanders.

<img src="/support/images/en/blog/new-remote.png" alt="Bearbeiten eines Gofile-Remotes und erneutes Eingeben des Konto-API-Tokens in RcloneView" class="img-large img-center" />

## Jobverlauf und Protokolle lesen

Wenn ein geplanter oder manueller Job mit Errored endet, öffnen Sie Job History. Jeder Eintrag enthält Ausführungstyp, Dauer, Status, Größe und Dateianzahl, sodass Sie erkennen können, ob ein Job sofort fehlgeschlagen ist (meist Authentifizierung) oder mittendrin (meist ein Netzwerk- oder Dateiproblem).

Für mehr Details aktivieren Sie die rclone-Protokollierung unter Settings > Embedded Rclone, setzen die Stufe auf DEBUG, starten das eingebettete rclone neu und reproduzieren den Fehler. Das Protokoll zeigt den genauen Fehler für jede Datei.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView-Jobverlauf mit einem fehlerhaften Gofile-Synchronisationsjob" class="img-large img-center" />

## Upload-Fehler mit einem Dry Run eingrenzen

Wenn nur einige Dateien fehlschlagen, führen Sie zuerst einen Dry Run aus. Er listet auf, was kopiert oder gelöscht würde, ohne etwas zu ändern, sodass Sie prüfen können, ob Quelle und Ziel Ihren Erwartungen entsprechen. Verringern Sie dann in Schritt 2 des Synchronisationsassistenten die Anzahl der Dateiübertragungen und belassen Sie „Retry entire sync if fails“ beim Standardwert 3. Weniger parallele Übertragungen beheben sporadische Upload-Fehler häufig.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines Gofile-Synchronisationsjobs nach dem Anpassen der Übertragungseinstellungen in RcloneView" class="img-large img-center" />

## Mit Folder Compare überprüfen

Nach einem erneuten Durchlauf vergleichen Sie mit Compare den lokalen Ordner und den Gofile-Ordner nebeneinander. Die Filter für nur links, nur rechts und unterschiedliche Dateien zeigen genau, was noch fehlt, sodass Sie nicht alles erneut hochladen müssen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder-Compare-Ansicht mit auf Gofile fehlenden Dateien" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Geben Sie Ihr Gofile Account API Token im Remote Manager erneut ein und prüfen Sie, ob der Stammordner aufgelistet wird.
3. Prüfen Sie Job History und aktivieren Sie DEBUG-Protokollierung, wenn ein Job Errored ist.
4. Führen Sie einen Dry Run aus, reduzieren Sie die gleichzeitigen Übertragungen und überprüfen Sie dann mit Folder Compare.

Ein klarer Überblick über Tokens, Protokolle und Unterschiede macht aus einem unklaren Gofile-Fehler eine schnelle Lösung.

---

**Verwandte Anleitungen:**

- [Gofile-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Put.io-Synchronisationsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [Hängende Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
