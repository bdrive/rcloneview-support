---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "Cloud-Speicher aufräumen: Papierkorb leeren und alte Versionen entfernen mit RcloneView"
authors:
  - tayson
description: "Geben Sie Cloud-Speicher frei, indem Sie den Papierkorb leeren, alte Dateiversionen entfernen und verwaiste Daten bei Google Drive, OneDrive, S3 und mehr mit RcloneView bereinigen."
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - RcloneView
  - feature
  - cleanup
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher aufräumen: Papierkorb leeren und alte Versionen entfernen mit RcloneView

> Gelöschte Dateien und alte Versionen verbrauchen still und leise Ihr Cloud-Kontingent. RcloneView macht es einfach, sie zu entfernen und Speicherplatz zurückzugewinnen, für den Sie bereits bezahlen.

Jedes Mal, wenn Sie eine Datei bei Google Drive löschen, landet sie im Papierkorb. Jedes Mal, wenn OneDrive ein Dokument überschreibt, wird die alte Version behalten. Jedes Mal, wenn ein S3-Bucket mit aktivierter Versionierung ein Update erhält, bleibt das vorherige Objekt bestehen. Diese unsichtbaren Kopien sammeln sich über Monate und Jahre an, verbrauchen Kontingent und treiben die Speicherkosten in die Höhe. Der `cleanup`-Befehl von rclone entfernt diesen versteckten Ballast, und mit RcloneView können Sie ihn mit wenigen Klicks ausführen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie Papierkorb- und versionierte Dateien Kontingent verschwenden

Die meisten Cloud-Anbieter rechnen Dateien im Papierkorb und versionierte Dateien auf Ihr Speicherkontingent an. Die Auswirkung ist oft größer als erwartet:

| Anbieter | Was auf das Kontingent angerechnet wird | Automatische Löschrichtlinie |
|----------|--------------------------|-------------------|
| **Google Drive** | Dateien im Papierkorb, alle Dateiversionen | Papierkorb wird nach 30 Tagen automatisch geleert |
| **OneDrive** | Elemente im Papierkorb, Versionsverlauf | Papierkorb wird nach 93 Tagen automatisch geleert |
| **Dropbox** | Gelöschte Dateien und frühere Versionen | 30 Tage aufbewahrt (Basic) oder 180 Tage (Professional) |
| **Amazon S3** | Alle Objektversionen (bei aktivierter Versionierung) | Keine automatische Löschung; Lifecycle-Regeln erforderlich |
| **Backblaze B2** | Alle Dateiversionen | Keine automatische Löschung ohne Lifecycle-Regeln |
| **Google Cloud Storage** | Nicht aktuelle Objektversionen | Konfigurierbar über Lifecycle-Richtlinien |

Ein Google-Drive-Konto mit 90 % Auslastung kann allein 5-10 % seiner Nutzung im Papierkorb liegen haben. Bei S3-Buckets mit Versionierung können alte Versionen den tatsächlichen Speicherverbrauch über die Zeit verdoppeln oder verdreifachen.

## Cleanup je Anbieter ausführen

### Google Drive Papierkorb

Der Papierkorb von Google Drive ist die häufigste Quelle versteckter Nutzung. So leeren Sie ihn:

```bash
rclone cleanup gdrive:
```

Dies löscht dauerhaft alle Dateien im Google-Drive-Papierkorb. Es gibt kein Rückgängigmachen -- stellen Sie sicher, dass Sie nichts im Papierkorb mehr benötigen, bevor Sie dies ausführen.

In RcloneView können Sie Cleanup über die Benutzeroberfläche auslösen, ohne das Terminal zu öffnen. Navigieren Sie zu Ihrem Google-Drive-Remote und verwenden Sie die Cleanup-Aktion.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### OneDrive Papierkorb

OneDrive bewahrt gelöschte Dateien bis zu 93 Tage lang im Papierkorb auf:

```bash
rclone cleanup onedrive:
```

Dies leert den Papierkorb. Bei OneDrive-Business-Konten mit großen Papierkörben kann dies sofort erheblichen Speicherplatz freigeben.

### Versionierte S3-Objekte

S3-Buckets mit aktivierter Versionierung sammeln alte Objektversionen an. Der Cleanup-Befehl von rclone entfernt nicht aktuelle Versionen:

```bash
rclone cleanup s3-remote:my-bucket
```

Bei Buckets mit Tausenden versionierter Objekte kann dieser Vorgang einige Zeit dauern. Sie können bestimmte Präfixe gezielt bereinigen:

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox und andere Anbieter

