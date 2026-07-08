---
slug: backup-dir-versioned-sync-rcloneview
title: "Backup Dir für versionierte Cloud-Synchronisation mit RcloneView nutzen"
authors:
  - tayson
description: "Erfahren Sie, wie Sie --backup-dir in RcloneView verwenden, um versionierte Cloud-Synchronisationen zu erstellen. Bewahren Sie frühere Dateiversionen, indem überschriebene Dateien in ein Backup-Verzeichnis verschoben werden."
keywords:
  - rcloneview
  - backup-dir
  - versionierte Synchronisation
  - Cloud-Backup-Versionierung
  - rclone-Backup-Verzeichnis
  - sichere Cloud-Synchronisation
  - Dateiversionsverlauf
  - Cloud-Dateiwiederherstellung
  - Synchronisation mit Backup
  - rclone suffix
tags:
  - RcloneView
  - feature
  - cloud-sync
  - backup
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backup Dir für versionierte Cloud-Synchronisation mit RcloneView nutzen

> Das versehentliche Überschreiben oder Löschen von Dateien während einer Synchronisation ist der Albtraum jedes Cloud-Nutzers. **RcloneView** macht versionierte Synchronisationen mühelos möglich – mit integrierter Unterstützung für `--backup-dir` stellen Sie sicher, dass Sie nie wieder eine frühere Version verlieren.

Wenn Sie eine Standard-Synchronisation ausführen, werden Dateien am Ziel, die sich von der Quelle unterscheiden, überschrieben, und Dateien, die an der Quelle nicht mehr existieren, werden gelöscht. Das ist effizient, aber auch destruktiv. Wurde eine Datei an der Quelle beschädigt oder haben Sie versehentlich etwas gelöscht, das Sie noch benötigten, werden diese Änderungen ohne Rückweg an das Ziel weitergegeben.

Das Flag `--backup-dir` löst dieses Problem elegant. Anstatt überschriebene oder gelöschte Dateien dauerhaft zu entfernen, verschiebt rclone sie zunächst in ein separates Backup-Verzeichnis. Das gibt Ihnen ein vollständiges Sicherheitsnetz: Jede Datei, die sonst verloren gegangen wäre, bleibt an einem Ort erhalten, den Sie selbst kontrollieren.

RcloneView ermöglicht die Konfiguration von `--backup-dir` über seine Oberfläche für benutzerdefinierte Flags, sodass Sie die volle Leistungsfähigkeit versionierter Synchronisationen nutzen können, ohne sich die Kommandozeilen-Syntax merken zu müssen. In Kombination mit `--suffix` für datumsgestempelte Versionen können Sie ein einfaches Dateiversionierungssystem allein mit Ihrem vorhandenen Cloud-Speicher aufbauen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was --backup-dir tatsächlich bewirkt

Wenn eine Synchronisation auf eine Datei am Ziel trifft, die überschrieben oder gelöscht werden muss, greift `--backup-dir` ein. Anstatt die Datei zu zerstören, verschiebt rclone sie in das angegebene Backup-Verzeichnis und behält dabei die relative Pfadstruktur bei.

Wenn Ihre Synchronisation beispielsweise `documents/report.docx` am Ziel überschreibt, wird die alte Version nach `backup/documents/report.docx` verschoben. Die Verzeichnishierarchie bleibt erhalten, wodurch sich bestimmte Dateien später leicht wiederfinden und wiederherstellen lassen.

Dies gilt für zwei Szenarien:
- **Überschriebene Dateien**: Ist eine Quelldatei neuer oder unterschiedlich, wird die alte Zielkopie in das Backup-Verzeichnis verschoben, bevor die neue Version sie ersetzt.
- **Gelöschte Dateien**: Existiert eine Datei am Ziel, aber nicht an der Quelle, wird sie in das Backup-Verzeichnis verschoben, anstatt endgültig entfernt zu werden.

## Warum versionierte Synchronisationen unverzichtbar sind

Standard-Synchronisationen gehen davon aus, dass das Ziel immer exakt die Quelle widerspiegeln soll. Das funktioniert gut, bis etwas schiefgeht. Betrachten Sie diese häufigen Szenarien:

- Eine Datei wird an der Quelle beschädigt oder mit Ransomware infiziert, und die Beschädigung überträgt sich auf Ihr Backup, bevor Sie es bemerken.
- Sie löschen versehentlich einen Ordner, und die nächste geplante Synchronisation entfernt ihn auch am Ziel.
- Ein Kollege überschreibt ein gemeinsam genutztes Dokument, und die vorherige Version verschwindet an beiden Orten.

Mit `--backup-dir` ist jede dieser Situationen wiederherstellbar. Die vorherigen Versionen liegen sicher in Ihrem Backup-Verzeichnis, unberührt von nachfolgenden Synchronisationen.

## --backup-dir in RcloneView konfigurieren

RcloneView unterstützt benutzerdefinierte rclone-Flags in der Job-Konfiguration. So richten Sie eine versionierte Synchronisation ein:

1. Öffnen Sie den **Job Manager** und erstellen Sie einen neuen Sync-Job oder bearbeiten Sie einen bestehenden.
2. Legen Sie Quell- und Ziel-Remote wie gewohnt fest.
3. Fügen Sie im Bereich **Custom Flags** Folgendes hinzu: `--backup-dir remote:backup/2026-04-08`
4. Speichern und den Job ausführen.

Das Backup-Verzeichnis kann sich auf demselben Remote wie das Ziel oder auf einem völlig anderen Remote befinden. Ein datumsbasierter Pfad wie `backup/2026-04-08` hält die verdrängten Dateien jedes Tages ordentlich in einem eigenen Ordner organisiert.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## --backup-dir mit --suffix für datumsgestempelte Versionen kombinieren

