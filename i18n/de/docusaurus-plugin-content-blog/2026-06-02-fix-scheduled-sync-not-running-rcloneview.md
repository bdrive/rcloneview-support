---
slug: fix-scheduled-sync-not-running-rcloneview
title: "Geplante Synchronisation läuft nicht — Automatisierte Cloud-Jobs in RcloneView beheben"
authors:
  - steve
description: "Diagnostizieren und beheben Sie RcloneView-Jobs für geplante Synchronisation, die nicht starten oder zur falschen Zeit laufen. Behandelt Lizenzprüfungen, Cron-Syntax, Starteinstellungen und Log-Analyse."
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - RcloneView
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Geplante Synchronisation läuft nicht — Automatisierte Cloud-Jobs in RcloneView beheben

> Wenn Ihr automatisiertes RcloneView-Backup nicht mehr planmäßig ausgeführt wird — oder nie startet — führt Sie dieser Leitfaden systematisch durch alle wahrscheinlichen Ursachen, von der Lizenzprüfung über die Cron-Syntax bis zur Startkonfiguration.

Zeitgesteuerte Synchronisation ist eine der praktischsten PLUS-Funktionen von RcloneView: Ein Job wird einmal konfiguriert und läuft dann nach einem Crontab-Zeitplan ohne manuelles Eingreifen. Wenn es nicht mehr funktioniert, liegt die Ursache fast immer bei einem von vier Dingen — einem Lizenzproblem, einem falsch konfigurierten Zeitplan, der App, die zum fälligen Zeitpunkt nicht läuft, oder einem stillen Fehler im Job selbst. Wenn Sie jede Ebene systematisch durchgehen, ist das Problem in wenigen Minuten gelöst.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Prüfung 1: Bestätigen Sie, dass Ihre PLUS-Lizenz aktiv ist

Zeitgesteuerte Synchronisation ist ausschließlich eine Funktion der PLUS- oder Lifetime-Lizenz. Die FREE-Lizenz aktiviert keine Crontab-Planung, und ein unter einer FREE-Lizenz gespeicherter Job hat seinen Zeitplan stillschweigend deaktiviert. Prüfen Sie die Fußzeile am unteren Rand des RcloneView-Fensters — sie zeigt entweder „FREE License" oder „PLUS License" zusammen mit der rclone-Version und den Verbindungsinformationen an.

Wenn die Lizenz als FREE oder abgelaufen angezeigt wird, gehen Sie zu **Help → Activate License** und geben Sie Ihre E-Mail-Adresse und Ihren Lizenzschlüssel erneut ein. Rabattcoupons können pro E-Mail-Adresse nur einmal verwendet werden, sodass ein wiederholter Aktivierungsversuch mit demselben Coupon das Abonnement nicht verlängert — wenden Sie sich an den Support, wenn der Schlüssel nach einer kürzlichen Verlängerung ungültig erscheint.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

Nachdem Sie bestätigt haben, dass PLUS aktiv ist, öffnen Sie den betroffenen Job im Job Manager erneut und prüfen Sie, ob Schritt 4 (Zeitplanung) mit tatsächlichen Werten statt leeren Feldern ausgefüllt ist. Ein zuvor gespeicherter Job muss möglicherweise bearbeitet und mit aktivem PLUS erneut gespeichert werden, damit der Zeitplan wirksam wird.

## Prüfung 2: Crontab-Syntax in Job-Schritt 4 überprüfen

Der Scheduler von RcloneView verwendet fünf Crontab-artige Felder: **Minute** (0–59), **Stunde** (0–23), **Wochentag** (0–6, Sonntag=0), **Tag des Monats** (1–31) und **Monat** (1–12). Ein leeres Feld bedeutet „jeder/jede" — ein eingetragener Wert bedeutet „nur dieser". Die häufigste Fehlkonfiguration ist die Eingabe von `0` im falschen Feld oder eine unpassende Kombination, etwa wenn sowohl Wochentag als auch Tag des Monats so angegeben werden, dass sie nie zusammentreffen.

