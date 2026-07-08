---
slug: check-verify-cloud-file-integrity-rcloneview
title: "Cloud-Dateiintegrität mit den Check- und Compare-Funktionen von RcloneView überprüfen"
authors:
  - tayson
description: "Nutzen Sie die Check- und Compare-Funktionen von RcloneView, um die Integrität von Cloud-Dateien zu überprüfen, Bitfäule zu erkennen, Prüfsummen zu validieren und erfolgreiche Migrationen zwischen Anbietern zu bestätigen."
keywords:
  - rclone check files
  - verify cloud file integrity
  - rcloneview compare folders
  - cloud checksum verification
  - detect bit rot cloud storage
  - post migration verification
  - rclone file validation
  - compare source destination cloud
  - rcloneview check feature
  - cloud data integrity tool
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Dateiintegrität mit den Check- und Compare-Funktionen von RcloneView überprüfen

> Dateien in die Cloud zu kopieren ist nur die halbe Arbeit. Zu überprüfen, dass jedes Byte unversehrt angekommen ist, macht den Unterschied zwischen einem zuverlässigen Workflow und einem, dem man nur vertraut.

Ob man Terabytes zwischen Anbietern verschiebt, nächtliche Backups ausführt oder wichtige Datensätze archiviert – all das birgt ein gemeinsames Risiko: stille Datenkorruption. Eine Datei kann am Ziel vorhanden erscheinen und dennoch vom Quellinhalt abweichen, sei es durch unterbrochene Übertragungen, anbieterseitige Fehler oder schlicht Bitfäule im Laufe der Zeit. Rclone stellt einen eigenen `check`-Befehl bereit, der Quelle und Ziel Datei für Datei vergleicht, und RcloneView macht diesen Vorgang visuell und zugänglich. Diese Anleitung erklärt, wann und wie Sie Ihre Cloud-Dateien überprüfen sollten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die Überprüfung der Dateiintegrität wichtig ist

Cloud-Anbieter replizieren Daten intern, doch kein System ist gegen Fehler immun. Hier sind die häufigsten Szenarien, in denen eine Überprüfung echte Probleme aufdeckt:

- **Unterbrochene Übertragungen** -- ein Netzwerkabbruch während eines großen Kopiervorgangs kann am Ziel unvollständige Dateien hinterlassen, die dem Namen nach vollständig wirken.
- **Bitfäule** -- Speichermedien können über Monate oder Jahre hinweg degradieren und dabei Bits in selten aufgerufenen Dateien kippen.
- **Anbieterfehler** -- gelegentliche API-Fehler können zu Null-Byte-Uploads oder abgeschnittenen Schreibvorgängen führen, ohne dass ein Fehler gemeldet wird.
- **Migrationsvalidierung** -- nach dem Verschieben Hunderttausender Dateien zwischen Anbietern benötigen Sie den Nachweis, dass nichts verloren gegangen oder verändert wurde.

Ohne einen Verifizierungsschritt bleiben diese Probleme unentdeckt, bis Sie die Datei tatsächlich benötigen.

## Wie Rclone Check funktioniert

Der Befehl `rclone check` vergleicht einen Quell- und einen Zielpfad und meldet Dateien, die voneinander abweichen. Je nach beteiligten Anbietern kommt eine dieser Methoden zum Einsatz:

| Methode | Funktionsweise | Wann verwendet |
|--------|-------------|-----------|
| **Hash-Prüfung** | Vergleicht von beiden Anbietern gemeldete Prüfsummen (MD5, SHA1 usw.) | Beide Anbieter unterstützen einen gemeinsamen Hash |
| **Größenprüfung** | Vergleicht nur die Dateigröße | Kein gemeinsamer Hash verfügbar |
| **Download-Prüfung** | Lädt beide Dateien herunter und vergleicht Byte für Byte | Erzwungen mit dem Flag `--download` |

Die hashbasierte Prüfung ist am schnellsten und zuverlässigsten, wenn beide Anbieter sie unterstützen. Google Drive, OneDrive, S3-kompatible Anbieter und Backblaze B2 melden alle Datei-Hashes, wenn auch nicht immer denselben Typ.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## Compare in RcloneView verwenden

Die integrierte **Compare**-Funktion von RcloneView bietet eine visuelle Nebeneinander-Ansicht von Quell- und Zielordner:

1. Öffnen Sie den **Explorer**-Bereich und wählen Sie auf einer Seite Ihr Quell-Remote und auf der anderen das Ziel.
2. Navigieren Sie zu den Ordnern, die Sie vergleichen möchten.
3. Klicken Sie auf **Compare**, um die Analyse auszuführen.
4. Prüfen Sie die Ergebnisse -- Dateien sind je nach Status farblich gekennzeichnet: übereinstimmend, nur in der Quelle, nur im Ziel oder unterschiedlich.

