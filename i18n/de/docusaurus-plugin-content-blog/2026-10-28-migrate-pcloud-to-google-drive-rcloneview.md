---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "pCloud zu Google Drive migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Verschieben Sie Dateien mit RcloneView von pCloud zu Google Drive: beide Remotes verbinden, einen Dry Run ausführen, Cloud-zu-Cloud kopieren und mit Folder Compare prüfen."
keywords:
  - pcloud zu google drive migrieren
  - pcloud zu google drive Übertragung
  - pcloud Dateien zu google drive verschieben
  - pcloud google drive Migration
  - Cloud-zu-Cloud-Übertragung
  - rcloneview pcloud
  - rcloneview google drive
  - pcloud Alternative Migration
  - pcloud Daten übertragen
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud zu Google Drive migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie ein komplettes pCloud-Konto zu Google Drive, ohne zuvor alles auf die eigene Festplatte herunterzuladen.

Teams, die auf Google Workspace vereinheitlichen, erben oft jahrelang angesammelte Dateien in pCloud. Sie von Hand herunterzuladen und erneut hochzuladen ist langsam und fehleranfällig. RcloneView verbindet beide Dienste in einem Fenster, kopiert Cloud-zu-Cloud und lässt Sie das Ergebnis Ordner für Ordner prüfen, bevor Sie das alte Konto auflösen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud und Google Drive verbinden

Beide Dienste nutzen in RcloneView die OAuth-Browseranmeldung, sodass keine API-Schlüssel eingefügt werden müssen. Öffnen Sie den Remote-Tab, klicken Sie auf New Remote, wählen Sie pCloud und bestätigen Sie den Zugriff im geöffneten Browserfenster. Wiederholen Sie dies für Google Drive. Sobald beide im Remote Manager erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Panels: pCloud links, Google Drive rechts.

<img src="/support/images/en/blog/new-remote.png" alt="pCloud- und Google-Drive-Remotes in RcloneView hinzufügen" class="img-large img-center" />

Durchsuchen Sie zuerst die pCloud-Struktur und verwenden Sie Get Size für Ihre Ordner der obersten Ebene. Ein Fotostudio mit 1,5 TB an Projektordnern kann die Migration beispielsweise Ordner für Ordner planen, statt in einem riesigen Job.

## Cloud-zu-Cloud kopieren

Bei wenigen Ordnern ziehen Sie diese vom pCloud-Panel in das Google-Drive-Panel. Das Ziehen zwischen verschiedenen Remotes führt ein Copy aus, sodass Ihre pCloud-Originale unangetastet bleiben. Für ein ganzes Konto erstellen Sie stattdessen einen Job: Öffnen Sie den Sync-Assistenten, wählen Sie pCloud als Quelle und Google Drive als Ziel und einen Job vom Typ Copy, damit auf keiner Seite etwas gelöscht wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von pCloud zu Google Drive in RcloneView" class="img-large img-center" />

In den Advanced Settings ist eine moderate Number of file transfers ein sinnvoller Ausgangspunkt; Google Drive wendet API-Limits an, sodass sehr hohe Parallelität Wiederholungen auslösen kann. Belassen Sie "Retry entire sync if fails" beim Standardwert 3, damit kurze Netzwerkunterbrechungen den Job nicht beenden.

## Dry Run, Filter und Überwachung

Nutzen Sie vor dem eigentlichen Lauf Dry Run, um eine Vorschau der zu kopierenden Dateien zu sehen. Im Filtering-Schritt können Sie Überflüssiges wie `.git/`-Ordner ausschließen oder nach maximaler Dateigröße und Dateialter einschränken, was praktisch ist, wenn nur neuere Projekte umziehen sollen. Sobald der Job läuft, zeigt der Transferring-Tab Fortschritt, Geschwindigkeit und Dateianzahl, und Job History hält jeden Lauf fest.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Den Jobverlauf von pCloud zu Google Drive in RcloneView prüfen" class="img-large img-center" />

## Mit Folder Compare prüfen

Öffnen Sie nach Abschluss des Jobs Compare mit pCloud links und Google Drive rechts. Filtern Sie auf left-only-Dateien, um alles zu sehen, was nicht angekommen ist, und kopieren Sie diese direkt aus der Vergleichsansicht. RcloneView bindet 90+ Anbieter in einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux, sodass dasselbe Werkzeug sowohl den Umzug als auch die Prüfung abdeckt.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen pCloud und Google Drive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie pCloud und Google Drive über New Remote als Remotes hinzu.
3. Führen Sie einen Dry Run für einen Copy-Job von pCloud zu Google Drive aus und starten Sie ihn dann regulär.
4. Bestätigen Sie mit Compare, dass keine left-only-Dateien mehr übrig sind, bevor Sie das alte Konto schließen.

Eine gestaffelte Kopie plus eine visuelle Prüfung machen aus einem riskanten Kontoumzug eine Routineaufgabe.

---

**Weiterführende Leitfäden:**

- [pCloud mit Google Drive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [Google Drive zu pCloud migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [pCloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
