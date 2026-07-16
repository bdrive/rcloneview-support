---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "Wie Sync Ihre Dateien löschen kann — Datenverlust durch falsche Synchronisationsrichtung vermeiden"
authors:
  - tayson
description: "Eine falsche Synchronisationsrichtung kann Ihre Dateien vollständig löschen. Erfahren Sie, wie rclone sync funktioniert, warum es Dateien löscht und wie Sie mit Dry Run und Ordnervergleich Katastrophen verhindern."
keywords:
  - sync hat meine dateien gelöscht
  - rclone sync datenverlust
  - falsche synchronisationsrichtung
  - sync vs copy sicher
  - synchronisationsdatenverlust verhindern
  - cloud sync gelöschte dateien
  - rclone dry run
  - sichere cloud-synchronisation
  - synchronisationsrichtung falsch
  - cloud sync fehler beheben
tags:
  - sync
  - data-loss
  - safety
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wie Sync Ihre Dateien löschen kann — Datenverlust durch falsche Synchronisationsrichtung vermeiden

> "Ich habe rclone sync ausgeführt, und jetzt sind 500 GB an Dateien weg." Das ist eine der häufigsten Katastrophen im Umgang mit Cloud-Speicher. Sync ist mächtig — aber es löscht. Hier erfahren Sie, wie Sie es sicher einsetzen.

Sync gleicht das Ziel exakt an die Quelle an. Dazu gehört auch das Löschen von Dateien im Ziel, die in der Quelle nicht existieren. Wenn Sie versehentlich Quelle und Ziel vertauschen oder von einem leeren Ordner aus synchronisieren, löscht Sync bereitwillig alles am Ziel. Diese Anleitung erklärt, wie Sie das verhindern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie Sync Dateien löscht

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

Sync hat B identisch zu A gemacht. Die Dateien, die nur in B existierten, wurden entfernt.

## Häufige Katastrophen

### Vertauschte Quelle und Ziel

Sie wollten `Cloud → NAS` synchronisieren, haben aber `NAS → Cloud` eingegeben. Ist das NAS leer (neues Laufwerk), löscht Sync alles aus der Cloud.

### Synchronisation von einem leeren oder falschen Ordner

Wenn Sync auf einen leeren Quellordner zeigt, bedeutet das: "Mache das Ziel ebenfalls leer."

### Falsche Filterregeln

Ein Filter, der alles ausschließt, lässt die Quelle für Sync leer erscheinen. Alles am Ziel wird gelöscht.

## Sicherheitsmaßnahmen in RcloneView

### 1) Immer zuerst Dry Run verwenden

Dry Run zeigt Ihnen genau, was Sync tun wird — ohne es tatsächlich auszuführen. Prüfen Sie die Liste der Dateien, die gelöscht würden, bevor Sie den Vorgang bestätigen.

### 2) Vor dem Sync den Ordnervergleich nutzen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

Vergleichen Sie Quelle und Ziel. Achten Sie auf die Dateien "Nur rechts" — das sind die Dateien, die Sync löschen würde. Sind Sie bereit, diese zu verlieren?

### 3) Für Backups Copy statt Sync verwenden

Copy löscht niemals. Wenn Sie ein Backup erstellen, ist Copy fast immer die richtige Wahl.

| Situation | Copy verwenden | Sync verwenden |
|-----------|:--------:|:--------:|
| Backup | ✅ | ❌ |
| Spiegelung (exakte Kopie) | ❌ | ✅ |
| Erste Migration | ✅ | ❌ |
| Laufende Replikation | ❌ | ✅ (mit Vorsicht) |

### 4) Quelle und Ziel doppelt prüfen

Identifizieren Sie im Zwei-Fenster-Explorer von RcloneView eindeutig, welche Seite Quelle und welche Ziel ist, bevor Sie einen Auftrag ausführen.

### 5) `--backup-dir` verwenden

Rclone unterstützt `--backup-dir` — Dateien, die gelöscht würden, werden stattdessen in ein Backup-Verzeichnis verschoben, statt dauerhaft entfernt zu werden. Das gibt Ihnen ein Sicherheitsnetz.

## Wiederherstellung nach versehentlichem Sync

Falls Sie bereits einen fehlerhaften Sync ausgeführt haben:

1. **Sofort stoppen** — Führen Sie keinen weiteren Sync aus.
2. **Papierkorb des Cloud-Anbieters prüfen** — Google Drive (30 Tage), OneDrive (93 Tage), Dropbox (30-180 Tage).
3. **Versionierung prüfen** — Die Versionierung von S3 und B2 bewahrt alte Kopien auf.
4. **Aus separatem Backup wiederherstellen** — Falls Sie ein Copy-basiertes Backup haben, sind Ihre Dateien dort sicher.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ordnervergleich nutzen** vor jeder Sync-Operation.
3. **Dry Run ausführen**, um Änderungen zu prüfen.
4. **Copy für Backups verwenden** — Sync für beabsichtigte Spiegelungen aufheben.
5. **`--backup-dir` in Betracht ziehen** für Sync-Operationen als Sicherheitsnetz.

Sync ist ein scharfes Werkzeug. Gehen Sie sorgsam damit um.

---

**Verwandte Anleitungen:**

- [Sync vs. Copy vs. Move erklärt](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Versehentlich gelöschte Dateien wiederherstellen](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
