---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "SharePoint-zu-Google-Drive-Migration mit RcloneView meistern: Eine Schritt-für-Schritt-Business-Anleitung"
authors:
  - tayson
description: "Visuelle, gedrosselte und nachvollziehbare SharePoint-zu-Google-Drive-Migrationen mit RcloneView — entwickelt für Unternehmens-IT-Teams, die einen richtlinienfreundlichen Umstieg ohne CLI wünschen."
keywords:
  - SharePoint zu Google Drive
  - Dateien von SharePoint zu Drive verschieben
  - RcloneView SharePoint
  - Cloud-Migration für Unternehmen
  - Microsoft 365 Migrationstool
  - SharePoint-Dokumentbibliothek migrieren
  - Google Drive Workspace Migration
  - rclone SharePoint-Connector
  - Office 365 zu Google Drive
  - SharePoint-Migrationsanleitung
tags:
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SharePoint-zu-Google-Drive-Migration mit RcloneView meistern: Eine Schritt-für-Schritt-Business-Anleitung

> Verschieben Sie SharePoint-Dokumentbibliotheken mit einem visuellen, gedrosselten und wiederholbaren Ablauf zu Google Drive (Workspace), den Unternehmensadministratoren ohne CLI ausführen können.

RcloneView bündelt die SharePoint- und Google-Drive-Connectoren von rclone in einer GUI mit auditfreundlichen Protokollen, Planer und Echtzeitüberwachung. Diese Anleitung zeigt, wie Sie eine gestaffelte Migration planen und durchführen, sodass Sie Teamwebsites, Projektordner oder ganze Geschäftsbereiche ohne Ausfallzeit verschieben können.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Warum RcloneView für SharePoint → Google Drive verwenden

- Keine CLI erforderlich: Konfigurieren Sie Microsoft-365-Remotes (SharePoint/OneDrive for Business) und Google-Drive-Remotes über geführte Dialoge.
- Business-freundlich: Drosseln Sie Anfragen, um SharePoint- und Drive-API-Ratenlimits zu vermeiden, und planen Sie Umstiege während Wartungsfenstern.
- Operative Transparenz: Explorer im Nebeneinander-Modus, Vergleichen & Kopieren, Job-Verlauf und Live-Übertragungsüberwachung für Audits.
- Flexible Verschiebungen: Einmalige Kopie, bidirektionale Synchronisation oder gestaffelte Delta-Synchronisationen, die Quelle und Ziel abgeglichen halten.

## Voraussetzungen (unternehmenstauglich)

- RcloneView ist installiert und mit Konten angemeldet, die Zugriff auf die Ziel-SharePoint-Site und das Google-Drive-Ziel (Shared Drive oder Meine Ablage) haben.
- Admin-Zustimmung für Microsoft Graph erteilt, falls Ihr Tenant Drittanbieter-Apps einschränkt.
- Ein Umstiegsfenster (oder gestaffelte Synchronisationen) und ausreichend Drive-/Shared-Drive-Kontingent.

## Schritt 1 — SharePoint- und Google-Drive-Remotes verbinden

1) Fügen Sie unter **RcloneView ? Einstellungen ? Remote-Speicher** ein neues Remote hinzu.  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) Wählen Sie **OneDrive/SharePoint (Microsoft 365)**, melden Sie sich mit dem Konto an, das Zugriff auf die Site hat, und wählen Sie die richtige **Site/Dokumentbibliothek** (z. B. `/sites/Marketing/Shared Documents`).  
3) Fügen Sie **Google Drive** (Workspace) hinzu: Wählen Sie, ob das Ziel **Meine Ablage** oder ein bestimmter **Shared Drive** für das Projekt sein soll.  
4) Testen Sie jedes Remote und speichern Sie.

## Schritt 2 — Die richtigen Bibliotheken und Zielordner zuordnen

- Notieren Sie sich für jede SharePoint-Bibliothek den im Verbindungsdialog gewählten Pfad; öffnen Sie ihn im Explorer, um den Stammordner zu bestätigen (Sie sollten die erwarteten Abteilungsordner sehen).
- Erstellen Sie in Google Drive/Shared Drive die passende Ordnerstruktur, falls sie noch nicht existiert.
- Bei teamweiser Isolation wiederholen Sie den Vorgang mit mehreren SharePoint-Remotes (eines pro Site oder pro sensibler Sammlung).

## Schritt 3 — Mit einem Nebeneinander-Abgleich validieren

