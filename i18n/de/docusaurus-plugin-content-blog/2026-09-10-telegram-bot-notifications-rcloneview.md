---
slug: telegram-bot-notifications-rcloneview
title: "Telegram-Bot-Benachrichtigungen — Live-Cloud-Sync-Alarme in RcloneView"
authors:
  - casey
description: "Richten Sie Telegram-Bot-Benachrichtigungen in RcloneView ein, um sofortige Statusmeldungen für Cloud-Synchronisations-, Backup- und Übertragungsaufgaben auf Ihrem Smartphone zu erhalten."
keywords:
  - rcloneview telegram
  - telegram-bot-benachrichtigungen
  - cloud-sync-alarme
  - rclone telegram integration
  - benachrichtigung bei auftragsabschluss
  - mobile cloud-sync-alarme
  - telegram chat-id einrichten
  - benachrichtigungen für hintergrund-synchronisation
  - überwachung von remote-aufträgen
  - cloud-backup-alarme
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Telegram-Bot-Benachrichtigungen — Live-Cloud-Sync-Alarme in RcloneView

> Hören Sie auf, zum Desktop zurückzuwechseln, um eine Übertragung zu prüfen — lassen Sie sich per Telegram-Nachricht mitteilen, sobald ein Cloud-Sync-Auftrag fertig ist, fehlschlägt oder Ihre Aufmerksamkeit braucht.

Langlaufende Cloud-Aufträge sind nur selten fertig, während Sie vor dem Bildschirm sitzen. Ein mehrere hundert Gigabyte großes Backup zu Backblaze B2 läuft vielleicht über Nacht; eine geplante Synchronisation zwischen zwei Remotes könnte anspringen, während Sie unterwegs sind. **RcloneView** enthält eine Telegram-Bot-Integration in seinen Notification & Remote Control-Einstellungen, sodass Statusmeldungen zu Aufträgen genau in dem Moment auf Ihrem Smartphone landen, in dem etwas passiert — ohne dass Sie selbst nachsehen müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Telegram besser ist als manuelles Nachsehen

Desktop-Popups sind nützlich, solange Sie an Ihrem Rechner sitzen, verschwinden aber, sobald Sie aufstehen. Telegram-Benachrichtigungen lösen ein anderes Problem: Sie folgen Ihnen. Ob Sie vom Schreibtisch weg sind, unterwegs oder einfach in einer anderen App auf einem anderen Gerät arbeiten — eine Telegram-Nachricht kommt genauso an wie eine SMS.

Das zählt am meisten bei unbeaufsichtigten Abläufen — nächtlichen Backups, geplanten Synchronisationen zwischen einem NAS und Cloud-Speicher oder großen einmaligen Migrationen, die Sie vor Verlassen des Büros gestartet haben. Anders als reine Mount-Tools synchronisiert und vergleicht RcloneView Ordner bereits in der FREE-Lizenz, und in Kombination mit einem mobilen Benachrichtigungskanal können Sie sich darauf verlassen, dass Hintergrundaufträge ohne ständige Überwachung laufen.

<img src="/support/images/en/blog/new-remote.png" alt="Remote- und Auftragskonfiguration in RcloneView" class="img-large img-center" />

## Den Telegram-Bot in RcloneView einrichten

Damit Benachrichtigungen ankommen, brauchen Sie zwei Angaben: ein Bot-Token und eine Chat-ID.

1. **Bot erstellen.** Schreiben Sie in Telegram eine Nachricht an `@BotFather`, führen Sie `/newbot` aus und folgen Sie den Anweisungen. BotFather gibt Ihnen ein Bot-Token zurück — kopieren Sie es.
2. **Chat-ID ermitteln.** Senden Sie Ihrem neuen Bot eine beliebige Nachricht und prüfen Sie dann den Update-Feed des Bots (oder nutzen Sie einen kleinen Hilfsbot wie `@getidsbot`), um Ihre numerische Chat-ID zu finden.
3. **Beide Werte in RcloneView eintragen.** Öffnen Sie den Settings-Tab > Notification & Remote Control, wählen Sie Telegram aus und fügen Sie Bot-Token und Chat-ID ein.
4. **Speichern und testen.** Starten Sie einen Auftrag manuell, um zu bestätigen, dass die Nachricht ankommt.

Sobald eingerichtet, postet RcloneView Statusupdates zu Aufträgen — je nach konfiguriertem Trigger bei Abschluss, Fehlschlag oder beidem — direkt in diesen Chat.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einen geplanten Auftrag in RcloneView erstellen" class="img-large img-center" />

## Telegram-Alarme mit geplanten Aufträgen kombinieren

Telegram-Benachrichtigungen entfalten ihren größten Wert in Kombination mit der Auftragsplanung von RcloneView. Richten Sie einen Sync- oder Backup-Auftrag nach einem Crontab-artigen Zeitplan ein, aktivieren Sie den Telegram-Trigger, und der Auftrag wird vollständig eigenständig: Er läuft zur geplanten Zeit, und Sie müssen nur kurz auf Ihr Smartphone schauen, um das Ergebnis zu bestätigen.

Für manuell ausgeführte Aufträge löst derselbe Alarm genau in dem Moment aus, in dem die Übertragung abgeschlossen ist — praktisch für große einmalige Migrationen, bei denen Sie nicht extra einen Browser-Tab oder ein Terminalfenster offen lassen möchten, nur um eine Fortschrittsanzeige zu beobachten.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView-Job-History-Panel mit vergangenen Ausführungen" class="img-large img-center" />

Meldet ein Telegram-Alarm einen Fehlschlag, liefert das Job-History-Panel das vollständige Bild — Fehlerdetails, Übertragungsdauer und wie viele Dateien abgeschlossen wurden, bevor der Auftrag stoppte.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie über `@BotFather` einen Telegram-Bot und notieren Sie sich das Bot-Token.
3. Öffnen Sie Settings > Notification & Remote Control und tragen Sie Ihr Bot-Token und Ihre Chat-ID ein.
4. Verknüpfen Sie die Benachrichtigung mit einem Auftrag — geplant oder einmalig — und führen Sie einen Test durch, um die Zustellung zu bestätigen.

Mit eingerichtetem Telegram wird unbeaufsichtigte Cloud-Synchronisation nicht mehr zum Blindflug, sondern zu etwas, das Sie von überall aus prüfen können.

---

**Weiterführende Anleitungen:**

- [Benachrichtigungen und Alarme für Cloud-Sync in RcloneView einrichten](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Cloud-Sync mit Slack-Benachrichtigungen automatisieren](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)
- [E-Mail-SMTP-Auftragsbenachrichtigungen](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
