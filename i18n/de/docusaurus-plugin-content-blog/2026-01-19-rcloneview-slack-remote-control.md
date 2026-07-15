---
slug: rcloneview-slack-remote-control
title: "RcloneView Slack-Fernsteuerung: Cloud-Jobs vom Smartphone verwalten"
authors:
  - steve
description: "Erhalten Sie sofortige Job-Benachrichtigungen und starten, stoppen oder überprüfen Sie RcloneView-Jobs direkt aus Slack mit einer sicheren App und einfachen Slash-Befehlen."
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Slack-Fernsteuerung: Cloud-Jobs vom Smartphone verwalten

> Verwandeln Sie RcloneView in eine ChatOps-Konsole: Erhalten Sie Job-Benachrichtigungen, listen Sie Jobs auf und starten oder stoppen Sie sie über Slack – auch wenn Sie nicht an Ihrem PC sind.

Mit der Slack-Fernsteuerung sendet RcloneView Benachrichtigungen über Jobstart, -abschluss und -fehler an Ihr Smartphone und akzeptiert einfache Slash-Befehle, um Jobs auszuführen oder zu stoppen. Perfekt für lange Backups, nächtliche Synchronisationen oder Remote-Server, bei denen Sie dennoch eine schnelle mobile Kontrolle wünschen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was Sie über Slack tun können

- **Echtzeit-Benachrichtigungen**: Werden Sie sofort benachrichtigt, wenn ein Job startet, abgeschlossen wird oder auf einen Fehler stößt.
- **Jobs auflisten**: Sehen Sie alle Ihre registrierten RcloneView-Jobs in einer übersichtlichen Liste.
- **Job-Fernsteuerung**: Starten Sie Jobs nach Name oder Index (#N) oder stoppen Sie sie sofort.
- **Status auf Abruf**: Überprüfen Sie jederzeit Fortschritt, Übertragungsgeschwindigkeit und die geschätzte verbleibende Zeit.

*Hinweis: RcloneView muss auf Ihrem PC oder Server laufen, um Slack-Befehle zu verarbeiten.*

## Voraussetzungen

- RcloneView installiert und laufend (Desktop oder Headless).
- Ein Slack-Konto und Ihr eigener Workspace.
- Internetverbindung.

---

## Schritt 1: Erstellen Sie Ihre Slack-App (mit Manifest)

Für maximale Sicherheit verwendet RcloneView einen „Private App“-Ansatz, bei dem Sie Ihren eigenen Bot erstellen. Dadurch werden Ihre Daten niemals über Server Dritter geleitet – sie gehen direkt von Ihrem PC an Slack.

1. Gehen Sie zum [Slack API Dashboard](https://api.slack.com/apps) und klicken Sie auf **[Create New App]**.
   
2. Wählen Sie **[From a manifest]**.
   
3. Wählen Sie den **Workspace**, in dem Sie die App installieren möchten, und klicken Sie auf **[Next]**.
4. Wählen Sie den Tab **[JSON]**, löschen Sie den vorhandenen Inhalt und fügen Sie den folgenden Code ein:

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Start a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

5. Klicken Sie auf **[Next]** und dann auf **[Create]**, um die Erstellung Ihrer App abzuschließen.

---

## Schritt 2: Holen Sie sich Ihre Tokens

Sie benötigen zwei Arten von Tokens für die RcloneView-Einrichtung. **Behandeln Sie diese wie Passwörter und teilen Sie sie niemals mit anderen.**

### ① App-Token abrufen (für Socket Mode)

1. Gehen Sie im linken Menü zu **[Basic Information]**.
2. Scrollen Sie nach unten zum Abschnitt **[App-Level Tokens]** und klicken Sie auf **[Generate Token and Scopes]**.
3. Setzen Sie den Namen auf `RcloneView`, klicken Sie auf **[Add Scope]**, wählen Sie `connections:write` und klicken Sie dann auf **[Generate]**.
4. Kopieren Sie das Token, das mit `xapp-...` beginnt, und speichern Sie es.

### ② Bot-Token abrufen (für Nachrichten)

1. Gehen Sie im linken Menü zu **[Install App]**.
2. Klicken Sie auf die grüne Schaltfläche **[Install to Workspace]** und dann auf **[Allow]**.
3. Kopieren Sie das **Bot User OAuth Token**, das mit `xoxb-...` beginnt, und speichern Sie es.

---

### Schritt 3: Nachrichten-Tab aktivieren

1. Klicken Sie im linken Menü auf **App Home**.
2. Aktivieren Sie `Messages Tab`.
3. Aktivieren Sie `Allow users to send Slash commands and messages from the messages tab`.

Dadurch können Sie Slash-Befehle direkt an Ihren Bot senden.

---

## Schritt 4: Finden Sie Ihre Member-ID

Der Bot benötigt Ihre eindeutige ID, um zu wissen, an welchen Benutzer Benachrichtigungen (DM) gesendet werden sollen.

1. Öffnen Sie Ihre Slack-App, klicken Sie auf Ihr Profilbild und wählen Sie **[Profile]**.
2. Klicken Sie auf die Schaltfläche **[More (···)]**.
3. Wählen Sie unten im Menü **[Copy member ID]**. (Beispiel: `U1234567890`)
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## Schritt 5: Slack-Steuerung in RcloneView aktivieren

1. Öffnen Sie RcloneView und gehen Sie zu **Settings -> Interfaces & Notifications**.
2. Aktivieren Sie den Schalter **Slack Remote Control**.
3. Geben Sie Ihr **App Token**, **Bot Token** und Ihre **Member ID** in die entsprechenden Felder ein.
4. Klicken Sie auf **[Send Test Message]**, um zu überprüfen, ob Sie eine Nachricht auf Ihrem Smartphone erhalten.

---

## ⌨️ Befehlsübersicht (ChatOps)

Geben Sie diese Befehle in jedem Chat ein, in dem der Bot vorhanden ist:

* `/help` - Zeigt alle verfügbaren Befehle an.
* `/joblist` - Listet alle registrierten Jobs für die aktuelle Verbindung auf.
* `/start <jobName>` - Startet einen Job anhand seines genauen Namens.
* `/start #<number>` - Startet einen Job anhand seines Index aus `/joblist` (z. B. `/start #1`).
* `/stop <JobId>` - Stoppt einen laufenden Job anhand seiner Job-ID.
* `/jobstatus <JobId>` - Überprüft Echtzeit-Fortschritt und Statistiken für einen bestimmten Job.

---

## Sicherheits- und Verwaltungstipps

* **Benutzeridentifikation**: Nur die konfigurierte Member-ID ist berechtigt, Befehle auszuführen.
* **Token-Rotation**: Falls Ihre Tokens jemals offengelegt werden, gehen Sie sofort zur Slack-API-Seite und klicken Sie auf `Regenerate`.
* **Offline-Status**: Wenn RcloneView nicht läuft, antwortet der Slack-Bot nicht auf Befehle.

## Weiterführende Ressourcen

* [RcloneView Basisanleitung](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [Job-Planung und Automatisierung](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [Echtzeit-Übertragungsüberwachung](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Fazit

Slack verwandelt RcloneView in eine mobile Kommandozentrale: Sie bleiben informiert, können Jobs sofort starten oder stoppen und reagieren schneller auf Fehler. Richten Sie es einmal ein, bewahren Sie die Tokens sicher auf und verwalten Sie Ihre Cloud-Automatisierung mit Zuversicht, selbst wenn Sie nicht an Ihrem Schreibtisch sind.

<CloudSupportGrid />
