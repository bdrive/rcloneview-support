---
slug: fix-onedrive-throttling-429-errors-rcloneview
title: "OneDrive-429-Drosselungsfehler beheben — Zuverlässige Synchronisation mit RcloneView"
authors:
  - steve
description: "Verhindern Sie, dass OneDrive-429-Drosselungsfehler (Too Many Requests) große Synchronisationen unterbrechen — konfigurieren Sie Wiederholungen und Übertragungslimits in RcloneView."
keywords:
  - OneDrive 429 error
  - OneDrive throttling fix
  - OneDrive too many requests
  - RcloneView OneDrive sync
  - fix OneDrive API rate limit
  - OneDrive sync failed retry
  - reduce OneDrive throttling
  - OneDrive large sync errors
  - Microsoft Graph API throttling
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive-429-Drosselungsfehler beheben — Zuverlässige Synchronisation mit RcloneView

> Wenn OneDrive mitten in der Synchronisation anfängt, 429 Too Many Requests zurückzugeben, liegt die Lösung nicht im blinden Wiederholen, sondern darin, wie stark Sie die Microsoft Graph API belasten, zu reduzieren.

OneDrive setzt Ratenbegrenzungen für die Microsoft Graph API durch, und ein Sync-Job, der Tausende kleiner Dateien verschiebt oder parallel zu mehreren anderen Jobs läuft, kann diese Grenzen schnell überschreiten, wodurch Übertragungen mittendrin stocken oder mit 429-Antworten fehlschlagen. Das unterscheidet sich von einem Kontingent- oder Speicherplatz-voll-Fehler — das Konto hat noch Platz, aber Microsoft lehnt Anfragen vorübergehend ab, weil sie zu schnell eintreffen. RcloneView gibt Ihnen direkte Kontrolle über die Übertragungsparallelität und das Wiederholungsverhalten, sodass Sie einen OneDrive-Job so abstimmen können, dass er unter dem Schwellenwert bleibt, statt die API zu bombardieren und zu scheitern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einen 429-Drosselungsfehler erkennen

Prüfen Sie den Log-Tab in der unteren Info View und suchen Sie während eines OneDrive-Jobs nach HTTP-429-Antworten oder Meldungen, die auf Ratenbegrenzung hinweisen — das unterscheidet sich von einem Authentifizierungsfehler oder einer „Kontingent überschritten"-Meldung, die auf abgelaufene Tokens bzw. ein volles Konto hindeuten. Drosselungsfehler treten tendenziell gehäuft mitten in großen Jobs auf, häufig wenn viele kleine Dateien gleichzeitig übertragen werden statt weniger großer. Wenn der Job nach mehreren Wiederholungen mit Pausen dazwischen schließlich abgeschlossen wird, ist das ein starkes Zeichen dafür, dass die eingebaute Wiederholungslogik sich bereits selbstständig von der Drosselung erholt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing a OneDrive sync job with retries" class="img-large img-center" />

## Parallelität reduzieren, um Drosselung zu verringern

Die direkteste Lösung besteht darin, zu reduzieren, wie viele Anfragen RcloneView gleichzeitig an OneDrive sendet. Verringern Sie im Advanced-Settings-Schritt des Sync-Jobs die Anzahl der Dateiübertragungen und der Equality-Checker — die Spezifikation empfiehlt für Backends, die aggressiv drosseln, 4 oder weniger Equality-Checker, und OneDrive gehört dazu. Auch Multi-Thread-Übertragungen lassen sich vom Standardwert 4 reduzieren oder durch Setzen auf 0 vollständig deaktivieren, was etwas rohen Durchsatz gegen einen Job eintauscht, der ohne Auslösen von Ratenlimits abgeschlossen wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring transfer settings for a OneDrive sync job" class="img-large img-center" />

## Wiederholungen ihre Arbeit machen lassen

RcloneViews Sync-Jobs enthalten eine Einstellung „Retry entire sync if fails", die standardmäßig auf 3 Versuche gesetzt ist, was oft ausreicht, um ein vorübergehendes Drosselungsfenster zu überstehen, da sich OneDrives Ratenlimits nach einer kurzen Abkühlphase zurücksetzen. Vermeiden Sie es, diesen Wert bei einem OneDrive-Job, der eine große Anzahl von Dateien verschiebt, auf 1 zu setzen (Wiederholung deaktivieren), da sonst schon eine einzige 429-Antwort den gesamten Job scheitern lässt, statt automatisch wiederholt zu werden. RcloneView mountet und synchronisiert 90+ Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux — wenn OneDrive also nur eines von mehreren Remotes in Ihrem Workflow ist, können Sie Jobs auf verschiedene Anbieter verteilen, um zu vermeiden, dass sich Anfragen auf das am stärksten drosselungsanfällige Backend konzentrieren.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a OneDrive sync job to run at off-peak times" class="img-large img-center" />

## Geplante Jobs zeitlich staffeln

Wenn Sie OneDrive-Sync-Jobs nach Zeitplan ausführen, vermeiden Sie es, mehrere OneDrive-Jobs zur exakt gleichen Zeit auszulösen — auch bei unterschiedlichen Ordnern teilen sie sich das Ratenlimit desselben Kontos. PLUS-Lizenznutzer können crontab-artige Zeitpläne um ein paar Minuten versetzen, damit sich Anfragen nicht stauen, und mit dem Zeitplan-Simulator kommende Ausführungszeiten vor dem Speichern vorschauen. Bei sehr großen einmaligen Übertragungen kann das Ausführen des Jobs außerhalb der Spitzenzeiten ebenfalls die Wahrscheinlichkeit verringern, mit anderem automatisiertem Traffic desselben Microsoft-Kontos zu kollidieren.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter, falls noch nicht geschehen.
2. Öffnen Sie den OneDrive-Job, der 429-Fehler wirft, und prüfen Sie dessen Log-Tab auf das Muster der Fehlschläge.
3. Reduzieren Sie Dateiübertragungen und Equality-Checker in den Advanced Settings und stellen Sie sicher, dass die Wiederholung auf mindestens 3 gesetzt ist.
4. Führen Sie den Job erneut aus und beobachten Sie den Transferring-Tab, um zu bestätigen, dass er ohne Stocken abgeschlossen wird.

Eine langsamere, gleichmäßigere Synchronisation, die zuverlässig abschließt, ist besser als eine schnelle, die auf halbem Weg scheitert und Sie im Unklaren lässt, was tatsächlich übertragen wurde.

---

**Verwandte Anleitungen:**

- [OneDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [OneDrive-Synchronisationsfehler beheben — So lösen Sie sie mit RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-rcloneview)
- [Cloud-API-Ratenbegrenzungsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
