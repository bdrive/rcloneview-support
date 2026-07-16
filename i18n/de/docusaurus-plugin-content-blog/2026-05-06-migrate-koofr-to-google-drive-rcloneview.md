---
slug: migrate-koofr-to-google-drive-rcloneview
title: "Koofr zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Verschieben Sie Ihre Dateien von Koofr zu Google Drive mit RcloneView. Übertragen Sie Cloud-Daten direkt zwischen Anbietern und erhalten Sie die Ordnerstruktur, ohne lokale Downloads."
keywords:
  - Koofr zu Google Drive migrieren
  - Koofr zu Google Drive Übertragung
  - RcloneView Koofr Google Drive Migration
  - Cloud-zu-Cloud-Migrationstool
  - Koofr Migrations-GUI
  - Dateien von Koofr zu Google Drive verschieben
  - Koofr Cloud-Migration
  - Google Drive Import aus Koofr
  - RcloneView Cloud-Migration
  - Koofr Dateiübertragungstool
tags:
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr zu Google Drive migrieren — Dateien übertragen mit RcloneView

> RcloneView verschiebt Ihre Koofr-Dateien direkt zu Google Drive — die Ordnerstruktur bleibt erhalten, die Integrität wird überprüft, und ein zwischengeschalteter lokaler Speicher ist nicht erforderlich.

Koofrs europäischer, auf Datenschutz ausgerichteter Speicher ist bei Nutzern beliebt, die Wert auf DSGVO-Konformität und Datenresidenz legen. Wenn Teams zu Google Workspace wechseln und ihre Koofr-Inhalte in Google Drive benötigen, übernimmt RcloneView die Migration sauber: Es verbindet sich gleichzeitig mit beiden Anbietern und überträgt die Daten auf einem direkten Cloud-zu-Cloud-Weg.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr und Google Drive in RcloneView verbinden

Fügen Sie beide Anbieter als Remotes hinzu, bevor Sie mit der Migration beginnen. Gehen Sie für Koofr zu Remote-Tab > New Remote, wählen Sie Koofr aus und schließen Sie die Verbindung mit Ihren Koofr-Zugangsdaten ab. Wählen Sie für Google Drive Google Drive aus und schließen Sie die OAuth-Browser-Authentifizierung ab — der OAuth-Ablauf von Google Drive ist vollständig automatisiert und erfordert keine API-Schlüssel.

Sobald beide Remotes konfiguriert sind, können Sie im Zweifenster-Explorer Koofr auf der einen und Google Drive auf der anderen Seite sehen. Dieser visuelle Vergleich hilft Ihnen, die Migration zu planen: Bestätigen Sie Ordnerstrukturen, identifizieren Sie verschachtelte Verzeichnisse und entscheiden Sie, ob Sie das gesamte Koofr-Stammverzeichnis oder bestimmte Unterordner migrieren möchten.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## Den Migrations-Sync-Job einrichten

Erstellen Sie einen benannten Sync-Job in RcloneView für eine kontrollierte, wiederholbare Migration:

1. **Quelle:** Wählen Sie Ihr Koofr-Remote aus (Stammverzeichnis oder bestimmter Ordner)
2. **Ziel:** Wählen Sie Ihr Google-Drive-Remote und den Zielordner aus
3. **Job-Name:** Verwenden Sie etwas Beschreibendes wie `koofr-to-gdrive-migration`
4. **Modus:** Wählen Sie Copy, um Dateien zu verschieben, ohne sie aus Koofr zu entfernen

Für Teams, die große gemeinsam genutzte Verzeichnisse migrieren, kann der Filter **Max folder depth** dabei helfen, Ordner der obersten Ebene unabhängig voneinander zu migrieren und jede Ebene vor dem Fortfahren zu validieren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## Vorschau mit Dry Run vor der Übertragung

Nutzen Sie den Dry-Run-Modus von RcloneView, um den Umfang der Migration in der Vorschau zu sehen, ohne Dateien zu verschieben. Die Dry-Run-Ausgabe listet jede Datei auf, die kopiert würde, sortiert nach Ordner — so erhalten Sie ein genaues Bild davon, was der Job tun wird. Das ist besonders nützlich bei der Migration verschachtelter Koofr-Ordnerstrukturen, wenn Sie das Ziel-Layout vor der Ausführung überprüfen möchten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Übertragungsfortschritt überwachen und Verlauf einsehen

Der Transfer-Tab von RcloneView zeigt den Live-Fortschritt der Koofr-zu-Google-Drive-Migration — Dateien, die gerade übertragen werden, die aktuelle Geschwindigkeit und die insgesamt verschobene Datenmenge. Nach Abschluss protokolliert die Job History die vollständige Zusammenfassung: Gesamtübertragungsgröße, Dauer, Dateianzahl und aufgetretene Fehler. Falls die API-Ratenlimits von Google Drive die Übertragung verlangsamt haben, erfasst das Verlaufsprotokoll diese Wiederholungsversuche.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Koofr und Google Drive als Remotes im Remote-Tab > New Remote hinzu.
3. Erstellen Sie einen Copy- oder Sync-Job von Koofr zu Ihrem Google-Drive-Ziel.
4. Führen Sie einen Dry Run zur Vorschau aus und starten Sie anschließend die Migration.

Der Wechsel von Koofr zu Google Drive ist mit RcloneView ein unkomplizierter Cloud-zu-Cloud-Vorgang — kein lokaler Speicherplatz erforderlich und volle Transparenz über jede übertragene Datei.

---

**Verwandte Anleitungen:**

- [Koofr-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Google-Drive-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr vs. Jottacloud — Vergleich europäischer Cloud-Speicher mit RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
