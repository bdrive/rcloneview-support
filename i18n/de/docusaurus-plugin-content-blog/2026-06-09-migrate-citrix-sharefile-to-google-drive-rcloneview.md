---
slug: migrate-citrix-sharefile-to-google-drive-rcloneview
title: "Citrix ShareFile zu Google Drive migrieren — Unternehmensdateien mit RcloneView übertragen"
authors:
  - jay
description: "Erfahren Sie, wie Sie Citrix ShareFile mit RcloneView zu Google Drive migrieren. Verschieben Sie Unternehmensdokumente und -ordner mit einer GUI—keine Skripte oder CLI erforderlich."
keywords:
  - Citrix ShareFile zu Google Drive Migration
  - ShareFile zu Google Drive migrieren
  - ShareFile Google Drive Übertragung
  - Cloud-Datei-Migrationstool
  - RcloneView ShareFile Migration
  - Unternehmens-Cloud-Migration
  - ShareFile Alternative Google Drive
  - Cloud-Speicher Migrations-GUI
tags:
  - RcloneView
  - sharefile
  - google-drive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFile zu Google Drive migrieren — Unternehmensdateien mit RcloneView übertragen

> Verschieben Sie Ihre gesamte ShareFile-Bibliothek zu Google Drive, ohne eine einzige Zeile Code zu schreiben—RcloneView übernimmt die Übertragung über eine visuelle, schrittweise Oberfläche.

Citrix ShareFile dient vielen Organisationen gut als Plattform für die Freigabe von Unternehmensdateien, doch Teams wenden sich zunehmend Google Drive zu—wegen der engeren Integration mit Google Workspace, der Echtzeit-Zusammenarbeit und der vertrauten Oberfläche. Wenn Ihre Organisation diesen Wechsel plant, macht RcloneView die Cloud-zu-Cloud-Übertragung unkompliziert: Verbinden Sie beide Remotes, konfigurieren Sie einen Kopierjob und verschieben Sie Dateien mit voller Geschwindigkeit bei laufender Fortschrittsüberwachung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Teams von ShareFile zu Google Drive wechseln

ShareFile ist eine leistungsfähige Unternehmensplattform, erfordert aber eine sorgfältige IT-Verwaltung—Benutzerbereitstellung, Ordnerberechtigungen und Richtlinien für die externe Freigabe erzeugen zusätzlichen Verwaltungsaufwand. Google Drive vereinfacht die Zusammenarbeit, besonders in Kombination mit Google Workspace, indem Teammitglieder Dokumente direkt im Browser kommentieren, bearbeiten und teilen können, ohne die Dateien vorher herunterzuladen.

Für Organisationen mit großen Beständen an PDFs, Präsentationen, Verträgen und Mediendateien in ShareFile besteht die Migrationsherausforderung darin, Zehntausende von Dateien zuverlässig zu verschieben, ohne die Ordnerstruktur oder die Dateiintegrität zu verlieren. RcloneView löst dies, indem es sowohl ShareFile als auch Google Drive als durchsuchbare Remotes behandelt und die eigentliche Datenübertragung mit der bewährten Übertragungs-Engine von rclone durchführt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new remote in RcloneView" class="img-large img-center" />

## Citrix ShareFile in RcloneView verbinden

Öffnen Sie RcloneView und navigieren Sie zu **Remote-Tab > Neuer Remote**. Wählen Sie Citrix ShareFile aus der Anbieterliste. Sie benötigen den Subdomain-Hostnamen Ihres ShareFile-Kontos sowie eine Root-Ordner-ID—dies ist die Kennung des Ordners innerhalb von ShareFile, den Sie als Stammverzeichnis Ihres Remotes verwenden möchten. RcloneView führt Sie durch jedes erforderliche Feld, und sobald gespeichert, erscheint der ShareFile-Remote als Panel im Explorer, in dem Sie Ordner durchsuchen und bestätigen können, dass Ihre Daten zugänglich sind, bevor Sie eine Übertragung starten.

Da ShareFile eine Authentifizierung auf Unternehmensniveau verwendet, geben Sie dem Autorisierungsvorgang einen Moment Zeit, um abzuschließen. Sobald die Verbindung besteht, können Sie Ihre gesamte ShareFile-Ordnerhierarchie durchsuchen, Dateigrößen prüfen und die Struktur vor Beginn der Migration verifizieren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer configuration in RcloneView" class="img-large img-center" />

## Google Drive konfigurieren und die Migration durchführen

Fügen Sie Google Drive über **Remote-Tab > Neuer Remote** als zweiten Remote hinzu. Google Drive verwendet OAuth-Browser-Authentifizierung—RcloneView öffnet einen Browser-Tab, Sie melden sich mit Ihrem Google-Konto an, und die Verbindung wird automatisch hergestellt, ohne dass API-Schlüssel manuell verwaltet werden müssen.

Wenn beide Remotes bereit sind, gehen Sie zu **Home-Tab > Sync**, um den 4-Schritte-Sync-Assistenten zu öffnen. Legen Sie Citrix ShareFile als Quelle und Google Drive als Ziel fest. Bevor Sie den Vorgang bestätigen, nutzen Sie die Option **Dry Run**, um genau zu sehen, welche Dateien kopiert werden, ohne dass Änderungen vorgenommen werden—eine wichtige Sicherheitsprüfung bei großen Unternehmensmigrationen, bei denen versehentliches Überschreiben kostspielig sein könnte. Wenn Sie mit der Vorschau zufrieden sind, starten Sie den Job und verfolgen Sie den Fortschritt live im Tab „Übertragen" am unteren Rand des Fensters.

Für Organisationen, bei denen während des Migrationszeitraums weiterhin Dateien in ShareFile eintreffen, schaltet eine PLUS-Lizenz geplante Synchronisation frei, sodass Folgeläufe automatisiert werden können, um neu hinzugefügte Inhalte zu erfassen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a migration job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Citrix ShareFile als Remote hinzu (Remote-Tab > Neuer Remote) und geben Sie Ihren Subdomain-Hostnamen und Ihre Root-Ordner-ID ein.
3. Fügen Sie Google Drive als zweiten Remote über OAuth-Browser-Anmeldung hinzu.
4. Öffnen Sie den Sync-Assistenten, legen Sie ShareFile als Quelle und Google Drive als Ziel fest und führen Sie zuerst einen Dry Run durch.
5. Führen Sie die Migration aus und verfolgen Sie den Fortschritt im Tab „Übertragen".

Die Migration zu Google Drive muss nicht Monate an IT-Arbeit bedeuten—RcloneView komprimiert eine komplexe Unternehmensmigration in einen zuverlässigen, wiederholbaren GUI-Workflow, den Ihr Team bei jedem Schritt ausführen und überprüfen kann.

---

**Weiterführende Anleitungen:**

- [Citrix ShareFile zu OneDrive und SharePoint migrieren](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Citrix ShareFile-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [SharePoint mit RcloneView zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)

<CloudSupportGrid />
