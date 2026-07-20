---
sidebar_position: 1
description: Aktivieren Sie den integrierten Webserver von RcloneView, um von jedem Browser in Ihrem lokalen Netzwerk auf Explorer, Jobs, Remotes und Einstellungen zuzugreifen.
keywords:
  - rcloneview
  - web frontend
  - web server
  - browser access
  - remote access
  - web ui
  - rclone web interface
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# RcloneView Web-Frontend

RcloneView enthält einen integrierten Webserver, mit dem Sie über jeden Webbrowser auf die vollständige RcloneView-Oberfläche zugreifen können. Sie können Remotes durchsuchen, Jobs verwalten und Einstellungen konfigurieren — ganz ohne das Fenster der Desktop-App zu öffnen.

Dieses Tutorial behandelt:

- Aktivieren des Webservers in den RcloneView-Einstellungen
- Konfigurieren von Port, Benutzername und Passwort
- Zugriff auf das Web-Frontend über einen Browser
- Zulassen des Remote-Zugriffs von anderen Geräten in Ihrem Netzwerk

---

## Was ist das Web-Frontend?

Das Web-Frontend ist eine browserbasierte Oberfläche für RcloneView, die das Erlebnis der Desktop-App widerspiegelt. Sobald der integrierte Webserver läuft, können Sie einen Browser öffnen und über eine vertraute Benutzeroberfläche mit RcloneView interagieren, die Folgendes umfasst:

- **Explorer** — lokalen und Remote-Speicher durchsuchen
- **Jobs** — Synchronisations-/Kopierjobs anzeigen und verwalten
- **Remotes** — Remote-Verbindungen verwalten
- **Einstellungen** — RcloneView-Optionen konfigurieren

Dies ist nützlich, wenn Sie Übertragungen von einem anderen Gerät im selben Netzwerk verwalten möchten oder einfach einen browserbasierten Workflow bevorzugen.

---

## Voraussetzungen

- RcloneView installiert und ausgeführt (Desktop)
- Ein moderner Webbrowser (Chrome, Firefox, Safari, Edge usw.)
- Für Remote-Zugriff: Geräte im selben lokalen Netzwerk

---

## Schritt 1: Webserver-Einstellungen öffnen

1. Starten Sie **RcloneView**.
2. Gehen Sie zu **Einstellungen** > **Netzwerk & Sonstiges**.
3. Suchen Sie den Abschnitt **Webserver** (markiert als **Beta**).

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## Schritt 2: Webserver konfigurieren

Konfigurieren Sie im Abschnitt **Webserver** Folgendes:

- **Port**: Die Portnummer für den Webserver (Standard: `8580`). Ändern Sie dies, wenn der Standardport mit einem anderen Dienst kollidiert.
- **Benutzername**: Legen Sie einen Benutzernamen für die Authentifizierung fest (z. B. `admin`).
- **Passwort**: Legen Sie ein Passwort fest, um den Zugriff auf das Web-Frontend zu schützen.

---

## Schritt 3: Webserver aktivieren

1. Schalten Sie **Webserver aktivieren** auf **Ein**.
2. Der Status ändert sich von **Gestoppt** zu **Läuft auf Port 8580** (oder Ihrem konfigurierten Port).
3. Es erscheint eine Schaltfläche **Server neu starten**, die Sie nach Änderungen an den Einstellungen verwenden können.

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## Schritt 4: Auf das Web-Frontend zugreifen

1. Öffnen Sie einen Webbrowser auf demselben Computer.
2. Navigieren Sie zu `http://localhost:8580` (oder dem von Ihnen konfigurierten Port).
3. Der RcloneView-Anmeldebildschirm wird angezeigt. Geben Sie den **Benutzernamen** und das **Passwort** ein, die Sie in Schritt 2 konfiguriert haben, und klicken Sie dann auf **Anmelden**.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. Das RcloneView-Web-Frontend wird mit der vollständigen Oberfläche geladen — Explorer, Jobs, Remotes und Einstellungen sind alle über die linke Seitenleiste zugänglich.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## Schritt 5: Remote-Zugriff zulassen (Optional)

Standardmäßig akzeptiert der Webserver nur Verbindungen von **localhost (127.0.0.1)**. Um von anderen Geräten in Ihrem Netzwerk auf RcloneView zuzugreifen:

1. Schalten Sie **Remote-Zugriff zulassen** auf **Ein**.
2. Klicken Sie auf **Server neu starten**, um die Änderung zu übernehmen.
3. Öffnen Sie auf einem anderen Gerät einen Browser und navigieren Sie zu `http://<ihre-computer-ip>:8580`.

> **Sicherheitshinweis:** Durch Aktivieren des Remote-Zugriffs kann jedes Gerät in Ihrem Netzwerk auf das Web-Frontend zugreifen. Verwenden Sie immer einen starken Benutzernamen und ein sicheres Passwort, um den Zugriff zu schützen.

---

## Zusammenfassung

Das RcloneView-Web-Frontend bietet Ihnen browserbasierten Zugriff auf alle Kernfunktionen:

- Aktivieren Sie den Webserver unter **Einstellungen > Netzwerk & Sonstiges**
- Legen Sie einen Port, Benutzernamen und ein Passwort für sicheren Zugriff fest
- Greifen Sie unter `http://localhost:8580` auf die vollständige Benutzeroberfläche zu
- Aktivieren Sie optional den Remote-Zugriff für andere Geräte in Ihrem Netzwerk

Lassen Sie RcloneView im Hintergrund laufen und verwalten Sie Ihren Cloud-Speicher von jedem Browser aus.
