---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "Mail.ru Cloud zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Verschieben Sie Dateien von Mail.ru Cloud zu Backblaze B2 mit RcloneView: beide Remotes verbinden, mit Dry Run in der Vorschau prüfen, übertragen und mit Folder Compare verifizieren."
keywords:
  - Mail.ru Cloud zu Backblaze B2 migrieren
  - Mail.ru Cloud Backup
  - Mail.ru Cloud to B2
  - Backblaze B2 Migration
  - Cloud-zu-Cloud-Übertragung
  - RcloneView Migration
  - Mail.ru Cloud rclone
  - Dateien zu Backblaze B2 verschieben
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Kopieren Sie eine Mail.ru-Cloud-Bibliothek aus einem Fenster in den Backblaze-B2-Objektspeicher – mit einer Vorschau, bevor etwas verschoben wird, und einem Vergleich danach.

Wenn sich über Jahre gesammelte Dokumente und Fotos in Mail.ru Cloud befinden, bietet eine zweite Kopie in einem Objektspeicher ein unabhängiges Archiv. RcloneView verbindet beide Dienste als Remotes und führt die Übertragung als Cloud-zu-Cloud-Job aus, sodass die Dateien nicht zuerst auf einen Laptop heruntergeladen werden müssen. Mit der FREE-Lizenz verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese- und Schreibzugriff.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Öffnen Sie den Remote-Tab und klicken Sie auf New Remote. Fügen Sie zuerst Mail.ru Cloud gemäß den Hinweisen des Anbieters hinzu und danach Backblaze B2 mit einer Application Key ID und einem Application Key aus der B2-Konsole. Legen Sie den Bucket vorab in B2 an, damit Sie ein Ziel haben.

Öffnen Sie jedes Remote in einem eigenen Explorer-Panel. Durchsuchen Sie links die Mail.ru-Cloud-Ordner und rechts den B2-Bucket, um zu bestätigen, dass beide antworten, bevor Sie einen Job erstellen.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Mail.ru-Cloud- und Backblaze-B2-Remotes in RcloneView" class="img-large img-center" />

## Die Übertragung planen

Entscheiden Sie, ob Sie alles oder nur einen Teil verschieben. Ein Studio, das 400 GB Projektordner archiviert, könnte zunächst einen Ordner der obersten Ebene als Pilot kopieren. Wählen Sie im Sync-Assistenten Mail.ru Cloud als Quelle und einen B2-Bucket-Ordner als Ziel und vergeben Sie dann einen Jobnamen aus Buchstaben, Zahlen, Bindestrichen oder Unterstrichen.

Für eine Migration ist ein Copy-Job die sicherere Wahl, da er nie etwas aus der Quelle löscht. Verwenden Sie Sync nur, wenn das Ziel die Quelle exakt spiegeln soll.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Mail.ru Cloud zu Backblaze B2" class="img-large img-center" />

## Vorschau, Ausführung und Überwachung

Führen Sie zuerst einen Dry Run aus. Er listet die Dateien auf, die kopiert oder gelöscht würden, ohne etwas zu ändern, und erkennt so einen falschen Zielpfad frühzeitig. Starten Sie dann den Job und beobachten Sie Fortschritt, Geschwindigkeit und Dateianzahl im Tab Transferring.

Objektspeicher verarbeitet viele parallele Uploads gut, Consumer-Clouds können jedoch strenger sein. Treten Fehler auf, verringern Sie in Schritt 2 des Assistenten die Anzahl der Dateiübertragungen und halten Sie die Equality Checkers bei 4 oder weniger.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer Übertragung von Mail.ru Cloud zu B2 in RcloneView" class="img-large img-center" />

## Verifizieren und aktuell halten

Öffnen Sie nach Abschluss des Jobs Folder Compare mit Mail.ru Cloud auf der einen und B2 auf der anderen Seite. Filtern Sie nach nur links vorhandenen und abweichenden Dateien, um alles zu finden, was nicht angekommen ist, und kopieren Sie nur diese Elemente. Job History speichert Status, Dauer, Größe und Dateianzahl jedes Laufs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen Mail.ru Cloud und Backblaze B2" class="img-large img-center" />

Um die B2-Kopie aktuell zu halten, speichern Sie den Job und fügen Sie mit einer PLUS-Lizenz in Schritt 4 einen Zeitplan im Crontab-Stil hinzu.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Mail.ru Cloud und Backblaze B2 im Remote-Tab als Remotes hinzu.
3. Erstellen Sie einen Copy-Job von Mail.ru Cloud zu Ihrem B2-Bucket und führen Sie einen Dry Run aus.
4. Starten Sie die Übertragung und verifizieren Sie dann mit Folder Compare.

Eine verifizierte zweite Kopie in B2 macht aus einer Bibliothek bei nur einem Anbieter eine gesicherte Bibliothek.

---

**Verwandte Anleitungen:**

- [Mail.ru-Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Backblaze-B2-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Yandex Disk mit RcloneView zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
