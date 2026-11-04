---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "Mail.ru Cloud zu Google Drive migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Mail.ru Cloud mit RcloneView zu Google Drive migrieren: beide Remotes verbinden, einen Dry Run ausführen, Ordner von Cloud zu Cloud kopieren und das Ergebnis mit Folder Compare prüfen."
keywords:
  - Mail.ru Cloud zu Google Drive migrieren
  - Mail.ru-Cloud-Übertragung
  - Mail.ru zu Google Drive
  - RcloneView Mail.ru
  - Migration von Cloud zu Cloud
  - Dateien zwischen Clouds verschieben
  - Mail.ru-Cloud-Backup
  - rclone-GUI-Migration
  - Google-Drive-Migrationstool
  - Folder-Compare-Überprüfung
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud zu Google Drive migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre Mail.ru-Cloud-Dateien mit einem sichtbaren, überprüfbaren Ablauf zu Google Drive, statt manuell herunter- und wieder hochzuladen.

Jahrelang gesammelte Dokumente, Scans und Medien aus Mail.ru Cloud zu verschieben, bedeutet meist, alles auf einen Laptop herunterzuladen und erneut hochzuladen. RcloneView, eine auf rclone basierende GUI, verbindet beide Dienste als Remotes, sodass Sie in einem Fenster zwischen ihnen kopieren und das Ergebnis prüfen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Öffnen Sie RcloneView und fügen Sie mit **New Remote** Mail.ru Cloud und Google Drive hinzu. Google Drive meldet sich per OAuth im Browser an, ein API-Schlüssel ist also nicht nötig. Mail.ru Cloud gehört zu den unterstützten Anbietern; folgen Sie den Anweisungen auf dem Bildschirm für die Zugangsdaten. Sobald beide im Remote Manager erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Panels.

<img src="/support/images/en/blog/new-remote.png" alt="Mail.ru Cloud und Google Drive als Remotes in RcloneView hinzufügen" class="img-large img-center" />

RcloneView unterstützt über 90 Cloud-Speicherdienste in einem Fenster, unter Windows, macOS und Linux, sodass dieselbe Einrichtung auch für spätere Migrationen funktioniert.

## Das Kopieren planen, bevor etwas verschoben wird

Durchsuchen Sie zuerst die Quellstruktur. Nutzen Sie **Get Size** auf den Ordnern der obersten Ebene, um das Volumen abzuschätzen, und entscheiden Sie dann, was jetzt verschoben wird und was warten kann. Ein kleines Unternehmen mit einem gemeinsamen Ordner „Contracts“ und einem großen Ordner „Archive“ könnte den ersten sofort migrieren und den zweiten außerhalb der Arbeitszeit planen.

Ziehen Sie einen Ordner vom Mail.ru-Panel in das Google-Drive-Panel: Das Ziehen zwischen verschiedenen Remotes führt ein **Copy** aus, die Quelle bleibt also unverändert, bis Sie zufrieden sind. Erstellen Sie für größere Verschiebungen im Sync-Assistenten einen Copy-Job, legen Sie die Anzahl der Übertragungen in den Advanced Settings fest und überspringen Sie mit Filtern Dateien, die Sie nicht brauchen, etwa ISO-Images.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Übertragung von Cloud zu Cloud zwischen zwei Remotes in RcloneView" class="img-large img-center" />

## Dry Run, Übertragung und Überwachung

Führen Sie zuerst einen **Dry Run** aus. Er listet auf, was kopiert würde, ohne eine der beiden Seiten zu verändern, und deckt falsche Pfade auf, bevor sie Zeit kosten. Wenn die Liste stimmt, starten Sie den Job und beobachten Sie Fortschritt, Geschwindigkeit und Dateianzahl im Tab Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Eine laufende Übertragung im Tab Transferring von RcloneView überwachen" class="img-large img-center" />

## Mit Folder Compare prüfen

Öffnen Sie nach dem Kopieren **Compare** mit Mail.ru Cloud links und Google Drive rechts. Filtern Sie nach Dateien, die nur links vorhanden sind oder sich unterscheiden (left-only, different), um fehlende oder abweichende Dateien zu sehen, und kopieren Sie diese anschließend hinüber. Job History hält Status, Größe und Dauer Ihrer Dateien fest.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zeigt Unterschiede zwischen Quelle und Ziel" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Mail.ru Cloud und Google Drive über **New Remote** hinzu.
3. Führen Sie einen Dry Run für einen Ordner aus und starten Sie dann den Copy-Job.
4. Bestätigen Sie mit Folder Compare, bevor Sie das alte Konto auflösen.

Eine geprüfte, direkte Kopie von Cloud zu Cloud hält die Migration risikoarm und leicht fortsetzbar.

---

**Weiterführende Anleitungen:**

- [Mail.ru-Cloud-Synchronisation verwalten](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Mail.ru Cloud zu Google Drive und S3 übertragen](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Mail.ru Cloud zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
