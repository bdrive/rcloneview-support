---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "Langsames S3-Bucket-Listing und langsame Synchronisation bei vielen kleinen Dateien beheben — Tuning mit RcloneView"
authors:
  - morgan
description: "Langsame S3-Synchronisation und langsames Listing bei Buckets mit vielen kleinen Dateien beheben. Checker, Transfers und Filter in RcloneView abstimmen und mit Dry Run prüfen."
keywords:
  - S3-Synchronisation viele kleine Dateien langsam
  - S3-Bucket-Listing langsam
  - rclone Checkers Tuning
  - S3-Synchronisation Millionen Dateien
  - RcloneView S3
  - S3-Synchronisation beschleunigen
  - Übertragung kleiner Dateien langsam
  - S3-kompatible Synchronisation Leistung
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Langsames S3-Bucket-Listing und langsame Synchronisation bei vielen kleinen Dateien beheben — Tuning mit RcloneView

> Ein Bucket mit Hunderttausenden winziger Dateien wird wegen des Overheads pro Objekt langsam synchronisiert, nicht wegen der Bandbreite – und einige Job-Einstellungen ändern das.

Der Proxy-Ordner eines Fotografen oder das Log-Archiv einer Anwendung kann eine riesige Zahl kleiner Objekte enthalten. Jedes benötigt einen Listing-Eintrag, einen Vergleich und eine Anfrage, sodass die Synchronisation trotz freiem Netzwerk nur schleppend vorankommt. RcloneView stellt die relevanten rclone-Einstellungen im Job-Assistenten bereit, sodass Sie sie ohne Flags anpassen können. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese-/Schreibzugriff mit der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum kleine Dateien langsam sind

Bei großen Dateien dominiert der Durchsatz. Bei kleinen Dateien dominiert die Anzahl der Anfragen: Jedes Objekt wird aufgelistet, nach Größe, Zeit oder Prüfsumme verglichen und einzeln hochgeladen. Die Langsamkeit entsteht hier meist durch die Latenz pro Anfrage und durch Ratenbegrenzung seitens des Anbieters, sodass mehr Bandbreite nichts bringt.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring-Tab mit Dateianzahl und Geschwindigkeit" class="img-large img-center" />

Öffnen Sie während eines Laufs den Transferring-Tab. Ist die Geschwindigkeit niedrig, die Dateianzahl steigt aber stetig, sind Sie durch Anfragen begrenzt und nicht durch die Bandbreite.

## Job-Einstellungen anpassen

In Schritt 2 des Sync-Assistenten erhöhen Sie die Anzahl der Dateiübertragungen, damit mehr Objekte parallel verschoben werden. Die Equality Checkers sind standardmäßig auf 8 gesetzt; bei einem langsamen oder gedrosselten Backend gilt die Empfehlung, 4 oder weniger zu verwenden, da zu viele gleichzeitige Prüfungen eine Drosselung auslösen und alles verschlimmern können. Ändern Sie jeweils nur einen Wert und starten Sie erneut.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Erweiterte Job-Einstellungen für Transfers und Checker" class="img-large img-center" />

Der Prüfsummenvergleich fügt zusätzlich zu den Größenprüfungen Hash-Berechnungen hinzu; nutzen Sie ihn daher nur, wenn Integrität wichtiger ist als Geschwindigkeit. Belassen Sie die Wiederholungseinstellung beim Standardwert 3, damit vorübergehende Fehler einen langen Lauf nicht abbrechen.

## Den Aufwand verkleinern

Die Filter in Schritt 3 verringern die Listing-Last. Nutzen Sie das maximale Dateialter, um alte Objekte zu überspringen, schließen Sie nicht benötigte Ordner aus und lassen Sie mit vordefinierten Filtern bestimmte Dateitypen weg. Wenn Sie einen riesigen Job in Jobs pro Präfix aufteilen, lassen sich Fehler zudem leichter eingrenzen und erneut ausführen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines abgestimmten Sync-Jobs in RcloneView" class="img-large img-center" />

Führen Sie nach jeder Filteränderung einen Dry Run aus, damit Sie vor dem echten Lauf genau sehen, welche Dateien kopiert oder gelöscht werden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie Ihren langsamen Job und beobachten Sie den Transferring-Tab, um zu bestätigen, dass die Anfragen der Engpass sind.
3. Passen Sie Transfers und Checker einzeln an und fügen Sie Filter hinzu, um den Umfang zu verringern.
4. Vergleichen Sie die Laufzeiten im Job History und behalten Sie die besten Einstellungen.

Kleine, methodische Änderungen machen aus einer nächtelangen Synchronisation eine Routineaufgabe.

---

**Weiterführende Anleitungen:**

- [S3-Multipart-Upload-Fehler beheben](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [Langsame Cloud-Übertragungsgeschwindigkeit beheben](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Fehler durch Cloud-API-Ratenbegrenzung beheben](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
