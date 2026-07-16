---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "Detaillierter Ordnervergleich — Jeden Unterschied zwischen Cloud-Speicher-Standorten erkennen"
authors:
  - tayson
description: "Der Ordnervergleich von RcloneView findet fehlende Dateien, Größenabweichungen und Synchronisationsdrift zwischen zwei beliebigen Cloud-Speicher-Standorten. Vollständige Anleitung mit praktischen Beispielen."
keywords:
  - folder comparison tool
  - compare cloud folders
  - detect missing files cloud
  - cloud sync verification
  - compare google drive onedrive
  - folder diff tool
  - cloud storage comparison
  - verify cloud backup
  - find missing cloud files
  - cloud folder diff
tags:
  - RcloneView
  - folder-comparison
  - feature
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Detaillierter Ordnervergleich — Jeden Unterschied zwischen Cloud-Speicher-Standorten erkennen

> Sie haben letzte Woche ein Backup durchgeführt. Ist jede Datei angekommen? Stimmen die Größen? Fehlt etwas? Die einzige Möglichkeit, das mit Sicherheit zu wissen, ist der Vergleich von Quelle und Ziel Datei für Datei. Genau das macht der Ordnervergleich.

Der Ordnervergleich ist eine der wertvollsten Funktionen von RcloneView. Er vergleicht zwei Speicherorte — jede Kombination aus lokal, NAS und Cloud — und zeigt Ihnen genau, was unterschiedlich ist. Fehlende Dateien, Größenabweichungen, Datumsunterschiede und Dateien, die nur auf einer Seite vorhanden sind, werden alle klar identifiziert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was der Ordnervergleich anzeigt

### Dateikategorien

Nach dem Vergleich zweier Standorte werden die Dateien kategorisiert:

- **Übereinstimmung** — Die Datei existiert an beiden Standorten mit gleicher Größe und gleichem Änderungsdatum. ✅
- **Nur links** — Die Datei existiert nur in der Quelle (linke Seite). Muss eventuell kopiert werden.
- **Nur rechts** — Die Datei existiert nur im Ziel (rechte Seite). Kann eine verwaiste Datei oder eine zusätzliche Kopie sein.
- **Unterschiedlich** — Die Datei existiert an beiden Standorten, unterscheidet sich jedoch in Größe oder Datum. Muss eventuell aktualisiert werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## Wann Sie den Ordnervergleich verwenden sollten

### 1) Nach einem Backup — Vollständigkeit überprüfen

Nach jedem Copy- oder Sync-Job vergleichen Sie Quelle und Ziel:

- **Alles stimmt überein?** → Das Backup ist vollständig.
- **Dateien nur links?** → Diese wurden nicht gesichert. Untersuchen Sie, warum.
- **Dateien nur rechts?** → Dateien wurden aus der Quelle gelöscht, sind aber noch im Backup vorhanden (bei Copy-Jobs erwartet).

### 2) Vor der Synchronisation — Änderungen vorab prüfen

Bevor Sie einen Sync-Job ausführen, vergleichen Sie, um zu sehen, was sich ändern wird:

- **Nur links** → Wird zum Ziel kopiert.
- **Nur rechts** → Wird aus dem Ziel GELÖSCHT (nur bei Synchronisation!).
- **Unterschiedlich** → Wird überschrieben.

Das ist wie ein visueller Testlauf.

### 3) Nach einer Migration — sicherstellen, dass nichts fehlt

Nach der Migration von einer Cloud zu einer anderen:

- Vergleichen Sie die alte Cloud mit der neuen Cloud.
- Jede Datei sollte "Übereinstimmung" oder "nur rechts" (bereits am Ziel) sein.
- Alle Dateien "nur links" wurden übersehen und müssen erneut übertragen werden.

### 4) Regelmäßige Prüfungen — Drift erkennen

Selbst bei geplanten Synchronisationen kann im Stillen etwas schiefgehen. Monatliche Vergleiche erkennen:

