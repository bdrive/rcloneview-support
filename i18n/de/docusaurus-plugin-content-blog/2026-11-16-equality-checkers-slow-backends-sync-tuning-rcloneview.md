---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — Sync-Vergleiche für langsame Backends in RcloneView abstimmen"
authors:
  - kai
description: "Erfahren Sie, was die Einstellung Number of equality checkers im Sync-Assistenten von RcloneView bewirkt und wie Sie sie für SFTP, FTP, WebDAV und Cloud-Remotes mit Ratenbegrenzung anpassen."
keywords:
  - rclone checkers Einstellung
  - number of equality checkers
  - rclone checkers GUI
  - Synchronisation für langsame Backends abstimmen
  - SFTP Synchronisation Leistung
  - WebDAV Synchronisation langsam
  - Cloud-API-Ratenbegrenzung Synchronisation
  - RcloneView erweiterte Sync-Einstellungen
  - Prüfsummenvergleich Synchronisation
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — Sync-Vergleiche für langsame Backends in RcloneView abstimmen

> Bevor eine Synchronisation etwas kopiert, muss sie entscheiden, welche Dateien bereits übereinstimmen. Die Anzahl der Checker bestimmt, wie stark dieser Schritt Ihren Speicher belastet.

Jeder Sync-Job in RcloneView beginnt damit, Quell- und Zieldateien zu vergleichen, um herauszufinden, was tatsächlich übertragen werden muss. Diese Arbeit erledigen die Equality Checker, und in Step 2 des Sync-Assistenten legen Sie fest, wie viele davon parallel laufen. Der Standardwert 8 passt zu den meisten Cloud-Anbietern, doch ein kleiner SFTP-Server, eine WebDAV-Freigabe oder ein Anbieter mit strengen API-Limits verhält sich mit weniger Checkern oft besser.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was Equality Checker tun

Ein Checker betrachtet eine Datei auf beiden Seiten und entscheidet, ob sie identisch ist. Standardmäßig werden Größe und Änderungszeit verglichen. Aktivieren Sie im selben Schritt **Enable checksum**, werden Dateien stattdessen anhand von Hash und Größe verglichen – das ist strenger, fordert aber für jede Datei einen Hash vom Backend an.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

Checker sind unabhängig von **Number of file transfers**, das steuert, wie viele Dateien gleichzeitig kopiert werden. Eine Synchronisation von 200.000 kleinen Dateien, von denen die meisten unverändert sind, verbringt weit mehr Zeit mit Prüfen als mit Übertragen – daher kann die Checker-Anzahl wichtiger sein als die Transfer-Anzahl.

## Wann Sie die Checker-Anzahl senken sollten

RcloneView empfiehlt für langsame Backends 4 oder weniger. Typische Fälle:

- **SFTP oder FTP auf einem bescheidenen Server.** Parallele Prüfungen bedeuten mehr gleichzeitige Verbindungen, und ein kleiner VPS oder ein älteres NAS kann zusätzliche Sitzungen ablehnen oder drosseln.
- **WebDAV-Freigaben**, die langsam auf Metadatenanfragen antworten.
- **Cloud-Anbieter mit strengen Anfragelimits**, bei denen Spitzen paralleler Anfragen Ratenbegrenzungsfehler und Wiederholungen auslösen.

Weniger Checker tauschen reine Parallelität gegen gleichmäßigeren Fortschritt. Wenn das Log während der Vergleichsphase wiederholt Wiederholungsversuche oder Verbindungsfehler zeigt, senken Sie auf 4, dann auf 2, und starten Sie erneut.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## Wann der Standardwert genügt

S3-kompatibler Object Storage wie Amazon S3, Wasabi oder Cloudflare R2 verkraftet 8 Checker in der Regel problemlos, und lokale Festplatten oder ein schnelles LAN-NAS müssen selten angepasst werden. RcloneView bindet 90+ Anbieter aus einem Fenster ein UND synchronisiert sie, unter Windows, macOS und Linux – daher braucht ein Rechner oft unterschiedliche Checker-Werte pro Job: Lassen Sie den S3-Job beim Standardwert und senken Sie nur den SFTP-Job.

## Die Änderung mit Dry Run und Job History messen

Ändern Sie immer nur eine Einstellung. Führen Sie einen Dry Run aus, um den Umfang des Jobs zu bestätigen, starten Sie dann die Synchronisation und öffnen Sie Job History, wo Time Spent, Status und Dateianzahl jedes Laufs festgehalten werden. Der Vergleich zweier Läufe desselben Jobs mit unterschiedlichen Checker-Werten zeigt, ob die Änderung geholfen hat. Greift die Wiederholungseinstellung (**Retry entire sync if fails**, Standard 3) immer wieder, ist das ein weiteres Zeichen, dass das Backend weniger parallele Anfragen verlangt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie Job Manager und bearbeiten Sie den Sync-Job, der Ihr langsames Remote anspricht.
3. Setzen Sie in Step 2 **Number of equality checkers** auf 4 und entscheiden Sie, ob Sie **Enable checksum** benötigen.
4. Führen Sie den Job aus und vergleichen Sie Time Spent und Status in Job History mit früheren Läufen.

Ein paar Minuten Feinabstimmung machen aus einer Synchronisation, die in der Vergleichsphase hängt, eine, die zuverlässig durchläuft.

---

**Verwandte Anleitungen:**

- [Cloud-Übertragungen beschleunigen — Multithread-Uploads und parallele Streams in RcloneView](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [Langsame Cloud-Übertragungen beheben — Sync und Kopieren in RcloneView beschleunigen](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Prüfsummenverifizierte Cloud-Migrationen mit RcloneView (Drive, Dropbox, S3, R2)](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
