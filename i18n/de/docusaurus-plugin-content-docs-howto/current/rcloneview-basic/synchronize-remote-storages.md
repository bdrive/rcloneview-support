---
sidebar_position: 5
description: "Erfahren Sie, wie Sie mit der leistungsstarken Sync-Funktion von RcloneView Ordner zwischen lokalem und Cloud-Speicher sofort spiegeln können. Enthält Einrichtung, Filter, Testlauf und Planungsoptionen."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# Remote-Speicher sofort synchronisieren

Verwenden Sie die **`Sync`**-Funktion von RcloneView, um Ordner zwischen Cloud-Remotes oder lokalem Speicher sofort zu spiegeln.  

Diese Anleitung führt Sie durch die Einrichtung und Ausführung einer Synchronisation.
## Quell- und Zielordner auswählen

Um eine Synchronisation zu starten, müssen Sie die **Quell-** und **Zielordner** festlegen.

- Öffnen Sie im Panel **Explorer** zwei Tabs:
	- Der im **linken Tab** ausgewählte Ordner wird zur **Quelle**
	- Der im **rechten Tab** ausgewählte Ordner wird zum **Ziel**

- Sie können Ordnerpfade auch direkt über die **Pfadleiste** oben in jedem Tab eingeben.
- Diese Einstellungen können bei Bedarf später im Konfigurationsfenster der **Sync**-Funktion angepasst werden.

Sobald die Ordner ausgewählt sind, klicken Sie auf die Schaltfläche **`Sync`** im oberen **`Home`**-Menü, um fortzufahren.
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## Synchronisation ausführen

Nachdem Sie die Quell- und Zielordner ausgewählt haben, können Sie Ihre Synchronisation konfigurieren und ausführen.


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### Schritt 1: Ordnerpfade überprüfen

- Überprüfen Sie im Schritt **`Configure Storage`** die ausgewählten Quell- und Zielordner.
- Stellen Sie sicher, dass beide korrekt eingestellt sind, bevor Sie auf **Next** klicken.

:::caution So funktioniert Sync
RcloneView Sync macht Quelle und Ziel identisch.  
Das bedeutet: **`nur das Ziel wird verändert`**.  
- Der Inhalt des **Quellordners** wird auf das **Ziel** gespiegelt.  
- Vorhandene Dateien im Ziel, die in der Quelle nicht existieren, werden **gelöscht**.  

👍 **Wichtig:** Rclone unterstützt offiziell nur eine **unidirektionale Synchronisation**.  
⚠️ Die **bidirektionale Synchronisation (= Bidirection)** ist als **Beta-Funktion** verfügbar und wird nicht offiziell unterstützt. Sie kann unerwartetes Verhalten oder Fehler verursachen und wird daher **nicht für den produktiven Einsatz empfohlen**.
:::

<details>
<summary>Details zu Configure Storage</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **Quellordner auswählen**.   
 - Klicken Sie im linken Panel auf das Ordnersymbol, um die Quelle auszuwählen.  
2. **Zielordner auswählen**. 
- Klicken Sie im rechten Panel auf das Ordnersymbol, um das Ziel auszuwählen.  
3. **Weitere Ziele hinzufügen** (optional). 
- Klicken Sie auf die Schaltfläche **Add Destination**, um gleichzeitig mit mehreren Zielen zu synchronisieren. Bei Bedarf können Sie eine **1:N-Synchronisation** konfigurieren.  
4. **Synchronisationsrichtung wählen**. 
 - **Nur Ziel verändern**: Synchronisiert von der Quelle zum Ziel. Aktualisiert oder löscht Zielinhalte, damit sie mit der Quelle übereinstimmen.  
 - **Bidirection** (Beta): Vergleicht beide Ordner und synchronisiert Änderungen in beide Richtungen.  
⚠️ Dieser Modus kann versehentlich neue Dateien überschreiben, verwenden Sie ihn daher mit Vorsicht.  
5. **Leere Verzeichnisse erstellen (optional)**.   
- Wenn aktiviert, werden Quellverzeichnisse ohne Dateien als leere Ordner im Ziel neu angelegt.  

