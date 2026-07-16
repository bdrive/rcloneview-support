---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "Cloud-Speicherauslastung und Kontingente mit RcloneView analysieren"
authors:
  - tayson
description: "Überwachen Sie die Cloud-Speichernutzung, prüfen Sie Kontingente, identifizieren Sie große Ordner und planen Sie Kapazitäten über mehrere Anbieter hinweg mit dem Dashboard von RcloneView und dem rclone about-Befehl."
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicherauslastung und Kontingente mit RcloneView analysieren

> Bevor Sie Cloud-Kosten optimieren können, müssen Sie genau sehen, wohin Ihr Speicherplatz fließt. RcloneView bündelt Nutzungsdaten und Kontingentinformationen für jeden verbundenen Remote an einem Ort.

Die meisten Cloud-Speicherkosten werden durch das Volumen bestimmt. Egal, ob Sie bei S3 pro Gigabyte zahlen, innerhalb eines kostenlosen Kontingents bei Google Drive bleiben oder ein Team-Kontingent bei OneDrive teilen – zu wissen, wie viel Speicherplatz jeder Remote verbraucht, ist essenziell für Kostenkontrolle und Kapazitätsplanung. Der `about`-Befehl von rclone fragt die API eines Anbieters nach Gesamt-, genutztem, freiem und im Papierkorb befindlichem Speicherplatz ab. RcloneView stellt diese Informationen visuell dar, sodass Sie alle Ihre Remotes überwachen können, ohne zwischen den Dashboards der einzelnen Anbieter wechseln zu müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was Rclone About meldet

Der Befehl `rclone about` liefert Speichermetriken direkt aus der API des Anbieters. Eine typische Antwort umfasst:

| Metrik | Beschreibung |
|--------|-------------|
| **Gesamt** | Dem Konto zugewiesenes Gesamtkontingent |
| **Genutzt** | Aktuell durch Dateien belegter Speicherplatz |
| **Frei** | Verbleibender verfügbarer Speicherplatz |
| **Papierkorb** | Speicherplatz, der von Elementen im Papierkorb belegt wird |
| **Sonstiges** | Speicherplatz, der von anderen Diensten genutzt wird (z. B. Gmail bei Google-Konten) |

Nicht jeder Anbieter meldet alle Felder. S3-kompatible Dienste melden beispielsweise oft nur den genutzten Speicherplatz, da Buckets kein festes Kontingent haben. Google Drive meldet alle fünf Felder und ist damit einer der informativsten Anbieter.

## Speichernutzung in RcloneView anzeigen

RcloneView bietet eine visuelle Übersicht über Ihre verbundenen Remotes:

1. Öffnen Sie **RcloneView** und navigieren Sie zum **Dashboard** oder **Remote Explorer**.
2. Wählen Sie den Remote aus, den Sie überprüfen möchten.
3. Sehen Sie sich die Speicherzusammenfassung mit genutztem, freiem und Gesamtspeicherplatz an.

Für eine schnelle Übersicht über alle Remotes bietet das Dashboard einen Blick auf den Verbrauch jedes verbundenen Anbieters auf einen Blick.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## Rclone About im Terminal ausführen

Für Rohzahlen oder Skripting öffnen Sie das **Terminal** in RcloneView und führen Sie aus:

```bash
rclone about gdrive:
```

Beispielausgabe:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

Um mehrere Remotes schnell zu prüfen:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

Verwenden Sie `--json` für maschinenlesbare Ausgaben, die von Skripten verarbeitet werden können:

```bash
rclone about gdrive: --json
```

## Große Ordner identifizieren

Die Gesamtnutzung zu kennen ist ein Anfang. Um herauszufinden, welche Ordner den meisten Speicherplatz beanspruchen, benötigen Sie den Befehl `rclone size`:

```bash
rclone size gdrive:/Photos
```

Dies liefert die Gesamtanzahl und Größe aller Dateien im angegebenen Pfad. Um Ihre größten Ordner zu finden, führen Sie den Befehl für Verzeichnisse auf oberster Ebene aus und vergleichen Sie die Ergebnisse.

Im **Explorer** von RcloneView können Sie in jeden Remote hineinnavigieren und beim Durchsuchen Ordnergrößen sehen, was es einfach macht, Speicherfresser zu finden, ohne Befehle auszuführen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## Kontingentüberwachung über mehrere Anbieter hinweg

Verschiedene Anbieter handhaben Kontingente unterschiedlich:

