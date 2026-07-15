---
sidebar_position: 4
description: Fügen Sie einen Union-Remote in RcloneView hinzu, um mehrere Remote:Path-Speicherorte ohne Datenduplizierung in eine einheitliche Ordneransicht zusammenzuführen.
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## So fügen Sie Union mit RcloneView hinzu

Ein **Union-Remote** führt Ordner aus mehreren Cloud-Remotes zu einem einzigen einheitlichen Ordner zusammen. Er unterscheidet sich von Combine:

- **Combine** zeigt Ordner nebeneinander an.
- **Union** führt mehrere Ordner in einer Ansicht zusammen.

Union ist nützlich für:

- Den Zugriff auf Daten über mehrere Remotes hinweg, als wären sie ein einziger Ordner.
- Single-Pane-Browsing und Multi-Cloud-Backup-Layouts.
- Den Aufbau eines virtuellen Dateisystems ohne Kopieren oder Verschieben von Daten.

---

## Erstellen eines Union-Remotes

### Schritt 1 — **New Remote** → **Virtual** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### Schritt 2 — Union-Details eingeben

Füllen Sie Folgendes aus:

- **Remote name**: z. B. `MyUnion`.
- **Upstreams (Remote:Path)**: Jeder Upstream ist ein tatsächlicher Ordnerspeicherort.

Fügen Sie den ersten Upstream hinzu, indem Sie einen Remote und einen Ordner auswählen:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

Um einen weiteren Upstream hinzuzufügen, klicken Sie auf **Add Remote** und wählen Sie den nächsten Ordner aus:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

Fügen Sie so viele Upstreams wie nötig hinzu und überprüfen Sie dann die Einstellungen:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

Klicken Sie auf **Add Remote**, um den Union-Remote zu erstellen.

### Schritt 3 — Im Remote Manager bestätigen

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## Überprüfen des Union-Remotes im Explorer

Öffnen Sie den Union-Remote im Explorer. Die Inhalte aller Upstreams werden als ein zusammengeführter Ordner angezeigt.

**Upstreams 1 — Google-Drive-Beispiel**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
Entspricht `mygoogledrive:Meet Recordings`.

**Upstreams 2 — Dropbox-Beispiel**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
Entspricht `drop:assets`.

---

## Combine vs. Union (wichtigste Unterschiede)

| Funktion            | Combine Remote                       | Union Remote                              |
| -------------------- | ------------------------------------- | ------------------------------------------ |
| Anzeigestil          | Zeigt mehrere Ordner getrennt an      | Zeigt eine einzige zusammengeführte Ansicht |
| Schreibregeln        | Nicht zusammengeführt; getrennte Ordner | Neue Schreibvorgänge folgen den Union-Richtlinien |
| Ordnerstruktur       | Folder1 / Folder2                     | Ein kombinierter virtueller Ordner         |
| Am besten geeignet für | Organisation                        | Multi-Cloud-Zusammenführung und einheitliche Nutzung |

---

## Wann Union verwendet werden sollte

- Um Daten aus mehreren Clouds gleichzeitig in einem einzigen Ordner anzuzeigen.
- Für Projekte, die über mehrere Remotes verteilt sind und eine einheitliche Ansicht benötigen.
- Um Sync-/Backup-Aufgaben gegen einen einzigen virtuellen Remote auszuführen.
- Um eine zusammengeführte Ansicht bereitzustellen, ohne Speicher zu duplizieren.

---

## Zusammenfassung

| Funktion          | Beschreibung                                              |
| ------------------ | ----------------------------------------------------------- |
| **Union Remote**   | Führt mehrere `Remote:Path`-Einträge in einer Ansicht zusammen |
| **Upstreams**      | Tatsächliche Remote-Ordner, die die Union bilden           |
| **Vorteile**       | Multi-Cloud-Konsolidierung, Single-Pane-Zugriff             |
| **Zweck**          | Einheitliches Browsing, Backups/Sync, Projektvereinheitlichung |

Union Remote ist ein leistungsstarker virtueller Remote zur Verwaltung von Multi-Cloud-Umgebungen über eine zusammengeführte Ordneransicht.
