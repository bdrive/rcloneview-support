---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "Cloudflare R2 zu Wasabi migrieren — Dateien mit RcloneView übertragen"
authors:
  - robin
description: "Buckets von Cloudflare R2 zu Wasabi verschieben mit RcloneView: beide S3-kompatiblen Remotes verbinden, Dry Run, Bucket-zu-Bucket-Kopie und Verifizierung mit Folder Compare."
keywords:
  - Cloudflare R2 zu Wasabi migrieren
  - R2-zu-Wasabi-Übertragung
  - R2-Bucket nach Wasabi verschieben
  - S3-kompatible Bucket-Migration
  - Cloud-zu-Cloud-Übertragung
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - Objektspeicher-Migration per GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2 zu Wasabi migrieren — Dateien mit RcloneView übertragen

> Kopieren Sie einen Cloudflare-R2-Bucket aus einem Fenster nach Wasabi – zuerst mit einem Dry Run, danach mit einer visuellen Prüfung.

Cloudflare R2 und Wasabi sprechen beide das S3-Protokoll, daher ist der Datenumzug zwischen ihnen konzeptionell einfach – mit reinen CLI-Flags müssen Sie jedoch zwei Endpunkte und zwei Zugangsdatensätze jonglieren und haben keine einfache Möglichkeit zu prüfen, was angekommen ist. RcloneView verbindet beide als Remotes und lässt Sie in einer GUI kopieren, überwachen und verifizieren. Mit der FREE-Lizenz verbinden Sie S3-kompatible Dienste mit vollem Lese- und Schreibzugriff.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide S3-kompatiblen Remotes verbinden

Öffnen Sie den Dialog New Remote und fügen Sie zuerst Cloudflare R2 hinzu. R2 benötigt ein API-Token, Ihre Account ID und den Endpunkt in der Form `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`. Erzeugen Sie das Token im Cloudflare-Dashboard, nachdem Sie den Bucket angelegt haben; die R2-Einrichtung in RcloneView erfordert für das Token die Berechtigung Admin Read & Write.

Fügen Sie als Nächstes Wasabi hinzu. Geben Sie Access Key und Secret Key aus Ihrer Wasabi-Konsole ein und wählen Sie den Endpunkt der Region, in der Ihr Ziel-Bucket liegt. Legen Sie den Ziel-Bucket vorab in Wasabi an oder erstellen Sie einen Ordner im Explorer-Panel.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Cloudflare-R2- und Wasabi-Remotes in RcloneView" class="img-large img-center" />

## Die Kopie in zwei Panels planen

Öffnen Sie das R2-Remote im linken Explorer-Panel und das Wasabi-Remote im rechten. Navigieren Sie zum Bucket oder Präfix, das Sie verschieben möchten. Ein Studio mit einem Medienarchiv von mehreren Terabyte könnte zunächst ein Projektpräfix migrieren, um Berechtigungen und Namensgebung zu prüfen, bevor es den gesamten Bucket umzieht.

Da beide Seiten Remotes sind, führt RcloneView dies als Cloud-zu-Cloud-Übertragung zwischen den beiden Remotes aus, sodass Sie keinen manuellen Download-dann-Upload-Schritt selbst verwalten müssen. Ziehen zwischen den Panels kopiert standardmäßig, wenn sich die Remotes unterscheiden; für wiederholbare Läufe erstellen Sie im Sync-Assistenten einen Copy-Job.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung zwischen zwei Panels in RcloneView" class="img-large img-center" />

## Dry Run, Feinabstimmung und Ausführung

Aktivieren Sie vor der eigentlichen Übertragung im Job-Assistenten Dry Run. Er listet genau auf, welche Dateien kopiert würden, sodass Sie ein falsches Präfix bemerken, bevor Daten bewegt werden. Erhöhen Sie in den Advanced Settings die Anzahl der Dateiübertragungen für Buckets mit vielen kleinen Objekten und aktivieren Sie den Prüfsummenvergleich, wenn Sie Hash-und-Größe statt nur der Größe abgleichen möchten. Im Filterschritt können Sie temporäre Ordner überspringen oder nach Dateialter einschränken.

Starten Sie den Job im Job Manager und verfolgen Sie den Fortschritt im Transferring-Tab: Geschwindigkeit, Dateianzahl und übertragene Bytes werden live aktualisiert.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen des Migrationsjobs aus dem Job Manager in RcloneView" class="img-large img-center" />

## Mit Folder Compare verifizieren

Öffnen Sie nach Abschluss des Jobs Compare mit R2 links und Wasabi rechts. Filtern Sie auf Left-only-Dateien, um fehlende Elemente zu sehen, oder auf Different-Dateien, um Größenabweichungen zu erkennen. Bleibt etwas übrig, füllen Sie die Lücke mit Copy right und vergleichen erneut, bis das Ergebnis sauber ist. Status, Dauer und Dateisummen des Laufs finden Sie in Job History.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifiziert eine Bucket-Migration in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) **herunter**.
2. Fügen Sie Ihre Cloudflare-R2- und Wasabi-Remotes über New Remote hinzu.
3. Öffnen Sie beide in nebeneinanderliegenden Panels und führen Sie einen Copy-Job mit Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit Folder Compare.

Lassen Sie R2 unangetastet, bis Compare eine saubere Übereinstimmung zeigt – dann können Sie den Speicher mit Zuversicht wechseln.

---

**Verwandte Anleitungen:**

- [Wasabi zu Cloudflare R2 migrieren](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Wasabi-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Cloudflare R2 mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
