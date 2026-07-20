---
slug: migrate-dropbox-to-wasabi-rcloneview
title: "So migrieren Sie von Dropbox zu Wasabi Hot Cloud Storage mit RcloneView"
authors:
  - tayson
description: Schritt-für-Schritt-Anleitung zur Migration von Dateien von Dropbox zu Wasabi Hot Cloud Storage mit RcloneView — Kosten sparen, mit Vergleich verifizieren und laufende Synchronisation planen.
keywords:
  - rcloneview
  - dropbox to wasabi
  - migrate dropbox
  - wasabi hot storage
  - cloud migration
  - s3 compatible storage
  - rclone GUI
  - dropbox alternative
  - wasabi cloud storage
  - cloud-to-cloud transfer
tags:
  - RcloneView
  - dropbox
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - guide
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So migrieren Sie von Dropbox zu Wasabi Hot Cloud Storage mit RcloneView

> Dropbox ist praktisch, aber bei großen Datenmengen teuer. **Wasabi Hot Cloud Storage** bietet S3-kompatiblen Objektspeicher zu einem Bruchteil der Kosten — und **RcloneView** macht die Migration mühelos.

Dropbox ist seit langem eine erste Wahl für Dateifreigabe und Zusammenarbeit. Doch mit wachsendem Speicherbedarf — insbesondere bei Medienunternehmen, Kreativagenturen und datenintensiven Teams — wird das nutzerbasierte Preismodell schwer zu rechtfertigen. Wasabi bietet Hot Cloud Storage ohne Egress-Gebühren, ohne API-Anfragegebühren und mit vorhersehbaren Preisen pro Terabyte, die die Speicherkosten im Vergleich zu Dropbox Business um 80 % oder mehr senken können.

Die eigentliche Herausforderung ist die Migration selbst. Hunderte von Gigabyte (oder Terabyte) zwischen Clouds zu verschieben, erfordert ein zuverlässiges Tool, das Unterbrechungen bewältigen, die Integrität überprüfen und den Fortschritt überwachen lässt. Genau das bietet RcloneView — eine visuelle Zwei-Fenster-Oberfläche für Cloud-zu-Cloud-Übertragungen, angetrieben von der bewährten Engine von rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Dropbox zu Wasabi migrieren

Die Beweggründe lassen sich meist auf Kosten und Kontrolle zurückführen:

- **Kosteneinsparung**: Wasabi berechnet etwa 6,99 $/TB pro Monat ohne Egress- oder API-Gebühren. Dropbox-Business-Pläne berechnen pro Nutzer, unabhängig vom tatsächlich genutzten Speicherplatz.
- **S3-Kompatibilität**: Wasabi spricht die S3-API, sodass Ihre Daten von jedem S3-kompatiblen Tool, SDK oder jeder Anwendung aus zugänglich sind — kein Vendor Lock-in.
- **Keine Egress-Gebühren**: Laden Sie Ihre Daten jederzeit herunter, ohne überraschende Bandbreitenkosten.
- **Standardmäßig Hot Storage**: Jedes Objekt in Wasabi ist sofort zugänglich. Keine Abrufverzögerungen, keine zu verwaltenden Speicherklassen.
- **Skalierbarkeit**: Wasabi verarbeitet Petabytes, ohne Ihren Workflow oder Ihr Preismodell zu ändern.

## Schritt 1: Beide Remotes in RcloneView einrichten

Verbinden Sie zunächst beide Clouds:

1. Öffnen Sie RcloneView und klicken Sie auf **+ New Remote**.
2. **Dropbox hinzufügen**: Wählen Sie Dropbox, schließen Sie die OAuth-Anmeldung ab und benennen Sie den Remote (z. B. `MyDropbox`).
3. **Wasabi hinzufügen**: Wählen Sie S3-kompatiblen Speicher, wählen Sie Wasabi als Anbieter, geben Sie Ihren Access Key, Secret Key und den Region-Endpunkt ein (z. B. `s3.wasabisys.com`). Benennen Sie den Remote (z. B. `MyWasabi`).
4. Überprüfen Sie, ob beide Remotes im Explorer angezeigt werden.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Wasabi remotes in RcloneView" class="img-large img-center" />

## Schritt 2: Migration planen

Bevor Sie etwas verschieben, planen Sie Ihre Ordnerstruktur:

- **Entscheiden Sie, was migriert werden soll**: Alles oder nur bestimmte Ordner? Nutzen Sie die Filter von RcloneView, um temporäre Dateien, freigegebene Verknüpfungen oder alte Projektarchive auszuschließen.
- **Wasabi-Bucket erstellen**: Falls noch nicht geschehen, erstellen Sie einen Bucket in der Wasabi-Konsole oder über den Explorer von RcloneView.
- **Ordnerpfade zuordnen**: Dropbox verwendet ein flaches Root-Verzeichnis; Wasabi verwendet Buckets und Präfixe. Entscheiden Sie, ob Sie `MyWasabi:my-bucket/Dropbox/` oder eine flachere Struktur möchten.

