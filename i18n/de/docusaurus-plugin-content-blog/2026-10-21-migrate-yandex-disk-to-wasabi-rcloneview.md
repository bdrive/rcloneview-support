---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "Yandex Disk zu Wasabi migrieren — Dateien mit RcloneView übertragen"
authors:
  - alex
description: "Yandex Disk mit RcloneView zu Wasabi-Objektspeicher migrieren: beide Remotes verbinden, Dry Run ausführen, Cloud-zu-Cloud kopieren und mit Prüfsummen verifizieren."
keywords:
  - Yandex Disk zu Wasabi migrieren
  - Yandex Disk Backup
  - Wasabi Migration
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - Cloud-zu-Cloud-Übertragung
  - S3 Backup
  - rclone GUI
  - Objektspeicher-Migration
  - Cloud-Migrationstool
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk zu Wasabi migrieren — Dateien mit RcloneView übertragen

> Kopieren Sie ein Yandex-Disk-Archiv ohne lokalen Umweg in Wasabi-Buckets und bestätigen Sie, dass jede Datei angekommen ist.

Yandex Disk eignet sich als persönliches Laufwerk, doch Langzeitarchive und gemeinsame Projektdaten gehören oft in S3-kompatiblen Objektspeicher, in dem Sie Buckets und Zugriffsschlüssel selbst kontrollieren. RcloneView verbindet Yandex Disk und Wasabi in einem Fenster als Remotes und führt die Übertragung zwischen ihnen aus, sodass Sie Terabytes nicht erst auf einer lokalen Festplatte zwischenlagern müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes einrichten

Yandex Disk meldet sich über den Browser an: Wählen Sie es unter **Remote > New Remote**, genehmigen Sie den Zugriff, und das Remote wird verbunden. Wasabi wird als S3-kompatibler Anbieter konfiguriert. Erstellen Sie in der Wasabi-Konsole einen Bucket, erzeugen Sie Access Key und Secret Key und geben Sie diese zusammen mit dem Endpunkt der Region Ihres Buckets in RcloneView ein.

Wasabi ist ein S3-kompatibler Anbieter und lässt sich daher mit derselben Remote-Einrichtung verwenden wie andere S3-kompatible Dienste.

<img src="/support/images/en/blog/new-remote.png" alt="Yandex-Disk- und Wasabi-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Auswählen, was verschoben wird

Durchsuchen Sie Yandex Disk in einem Explorer-Bereich und Ihren Wasabi-Bucket im anderen. Üblich ist ein Bucket für das Archiv, dessen Ordner der obersten Ebene die Yandex-Ordner widerspiegeln. Objektspeicher kennt keine echten Ordner – halten Sie die Namen daher einheitlich und vermeiden Sie sehr lange Pfade.

Enthält ein Teil des Laufwerks verzichtbare Dateien, schließen Sie sie im Filterschritt des Jobs nach Erweiterung, maximaler Größe oder Dateialter aus, damit Sie nur migrieren, was Sie brauchen.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dateien zwischen Yandex Disk und Wasabi in RcloneView ziehen" class="img-large img-center" />

## Dry Run und Übertragung

Erstellen Sie einen Job mit Yandex Disk als Quelle und Ihrem Wasabi-Bucket als Ziel. Wählen Sie Copy, damit die Quelle unversehrt bleibt, bis Sie das Ergebnis geprüft haben. Führen Sie einen **Dry Run** aus, um die Dateiliste in der Vorschau zu sehen, und starten Sie dann den Job. In den Advanced Settings können Sie den **checksum**-Vergleich aktivieren, der Hashes plus Größe prüft, sofern der Anbieter sie unterstützt, und die Zahl gleichzeitiger Dateiübertragungen anpassen, falls Yandex langsamer wird.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live-Überwachung einer Übertragung von Yandex Disk zu Wasabi" class="img-large img-center" />

## Prüfen und Folgejobs planen

Öffnen Sie nach Abschluss des Jobs **Compare** für beide Speicherorte, um Left-only- oder abweichende Dateien zu finden, und kopieren Sie Nachzügler aus der Vergleichsansicht. Bleibt Yandex Disk während der Übergangszeit im Einsatz, können Sie mit einer PLUS-Lizenz den Job im crontab-Stil planen, sodass neue Dateien bis zur Umstellung weiter in Wasabi landen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Wiederkehrenden Job von Yandex Disk zu Wasabi planen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Yandex Disk und Wasabi über **Remote > New Remote** hinzu.
3. Erstellen Sie einen Copy-Job, führen Sie einen Dry Run aus und starten Sie dann die Übertragung.
4. Verifizieren Sie mit Folder Compare, bevor Sie an der Quelle etwas löschen.

Sobald das Archiv in einem Bucket liegt, den Sie kontrollieren, wird das Auflösen der alten Kopie zu einer bewussten Entscheidung statt zu einem Glücksspiel.

---

**Verwandte Anleitungen:**

- [Yandex-Disk-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Wasabi-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Prüfsummenverifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
