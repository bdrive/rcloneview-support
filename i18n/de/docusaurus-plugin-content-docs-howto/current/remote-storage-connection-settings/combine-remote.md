---
sidebar_position: 3
description: "Kombinieren Sie mehrere Cloud-Ordner in RcloneView zu einer einzigen virtuellen Ansicht, ohne Daten zu kopieren – ideal für Multi-Cloud-Browsing und einheitliche Jobs."
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## So fügen Sie Combine mit RcloneView hinzu

Ein **Combine Remote** führt Ordner aus mehreren Cloud-Remotes zu einer virtuellen Ansicht zusammen. Es werden dabei keine Daten kopiert oder verschoben – Sie können lediglich mehrere Speicherorte wie einen einzigen Ordner durchsuchen.

Warum das nützlich ist:

- Über mehrere Clouds verstreute Daten an einem Ort sehen.
- Projektordner aus verschiedenen Diensten als einen einzigen Arbeitsbereich behandeln.
- Backup-/Synchronisationsjobs so ausführen, als handle es sich um ein einziges Remote.
- Kein zusätzlicher Speicherplatz und keine doppelten Dateien.

Combine Remote ist im Grunde ein Multi-Cloud-Viewer.

---

## Ein Combine Remote erstellen

### Schritt 1 — **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### Schritt 2 — Combine-Details eingeben

Für jeden Eintrag benötigen Sie drei Felder:

- **Remote name**: Name des Combine-Remotes (z. B. `MyCombine`).
- **Directory**: Ordnername, wie er in der Combine-Ansicht erscheinen soll (z. B. `Folder1`).
- **Remote Path**: Tatsächlicher Cloud-Pfad, der eingebunden werden soll. Klicken Sie auf das Ordnersymbol, um aus registrierten Remotes auszuwählen.

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

Nach Auswahl des ersten Pfads:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

Verwenden Sie **Add Remote**, um Folder2, Folder3 und weitere hinzuzufügen.  
Wenn alle Einträge festgelegt sind:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

Klicken Sie auf **Add Remote**, um das Combine Remote zu erstellen.

### Schritt 3 — Im Remote Manager bestätigen

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## Kombinierte Ordner im Explorer prüfen

Öffnen Sie das Combine Remote im Explorer, um jeden hinzugefügten Ordner zu sehen.

**Folder1 — Google Drive-Beispiel**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
Zeigt denselben Inhalt wie `mygoogledrive:Meet Recordings`.

**Folder2 — Dropbox-Beispiel**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
Zeigt denselben Inhalt wie `drop:assets`.

---

## Wann Combine verwendet werden sollte

- Daten über mehrere Clouds hinweg gleichzeitig anzeigen.
- Über mehrere Remotes verteilte Projektordner zusammenführen.
- Backup- oder Synchronisationsjobs über ein einziges virtuelles Remote verwalten.
- Ursprüngliche Strukturen beibehalten und dabei die Ansicht vereinheitlichen.
- Doppelten Speicherbedarf vermeiden und dennoch einen kombinierten Arbeitsbereich erhalten.

---

## Zusammenfassung

| Feature                        | Beschreibung                                          |
| ------------------------------- | ------------------------------------------------------ |
| **Combine Remote**              | Führt mehrere Ordner zu einer virtuellen Ansicht zusammen |
| **Keine Datenduplizierung**     | Dateien bleiben an ihrem ursprünglichen Speicherort     |
| **Verschiedene Remotes hinzufügen** | Funktioniert mit Drive, Dropbox, OneDrive, S3 usw.  |
| **Anwendungsfälle**             | Einheitliches Browsing, Multi-Cloud-Backup, Projekte    |

Mit Combine Remote können Sie Multi-Cloud-Daten so verwalten, als befänden sie sich an einem einzigen Ort – ohne Dateien zu verschieben oder zu duplizieren.