RcloneView enthält direkt in Schritt 4 eine Schaltfläche **Simulate Schedule**. Klicken Sie darauf, um vor dem Speichern die nächsten Ausführungszeitpunkte in der Vorschau zu sehen. Wenn die Vorschau unerwartete Ergebnisse zeigt — jede Minute läuft, erwartete Tage werden übersprungen oder es werden gar keine kommenden Ausführungen angezeigt — passen Sie die Felder an und simulieren Sie erneut.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

Listensyntax (`1,3,5`), Bereichssyntax (`1-5` für Wochentage) und Schrittsyntax (`0-23/4` für alle 4 Stunden) werden alle unterstützt. Ein täglicher Mitternachtsjob verwendet beispielsweise Minute=`0`, Stunde=`0`, wobei die übrigen Felder leer bleiben.

## Prüfung 3: RcloneView zum geplanten Zeitpunkt laufen lassen

RcloneView muss **geöffnet und aktiv** sein, damit geplante Jobs ausgeführt werden — es läuft nicht als Hintergrunddienst oder Daemon des Systems. Wenn der Computer im Ruhezustand ist, der Benutzer abgemeldet ist oder die App geschlossen wurde, wird jeder Zeitplan, der in diesem Zeitraum fällig wird, stillschweigend übersprungen.

Die Lösung ist einfach: Aktivieren Sie **Launch at login** unter **Settings → General**, damit die App beim Systemstart automatisch startet. Kombinieren Sie dies mit **Start minimized**, damit RcloneView im System-Tray startet, ohne Ihren Desktop zu stören, während alle geplanten Jobs weiterhin im Hintergrund ausgeführt werden.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

Wenn der Zielrechner regelmäßig über Nacht heruntergefahren wird, sollten Sie entweder den Zeitplan an die Geschäftszeiten anpassen oder das Betriebssystem so konfigurieren, dass es vor dem fälligen Zeitpunkt des Jobs aus dem Ruhezustand aufwacht.

## Prüfung 4: Job-Verlauf und Übertragungsprotokolle prüfen

Wenn ein Job scheinbar gelaufen ist, aber keine Ausgabe erzeugt hat, ist der Tab **Job History** in der unteren Info View die erste Anlaufstelle. Er verzeichnet jede Ausführung mit Status (Completed / Errored / Canceled), benötigter Zeit, Übertragungsgeschwindigkeit und Dateianzahl. Filtern Sie den Verlauf nach „Errored"-Einträgen, um fehlgeschlagene Läufe sichtbar zu machen. Jeder Eintrag verlinkt zur zugehörigen Log-Ausgabe, die den konkreten Fehler identifiziert — Netzwerk-Timeout, Authentifizierungsfehler, nicht gefundener Pfad oder ein Berechtigungsproblem am Ziel.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

Für tiefere Diagnosen aktivieren Sie **Enable rclone Logging** unter **Settings → Embedded Rclone** und stellen Sie die Log-Stufe auf **INFO** oder **DEBUG**. Wenn der Job das nächste Mal läuft (oder manuell ausgelöst wird), erfasst die Log-Datei die vollständige rclone-Ausgabe — einschließlich des genauen Fehlercodes und der Datei, die den Fehler verursacht hat — was die Ursachenanalyse auch bei sporadischen Problemen einfach macht.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie die Fußzeile — für die Crontab-Planung ist eine PLUS-Lizenz erforderlich.
3. Öffnen Sie den betroffenen Job → Edit → Schritt 4 und verwenden Sie Simulate Schedule, um die Cron-Syntax zu überprüfen.
4. Aktivieren Sie **Launch at login** und **Start minimized** unter Settings → General.
5. Prüfen Sie die Job History auf fehlgeschlagene Läufe und aktivieren Sie das rclone-Logging für detaillierte Diagnosen.

Die systematische Diagnose dieser vier Ebenen löst fast alle Fehler bei der geplanten Synchronisation schnell — ohne Ratespiel.

---

**Weiterführende Anleitungen:**

- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Best Practices für Zeitpläne — Cron, Wiederholung und Überwachung in RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Job-Verlauf und Übertragungsprotokolle — Überwachung in RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
