---
slug: icloud-drive-with-rcloneview
title: "RcloneView + iCloud Drive: Sichere Apple-Cloud-Backups mit integriertem Terminal"
authors:
  - tayson
description: "Fügen Sie iCloud Drive über das RcloneView-Terminal hinzu und verwalten Sie es anschließend visuell mit Compare, Sync und Jobs. Ein sicherer Workflow für Apple-Cloud-Backups unter Windows oder macOS."
keywords:
  - icloud drive backup
  - rclone icloud
  - rcloneview icloud
  - apple id 2fa rclone
  - icloud to google drive
  - icloud to s3
  - cloud to cloud backup
  - rclone terminal gui
  - rcloneview terminal
  - apple cloud migration
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# RcloneView + iCloud Drive: Sichere Apple-Cloud-Backups mit integriertem Terminal

> iCloud Drive ist beliebt, aber unternehmenstaugliche Backup-Workflows sind nicht integriert. RcloneView schließt diese Lücke, indem Sie iCloud über das integrierte Terminal hinzufügen und anschließend alles visuell mit Compare, Sync und Jobs verwalten können.

Wenn Sie iCloud Drive zuverlässig auf Google Drive, S3 oder eine lokale Festplatte sichern möchten, benötigen Sie zwei Dinge: **das iCloud-Backend von rclone** und **eine GUI für sichere, wiederholbare Workflows**. RcloneView bietet beides an einem Ort.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum iCloud-Backups knifflig sind

- iCloud erfordert eine interaktive Apple-ID-Anmeldung und 2FA.
- Native Tools bieten kein cloudübergreifendes Backup oder keine Zeitplanung.
- Reine CLI-Setups sind leistungsstark, aber leicht falsch zu konfigurieren.

RcloneView löst dies, indem Sie die erforderlichen CLI-Schritte im integrierten Terminal ausführen und anschließend alles über die GUI verwalten.

## Schritt 1: Das RcloneView-Terminal öffnen

Verwenden Sie das integrierte Terminal, um rclone-Befehle auszuführen, ohne eine externe Shell zu öffnen.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="RcloneView Terminal tab" class="img-large img-center" />

## Schritt 2: iCloud Drive über rclone config hinzufügen

iCloud erfordert derzeit aufgrund von Apple 2FA eine CLI-Konfiguration. Führen Sie `rclone config` im Terminal aus und folgen Sie den Anweisungen:

```bash
rclone config
```

Wichtige Eingabeaufforderungen, die Sie sehen werden:

- **Storage**: wählen Sie `iclouddrive` (oder die entsprechende Nummer)
- **Apple ID**: Ihre iCloud-E-Mail-Adresse
- **Password**: Ihr Apple-ID-Passwort
- **2FA code**: geben Sie den an Ihr vertrauenswürdiges Gerät gesendeten Code ein

Referenzanleitung (Screenshots + vollständige Schritte):  
[/support/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive)

## Schritt 3: Das neue Remote in RcloneView bestätigen

Sobald das Remote erstellt wurde, erscheint es automatisch im **Remote Manager**.

<img src="/support/images/en/blog/remote-manager.png" alt="Remote Manager" class="img-large img-center" />

Von hier aus können Sie es im Explorer öffnen und den gewohnten GUI-Workflow nutzen.

## Schritt 4: GUI-Tools für sichere Backups nutzen

### Vor dem Sync vergleichen (Compare)

Führen Sie **Compare** aus, um zu sehen, was sich ändern wird, bevor eine Synchronisation Ihre Daten berührt.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

Anleitung: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

### iCloud mit einer anderen Cloud synchronisieren

Wählen Sie iCloud als Quelle und Ihr Backup-Ziel (Drive, S3, externe Festplatte) als Zielort.

<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />

Anleitung: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)

### Als Job speichern und planen

Speichern Sie den Sync als Job für wiederkehrende Backups (Plus-Lizenz).

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />
</div>

Anleitungen: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs), [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Best Practices für iCloud-Backups

- **Verwenden Sie einen dedizierten Zielordner**, um Backups organisiert zu halten.
- **Beginnen Sie mit einem Testlauf (Dry Run)**, um die Sync-Richtung zu überprüfen.
- **Halten Sie die Apple-ID-2FA bereit** während der Erstkonfiguration.
- **Überwachen Sie den Job-Verlauf**, um Fehler frühzeitig zu erkennen.

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history" class="img-large img-center" />

## Für wen dieser Workflow geeignet ist

- **Einsteiger**, die ein visuelles Sicherheitsnetz wünschen.
- **Engineers**, die CLI-Flexibilität benötigen, aber GUI-Bedienung bevorzugen.
- **IT-Administratoren**, die wiederholbare, nachvollziehbare Backup-Jobs wünschen.

## Fazit

iCloud Drive lässt sich sicher und wiederholbar sichern, wenn Sie die rclone-CLI mit einer visuellen Kontrollebene kombinieren. Nutzen Sie das RcloneView-Terminal einmalig zur Einrichtung von iCloud und führen Sie anschließend alles Weitere in der GUI aus – für Geschwindigkeit, Sicherheit und Klarheit.
