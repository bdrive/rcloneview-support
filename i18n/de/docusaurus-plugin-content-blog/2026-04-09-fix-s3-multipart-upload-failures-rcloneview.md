---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "S3-Multipart-Upload-Fehler in RcloneView beheben"
authors:
  - tayson
description: "Beheben Sie Fehler bei S3-Multipart-Uploads in RcloneView. Lösen Sie unvollständige Uploads, Fehler bei der Teilegröße und verwaiste Multipart-Sitzungen."
keywords:
  - rcloneview
  - s3 multipart upload failure
  - fix s3 upload error
  - multipart upload incomplete
  - s3 upload timeout
  - s3 part size error
  - orphaned multipart upload
  - s3 upload troubleshooting
  - rclone s3 multipart
  - cloud upload fix
tags:
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# S3-Multipart-Upload-Fehler in RcloneView beheben

> S3-Multipart-Uploads teilen große Dateien für parallele Übertragung und Wiederaufnehmbarkeit in Teile auf, aber Fehler während des Prozesses können unvollständige Uploads hinterlassen, Speicherplatz verschwenden und Übertragungen blockieren — hier erfahren Sie, wie Sie diese in RcloneView beheben.

Amazon S3 und S3-kompatible Anbieter (Wasabi, Backblaze B2 S3, Cloudflare R2, MinIO, DigitalOcean Spaces) erfordern Multipart-Uploads für Dateien über 5 GB und empfehlen sie für Dateien über 100 MB. Die Datei wird in Teile aufgeteilt (standardmäßig 5 MB bis 5 GB pro Teil), parallel hochgeladen und serverseitig zusammengesetzt. Wenn dieser Prozess auf halbem Weg fehlschlägt — aufgrund von Netzwerkunterbrechungen, Zeitüberschreitungen oder falsch konfigurierten Teilegrößen — entsteht ein unvollständiger Upload, der Speicherplatz verbraucht, aber kein nutzbares Objekt erzeugt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Symptome

- **Upload stockt oder hängt**: Die Übertragung scheint mitten in einer großen Datei zu stoppen. Die Überwachung von RcloneView zeigt über einen längeren Zeitraum keinen Fortschritt.
- **Fehler „EntityTooSmall"**: Es wurden Teile hochgeladen, die kleiner als die Mindestgröße (5 MB bei den meisten S3-Anbietern) sind. Dies geschieht typischerweise, wenn die Konfiguration der Teilegröße im Verhältnis zur Dateigröße zu klein ist.
- **Fehler „EntityTooLarge"**: Ein einzelner Teil überschreitet die maximal zulässige Größe (5 GB).
- **„InvalidPart" oder „InvalidPartOrder"**: Teile wurden in falscher Reihenfolge hochgeladen oder ein Teil wurde während der Übertragung beschädigt. Der Server lehnt die Abschlussanfrage ab.
- **Speicherverbrauch wächst, aber Dateien erscheinen nicht**: Unvollständige Multipart-Uploads verbrauchen Speicherplatz. Die Teile existieren auf dem Server, aber das endgültige Objekt wird nie zusammengesetzt.

## Lösung 1: Teilegröße anpassen

Die häufigste Ursache für Multipart-Fehler ist eine falsche Teilegröße im Verhältnis zur Dateigröße. S3 erlaubt maximal 10.000 Teile pro Upload. Wenn Ihre Teilegröße für eine große Datei zu klein ist, überschreitet der Upload das Teilelimit und schlägt fehl.

**Beispiel**: Eine 500-GB-Datei mit der Standard-Teilegröße von 5 MB würde 100.000 Teile erfordern — weit über dem Limit von 10.000 Teilen.

Passen Sie in RcloneView die Teilegröße bei der Konfiguration Ihres S3-Remotes oder in den erweiterten Optionen des Jobs an. Eine gute Faustregel: Setzen Sie die Teilegröße auf mindestens `file_size / 10.000`. Für eine 500-GB-Datei verwenden Sie mindestens 50-MB-Teile. Für die meisten Workloads bieten Teilegrößen von 64 MB bis 128 MB eine gute Balance zwischen Parallelität und Zuverlässigkeit.

Sie können dies mit dem Flag `--s3-chunk-size` im Feld für benutzerdefinierte Flags von RcloneView einstellen.

## Lösung 2: Upload-Timeout erhöhen

Große Teile über langsame Verbindungen können das Standard-Timeout überschreiten. Wenn Ihre Verbindung langsamer als 10 Mbit/s ist, könnte ein 128-MB-Teil über 100 Sekunden zum Hochladen benötigen — nahe an den Standard-Timeout-Grenzen.

Erhöhen Sie das Timeout mit dem Flag `--timeout`. Zum Beispiel gibt `--timeout 300s` jedem Teil bis zu 5 Minuten Zeit zum Abschluss. Sie können auch die Teilegröße reduzieren, um einzelne Teile schneller übertragen zu können.

## Lösung 3: Übertragungsparallelität reduzieren

