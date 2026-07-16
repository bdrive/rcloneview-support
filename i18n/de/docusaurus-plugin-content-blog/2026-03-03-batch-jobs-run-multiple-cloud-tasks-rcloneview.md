---
slug: batch-jobs-run-multiple-cloud-tasks-rcloneview
title: "RcloneView Batch-Jobs: Mehrere Cloud-Aufgaben mit einem Klick ausführen"
authors:
  - tayson
description: "Erfahren Sie, wie Sie mit RcloneView Batch-Jobs Synchronisations-, Kopier-, Verschiebe-, Umbenennungs- und Löschvorgänge zu einer einzigen automatisierten Abfolge zusammenfassen — und so Zeit sparen und manuelle Fehler reduzieren."
keywords:
  - rcloneview batch jobs
  - batch cloud operations
  - run multiple rclone jobs
  - cloud automation workflow
  - rcloneview job manager
  - sequential cloud tasks
  - cloud file management automation
  - rcloneview 1.3
  - batch sync copy move
  - multi-job execution rcloneview
tags:
  - sync
  - file-management
  - job-management
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Batch-Jobs: Mehrere Cloud-Aufgaben mit einem Klick ausführen

> Haben Sie es satt, Cloud-Synchronisations-, Kopier- und Bereinigungsjobs einzeln nacheinander auszuführen? RcloneView 1.3 führt **Batch-Jobs** ein — fassen Sie mehrere Aufgaben zu einer einzigen Abfolge zusammen und führen Sie sie alle mit einem Klick aus.

Die Verwaltung von Cloud-Speicher bedeutet oft, dieselbe Abfolge von Vorgängen immer wieder auszuführen: Projekt A mit Google Drive synchronisieren, Backups zu S3 kopieren, alte Dateien auf OneDrive bereinigen und dann Archive zu Glacier verschieben. Dies jeden Tag manuell zu erledigen ist mühsam und fehleranfällig. RcloneView Batch-Jobs lösen dieses Problem, indem Sie eine Abfolge von Jobs definieren und alle zusammen ausführen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was sind Batch-Jobs?

Batch-Jobs sind eine mit RcloneView 1.3 eingeführte Funktion, mit der Sie **mehrere Jobs zu einem einzigen Batch zusammenfassen** und in der festgelegten Reihenfolge ausführen können. Anstatt bei jedem einzelnen Job auf „Ausführen" zu klicken, definieren Sie die Abfolge einmal und starten den gesamten Workflow mit einer einzigen Aktion.

Dies ist besonders leistungsstark in Kombination mit den neuen Job-Typen, die ebenfalls mit v1.3 eingeführt wurden:

- **Synchronisation** — Spiegelt die Quelle zum Ziel
- **Kopieren** — Einseitige Dateiübertragung
- **Verschieben** — Übertragung mit Entfernen von der Quelle
- **Umbenennen** — Dateien oder Ordner umbenennen
- **Löschen** — Dateien von einem Remote entfernen
- **Ordner erstellen** — Verzeichnisstrukturen einrichten

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running batch jobs in RcloneView" class="img-large img-center" />

## Warum Batch-Jobs wichtig sind

### 1) Wiederholende manuelle Schritte eliminieren

Wenn Ihre tägliche Routine so aussieht:

1. Lokale Projektdateien synchronisieren → Google Drive
2. Google Drive-Backup kopieren → AWS S3
3. Temporäre Dateien auf OneDrive löschen
4. Fertige Archive verschieben → Glacier

Können Sie jetzt alle vier Schritte als einen einzigen Batch definieren und mit einem Klick ausführen. Kein Warten mehr, bis ein Job fertig ist, bevor der nächste startet.

### 2) Menschliche Fehler reduzieren

Manuelle mehrstufige Workflows sind fehleranfällig. Vergessen Sie einen Schritt, führen Sie Dinge in falscher Reihenfolge aus oder überspringen Sie versehentlich eine kritische Synchronisation — und schon haben Sie Dateninkonsistenzen. Batch-Jobs erzwingen jedes Mal eine konsistente Ausführungsreihenfolge.

### 3) Zeit für IT-Teams sparen

Für IT-Administratoren, die Cloud-Speicher über Abteilungen hinweg verwalten, verwandeln Batch-Jobs komplexe Multi-Provider-Workflows in wiederholbare, zuverlässige Vorgänge. Einmal definieren, täglich ausführen.

## Einen Batch-Job einrichten

Das Einrichten eines Batch-Jobs in RcloneView folgt einem einfachen Prozess:

**Schritt 1: Erstellen Sie Ihre einzelnen Jobs**

Richten Sie zunächst jeden benötigten Job im Job-Manager ein — Synchronisationsjobs, Kopierjobs, Verschiebejobs oder jeden der neu unterstützten Typen. Geben Sie jedem Job einen klaren, aussagekräftigen Namen, damit sie leicht zu identifizieren sind.

**Schritt 2: Erstellen Sie einen neuen Batch**

Öffnen Sie das Batch-Job-Panel und erstellen Sie einen neuen Batch. Geben Sie ihm einen aussagekräftigen Namen wie „Tägliche Backup-Routine" oder „Wöchentliche Archivbereinigung".

**Schritt 3: Jobs zum Batch hinzufügen**

