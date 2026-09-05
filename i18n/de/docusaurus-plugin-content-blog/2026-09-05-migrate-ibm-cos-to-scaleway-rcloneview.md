---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "IBM Cloud Object Storage zu Scaleway migrieren — Dateien mit RcloneView übertragen"
authors:
  - kai
description: "Verschieben Sie Buckets von IBM Cloud Object Storage zu Scaleway Object Storage mit RcloneView, per Prüfsumme verifiziert und mit Dry Run vorab angezeigt."
keywords:
  - IBM COS zu Scaleway migrieren
  - IBM Cloud Object Storage Migration
  - Scaleway Object Storage
  - S3-kompatible Speicherübertragung
  - RcloneView
  - Object-Storage-Migration
  - Cloud-zu-Cloud-Übertragung
  - prüfsummenverifizierte Synchronisation
  - Bucket-Migrationstool
  - Multi-Cloud-Object-Storage
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IBM Cloud Object Storage zu Scaleway migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Buckets direkt zwischen zwei S3-kompatiblen Object-Storage-Anbietern, mit Dry-Run-Vorschauen und Prüfsummenverifizierung unterwegs.

Teams wechseln Object-Storage-Anbieter aus Gründen der Datenresidenz, wegen regionaler Latenz oder einfach, um die Infrastruktur zu konsolidieren — aber das manuelle erneute Hochladen von Terabytes an Bucket-Inhalten zwischen zwei S3-kompatiblen Endpunkten ist langsam und fehleranfällig. RcloneView verbindet sich sowohl mit IBM Cloud Object Storage als auch mit Scaleway Object Storage als Standard-S3-kompatible Remotes und überträgt Daten dann Bucket-zu-Bucket, ohne die Dateien zuerst über eine lokale Festplatte zu leiten. S3, Azure File Storage oder Backblaze B2 lassen sich mit vollem Lese-/Schreibzugriff bereits mit der FREE-Lizenz verbinden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Object-Storage-Endpunkte verbinden

Sowohl IBM COS als auch Scaleway werden in RcloneView als S3-kompatible Remotes hinzugefügt, wobei jeweils ein Access Key, ein Secret Key und die anbieterspezifische Endpunkt-URL statt eines OAuth-Logins erforderlich sind. Fügen Sie zunächst IBM Cloud Object Storage mit dem API-Schlüssel und Endpunkt Ihrer IBM Cloud-Instanz hinzu und wiederholen Sie den Vorgang dann für Ihre Scaleway Object Storage-Zugangsdaten.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von IBM Cloud Object Storage und Scaleway Remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes konfiguriert sind, erscheinen sie als separate Tabs in den Explorer-Panels, sodass Sie die Bucket-Inhalte auf beiden Seiten durchsehen können, bevor Sie entscheiden, was tatsächlich verschoben werden muss.

## Die Migration vorab anzeigen und ausführen

Ein Sync- oder Kopierjob, der mit IBM COS als Quelle und Scaleway als Ziel konfiguriert ist, übernimmt die Massenübertragung. Bevor Sie einen vollständigen Lauf starten, verwenden Sie Dry Run, um genau zu sehen, welche Objekte kopiert werden — das deckt Namens- oder Pfadprobleme frühzeitig auf, besonders nützlich, wenn die Bucket-Strukturen zwischen den beiden Anbietern nicht exakt übereinstimmen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Direkte Übertragung von Objekten von IBM Cloud Object Storage zu Scaleway" class="img-large img-center" />

Das Aktivieren des Prüfsummenvergleichs in den erweiterten Einstellungen des Jobs verifiziert Dateien anhand von Hash und Größe statt nur anhand des Änderungsdatums, was wichtig ist, wenn Daten zwischen zwei unterschiedlichen Speicher-Backends verschoben werden, die Zeitstempel möglicherweise unterschiedlich behandeln. Filtereinstellungen erlauben es zudem, bestimmte Dateitypen oder übergroße Objekte auszuschließen, falls nur ein Teil eines Buckets verschoben werden muss.

## Die Übertragung überwachen und planen

Große Object-Storage-Migrationen sind selten in einem Durchgang abgeschlossen. Der Tab Transferring zeigt Live-Fortschritt, Geschwindigkeit und Dateianzahl des laufenden Jobs, und Job History bewahrt eine Aufzeichnung jedes abgeschlossenen oder abgebrochenen Laufs auf — einschließlich Status, Dauer und übertragener Gesamtgröße — sodass Sie bestätigen können, dass die Migration sauber abgeschlossen wurde, oder dort weitermachen können, wo ein abgebrochener Job aufgehört hat.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Überprüfen des Job-Verlaufs nach der Migration von Buckets von IBM COS zu Scaleway" class="img-large img-center" />

Das Anpassen der Anzahl der Dateiübertragungen und Multi-Thread-Übertragungen in den erweiterten Einstellungen eines Jobs kann helfen, große Objektmengen effizienter zu verschieben, und Wiederholungseinstellungen bei Fehlern verringern das Risiko, dass eine instabile Verbindung eine mehrstündige Übertragung zunichtemacht.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihre IBM Cloud Object Storage-Zugangsdaten als neuen S3-kompatiblen Remote hinzu.
3. Fügen Sie Ihre Scaleway Object Storage-Zugangsdaten als zweiten S3-kompatiblen Remote hinzu.
4. Führen Sie einen Dry Run aus und starten Sie anschließend einen prüfsummenverifizierten Sync-Job zwischen beiden.

Sobald beide Endpunkte nebeneinander im selben Explorer stehen, wird das Verschieben von Buckets zwischen Object-Storage-Anbietern zu einem überwachten Job statt zu manuellem Rätselraten.

---

**Weitere Anleitungen:**

- [IBM Cloud Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [Scaleway Object Storage verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2: Preisgünstiger S3-kompatibler Speicher im Vergleich](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