- Öffnen Sie beide Remotes im Zwei-Fenster-Explorer.  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- Verwenden Sie **Vergleichen**, um Unterschiede (Größe, fehlende Dateien) vor dem Kopieren zu prüfen.  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- Kopieren Sie zunächst einen kleinen Pilotordner, um Berechtigungen, versionierte Dateien und Benennungsregeln zu prüfen (SharePoints `# % & { }` werden in Drive gültig, aber lange Pfade müssen möglicherweise noch bereinigt werden).

## Schritt 4 — Ihren Migrationsmodus wählen

- **Einmalige Kopie (am schnellsten)**: Verwenden Sie **Kopieren** für einen Lift-and-Shift in den neuen Shared Drive. Ideal, wenn die Quelle während des Umstiegs schreibgeschützt wird.
- **Synchronisation (optional bidirektional)**: Verwenden Sie **Synchronisation**, wenn Benutzer während der Migration weiterhin Dateien bearbeiten; schließen Sie mit einer finalen Delta-Synchronisation im Umstiegsfenster ab.
- **Serverseitig, wenn möglich**: Wenn Ihr SharePoint und Drive über das Internet erreichbar sind, nutzt RcloneView wo unterstützt serverseitige Kopien, um den Datenausgang zu reduzieren.

Drag & Drop funktioniert ebenfalls für Ad-hoc-Verschiebungen und schnelle Korrekturen.  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Schritt 5 — Einen wiederholbaren Job erstellen und den Umstieg planen

1) Erstellen Sie unter **Jobs** einen neuen **Kopier-** oder **Synchronisationsjob** von der SharePoint-Bibliothek zum Ziel-Shared-Drive-Pfad.  
2) Setzen Sie **Bandbreitenlimits** und **Übertragungen**, um die Drosselung von Microsoft 365 und Google Drive einzuhalten (z. B. `tpslimit`, `--drive-chunk-size` oder die Regler **Max. Übertragung**).  
3) Speichern Sie und planen Sie den Massenumzug außerhalb der Geschäftszeiten; fügen Sie einen zweiten Zeitplan für Deltas hinzu.  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Schritt 6 — Ausführen, überwachen und Drosselung handhaben

- Starten Sie den Job und verfolgen Sie den Fortschritt in Echtzeit (Durchsatz, ETA, Fehler).  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- Wenn Sie `throttled` oder `403`/`429`-Antworten sehen, reduzieren Sie die Übertragungen oder fügen Sie eine kurze Verzögerung hinzu; RcloneView zeigt diese Protokolle an, ohne dass Sie ein Terminal öffnen müssen.
- Nutzen Sie den **Job-Verlauf**, um Ergebnisse für die Compliance zu exportieren und fehlgeschlagene Objekte direkt aus der Benutzeroberfläche erneut zu versuchen.

## Schritt 7 — Prüfungen nach der Migration und Übergabe

- Führen Sie **Vergleichen** erneut aus, um zu bestätigen, dass das Ziel mit SharePoint übereinstimmt, bevor Sie den Benutzerzugriff freigeben.
- Stichprobenartige Prüfung der Berechtigungen: Da Drive-ACLs SharePoint nicht automatisch spiegeln, können Sie den neuen Stammordner mit den richtigen Workspace-Gruppen gebündelt freigeben.
- Behalten Sie den Job als geplante Delta-Synchronisation für einige Tage bei, wenn Teams weiterhin in SharePoint aktiv sind, und schalten Sie die Quelle anschließend auf schreibgeschützt um.

## Fehlerbehebungstipps für Unternehmensumgebungen

- **Komplexe Sites**: Verbinden Sie pro Site/Bibliothek statt tenant-weit, um versehentliche Bereichserweiterung zu vermeiden.
- **Lange Pfade oder ungewöhnliche Zeichen**: Aktivieren Sie in den erweiterten Optionen die Unicode-Normalisierung und Behandlung der Pfadlänge von Rclone; benennen Sie Grenzfälle vor dem Umstieg im Explorer um.
- **Datenhoheit**: Für regulierte Teams zielen Sie auf regionale Shared Drives ab und führen Sie ein Audit der Job-Verlaufsexporte.

## Verwandte Ressourcen

- [Remote über browserbasierte Anmeldung hinzufügen (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Google Drive hinzufügen](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Remote-Speicher sofort synchronisieren](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Fazit

RcloneView bietet IT-Teams einen visuellen, risikoarmen Weg, SharePoint-Bibliotheken in Google Drive oder Shared Drives zu migrieren. Mit richtlinienfreundlicher Drosselung, geplanten Umstiegen und Live-Überwachung können Sie geschäftskritische Daten ohne CLI-Skripte verschieben, Stakeholder auf dem Laufenden halten und einen wiederholbaren Job für zukünftige Konsolidierungen einrichten.

<CloudSupportGrid />
