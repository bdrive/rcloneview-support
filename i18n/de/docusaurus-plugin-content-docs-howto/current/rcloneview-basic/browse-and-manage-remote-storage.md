---
sidebar_position: 3
description: "Erfahren Sie, wie Sie mit der Drag-and-Drop-Oberfläche und dem Rechtsklickmenü von RcloneView Dateien zwischen lokalem und Cloud-Speicher durchsuchen, kopieren und verwalten."
keywords:
  - rcloneview
  - Dateiverwaltung
  - Dateien kopieren
  - Dateien verschieben
  - Drag and Drop
  - Cloud-Dateiübertragung
  - Cloud-Speicher
  - Dateimanager
  - Cloud-zu-Cloud-Übertragung
  - Remote-Browser
  - Hochladen
  - Herunterladen
  - purge
  - Löschen
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# Dateiverwaltung mit RcloneView  

Mit RcloneView können Sie ganz einfach über eine vertraute, Explorer-ähnliche Oberfläche Dateien zwischen Ihrer lokalen Festplatte und mehreren Cloud-Speicherdiensten durchsuchen, übertragen und organisieren.   

Diese Anleitung führt Sie durch:   

- Durchsuchen von Remote-Speicher
- Kopieren von Dateien per Drag & Drop
- Verwalten von Dateien über das Rechtsklickmenü
 
## Remote-Speicher durchsuchen

Sie können jeden verbundenen Cloud-Remote öffnen und wie einen lokalen Ordner anzeigen.

### So durchsuchen Sie einen Remote:

1. Klicken Sie auf den Tab **`+`** im **Explorer-Bereich**.
2. Wählen Sie den Cloud-Speicher aus, den Sie öffnen möchten.
3. Der ausgewählte Remote öffnet sich in einem neuen Tab, bereit für Dateioperationen.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip Ansichtslayout
Gehen Sie zu **`Einstellungen > Layout`**, um zwischen vertikaler und horizontaler Ansicht zu wechseln 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## Dateien per Drag and Drop kopieren

Sie können Dateien zwischen lokalem und Cloud-Speicher mit einfachem Drag & Drop übertragen.
#### Kopieren zwischen zwei Remotes

Ziehen Sie Dateien von einem Remote-Tab in einen anderen in RcloneView, um sie zwischen Cloud-Speichern zu kopieren.
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  Für Mehrfachauswahl und Massenaktionen**
Sie können mehrere Dateien gleichzeitig auswählen, um Stapeloperationen durchzuführen.
- Verwenden Sie **`Strg + Klick`**, um mehrere einzelne Dateien auszuwählen.
- Verwenden Sie **`Umschalt + Klick`**, um einen Dateibereich auszuwählen.

**👉  Verhalten von Drag & Drop **
- **Gleicher Remote** = Verschieben  
- **Unterschiedliche Remotes** = Kopieren


:::tip Hinweis
-  Wenn Sie das Bestätigungs-Popup beim Kopieren nicht sehen möchten, deaktivieren Sie das Kontrollkästchen **Drag and Drop bestätigen**.
- Um das Popup später wieder zu aktivieren, gehen Sie zu **Einstellungen > Allgemeine Einstellungen > Drag and Drop bestätigen** und aktivieren Sie es erneut.
:::

#### Kopieren vom Windows Explorer in einen Remote in RcloneView
- Sie können Dateien auch direkt aus dem **Windows Explorer** in einen RcloneView-Tab ziehen, um sie in den Cloud-Speicher hochzuladen.
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### Dateien über das Rechtsklickmenü verwalten

RcloneView unterstützt vollständige Dateioperationen über ein praktisches Rechtsklickmenü.

### Verfügbare Aktionen:

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**Herunterladen** – Datei(en) auf Ihrer lokalen Festplatte speichern  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**Hochladen** – Lokale Datei(en) an einen Cloud-Remote senden  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**Kopieren / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Einfügen** – Dateien zwischen Ordnern oder Remotes kopieren  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**Ausschneiden / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Einfügen** – Dateien an einen anderen Ort verschieben  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**Löschen** – Dateien oder Ordner entfernen  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**Umbenennen** – Dateien oder Ordner umbenennen  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**Neuer Ordner** – Einen neuen Ordner erstellen  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**Neu laden** – Ordnerinhalt aktualisieren
