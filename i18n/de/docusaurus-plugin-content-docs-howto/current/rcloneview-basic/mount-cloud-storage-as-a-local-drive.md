---
sidebar_position: 8
description: "Erfahren Sie, wie Sie einen entfernten Cloud-Speicher mit RcloneView als virtuelles Laufwerk einbinden (mount) – einschließlich der Konfiguration über den Remote-Explorer, den Mount-Manager und den Zugriff über das System-Tray."
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cloud-Speicher als lokales Laufwerk einbinden

:::important Voraussetzungen für das Einbinden (Mounting)
Bevor Sie einen Remote einbinden, stellen Sie sicher, dass der gewünschte Remote bereits zu RcloneView hinzugefügt wurde.   
Siehe: [Einen neuen Remote hinzufügen](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## Remote-Speicher in RcloneView einbinden

Mit RcloneView können Sie Remote-Speicher als virtuelles Laufwerk einbinden, um einfacher darauf zuzugreifen und ihn zu verwalten.  
Diese Anleitung erklärt, wie Sie Remote-Speicher mit zwei Methoden einbinden und Mount-Konfigurationen verwalten können.

### Methode 1: Einbinden über den Remote-Explorer

Sie können einen Remote-Ordner direkt beim Durchsuchen seiner Inhalte einbinden.

1. Wählen Sie im Bereich **Remote-Explorer** den Remote-Ordner aus, den Sie einbinden möchten. 
2. Klicken Sie auf das **Mount-Symbol** (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />) oben in der Ecke des Remote-Explorer-Bereichs.
3. Der **Mount**-Dialog öffnet sich, wobei der ausgewählte Remote-Pfad automatisch eingetragen wird.
4. Konfigurieren Sie die Mount-Einstellungen:
   - **Ziel**: Wählen Sie `Auto` oder weisen Sie manuell einen Laufwerksbuchstaben aus der Liste zu.
   - (optional) Aktivieren Sie „Auf lokalen Pfad einbinden“, um einen benutzerdefinierten Mount-Speicherort anzugeben.
   - Aktivieren Sie **Auto-Mount**, um diesen Remote beim Start von RcloneView automatisch einzubinden.
5. Klicken Sie auf **Speichern und einbinden**, um die Einstellungen zu übernehmen und den Remote sofort einzubinden.
   - Alternativ können Sie auf **Speichern** klicken, um nur die Mount-Konfiguration zu speichern und sie später einzubinden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>Erweiterte Mount-Optionen</summary>

Erweiterte Mount-Optionen

| Feld                        | Beschreibung                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume-Name**    | (Optional) Legen Sie einen benutzerdefinierten Namen für das eingebundene Volume fest. Dieser kann im Dateimanager oder in der System-UI angezeigt werden.                                                                                                                                                        |
| **Mount-Typ**     | Wählen Sie das Mount-Backend: <br /> - `cmount` (Standard für Windows): Verwendet die interne, C-basierte FUSE-ähnliche Mount-Engine von Rclone mit hoher Kompatibilität  <br />- `nfsmount` (Alternative, hauptsächlich für Linux/macOS-Umgebungen). Verwendet das NFS-Protokoll, um den Remote einzubinden |
| **Netzlaufwerk**  | Aktivieren Sie diese Option, um den Mount als Netzlaufwerk zu kennzeichnen. Dies kann beeinflussen, wie das Betriebssystem den eingebundenen Ordner behandelt.                                                                                                                                                       |
| **Schreibgeschützt**      | Aktiviert den Nur-Lese-Modus und verhindert Schreibvorgänge auf den Remote.                                                                                                                                                                                               |
| **Anderen erlauben**    | Erlaubt den Zugriff auf das eingebundene Dateisystem durch andere Benutzer als denjenigen, der es eingebunden hat (hauptsächlich unter Linux verwendet).                                                                                                                                                        |
| **Cache-Modus**     | Steuert das Caching-Verhalten. Verfügbare Optionen:  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />Der Standardmodus `writes` cacht Schreibvorgänge.                                                                                              |
| **Maximale Cache-Größe** | Maximal zulässige Cache-Größe in Bytes.  <br />Beispiel: 1073741824 = 1 GB.  <br />Auf `-1` setzen für keine Begrenzung.                                                                                                                                                            |
| **Maximales Cache-Alter**  | Wie lange zwischengespeicherte Daten gültig bleiben. Die Zeiteinheit ist in **Nanosekunden**. Beispiel: 3600000000000 = 1 Stunde.                                                                                                                                                               |
| **Verzeichnis-Cache-Zeit** | Gültigkeitsdauer des Verzeichnis-Caches. Die Zeiteinheit ist in **Nanosekunden**. Beispiel: 300000000000 = 5 Minuten.                                                                                                                                                   |

💡 Verwenden Sie diese Optionen nur, wenn Sie mit den Mount-Einstellungen vertraut sind. Die Standardwerte funktionieren für die meisten Benutzer gut.

</details>
### Methode 2: Einbinden über den Mount-Manager

Sie können Speicher auch über den **Mount-Manager** konfigurieren und einbinden.

1. Klicken Sie auf die Schaltfläche **`Mount Manager`** unter dem Tab **`Remote`** in der oberen Menüleiste.  
2. Klicken Sie auf **`New mount`**, um eine neue Mount-Konfiguration zu erstellen.  
3. Wählen Sie den Remote aus und geben Sie optional ein Unterverzeichnis an, das eingebunden werden soll.  
4. Konfigurieren Sie die Mount-Optionen:  
   - **Ziel**: Wählen Sie `Auto` oder weisen Sie manuell einen Laufwerksbuchstaben aus der Liste zu.  
   - (Optional) Aktivieren Sie **Auf lokalen Pfad einbinden**, um einen benutzerdefinierten Mount-Pfad anzugeben.  
   - Aktivieren Sie **Auto-Mount**, um diesen Remote beim Start von RcloneView automatisch einzubinden.  
1. Klicken Sie auf **`Save`**, um die Mount-Konfiguration zu speichern, ohne sie sofort einzubinden.  
   - Um den Remote sofort zu speichern und einzubinden, klicken Sie auf **`Save and mount`**.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## Eingebundene Laufwerke anzeigen und verwalten

Um Ihre Mount-Konfigurationen anzuzeigen oder zu verwalten, öffnen Sie den **Mount Manager**-Dialog, indem Sie auf die Schaltfläche **`Mount Manager`** unter dem Tab **`Remote`** im Hauptmenü klicken.

Alle gespeicherten Mount-Konfigurationen werden im Mount-Manager-Fenster aufgelistet.  
Jede Konfiguration wird anhand ihres aktuellen **Status** kategorisiert:
- **Mounted**: Der Remote ist derzeit eingebunden und aktiv.
- **Unmounted**: Der Mount ist gespeichert, aber derzeit nicht eingebunden.
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
Je nach Status können Sie die folgenden Aktionen ausführen:


<Tabs>
<TabItem value="Status: mounted" label="🟢 Status: eingebunden">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> : **Unmount** — Klicken, um den derzeit eingebundenen Remote auszubinden.
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> : (Deaktiviert) Bearbeiten
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> : **Open** — Klicken, um den eingebundenen Ordner im Datei-Explorer zu öffnen.
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> : (Deaktiviert) Löschen
</TabItem>



<TabItem value="Status: Configured" label="🟠 Status: nicht eingebunden">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> : **Mount** — Klicken, um den ausgewählten Remote manuell einzubinden.
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> : **Edit** — Klicken, um die Mount-Einstellungen zu ändern.
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> : (Deaktiviert) Öffnen
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> : **Delete** — Klicken, um die Mount-Konfiguration zu entfernen.
</TabItem>

</Tabs>


<br />
<br />

:::tip Schnelles Einbinden über das System-Tray
Sie können Mounts auch schnell über das System-Tray-Symbol verwalten.

1. Klicken Sie mit der rechten Maustaste auf das **RcloneView-Symbol** im System-Tray.
2. Bewegen Sie den Mauszeiger über das Menü **Mount**.
3. Sie können:
   - Aktuell eingebundene Laufwerke anzeigen und das Laufwerk einbinden oder ausbinden
   - Alle ausbinden
   - Einen neuen Mount starten
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::

