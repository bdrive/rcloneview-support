---
sidebar_position: 2
description: "Erfahren Sie, wie Sie Sync-Jobs in RcloneView mit flexiblen Zeitplanungsoptionen automatisch ausführen. Erfordert eine Plus-Lizenz."
keywords:
  - rcloneview
  - job scheduling
  - sync automation
  - scheduled sync
  - rclone
  - job manager
  - cloud sync
  - job scheduler
  - rclone automation
  - crontab
  - plus license
  - recurring sync
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# Job-Zeitplanung und automatisierte Ausführung

Mit der Job-Zeitplanung können Sie Sync-Jobs automatisch zu bestimmten Zeiten und in bestimmten Intervallen ausführen.


:::important SIE BENÖTIGEN EINE PLUS-LIZENZ, UM JOBS ZU PLANEN
Sie müssen eine [**PLUS-Lizenz**](https://rcloneview.com/src/pricing.html) erwerben, um diese Funktion zu aktivieren.
:::


## Job-Zeitplanung einrichten

Sie können die Zeitplanung konfigurieren, wenn Sie:

- einen neuen Job erstellen ([Schritt 4: Zeitplanung](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license))
- einen bestehenden Job bearbeiten, um einen Zeitplan hinzuzufügen

## Job hinzufügen oder bearbeiten, um die Zeitplanung zu konfigurieren


Um den **`Job-Manager`** zu öffnen, klicken Sie auf das Symbol in der Symbolleiste des Home-Menüs.  
Klicken Sie dann entweder auf **`Job hinzufügen`** oder **`Job bearbeiten`** und gehen Sie zu **Schritt 4: Zeitplanung**.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **So planen Sie einen Job**

1. Aktivieren Sie das Kontrollkästchen **`Run whenever time units ~`**, um die Zeitplanung zu aktivieren.
2. Legen Sie den gewünschten Wiederholungsplan über die Zeit- und Datumsfelder fest.
3. Klicken Sie auf **`Simulate`**, um eine Vorschau anzuzeigen, wann der Job ausgeführt wird.
4. Nachdem Sie bestätigt haben, dass der Zeitplan korrekt ist, klicken Sie auf **`Save`**.

  Klicken Sie nach dem Speichern auf das Kalendersymbol <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> oder auf das **geplante Datum** unter **`Upcoming Schedule`**, um die konfigurierten Ausführungszeiten visuell zu überprüfen.

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>Zeit- und Datumsfelder verstehen</summary>

Zeit- und Datumsfelder verstehen

**Die Zeitplankonfiguration unterstützt Werte im Crontab-Stil**, was eine präzise und flexible Zeitplanung für eine Vielzahl von Anwendungsfällen ermöglicht.

| Feldname       | Zulässige Werte | Beschreibung                             |
| -------------- | ---------------- | --------------------------------------- |
| Minute         | 0-59             | Minute der Stunde                       |
| Stunde         | 0-23             | Stunde des Tages                        |
| Wochentag      | 0-6              | 0 = Sonntag, 1 = Montag, …, 6 = Samstag |
| Tag des Monats | 1-31             | Tag des Monats                                        |
| Monat          | 1-12             | 1 ist Januar, 2 ist Februar usw. |

**Akzeptierte Formate:**

- **Leerer Wert**: Trifft auf jede Einheit zu (z. B. jede Minute, wenn das Feld Minute leer ist).
- **n1, n2, ...**: Liste von Werten (z. B. 1,3,5 für Montag, Mittwoch, Freitag).
- **n1-n2**: Wertebereich (z. B. bedeutet 0-2: 0, 1, 2).
- **n1-n2/n3**: Bereich mit Schrittweite (z. B. bedeutet 6-12/3: 6, 9, 12).

Die Felder — **Minute**, **Stunde**, **Wochentag**, **Tag des Monats** und **Monat** — arbeiten über eine logische **UND**-Verknüpfung zusammen. Das bedeutet, dass der Job nur ausgeführt wird, wenn **alle** Bedingungen erfüllt sind.

📌 Beispiel: **Ausführung eines Sync-Jobs um 1:30 Uhr am ersten Sonntag jedes Monats**. 
Um diesen Zeitplan zu erreichen, konfigurieren Sie die folgenden Felder:

- **Zeit (1:30 Uhr):**
    - **Minute:** 30
    - **Stunde:** 1
    
- **Datum (erster Sonntag jedes Monats):**
    - **Tag des Monats:** 1-7 — entspricht den ersten sieben Tagen des Monats
    - **Wochentag:** 0 — wobei 0 für Sonntag steht
    - **Monat:** _Leer lassen_ — gilt für alle Monate

✅ Diese Kombination stellt sicher, dass der Job **nur ausgeführt wird, wenn das Datum innerhalb der ersten Woche liegt** und **auf einen Sonntag fällt**, wodurch er effektiv auf den ersten Sonntag jedes Monats um 1:30 Uhr geplant wird.

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution RcloneView muss für geplante Jobs ausgeführt werden
Damit geplante Jobs ordnungsgemäß ausgeführt werden, **muss RcloneView im Hintergrund ausgeführt werden**.  
Wenn Ihr Job für die Verwendung einer externen `rclone`-Engine konfiguriert ist, stellen Sie sicher, dass die externe `rclone`-Instanz zum geplanten Zeitpunkt ebenfalls aktiv und ausgeführt wird.  
:::

## Ergebnisse der Job-Zeitplanung überprüfen


### **Ausführungsverlauf im Job-Manager anzeigen**

  
Sie können sowohl die letzte Ausführungszeit (`Last execution`) als auch den nächsten geplanten Lauf (`Upcoming Schedule`) im Fenster des **Job-Managers** überprüfen.

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
So zeigen Sie Details zum Ausführungsverlauf des Jobs an:

- Öffnen Sie den **Job-Manager**.
- Klicken Sie auf das **Verlaufssymbol** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" />, um den Job-Ausführungsverlauf für den ausgewählten Job zu öffnen.
  

In der Spalte **`Execution Type`** zeigen Einträge, die als `Scheduled` markiert sind, an, dass der Job automatisch vom Scheduler ausgelöst wurde.

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info Protokolle für mehrere Ziele überprüfen  
Wenn Ihr Job mehrere Ziel-Remotes enthält, klicken Sie in der Verlaufsansicht einzeln auf jede Ziel-Registerkarte, um die Protokolldetails für jedes Ziel zu überprüfen.
:::


### Benachrichtigungsalarm bei Abschluss (Windows)

Nach Abschluss des Jobs erscheint ein **Benachrichtigungs-Popup** im Windows-Infobereich, das eine Zusammenfassung des Sync-Vorgangs anzeigt.

  - Sie können auf **`See details`** klicken, um eine vollständige Aufschlüsselung der Ergebnisse anzuzeigen.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Alarmmeldungen in der Windows-Benachrichtigung anzeigen
Wenn Sie das Popup verpasst haben, können Sie den Sync-Alarm weiterhin überprüfen, indem Sie auf das **Benachrichtigungssymbol** im **Windows-Infobereich** klicken.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::
