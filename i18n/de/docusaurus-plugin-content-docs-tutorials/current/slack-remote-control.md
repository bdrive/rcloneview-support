---

sidebar_position: 10
description: Verwenden Sie die Slack-Fernsteuerung in RcloneView, um Job-Benachrichtigungen zu erhalten und Jobs von Slack aus aufzulisten, zu starten, zu stoppen und den Status zu überprüfen.
keywords:
  - rcloneview
  - slack remote control
  - slack bot
  - job notifications
  - remote job control
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Slack
  - Remote-Control
  - Job-Management
date: 2026-01-19
author: steve

---

# RcloneView Slack-Fernsteuerung

Mit der Slack-Fernsteuerung können Sie RcloneView-Job-Benachrichtigungen empfangen und Jobs direkt aus Slack steuern — ganz ohne vor dem PC zu sitzen.

Dieses Tutorial behandelt:

* Erstellen einer Slack-App (mittels App-Manifest)
* Ausstellen der erforderlichen Tokens (App-Token und Bot-Token)
* Auffinden Ihrer Slack-Mitglieds-ID
* Aktivieren der Slack-Fernsteuerung in RcloneView
* Verwenden von Slack-Befehlen zum Auflisten, Starten und Stoppen von Jobs sowie zur Statusabfrage

---

## Was ist die Slack-Fernsteuerung?

Die Slack-Fernsteuerung ist eine integrierte RcloneView-Funktion, mit der Sie:

* Echtzeit-Benachrichtigungen für Job-Start, Abschluss und Fehler erhalten
* registrierte Jobs auflisten
* einen Job aus der Ferne starten
* einen laufenden Job stoppen
* Job-Fortschritt und -Status bei Bedarf überprüfen

Solange RcloneView läuft, können Sie Ihre Cloud-Jobs allein über Ihre mobile Slack-App verwalten.

---

## Voraussetzungen

* RcloneView installiert und ausgeführt (Desktop oder Headless)
* Ein Slack-Konto und ein Workspace
* Internetverbindung

---

## Schritt 1: Eine Slack-App erstellen (App-Manifest)

Für die schnellste und genaueste Einrichtung verwenden wir die Methode "App-Manifest", um Ihren Bot zu erstellen.

### 1-1 Slack-API-Dashboard öffnen

1. Gehen Sie zum [Slack-API-Dashboard](https://api.slack.com/apps).
2. Klicken Sie auf die Schaltfläche **Create New App**.

### 1-2 Mit Manifest erstellen

1. Wählen Sie die Option **From an app manifest**.
2. Wählen Sie den **Workspace**, in dem Sie die App installieren möchten.
3. Wählen Sie den Tab **JSON** und fügen Sie den folgenden Konfigurationscode ein:

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
                "description": "Starts a job (Enter number or name)",
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

4. Klicken Sie auf **Next** und dann auf **Create**, um den Vorgang abzuschließen.

---

## Schritt 2: Tokens ausstellen und speichern

RcloneView benötigt zwei Arten von Tokens. **Behandeln Sie diese wie Passwörter.**

### 2-1 App-Token ausstellen (für den Socket-Mode)

1. Klicken Sie im linken Menü auf **Basic Information**.
2. Klicken Sie im Abschnitt **App-Level Tokens** auf **Generate Token and Scopes**.
3. Benennen Sie den Token `RcloneView`, fügen Sie den Scope `connections:write` hinzu und generieren Sie ihn.
4. Speichern Sie den Token, der mit **`xapp-`** beginnt.

### 2-2 Bot-Token abrufen

1. Klicken Sie im linken Menü auf **Install App**.
2. Klicken Sie auf **Install to Workspace** und dann auf **Allow**.
3. Kopieren Sie das **Bot User OAuth Token**, das mit **`xoxb-`** beginnt.

---

### Schritt 3: Nachrichten-Tab aktivieren

1. Klicken Sie im linken Menü auf **App Home**.
2. Schalten Sie `Messages Tab` ein.
3. Aktivieren Sie `Allow users to send Slash commands and messages from the messages tab`.

Dadurch können Sie Slash-Befehle direkt an Ihren Bot senden.

---

## Schritt 4: Ihre Slack-Mitglieds-ID finden

Der Bot benötigt Ihre eindeutige ID, um zu wissen, welcher Benutzer Benachrichtigungen erhalten soll.

1. Öffnen Sie Slack, klicken Sie auf Ihr **Profilbild** und wählen Sie **Profile**.
2. Klicken Sie auf die Schaltfläche **More(···)** und wählen Sie **Copy member ID**.
3. Speichern Sie die ID (z. B. `U1234567890`).
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />

---

## Schritt 5: Slack-Fernsteuerung in RcloneView aktivieren

### 5-1 Einstellungen öffnen

1. Starten Sie RcloneView.
2. Gehen Sie zu **Settings** -> **Interfaces & Notifications**.

### 5-2 Zugangsdaten eingeben

1. Schalten Sie **Slack Remote Control** ein.
2. Geben Sie Ihre Tokens und Ihre ID ein:
* **Slack App Token**: `xapp-...`
* **Slack Bot Token**: `xoxb-...`
* **My Member ID**: `U...`

### 5-3 Testnachricht senden

Klicken Sie auf **Send Test Message**. Bei Erfolg erhalten Sie eine Nachricht auf Ihrem Telefon.

---

## Schritt 6: Slack-Befehle (Job-Steuerung)

Geben Sie diese Befehle in jedem Chat ein, in dem der Bot installiert ist.

### `/help`

Zeigt alle verfügbaren Befehle an.

### `/joblist`

Listet die Jobs für die aktuell ausgewählte Verbindung auf.

### `/start <jobName>`

Startet einen bestimmten Job anhand seines Namens.

### `/start #<number>` (Empfohlen)

Startet einen Job anhand des Index aus dem letzten `/joblist`-Ergebnis (z. B. `/start #1`).

### `/stop <JobId>`

Stoppt einen laufenden Job.

### `/jobstatus <JobId>`

Überprüft den Echtzeit-Fortschritt und die Statistiken eines bestimmten Jobs.

---

## Automatische Job-Benachrichtigungen

Nach der Aktivierung sendet RcloneView automatisch Benachrichtigungen für:

* Job gestartet
* Job erfolgreich abgeschlossen
* Job mit Fehler fehlgeschlagen

---

## Sicherheitshinweise

* Befehle werden nur verarbeitet, wenn sie von der konfigurierten **Member ID** stammen.
* Halten Sie Ihr **App Token** und **Bot Token** geheim.
* Wenn Sie die Fernsteuerung pausieren möchten, schalten Sie einfach den Schalter in den Einstellungen aus.

---

## Zusammenfassung

Die Slack-Fernsteuerung macht die Verwaltung lang laufender Cloud-Aufgaben deutlich effizienter:

* Job-Verwaltung aus der Ferne, unabhängig vom Standort
* Echtzeit-Statusaktualisierungen durch Benachrichtigungen
* Sofortige Steuerung per Mobilgerät ohne PC

Richten Sie es einmal ein und genießen Sie noch heute eine intelligentere Cloud-Automatisierungsumgebung!
