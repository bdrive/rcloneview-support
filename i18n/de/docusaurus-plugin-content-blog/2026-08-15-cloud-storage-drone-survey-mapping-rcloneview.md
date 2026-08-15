---
slug: cloud-storage-drone-survey-mapping-rcloneview
title: "Cloud-Speicher für Drohnenvermessungs- und Kartierungsunternehmen — Große Datensätze mit RcloneView verwalten"
authors:
  - jay
description: "Verwalten Sie Drohnenvermessungsbilder, Orthomosaike und LiDAR-Datensätze über mehrere Cloud-Speicheranbieter hinweg mit den Synchronisations-, Mount- und Vergleichswerkzeugen von RcloneView."
keywords:
  - Drohnenvermessung Cloud-Speicher
  - Kartierungsunternehmen Backup
  - Orthomosaik Dateispeicherung
  - LiDAR-Daten Cloud-Synchronisation
  - Drohnenbilder Backup
  - Geodatenmanagement
  - RcloneView Drohnenvermessung
  - Vermessungsunternehmen Cloud-Speicher
  - Drohnendaten-Übertragung
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Drohnenvermessungs- und Kartierungsunternehmen — Große Datensätze mit RcloneView verwalten

> Rohaufnahmen, verarbeitete Orthomosaike und Punktwolken häufen sich schnell an — RcloneView hält sie über jede von Ihrem Team genutzte Cloud hinweg organisiert.

Ein einziger Drohnenvermessungsflug kann zehntausende Rohbilder erzeugen, und verarbeitete Ergebnisse wie Orthomosaike und LiDAR-Punktwolken erreichen pro Standort routinemäßig mehrere zehn Gigabyte. Vermessungs- und Kartierungsunternehmen verteilen diese Daten typischerweise auf ein schnelles lokales Laufwerk für die aktive Verarbeitung, Cloud-Speicher für die Auslieferung an Kunden und eine günstigere Archivstufe für abgeschlossene Projekte — was bedeutet, dass Dateien ständig zwischen Speicherorten bewegt werden müssen. RcloneView verwaltet diese Bewegung über eine einzige Oberfläche, statt separate Upload-Tools für jeden Anbieter zu jonglieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rohaufnahmen und verarbeitete Ergebnisse organisieren

Richten Sie separate Remotes für Ihr Rohaufnahmen-Archiv, Ihren Verarbeitungs-Arbeitsbereich und den Cloud-Speicherort ein, an dem fertige Ergebnisse mit Kunden geteilt werden. Der Multi-Panel-Explorer von RcloneView zeigt bis zu vier Speicherorte nebeneinander an, sodass Sie prüfen können, ob ein verarbeitetes Orthomosaik mit dem zugehörigen Flugordner übereinstimmt, bevor Sie die Rohbilder von der lokalen Festplatte archivieren.

<img src="/support/images/en/blog/new-remote.png" alt="Einrichten von Cloud-Remotes für Drohnenvermessungsdaten in RcloneView" class="img-large img-center" />

S3, Azure oder Backblaze B2 lassen sich bereits mit der FREE-Lizenz mit vollem Lese-/Schreibzugriff verbinden — wichtig für Vermessungsunternehmen, die große verarbeitete Datensätze ohne Kosten pro Sitzplatz in Objektspeicher für den langfristigen Kundenzugriff verschieben.

## Große Flugdatensätze ohne manuelle Uploads synchronisieren

Konfigurieren Sie einen Sync-Job mit der Quelle auf Ihrem lokalen Aufnahmeordner und dem Ziel im Cloud-Speicher, und passen Sie dann in den Advanced Settings die Anzahl gleichzeitiger Dateiübertragungen an Ihre Upload-Bandbreite an — tausende kleine Rohbilder profitieren von höherer Parallelität als eine Handvoll großer verarbeiteter Dateien. Mit dem max file age-Filter synchronisieren Sie an aktiven Feldeinsatztagen nur aktuelle Flüge und halten so Bandbreite für zeitkritische Ergebnisse frei.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisieren von Drohnenvermessungsbildern in den Cloud-Speicher mit RcloneView" class="img-large img-center" />

Führen Sie vor der ersten Synchronisation eines neuen Standorts einen Dry Run aus, um zu bestätigen, dass Ordnerstruktur und Dateianzahl mit dem Flugprotokoll übereinstimmen — so erkennen Sie einen fehlenden Ordner, bevor er zu einer Lücke gegenüber dem Kunden wird.

## Ergebnisse mit Folder Compare überprüfen

Bevor Sie ein Projekt an einen Kunden übergeben oder archivieren, prüfen Sie mit Folder Compare, ob alles im Cloud-Speicher hochgeladene mit dem lokalen Verarbeitungsordner übereinstimmt. Dateien, die nur auf einer Seite existieren, sowie Dateien mit abweichender Größe werden markiert — so erkennen Sie einen unterbrochenen Upload, bevor ein Kunde eine fehlende Kachel in seinem Orthomosaik entdeckt.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vergleich lokaler Drohnenvermessungsdateien mit dem Cloud-Speicher in RcloneView" class="img-large img-center" />

Für wiederkehrende Vermessungskunden speichern Sie diese Abläufe als geplante Sync-Jobs (PLUS-Lizenz), sodass die Daten jedes neuen Flugs nach dem von Ihnen konfigurierten Zeitplan im richtigen Kundenordner landen — Job History liefert dabei ein Protokoll, wann genau jeder Datensatz geliefert wurde.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Remotes für Ihr lokales Aufnahmelaufwerk, den Verarbeitungs-Arbeitsbereich und den Cloud-Speicher für die Kundenauslieferung hinzu.
3. Konfigurieren Sie einen Sync-Job mit einer an Ihre typische Flugdatensatzgröße angepassten Übertragungsparallelität.
4. Führen Sie nach jedem Upload Folder Compare aus, um zu bestätigen, dass der Datensatz vollständig übertragen wurde, bevor Sie die Rohaufnahmen archivieren.

Wenn Flugdaten über Speicherstufen hinweg organisiert bleiben, verbringen Sie weniger Zeit mit der Suche nach Dateien und haben mehr Gewissheit, dass jede Kundenauslieferung vollständig ist.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für Landwirtschaft — Felddaten mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [Cloud-Speicher für Bauprojektmanagement mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Große Cloud-Übertragungen mit RcloneView beschleunigen](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
