---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "Migration von IDrive e2 zu Backblaze B2 — Dateien mit RcloneView übertragen"
authors:
  - steve
description: "Verschieben Sie Buckets von IDrive e2 zu Backblaze B2 mit den Cloud-zu-Cloud-Übertragungstools, der Dry-Run-Vorschau und dem Job-Verlauf von RcloneView."
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migration von IDrive e2 zu Backblaze B2 — Dateien mit RcloneView übertragen

> Verschieben Sie Object-Storage-Buckets zwischen zwei S3-kompatiblen Anbietern, ohne Dateien zuerst lokal zwischenzuspeichern.

Der Wechsel S3-kompatibler Object-Storage-Anbieter bedeutet normalerweise, dass man sich zunächst durch Zugriffsschlüssel, Endpunkte und Bucket-Strukturen arbeiten muss, bevor auch nur eine einzige Datei verschoben wird. RcloneView verbindet sich sowohl mit IDrive e2 als auch mit Backblaze B2 als native Remotes, sodass eine Migration zwischen beiden eine direkte Cloud-zu-Cloud-Übertragung ist, statt eines zweistufigen Download-dann-Upload-Prozesses.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

IDrive e2 und Backblaze B2 werden beide über die S3-kompatible Remote-Einrichtung von RcloneView konfiguriert und benötigen jeweils einen Zugriffsschlüssel, einen geheimen Schlüssel und einen Endpunkt. Speziell für Backblaze B2 unterstützt RcloneView zusätzlich die native Methode zur Eingabe von Zugangsdaten mit Application Key ID und Application Key, die manche Teams gegenüber dem S3-kompatiblen Weg bevorzugen. Sobald beide Remotes im Remote Manager erscheinen, öffnen Sie über das horizontale oder vertikale Split-Layout von RcloneView zwei Explorer-Panels nebeneinander — eines pro Remote.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

Wenn beide Buckets gleichzeitig sichtbar sind, können Sie die Ordnerstrukturen auf beiden Seiten durchsehen, bevor Sie eine Übertragung starten — so lassen sich Namenskonflikte oder unerwartete verschachtelte Ordner frühzeitig erkennen.

## Die Übertragung als Sync-Job ausführen

Statt große Buckets manuell zu ziehen, richten Sie über den 4-Schritte-Assistenten einen Sync-Job ein: Wählen Sie IDrive e2 als Quelle, Backblaze B2 als Ziel, und entscheiden Sie sich für eine Einweg-Synchronisation, sodass nur das Ziel geändert wird, um mit der Quelle übereinzustimmen — an IDrive e2 ändert sich nichts. In Schritt 2 mountet und synchronisiert RcloneView 90+ Anbieter aus einem einzigen Fenster und lässt Sie die Anzahl der Dateiübertragungen anpassen sowie den Prüfsummenvergleich aktivieren, sodass Dateien anhand von Hash und Größe verifiziert werden, nicht nur nach Änderungszeit — was bei einer Migration zwischen zwei unterschiedlichen Storage-Backends wichtig ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

Bevor Sie die eigentliche Übertragung ausführen, nutzen Sie den Dry Run, um genau anzuzeigen, welche Dateien kopiert werden, und um zu bestätigen, dass nichts Unerwartetes gelöscht oder übersprungen wird.

## Die Migration überprüfen

Nach Abschluss der Synchronisation zeigt der Job-Verlauf die insgesamt übertragene Größe, die Übertragungsgeschwindigkeit und die Dateianzahl für diesen Lauf an — ein Nachweis, den Sie mit den Gesamtwerten des Quell-Buckets vergleichen können. Als zusätzliche Kontrolle kann das Ordnervergleichs-Tool von RcloneView nach der Migration einen Seite-an-Seite-Vergleich beider Buckets durchführen und Dateien markieren, die sich in der Größe unterscheiden oder nur auf einer Seite existieren.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren IDrive-e2-Remote mit Zugriffsschlüssel, geheimem Schlüssel und Endpunkt hinzu.
3. Fügen Sie Ihren Backblaze-B2-Remote entweder S3-kompatibel oder mit nativen Zugangsdaten hinzu.
4. Konfigurieren Sie einen Einweg-Sync-Job, führen Sie zuerst einen Dry Run aus und dann die eigentliche Ausführung, und überprüfen Sie das Ergebnis über den Job-Verlauf.

Eine saubere Bucket-Migration hängt davon ab, vorher und nachher zu überprüfen — die Dry-Run- und Vergleichstools von RcloneView machen beide Schritte zu Teilen desselben Workflows.

---

**Verwandte Anleitungen:**

- [IDrive-e2-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Backblaze-B2-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi vs. Backblaze B2 vs. IDrive e2 — Vergleich von Object Storage](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
