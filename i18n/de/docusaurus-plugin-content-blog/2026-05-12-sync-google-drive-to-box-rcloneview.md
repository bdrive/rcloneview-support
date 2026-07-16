---
slug: sync-google-drive-to-box-rcloneview
title: "Google Drive mit Box synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - kai
description: "Erfahren Sie, wie Sie Google Drive mit Box mithilfe von RcloneView synchronisieren. Übertragen Sie Dateien zwischen beiden Plattformen, automatisieren Sie Cloud-übergreifende Backups und halten Sie Ihre Teams synchron."
keywords:
  - Google Drive mit Box synchronisieren
  - Google Drive Box RcloneView
  - Cloud-zu-Cloud-Synchronisation RcloneView
  - Google Drive Box Backup
  - Google Drive zu Box migrieren
  - RcloneView Cloud-übergreifende Übertragung
  - Google Drive Backup zu Box automatisieren
  - Google Workspace Box Synchronisation
  - Box Cloud-Backup RcloneView
  - Google Drive Box Dateiübertragung
tags:
  - google-drive
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit Box synchronisieren — Cloud-Backup mit RcloneView

> Wenn Ihr Team Inhalte über Google Workspace und Box verteilt speichert, überbrückt RcloneView die Lücke ganz ohne Scripting.

Viele Organisationen pflegen aktive Dateien in Google Drive, während Box als Compliance-Archiv, Kundenportal oder Abteilungsfreigabe dient. Diese beiden Plattformen manuell synchron zu halten, ist fehleranfällig und zeitaufwendig. RcloneView bietet einen Point-and-Click-Workflow, um Inhalte aus Google Drive abzurufen und nach Box zu übertragen — egal ob Sie eine einmalige Migration, ein nächtliches inkrementelles Backup oder eine kontinuierlich aktualisierte Kopie für Audit-Zwecke benötigen. Da beide Dienste nativ von rclone unterstützt werden, sind die Übertragungen effizient und werden per Prüfsumme verifiziert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive und Box mit RcloneView verbinden

Sowohl Google Drive als auch Box verwenden in RcloneView eine OAuth-Browserauthentifizierung, sodass die Einrichtung pro Konto weniger als zwei Minuten dauert. Öffnen Sie den Tab „Remote“, klicken Sie auf „New Remote“ und wählen Sie Google Drive. Ein Browserfenster öffnet sich, in dem Sie sich bei Ihrem Google-Konto anmelden und Berechtigungen erteilen — es müssen keine API-Schlüssel manuell erstellt werden. Wiederholen Sie dieselben Schritte für Box: „New Remote“, Box auswählen und den OAuth-Ablauf im Browser abschließen.

Wenn Sie mit einem Google Shared Drive (Team Drive) arbeiten, aktivieren Sie während der Einrichtung die Option `shared_with_me` oder geben Sie die Shared-Drive-ID als Stammordner an, damit alle Team-Inhalte im Explorer-Panel sichtbar sind. Für Box-for-Business-Konten setzen Sie beim Erstellen des Remotes `box_sub_type = enterprise`, um Enterprise-Ordner und -Berechtigungen freizuschalten.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## Eine Cloud-zu-Cloud-Übertragung durchführen

Öffnen Sie Google Drive im linken Explorer-Panel und Box im rechten. Navigieren Sie zum Quellordner in Google Drive — dem gemeinsamen `Projects`-Ordner Ihres Teams oder einem Verzeichnis für Kundenlieferungen — wählen Sie dann die gewünschten Elemente aus und ziehen Sie sie in das Box-Panel. RcloneView bestätigt den Kopiervorgang und streamt die Daten direkt zwischen den beiden Cloud-Diensten, während Ihr lokaler Rechner nur als Steuerungsebene fungiert, was Ihre eigene Bandbreitennutzung gering hält.

Der Tab „Transferring“ am unteren Bildschirmrand zeigt den Fortschritt in Echtzeit: aktuelle Geschwindigkeit, Dateianzahl und insgesamt übertragene Bytes. Bei umfangreichen Übertragungen, die Präsentationen, Videodateien und Tabellen umfassen, bewegt die Multithread-Engine von RcloneView mehrere Dateien gleichzeitig, was die Gesamtübertragungszeit im Vergleich zum sequenziellen Kopieren deutlich verkürzt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## Einen Sync-Job für laufende Backups einrichten

Verwenden Sie für wiederkehrende Backups den Job Manager, um einen Sync-Job zu erstellen. Wählen Sie den Google-Drive-Ordner als Quelle, einen Box-Ordner als Ziel und konfigurieren Sie Filterregeln — schließen Sie beispielsweise `.gdoc`-Google-Docs-Verknüpfungsdateien aus oder beschränken Sie die Synchronisation auf Inhalte, die in den letzten 30 Tagen geändert wurden. Der One-Way-Sync-Modus schreibt Änderungen nach Box, ohne Ihre Google-Drive-Inhalte zu verändern, sodass er sicher gegen einen produktiv genutzten Arbeitsbereich ausgeführt werden kann.

Nutzen Sie vor dem ersten Live-Lauf die Option „Dry Run“, um genau zu sehen, welche Dateien kopiert oder überschrieben werden. Die Job History protokolliert jede Ausführung mit Zeitstempeln, Übertragungsgrößen und Statuscodes und liefert Compliance-Teams eine klare Audit-Spur als Referenz.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## Automatisierung mit geplanter Synchronisation (PLUS-Lizenz)

Mit einer PLUS-Lizenz können Sie die Synchronisation von Google Drive → Box so planen, dass sie automatisch in jedem beliebigen Crontab-Intervall läuft — jede Nacht um Mitternacht, jeden Montagmorgen oder in einem individuellen Rhythmus, den Ihre IT-Richtlinie vorschreibt. Füllen Sie die Felder „Minute“, „Hour“ und „Day-of-Week“ im Schritt „Schedule“ des Job-Assistenten aus. Jeder Lauf wird in der Job History mit Zeitstempeln und Statuscodes erfasst, sodass Ihr Compliance-Team genau nachvollziehen kann, wann die Synchronisationen liefen und ob sie erfolgreich waren.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Google-Drive-Konto über Remote-Tab > New Remote > Google Drive (OAuth-Anmeldung im Browser) hinzu.
3. Fügen Sie Ihr Box-Konto über Remote-Tab > New Remote > Box (OAuth-Anmeldung im Browser) hinzu.
4. Öffnen Sie beide Remotes nebeneinander in den Explorer-Panels, ziehen Sie Dateien für eine sofortige Kopie hinüber, oder erstellen Sie im Job Manager einen Sync-Job für einen wiederholbaren Workflow.
5. Aktivieren Sie die Planung (PLUS-Lizenz), um die Synchronisation wiederkehrend zu automatisieren, und richten Sie Abschlussbenachrichtigungen ein.

Eine gut gepflegte Synchronisation von Google Drive zu Box hält Ihr Compliance-Archiv aktuell und den plattformübergreifenden Dateizugriff konsistent — RcloneView macht daraus eine Fünf-Minuten-Einrichtung.

---

**Verwandte Anleitungen:**

- [Google Drive Cloud-Synchronisation und Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Box Cloud-Synchronisation und Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box mit Google Drive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
