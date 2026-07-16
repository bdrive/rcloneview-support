---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "HiDrive mit Amazon S3 synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - morgan
description: "Erfahren Sie, wie Sie HiDrive-Dateien mit RcloneView zu Amazon S3 synchronisieren und sichern. Übertragen Sie Dateien zwischen europäischem und globalem Cloud-Speicher über eine einfache grafische Oberfläche."
keywords:
  - HiDrive zu Amazon S3
  - RcloneView HiDrive Backup
  - HiDrive S3 synchronisieren
  - HiDrive Cloud-Backup
  - HiDrive zu AWS übertragen
  - Cloud-zu-Cloud-Backup RcloneView
  - HiDrive-Migration zu S3
  - Amazon S3 Backup-Tool
  - Cloud-übergreifende Dateiübertragung
  - HiDrive-Dateisynchronisation
tags:
  - RcloneView
  - hidrive
  - amazon-s3
  - cloud-to-cloud
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive mit Amazon S3 synchronisieren — Cloud-Backup mit RcloneView

> Sichern Sie Ihren HiDrive-Speicher mit den visuellen Synchronisationstools von RcloneView auf Amazon S3 — keine Kommandozeile erforderlich, mit integrierter Zeitplanung, Filterung und Live-Übertragungsüberwachung.

HiDrive, die europäische Cloud-Plattform von Strato, ist bei Unternehmen beliebt, die Wert auf DSGVO-konformen Speicher legen. Amazon S3 wiederum ist der Maßstab für Haltbarkeit von Objektspeicher und Ökosystem-Integration — ein natürliches sekundäres Backup-Ziel für alles Geschäftskritische. Mit RcloneView können Sie beide Anbieter in einer einzigen Oberfläche verbinden und automatisierte, gefilterte Synchronisationsjobs ausführen, die Ihre S3-Buckets mit Ihren HiDrive-Ordnern abgleichen, ohne einen einzigen Befehl zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive und Amazon S3 in RcloneView verbinden

HiDrive verwendet OAuth zur Authentifizierung, das heißt, RcloneView öffnet einen Browser-Tab, in dem Sie sich bei Ihrem Strato-Konto anmelden und den Zugriff gewähren — keine API-Schlüsselverwaltung erforderlich. Gehen Sie zu **Remote > New Remote**, wählen Sie **HiDrive** und schließen Sie die Browser-Anmeldung ab. Ihr HiDrive-Ordnerbaum erscheint sofort im Datei-Explorer.

Für Amazon S3 gehen Sie erneut zu **Remote > New Remote**, wählen Sie **Amazon S3** und geben Sie Ihre AWS Access Key ID, den Secret Access Key sowie die Zielregion ein. Wenn Sie Zugriff nach dem Prinzip der geringsten Rechte wünschen, erstellen Sie in der AWS-Konsole einen dedizierten IAM-Benutzer mit Schreibrechten, die nur auf den Ziel-Bucket beschränkt sind, und geben Sie diese Anmeldedaten dann in RcloneView ein.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes registriert sind, öffnen Sie im Dual-Pane-Explorer von RcloneView zwei Panels nebeneinander — HiDrive links, S3 rechts —, um die Ordnerinhalte visuell zu vergleichen, bevor Sie eine vollständige Synchronisation starten.

## Den HiDrive-zu-S3-Synchronisationsjob erstellen

Sobald beide Remotes verbunden sind, gehen Sie zu **Home > Sync**, um den Job-Assistenten zu öffnen. Legen Sie Ihren HiDrive-Ordner als Quelle und Ihren S3-Bucket (mit optionalem Unterordner-Präfix) als Ziel fest. Im Schritt Erweiterte Einstellungen konfigurieren Sie die Anzahl gleichzeitiger Übertragungs-Threads passend zu Ihrer verfügbaren Bandbreite — höhere Werte beschleunigen Massenübertragungen bei flachen Dateistrukturen, während niedrigere Werte bei Verbindungen mit strikten Ratenbegrenzungen sicherer sind.

Im Schritt Filterung können Sie irrelevante Dateien nach Typ (z. B. `.tmp`, `.part`) oder nach Alter ausschließen — zum Beispiel, indem Sie mit dem Filter **Max file age** (`90d`) nur Dateien synchronisieren, die in den letzten 90 Tagen geändert wurden. Das hält den Job fokussiert und reduziert unnötige API-Aufrufe an beide Endpunkte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Klicken Sie vor dem ersten Ausführen immer auf **Dry Run**, um die genaue Liste der Dateien zu prüfen, die übertragen oder gelöscht würden — ein wesentlicher Schritt bei der Synchronisation von einem gefüllten HiDrive-Konto zu einem neuen S3-Bucket, bei dem die Richtung der Einweg-Synchronisation korrekt sein muss, bevor Daten verschoben werden.

## Automatisierte Backups planen

Für dauerhaften Schutz können PLUS-Lizenznutzer den HiDrive-zu-S3-Job so planen, dass er automatisch nach einem Crontab-ähnlichen Zeitplan ausgeführt wird. Gängige Konfigurationen umfassen nächtliche vollständige Synchronisationen um 2 Uhr und stündliche inkrementelle Läufe während der Geschäftszeiten. Der Zeitplan-Simulator in Schritt 4 des Job-Assistenten zeigt eine Vorschau der nächsten 10 Ausführungszeiten, bevor Sie speichern.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

Sobald der Job unbeaufsichtigt läuft, zeigt der Tab **Transferring** die Live-Übertragungsgeschwindigkeit und Dateizahlen für jede geplante Ausführung, während **Job History** jeden Lauf mit Ergebnis, übertragenen Bytes und etwaigen Fehlerdetails protokolliert — ein vollständiger Prüfpfad für die Backup-Nachvollziehbarkeit.

## Vollständigkeit der Synchronisation mit Folder Compare prüfen

Nachdem die erste Synchronisation abgeschlossen ist, verwenden Sie die Funktion **Folder Compare** von RcloneView, um zu überprüfen, ob HiDrive und S3 tatsächlich synchron sind. Öffnen Sie beide Ordner in der Vergleichsansicht; RcloneView hebt nur links, nur rechts und größenabweichende Dateien hervor — so erkennen Sie fehlende oder nicht übereinstimmende Elemente, ohne Dateilisten manuell abzugleichen. Für besonders wichtige Archive aktivieren Sie in den erweiterten Einstellungen des Synchronisationsjobs den **Checksum**-Vergleich, um die Dateiintegrität per Hash statt nur anhand der Größe zu überprüfen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr HiDrive-Konto über **Remote > New Remote > HiDrive** per OAuth-Browser-Anmeldung hinzu.
3. Fügen Sie Ihren Amazon-S3-Bucket über **Remote > New Remote > Amazon S3** mit Ihren IAM-Anmeldedaten hinzu.
4. Erstellen Sie einen Synchronisationsjob von HiDrive zu S3 unter **Home > Sync**, führen Sie zuerst einen Dry Run aus und starten Sie ihn dann.

Mit aktivierter automatisierter Zeitplanung fließen Ihre HiDrive-Dateien nach Ihrem Zeitplan zu S3 — für ein anbieterübergreifendes Backup ohne fortlaufenden manuellen Aufwand.

---

**Weiterführende Anleitungen:**

- [HiDrive-Cloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Amazon S3 verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [HiDrive mit Google Drive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />
