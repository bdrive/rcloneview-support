---
sidebar_position: 9
description: Erfahren Sie, wie Sie zwischen Embedded- und External-Rclone-Instanzen mit dem RcloneView Connection Manager konfigurieren und wechseln.
keywords:
  - rcloneview
  - connection
  - remote control
  - embedded rclone
  - external rclone
  - connection manager
  - rclone
  - rclone rcd
  - rc server
  - Remote Connection
  - rclone connection
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rclone-Verbindungen in RcloneView verwalten

RcloneView ist ein GUI-basierter Dateimanager für Cloud-Speicher, der über die Remote-Control-API (RC) mit **Rclone** kommuniziert. Standardmäßig wird es mit einer **Embedded Rclone**-Instanz ausgeliefert, unterstützt aber auch die Verbindung zu externen Rclone-Instanzen (**External Rclone**).

Diese Anleitung erklärt, wie Sie diese Verbindungen mit dem **Connection Manager** verwalten.

## Übersicht über den Connection Manager

RcloneView kommuniziert mit Rclone in zwei Modi:

- **Embedded Rclone** (Standard, integriert)
- **External Rclone** (benutzerdefiniert, netzwerkverbunden)

Mit dem **Connection Manager** können Sie diese Rclone-Instanzen anzeigen, wechseln und verwalten.

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### Embedded Rclone

RcloneView enthält eine vorinstallierte Rclone-Binärdatei namens **Embedded Rclone**, die automatisch gestartet wird.

| Feld                        | Beschreibung                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **Address**                 | Typischerweise `http://127.0.0.1:5582` (localhost loopback)                    |
| **Rclone Version**          | Beispiel: `v1.70.1`                                                            |
| **Connected** / **Connect** | Zeigt den aktuellen Status an. Falls nicht verbunden, klicken Sie auf **Connect**, um zu aktivieren. |
| **Self Update**             | Klicken, um auf die neueste Rclone-Version zu aktualisieren.                   |

### Liste der External Rclone

External Rclone bezeichnet eine eigenständige Rclone-Instanz, die manuell vom Benutzer gestartet wird, typischerweise über `rclone rcd`. Sie kann laufen auf:

- Einem lokalen Rechner (zum Testen)
- Einem entfernten Server (z. B. AWS EC2)
- Innerhalb eines Docker-Containers

Jeder Eintrag zeigt:

| Feld | Beschreibung |
|-------|-------------|
| **Display Name** | Benutzerdefinierter Name (z. B. `aws-rclone`) |
| **Remote Address** | API-Endpunkt, z. B. `http://<host>:5572` |
| **Username** | Falls Authentifizierung aktiviert ist |
| **Rclone Version** | Von der verbundenen Instanz abgerufen |

**Verfügbare Aktionen**:
- **Connect** – Aktiviert diese Instanz
- **Edit** – Adresse, Anmeldedaten oder SSL-Optionen ändern
- **Delete** – Aus der Liste entfernen

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### Anzeige der aktuellen Auswahl

Oben im Connection-Manager-Dialog:

- `Selected: Embedded Rclone` – die integrierte Standardinstanz ist aktiv  
- `Selected: aws-rclone` – eine benutzerdefinierte externe Instanz wird verwendet

Es kann immer nur eine Verbindung aktiv sein. Ihre aktuelle Auswahl wirkt sich aus auf:

- Sichtbarkeit der Remote-Liste  
- Mount-/Job-Aktionen  
- Konfigurationsvorgänge

:::important Hinweise
- Es kann immer nur eine Rclone-Verbindung aktiv sein.  
- Sie können jederzeit frei zwischen Embedded- und External-Verbindungen wechseln.  

💡 Um zwei Instanzen parallel zu verwalten, öffnen Sie ein neues RcloneView-Fenster.

- Falls ein External Rclone nicht mehr verfügbar ist, können Sie jederzeit auf die eingebettete Version zurückgreifen.
:::

## Ein neues External Rclone hinzufügen

So verbinden Sie sich mit einem laufenden `rclone rcd`-Server:

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. Klicken Sie unten im Connection Manager auf **New Connection**.
2. Füllen Sie das Formular aus:

| Feld | Beschreibung |
|-------|-------------|
| **Display Name** | z. B. `aws-rclone` |
| **Remote Address** | Vollständiger API-Endpunkt (`http://<host>:5572`) |
| **Username / Password** | Erforderlich, falls Authentifizierung aktiviert ist |
| **Disable SSL Verification** | Für selbstsignierte Zertifikate oder Entwicklungszwecke |
<br />
<br />

3. Klicken Sie auf **Test connection**. Bei Erfolg klicken Sie auf **Save**.

:::important Hinweise

💡 Um ein External Rclone verfügbar zu machen, starten Sie es mit:

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::