Wählen Sie die Jobs aus, die Sie einbeziehen möchten, und ordnen Sie sie in der gewünschten Ausführungsreihenfolge an. Der Batch führt jeden Job nacheinander aus und wartet, bis einer abgeschlossen ist, bevor der nächste startet.

**Schritt 4: Den Batch ausführen**

Klicken Sie auf „Ausführen" beim Batch, und RcloneView erledigt den Rest. Jeder Job wird der Reihe nach ausgeführt, und Sie können den Fortschritt in Echtzeit überwachen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of batch job transfers" class="img-large img-center" />

## Praktische Anwendungsfälle

### Tägliche Backup-Pipeline

Erstellen Sie einen Batch, der:
1. Ihren lokalen Arbeitsordner mit Google Drive synchronisiert
2. Den Google Drive-Ordner zur Redundanz in einen S3-Bucket kopiert
3. Eine Benachrichtigung über [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) oder [Discord](https://rcloneview.com/support/blog/rcloneview-discord-remote-control) sendet

### Multi-Cloud-Migration

Wechseln Sie von einem Anbieter zu einem anderen? Richten Sie einen Batch ein, der:
1. Quelle und Ziel mit dem [Ordnervergleich](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) vergleicht
2. Nur geänderte Dateien kopiert
3. Die Übertragung mit einem zweiten Vergleich verifiziert

### NAS-zu-Cloud-Archiv-Workflow

Für [Synology-NAS-Benutzer](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer):
1. NAS-Freigabeordner mit einem Cloud-Remote synchronisieren
2. Alte Dateien in eine Cold-Storage-Ebene verschieben
3. Lokale temporäre Dateien löschen, die bereits gesichert wurden

### Team-Content-Verteilung

Dateien an mehrere Cloud-Ziele verteilen:
1. Design-Assets kopieren → Google Drive (Design-Team)
2. Dokumentation kopieren → OneDrive (Management)
3. Quellcode kopieren → S3-Bucket (Entwicklung)

## Fehlgeschlagene Jobs erneut versuchen — kein Neustart mehr nötig

Eine weitere v1.3-Funktion, die perfekt zu Batch-Jobs passt, ist **Fehlgeschlagene Jobs wiederholen**. Wenn eine Netzwerkstörung dazu führt, dass ein Job in Ihrem Batch fehlschlägt, müssen Sie nicht die gesamte Abfolge neu erstellen oder erneut ausführen. Wiederholen Sie einfach den fehlgeschlagenen Job und machen Sie dort weiter, wo Sie aufgehört haben.

Dies ist eine deutliche Verbesserung der Nutzerfreundlichkeit bei lang laufenden Batch-Vorgängen, insbesondere über instabile Verbindungen oder bei der Arbeit mit ratenbegrenzten APIs.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing batch execution results" class="img-large img-center" />

## Batch-Jobs mit Zeitplanung kombinieren

Batch-Jobs werden noch leistungsstärker in Kombination mit der [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) von RcloneView. Planen Sie Ihren Batch so, dass er automatisch zu bestimmten Zeiten ausgeführt wird — zum Beispiel jede Nacht um 2 Uhr oder jeden Freitag um 17 Uhr.

Dies schafft eine vollständig automatisierte Cloud-Management-Pipeline:

- **Definieren** Sie Ihre Jobs und Batch-Abfolge
- **Planen** Sie den Batch für die wiederkehrende Ausführung
- **Überwachen** Sie die Ergebnisse über den [Job-Verlauf](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)
- **Lassen Sie sich benachrichtigen** über [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control), [Discord](https://rcloneview.com/support/blog/rcloneview-discord-remote-control) oder [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule batch jobs for automated execution" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux)
2. **Fügen Sie Ihre Remotes hinzu** — [Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example), [S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3), [OneDrive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless) oder einen der über 70 unterstützten Anbieter
3. **Erstellen Sie Ihre Jobs** im Job-Manager mit Synchronisation, Kopieren, Verschieben oder anderen Job-Typen
4. **Erstellen Sie einen Batch** und ordnen Sie Ihre Jobs in der richtigen Reihenfolge an
5. **Führen Sie den Batch aus oder planen Sie ihn** und lassen Sie RcloneView den Rest erledigen

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remotes in RcloneView" class="img-large img-center" />

## Zusammenfassung

RcloneView Batch-Jobs verwandeln mehrstufige Cloud-Workflows in einfache, wiederholbare Vorgänge. In Kombination mit den neuen Job-Typen (Verschieben, Umbenennen, Löschen, Ordner erstellen), „Fehlgeschlagene Jobs wiederholen" sowie den bestehenden Zeitplanungs- und Benachrichtigungsintegrationen verfügen Sie nun über ein vollständiges Automatisierungstoolkit für die Cloud-Dateiverwaltung — alles über eine visuelle GUI, ohne CLI.

Ob Sie IT-Administrator sind, der Unternehmensspeicher verwaltet, Fotograf, der Dateien an Kunden verteilt, oder Entwickler, der Code in mehreren Clouds sichert — Batch-Jobs helfen Ihnen, klüger und zuverlässiger zu arbeiten.

---

**Weiterführende Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [RcloneView Slack-Fernsteuerung](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)
- [RcloneView Discord-Fernsteuerung](https://rcloneview.com/support/blog/rcloneview-discord-remote-control)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
