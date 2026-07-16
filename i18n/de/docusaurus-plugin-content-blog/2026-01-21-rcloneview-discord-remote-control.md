---
slug: rcloneview-discord-remote-control
title: "RcloneView Discord Remote Control: Cloud-Jobs von Discord aus verwalten"
authors:
  - steve
description: "Erhalte Job-Benachrichtigungen und führe RcloneView-Befehle von Discord aus mit deinem eigenen sicheren Bot, deiner Application ID und deiner Discord User ID aus."
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Discord Remote Control: Cloud-Jobs von Discord aus verwalten

> Verwandle RcloneView in eine Discord-ChatOps-Konsole: Erhalte Job-Benachrichtigungen, liste Jobs auf und starte oder stoppe sie von Discord aus, ohne deinen PC zu öffnen.

Mit Discord Remote Control sendet RcloneView Benachrichtigungen über Job-Start, -Abschluss und -Fehler an dich und akzeptiert einfache Befehle, um Jobs auszuführen oder zu stoppen. Es eignet sich perfekt für lange Backups, nächtliche Synchronisationen oder Remote-Server, bei denen du dennoch schnelle Kontrolle über Discord auf Desktop oder Mobilgerät haben möchtest.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was du von Discord aus tun kannst

- **Echtzeit-Benachrichtigungen**: Werde sofort benachrichtigt, wenn ein Job startet, abgeschlossen wird oder auf einen Fehler stößt.
- **Jobs auflisten**: Zeige alle deine registrierten RcloneView-Jobs in einer übersichtlichen Liste an.
- **Remote-Job-Steuerung**: Starte Jobs nach Name oder Index (#N) oder stoppe sie sofort.
- **Status auf Abruf**: Überprüfe jederzeit Fortschritt, Übertragungsgeschwindigkeit und geschätzte verbleibende Zeit.

*Hinweis: RcloneView muss auf deinem PC oder Server laufen, um Discord-Befehle zu verarbeiten.*

## Voraussetzungen

- RcloneView installiert und laufend (Desktop oder Headless).
- Ein Discord-Konto.
- Ein Discord-Server, auf dem du einen Bot installieren kannst (Guild Install).
- Internetverbindung.

---

## Schritt 1: Erstelle deine Discord Application und deinen Bot

Für maximale Sicherheit verwendet RcloneView einen „Bring your own bot“-Ansatz. Deine Daten laufen direkt zwischen RcloneView und Discord – ohne Relay durch Dritte.

1. Gehe zum [Discord Developer Portal](https://discord.com/developers/applications) und klicke auf **New Application**. Benenne sie (z. B. `RcloneView`).
2. Öffne **Installation**, wähle **Guild Install** als Installation Context (schalte User Install aus, falls aktiviert) und speichere.
3. Gehe zum Tab **Bot**, klicke auf **Add Bot** und kopiere oder setze dann deinen **Discord Bot Token** zurück. Halte ihn geheim.
4. Falls du reine Textbefehle senden möchtest (nicht nur Slash-Befehle), aktiviere **MESSAGE CONTENT INTENT** im Bot-Tab, damit RcloneView den Befehlstext lesen kann.

---

## Schritt 2: Erstelle einen Server und installiere den Bot

Um den Bot zu nutzen, benötigst du einen Discord-Server (auch „Guild“ genannt), auf dem der Bot existieren kann. Falls du noch keinen privaten Server für deine RcloneView-Logs hast, folge den untenstehenden Schritten.

### Schritt 2-1 Erstelle einen neuen Discord-Server

1. Öffne deine **Discord-App** (Desktop oder Web).
2. Klicke auf das **Plus (+)-Symbol** (Server hinzufügen) unten in deiner Serverliste links.
3. Wähle **Eigenen Server erstellen**.
4. Wähle **Für mich und meine Freunde**.
5. Gib deinem Server einen Namen (z. B. `RcloneView Control Center`) und klicke auf **Erstellen**.
   

### Schritt 2-2 Installiere den Bot auf deinem Server

1. Kehre zum **Discord Developer Portal** zurück.
2. Öffne **OAuth2 > URL Generator**.
3. Wähle die Scopes: **bot** und **applications.commands**.
4. Wähle unter **Bot Permissions** **Send Messages**, **Use Slash Commands** und **Attach Files** (falls du Log-Dateien empfangen möchtest).
5. Kopiere die generierte URL unten und füge sie in deinen Browser ein.
6. Wähle den soeben erstellten Server (z. B. `RcloneView Control Center`) und klicke auf **Authorize**.

---

## Schritt 3: Sammle die von RcloneView benötigten Werte

- **Discord Bot Token**: Aus dem Tab **Bot** (Schritt 1-3).
- **Discord Application ID**: Aus **General Information** im Developer Portal.
- **My Discord User ID (Snowflake)**: Eine lange numerische ID, die dich eindeutig identifiziert.

### So erhältst du deine Discord User ID

1. Öffne in Discord (Desktop oder Web) die **User Settings** (⚙️).
2. Gehe zu **Advanced** und schalte den **Developer Mode** ein.
3. Klicke mit der rechten Maustaste auf dein **Profilbild** oder deinen **Benutzernamen** (unten links oder in einer Mitgliederliste) und wähle **Copy User ID**. Speichere die Nummer (Beispiel: `123456789012345678`).

Warum wird diese ID benötigt?

- **Sicherheit**: Nur Befehle von deinem Konto werden von der App verarbeitet.
- **Direkte Benachrichtigungen**: Der Bot weiß genau, welchen Nutzer er per DM benachrichtigen soll, wenn ein Job startet oder fehlschlägt.

---

## Schritt 4: Aktiviere Discord Control in RcloneView

1. Öffne RcloneView und gehe zu **Settings -> Interfaces & Notifications**.
2. Schalte den Schalter **Discord Remote Control** ein.
3. Gib deinen **Discord Bot Token**, deine **Discord Application ID** und deine **My Discord User ID** in die Felder ein.
4. Klicke auf **Send Test Message**, um zu überprüfen, dass du eine DM vom Bot erhältst.

---

## ⌨️ Befehlsübersicht (ChatOps)

Sende Befehle an den Bot (DM wird aus Datenschutzgründen empfohlen; Channels funktionieren ebenfalls, sofern der Bot Zugriff hat):

- `/help` — Zeigt alle verfügbaren Befehle an.
- `/joblist` — Listet alle registrierten Jobs für die aktuelle Verbindung auf.
- `/start <jobName>` — Startet einen Job anhand seines exakten Namens.
- `/start #<number>` — Startet einen Job anhand seines Index aus `/joblist` (z. B. `/start #1`).
- `/stop <JobId>` — Stoppt einen laufenden Job anhand seiner Job ID.
- `/jobstatus <JobId>` — Überprüft Echtzeit-Fortschritt und Statistiken für einen bestimmten Job.

---

## Tipps zu Sicherheit und Verwaltung

- **Nutzeridentifikation**: Nur die konfigurierte Discord User ID ist zur Ausführung von Befehlen autorisiert.
- **Token-Sicherheit**: Behandle deinen Bot Token und deine Application ID wie Passwörter. Setze sie zurück, falls sie offengelegt wurden.
- **Online-Status**: Wenn RcloneView nicht läuft, reagiert der Discord-Bot nicht auf Befehle.

## Weiterführende Ressourcen

- [RcloneView Basic Guide](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [Job-Planung und Automatisierung](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [Echtzeit-Übertragungsüberwachung](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Fazit

Discord verwandelt RcloneView in eine mobile Kommandozentrale: Du bleibst informiert, kannst Jobs sofort starten oder stoppen und reagierst schneller auf Fehler. Richte es einmal ein, halte die Tokens sicher und verwalte deine Cloud-Automatisierung mit Zuversicht, selbst wenn du nicht an deinem Schreibtisch bist.

<CloudSupportGrid />
