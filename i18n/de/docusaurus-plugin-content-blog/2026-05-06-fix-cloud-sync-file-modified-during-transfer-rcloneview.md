---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "Während der Übertragung geänderte Dateien beheben — Cloud-Sync-Konflikte mit RcloneView lösen"
authors:
  - tayson
description: "Beheben Sie Cloud-Sync-Fehler, die dadurch entstehen, dass Dateien während der Übertragung in RcloneView geändert werden. Lernen Sie, mit Datei-in-Verwendung-Konflikten, unvollständigen Uploads und Sync-Inkonsistenzen umzugehen."
keywords:
  - während der Cloud-Übertragung geänderte Dateien beheben
  - Cloud-Sync-Konfliktlösung RcloneView
  - Fehler "Datei während Upload geändert"
  - rclone-Fehler "Datei in Verwendung"
  - Cloud-Sync unvollständige Übertragung beheben
  - RcloneView-Sync-Konflikt
  - Fehlerbehebung "Datei während Sync gesperrt"
  - unvollständiger Upload Cloud-Sync-Fix
  - rclone während der Übertragung geändert
  - Konfliktlösung bei Cloud-Backup-Dateien
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - data-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Während der Übertragung geänderte Dateien beheben — Cloud-Sync-Konflikte mit RcloneView lösen

> Wenn sich Dateien ändern, während RcloneView sie synchronisiert, können Übertragungen fehlschlagen, unvollständige Uploads erzeugen oder inkonsistente Cloud-Kopien erstellen — so erkennen und lösen Sie jedes dieser Szenarien.

Eine häufige Ursache für Cloud-Sync-Fehler sind Dateien, die während eines laufenden Sync-Jobs geändert, gesperrt oder beschrieben werden. Datenbankdateien, in die eine Anwendung gerade schreibt, in Office geöffnete Dokumente oder Protokolldateien, die von einem laufenden Dienst aktiv erweitert werden, können allesamt zu unvollständigen Uploads oder fehlgeschlagenen Übertragungen führen. RcloneView zeigt diese Fehler klar in seinen Protokollen an, und rclone bietet mehrere Flags, um sie sauber zu behandeln.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Datei-in-Verwendung-Fehler in den RcloneView-Protokollen erkennen

Wenn eine Datei während eines Syncs gesperrt oder geändert wird, meldet rclone typischerweise einen Fehler wie:
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

In RcloneView erscheinen diese Fehler im **Log-Tab** am unteren Rand der Oberfläche. Prüfen Sie nach Abschluss eines Sync-Jobs das Protokoll auf `ERROR`-Einträge, die auf Konflikte durch Dateiänderungen hinweisen. Die **Job-Verlauf**-Ansicht zeigt außerdem den Status `Errored` für Jobs, bei denen die Übertragung einzelner Dateien fehlgeschlagen ist.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## --ignore-errors und Wiederholungslogik verwenden

Standardmäßig sind die Sync-Jobs von RcloneView mit einer Wiederholungsanzahl (Standard: 3) konfiguriert, die fehlgeschlagene Übertragungen automatisch erneut versucht. Bei Dateien, die nur vorübergehend gesperrt sind (z. B. eine Datei, die kurz von einer Anwendung geöffnet und wieder geschlossen wird), sind Wiederholungsversuche oft bei den nachfolgenden Versuchen erfolgreich.

Bei Sync-Jobs, bei denen manche Dateien dauerhaft gesperrt sind (z. B. aktive Datenbankdateien), fügen Sie den benutzerdefinierten rclone-Flags in Ihrer Sync-Job-Konfiguration `--ignore-errors` hinzu. Dies weist rclone an, mit der Synchronisation der übrigen Dateien fortzufahren, selbst wenn einige fehlschlagen, sodass so viel wie möglich vom Sync abgeschlossen wird und die Fehler zur späteren Überprüfung protokolliert werden.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## Aktive Anwendungsdateien vom Sync ausschließen

Die beste langfristige Lösung für Datei-in-Verwendung-Konflikte besteht darin, Dateien, die dauerhaft aktiv verwendet werden, aus dem Umfang des Sync-Jobs auszuschließen. Die Filtereinstellungen von RcloneView (Schritt 3 im Sync-Assistenten) unterstützen benutzerdefinierte Ausschlussregeln:

- SQLite-Datenbanken ausschließen: `*.db-journal` und `*.db-wal` hinzufügen, um aktive Write-Ahead-Logs auszuschließen
- Office-Temporärdateien ausschließen: `~$*` hinzufügen, um Word/Excel-Sperrdateien auszuschließen
- Aktiv beschriebene Protokolldateien ausschließen: `*.log` oder spezifische Muster hinzufügen

Diese Filter verhindern, dass RcloneView versucht, Dateien zu synchronisieren, die während des Jobs garantiert in Verwendung sind, wodurch diese Fehlerkategorie vollständig entfällt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## Testlauf zur Überprüfung der Filterwirksamkeit durchführen

Nachdem Sie Ausschlussfilter hinzugefügt haben, führen Sie einen **Testlauf (Dry Run)** des Sync-Jobs aus, um zu bestätigen, dass die gefilterten Dateien nicht mehr in der Übertragungsliste erscheinen. Die Ausgabe des Testlaufs zeigt jede Datei, die kopiert würde — überprüfen Sie, dass Ihre aktiven Datenbankdateien, Sperrdateien und geöffneten Dokumente vor dem eigentlichen Sync nicht in der Liste enthalten sind.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie nach einem fehlgeschlagenen Sync den Log-Tab und den Job-Verlauf auf Fehler durch Dateiänderungen.
3. Fügen Sie im Sync-Assistenten benutzerdefinierte Ausschlussfilter für dauerhaft in Verwendung befindliche Dateien hinzu.
4. Führen Sie einen Testlauf durch, um zu bestätigen, dass Ihre Filter funktionieren, und führen Sie den Sync-Job anschließend erneut aus.

Bei der Behandlung von Datei-in-Verwendung-Konflikten in RcloneView geht es darum, zu verstehen, welche Dateien ausgeschlossen werden sollten und wie Wiederholungsversuche konfiguriert werden — sobald dies korrekt eingerichtet ist, laufen Ihre Sync-Jobs jedes Mal sauber ab.

---

**Verwandte Anleitungen:**

- [Fehlende Dateien nach der Übertragung bei Cloud-Sync beheben — Lösung mit RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Filterregeln und selektive Synchronisation in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Unterbrochene oder fehlgeschlagene Übertragungen mit RcloneView wiederherstellen](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
