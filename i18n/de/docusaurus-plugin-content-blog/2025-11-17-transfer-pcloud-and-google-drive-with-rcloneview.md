---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "Dateien zwischen pCloud und Google Drive übertragen mit RcloneView"
authors:
  - tayson
description: "Daten zwischen pCloud und Google Drive verschieben, ohne erneut herunterzuladen? Nutzen Sie RcloneView für Drag-and-Drop, Vergleich, Synchronisation und geplante Jobs mit OAuth und mehrfädigen Uploads."
keywords:
  - pcloud to google drive
  - google drive to pcloud
  - rcloneview
  - cloud to cloud transfer
  - multi thread upload
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - oauth login
  - resumable transfers
tags:
  - RcloneView
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dateien zwischen pCloud und Google Drive übertragen mit RcloneView

> Sparen Sie sich das Herunterladen und erneute Hochladen. Mit RcloneView können Sie pCloud- und Google-Drive-Übertragungen per Drag-and-Drop durchführen, vergleichen, synchronisieren und in einer geführten GUI planen – ohne CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum RcloneView für Multi-Cloud-Übertragungen nutzen?

- Sicheres OAuth für Google Drive sowie einfache E-Mail-/Passwort-Anmeldung für pCloud – keine Tokens zum Einfügen.
- Mehrfädige, fortsetzbare Uploads mit Fortschrittsprotokollen und Wiederholungsversuchen.
- Zweigeteilter Explorer für direktes Drag-and-Drop zwischen Clouds.
- Vergleich zur Vorschau von Unterschieden vor dem Kopieren oder Bereinigen.
- Synchronisation mit Einschluss-/Ausschlussfiltern, Testlauf und größenbasierten Entscheidungen.
- Hintergrund-Jobs und Zeitplanung zur Automatisierung wiederkehrender Verschiebungen.

RcloneView verbindet die Zuverlässigkeit von rclone mit einem visuellen Workflow, sodass Teams und Administratoren große Ordner mit Vertrauen verschieben können.

## Bevor Sie beginnen

- Melden Sie sich bei beiden Konten an und bestätigen Sie Kontingent und API-Limits (Google Drive erzwingt ein Upload-Limit von 750 GB pro Tag und Nutzer).
- Installieren Sie die neueste RcloneView-Version: [Download](https://rcloneview.com/src/download.html).
- Halten Sie für pCloud Ihre E-Mail-Adresse und Ihr Passwort bereit; aktivieren Sie App-Passwörter, falls Ihre Sicherheitseinstellungen dies erfordern.
- Bevorzugen Sie eine kabelgebundene oder stabile WLAN-Verbindung bei großen Übertragungen und lassen Sie RcloneView für unterbrechungsfreie Jobs weiterlaufen.

## Schritt 1: Cloud-Remotes verbinden

1. Öffnen Sie **Remote → + New Remote**.
2. Wählen Sie **pCloud** und geben Sie Ihre **E-Mail-Adresse** und Ihr **Passwort** ein, dann speichern.
3. Wiederholen Sie dies für **Google Drive** und klicken Sie auf **Connect**, um die OAuth-Browseranmeldung abzuschließen.
4. Bestätigen Sie, dass beide Remotes im Remote Manager erscheinen.  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 Mehr erfahren:
  - [Google Drive-Remote hinzufügen](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [Neuen Remote hinzufügen (OAuth)](/howto/remote-storage-connection-settings/add-oath-online-login)

## Schritt 2: Beide Remotes im Explorer-Bereich öffnen

1. Gehen Sie zu **Browse**.
2. Klicken Sie im linken Bereich auf **+** und öffnen Sie Ihren **pCloud**-Remote.
3. Klicken Sie im rechten Bereich auf **+** und öffnen Sie Ihren **Google Drive**-Remote.
4. Navigieren Sie zu den Quell- und Zielordnern, die Sie verschieben möchten.

<!-- Image placeholder: add `/support/images/en/tutorials/open-pcloud-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## Vier Methoden für pCloud-↔-Google-Drive-Übertragungen

### Methode 1: Drag & Drop zwischen den Bereichen

1. Wählen Sie Dateien oder Ordner im pCloud-Bereich aus.
2. Ziehen Sie sie in den Google-Drive-Bereich (oder umgekehrt).
3. Verfolgen Sie den Fortschritt im Tab **Transfer**; bei Bedarf pausieren oder fortsetzen.  

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 Weitere Details: [Remote-Speicher durchsuchen & verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Methode 2: Vergleichen, dann kopieren oder löschen

1. Öffnen Sie den Quellordner links und den Zielordner rechts.
2. Klicken Sie in der Symbolleiste auf **Compare**.
3. RcloneView hebt eindeutige Elemente, Größenunterschiede und Übereinstimmungen hervor.
4. Wählen Sie aus, was verschoben werden soll, und wählen Sie dann **Copy →** oder **← Copy**.
5. Verwenden Sie **Delete** vorsichtig, um Duplikate oder veraltete Daten zu bereinigen.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 Mehr erfahren: [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)

### Methode 3: Synchronisieren oder als Job speichern

1. Wählen Sie Ihre pCloud-Quelle und Ihr Google-Drive-Ziel aus.
2. Klicken Sie auf **Sync** und wählen Sie einseitige oder zweiseitige Synchronisation.
3. Sehen Sie sich die Änderungen in der Vorschau an, passen Sie Filter (Einschluss/Ausschluss) an und starten Sie dann.
4. Klicken Sie auf **Save to Jobs**, um dieselbe Konfiguration später wiederzuverwenden.  

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 Mehr erfahren:
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen & verwalten](/howto/rcloneview-basic/execute-manage-job)


### Methode 4: Wiederkehrende Sync-Jobs planen

1. Öffnen Sie **Job Manager → Add Job**.
2. Legen Sie **pCloud** als Quelle und **Google Drive** als Ziel fest (oder umgekehrt).
3. Wählen Sie einen Zeitplan (stündlich, täglich, wöchentlich oder benutzerdefiniert nach Cron-Art).
4. Aktivieren Sie den Job und lassen Sie RcloneView ihn automatisch ausführen.
5. Überprüfen Sie Protokolle und Verlauf, um erfolgreiche Durchläufe zu bestätigen.

👉 Mehr erfahren: [Job-Zeitplanung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## Tipps für reibungslose Übertragungen

- Führen Sie vor großen Synchronisationen einen **Testlauf** (dry-run) durch, um den Plan zu bestätigen.
- Nutzen Sie **Bandbreitenlimits** während der Arbeitszeiten, um das Risiko einer Drosselung zu verringern.
- Stellen Sie bei verschlüsselten pCloud-Ordnern sicher, dass Sie über Zugriffsschlüssel verfügen oder lokal entschlüsseln, bevor Sie verschieben.
- Teilen Sie Jobs bei Annäherung an das Tageslimit von Google Drive auf mehrere Tage oder Konten auf.
- Halten Sie den Tab **Transfer** geöffnet, um Wiederholungsversuche, Geschwindigkeiten und etwaige API-Antworten zu überwachen.

## Zusammenfassung

RcloneView bietet schnelle, zuverlässige Übertragungen zwischen **pCloud** und **Google Drive** – ganz ohne CLI. Mit nebeneinander angeordneter Ansicht, Vergleich, Synchronisation, wiederverwendbaren Jobs und Zeitplanung können Sie Migrationen oder wiederkehrende Backups ohne manuelles Herunter- und erneutes Hochladen bewältigen.

<CloudSupportGrid />
