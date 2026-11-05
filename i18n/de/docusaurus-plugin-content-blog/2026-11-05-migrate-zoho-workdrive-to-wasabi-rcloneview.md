---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "Zoho WorkDrive zu Wasabi migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Migrieren Sie Zoho WorkDrive mit RcloneView zu Wasabi-Objektspeicher: beide Remotes verbinden, Dry Run, Cloud-zu-Cloud-Kopie und Überprüfung mit Folder Compare."
keywords:
  - Zoho WorkDrive zu Wasabi migrieren
  - Zoho WorkDrive zu Wasabi
  - Zoho WorkDrive Export
  - Wasabi Objektspeicher Migration
  - Zoho WorkDrive Backup
  - Cloud-zu-Cloud-Übertragung
  - rclone GUI Migration
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive zu Wasabi migrieren — Dateien mit RcloneView übertragen

> Archivieren Sie einen Zoho-WorkDrive-Teamordner in Wasabi-Buckets, ohne etwas auf Ihrer eigenen Festplatte zwischenzuspeichern.

Teams verlassen Zoho WorkDrive, wenn ein Projekt endet, eine Abteilung das Werkzeug wechselt oder das Finanzwesen ein günstigeres Langzeitarchiv wünscht. Wasabi ist ein S3-kompatibles Ziel, das sich für diese Archivrolle eignet, doch Tausende Dateien von Hand zu verschieben ist langsam. RcloneView verbindet beide Dienste in einem Fenster und kopiert von Cloud zu Cloud, mit einem Dry Run vorab und einem Vergleich danach. S3-kompatiblen Speicher wie Wasabi können Sie mit vollem Lese-/Schreibzugriff mit der FREE-Lizenz verbinden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive und Wasabi verbinden

Öffnen Sie den Tab Remote und wählen Sie New Remote. Zoho WorkDrive erfordert bei der Einrichtung eine Regionsauswahl; wählen Sie das Rechenzentrum, das zu Ihrem Zoho-Konto passt. Wasabi wird als S3-kompatibles Remote hinzugefügt: Geben Sie Access Key, Secret Key und den Endpunkt für die Region Ihres Buckets ein.

Wenn beide im Remote Manager erscheinen, öffnen Sie sie in zwei Explorer-Bereichen. Durchsuchen Sie links die Teamordner und rechts den Bucket, bevor Sie etwas verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Zoho-WorkDrive- und Wasabi-Remotes in RcloneView" class="img-large img-center" />

## Kopie planen und Dry Run ausführen

Legen Sie fest, was ins Archiv gehört. In Schritt 3 des Job-Assistenten können Sie ein maximales Dateialter, eine maximale Dateigröße oder eine Begrenzung der Ordnertiefe festlegen und eigene Regeln hinzufügen, etwa zum Ausschließen von `.git/`-Ordnern. Wählen Sie einen Copy-Job statt einer spiegelnden Synchronisation, damit am Ziel nichts entfernt wird.

Führen Sie dann Dry Run aus. Es listet jede Datei auf, die kopiert oder gelöscht würde, ohne eine der beiden Seiten zu ändern. Das ist der günstigste Moment, um einen falschen Ordner oder Filter zu entdecken.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Zoho WorkDrive zu Wasabi" class="img-large img-center" />

## Übertragung ausführen und überwachen

Starten Sie den Job und verfolgen Sie ihn im Tab Transferring, der Fortschritt, Geschwindigkeit und Dateianzahl zeigt. In Schritt 2 können Sie für ein großes Archiv die Anzahl der Dateiübertragungen erhöhen; halten Sie die Equality Checkers moderat, wenn die Zoho-Seite langsam antwortet. „Retry entire sync if fails“ steht standardmäßig auf 3, was vorübergehende Netzwerkfehler abdeckt.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer Übertragung von Zoho WorkDrive zu Wasabi" class="img-large img-center" />

## Mit Folder Compare und Job History überprüfen

Wenn der Job abgeschlossen ist, öffnen Sie Compare mit Zoho WorkDrive auf der einen und dem Wasabi-Bucket auf der anderen Seite. Die Filter für nur links, nur rechts und abweichende Dateien zeigen, was noch fehlt, und die Kopieraktion überträgt übrig gebliebene Dateien. Job History erfasst Status, Größe und Dateianzahl jedes Laufs und dient damit zugleich als Migrationsnachweis.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vergleich von Zoho WorkDrive und Wasabi nach der Migration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Zoho WorkDrive (mit Region) und Wasabi als Remotes hinzu.
3. Erstellen Sie einen Copy-Job mit Filtern und führen Sie einen Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie mit Folder Compare, bevor Sie die Quelle abschalten.

Behalten Sie die Zoho-Daten, bis Compare zeigt, dass beide Seiten übereinstimmen.

---

**Verwandte Anleitungen:**

- [Zoho-WorkDrive-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Zoho WorkDrive zu Backblaze B2 mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [Wasabi-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