Für eine noch feinere Versionierung kombinieren Sie `--backup-dir` mit `--suffix`, um jeder gesicherten Datei einen Zeitstempel anzuhängen. Das verhindert Namenskonflikte, wenn dieselbe Datei mehrfach geändert und synchronisiert wird.

Fügen Sie beide Flags im Bereich für benutzerdefinierte Flags hinzu:

```
--backup-dir remote:backup --suffix .2026-04-08
```

Mit dieser Konfiguration wird beim Überschreiben von `report.docx` die alte Version als `backup/report.docx.2026-04-08` gespeichert. Führen Sie die Synchronisation am nächsten Tag mit aktualisiertem Suffix erneut aus, und Sie sammeln ohne Konflikte einen Verlauf datierter Versionen an.

Für automatisierte Jobs, die nach einem Zeitplan laufen, können Sie dynamische Suffixe verwenden, die an das Ausführungsdatum gebunden sind, sodass jeder Lauf eindeutig benannte Backups erzeugt.

## Praktische Beispiele

**Tägliches Backup mit Versionsaufbewahrung:**
Synchronisieren Sie Ihr Google Drive nächtlich mit Backblaze B2, wobei die verdrängten Dateien jedes Tages in einem datierten Backup-Ordner gespeichert werden. Nach 30 Tagen können Sie alte Backup-Verzeichnisse bereinigen, um die Speicherkosten im Griff zu behalten.

**Schutz von Teamprojekten:**
Synchronisieren Sie einen gemeinsam genutzten Dropbox-Ordner mit S3 und nutzen Sie `--backup-dir`, um alle Dateien zu erfassen, die Teammitglieder löschen oder überschreiben. Das dient als einfacher Prüfpfad, ohne dass kostenpflichtige Versionierungsfunktionen Ihres Cloud-Anbieters erforderlich sind.

**Sicherheitsnetz bei Migrationen:**
Beim Umzug von einer Cloud zu einer anderen nutzen Sie `--backup-dir` während der ersten Synchronisation, um alle Zieldateien zu erfassen, die überschrieben würden. Verläuft die Migration nicht wie geplant, haben Sie einen vollständigen Rückkehrpunkt.

## Wiederherstellungs-Workflow

Das Wiederherstellen von Dateien aus Ihrem Backup-Verzeichnis ist in RcloneView unkompliziert:

1. Öffnen Sie den **Remote Explorer** und navigieren Sie zu Ihrem Backup-Verzeichnis.
2. Durchsuchen Sie die Verzeichnisstruktur, um die benötigte Datei zu finden. Die ursprüngliche Ordnerhierarchie bleibt erhalten.
3. Verwenden Sie Drag-and-Drop oder einen Kopiervorgang, um die Datei an ihren ursprünglichen Ort zurückzuverschieben.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

Da Backup-Verzeichnisse ganz normale Ordner auf Ihrem Remote sind, können Sie sie auch durchsuchen, Dateien herunterladen oder sie zu Archivierungszwecken an einen anderen Ort synchronisieren.

## Backup-Speicher über die Zeit verwalten

Versionierte Backups sammeln sich mit der Zeit an, daher ist eine Aufbewahrungsstrategie wichtig. Hier einige Ansätze:

- **Datumsbasierte Ordner**: Verwenden Sie einen datierten Backup-Verzeichnispfad (z. B. `backup/2026-04-08`) und löschen Sie regelmäßig Ordner, die älter als Ihr Aufbewahrungsfenster sind.
- **Suffix-basierte Bereinigung**: Bei Verwendung von `--suffix` können Sie Dateien mit alten Datumssuffixen identifizieren und entfernen.
- **Separater kostengünstiger Speicher**: Richten Sie Ihr Backup-Verzeichnis auf einen preiswerten Objektspeicher-Anbieter wie Wasabi oder Backblaze B2, bei dem die Kosten für langfristige Aufbewahrung minimal sind.

Der Explorer von RcloneView macht es einfach, Backup-Verzeichnisse zu durchsuchen und veraltete Versionen zu löschen, wenn Sie bereit sind, Speicherplatz freizugeben.

## Best Practices für --backup-dir

- Testen Sie Ihre `--backup-dir`-Konfiguration immer zuerst mit einem Dry Run, um sicherzustellen, dass Dateien an den richtigen Ort geleitet werden.
- Halten Sie das Backup-Verzeichnis nach Möglichkeit auf demselben Remote wie das Ziel, da Verschiebungen innerhalb desselben Remotes sofort erfolgen und keine Bandbreite verbrauchen.
- Verwenden Sie konsistente Namenskonventionen für Ihre Backup-Pfade, damit automatisierte Bereinigungsskripte alte Versionen leicht identifizieren können.
- Kombinieren Sie `--backup-dir` mit `--backup-dir` auf einem anderen Remote für kritische Daten, um sowohl ein schnell wiederherstellbares lokales Backup als auch ein geografisch getrenntes Archiv zu erhalten.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen Sync-Job mit konfigurierten Quell- und Ziel-Remotes.
3. Fügen Sie `--backup-dir remote:backup/YYYY-MM-DD` im Feld für benutzerdefinierte Flags hinzu, um versionierte Synchronisationen zu aktivieren.
4. Führen Sie zunächst einen Dry Run aus, um die Konfiguration zu überprüfen, und führen Sie dann den Job aus.

Mit konfiguriertem `--backup-dir` wird jede Synchronisation zu einem sicheren, umkehrbaren Vorgang. Sie erhalten die Effizienz einer einseitigen Synchronisation mit der Gewissheit, dass nichts jemals endgültig verloren geht.

---

**Verwandte Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