| Anbieter | Kontingentmodell | Hinweise |
|----------|------------|-------|
| **Google Drive** | Gemeinsam genutzt von Drive, Gmail, Photos | 15 GB kostenlos; Workspace-Pläne variieren |
| **OneDrive** | Zuweisung pro Benutzer | 5 GB kostenlos; Microsoft 365-Pläne bieten 1 TB+ |
| **Dropbox** | Kontingent pro Konto | 2 GB kostenlos; Plus bietet 2 TB |
| **Backblaze B2** | Pay-per-Use, kein festes Kontingent | Monatliche Abrechnung pro gespeichertem GB |
| **Amazon S3** | Pay-per-Use, kein festes Kontingent | Gestaffelte Preise nach Speicherklasse |
| **pCloud** | Lebenslanges oder Abo-Kontingent | 10 GB kostenlos; Lebenszeit-Pläne verfügbar |

Bei Pay-per-Use-Anbietern wie S3 und B2 gibt es kein Kontingent, das erreicht werden kann, aber die direkte Überwachung der Nutzung kontrolliert Ihre Rechnung. Bei kontingentbasierten Anbietern führt das stillschweigende Ausgehen des Speicherplatzes zu fehlgeschlagenen Synchronisationen und Backups.

## Kapazität planen und Kosten schätzen

Nutzen Sie Speichernutzungsdaten für die Vorausplanung:

1. **Wachstum über die Zeit verfolgen** -- führen Sie `rclone about` regelmäßig aus und protokollieren Sie die Ergebnisse. Eine einfache Tabelle mit der monatlichen Nutzung pro Remote zeigt Trends auf.
2. **Monatliche Kosten schätzen** für Pay-per-Use-Anbieter:
   - Backblaze B2: 0,006 $/GB/Monat für Speicher
   - Amazon S3 Standard: 0,023 $/GB/Monat
   - Wasabi: 0,0069 $/GB/Monat (1 TB Mindestabnahme)
3. **Warnungen einrichten** -- wenn ein kontingentbasierter Remote 80 % Auslastung überschreitet, planen Sie eine Bereinigung oder ein Upgrade.
4. **Anbieter vergleichen** -- wenn ein Remote pro GB günstiger ist, erwägen Sie, kalte Daten dorthin zu migrieren.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## Speicherplatz aus dem Papierkorb zurückgewinnen

Einer der am meisten übersehenen Speicherverbraucher ist der Papierkorb. Sowohl Google Drive als auch OneDrive rechnen Dateien im Papierkorb auf Ihr Kontingent an. Die Ausgabe von `rclone about` zeigt den Speicherplatz im Papierkorb explizit an, und Sie können ihn zurückgewinnen mit:

```bash
rclone cleanup gdrive:
```

In RcloneView ist dies über die Benutzeroberfläche verfügbar, ohne Befehle eingeben zu müssen. Das Zurückgewinnen von Speicherplatz aus dem Papierkorb ist oft der schnellste Weg, um Gigabytes freizugeben, ohne aktive Dateien zu löschen.

## Nutzung über Anbieter hinweg vergleichen

Bei der Verwaltung mehrerer Cloud-Konten hilft ein anbieterübergreifender Vergleich bei Entscheidungen wie:

- **Wo neue Backups gespeichert werden sollen** -- Daten zum Remote mit dem meisten Spielraum leiten.
- **Welcher Anbieter skaliert werden soll** -- wenn die S3-Kosten schneller wachsen als bei B2, untersuchen Sie den Grund.
- **Wann archiviert werden soll** -- selten genutzte Daten von teurem Speicher in eine günstigere Stufe verschieben.

Das Multi-Remote-Dashboard von RcloneView macht diesen Vergleich sofort möglich. Statt sich bei drei verschiedenen Anbieter-Dashboards anzumelden, sehen Sie alle Nutzungsdaten in einer einzigen Oberfläche.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## Best Practices

- **Kontingente vor dem Start großer Übertragungen prüfen** -- ein vollständiges Ziel führt zu stillen Fehlern.
- **Papierkorbnutzung überwachen** und regelmäßig bereinigen, um Phantom-Kontingentverbrauch zu vermeiden.
- **Nutzung monatlich protokollieren** für Kostenverfolgung und Trendanalyse.
- **`rclone size`** für bestimmte Ordner verwenden, um die größten Speicherverbraucher zu finden.
- **Prüfungen automatisieren**, indem Sie `rclone about`-Befehle als geplante Jobs in RcloneView speichern.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher bereinigen: Papierkorb leeren und alte Versionen entfernen](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Wasabi vs. Backblaze B2 vs. IDrive e2 im Vergleich](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Google Drive vs. OneDrive for Business](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />
