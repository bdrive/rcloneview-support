---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "OpenDrive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Verschieben Sie Dateien mit RcloneView von OpenDrive zu Backblaze B2: Remotes verbinden, Kopie per Dry Run prüfen, Übertragung ausführen und mit Folder Compare verifizieren."
keywords:
  - OpenDrive zu Backblaze B2 migrieren
  - OpenDrive zu B2 Übertragung
  - OpenDrive Migration
  - Backblaze B2 Backup
  - Cloud-zu-Cloud-Übertragung
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - Dateien von OpenDrive nach B2 verschieben
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine OpenDrive-Bibliothek mit einer vorab geprüften und verifizierbaren Cloud-zu-Cloud-Übertragung in Backblaze-B2-Buckets, statt manuell herunterzuladen und erneut hochzuladen.

Teams, die aus einem Dateifreigabe-Konto herauswachsen, wünschen sich für Langzeitarchive oft Objektspeicher. Daten von OpenDrive nach Backblaze B2 von Hand zu verschieben, bedeutet, zuerst alles lokal herunterzuladen. RcloneView verbindet beide Dienste und überträgt direkt zwischen ihnen, mit Dry Run und einem Vergleichsschritt, damit Sie wissen, was verschoben wurde. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese- und Schreibzugriff in der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Öffnen Sie den Remote-Tab und wählen Sie New Remote. Fügen Sie OpenDrive als ein Remote und Backblaze B2 als das andere hinzu. B2 verwendet eine Application Key ID und einen Application Key, die Sie auf der Schlüsselverwaltungsseite von Backblaze erstellen. Legen Sie zuerst den Ziel-Bucket in Backblaze an, damit ein Zielpfad bereitsteht.

Sobald beide Remotes im Remote Manager erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Bereichen. Das Durchsuchen der obersten Ebene jedes Remotes bestätigt, dass die Zugangsdaten funktionieren, bevor Sie eine große Übertragung starten.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von OpenDrive- und Backblaze-B2-Remotes in RcloneView" class="img-large img-center" />

## Ordnerstruktur planen

Eine Migration ist ein guter Zeitpunkt, um festzulegen, wie die Daten in B2 landen. Ein gängiges Muster ist ein Bucket pro Zweck, etwa ein Archiv-Bucket für abgeschlossene Projekte, mit Ordnern auf oberster Ebene, die Ihre aktuelle OpenDrive-Struktur widerspiegeln. Nutzen Sie Get Size für die größten OpenDrive-Ordner, um das Volumen abzuschätzen, und kopieren Sie die wichtigsten Ordner zuerst.

Sollen bestimmte Dateitypen zurückbleiben, können Sie in Schritt 3 des Sync-Assistenten die maximale Dateigröße, das maximale Dateialter oder eigene Ausschlussregeln wie `.iso` festlegen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von OpenDrive zu Backblaze B2 in RcloneView" class="img-large img-center" />

## Erst Dry Run, dann Übertragung

Erstellen Sie einen Job mit OpenDrive als Quelle und Ihrem B2-Bucket als Ziel. Für eine Migration ist ein Copy-Job die sicherere Wahl, da er die Quelle unangetastet lässt; ein Sync-Job kann Dateien am Ziel löschen, um sie an die Quelle anzugleichen. Führen Sie zuerst einen Dry Run aus, um die Liste der zu kopierenden Dateien zu sehen.

Belassen Sie in Schritt 2 „Retry entire sync if fails“ beim Standardwert 3 und erwägen Sie, die gleichzeitigen Übertragungen zu verringern, falls die Quelle drosselt. Starten Sie dann den Job und beobachten Sie Fortschritt, Geschwindigkeit und Dateianzahl im Transferring-Tab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen des Jobs von OpenDrive zu B2 in RcloneView" class="img-large img-center" />

## Vor dem Abschalten der Quelle verifizieren

Öffnen Sie nach Abschluss des Jobs Job History, um zu bestätigen, dass der Status Completed lautet, und prüfen Sie Gesamtgröße und Dateianzahl. Verwenden Sie dann Compare für die Ordner in OpenDrive und B2. Left-only-Dateien sind Elemente, die nicht angekommen sind; different-Dateien deuten auf Größenabweichungen hin, die ein erneutes Kopieren lohnen. Behalten Sie die OpenDrive-Daten, bis der Vergleich keine left-only-Dateien mehr zeigt.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen OpenDrive und Backblaze B2" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie OpenDrive und Backblaze B2 als Remotes hinzu und erstellen Sie den Ziel-Bucket.
3. Erstellen Sie einen Copy-Job, führen Sie einen Dry Run aus und starten Sie dann die Übertragung.
4. Verifizieren Sie mit Job History und Folder Compare, bevor Sie die Quelle außer Betrieb nehmen.

Eine vorab geprüfte und verifizierte Kopie macht den Umzug nach B2 auch bei großen Bibliotheken planbar.

---

**Verwandte Anleitungen:**

- [OpenDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [SugarSync zu Backblaze B2 mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Koofr zu Backblaze B2 mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
