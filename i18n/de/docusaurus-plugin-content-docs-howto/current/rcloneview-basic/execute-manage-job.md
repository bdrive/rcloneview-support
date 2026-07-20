---
sidebar_position: 7
description: "Erfahren Sie, wie Sie Synchronisationsjobs mit dem RcloneView Job Manager ausführen, überwachen und verwalten – einschließlich Dry Run, Job-Verlauf und Benachrichtigungen."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# Job ausführen und verwalten


Klicken Sie in der Symbolleiste des Hauptmenüs auf `Job Manager`, um den Job Manager zu öffnen.  

Wählen Sie den Job aus, den Sie ausführen möchten, und klicken Sie dann auf die Schaltfläche **`Run`**, um ihn auszuführen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>Feldbeschreibungen </summary>

- `Job Name` : Name des Jobs. - > Das Symbol zeigt visuell die Synchronisationsrichtung von der Quelle zum Ziel an. Wenn der Job mehrere Ziele umfasst, werden für jedes Ziel-Remote separate Symbole angezeigt.  
- `Source` : Der Ordner im Cloud-Speicher, der als Quelle dient.  
- `Destination` : Der Ordner im Cloud-Speicher, der als Ziel dient.   
- `Upcoming Schedule` : Zeigt den nächsten geplanten Ausführungszeitpunkt dieses Jobs an. Wenn kein Zeitplan festgelegt ist, wird **Unscheduled** angezeigt.    
  ⚠️ _Diese Funktion ist nur mit einer PLUS-Lizenz verfügbar._ Siehe: [Wie man Job Scheduling konfiguriert](/howto/rcloneview-advanced/job-scheduling-and-execution). 
- `Last execution` : Der letzte Zeitpunkt, zu dem dieser Job automatisch über den Zeitplan ausgeführt wurde.   
- `Created At` : Datum und Uhrzeit der Erstellung des Jobs.  
- `History` : Öffnet den Ausführungsverlauf für diesen Job. Ein Klick öffnet das vollständige Verlaufsfenster.  

</details>

<details>
<summary>Symbolleisten zur Verwaltung von Jobs</summary>

Symbolleisten zur Verwaltung von Jobs

Nachdem Sie einen Job ausgewählt haben, können Sie ihn mit den folgenden Symbolleisten-Optionen verwalten:

- **`Add Job`** : Erstellt und fügt einen neuen Job hinzu. [Siehe: Wie man einen Job erstellt](/howto/rcloneview-basic/create-sync-jobs)  
- **`Edit Job`** : Bearbeitet den ausgewählten Job.
- **`Duplicate`** : Erstellt eine Kopie des ausgewählten Jobs. 
  Der duplizierte Job wird automatisch mit einem Suffix wie (1), (2), …, (n) benannt.
  Anschließend können Sie mit Edit Job schnell einen neuen Job basierend auf dem Original anpassen.  
- **`Delete`** : Löscht den ausgewählten Job.

</details>


:::tip 💡 Jobs exportieren und importieren
Klicken Sie oben rechts im **Job Manager** auf das **Einstellungssymbol** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" />, um Ihre aktuellen Jobs zu exportieren oder zuvor gespeicherte Jobs zu importieren. Jobs werden in einer Datei mit dem Namen `rclone_jobs_~.json` exportiert und gespeichert.    

:::
### Simulation: Dry Run ausführen (optional)

Sie können einen **Dry Run** ausführen, um die Synchronisationsoperation zu simulieren, ohne tatsächliche Änderungen vorzunehmen.

Klicken Sie auf die Schaltfläche **`Dry run`**, um die Synchronisation ohne Änderungen zu simulieren.

- Diese Vorschau zeigt, welche Dateien in das **Destination** kopiert und welche gelöscht werden.
- Klicken Sie auf **`See details`**, um eine vollständige Liste der Operationen anzuzeigen, die im Ziel stattfinden würden (z. B. Kopieren, Erstellen, Löschen).
- Bei Jobs mit mehreren Zielen werden die Ergebnisse nach Ziel gruppiert, mit separaten **`See details`**-Optionen für jedes Ziel.

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## Job-Ausführungsergebnisse überwachen