:::caution Bidirektionale Synchronisation in RcloneView verwenden
RcloneView verwendet `bisync` (einen Beta-Befehl in rclone), um eine bidirektionale Synchronisation durchzuführen.    
Da diese Funktion noch **experimentell** ist, empfehlen wir, vor der Aktivierung das offizielle [Benutzerhandbuch](https://rclone.org/bisync/) zu lesen — insbesondere den Abschnitt [Limitations](https://rclone.org/bisync/#limitations).

Eine falsche Verwendung von bisync kann zu Datenverlust führen. Bitte mit Vorsicht verwenden.
:::


</details>

### Schritt 2: Erweiterte Einstellungen (optional)

  - Die erweiterten Einstellungen umfassen Optionen für:
	  - Übertragungsleistung
	  - Verbindungsmethode
	  - Verhalten bei Fehlerbehandlung

> 💡 Wir empfehlen, die Standardwerte zu verwenden, sofern kein benutzerdefiniertes Verhalten erforderlich ist.

<details>
<summary>Details zu Advanced Settings</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Leistung:**

1. **`Number of file transfers`**:   
   Die Anzahl der parallel ausgeführten Dateiübertragungen. Es kann sinnvoll sein, diese Zahl kleiner zu setzen, wenn der Remote viele Timeouts liefert, oder größer, wenn Sie über viel Bandbreite und einen schnellen Remote verfügen.  
2. **`Number of multi thread transfers`**:  
   Legt bei Verwendung von Multi-Thread-Übertragungen die Anzahl der zu verwendenden Streams fest. Auf `0` setzen, um Multi-Thread-Übertragungen zu deaktivieren (Standard 4). Beim Übertragen von Dateien über 256 MB an geeignete Backends verwendet rclone mehrere Threads, um die Datei zu übertragen.  
3. **`Number of equaility checkers`**:  
   Checker führen während einer Synchronisation die Gleichheitsprüfung von Dateien durch. Bei einigen Speichersystemen (z. B. S3, Swift, Dropbox) kann dies erheblich Zeit beanspruchen, weshalb sie parallel ausgeführt werden. Standardmäßig werden 8 Checker parallel ausgeführt. Bei langsam reagierenden Backends kann es jedoch nötig sein, diesen Standardwert zu senken (statt zu erhöhen), indem Sie `--checkers` auf 4 oder weniger Threads setzen.  


**Sicherheit und Integrität:**

5. **` Enable checksum to compare files`** :  
   Normalerweise prüft rclone Änderungszeitpunkt und Größe der Dateien, um festzustellen, ob sie gleich sind. Wenn Sie dieses Flag setzen, prüft rclone stattdessen Datei-Hash und Größe, um die Gleichheit zu bestimmen. Dies ist sehr nützlich beim Übertragen zwischen Remotes, die denselben Hash-Typ für das Objekt speichern, z. B. Drive und Swift. Details dazu, welche Remotes welchen Hash-Typ unterstützen, finden Sie in der Tabelle im [Übersichtsabschnitt](https://rclone.org/overview/).  


**Fehlerkontrolle:**

5. **`Retry the entire sync if it fails this many times`**:  
   Wiederholt die gesamte Synchronisation, wenn sie so oft fehlschlägt (Standard 3). Manche Remotes können unzuverlässig sein, und ein paar Wiederholungen helfen, Dateien zu übertragen, die aufgrund von Fehlern nicht übertragen wurden. Deaktivieren Sie Wiederholungen mit `1`.  

</details>



### Schritt 3: Dateien und Ordner filtern (optional)

- RcloneView wendet standardmäßig grundlegende Filter für Dienste wie Google Docs oder Box Docs an.
- Sie können weitere Dateitypen oder Ordner hinzufügen, die von der Synchronisation ausgeschlossen werden sollen.

<details>
<summary>Details zu Filering Settings</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`Don't sync files over`** :  
   Steuert die **maximale Dateigröße**, die für die Synchronisation zulässig ist.  
   Standardeinheit ist MB.  
2. **`Don't sync files older than this`** :    
   Steuert das **maximale Dateialter**, das für die Synchronisation zulässig ist.  
   Dies gilt nur für **Dateien**, nicht für Verzeichnisse.  
   Verwenden Sie die folgenden Einheiten:  
   `y` = Jahre, `d` = Tage, `h` = Stunden, `m` = Minuten, `s` = Sekunden (Beispiel: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Wenn festgelegt, synchronisiert Rclone nur Ordner innerhalb der angegebenen Tiefe.  
   Zum Beispiel synchronisiert die Einstellung `1` nur Dateien im obersten Verzeichnis.  
   Die Einstellung `2` synchronisiert Dateien innerhalb der ersten beiden Ordnerebenen, und so weiter.
4. **Vordefinierte Filter**.   
   Sie können schnell integrierte Filter für gängige Dateitypen anwenden, wie zum Beispiel:  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     Diese Filter sind als vordefinierte Optionen in der Filterliste verfügbar.
1. **Others (= Benutzerdefinierte Filter)**.  
   Sie können benutzerdefinierte Regeln festlegen, um bestimmte Dateitypen, Ordner oder Pfade auszuschließen oder einzuschließen.  
   Hier sind einige gängige Beispiele:  
   **`.iso`** : Schließt alle .iso-Dateien aus.  
   **`/.git/*`** : Schließt nur Dateien im .git-Ordner im Stammverzeichnis aus, nicht in Unterordnern.  
   **`/.git/`** : Schließt den gesamten .git-Ordner im Stammverzeichnis einschließlich aller darin enthaltenen Inhalte aus.   
   **`.git/`** : Schließt alle .git-Ordner und deren gesamten Inhalt unabhängig vom Speicherort aus.   
   
   🔗 Weitere fortgeschrittene Beispiele und Syntax finden Sie im [Rclone Filtering Guide](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>

  
  
### Schritt 4: Synchronisation ausführen

- Sobald alle Einstellungen abgeschlossen sind, klicken Sie auf **Run**, um den Synchronisationsvorgang zu starten.

:::important Sync-Planung. 
Um Synchronisationsaufgaben zu einem geplanten Datum und Uhrzeit auszuführen, klicken Sie zuerst auf **Save to Jobs**, um die Synchronisationsaufgabe als Job zu registrieren. Führen Sie anschließend den **`Job Manager`** aus, um den Zeitplan zu konfigurieren.  

> ⚠️ **Die Job-Planung ist als PLUS-Funktion verfügbar.**   

Sie benötigen eine [**PLUS-Lizenz**](https://rcloneview.com/src/pricing.html), um diese Funktion zu nutzen.
:::

### Simulieren: Einen Testlauf ausführen (optional)

Sie können einen **Testlauf (Dry run)** ausführen, um den Synchronisationsvorgang zu simulieren, ohne tatsächliche Änderungen vorzunehmen.

- Diese Vorschau zeigt, welche Dateien in das **Ziel** kopiert und welche gelöscht werden.
- Klicken Sie auf **`See details`**, um eine vollständige Liste der Vorgänge anzuzeigen, die im Ziel stattfinden würden (z. B. Kopieren, Erstellen, Löschen).

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## Synchronisationsergebnisse überwachen

Sie können den Fortschritt und die Ergebnisse von Synchronisationsvorgängen in Echtzeit überprüfen.

### Übertragungsstatus (in Bearbeitung)

- Öffnen Sie während der Synchronisation den Tab **`Transfer`**, um den Echtzeit-Fortschritt jeder Datei anzuzeigen.
- Klicken Sie auf das **+**-Symbol, um einzelne Dateiübertragungen zu erweitern und zu überwachen.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Abgeschlossene Jobs (nach der Synchronisation)

- Sobald die Synchronisation abgeschlossen ist, gehen Sie zum Tab **`Completed`**, um die Ergebnisse anzuzeigen.
- Klicken Sie auf das **+**-Symbol, um Details auf Dateiebene für jeden abgeschlossenen Job anzuzeigen.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Synchronisierte Remotes schnell öffnen
Im Tab **`Completed`** können Sie auf einen abgeschlossenen Job doppelklicken, um sowohl den Quell- als auch den Zielordner im Explorer-Panel zu öffnen.  
So lassen sich die synchronisierten Ordner leicht sofort überprüfen.
:::

### Benachrichtigung über Abschluss (Windows)

Nach Abschluss der Synchronisation erscheint ein Benachrichtigungs-Popup in der Windows-Systemablage mit einer Zusammenfassung des Synchronisationsvorgangs.

  - Sie können auf **`See details`** klicken, um eine vollständige Aufschlüsselung der Ergebnisse anzuzeigen.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Alarmmeldungen in der Windows-Benachrichtigung ansehen
Wenn Sie das Popup verpassen, können Sie die Sync-Benachrichtigung trotzdem überprüfen, indem Sie auf das **Benachrichtigungssymbol** in der **Windows-Systemablage** klicken.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## Synchronisationsvorgang als Job speichern

Wenn Sie regelmäßig dieselbe Synchronisationsaufgabe ausführen, können Sie diese zur einfachen Wiederverwendung als **Job** speichern.

- Klicken Sie nach der Konfiguration Ihrer Synchronisation auf **`Save to Jobs`**.
- Geben Sie einen **Job-Namen** ein und klicken Sie dann auf **Save**, um den Job zu speichern.  
  - ❗Erlaubte Zeichen: `a–z`, `A–Z`, `0–9`, `-`, `_`, `.`
- Sie können den gespeicherten Job später mit einem Klick über den **`Job Manager`** ausführen.

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
Sie können gespeicherte Jobs anzeigen und ausführen, indem Sie auf die Symbolleiste **`Job Manager`** im Home-Menü klicken.
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />
