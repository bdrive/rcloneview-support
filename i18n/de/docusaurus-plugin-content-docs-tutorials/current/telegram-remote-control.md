---
sidebar_position: 9
description: "Nutzen Sie die Telegram-Fernsteuerung in RcloneView, um Job-Benachrichtigungen zu erhalten und Jobs von Telegram aus per Fernzugriff aufzulisten, zu starten, zu stoppen und ihren Status zu prüfen."
keywords:
  - rcloneview
  - telegram fernsteuerung
  - telegram bot
  - job-benachrichtigungen
  - fernsteuerung von jobs
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# RcloneView Telegram-Fernsteuerung

Mit der Telegram-Fernsteuerung können Sie RcloneView-Job-Benachrichtigungen erhalten und Jobs direkt von Telegram aus steuern — ohne vor Ihrem PC zu sitzen.

Dieses Tutorial behandelt:

- Erstellen eines Telegram-Bots (BotFather)
- Ermitteln Ihrer Telegram-Chat-ID
- Aktivieren der Telegram-Fernsteuerung in RcloneView
- Verwenden von Telegram-Befehlen zum Auflisten/Starten/Stoppen von Jobs und Prüfen des Status
- Praktische Beispiele und Sicherheitshinweise

---

## Was ist die Telegram-Fernsteuerung?

Die Telegram-Fernsteuerung ist eine integrierte RcloneView-Funktion, mit der Sie:

- Benachrichtigungen über Start/Abschluss/Fehler von Jobs erhalten
- Jobs auflisten
- einen Job per Fernzugriff starten
- einen laufenden Job stoppen
- Job-Fortschritt/-Status prüfen

Solange RcloneView läuft, können Sie Jobs allein mit Ihrem Smartphone verwalten.

---

## Voraussetzungen

- RcloneView installiert und in Betrieb
- Ein Telegram-Konto
- Internetverbindung
- Berechtigung zum Erstellen eines Telegram-Bots (über BotFather)

---

## Schritt 1 Einen Telegram-Bot erstellen (BotFather)

### Schritt 1-1 BotFather öffnen

1. Öffnen Sie Telegram.
2. Suchen Sie nach **BotFather**.
3. Öffnen Sie den BotFather-Chat.

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### Schritt 1-2 Einen neuen Bot erstellen

Verwenden Sie BotFather, um einen neuen Bot zu erstellen, und legen Sie fest:

- **Bot-Name** (Anzeigename)
- **Bot-Benutzername** (muss auf `bot` enden)

Beispiel:

- Bot-Name: `RcloneView_test_bot`
- Bot-Benutzername: `rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### Schritt 1-3 Ihren Bot-Token speichern (Wichtig)

Nachdem der Bot erstellt wurde, gibt Ihnen BotFather einen Token wie:

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution Halten Sie den Token geheim
Dieser Token wird in den RcloneView-Einstellungen benötigt. Geben Sie ihn nicht öffentlich weiter.
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## Schritt 2 Starten Sie Ihren Bot in Telegram (Wichtig)

Sie müssen einen Chat mit Ihrem Bot beginnen, bevor Sie Ihre Chat-ID über `getUpdates` abrufen können.

### Schritt 2-1 Nach Ihrem Bot suchen

1. Suchen Sie Ihren Bot anhand des Namens oder Benutzernamens.
2. Öffnen Sie den Bot-Chat.

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### Schritt 2-2 Auf Start klicken und eine Nachricht senden

1. Klicken Sie auf **Start** (oder senden Sie `/start`).
2. Senden Sie eine weitere Nachricht (Beispiel: `hi`).

Dadurch wird ein Update-Eintrag erstellt, den Sie später von Telegram auslesen können.

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## Schritt 3 Ihre Telegram-Chat-ID ermitteln

### Schritt 3-1 getUpdates in einem Browser öffnen

Öffnen Sie diese URL (ersetzen Sie sie durch Ihren Token):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### Schritt 3-2 `chat.id` extrahieren

Suchen Sie in der JSON-Antwort nach:

```json
"chat": {
  "id": 987654321
}
```

Ihre **Chat-ID** ist die Zahl in `chat.id` (Beispiel: `987654321`).

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## Schritt 4 Telegram-Fernsteuerung in RcloneView aktivieren

### Schritt 4-1 Einstellungen öffnen

1. Öffnen Sie RcloneView.
2. Gehen Sie zu **Einstellungen**.
3. Wählen Sie **Schnittstellen & Benachrichtigungen**.
4. Suchen Sie **Telegram-Fernsteuerung**.

### Schritt 4-2 Aktivieren

Aktivieren Sie **Telegram-Fernsteuerung**:

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### Schritt 4-3 Token und Chat-ID eingeben

- **Telegram-Bot-Token**: von BotFather
- **Telegram-Chat-ID**: von `getUpdates`

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### Schritt 4-4 Eine Testnachricht senden

Klicken Sie auf **Testnachricht senden**. Wenn es funktioniert, erhalten Sie:
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## Schritt 5 Telegram-Befehle (Job-Steuerung)

Geben Sie diese Befehle in Ihrem Telegram-Chat mit dem Bot ein.

### `/help`

Zeigt alle verfügbaren Befehle:

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

Listet die Jobs für die aktuell ausgewählte Verbindung auf:

```
/listjobs
```

Beispielausgabe:

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

Startet einen Job anhand des Namens:

```
/start Backup_Photos
```

:::note Der Job-Name muss exakt übereinstimmen
Verwenden Sie `/listjobs`, um den genauen Job-Namen zu kopieren.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>` (Empfohlen)

Startet einen Job anhand seiner Nummer aus dem letzten `/listjobs`-Ergebnis:

```
/start #2
```

:::important Führen Sie zuerst `/listjobs` aus
Die Nummer basiert auf der aktuellen Job-Listen-Ausgabe.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

Stoppt einen laufenden Job:

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

Zeigt den Fortschritt eines laufenden Jobs an:

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## Automatische Job-Benachrichtigungen

Wenn die Telegram-Fernsteuerung aktiviert ist, kann RcloneView automatisch Benachrichtigungen senden für:

- Job gestartet
- Job erfolgreich abgeschlossen
- Job mit Fehler fehlgeschlagen

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## Sicherheitshinweise

- Befehle werden nur von der konfigurierten **Chat-ID** verarbeitet.
- Halten Sie Ihren **Bot-Token** privat. Behandeln Sie ihn wie ein Passwort.
- Wenn Sie die Fernsteuerung pausieren möchten, schalten Sie den Schalter in den Einstellungen aus.

---

## Zusammenfassung

Die Telegram-Fernsteuerung erleichtert die Bedienung von RcloneView bei lang laufenden Jobs:

- Jobs per Fernzugriff verwalten
- Mit Echtzeit-Benachrichtigungen informiert bleiben
- Jobs mobil steuern, ohne Ihren PC zu öffnen

Probieren Sie es aus, wenn Sie geplante Backups, Synchronisationen oder große Übertragungen ausführen und überall Einsicht haben möchten.
