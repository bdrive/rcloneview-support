---
sidebar_position: 3
description: "Erfahren Sie, wie Sie sowohl eingebettete als auch externe Rclone-Instanzen parallel mit der New-Window-Funktion von RcloneView verwalten."
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# Mehrere Rclone-Verbindungen mit New Window verwenden

RcloneView bietet eine flexible Oberfläche, um mehrere Rclone-Instanzen gleichzeitig zu verwalten. Dies ist besonders nützlich, wenn Sie sowohl mit eingebetteten als auch mit externen Rclone-Setups arbeiten.

## Eingebettete Rclone-Architektur

In der Standardkonfiguration enthält RcloneView eine integrierte Rclone-Binärdatei (Embedded Rclone). Diese Instanz ermöglicht es Benutzern, Cloud-Remotes über eine einfach zu bedienende GUI-Oberfläche zu verwalten.

### 🔹 Eingebettetes Modell

- RcloneView enthält Rclone und kommuniziert über die API damit.
- Dateien werden direkt über Rclone aufgerufen und verwaltet.
- Geeignet für die meisten lokalen Desktop-Nutzungsszenarien.

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## Externe Rclone-Architektur

Für fortgeschrittenere Anwendungsfälle, etwa die Verwaltung von Remotes auf Remote-Servern oder Cloud-Instanzen, kann RcloneView eine Verbindung zu einer extern laufenden Rclone-Instanz herstellen.

### 🔹 Externes Modell

- RcloneView verbindet sich mit einem Remote-Rclone-Server (über Rclone RC).
- Das Remote-Rclone ist für den Zugriff auf und die Synchronisation von Cloud-Speicher verantwortlich.
- Nützlich für die Verwaltung von Cloud-gehosteten Rclone-Umgebungen (z. B. AWS EC2, Linux-Server).

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## New-Window-Funktion: Beide Modelle verwalten

Um sowohl eingebettete als auch externe Rclone-Instanzen gleichzeitig zu unterstützen, bietet RcloneView die Funktion **New Window**. Damit können Benutzer mehrere GUI-Instanzen von RcloneView starten, die jeweils mit einem anderen Rclone-Backend verbunden sind.

### ✅ Wichtige Vorteile

- Jedes Fenster kann sich mit einer eigenen Rclone-Instanz verbinden.
- Lokale und Remote-Umgebungen können parallel verwaltet werden.
- Vergleichen, Synchronisieren und Kopieren zwischen verschiedenen Clouds oder Umgebungen nahtlos möglich.

### 🔸 Beispiel: Home-Fenster (Embedded Rclone)

Dieses Fenster ist mit dem in RcloneView integrierten Rclone verbunden.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important Home-Symbol für das Hauptfenster
Das Hauptfenster von RcloneView (verbunden mit dem eingebetteten Rclone) lässt sich anhand des **Home-Symbols** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> neben dem RcloneView-Logo in der oberen rechten Ecke erkennen.

:::
### 🔸 Beispiel: New Window (External Rclone)

Dieses Fenster ist mit einem externen Rclone verbunden, das auf einem AWS-Linux-Server läuft.

:::info So führen Sie die Rclone-Engine auf AWS EC2 aus  
Um zu erfahren, wie Sie den API-Daemon von Rclone (`rcd`) auf einer Ubuntu-basierten EC2-Instanz bereitstellen und verwalten, siehe: [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩Vergleich: Embedded Rclone vs. External Rclone

| Funktion                               | Embedded Rclone                      | External Rclone                             |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| Läuft auf lokalem Rechner              | ✅ Ja                                 | ❌ Nein (läuft auf Remote-Server)            |
| Zugriff auf lokale Festplatte          | Ja — lokaler PC, auf dem RcloneView läuft | Ja — Server, auf dem das externe Rclone läuft |
| Verwendet integrierte Rclone-Binärdatei | ✅ Standardmäßig enthalten            | ❌ Erfordert separate Installation           |
| Konfigurierbar unter `Settings > Location` | ✅ Unterstützt                    | ❌ Nicht zutreffend                          |
| Erfordert Netzwerkkonfiguration        | ❌ Nein                               | ✅ Ja (Host, Port, Authentifizierung erforderlich) |
| Netzwerkleistung                       | Abhängig vom lokalen/Heimnetzwerk     | Abhängig vom Server-/Cloud-Netzwerk         |

 💡 Nutzen Sie die Funktion **New Window**, um mehrere Rclone-Instanzen parallel zu verwalten — verbinden Sie beispielsweise ein Fenster mit dem eingebetteten Rclone für lokale Aufgaben und ein anderes mit einem externen Rclone für Cloud-seitige Vorgänge.