Das gleichzeitige Hochladen zu vieler Teile kann Ihre Netzwerkverbindung oder den S3-Endpunkt überlasten. Wenn Sie bei Multipart-Uploads häufige Zeitüberschreitungen oder Verbindungsabbrüche feststellen, reduzieren Sie die Anzahl der gleichzeitigen Übertragungen.

Verringern Sie in der Jobkonfiguration von RcloneView die Anzahl der Übertragungen vom Standardwert (4) auf 2 oder sogar 1 bei sehr großen Dateien. Sie können auch `--s3-upload-concurrency` verwenden, um zu steuern, wie viele Teile einer einzelnen Datei parallel hochgeladen werden (Standard ist 4).

## Lösung 4: Verwaiste Multipart-Uploads bereinigen

Fehlgeschlagene Multipart-Uploads hinterlassen verwaiste Teile auf dem Server, die Speicherplatz verbrauchen und Kosten verursachen. Diese Teile sind nicht als Objekte sichtbar — Sie werden sie beim Durchsuchen des Buckets in RcloneView oder der AWS-Konsole nicht sehen.

So bereinigen Sie verwaiste Uploads:

- **AWS S3**: Konfigurieren Sie eine Lebenszyklusregel für den Bucket, um unvollständige Multipart-Uploads nach einer bestimmten Anzahl von Tagen (z. B. 7 Tage) automatisch abzubrechen. Dies erfolgt in der AWS-Konsole unter dem Reiter „Management" des Buckets.
- **Mit rclone**: Führen Sie `rclone cleanup remote:bucket` im integrierten Terminal von RcloneView aus. Dies bricht alle ausstehenden Multipart-Uploads im angegebenen Bucket ab.
- **S3-kompatible Anbieter**: Die meisten Anbieter unterstützen dieselben Lebenszyklusregeln oder Bereinigungsbefehle, prüfen Sie jedoch die Dokumentation Ihres Anbieters für spezifische Details.

## Lösung 5: Wiederholung bei Fehlern aktivieren

Netzwerkunterbrechungen während Multipart-Uploads können dazu führen, dass einzelne Teile fehlschlagen. RcloneView wiederholt fehlgeschlagene Vorgänge automatisch (standardmäßig 3 Wiederholungen mit exponentiellem Backoff). Wenn häufig vorübergehende Fehler auftreten, erhöhen Sie die Anzahl der Wiederholungen mit `--retries 5` oder `--retries 10` in den benutzerdefinierten Flags.

Bei sehr instabilen Verbindungen setzen Sie zusätzlich `--low-level-retries 10`, um einzelne HTTP-Anfragen zu wiederholen, bevor sie als fehlgeschlagener Vorgang gezählt werden.

## Lösung 6: Serverseitiges Kopieren nutzen, wenn möglich

Wenn Sie zwischen zwei S3-kompatiblen Buckets desselben Anbieters kopieren, vermeidet serverseitiges Kopieren Multipart-Upload-Probleme vollständig — die Daten bewegen sich innerhalb des Netzwerks des Anbieters, ohne über Ihren Rechner zu laufen. RcloneView verwendet serverseitiges Kopieren automatisch, wenn sowohl Quelle als auch Ziel beim selben S3-Anbieter liegen.

Bei anbieterübergreifenden Übertragungen (z. B. von AWS S3 zu Cloudflare R2) müssen die Daten über Ihren Rechner laufen, und auf der Zielseite gelten Multipart-Uploads.

## Zukünftige Fehler vermeiden

- **Teilegröße proaktiv festlegen**: Berechnen Sie vor dem Hochladen von Dateien über 1 GB die erforderliche Teilegröße (`file_size / 10.000`) und legen Sie sie in den benutzerdefinierten Flags fest.
- **Lebenszyklus-Bereinigung aktivieren**: Konfigurieren Sie immer eine Lebenszyklusregel, um unvollständige Multipart-Uploads abzubrechen. Dies verhindert, dass sich verwaiste Teile ansammeln.
- **Übertragungen überwachen**: Nutzen Sie die Echtzeitüberwachung von RcloneView, um stockende Uploads frühzeitig zu erkennen. Das Pausieren und Fortsetzen einer stockenden Übertragung löst häufig vorübergehende Probleme.
- **Mit Testlauf testen**: Verwenden Sie bei kritischen Uploads den Testlauf-Modus (Dry Run) von RcloneView, um den Übertragungsplan vor der Ausführung zu überprüfen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurieren Sie Ihr S3-Remote mit einer geeigneten Teilegröße für Ihre größten Dateien.
3. Legen Sie Lebenszyklusregeln für Ihre Buckets fest, um verwaiste Uploads automatisch zu bereinigen.
4. Überwachen Sie Übertragungen in Echtzeit und passen Sie die Parallelität bei Bedarf an.

Multipart-Upload-Fehler sind das häufigste Problem bei der Arbeit mit großen Dateien auf S3. Die richtige Konfiguration der Teilegröße, der Timeout-Einstellungen und die Bereinigung verwaister Uploads lösen die überwiegende Mehrheit der Fälle.

---

**Verwandte Anleitungen:**

- [AWS S3 und S3-kompatible hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