Dropbox unterstützt den Cleanup-Befehl nicht direkt über rclone. Bei Dropbox verwalten Sie gelöschte Dateien und Versionen über die Dropbox-Weboberfläche oder API. Andere Anbieter wie pCloud und Backblaze B2 unterstützen Cleanup ähnlich wie in den obigen Beispielen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## Prüfen, wie viel Speicherplatz der Papierkorb verbraucht

Bevor Sie Cleanup ausführen, prüfen Sie, wie viel Speicherplatz Sie zurückgewinnen können:

```bash
rclone about gdrive:
```

Die Ausgabe enthält eine **Trashed**-Zeile, die genau anzeigt, wie viel Speicherplatz von gelöschten Dateien belegt wird:

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

In diesem Beispiel würde das Leeren des Papierkorbs sofort 3,8 GiB freigeben -- mehr als eine Verdopplung des verfügbaren Speicherplatzes.

## Alte Dateiversionen selektiv entfernen

Manche Workflows erfordern, die neueste Version zu behalten, aber alles Ältere zu entfernen. Rclone unterstützt dies mit backend-spezifischen Befehlen:

Für S3 mit Versionierung:

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

Dies entfernt nur die versteckten (nicht aktuellen) Versionen und lässt die aktuelle Version jedes Objekts unverändert.

Für Google Drive können Sie `--drive-keep-revision-forever=false` in Ihrer Remote-Konfiguration verwenden, um eine unbegrenzte Versionsaufbewahrung künftig zu verhindern.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## Cleanup mit geplanten Jobs automatisieren

Manuelles Cleanup funktioniert, aber geplantes Cleanup verhindert, dass das Problem erneut auftritt:

1. Erstellen Sie in RcloneView einen neuen **Job** mit dem Cleanup-Befehl für jedes Remote.
2. Öffnen Sie den **Job Scheduler** und legen Sie einen wiederkehrenden Zeitplan fest -- monatlich reicht für die meisten Konten aus.
3. Überprüfen Sie den **Job-Verlauf** nach jedem Lauf, um erfolgreiches Cleanup zu bestätigen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

Ein monatlicher Cleanup-Zeitplan stellt sicher, dass sich Papierkorb und alte Versionen nie so weit ansammeln, dass sie Kontingentprobleme oder überhöhte Rechnungen verursachen.

## Sicherheitsüberlegungen

- **Cleanup ist endgültig** -- Dateien im Papierkorb können nach der Ausführung von `rclone cleanup` nicht wiederhergestellt werden.
- **Papierkorb zuerst prüfen** -- durchsuchen Sie den Papierkorb Ihres Anbieters über dessen Weboberfläche, bevor Sie ihn endgültig leeren.
- **S3-Versionierung dient einem Zweck** -- wenn Sie sich für Rollbacks auf Versionen verlassen, führen Sie Cleanup nicht wahllos durch. Erwägen Sie stattdessen Lifecycle-Regeln, die die letzten N Versionen behalten.
- **Zuerst an einem unkritischen Remote testen** -- bestätigen Sie, dass das Verhalten Ihren Erwartungen entspricht, bevor Sie Cleanup an Produktionsdaten ausführen.
- **Ein Trockenlauf ist nicht verfügbar** für Cleanup -- anders als bei Synchronisation oder Kopieren gibt es keinen `--dry-run`-Modus. Fahren Sie erst mit Zuversicht fort, nachdem Sie überprüft haben, was sich in Ihrem Papierkorb befindet.

## Die Kostenauswirkung

Bei nutzungsbasierten Anbietern reduziert Cleanup direkt Ihre Rechnung:

| Anbieter | Speicherkosten | 100 GB alte Versionen/Papierkorb |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/Monat | $2.30/Monat gespart |
| Backblaze B2 | $0.006/GB/Monat | $0.60/Monat gespart |
| Google Cloud Standard | $0.020/GB/Monat | $2.00/Monat gespart |
| Wasabi | $0.0069/GB/Monat | $0.69/Monat gespart |

Bei Anbietern mit Kontingenten hilft Cleanup, das Erreichen von Grenzwerten zu vermeiden, die Synchronisationen und Backups unterbrechen.

---

**Verwandte Anleitungen:**

- [Cloud-Speichernutzung und Kontingente analysieren](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Wasabi vs. Backblaze B2 vs. IDrive e2 Vergleich](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Cloud-zu-Cloud-Übertragungen und Synchronisation](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