Sie können den Fortschritt und die Ergebnisse von Synchronisationsvorgängen in Echtzeit überprüfen.

### Übertragungsstatus (in Bearbeitung)

- Öffnen Sie während der Synchronisation den Tab **`Transfer`**, um den Echtzeit-Fortschritt jeder Datei anzuzeigen.
- Klicken Sie auf das **+**-Symbol, um einzelne Dateiübertragungen zu erweitern und zu überwachen.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Abgeschlossene Jobs (nach Jobausführung)

- Sobald die Synchronisation abgeschlossen ist, öffnen Sie den Tab **`Completed`**, um die Ergebnisse anzuzeigen.
- Klicken Sie auf das **+**-Symbol, um Details auf Dateiebene für jeden abgeschlossenen Job anzuzeigen.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Synchronisierte Remotes schnell öffnen
Im Tab **`Completed`** können Sie per Doppelklick auf einen abgeschlossenen Job sowohl den Quell- als auch den Zielordner im Explorer-Bereich öffnen.  
So lassen sich die synchronisierten Ordner sofort einfach überprüfen.
:::

### Benachrichtigung bei Abschluss (Windows)

Nach Abschluss der Synchronisation erscheint im Windows-Systemtray eine Benachrichtigung mit einer Zusammenfassung des Synchronisationsvorgangs.

  - Sie können auf **`See details`** klicken, um eine vollständige Aufschlüsselung der Ergebnisse anzuzeigen.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Alarmmeldungen in der Windows-Benachrichtigung anzeigen
Wenn Sie das Popup verpassen, können Sie die Synchronisationsbenachrichtigung weiterhin überprüfen, indem Sie auf das **Benachrichtigungssymbol** im **Windows-Systemtray** klicken.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## Job-Verlauf anzeigen


Klicken Sie im **`Job Manage`r** neben einem Job auf das Symbol **`History`** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" />, um dessen Ausführungsprotokoll anzuzeigen.

Wenn ein Job mit mehreren Zielen ausgeführt wurde, wird jedes Ziel als separater Tab im Verlauf angezeigt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>Feldbeschreibungen</summary>

Feldbeschreibungen


- `Execution Type` : 
	- Manual : Manuell vom Benutzer ausgeführt
	- Scheduled : Automatisch von RcloneView ausgeführt
- `Start Time` : Startzeitpunkt des Jobs   
- `Time Spent` : Gesamtdauer der Synchronisation  
- `Status` : Ergebnis der Job-Ausführung  
	- Completed : Erfolgreich   
	- Errored : Fehlgeschlagen, mit verfügbaren Fehlermeldungen. 
- `Total Size` : Gesamtgröße der übertragenen Daten
- `Speed` : Durchschnittliche Übertragungsgeschwindigkeit. 
- `Files` : Anzahl der übertragenen Dateien. 
- `Job Type` : Derzeit Sync, zukünftige Updates könnten Copy, Purge oder Batch-Jobs umfassen   
- `Delete` : Entfernt den ausgewählten Verlaufseintrag. 

</details>


<details>
<summary>Symbolleisten zum Filtern und Löschen des Verlaufs</summary>

Symbolleisten zum Filtern und Löschen des Verlaufs

Wenn sich eine große Anzahl von Verlaufseinträgen ansammelt, können Sie diese mithilfe der Symbolleisten-Optionen filtern oder löschen.

- `From ~ To` : Wählen Sie über den Kalender einen benutzerdefinierten Datumsbereich, um den Verlauf innerhalb dieses Zeitraums anzuzeigen.  
- `Today` : Zeigt nur die heutigen Verlaufseinträge an.  
- `Yesterday` : Zeigt Verlaufseinträge von genau einem Tag zuvor an.  
- `Last week` : Zeigt den Verlauf der letzten 7 Tage an.
- `Last month` : Zeigt den Verlauf der letzten 30 Tage an.
- `Delete all` : - Löscht alle Verlaufseinträge dauerhaft.   ⚠️ _Diese Aktion kann nicht rückgängig gemacht werden. Bitte gehen Sie mit Vorsicht vor._

</details>


