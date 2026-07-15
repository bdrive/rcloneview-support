---
sidebar_position: 11
description: Verwenden Sie die Discord-Fernsteuerung in RcloneView, um Job-Benachrichtigungen zu erhalten und Jobs von Discord aus per Remote-Zugriff aufzulisten, zu starten, zu stoppen und ihren Status zu prüfen.
keywords:
  - rcloneview
  - discord fernsteuerung
  - discord bot
  - job-benachrichtigungen
  - remote-job-steuerung
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# RcloneView Discord-Fernsteuerung

Mit der Discord-Fernsteuerung können Sie RcloneView-Job-Benachrichtigungen empfangen und Jobs direkt über Discord steuern — ohne vor Ihrem PC sitzen zu müssen.

Dieses Tutorial behandelt:

- Erstellen einer Discord-Anwendung und eines Bots
- Festlegen des Installationskontexts auf **Guild Install**
- Beschaffen der benötigten IDs (Bot-Token, Anwendungs-ID, Discord-Benutzer-ID)
- Aktivieren der Discord-Fernsteuerung in RcloneView
- Verwenden von Discord-Befehlen zum Auflisten/Starten/Stoppen von Jobs und Prüfen des Status

---

## Was ist die Discord-Fernsteuerung?

Die Discord-Fernsteuerung ist eine integrierte RcloneView-Funktion, mit der Sie:

- Echtzeit-Benachrichtigungen für Job-Start, -Abschluss und -Fehler erhalten
- registrierte Jobs auflisten können
- einen Job per Fernzugriff starten können
- einen laufenden Job stoppen können
- Job-Fortschritt und -Status jederzeit abfragen können

Solange RcloneView läuft, können Sie Ihre Cloud-Jobs von Ihrem Discord-Client aus verwalten.

---

## Voraussetzungen

- RcloneView installiert und ausgeführt (Desktop oder Headless)
- Ein Discord-Konto
- Berechtigung zum Erstellen und Installieren eines Discord-Bots in einem Server (Guild Install)
- Internetverbindung

---

## Schritt 1: Discord-Anwendung und Bot erstellen

### Schritt 1-1 Discord Developer Portal öffnen