Dieser visuelle Ansatz eignet sich hervorragend, um bestimmte Ordner stichprobenartig zu prüfen oder Ergebnisse nach einer Migration zu überprüfen, ohne sich Befehlszeilenausgaben merken zu müssen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## Rclone Check über das Terminal ausführen

Für einen vollständigen Integritätsscan über ein gesamtes Remote öffnen Sie das **Terminal** in RcloneView und führen Folgendes aus:

```bash
rclone check source:path dest:path
```

Nützliche Flags im Überblick:

| Flag | Zweck |
|------|-------|
| `--size-only` | Nur nach Größe vergleichen, Hash-Prüfung überspringen |
| `--download` | Byte-für-Byte-Vergleich durch Herunterladen beider Kopien erzwingen |
| `--one-way` | Nur prüfen, ob Quelldateien im Ziel vorhanden sind (nicht umgekehrt) |
| `--combined report.txt` | Einen kombinierten Bericht über Übereinstimmungen und Abweichungen in eine Datei schreiben |
| `--missing-on-src missing.txt` | Dateien protokollieren, die im Ziel vorhanden, aber in der Quelle fehlend sind |
| `--missing-on-dst missing.txt` | Dateien protokollieren, die in der Quelle vorhanden, aber im Ziel fehlend sind |
| `--error errors.txt` | Dateien protokollieren, bei denen die Prüfung fehlgeschlagen ist |

Beispiel für eine gründliche Prüfung nach einer Migration:

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## Workflow zur Verifizierung nach der Migration

Nach der Migration von Daten zwischen Anbietern folgen Sie diesem Workflow, um den Erfolg zu bestätigen:

1. **Führen Sie eine einseitige Prüfung** von der Quelle zum Ziel aus, um zu bestätigen, dass alle Quelldateien angekommen sind:
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **Prüfen Sie Abweichungen** -- jede gemeldete Differenz weist auf Dateien hin, die erneut kopiert werden müssen.
3. **Übertragen Sie fehlgeschlagene Dateien erneut** mit dem Copy- oder Sync-Vorgang von RcloneView, wobei `--ignore-existing` entfernt wird.
4. **Führen Sie die Prüfung erneut aus**, um zu bestätigen, dass alle Abweichungen behoben sind.
5. **Speichern Sie den Bericht** zu Prüfzwecken mit dem Flag `--combined`.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## Bitfäule im Laufe der Zeit erkennen

Planen Sie für langfristige Archive regelmäßige Integritätsprüfungen:

1. Erstellen Sie einen **Job** in RcloneView, der `rclone check` gegen Ihr Archiv ausführt.
2. Planen Sie ihn wöchentlich oder monatlich über den **Job Scheduler**.
3. Überprüfen Sie nach jedem Lauf den Job-Verlauf, um neu beschädigte Dateien zu erkennen.

Dies ist besonders wichtig für Cold-Storage-Stufen (S3 Glacier, Backblaze B2 Archive), bei denen Dateien einmal geschrieben und selten gelesen werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## Prüfsummen-Kompatibilität zwischen Anbietern

Nicht jeder Anbieter unterstützt denselben Hash-Algorithmus. Hier eine kurze Referenz:

| Anbieter | MD5 | SHA1 | Andere |
|----------|-----|------|-------|
| Google Drive | Ja | Nein | Quickxor verfügbar |
| OneDrive | Nein | Nein | QuickXorHash |
| Amazon S3 | Ja (ETag bei Single-Part) | Nein | -- |
| Backblaze B2 | Nein | Ja | SHA1 nativ |
| Dropbox | Nein | Nein | Dropbox Content Hash |
| SFTP/Local | Ja | Ja | Mehrere |

Wenn zwei Anbieter keinen gemeinsamen Hash haben, greift rclone auf den reinen Größenvergleich zurück. Verwenden Sie in diesen Fällen `--download` für Gewissheit auf Byte-Ebene.

## Best Practices

- **Nach großen Migrationen immer überprüfen** -- ein erfolgreicher Copy-Befehl garantiert nicht, dass jede Datei intakt ist.
- **`--combined`-Berichte verwenden**, um eine prüfbare Aufzeichnung dessen zu erstellen, was übereinstimmte und was nicht.
- **Regelmäßige Prüfungen planen** für Archivdaten, die über Monate unangetastet bleiben.
- **Hash-Prüfungen bevorzugen** gegenüber reinen Größenprüfungen, wo möglich -- Korruption bei gleicher Größe ist selten, aber real.
- **Dry-Run-Synchronisationen ausführen** nach einer Prüfung, um Abweichungen automatisch zu beheben.

---

**Verwandte Anleitungen:**

- [Cloud-zu-Cloud-Übertragungen und Synchronisation](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [Inkrementelles Backup von Google Drive zu Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Unterbrochene und fehlgeschlagene Übertragungen wiederherstellen](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
