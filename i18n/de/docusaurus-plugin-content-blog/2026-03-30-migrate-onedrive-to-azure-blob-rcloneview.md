---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "OneDrive zu Azure Blob migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Migrieren Sie OneDrive-Dateien mit RcloneView zu Azure Blob Storage. Verschieben Sie Unternehmensdokumente in skalierbaren Objektspeicher ohne CLI-Tools oder Skripte."
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - RcloneView
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive zu Azure Blob migrieren — Dateien übertragen mit RcloneView

> Der Aufstieg von OneDrive zu Azure Blob Storage verschafft Ihrem Team skalierbaren, programmierbaren Objektspeicher — und RcloneView macht den Umzug mühelos.

OneDrive eignet sich gut für die alltägliche Zusammenarbeit an Dokumenten, aber Unternehmensteams stoßen häufig an die Speichergrenzen oder benötigen programmatischen Zugriff auf Dateien über Azures REST-APIs. Azure Blob Storage bietet gestaffelte Preise (Hot, Cool und Archive), enorme Skalierbarkeit sowie enge Integration mit Azure Functions, Logic Apps und Data Factory. RcloneView verbindet die beiden Microsoft-Dienste und ermöglicht die Migration von Dateien von OneDrive in Azure-Blob-Container, ohne eine einzige Codezeile zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wenn OneDrive an seine Grenzen stößt

OneDrive for Business enthält bei den meisten Microsoft-365-Plänen 1 TB pro Benutzer, mit optionalen Erweiterungen bis zu 5 TB. Das klingt großzügig, bis Ihr Unternehmen jahrelange Projektarchive, Medieninhalte oder Compliance-Aufzeichnungen angesammelt hat. Azure Blob Storage skaliert bis in den Exabyte-Bereich und kostet in der Cool-Stufe nur 0,018 $ pro GB und Monat — ein Bruchteil dessen, was eine vergleichbare OneDrive-Kapazität kosten würde.

Über die reine Kapazität hinaus unterstützt Azure Blob Funktionen, die OneDrive nicht bieten kann: unveränderliche Speicherrichtlinien für regulatorische Compliance, Azure-CDN-Integration für globale Content-Auslieferung und feingranulare Zugriffskontrolle über Shared Access Signatures (SAS). Die Migration archivierter oder umfangreicher Daten von OneDrive zu Azure Blob zentralisiert den Speicher dort, wo Ihre Infrastruktur bereits vorhanden ist.

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## Beide Remotes konfigurieren

Fügen Sie in RcloneView ein OneDrive-Remote hinzu, indem Sie "Microsoft OneDrive" als Anbietertyp auswählen. Der OAuth-Ablauf öffnet Ihren Browser zur Authentifizierung mit dem Microsoft-Konto. Wählen Sie je nachdem, wo sich Ihre Quelldateien befinden, zwischen OneDrive Personal, OneDrive for Business oder einer bestimmten SharePoint-Dokumentbibliothek. RcloneView zeigt nach abgeschlossener Authentifizierung das Stammverzeichnis des ausgewählten Laufwerks an.

Erstellen Sie für Azure Blob ein neues Remote und wählen Sie "Microsoft Azure Blob Storage." Geben Sie den Namen Ihres Storage-Kontos sowie entweder einen Account Key oder eine SAS-URL ein. Falls Ihr Unternehmen die Azure-Active-Directory-Authentifizierung vorschreibt, unterstützt RcloneView auch diesen Weg. Wählen Sie den Zielcontainer aus — oder notieren Sie sich den Containernamen für die Jobkonfiguration. RcloneView bestätigt die Verbindung und listet vorhandene Container und Blobs auf.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## Die Migration durchführen

Öffnen Sie den zweigeteilten Explorer mit OneDrive auf der einen und Azure Blob auf der anderen Seite. Navigieren Sie zu den OneDrive-Ordnern, die Sie migrieren möchten — zum Beispiel `/Documents/Projects` oder das gesamte Stammverzeichnis. Auf der Azure-Seite navigieren Sie in Ihren Zielcontainer.

Für eine strukturierte Migration erstellen Sie im Job Manager einen Copy-Job. Legen Sie OneDrive als Quellpfad und den Azure-Blob-Container als Ziel fest. Wählen Sie den Modus "Copy", um Dateien zu übertragen, ohne sie während der Übergangsphase aus OneDrive zu löschen. Aktivieren Sie das Flag `--ignore-existing`, falls Sie den Job mehrfach ausführen möchten, damit bereits übertragene Dateien effizient übersprungen werden.

Die API von OneDrive setzt Ratenbegrenzungen, die große Übertragungen verlangsamen können. RcloneView übernimmt Drosselung und Wiederholungsversuche automatisch, und Sie können parallele Übertragungen (das Flag `--transfers`) konfigurieren, um den Durchsatz innerhalb der Grenzen von Microsoft zu optimieren.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## Überprüfung nach der Migration

Vergleichen Sie nach Abschluss des Jobs die Dateianzahl und -größen zwischen OneDrive und Azure Blob mithilfe der Vergleichsfunktion von RcloneView. Öffnen Sie beide Remotes nebeneinander und führen Sie einen Vergleich durch, um etwaige Abweichungen zu erkennen. Azure Blob speichert MD5-Prüfsummen für hochgeladene Objekte, sodass die Prüfsummenverifizierung jede während der Übertragung aufgetretene Beschädigung erkennt.

Konfigurieren Sie nach der Verifizierung Ihre Anwendungen so, dass sie aus Azure Blob statt aus OneDrive lesen. Halten Sie das OneDrive-Remote während einer Übergangsphase in RcloneView verbunden und führen Sie regelmäßige Synchronisationsjobs aus, um alle Dateien zu erfassen, die Benutzer bis zum Abschluss der Umstellung weiterhin zu OneDrive hinzufügen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Authentifizieren Sie Ihr OneDrive-Konto über Microsoft OAuth und wählen Sie den richtigen Laufwerkstyp aus.
3. Fügen Sie Ihr Azure-Blob-Remote mit dem Namen Ihres Storage-Kontos und dem Zugriffsschlüssel oder SAS-Token hinzu.
4. Erstellen Sie einen Copy-Job von OneDrive zu Azure Blob, aktivieren Sie die Prüfsummenverifizierung und führen Sie ihn aus.

Sobald alle Dateien in Azure Blob bestätigt sind, leiten Sie Ihre Workflows um und stellen Sie den OneDrive-Speicher in Ihrem eigenen Tempo außer Betrieb.

---

**Verwandte Anleitungen:**

- [OneDrive zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Azure Blob Storage als lokales Laufwerk einbinden mit RcloneView](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [Azure Blob mit AWS S3 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