- Fehlgeschlagene Übertragungen, die nicht gemeldet wurden.
- Ratenbegrenzte Dateien, die übersprungen wurden.
- Beschädigte Dateien (unterschiedliche Größen).
- OAuth-Tokens, die während eines Jobs abgelaufen sind.

## Praktische Beispiele

### Google Drive und S3-Backup vergleichen

Quelle: Google Drive (primär).
Ziel: S3 (Backup).

**Erwartete Ergebnisse nach einem gesunden Backup:**
- Die meisten Dateien: Übereinstimmung ✅
- Einige "nur links": Dateien, die seit dem letzten Backup zu Google Drive hinzugefügt wurden (werden beim nächsten Mal kopiert).
- Wenige "nur rechts": Dateien, die aus Google Drive gelöscht, aber im Backup erhalten wurden (das ist gut — Ihr Backup hat sie bewahrt).

### Zwei NAS-Volumes vergleichen

Links: NAS-Volume 1 (aktive Daten).
Rechts: NAS-Volume 2 (Spiegel).

**Jeder Unterschied deutet darauf hin, dass der Spiegel nicht mehr synchron ist.** Sofort beheben.

### Vergleich vor der Stilllegung eines Cloud-Kontos

Bevor Sie Dropbox kündigen:
1. Vergleichen Sie Dropbox mit Google Drive (wohin Sie die Daten migriert haben).
2. Stellen Sie sicher, dass es null Dateien "nur links" gibt (alles von Dropbox befindet sich in Google Drive).
3. Kündigen Sie Dropbox erst danach.

## Vergleichsoptionen

### Prüfmethoden

- **Größe** — Vergleicht Dateigrößen. Schnell, erkennt aber keine Beschädigung auf Bit-Ebene.
- **Änderungsdatum** — Vergleicht Zeitstempel. Nützlich zum Erkennen aktualisierter Dateien.
- **Prüfsumme** — Vergleicht Datei-Hashes (MD5, SHA1). Am langsamsten, aber am gründlichsten. Erkennt Bit-Rot und Beschädigungen.

Für kritische Daten verwenden Sie die Prüfsumme. Für routinemäßige Prüfungen genügen Größe und Änderungsdatum.

### Leistungstipps

- **Große Verzeichnisse (10.000+ Dateien)** — Der Vergleich kann mehrere Minuten dauern. Haben Sie Geduld.
- **Cloud-übergreifender Vergleich** — Erfordert das Auflisten beider Clouds. Verwenden Sie `--fast-list` für mehr Effizienz.
- **Umfang eingrenzen** — Vergleichen Sie bestimmte Unterverzeichnisse statt der gesamten Cloud für schnellere Ergebnisse.

## Auf Unterschiede reagieren

Nach dem Vergleich können Sie direkt handeln:

- **Dateien nur links** → Auswählen und zur rechten Seite kopieren.
- **Unterschiedliche Dateien** → Auswählen und auf der rechten Seite aktualisieren.
- **Dateien nur rechts** → Überprüfen, ob sie behalten oder entfernt werden sollen.

Das macht den Ordnervergleich nicht nur zu einem Diagnosewerkzeug, sondern zu einem Workflow-Werkzeug.

## Integration mit Batch-Jobs

v1.3 Batch-Jobs können einen Vergleichsschritt enthalten:

1. Quelle → Ziel kopieren.
2. Quelle mit Ziel vergleichen.
3. Etwaige Unterschiede über Slack melden.

Dieser automatisierte Verify-after-Backup-Workflow stellt sicher, dass Sie den Zustand Ihrer Backups immer kennen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Die beiden Standorte hinzufügen**, die Sie vergleichen möchten.
3. **Ordnervergleich ausführen** zwischen ihnen.
4. **Ergebnisse überprüfen** — Übereinstimmung, nur links, nur rechts, unterschiedlich.
5. **Auf Unterschiede reagieren** — kopieren, aktualisieren oder untersuchen.

Wenn Sie es nicht überprüfen können, können Sie ihm nicht vertrauen.

---

**Weiterführende Anleitungen:**

- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Jobverlauf und Überwachung](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
