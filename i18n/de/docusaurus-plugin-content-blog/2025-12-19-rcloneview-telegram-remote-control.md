---
slug: rcloneview-telegram-remote-control
title: "RcloneView Telegram-Fernsteuerung: Cloud-Jobs vom Smartphone aus verwalten"
authors:
  - tayson
description: "Erhalten Sie sofortige Job-Benachrichtigungen und starten, stoppen oder überprüfen Sie RcloneView-Jobs direkt aus Telegram heraus mit einem sicheren Bot und wenigen einfachen Befehlen."
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Telegram-Fernsteuerung: Cloud-Jobs vom Smartphone aus verwalten

> Verwandeln Sie RcloneView in eine ChatOps-Konsole: Erhalten Sie Job-Benachrichtigungen, listen Sie Jobs auf und starten oder stoppen Sie sie über Telegram – auch wenn Sie nicht am PC sind.

Mit der Telegram-Fernsteuerung sendet RcloneView Benachrichtigungen über Job-Start, -Abschluss und -Fehler an Ihr Smartphone und akzeptiert einfache Chat-Befehle, um Jobs auszuführen oder zu stoppen. Perfekt für lange Backups, nächtliche Synchronisationen oder Headless-Server, bei denen Sie dennoch schnellen Zugriff behalten möchten.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Was Sie über Telegram tun können

- Benachrichtigungen erhalten: Job gestartet, Job abgeschlossen, Job-Fehler.
- Verfügbare Jobs auflisten.
- Jobs nach Name oder Index starten.
- Laufende Jobs stoppen.
- Job-Fortschritt und -Status jederzeit prüfen.

RcloneView muss laufen (Desktop oder Headless), um Telegram-Befehle zu verarbeiten.

## Voraussetzungen

- RcloneView installiert und aktiv.
- Ein Telegram-Konto.
- Internetverbindung.
- Berechtigung zum Erstellen eines Telegram-Bots (über BotFather).

## Erstellen Sie Ihren Telegram-Bot (BotFather)

1. Öffnen Sie Telegram, suchen Sie nach **BotFather** und öffnen Sie den Chat.  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. Erstellen Sie den Bot: Legen Sie einen **Bot-Namen** und einen **Bot-Benutzernamen** fest, der mit `bot` endet.  
   Beispiel: `RcloneView_test_bot` / `rcloneview_test_bot`.  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. Kopieren Sie das von BotFather angezeigte **Bot-Token**. Halten Sie es geheim – RcloneView benötigt es für die Einrichtung.  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## Starten Sie Ihren Bot (wichtig)

Sie müssen den Bot einmal starten, damit Telegram Ihre Chat-Updates zurückliefern kann.

1. Suchen Sie Ihren Bot nach Name oder Benutzername und öffnen Sie den Chat.  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. Tippen Sie auf **Start** (oder senden Sie `/start`) und schicken Sie danach noch eine Nachricht (zum Beispiel `hi`).  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## Finden Sie Ihre Telegram-Chat-ID

1. Öffnen Sie in einem Browser:  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. Notieren Sie sich in der JSON-Antwort die Nummer bei `chat.id` (Beispiel: `987654321`). Das ist Ihre Chat-ID.  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution Tokens vertraulich behandeln
Behandeln Sie das Bot-Token und die Chat-ID wie Passwörter. Nur die konfigurierte Chat-ID darf Jobs steuern.
:::

## Telegram-Fernsteuerung in RcloneView aktivieren

1. Öffnen Sie **Einstellungen -> Schnittstellen & Benachrichtigungen**.
2. Aktivieren Sie **Telegram-Fernsteuerung**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. Geben Sie Ihr **Bot-Token** und Ihre **Chat-ID** ein.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. Klicken Sie auf **Testnachricht senden**. Sie sollten Folgendes erhalten: `RcloneView Telegram Test Message`.  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## Befehlsübersicht (ChatOps für Jobs)

Verwenden Sie diese Befehle im Bot-Chat:

- `/help` - Zeigt alle Befehle an.  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - Listet Jobs für die aktuelle Verbindung auf.  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - Startet einen Job anhand seines exakten Namens.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>` (empfohlen) - Startet anhand des Listenindex aus dem letzten `/listjobs`.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - Stoppt einen laufenden Job.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - Prüft Fortschritt und übertragene Größe.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## Warum das für die Automatisierung wichtig ist

- Nächtliche oder lange Übertragungen: Werden Sie benachrichtigt und starten Sie neu oder stoppen Sie, ohne sich per VPN in den Rechner einzuwählen.
- Geplante Backups: Bestätigen Sie Erfolg oder Fehlschlag sofort und starten Sie sie vom Smartphone aus erneut.
- Multi-Cloud-Jobs: Behalten Sie eine einheitliche Kontrollzentrale, auch wenn Sie nicht an der Konsole sind.
- Schnellere Reaktion auf Vorfälle: Stoppen Sie außer Kontrolle geratene Jobs, planen Sie neu oder wechseln Sie schnell zu einem anderen Preset.

## Sicherheitstipps

- Nur die konfigurierte Chat-ID kann Befehle ausführen.
- Erneuern Sie Ihr Bot-Token, falls es jemals offengelegt wurde.
- Deaktivieren Sie die Telegram-Fernsteuerung in den Einstellungen, wenn Sie vorübergehend keine Fernbefehle benötigen.

## Verwandte Ressourcen

- [Telegram-Fernsteuerung verwenden (Tutorial)](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [Jobs erstellen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Das integrierte Terminal verwenden](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## Fazit

Telegram macht aus RcloneView eine mobile Kommandozentrale: Sie bleiben informiert, können Jobs sofort starten oder stoppen und reagieren schneller auf Fehler. Richten Sie es einmal ein, halten Sie das Token sicher und führen Sie Ihre Cloud-Automatisierungen mit Vertrauen durch – auch wenn Sie nicht am Schreibtisch sind.

<CloudSupportGrid />
