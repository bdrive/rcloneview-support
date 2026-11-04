---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "Yandex-Disk-Synchronisationsfehler beheben — fehlgeschlagene Übertragungen mit RcloneView diagnostizieren und lösen"
authors:
  - kai
description: "Yandex-Disk-Synchronisationsfehler mit RcloneView beheben: OAuth neu autorisieren, Checker und Wiederholungen anpassen, DEBUG-Logs lesen und Ergebnisse mit Dry Run und Folder Compare prüfen."
keywords:
  - Yandex-Disk-Synchronisationsfehler beheben
  - Yandex-Disk-Übertragung fehlgeschlagen
  - Yandex Disk OAuth neu autorisieren
  - RcloneView Yandex Disk Fehlerbehebung
  - Yandex-Disk-Synchronisation funktioniert nicht
  - rclone Yandex Fehler
  - Cloud-Synchronisation Fehlerbehebung
  - rclone Debug-Log
  - Yandex-Disk-Backup fehlgeschlagen
  - Yandex-Disk-Job fehlerhaft
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex-Disk-Synchronisationsfehler beheben — fehlgeschlagene Übertragungen mit RcloneView diagnostizieren und lösen

> Eine Schritt-für-Schritt-Anleitung, um herauszufinden, warum ein Yandex-Disk-Job mit Fehler endete, und ihn zu beheben, ohne alles erneut zu kopieren.

Ein Yandex-Disk-Job, der in Job History als „Errored“ endet, ist ärgerlich, besonders wenn er über Nacht lief. Die meisten Fehler lassen sich in wenige Gruppen einteilen: eine abgelaufene Anmeldung, zu viel Parallelität für ein langsames Backend oder ein Fehler bei Pfad und Filter. RcloneView stellt die Einstellungen und Logs bereit, um sie zu unterscheiden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mit Job History und dem Log-Tab beginnen

Öffnen Sie **Job History** und suchen Sie den fehlgeschlagenen Lauf. Status, Dauer, Gesamtgröße und Dateianzahl zeigen, ob der Job sofort (wahrscheinlich Authentifizierung oder Pfad) oder mittendrin (wahrscheinlich Drosselung oder eine bestimmte Datei) fehlgeschlagen ist. Prüfen Sie dann den Tab **Log** in der unteren Info View auf Einträge mit Zeitstempel rund um den Fehler.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mit einem fehlerhaften Lauf in RcloneView" class="img-large img-center" />

Wenn das Log zu knapp ist, gehen Sie zu Settings > Embedded Rclone, aktivieren Sie rclone Logging, setzen Sie die Stufe auf DEBUG, klicken Sie auf Restart Embedded Rclone und reproduzieren Sie das Problem. Die entstehende Datei zeigt genau, welcher Vorgang fehlgeschlagen ist.

## Abgelaufene oder abgelehnte Anmeldung neu autorisieren

Yandex Disk verbindet sich per OAuth im Browser. Wenn das Auflisten eines Ordners sofort fehlschlägt oder jede Datei mit einer Autorisierungsmeldung fehlerhaft ist, öffnen Sie Remote Manager, bearbeiten Sie das Yandex-Disk-Remote und schließen Sie die Browser-Anmeldung erneut ab. Aktualisieren Sie danach das Explorer-Panel. Eine erfolgreiche Auflistung bestätigt die Verbindung, bevor Sie einen Job ausführen.

<img src="/support/images/en/blog/new-remote.png" alt="Ein Remote in RcloneView bearbeiten und neu autorisieren" class="img-large img-center" />

## Job-Einstellungen für ein langsameres Backend anpassen

Treten Fehler nur bei großen Jobs auf, verringern Sie die Last. Reduzieren Sie in den Advanced Settings des Sync-Assistenten die Anzahl der Dateiübertragungen und halten Sie die Equality Checkers bei langsamen Backends auf 4 oder weniger (Standard ist 8). Die Standardeinstellung von 3 Wiederholungen der gesamten Synchronisation hilft bei vorübergehenden Fehlern, lassen Sie sie daher aktiviert. Erwägen Sie, Checksum zu aktivieren, wenn Sie den Inhalt und nicht nur die Größe prüfen müssen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Erweiterte Job-Einstellungen und Zeitplanung in RcloneView" class="img-large img-center" />

## Die Behebung bestätigen, ohne erneut zu kopieren

Führen Sie einen **Dry Run** aus, um zu sehen, was noch übertragen würde, und starten Sie den Job danach erneut. Öffnen Sie **Compare**, um Yandex Disk mit der Quelle abzugleichen: Dateien, die nur links vorhanden sind oder sich unterscheiden (left-only, different), zeigen, was noch aussteht, und Sie können genau diese kopieren.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zur Bestätigung verbleibender Unterschiede" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie den fehlgeschlagenen Lauf in Job History und im Log-Tab.
3. Autorisieren Sie das Yandex-Disk-Remote neu, wenn das Auflisten fehlschlägt.
4. Verringern Sie Übertragungen und Checker, führen Sie Dry Run aus, starten Sie dann erneut und nutzen Sie Compare.

Eine methodische Diagnose macht aus einem vagen „Errored“-Status eine kurze, behebbare Liste.

---

**Weiterführende Anleitungen:**

- [Yandex-Disk-Fehler „Speicher voll“ beheben](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [Yandex Disk Cloud-Synchronisation und Backup verwalten](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Yandex Disk mit Google Drive und S3 synchronisieren](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />
