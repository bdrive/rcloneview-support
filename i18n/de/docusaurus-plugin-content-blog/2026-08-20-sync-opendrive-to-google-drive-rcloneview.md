---
slug: sync-opendrive-to-google-drive-rcloneview
title: "OpenDrive mit Google Drive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - kai
description: "Synchronisieren Sie OpenDrive-Ordner mit Google Drive über RcloneView und nutzen Sie Folder Compare sowie geplante Aufträge, um beide Clouds aufeinander abgestimmt zu halten."
keywords:
  - OpenDrive mit Google Drive synchronisieren
  - OpenDrive Google Drive Backup
  - RcloneView OpenDrive Synchronisation
  - OpenDrive Cloud-Backup
  - Cloud-zu-Cloud-Synchronisation
  - OpenDrive Google Drive RcloneView
  - Multi-Cloud-Backup-Tool
  - Folder Compare OpenDrive
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive mit Google Drive synchronisieren — Cloud-Backup mit RcloneView

> Halten Sie einen OpenDrive-Ordner auf Google Drive gespiegelt, ohne zuerst etwas auf eine lokale Festplatte herunterzuladen.

Teams, die Arbeitsdateien auf OpenDrive ablegen, aber mit Kunden oder Partnern auf Google Drive zusammenarbeiten, kopieren Dateien meist manuell hin und her, wodurch die Synchronisation aus dem Takt gerät, sobald eine Seite geändert wird. RcloneView verbindet beide Remotes in einem Fenster und synchronisiert direkt zwischen ihnen, sodass die Übertragung Cloud-zu-Cloud läuft, statt über einen lokalen Ordner umgeleitet zu werden. Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — bereits mit der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichten der OpenDrive- und Google-Drive-Remotes

Fügen Sie zunächst OpenDrive als Remote im Remote Manager hinzu und anschließend Google Drive über die browserbasierte OAuth-Anmeldung — nach der Konfiguration erscheinen beide Remotes als separate Tabs im File Explorer, sodass Sie jede Seite unabhängig durchsuchen können, bevor Sie einen Synchronisationsauftrag erstellen. Bestätigen Sie, dass Sie Ordner auf beiden Remotes auflisten können, bevor Sie zum Sync-Assistenten wechseln — ein Remote, der beim Durchsuchen fehlschlägt, scheitert auch mitten in der Synchronisation, und es ist einfacher, das frühzeitig zu erkennen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Konfigurieren des Einweg-Sync-Auftrags

Wählen Sie im Sync-Assistenten den OpenDrive-Ordner als Quelle und den Ziel-Google-Drive-Ordner als Ziel aus, und wählen Sie dann Einweg-Synchronisation, damit OpenDrive die maßgebliche Quelle bleibt. Legen Sie die Anzahl der Dateiübertragungen und Gleichheitsprüfer in den Advanced Settings entsprechend der Ordnergröße fest — die Standardwerte eignen sich für die meisten Fälle, aber ein Ordner mit Zehntausenden kleiner Dateien profitiert von einer geringeren Anzahl an Gleichheitsprüfern, wenn OpenDrive langsam auf Metadatenanfragen reagiert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

Führen Sie vor der ersten echten Synchronisation einen Dry Run aus, um eine Vorschau zu erhalten, welche Dateien kopiert werden — das verhindert eine unbeabsichtigte Übertragung des gesamten Ordners, besonders wenn Sie einen Auftrag zum ersten Mal auf einen bereits bestehenden OpenDrive-Ordner richten.

## Ergebnis mit Folder Compare überprüfen

Nach Abschluss der ersten Synchronisation öffnen Sie Folder Compare und richten es auf dieselben beiden Ordner, um zu bestätigen, dass beide Seiten übereinstimmen. Folder Compare hebt Dateien hervor, die nur auf einer Seite existieren oder sich in der Größe unterscheiden, was schneller einen unvollständigen Transfer aufdeckt, als sich durch die Job History nach Fehlern zu durchsuchen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## Laufende Synchronisationen planen

Sobald die erste Synchronisation überprüft ist, speichern Sie den Auftrag im Job Manager und konfigurieren eine Crontab-artige Planung — verfügbar mit einer PLUS-Lizenz —, damit sich Änderungen von OpenDrive in festen Intervallen auf Google Drive übertragen, ohne dass jedes Mal ein manueller Lauf nötig ist. Job History führt Buch über jede geplante Ausführung, einschließlich Übertragungsgröße und Dateianzahl, sodass Sie bestätigen können, dass der Zeitplan tatsächlich wie erwartet ausgelöst wird.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie sowohl OpenDrive als auch Google Drive als Remotes im Remote Manager hinzu.
3. Erstellen Sie zunächst mit einem Dry Run einen Einweg-Sync-Auftrag und führen Sie ihn anschließend real aus.
4. Überprüfen Sie das Ergebnis mit Folder Compare und speichern Sie den Auftrag bei Bedarf mit einem Zeitplan für laufende Backups.

Wenn beide Remotes nebeneinander sichtbar sind, wird das Abstimmen von OpenDrive und Google Drive zu einem routinemäßigen Synchronisationsauftrag statt zu manueller Handarbeit.

---

**Weitere Anleitungen:**

- [OpenDrive-Dateien und Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [OpenDrive mit RcloneView auf AWS S3 und externen Speicher sichern](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Box mit RcloneView zu Google Drive synchronisieren](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