## Schritt 3: Migration durchführen

Öffnen Sie Dropbox auf einer Seite des Explorers und Wasabi auf der anderen. Sie haben mehrere Möglichkeiten:

### Drag-and-Drop für kleine Mengen

Wählen Sie Ordner in Dropbox aus und ziehen Sie sie in das Wasabi-Fenster. Dies eignet sich gut, um mit einer kleinen Teilmenge zu testen, bevor Sie sich für eine vollständige Migration entscheiden.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Dropbox to Wasabi" class="img-large img-center" />

### Kopierauftrag für die vollständige Migration

Für große Migrationen erstellen Sie einen **Copy**-Auftrag. Dieser bietet Ihnen die Möglichkeit eines Dry Run, eine Fortschrittsüberwachung und die Möglichkeit, bei Unterbrechung fortzufahren.

1. Wählen Sie den Quellordner in Dropbox und das Ziel in Wasabi aus.
2. Wählen Sie **Copy** als Vorgang.
3. Führen Sie zunächst einen **Dry Run** aus, um zu sehen, was übertragen wird.
4. Starten Sie den Auftrag und überwachen Sie den Fortschritt in Echtzeit.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during Dropbox to Wasabi migration" class="img-large img-center" />

## Schritt 4: Mit Compare verifizieren

Nach Abschluss der Migration überprüfen Sie die Integrität mit der **Compare**-Funktion von RcloneView:

1. Öffnen Sie Dropbox und Wasabi nebeneinander.
2. Führen Sie einen Ordnervergleich für die migrierten Verzeichnisse durch.
3. Überprüfen Sie die Ergebnisse — alle als unterschiedlich oder fehlend markierten Dateien erfordern Aufmerksamkeit.

Dieser Schritt ist bei großen Migrationen entscheidend, bei denen Netzwerk-Timeouts oder API-Ratenbegrenzungen dazu geführt haben können, dass einzelne Dateien fehlgeschlagen sind.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Dropbox and Wasabi to verify migration" class="img-large img-center" />

## Schritt 5: Umgang mit großen Datenmengen

Wenn Sie Terabyte an Daten migrieren, beachten Sie folgende Tipps:

- **API-Ratenbegrenzungen von Dropbox**: Dropbox drosselt API-Anfragen. RcloneView und rclone übernehmen Wiederholungsversuche automatisch, aber sehr große Migrationen können Tage dauern. Haben Sie Geduld.
- **Außerhalb der Geschäftszeiten ausführen**: Starten Sie große Übertragungen über Nacht oder am Wochenende, um die Auswirkungen auf die Dropbox-Nutzung Ihres Teams zu minimieren.
- **Inkrementelle Durchläufe nutzen**: Wird der erste Durchlauf unterbrochen, führen Sie einfach denselben Copy-Auftrag erneut aus. Rclone überspringt Dateien, die am Ziel bereits vorhanden sind und übereinstimmen.
- **Mindestspeicherdauer von Wasabi beachten**: Wasabi hat eine Richtlinie zur Mindestspeicherdauer von 90 Tagen. Planen Sie entsprechend, wenn Sie vor der endgültigen Migration testen.

## Schritt 6: Laufende Synchronisation planen (optional)

Wenn Sie eine Übergangsphase benötigen, in der Dropbox und Wasabi synchron bleiben:

1. Erstellen Sie einen **Sync**-Auftrag von Dropbox zu Wasabi.
2. Planen Sie ihn im Panel **Job Scheduling** so, dass er täglich oder wöchentlich ausgeführt wird.
3. Sobald Ihr Team vollständig zu Wasabi gewechselt ist, deaktivieren Sie den Zeitplan und stellen Sie Dropbox außer Betrieb.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync from Dropbox to Wasabi" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Dropbox und Wasabi verbinden** im Assistenten „New Remote“.
3. **Kopieren, verifizieren und planen** — migrieren Sie in Ihrem eigenen Tempo mit voller Übersicht.

Der Wechsel von Dropbox muss kein Wochenendprojekt sein. RcloneView macht ihn zu einem verwalteten, wiederholbaren Prozess.

---

**Weitere Anleitungen:**

- [Migration von Dropbox zu Google Drive mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Vergleich Wasabi vs. Backblaze B2 vs. IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Migration von Dropbox zu Azure Blob Storage mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />
