---
slug: system-tray-background-sync-rcloneview
title: "Systemablage und Hintergrund-Synchronisation — Cloud-Aufgaben in RcloneView am Laufen halten"
authors:
  - steve
description: "Erfahren Sie, wie die Systemablage-Integration von RcloneView Synchronisationsjobs im Hintergrund am Laufen hält, Cloud-Mounts verwaltet und Benachrichtigungen über abgeschlossene Jobs sendet, ohne dass das Fenster geöffnet bleiben muss."
keywords:
  - RcloneView Systemablage Hintergrund-Synchronisation
  - Cloud-Synchronisation Hintergrundmodus
  - RcloneView in Ablage minimieren
  - Hintergrund-Cloud-Backup RcloneView
  - RcloneView Ablagesymbol Jobs
  - Cloud-Synchronisation Benachrichtigungen RcloneView
  - Cloud-Synchronisation im Hintergrund laufen lassen
  - RcloneView kontinuierliches Backup
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Systemablage und Hintergrund-Synchronisation — Cloud-Aufgaben in RcloneView am Laufen halten

> Die Systemablage-Integration von RcloneView ermöglicht es Ihnen, die App zu minimieren und dabei Synchronisationsjobs weiterlaufen zu lassen, Cloud-Laufwerke eingebunden zu halten und Benachrichtigungen zu erhalten — ohne Ihren Arbeitsablauf zu unterbrechen.

Die meisten Cloud-Synchronisationstools erfordern, dass ein Fenster geöffnet bleibt, um zu bestätigen, dass Jobs laufen. Die Unterstützung der Systemablage in RcloneView bricht mit dieser Einschränkung. Einmal konfiguriert, können Sie RcloneView vollständig minimieren, während Ihre geplanten Synchronisationsjobs, aktiven Übertragungen und eingebundenen Cloud-Laufwerke weiterhin im Hintergrund arbeiten. Das Ablagesymbol bietet schnellen Zugriff auf alles, ohne Ihren Arbeitsbereich zu überladen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hintergrundmodus und Systemablage aktivieren

Standardmäßig kann RcloneView so konfiguriert werden, dass es in die Systemablage minimiert wird, anstatt sich beim Schließen des Fensters zu beenden. Suchen Sie unter **Einstellungen-Tab → Allgemein** nach der Option **Beim Schließen beenden**. Deaktivieren Sie diese, damit RcloneView beim Klicken auf die X-Schaltfläche in die Systemablage wechselt, anstatt vollständig beendet zu werden.

Sie können außerdem **Beim Anmelden starten** aktivieren, damit RcloneView automatisch mit Ihrem System startet und sofort mit der Überwachung geplanter Jobs beginnt. Kombinieren Sie dies mit **Minimiert starten**, damit RcloneView von dem Moment an, in dem Ihr Computer hochfährt, unauffällig im Hintergrund läuft.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## Cloud-Mounts über die Ablage verwalten

Eine der nützlichsten Ablagefunktionen ist die schnelle Mount-Verwaltung. Klicken Sie mit der rechten Maustaste auf das RcloneView-Ablagesymbol, um eine Liste aller konfigurierten Cloud-Mounts mit ihrem aktuellen Status (eingebunden oder nicht eingebunden) anzuzeigen. Klicken Sie auf einen Eintrag, um dessen Mount-Status umzuschalten — ein Cloud-Laufwerk als lokales Volume einzubinden oder auszuhängen — ohne das Hauptfenster zu öffnen.

Dies ist besonders wertvoll für Profis, die den ganzen Tag über mehrere Cloud-Laufwerke eingebunden halten. Ein Entwickler könnte beispielsweise einen S3-Bucket als Netzlaufwerk eingebunden haben, einen Google-Drive-Mount für den Dokumentenzugriff und einen NAS-Mount für lokale Dateiübertragungen. Die Ablage bietet sofortige Kontrolle über alle diese Verbindungen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## Benachrichtigungen über abgeschlossene Jobs

Wenn ein Synchronisationsjob abgeschlossen ist — ob geplant oder manuell ausgelöst — kann RcloneView eine Desktop-Benachrichtigung mit Jobname, Dauer und Endstatus anzeigen. Aktivieren Sie dies unter **Einstellungen-Tab → Schnittstellen & Benachrichtigungen → Benachrichtigung bei abgeschlossener Synchronisation anzeigen**.

Das bedeutet, Sie können einen großen, über Nacht laufenden Backup-Job starten, RcloneView in die Ablage minimieren und eine Desktop-Benachrichtigung erhalten, sobald der Job abgeschlossen ist. Falls der Job fehlgeschlagen ist, erfahren Sie es sofort.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Deaktivieren Sie unter **Einstellungen → Allgemein** die Option **Beim Schließen beenden** und aktivieren Sie **Beim Anmelden starten**.
3. Konfigurieren Sie Synchronisationsjobs oder geplante Aufgaben wie gewohnt.
4. Minimieren Sie RcloneView — Jobs und Mounts laufen im Hintergrund weiter.

Einmal eingerichtet, funktioniert RcloneView wie ein unauffälliger Hintergrunddienst für Ihren Cloud-Speicher, ohne dass Sie ein Fenster geöffnet halten müssen.

---

**Verwandte Anleitungen:**

- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Benachrichtigungen bei abgeschlossener Synchronisation — RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [E-Mail-SMTP-Job-Benachrichtigungen in RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
