---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "Fehler bei der Cloud-Backup-Verifizierung beheben — Datenintegrität mit RcloneView sicherstellen"
authors:
  - tayson
description: "Beheben Sie Checksummen-Abweichungen und Verifizierungsfehler bei Cloud-Backups in RcloneView. Nutzen Sie Folder Compare, überprüfen Sie Einstellungen und führen Sie Übertragungen erneut aus, um die Datenintegrität sicherzustellen."
keywords:
  - Cloud-Backup-Verifizierungsfehler RcloneView
  - Checksummen-Abweichung Cloud-Synchronisation
  - Backup-Integritätsfehler rclone beheben
  - Cloud-Übertragung Checksummenfehler
  - RcloneView Datenintegritätsprüfung
  - rclone Checksummen-Verifizierungsfehler
  - Backup-Korruption rclone beheben
  - Cloud-Synchronisation Verifizierung Fehlerbehebung
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fehler bei der Cloud-Backup-Verifizierung beheben — Datenintegrität mit RcloneView sicherstellen

> Checksummen-Abweichungen nach einer Cloud-Übertragung können auf Unterschiede zwischen Anbietern oder auf echte Korruption hinweisen — zu verstehen, um welches Szenario es sich handelt, entscheidet über die richtige Lösung.

Nach Abschluss eines großen Backups können Verifizierungsfehler auftreten: Checksummen-Abweichungen, Dateien, die als unterschiedlich markiert werden, obwohl sie identisch sein sollten, oder Fehler in den Vergleichstools von RcloneView. Diese Fehler können verschiedene Ursachen haben, von harmlosen Metadatenunterschieden der Anbieter bis hin zu echter Datenkorruption. Diese Anleitung führt Sie durch die Diagnose jedes Szenarios und die Anwendung der richtigen Lösung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Checksummen-Typen verstehen

Verschiedene Cloud-Anbieter unterstützen unterschiedliche Checksummen-Algorithmen. AWS S3 verwendet MD5 (für Standard-Uploads) und SHA-256 (für Checksummen). Google Drive verwendet MD5. Backblaze B2 verwendet SHA1. Dropbox verwendet einen benutzerdefinierten Block-Hash. Wenn rclone Dateien zwischen zwei Anbietern mit unterschiedlichen Hash-Algorithmen vergleicht, greift es statt eines Hash-Vergleichs auf einen Vergleich von Größe und Änderungszeitpunkt zurück.

Das bedeutet, dass eine "Abweichung" in der Folder-Compare-Ansicht von RcloneView nicht zwangsläufig auf Korruption hinweist — sie kann bedeuten, dass die Anbieter inkompatible Hash-Typen verwenden und rclone nur nach Größe vergleicht. Echte Korruption zeigt sich durch übereinstimmende Größen, aber unterschiedliche Hash-Werte beim gleichen Algorithmus.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify backup verification failures" class="img-large img-center" />

## Checksummen-Verifizierung in Synchronisationsjobs aktivieren

Um echte Korruption bereits beim Übertragungszeitpunkt zu erkennen, aktivieren Sie die Checksummen-Verifizierung in den Einstellungen Ihres Synchronisationsjobs. Öffnen Sie in RcloneView den Job und gehen Sie zu Schritt 2. Aktivieren Sie die Option **checksum**. Mit dieser Option berechnet und vergleicht rclone Hashes während der Übertragung. Stimmt der Hash einer Datei nach dem Upload nicht überein, wiederholt rclone die Übertragung.

Hinweis: Das Aktivieren der Checksummen-Verifizierung erhöht die CPU-Auslastung und die Übertragungszeit leicht, erkennt jedoch Datenkorruption, die sonst unentdeckt bliebe.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling checksum verification in RcloneView sync job settings" class="img-large img-center" />

## Abweichungen mit Folder Compare erkennen

Öffnen Sie nach Abschluss eines Backups **Folder Compare** in RcloneView. Wählen Sie auf einer Seite Ihre Quelle und auf der anderen das Backup-Ziel. RcloneView zeigt Dateien in drei Kategorien an:

- **Match**: auf beiden Seiten identisch
- **Source only**: existiert an der Quelle, fehlt aber am Ziel
- **Destination only**: existiert am Ziel, aber nicht an der Quelle
- **Different**: gleicher Name, aber unterschiedliche Attribute (Größe, Hash oder Änderungszeitpunkt)

Dateien in der Kategorie "Different" verdienen eine genauere Prüfung. Laden Sie eine Stichprobe herunter und vergleichen Sie sie, um festzustellen, ob der Inhalt tatsächlich unterschiedlich ist oder ob es sich um ein Metadaten-Artefakt des Anbieters handelt.

## Eine Prüfung über das Terminal ausführen

Für eine tiefgehende Integritätsprüfung ermöglicht der **Terminal**-Tab von RcloneView, rclone-Befehle direkt auszuführen. Verwenden Sie `rclone check`, um Quelle und Ziel gründlich zu vergleichen:

```
rclone check source:path destination:path --one-way
```

Dieser Befehl listet jede Datei auf, die sich zwischen den beiden Seiten unterscheidet, unter Verwendung des besten verfügbaren Hashes für jeden Anbieter. Die Ausgabe zeigt genau, welche Dateien Abweichungen aufweisen, was es einfacher macht zu erkennen, ob das Problem systematisch oder isoliert auftritt.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running rclone check command in RcloneView Terminal" class="img-large img-center" />

## Erneutes Ausführen mit anderen Einstellungen

Wenn Verifizierungsfehler weiterhin bestehen und sich die Dateien tatsächlich unterscheiden, führen Sie den Backup-Job erneut aus mit:

- **Aktivierter Checksummen-Verifizierung**: stellt sicher, dass rclone erneut überträgt und validiert
- **Ignore existing**: erzwingt eine erneute Übertragung auch für scheinbar vorhandene Dateien
- **Erhöhten Low-Level-Wiederholungsversuchen**: gibt mehr Chancen für erfolgreiche Übertragungen

Wechseln Sie bei anbieterübergreifenden Backups mit unterschiedlichen Hash-Algorithmen in den erweiterten Einstellungen des Jobs statt zum reinen Hash-Vergleich zum Vergleichsmodus **Größe und Änderungszeitpunkt**. Dies reduziert Fehlalarme durch Hash-Inkompatibilität.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktivieren Sie die **Checksummen-Verifizierung** in den Übertragungsoptionen von Schritt 2 Ihres Synchronisationsjobs.
3. Verwenden Sie nach Abschluss des Backups **Folder Compare**, um etwaige Abweichungen zu identifizieren.
4. Führen Sie für eine tiefergehende Analyse `rclone check` im **Terminal**-Tab aus.

Systematische Checksummen-Verifizierung und Vergleiche nach dem Backup geben Ihnen die Gewissheit, dass Ihre Cloud-Backups bis auf das Byte genau sind.

---

**Related Guides:**

- [Checksummen-Abweichung bei der Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Checksummen-verifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Fehlende Dateien nach der Cloud-Synchronisation beheben](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