1. Rufen Sie das [Discord Developer Portal](https://discord.com/developers/applications) auf.
2. Klicken Sie auf **New Application** und geben Sie einen Namen ein (z. B. `RcloneView`).
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### Schritt 1-2 Installationskontext auf Guild Install setzen

1. Öffnen Sie im linken Menü **Installation**.
2. Wählen Sie unter **Installation Contexts** die Option **Guild Install**. (Deaktivieren Sie User Install, falls aktiviert.)
3. Speichern Sie Ihre Änderungen.
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### Schritt 1-3 Bot hinzufügen und Bot-Token ausstellen

1. Öffnen Sie den Tab **Bot**.
2. Klicken Sie auf **Add Bot** und bestätigen Sie.
3. Klicken Sie auf **Reset Token** (oder **Copy Token**), um Ihren **Discord Bot Token** zu erhalten. Bewahren Sie ihn geheim auf.
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### Schritt 1-4 Bot das Lesen von Nachrichten erlauben (empfohlen)

Wenn Sie Textbefehle (statt Slash-Befehle) senden möchten, aktivieren Sie **MESSAGE CONTENT INTENT** im Bot-Tab, damit RcloneView Ihren Befehlstext in DMs oder Kanälen lesen kann.
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## Schritt 2: Server erstellen und Bot installieren

Um den Bot zu verwenden, benötigen Sie einen Discord-Server (auch „Guild“ genannt), auf dem der Bot laufen kann. Falls Sie noch keinen privaten Server für Ihre RcloneView-Logs haben, folgen Sie den nachstehenden Schritten.

### Schritt 2-1 Neuen Discord-Server erstellen

1. Öffnen Sie Ihre **Discord-App** (Desktop oder Web).
2. Klicken Sie unten links in Ihrer Serverliste auf das **Plus-Symbol (+)** (Server hinzufügen).
3. Wählen Sie **Create My Own**.
4. Wählen Sie **For me and my friends**.
5. Geben Sie Ihrem Server einen Namen (z. B. `RcloneView Control Center`) und klicken Sie auf **Create**.
   

### Schritt 2-2 Bot auf Ihrem Server installieren

1. Kehren Sie zum **Discord Developer Portal** zurück.
2. Öffnen Sie **OAuth2 > URL Generator**.
3. Wählen Sie die Scopes **bot** und **applications.commands** aus.
4. Wählen Sie unter **Bot Permissions** die Optionen **Send Messages**, **Use Slash Commands** und **Attach Files** (falls Sie Log-Dateien empfangen möchten).
5. Kopieren Sie die unten generierte URL und fügen Sie sie in Ihren Browser ein.
6. Wählen Sie den soeben erstellten Server (z. B. `RcloneView Control Center`) aus und klicken Sie auf **Authorize**.

---

## Schritt 3: Die von RcloneView benötigten Werte erfassen

- **Discord Bot Token**: Aus dem Tab **Bot** (Schritt 1-3).
- **Discord Application ID**: Aus **General Information** im Developer Portal.
- **My Discord User ID (Snowflake)**: Eine lange Zahl, die Sie eindeutig identifiziert.

### So erhalten Sie Ihre Discord-Benutzer-ID

Um Ihre `Discord User ID` zu erhalten, aktivieren Sie zunächst den Entwicklermodus:

1. Öffnen Sie Discord (Desktop oder Web).
2. Klicken Sie unten links auf **User Settings** (⚙️).
3. Öffnen Sie unter **App Settings** den Punkt **Advanced**.
4. Schalten Sie **Developer Mode** auf **On**.

Kopieren Sie anschließend Ihre ID:

1. Klicken Sie mit der rechten Maustaste auf Ihr **Profilbild** oder Ihren **Benutzernamen** (unten links oder in einer Chat-/Mitgliederliste).
2. Klicken Sie auf **Copy User ID**.
3. Speichern Sie die lange numerische Zeichenfolge (Beispiel: `123456789012345678`).
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

Warum wird diese ID benötigt?

- Sicherheit: Nur Befehle von Ihrem Konto werden von der Flutter-App verarbeitet.
- Direkte Benachrichtigungen: Der Bot weiß genau, an welchen Benutzer er DMs senden soll, wenn ein Job startet oder fehlschlägt.

---

## Schritt 4: Discord-Fernsteuerung in RcloneView aktivieren

### Schritt 4-1 Einstellungen öffnen

1. Starten Sie RcloneView.
2. Gehen Sie zu **Settings** -> **Interfaces & Notifications**.

### Schritt 4-2 Zugangsdaten eingeben

1. Aktivieren Sie **Discord Remote Control**.
2. Geben Sie ein:
   - **Discord Bot Token**: `...`
   - **Discord Application ID**: Aus **General Information**.
   - **My Discord User ID**: `123456789012345678`

### Schritt 4-3 Testnachricht senden

Klicken Sie auf **Send Test Message**. Bei Erfolg erhalten Sie eine DM vom Bot in Discord.
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## Schritt 5: Discord-Befehle (Job-Steuerung)

Senden Sie Befehle an den Bot (eine DM wird aus Datenschutzgründen empfohlen, Sie können aber auch einen Kanal verwenden, in dem der Bot vorhanden ist und Sie die Berechtigung zur Ausführung haben).

### `/help`

Zeigt alle verfügbaren Befehle an.

### `/joblist`

Listet die Jobs für die aktuell ausgewählte Verbindung auf.

### `/start <jobName>`

Startet einen bestimmten Job anhand seines Namens.

### `/start #<number>` (Empfohlen)

Startet einen Job anhand des Index aus dem letzten `/joblist`-Ergebnis (Beispiel: `/start #1`).

### `/stop <JobId>`

Stoppt einen laufenden Job.

### `/jobstatus <JobId>`

Prüft den Echtzeit-Fortschritt und die Statistiken eines bestimmten Jobs.

---

## Automatische Job-Benachrichtigungen

Nach der Aktivierung sendet RcloneView automatisch Benachrichtigungen für:

- Job gestartet
- Job erfolgreich abgeschlossen
- Job mit Fehler fehlgeschlagen

---

## Sicherheitshinweise

- Befehle werden nur verarbeitet, wenn sie von der konfigurierten **Discord User ID** stammen.
- Halten Sie Ihren **Discord Bot Token** und Ihre **Application ID** geheim.
- Wenn Sie die Fernsteuerung pausieren möchten, schalten Sie einfach den Schalter in den Einstellungen aus.

---

## Zusammenfassung

Mit der Discord-Fernsteuerung können Sie lang laufende Übertragungen steuern, ohne an Ihrem PC zu sitzen:

- Remote-Job-Verwaltung über Discord
- Echtzeit-Statusaktualisierungen durch Benachrichtigungen
- Sofortige Steuerung über mobiles oder Desktop-Discord

Richten Sie es einmal ein und verwalten Sie Ihre Cloud-Automatisierung von überall aus.
