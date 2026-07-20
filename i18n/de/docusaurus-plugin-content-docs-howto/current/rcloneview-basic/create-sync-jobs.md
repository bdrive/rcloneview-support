---
sidebar_position: 6
description: Erfahren Sie, wie Sie Synchronisationsjobs in RcloneView erstellen und verwalten, um Remote-Ordner wiederholt oder zeitgesteuert zu synchronisieren.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# Synchronisationsjobs erstellen

Sie können häufig verwendete Synchronisationsaufgaben als **Jobs** anlegen, sodass Sie diese mit nur wenigen Klicks wiederholt ausführen können.  

Es gibt zwei Hauptwege, um einen Job zu erstellen:  
- Einen Job direkt aus einer Synchronisationsaufgabe erstellen (Instant Sync). 
- Den **Job Manager** verwenden, um Jobs manuell zu konfigurieren und zu speichern. 

## Einen Job aus Instant Sync erstellen

Sie können einen Job erstellen, indem Sie Ihre Synchronisationsaufgabe konfigurieren und im Sync-Fenster auf **Save to Jobs** klicken.  

👉 Siehe: [Instantly Create a Job from Sync](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

Sie können gespeicherte Jobs anzeigen und ausführen, indem Sie in der Startmenüleiste auf **`Job Manager`** klicken.

## Einen Job über den Job Manager erstellen


### (Optional) Quell- und Zielordner auswählen

Sie können vor dem Erstellen eines Jobs über den **Job Manager** optional die Quell- und Zielordner festlegen.  

Dies ist hilfreich, wenn Sie beim späteren Hinzufügen eines neuen Jobs bereits Ordner vorbelegen möchten.  

Alternativ können Sie die Quell- und Zielordner direkt im Fenster **Add Job** im **Job Manager** konfigurieren.  

Um den Job Manager zu öffnen, klicken Sie in der Startleiste auf die Schaltfläche **Job Manager**.

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### Einen neuen Job hinzufügen

Um einen neuen Job hinzuzufügen, klicken Sie im Modalfenster **Job Manager** (=`Jobs`) auf **`Add Job`**.  

#### Schritt 0: Job Manager öffnen und auf `Add Job` klicken

  Es erscheint das folgende `Jobs`-Fenster. Klicken Sie auf die Schaltfläche **Add Job**, um den Job-Erstellungsassistenten zu öffnen.

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  Der Job-Assistent führt Sie durch drei Schritte:

1. **Configure Storage** – Quell- und Zielordner auswählen  
2. **Advanced Settings (optional)** – Synchronisationsverhalten festlegen  
3. **Filtering Settings (optional)** – Filter für Dateitypen oder Ordner festlegen
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### Schritt 1: Configure Storage

- Überprüfen Sie im Schritt **`Configure Storage`** die ausgewählten Quell- und Zielordner.
- Geben Sie den **`Job Name`** ein ( ❗Erlaubte Zeichen: `a–z`, `A–Z`, `0–9`, `-`, `_` )
- Um eine Quelle mit mehreren Zielen zu synchronisieren, klicken Sie auf **Add Destination**, um weitere Remote-Ordner hinzuzufügen.  
  Dies ermöglicht eine **1:N (One-to-many)**-Synchronisation.  
- Stellen Sie sicher, dass alle Ordner korrekt eingestellt sind, bevor Sie auf **Next** klicken.

:::caution Wie die Synchronisation funktioniert
Die RcloneView-Synchronisation gleicht Quelle und Ziel an.  
Das bedeutet **`nur das Ziel wird verändert`**.  
- Der Inhalt des **Quell**-Ordners wird auf das **Ziel** gespiegelt.  
- Vorhandene Dateien im Ziel, die in der Quelle nicht existieren, werden **gelöscht**.  

👍 **Wichtig:** Rclone unterstützt offiziell nur die **unidirektionale Synchronisation**.  
⚠️ Die **bidirektionale Synchronisation (=Bidirection)** ist als **Beta-Funktion** verfügbar und wird nicht offiziell unterstützt. Sie kann zu unerwartetem Verhalten oder Fehlern führen und wird daher **nicht für den produktiven Einsatz empfohlen**.
:::

<details>
<summary>Configure Storage Details</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**. 
 - ❗Erlaubte Zeichen: `a–z`, `A–Z`, `0–9`, `-`, `_` 
2. **Quellordner auswählen**.   
 - Klicken Sie im linken Bereich auf das Ordnersymbol, um die Quelle auszuwählen.  
1. **Zielordner auswählen**. 
- Klicken Sie im rechten Bereich auf das Ordnersymbol, um das Ziel auszuwählen.  
1. **Weitere Ziele hinzufügen** (optional). 
- Klicken Sie auf die Schaltfläche **Add Destination**, um gleichzeitig zu mehreren Zielen zu synchronisieren. Bei Bedarf können Sie eine **1:N-Synchronisation** konfigurieren.  
5. **Synchronisationsrichtung wählen**. 
 - **Nur Ziel ändern**: Synchronisiert von der Quelle zum Ziel. Aktualisiert oder löscht Zielinhalte, damit sie der Quelle entsprechen.  
 - **Bidirection** (Beta): Vergleicht beide Ordner und synchronisiert Änderungen in beide Richtungen.  
⚠️ Dieser Modus kann neue Dateien unbeabsichtigt überschreiben, daher mit Vorsicht verwenden.  
6. **Leere Verzeichnisse erstellen (optional)**.   
- Wenn aktiviert, werden Quellverzeichnisse ohne Dateien als leere Ordner im Ziel neu erstellt.  

:::caution Verwendung der bidirektionalen Synchronisation in RcloneView
RcloneView verwendet `bisync` (einen Beta-Befehl in rclone), um die bidirektionale Synchronisation durchzuführen.    
Da diese Funktion noch **experimentell** ist, empfehlen wir, vor der Aktivierung das offizielle [Benutzerhandbuch](https://rclone.org/bisync/) – insbesondere den Abschnitt [Limitations](https://rclone.org/bisync/#limitations) – zu lesen.

Eine fehlerhafte Verwendung von bisync kann zu Datenverlust führen. Bitte mit Vorsicht verwenden.
:::


</details>

#### Schritt 2: Advanced Settings (optional)

  - Advanced Settings umfassen Optionen für:
	  - Übertragungsleistung
	  - Verbindungsmethode
	  - Fehlerbehandlungsverhalten

> 💡 Wir empfehlen, die Standardwerte zu verwenden, sofern kein spezielles Verhalten benötigt wird.

<details>
<summary>Advanced Settings Details</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Leistung:**

1. **`Number of file transfers`**:   
   Die Anzahl der Dateiübertragungen, die parallel ausgeführt werden. Es kann sinnvoll sein, diesen Wert zu verringern, wenn der Remote viele Timeouts verursacht, oder zu erhöhen, wenn Sie über viel Bandbreite und einen schnellen Remote verfügen.  
2. **`Number of multi thread transfers`**:  
   Bei Verwendung von Multi-Thread-Übertragungen legt dies die Anzahl der zu verwendenden Streams fest. Auf `0` setzen, um Multi-Thread-Übertragungen zu deaktivieren (Standard 4). Beim Übertragen von Dateien über 256MB zu geeigneten Backends verwendet rclone mehrere Threads für die Übertragung der Datei.  
3. **`Number of equaility checkers`**:  
   Checker führen während einer Synchronisation die Gleichheitsprüfung von Dateien durch. Bei manchen Speichersystemen (z. B. S3, Swift, Dropbox) kann dies erheblich Zeit in Anspruch nehmen, weshalb sie parallel ausgeführt werden. Standardmäßig werden 8 Checker parallel ausgeführt. Bei langsam reagierenden Backends kann es jedoch nötig sein, diesen Standardwert durch Setzen von `--checkers` auf 4 oder weniger Threads zu verringern (statt zu erhöhen).  


**Sicherheit und Integrität:**

5. **` Enable checksum to compare files`** :  
   Normalerweise prüft rclone Änderungszeitpunkt und Größe der Dateien, um festzustellen, ob sie gleich sind. Wenn Sie dieses Flag setzen, prüft rclone stattdessen den Datei-Hash und die Größe, um die Gleichheit von Dateien zu bestimmen. Dies ist sehr nützlich beim Übertragen zwischen Remotes, die denselben Hash-Typ für das Objekt speichern, z. B. Drive und Swift. Details darüber, welche Remotes welchen Hash-Typ unterstützen, finden Sie in der Tabelle im [Übersichtsabschnitt](https://rclone.org/overview/).  


**Fehlersteuerung:**

5. **`Retry the entire sync if it fails this many times`**:  
   Wiederholt die gesamte Synchronisation, wenn sie so oft fehlschlägt (Standard 3). Manche Remotes können unzuverlässig sein, und ein paar Wiederholungsversuche helfen dabei, Dateien zu erfassen, die aufgrund von Fehlern nicht übertragen wurden. Wiederholungen mit `1` deaktivieren.  

</details>



#### Schritt 3: Filtering Settings (optional)

- RcloneView wendet standardmäßig grundlegende Filter für Dienste wie Google Docs oder Box Docs an.
- Sie können weitere Dateitypen oder Ordner hinzufügen, die von der Synchronisation ausgeschlossen werden sollen.

<details>
<summary>Filering Settings Details</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`** :  
   Steuert die **maximale Dateigröße**, die für die Synchronisation zulässig ist.  
   Standardeinheit ist MB.  
2. **`Don't sync files older than this`** :    
   Steuert das **maximale Dateialter**, das für die Synchronisation zulässig ist.  
   Dies gilt nur für **Dateien**, nicht für Verzeichnisse.  
   Verwenden Sie folgende Einheiten:  
   `y` = Jahre, `d` = Tage, `h` = Stunden, `m` = Minuten, `s` = Sekunden (Beispiel: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Wenn festgelegt, synchronisiert Rclone nur Ordner innerhalb der angegebenen Tiefe.  
   Wenn Sie dies beispielsweise auf `1` setzen, werden nur Dateien im obersten Verzeichnis synchronisiert.  
   Ein Wert von `2` synchronisiert Dateien innerhalb der ersten beiden Ordnerebenen, und so weiter.
4. **Predefined Filters**.   
   Sie können schnell integrierte Filter für gängige Dateitypen anwenden, wie zum Beispiel:  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     Diese Filter stehen als vordefinierte Optionen in der Filterliste zur Verfügung.
1. **Others (= Custom Filters)**.  
   Sie können benutzerdefinierte Regeln definieren, um bestimmte Dateitypen, Ordner oder Pfade auszuschließen oder einzuschließen.  
   Hier sind einige gängige Beispiele:  
   **`.iso`** : Schließt alle .iso-Dateien aus.  
   **`/.git/*`** : Schließt nur Dateien innerhalb des .git-Ordners im Stammverzeichnis aus, nicht Unterordner.  
   **`/.git/`** : Schließt den gesamten .git-Ordner im Stammverzeichnis aus, einschließlich seines gesamten Inhalts.   
   **`.git/`** : Schließt alle .git-Ordner und deren gesamten Inhalt aus, unabhängig vom Speicherort.   
   
   🔗 Weitere fortgeschrittene Beispiele und Syntax finden Sie im [Rclone Filtering Guide](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>


#### Schritt 4: Scheduling (Verfügbar mit PLUS-Lizenz)

Mit der Job-Planung können Sie Jobs automatisch in festgelegten Intervallen oder zu bestimmten Zeiten ausführen.   

💡 Diese Funktion ist ausschließlich mit der [**PLUS-Lizenz**](https://rcloneview.com/src/pricing.html) verfügbar.  

Weitere Details finden Sie unter [Setting Up a Job Schedule](/howto/rcloneview-advanced/job-scheduling-and-execution).   

Überprüfen Sie abschließend den erstellten Job in der Liste, um sicherzustellen, dass alles korrekt eingestellt ist.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>

  





