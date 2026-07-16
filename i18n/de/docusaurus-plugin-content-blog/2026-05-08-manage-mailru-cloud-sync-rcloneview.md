---
slug: manage-mailru-cloud-sync-rcloneview
title: "Mail.ru Cloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Mail.ru Cloud-Speicher mit RcloneView verbinden und verwalten. Synchronisieren, sichern und übertragen Sie Mail.ru-Dateien über eine übersichtliche GUI ganz ohne CLI-Befehle."
keywords:
  - Mail.ru Cloud-Speicher RcloneView
  - Mail.ru Cloud-Sync GUI
  - Mail.ru Dateien verwalten
  - Mail.ru Backup-Tool
  - rclone Mail.ru GUI
  - Mail.ru Dateiübertragung
  - Cloud-Speicher-Verwaltung
  - Mail.ru Sync Desktop-App
tags:
  - mailru
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Verbinden Sie Mail.ru Cloud mit RcloneView und verwalten Sie Ihre Dateien, führen Sie automatisierte Backups aus und synchronisieren Sie Daten über mehrere Anbieter hinweg — alles aus einer einzigen Desktop-GUI.

Mail.ru Cloud bietet großzügigen kostenlosen Speicherplatz und ist in Russland und den Nachbarländern weit verbreitet. Ohne das richtige Werkzeug kann die effiziente Verwaltung jedoch eine Herausforderung sein. RcloneView schließt diese Lücke, indem es sich über das bewährte Mail.ru-Backend von rclone mit Mail.ru Cloud verbindet und Ihre Dateien in einem vertrauten Zweispalten-Explorer darstellt. Es sind keine Kenntnisse der Kommandozeile erforderlich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mail.ru Cloud als Remote in RcloneView hinzufügen

Die Einrichtung von Mail.ru in RcloneView dauert weniger als zwei Minuten. Öffnen Sie den **Remote-Tab** in der Menüleiste und klicken Sie auf **New Remote**. Scrollen Sie durch die Anbieterliste, um Mail.ru Cloud zu finden (oder geben Sie „mail" in das Suchfeld ein), und geben Sie dann Ihre Mail.ru-Kontodaten ein — Benutzername und Passwort. RcloneView übergibt diese an die eingebettete rclone-Instanz, die die Authentifizierung gegenüber der Mail.ru-API übernimmt.

Nach dem Speichern erscheint der Remote sofort in Ihren Explorer-Fenstern. Sie können Ordner durchsuchen, Miniaturansichten anzeigen, Datei-Metadaten prüfen und den Ordnerbaum navigieren, ganz so wie bei einem lokalen Laufwerk. Die Breadcrumb-Pfadleiste bietet eine anklickbare Hierarchie, sodass Sie schnell tief in verschachtelte Verzeichnisse vordringen können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## Mail.ru-Dateien mit einer anderen Cloud oder einem lokalen Laufwerk synchronisieren

Eine der stärksten Funktionen von RcloneView sind nahtlose Cloud-zu-Cloud-Übertragungen. Wenn Sie Dateien von Mail.ru Cloud zu Google Drive, Backblaze B2 oder einem lokalen Ordner kopieren müssen, öffnen Sie beide Speicherorte nebeneinander im Zweispalten-Explorer. Ziehen Sie Dateien von einem Fenster in das andere, oder klicken Sie mit der rechten Maustaste und wählen Sie **Copy** und dann **Paste** im Zielfenster.

Für wiederkehrende Backups nutzen Sie den integrierten Job Manager. Definieren Sie einen Sync- oder Copy-Job mit Mail.ru als Quelle und Ihrem bevorzugten Ziel. Konfigurieren Sie die Übertragungs-Parallelität und aktivieren Sie die Prüfsummenverifizierung, um beschädigte Dateien während der Übertragung zu erkennen. Mit einer PLUS-Lizenz können Sie diese Jobs über einen Crontab-ähnlichen Timer planen, sodass Backups automatisch ohne manuellen Eingriff ausgeführt werden.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## Übertragungen überwachen und Verlauf einsehen

Der **Transferring**-Tab am unteren Rand des RcloneView-Fensters zeigt den Live-Fortschritt jedes aktiven Jobs — Dateianzahl, übertragene Bytes und aktuelle Geschwindigkeit. Sie können einen laufenden Job jederzeit abbrechen, wenn Sie ihn pausieren oder Einstellungen anpassen möchten.

Nach Abschluss jedes Jobs bewahrt der **Job History**-Tab einen vollständigen Datensatz auf: Startzeit, Dauer, insgesamt übertragene Größe und Endstatus (Completed, Errored oder Canceled). Für ein Fotografie-Unternehmen, das Kundenlieferungen auf Mail.ru speichert, bietet dieser Verlauf einen zuverlässigen Prüfpfad und macht es leicht, festzustellen, ob ein Backup-Job über Nacht fehlgeschlagen ist.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Remote tab → New Remote**, wählen Sie Mail.ru Cloud aus und geben Sie Ihre Zugangsdaten ein.
3. Durchsuchen Sie Ihre Mail.ru-Dateien im Explorer-Fenster und ziehen Sie Elemente an ein beliebiges Ziel.
4. Erstellen Sie einen Sync-Job im **Job Manager** für automatisierte wiederkehrende Backups.

Mit RcloneView fügt sich Mail.ru Cloud nahtlos in Ihren Multi-Cloud-Workflow ein — ohne Terminal.

---

**Verwandte Anleitungen:**

- [Yandex Disk Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Mail.ru Cloud zu Google Drive und S3 übertragen](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Mehrere Cloud-Konten mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
