---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "Cloudflare R2 zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Dateien von Cloudflare R2 zu Backblaze B2 mit der visuellen Oberfläche von RcloneView migrieren. S3-kompatiblen Cloud-Speicher ohne CLI-Befehle übertragen."
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2 zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Der Wechsel von Cloudflare R2 zu Backblaze B2 muss nicht bedeuten, dass Sie Skripte schreiben oder API-Token im Terminal verwalten müssen.

Cloudflare R2 bietet eine Preisgestaltung ohne Egress-Kosten, aber manche Teams stellen fest, dass die tiefergehenden Ökosystem-Integrationen, Lifecycle-Richtlinien und Bandwidth-Alliance-Partnerschaften von Backblaze B2 langfristig besser passen. Egal ob Sie Object Storage konsolidieren oder Workloads verlagern — mit RcloneView migrieren Sie jeden Bucket von R2 zu B2 über eine Point-and-Click-Oberfläche, ganz ohne CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Cloudflare R2 zu Backblaze B2 migrieren

Backblaze B2 bietet native Integrationen mit CDN-Partnern wie Cloudflare (über die Bandwidth Alliance) und Fastly, wodurch der Egress von B2 über diese Netzwerke kostenlos oder stark rabattiert ist. B2 unterstützt neben seiner eigenen nativen API auch S3-kompatible API-Endpunkte, was Ihnen Flexibilität bei der Anbindung von Anwendungen gibt. Für Teams, die anwendungsseitige Lifecycle-Regeln, serverseitiges Verschlüsselungsschlüsselmanagement oder Event-Benachrichtigungen benötigen, bietet B2 Funktionen, die der aktuelle Funktionsumfang von R2 noch nicht erreicht.

Ein weiterer Faktor ist die Kostenvorhersehbarkeit. Backblaze B2 berechnet pauschal 6 $ pro TB und Monat für Speicher, mit kostenlosem Egress über Partnernetzwerke. Wenn Ihre Architektur den Traffic bereits über das CDN von Cloudflare leitet, kann die Kombination aus B2-Speicher und Cloudflare-Auslieferung wirtschaftlicher sein als R2 allein, sobald man Compute- und Workers-Kosten einbezieht.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Beide Remotes in RcloneView einrichten

Öffnen Sie RcloneView und erstellen Sie ein neues Remote für Cloudflare R2. Wählen Sie "Amazon S3 Compliant" als Anbietertyp und dann "Cloudflare R2" aus dem S3-Anbieter-Dropdown. Geben Sie Ihre R2 Access Key ID, den Secret Access Key sowie die Endpunkt-URL ein — üblicherweise im Format `https://<account-id>.r2.cloudflarestorage.com`. RcloneView validiert die Verbindung, bevor sie gespeichert wird.

Fügen Sie anschließend ein Backblaze-B2-Remote hinzu. Sie können entweder den nativen B2-Anbietertyp oder die S3-kompatible Schnittstelle verwenden. Für die native Option geben Sie Ihre B2 Application Key ID und den Application Key ein. RcloneView listet Ihre vorhandenen Buckets nach dem Verbinden automatisch auf. Falls der Ziel-Bucket noch nicht existiert, erstellen Sie ihn zunächst in der B2-Konsole mit der gewünschten Region und den gewünschten Verschlüsselungseinstellungen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## Die Migration durchführen

Öffnen Sie mit beiden konfigurierten Remotes den Zwei-Fenster-Explorer von RcloneView. Wählen Sie Ihr R2-Remote auf der einen Seite und das B2-Remote auf der anderen. Navigieren Sie zum Quell-Bucket in R2 und zum Ziel-Bucket in B2. Sie können den gesamten Bucket-Inhalt per Drag-and-Drop verschieben oder bestimmte Präfixe und Ordner für die Übertragung auswählen.

Erstellen Sie bei größeren Migrationen stattdessen einen Sync- oder Copy-Job. Navigieren Sie zum Job-Manager, legen Sie R2 als Quelle und B2 als Ziel fest und wählen Sie den Modus "Copy", damit Dateien in B2 landen, ohne während des Übergangs etwas aus R2 zu löschen. Aktivieren Sie die Prüfsummenverifizierung, um sicherzustellen, dass jedes Objekt unversehrt ankommt — sowohl R2 als auch B2 unterstützen MD5-Prüfsummen bei S3-kompatiblen Uploads, sodass RcloneView die Integrität durchgängig verifizieren kann.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## Übertragungen planen und überwachen

Wenn Ihre R2-Buckets Terabytes an Daten enthalten, teilen Sie die Migration in geplante Jobs auf. Mit dem Scheduler von RcloneView können Sie Übertragungen außerhalb der Stoßzeiten ausführen, um Ihr Netzwerk nicht zu überlasten. Legen Sie pro Job Bandbreitenlimits fest, damit andere Dienste reibungslos weiterlaufen.

Verfolgen Sie den Fortschritt im Übertragungsdashboard, das Durchsatz, Dateianzahl und eventuelle Fehler in Echtzeit anzeigt. Sobald die anfängliche Kopie abgeschlossen ist, schalten Sie den Job auf den Modus "Sync" um und führen Sie ihn regelmäßig aus, bis Sie Ihre Anwendungsendpunkte von R2 auf B2 umstellen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Cloudflare-R2-Remote mit S3-kompatiblen Zugangsdaten und Ihrem Konto-Endpunkt hinzu.
3. Fügen Sie Ihr Backblaze-B2-Remote mit Ihrer Application Key ID und dem Application Key hinzu.
4. Erstellen Sie einen Copy-Job von R2 zu B2 mit aktivierter Prüfsummenverifizierung und planen Sie ihn für die Ausführung außerhalb der Stoßzeiten.

Sobald alle Objekte in B2 verifiziert sind, aktualisieren Sie Ihre Anwendungsendpunkte und stellen Sie die R2-Buckets in Ihrem eigenen Tempo außer Betrieb.

---

**Verwandte Anleitungen:**

- [Von Cloudflare R2 zu AWS S3 mit RcloneView wechseln](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [Cloudflare R2 und AWS S3 mit RcloneView vergleichen](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
