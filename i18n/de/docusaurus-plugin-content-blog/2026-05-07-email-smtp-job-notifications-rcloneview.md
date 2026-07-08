---
slug: email-smtp-job-notifications-rcloneview
title: "E-Mail-SMTP-Job-Benachrichtigungen — Immer informiert über den Synchronisationsstatus in RcloneView"
authors:
  - tayson
description: "Richten Sie E-Mail-SMTP-Benachrichtigungen in RcloneView PLUS ein, um Benachrichtigungen über den Abschluss von Synchronisationsjobs zu erhalten, mehrere Empfänger zu konfigurieren und unbeaufsichtigte Backup-Jobs per E-Mail zu überwachen."
keywords:
  - RcloneView E-Mail-Benachrichtigungen
  - SMTP-Synchronisationsbenachrichtigung
  - Cloud-Sync-E-Mail-Benachrichtigung
  - Job-Benachrichtigung SMTP
  - Backup-Überwachung per E-Mail
  - RcloneView PLUS Benachrichtigungen
  - Benachrichtigung über Synchronisationsabschluss
  - rclone E-Mail-Benachrichtigung
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# E-Mail-SMTP-Job-Benachrichtigungen — Immer informiert über den Synchronisationsstatus in RcloneView

> RcloneView PLUS ermöglicht die Konfiguration direkter SMTP-E-Mail-Benachrichtigungen für den Abschluss von Synchronisationsjobs, sodass Ihr Team immer weiß, wann ein Backup abgeschlossen ist — oder fehlgeschlagen ist —, ohne manuell nachzusehen.

Cloud-Synchronisations- und Backup-Jobs nach einem Zeitplan auszuführen ist nur die halbe Miete der Automatisierung. Die andere Hälfte besteht darin, das Ergebnis zu kennen, ohne die Anwendung öffnen und den Job-Verlauf manuell überprüfen zu müssen. RcloneView PLUS unterstützt E-Mail-Benachrichtigungen über eine direkte SMTP-Konfiguration und liefert Statusmeldungen zur Synchronisation direkt in Ihr Postfach, sobald ein Job abgeschlossen ist. Dies macht die unbeaufsichtigte Backup-Überwachung sowohl für Einzelpersonen als auch für Teams praktikabel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SMTP in RcloneView konfigurieren

Um E-Mail-Benachrichtigungen einzurichten, öffnen Sie die Benachrichtigungseinstellungen von RcloneView (verfügbar mit einer PLUS-Lizenz). Geben Sie Ihre SMTP-Serverdaten ein:

- **SMTP-Host**: Der ausgehende Mailserver Ihres E-Mail-Anbieters (zum Beispiel `smtp.gmail.com` für Gmail oder der Exchange/SMTP-Server Ihrer Organisation).
- **Port**: Üblicherweise Port **587** für STARTTLS (empfohlen) oder Port 465 für SSL. Vermeiden Sie Port 25 in den meisten Consumer- und Cloud-Umgebungen, da er häufig blockiert wird.
- **Authentifizierung**: Geben Sie Ihren E-Mail-Benutzernamen und Ihr Passwort oder ein anwendungsspezifisches Passwort ein. Verwenden Sie für Gmail ein App-Passwort, wenn 2FA für Ihr Konto aktiviert ist.
- **Absenderadresse**: Die Absenderadresse, die auf Benachrichtigungs-E-Mails angezeigt wird.

Nachdem Sie die Daten eingegeben haben, verwenden Sie die Schaltfläche **Test**, um eine Test-E-Mail zu senden und zu bestätigen, dass die SMTP-Verbindung funktioniert, bevor Sie sich für produktive Benachrichtigungen darauf verlassen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## Empfänger und jobspezifische Einstellungen hinzufügen

Sobald SMTP global konfiguriert ist, können Sie Benachrichtigungsempfänger auf Job-Ebene hinzufügen. Öffnen Sie die Einstellungen eines Synchronisationsjobs und geben Sie eine oder mehrere E-Mail-Adressen ein, die benachrichtigt werden sollen, wenn dieser Job abgeschlossen ist. Verschiedene Jobs können unterschiedliche Personen benachrichtigen — zum Beispiel kann ein Backup-Job für Finanzdokumente das Finanzteam benachrichtigen, während ein Media-Sync-Job das Content-Team benachrichtigt.

RcloneView ermöglicht außerdem das Festlegen von Schwellenwerten für Benachrichtigungen — zum Beispiel nur eine E-Mail zu senden, wenn ein Job mehr als eine konfigurierbare Anzahl von Megabyte überträgt. Dies ist nützlich für Jobs, die häufig ausgeführt werden und oft ohne Änderungen abgeschlossen werden: Sie erhalten nur dann eine Benachrichtigung, wenn tatsächlich etwas Relevantes passiert ist, was die Benachrichtigungsmüdigkeit reduziert.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## Anwendungsfälle für E-Mail-Benachrichtigungen

**Unbeaufsichtigte Backup-Überwachung** ist der primäre Anwendungsfall. Wenn Sie ein nächtliches Backup Ihrer lokalen Dateien nach Backblaze B2 planen, konfigurieren Sie eine E-Mail-Benachrichtigung an Ihre persönliche Adresse. Falls der Job fehlschlägt — aufgrund eines Netzwerkausfalls, eines Problems mit den Anmeldedaten oder einer vollen Festplatte — erhalten Sie am Morgen eine Fehler-E-Mail, anstatt das Problem erst Wochen später bei einem Wiederherstellungsversuch zu entdecken.

**Team-Bewusstsein** ist ebenso wertvoll. Wenn ein gemeinsam genutzter Cloud-Sync-Job abgeschlossen ist — zum Beispiel eine wöchentliche Synchronisation eines gemeinsamen Projektordners nach Amazon S3 — bestätigt die Benachrichtigung des gesamten Teams, dass die Synchronisation aktuell ist, ohne dass sich jemand bei RcloneView anmelden muss. Sie können verschiedene Jobs so konfigurieren, dass unterschiedliche Empfänger benachrichtigt werden, sodass die richtigen Personen entsprechend ihrem Verantwortungsbereich informiert werden.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html) und eine PLUS-Lizenz aktivieren.
2. Öffnen Sie **Benachrichtigungseinstellungen** und geben Sie Ihren SMTP-Host, Port 587 und die Authentifizierungsdaten ein.
3. Klicken Sie auf **Test**, um eine Test-E-Mail zu senden und die Verbindung zu überprüfen.
4. Öffnen Sie die Einstellungen jedes Synchronisationsjobs und fügen Sie die zu benachrichtigenden E-Mail-Adressen hinzu.
5. Legen Sie optional einen Schwellenwert für die Übertragungsgröße fest, sodass Benachrichtigungen nur ausgelöst werden, wenn erhebliche Datenmengen verschoben werden.

E-Mail-SMTP-Benachrichtigungen in RcloneView PLUS schließen die Lücke bei der automatisierten Backup-Überwachung — sie geben Ihnen die Gewissheit, dass Ihre Cloud-Synchronisationsjobs erfolgreich ausgeführt werden, oder benachrichtigen Sie sofort, wenn dies nicht der Fall ist.

---

**Weiterführende Anleitungen:**

- [Benachrichtigungsalarme für den Abschluss der Synchronisation mit RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView Telegram-Fernsteuerung](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
