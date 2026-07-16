---
slug: migrate-pcloud-to-backblaze-b2-rcloneview
title: "pCloud zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Schritt-für-Schritt-Anleitung zur Migration von Dateien von pCloud zu Backblaze B2 mit RcloneView. Verbindung über OAuth und App-Key, Vorschau mit Dry Run und Ausführung des Synchronisationsjobs."
keywords:
  - pCloud zu Backblaze B2 migrieren
  - pCloud Backblaze B2 Übertragung
  - pCloud-Migration RcloneView
  - pCloud zu B2 Synchronisation
  - Cloud-zu-Cloud-Migration
  - Backblaze B2 Archivierung
  - pCloud-Backup-Alternative
  - RcloneView Cloud-Migration
tags:
  - pcloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView

> Der Wechsel von pCloud zu Backblaze B2 bietet deutlich günstigeren Archivspeicher — RcloneView übernimmt die Cloud-zu-Cloud-Übertragung, ohne die Daten über Ihren Rechner zu leiten.

pCloud ist ein zuverlässiger Cloud-Speicherdienst für Privatanwender mit Optionen für Lifetime-Pläne, aber für die Archivierung großer Datenmengen ist die Preisgestaltung von Backblaze B2 pro GB oft kostengünstiger. Egal, ob Sie Cloud-Dienste konsolidieren oder B2 als Archivebene hinzufügen möchten — RcloneView macht die Migration einfach: Beide Anbieter verbinden, mit Dry Run eine Vorschau anzeigen und den Synchronisationsjob ausführen. Die gesamte Übertragung erfolgt Cloud-zu-Cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Schritt 1 — pCloud verbinden

Öffnen Sie RcloneView und gehen Sie zum **Remote Manager**. Klicken Sie auf **New Remote** und wählen Sie **pCloud** aus der Anbieterliste. pCloud verwendet die OAuth-Anmeldung über den Browser — RcloneView öffnet Ihren Browser, Sie melden sich an und autorisieren, und der Token wird gespeichert. Es müssen keine API-Schlüssel manuell verwaltet werden.

Öffnen Sie nach der Autorisierung das pCloud-Remote im File Explorer, um zu bestätigen, dass Sie Ihre Dateien und Ordner sehen können. Notieren Sie sich, welche Verzeichnisse der obersten Ebene Sie migrieren möchten.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Schritt 2 — Backblaze B2 verbinden

Klicken Sie weiterhin im **Remote Manager** erneut auf **New Remote** und wählen Sie **Backblaze B2**. Backblaze B2 authentifiziert sich mit einer **Application Key ID** und einem **Application Key** — beide finden Sie in der Backblaze-Konsole unter **App Keys**. Erstellen Sie einen Schlüssel mit den passenden Berechtigungen (Lese- und Schreibzugriff auf den Ziel-Bucket, oder auf alle Buckets, wenn es sich um eine Migration handelt). Geben Sie beide Werte in RcloneView ein und speichern Sie.

Öffnen Sie das B2-Remote, um zu bestätigen, dass Ihre Buckets geladen werden. Falls der Ziel-Bucket noch nicht existiert, können Sie ihn direkt im RcloneView-File-Explorer erstellen, indem Sie mit der rechten Maustaste auf die Root-Ebene klicken.

## Schritt 3 — Den Migrationsjob konfigurieren

Gehen Sie zu **Jobs** und klicken Sie auf **New Job**. Legen Sie pCloud als Quelle fest und wählen Sie den gewünschten Ordner oder das Root-Verzeichnis. Legen Sie Backblaze B2 als Ziel fest und wählen Sie den Ziel-Bucket sowie den Pfad.

Überprüfen Sie in Schritt 2 des Job-Assistenten die Übertragungsoptionen:

- Aktivieren Sie zuerst **Dry Run**, um genau zu sehen, was kopiert wird
- Setzen Sie **transfers** auf 4–8 für eine ausgewogene Balance zwischen Geschwindigkeit und API-Stabilität
- Aktivieren Sie die **Checksummenprüfung**, wenn Sie die Dateiintegrität nach der Übertragung bestätigen möchten

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from pCloud to Backblaze B2" class="img-large img-center" />

## Schritt 4 — Dry Run ausführen, dann die eigentliche Migration

Klicken Sie bei aktiviertem Dry Run auf **Run**. RcloneView protokolliert, was übertragen würde — Dateinamen, Größen und Anzahl —, ohne dabei Änderungen vorzunehmen. Überprüfen Sie die Ausgabe im Tab **Log**. Wenn die Liste korrekt aussieht, gehen Sie zurück zu den Jobeinstellungen, deaktivieren Sie Dry Run und führen Sie den Job erneut aus.

Die eigentliche Migration erfolgt Cloud-zu-Cloud: pCloud sendet Daten direkt an B2, ohne über Ihren lokalen Rechner zu laufen, sodass Ihre lokale Bandbreite kein Engpass ist. Die Übertragungsgeschwindigkeit hängt von den Servern beider Anbieter ab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Backblaze B2 migration job" class="img-large img-center" />

## Die Migration überprüfen

Öffnen Sie nach Abschluss des Jobs das Tool **Folder Compare** und richten Sie es auf die pCloud-Quelle und das B2-Ziel aus. RcloneView vergleicht beide Seiten und markiert etwaige Abweichungen. Bei wertvollen Daten bestätigt dieser Schritt, dass die Migration vollständig war, bevor Sie Dateien aus pCloud entfernen.

Die Job History erfasst den vollständigen Ablauf: Gesamtzahl der Dateien, übertragene Datenmenge, Dauer und etwaige Fehler. Bewahren Sie diese zur Referenz auf.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie pCloud über OAuth und Backblaze B2 über den Application Key im **Remote Manager**.
3. Erstellen Sie einen Synchronisationsjob mit pCloud als Quelle und B2 als Ziel; führen Sie zuerst einen Dry Run aus.
4. Deaktivieren Sie Dry Run und führen Sie die Migration aus; überprüfen Sie das Ergebnis mit Folder Compare.

Sobald die Migration bestätigt ist, bietet Backblaze B2 einen langlebigen, kostengünstigen Archivspeicher für alles, was zuvor in pCloud lag.

---

**Weiterführende Anleitungen:**

- [pCloud mit RcloneView auf AWS S3 sichern](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [pCloud zu OneDrive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Checksummen-verifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
