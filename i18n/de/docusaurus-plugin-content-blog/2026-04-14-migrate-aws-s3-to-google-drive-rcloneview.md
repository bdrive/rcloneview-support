---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "AWS S3 zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Dateien von AWS S3 Buckets zu Google Drive verschieben mit der GUI von RcloneView. Keine CLI erforderlich für S3-zu-Google-Drive-Migrationen — übertragen, verifizieren und planen mit Leichtigkeit."
keywords:
  - migrate AWS S3 to Google Drive
  - S3 to Google Drive transfer
  - AWS S3 Google Drive migration
  - rclone S3 to Google Drive
  - cloud-to-cloud migration tool
  - move S3 files to Google Drive
  - object storage to Google Drive
  - RcloneView S3 migration
tags:
  - RcloneView
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3 zu Google Drive migrieren — Dateien übertragen mit RcloneView

> RcloneView führt S3-zu-Google-Drive-Migrationen als direkte Cloud-zu-Cloud-Übertragung durch — kein lokaler Download erforderlich, mit Echtzeit-Fortschrittsanzeige und Prüfsummen-Verifizierung.

Die Migration von AWS S3 zu Google Drive ist ein häufiges Szenario, wenn Teams von infrastrukturorientiertem Speicher zu kollaborationsorientierten Plattformen wechseln. Ein Startup könnte jahrelange S3-Anwendungsprotokolle und Assets in Google Drive archivieren, um den teamübergreifenden Zugriff zu erleichtern. Eine kleine Agentur könnte Kundenlieferungen aus projektbezogenen S3-Buckets in einem gemeinsamen Google Drive konsolidieren. RcloneView macht diese Migration visuell und nachvollziehbar und führt die Übertragung serverseitig durch, ohne Dateien auf Ihrem lokalen Rechner zwischenzuspeichern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes einrichten

Bevor Sie mit der Migration beginnen, fügen Sie beide Cloud-Anbieter zu RcloneView hinzu. Für AWS S3 gehen Sie zu **Remote-Tab → Neues Remote → Amazon S3**, geben Sie Ihre Access Key ID, Ihren Secret Access Key ein und wählen Sie Ihre Bucket-Region. Für Google Drive fügen Sie ein weiteres Remote über die OAuth-Browser-Anmeldung hinzu — RcloneView öffnet die Autorisierungsseite von Google und speichert das Token automatisch.

Sobald beide Remotes konfiguriert sind, öffnen Sie den Explorer in einer Zwei-Panel-Ansicht. Das linke Panel zeigt Ihren S3-Bucket, das rechte Panel zeigt Ihren Ziel-Ordner in Google Drive. Diese Nebeneinander-Ansicht ist ideal, um die Ordnerstruktur vor Beginn der Migration zu bestätigen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Migration mit dem Synchronisations-Assistenten durchführen

Für umfangreiche Migrationen verwenden Sie den Sync-Job-Assistenten anstelle von manuellem Drag-and-Drop. Setzen Sie im **Job Manager → Auftrag hinzufügen** die Quelle auf Ihren S3-Bucket-Pfad (z. B. `mybucket/exports/`) und das Ziel auf Ihren Google-Drive-Ordner. Stellen Sie in Schritt 2 die gleichzeitigen Übertragungen je nach Ihrer Bandbreite auf 8–12 ein und aktivieren Sie die Prüfsummen-Verifizierung, um die Integrität jeder Datei nach der Übertragung zu bestätigen.

Führen Sie zunächst einen **Probelauf (Dry Run)** durch. RcloneView listet jede Datei auf, die kopiert würde, ohne tatsächlich etwas zu übertragen. Bei einem Bucket mit 50.000 Dateien über mehrere hundert GB lässt Sie diese Vorschau den Umfang bestätigen, bevor Sie stundenlange Übertragungszeit investieren. Wenn die Dateiliste korrekt aussieht, führen Sie die eigentliche Synchronisation aus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Umgang mit unterschiedlichen Dateitypen und Filtern

S3-Buckets enthalten oft maschinell generierte Dateien — `.log`-Dateien, temporäre Uploads, Null-Byte-Markerobjekte — die nicht in Google Drive landen müssen. Verwenden Sie die Filterung in Schritt 3, um unerwünschte Erweiterungen auszuschließen: Fügen Sie `.log`, `.tmp` und `.part` zu benutzerdefinierten Ausschlussfiltern hinzu. Sie können auch einen Filter für das maximale Dateialter festlegen, um nur Dateien zu migrieren, die in den letzten 90 Tagen geändert wurden, wodurch der Übertragungsumfang für aktiv genutzte Anwendungsfälle reduziert wird.

Google Drive hat einige Besonderheiten bei der Dateibenennung: Zeichen wie `?`, `*` und `:` in S3-Objektschlüsseln werden von rclone automatisch transliteriert. RcloneView zeigt Kodierungsfehler im Log-Tab an, sodass Sie alle Objekte überprüfen können, die eine Namensänderung erforderten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr AWS-S3-Remote mit Access Key + Secret + Region im Assistenten für neue Remotes hinzu.
3. Fügen Sie Ihr Google-Drive-Remote über die OAuth-Browser-Authentifizierung hinzu.
4. Erstellen Sie einen Sync-Auftrag im Job Manager, führen Sie einen Probelauf zur Vorschau durch und führen Sie dann die Migration aus.

Mit RcloneView läuft Ihre S3-zu-Google-Drive-Migration mit voller Transparenz — keine CLI-Skripte, keine Zwischenspeicherungskosten und ein vollständiger Auftragsverlauf für Ihre Unterlagen.

---

**Verwandte Anleitungen:**

- [Google Drive zu AWS S3 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Inkrementelles Backup: Google Drive zu Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Prüfsummen-verifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
