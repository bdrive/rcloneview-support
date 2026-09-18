---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "E-Mail-SMTP-Benachrichtigungen werden nicht gesendet — Fehlerbehebung für RcloneView"
authors:
  - morgan
description: "Beheben Sie fehlgeschlagene RcloneView E-Mail-SMTP-Benachrichtigungen. Lösen Sie Port-Blockaden, Authentifizierungsfehler und falsch konfigurierte Schwellenwerte für Job-Benachrichtigungen."
keywords:
  - RcloneView E-Mail-Benachrichtigungen beheben
  - SMTP-Benachrichtigung wird nicht gesendet
  - RcloneView E-Mail-Benachrichtigungsfehler
  - SMTP-Authentifizierung fehlgeschlagen
  - Fehlerbehebung bei Sync-Job-Benachrichtigungen
  - Port 587 blockiert SMTP
  - Backup-Benachrichtigung nicht erhalten
  - RcloneView PLUS Benachrichtigungen
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# E-Mail-SMTP-Benachrichtigungen werden nicht gesendet — Fehlerbehebung für RcloneView

> Wenn die E-Mail-Benachrichtigungen von RcloneView ausbleiben, liegt die Ursache fast immer in der SMTP-Konfiguration, einer Port-Blockade oder einem zu hoch eingestellten Übertragungsschwellenwert — so diagnostizieren und beheben Sie jedes dieser Probleme.

E-Mail-Benachrichtigungen sind nur nützlich, wenn sie auch tatsächlich ankommen. Wenn ein geplantes Backup unbemerkt fehlschlägt und die Benachrichtigung nie im Posteingang landet, verfehlt die gesamte unbeaufsichtigte Überwachung ihren Zweck. Das SMTP-Benachrichtigungssystem von RcloneView hängt von einigen Einstellungen ab, die leicht falsch konfiguriert werden, und dieser Leitfaden geht die häufigsten Fehlerquellen durch, damit Ihre Job-Benachrichtigungen wieder zuverlässig funktionieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Authentifizierungs- und Hostfehler

Die häufigste Ursache für ausbleibende Benachrichtigungen ist eine falsche SMTP-Authentifizierung. Wenn Ihr E-Mail-Anbieter ein anwendungsspezifisches Passwort verlangt (üblich bei Gmail- und Microsoft-365-Konten mit aktivierter Zwei-Faktor-Authentifizierung), schlägt die Verbindung fehl, wenn Sie Ihr reguläres Kontopasswort eingeben — auch wenn das Feld den Wert ohne offensichtlichen Fehler akzeptiert. Erzeugen Sie stattdessen ein App-Passwort in den Sicherheitseinstellungen Ihres Anbieters.

Überprüfen Sie auch das Feld **SMTP-Host** — ein Tippfehler wie `smtp.gmial.com` oder die Verwendung des IMAP-Hosts anstelle des SMTP-Hosts führt zu einem fehlgeschlagenen Verbindungsaufbau. Verwenden Sie nach der Korrektur der Anmeldedaten immer die Schaltfläche **Test**, bevor Sie sich für echte Jobs auf die Konfiguration verlassen — so lassen sich Authentifizierungsprobleme von Problemen auf Job-Ebene trennen.

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## Port-Blockaden und Netzwerkprobleme

RcloneView empfiehlt **Port 587** mit STARTTLS für die SMTP-Zustellung. Wenn Sie RcloneView in einem Netzwerk mit restriktiven ausgehenden Firewall-Regeln betreiben — üblich in Unternehmensnetzwerken, bei manchen VPS-Anbietern und bestimmten privaten Internetanbietern — kann Port 587 (und besonders Port 25) komplett blockiert sein, sodass die Test-E-Mail in ein Timeout läuft, statt mit einem klaren Fehler zu scheitern.

Wenn der Test durchgängig ein Timeout statt eines Authentifizierungsfehlers liefert, liegt das Problem fast sicher auf Netzwerkebene, nicht bei den Zugangsdaten. Versuchen Sie, auf Port 465 (SSL) zu wechseln, falls Ihr Anbieter das unterstützt, oder lassen Sie von Ihrem Netzwerkadministrator prüfen, ob ausgehender SMTP-Verkehr erlaubt ist. Wenn Sie sich mit einer externen rclone-Instanz auf einem entfernten Server oder in einem Docker-Container verbinden, stellen Sie sicher, dass auch dessen ausgehende Regeln SMTP-Verkehr zulassen, da die Verbindung von dort ausgeht, wo rclone tatsächlich läuft.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## Fehlkonfigurierte Schwellenwerte und Empfänger

Wenn SMTP erfolgreich verbindet und testet, Benachrichtigungen für tatsächliche Jobs aber nie ankommen, prüfen Sie den Benachrichtigungsschwellenwert auf Job-Ebene. RcloneView lässt Sie eine Mindestübertragungsgröße (in MB oder GB) festlegen, bevor eine Benachrichtigung gesendet wird — nützlich, um die Benachrichtigungsmüdigkeit bei häufig laufenden Jobs mit wenig oder keiner Datenbewegung zu reduzieren, bedeutet aber auch, dass ein Job, der nur wenige Dateien überträgt, unter dem Schwellenwert bleiben und gar keine E-Mail erzeugen kann. Setzen Sie den Schwellenwert vorübergehend herab oder entfernen Sie ihn, um dies auszuschließen.

Überprüfen Sie außerdem, ob die Empfängeradressen nicht nur in den globalen SMTP-Einstellungen, sondern auch auf Job-Ebene korrekt eingetragen sind — RcloneView verlangt, dass Benachrichtigungsempfänger pro Job konfiguriert werden, sodass eine global funktionierende SMTP-Verbindung ohne zugewiesene Empfänger für einen bestimmten Job niemals eine Benachrichtigung für diesen Job sendet. E-Mail-Benachrichtigungen sind ein PLUS-Lizenzfeature — wenn SMTP, Empfänger und Schwellenwerte alle stimmen, Benachrichtigungen aber trotzdem nie ankommen, prüfen Sie zunächst Ihre Lizenzstufe, bevor Sie weiter fehlersuchen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html), falls noch nicht geschehen, und die Benachrichtigungseinstellungen öffnen.
2. SMTP-Zugangsdaten erneut eingeben, bei Bedarf mit einem anwendungsspezifischen Passwort, und dann auf **Test** klicken.
3. Läuft der Test in ein Timeout, von Port 587 auf Port 465 wechseln oder Firewall-Regeln prüfen, die ausgehendes SMTP blockieren.
4. Den Benachrichtigungsschwellenwert und die Empfängerliste jedes Jobs überprüfen, um sicherzustellen, dass sie wie erwartet konfiguriert sind.

Sobald SMTP-Zugangsdaten, Netzwerkzugriff und Einstellungen auf Job-Ebene überprüft sind, werden E-Mail-Benachrichtigungen zu einem verlässlichen Sicherheitsnetz für jede im Hintergrund laufende geplante Synchronisation.

---

**Verwandte Anleitungen:**

- [E-Mail-SMTP-Job-Benachrichtigungen — Immer informiert über den Synchronisationsstatus in RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [Benachrichtigungen und Alarme für die Cloud-Synchronisation in RcloneView einrichten](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Geplante Synchronisation läuft nicht — Automatisierte Cloud-Jobs in RcloneView beheben](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
