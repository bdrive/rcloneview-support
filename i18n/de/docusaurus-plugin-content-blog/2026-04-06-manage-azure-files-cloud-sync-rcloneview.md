---
slug: manage-azure-files-cloud-sync-rcloneview
title: "Azure Files mit RcloneView verwalten: Synchronisation, Backup und Mount von SMB-Cloud-Freigaben"
authors:
  - tayson
description: Erfahren Sie, wie Sie Azure Files-Freigaben mit RcloneView verwalten — Remotes hinzufügen, SMB-Freigaben durchsuchen, mit anderen Clouds synchronisieren, als lokales Laufwerk einbinden und Backups planen.
keywords:
  - rcloneview
  - azure files
  - azure file shares
  - smb cloud storage
  - cloud sync
  - mount azure files
  - azure backup
  - rclone GUI
  - multi-cloud management
  - azure file management
tags:
  - azure-files
  - azure
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Files mit RcloneView verwalten: Synchronisation, Backup und Mount von SMB-Cloud-Freigaben

> Azure Files bietet vollständig verwaltete SMB-Dateifreigaben in der Cloud. **RcloneView** ermöglicht es Ihnen, diese zu durchsuchen, zu synchronisieren, zu sichern und einzubinden — alles über eine visuelle Oberfläche ohne jegliche Kommandozeilenarbeit.

Azure Files ist Microsofts verwalteter Dateifreigabedienst, der SMB- und NFS-Zugriff direkt aus Azure bietet. Er ist bei Unternehmen beliebt, die Hybrid-Workloads, Lift-and-Shift-Anwendungen und gemeinsam genutzten Speicher für virtuelle Maschinen betreiben. Die Verwaltung von Azure Files außerhalb des Azure-Portals kann jedoch umständlich sein — insbesondere wenn Sie Daten zwischen Azure und anderen Clouds verschieben oder lokale Kopien synchron halten müssen.

RcloneView löst dieses Problem, indem es das Azure Files-Backend von rclone in eine übersichtliche, zweigeteilte GUI einbettet. Sie können Ihre Azure-Dateifreigaben als Remote hinzufügen, sie visuell durchsuchen, Dateien zwischen Clouds per Drag & Drop verschieben, Ordnerinhalte vergleichen, automatisierte Backups planen und Freigaben sogar als lokalen Laufwerksbuchstaben einbinden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum RcloneView für Azure Files verwenden

Azure Files funktioniert innerhalb des Azure-Ökosystems gut, aber reale Arbeitsabläufe erstrecken sich oft über mehrere Anbieter. Möglicherweise müssen Sie:

- **Azure-Dateifreigaben sichern** in eine separate Cloud wie Amazon S3, Backblaze B2 oder Wasabi zur Notfallwiederherstellung.
- **Azure Files mit Google Drive oder OneDrive synchronisieren**, damit Teammitglieder mit vertrauten Tools auf dieselben Daten zugreifen können.
- **Azure-Freigaben lokal einbinden** für Anwendungen, die einen lokalen Dateipfad statt eines SMB-Verbindungsstrings erwarten.
- **Daten migrieren** von Azure Files zu einem anderen Anbieter — oder umgekehrt.

RcloneView erledigt all dies ohne Skripting, PowerShell oder AzCopy.

## Azure Files als Remote hinzufügen

Die Einrichtung von Azure Files in RcloneView dauert weniger als eine Minute:

1. Öffnen Sie RcloneView und klicken Sie auf **+ New Remote**.
2. Wählen Sie den Speichertyp **Azure Files** aus der Liste.
3. Geben Sie Ihren **Azure Storage-Kontonamen** und **Kontoschlüssel** (oder SAS-Token) ein.
4. Benennen Sie Ihr Remote (z. B. `AzureFileShares`) und speichern Sie.

Ihre Azure-Dateifreigaben erscheinen nun im Explorer-Bereich und können durchsucht werden.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Azure Files remote in RcloneView" class="img-large img-center" />

## Dateifreigaben durchsuchen und verwalten

Nach der Verbindung zeigt RcloneView Ihre Azure-Dateifreigaben in einem vertrauten zweigeteilten Layout an. Sie können:

- **Verzeichnisse navigieren** innerhalb jeder Freigabe — in verschachtelte Ordner eintauchen wie in einem lokalen Dateimanager.
- **Dateimetadaten anzeigen** wie Größe, Änderungsdatum und Pfad.
- **Ordner umbenennen, löschen oder erstellen** direkt über die GUI.
- **Eine zweite Cloud öffnen** im gegenüberliegenden Bereich für die Verwaltung nebeneinander.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane explorer showing Azure Files alongside another cloud" class="img-large img-center" />

## Azure Files mit anderen Clouds synchronisieren

Die wahre Stärke von RcloneView zeigt sich, wenn Sie Azure Files mit einer anderen Cloud verbinden. Laden Sie Azure Files auf der einen Seite und Ihr Ziel — Google Drive, OneDrive, Amazon S3 oder ein beliebiges unterstütztes Remote — auf der anderen.

### Drag & Drop

Wählen Sie Dateien oder Ordner in Azure Files aus und ziehen Sie sie in den Zielbereich. RcloneView führt die Übertragung im Hintergrund aus und zeigt den Fortschritt in Echtzeit an.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Azure Files to another cloud" class="img-large img-center" />

### Vergleichen und selektives Kopieren

Verwenden Sie die Funktion **Compare**, um zu sehen, welche Dateien auf einer der beiden Seiten neu, geändert oder fehlend sind. Kopieren Sie dann nur die Unterschiede — perfekt für inkrementelle Updates, ohne alles übertragen zu müssen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Azure Files and a destination cloud" class="img-large img-center" />

### Vollständige Synchronisation

Führen Sie eine **Sync**-Operation aus, um das Ziel zu einem exakten Spiegel Ihrer Azure-Dateifreigabe zu machen. Verwenden Sie immer zuerst **Dry Run**, um eine Vorschau der Änderungen zu erhalten, bevor Sie sie übernehmen.

## Azure Files als lokales Laufwerk einbinden

RcloneView kann jede Azure-Dateifreigabe als lokalen Laufwerksbuchstaben unter Windows, macOS oder Linux einbinden. Das ist nützlich, wenn:

- Desktop-Anwendungen einen lokalen Pfad zum Lesen oder Schreiben von Dateien benötigen.
- Sie auf Azure Files über den Datei-Explorer oder Finder zugreifen möchten, ohne einen SMB-Client zu verwenden.
- Sie einen schnellen, temporären Mount für eine einmalige Aufgabe benötigen.

Öffnen Sie das Remote im Explorer, klicken Sie mit der rechten Maustaste auf eine Freigabe und wählen Sie **Mount**. Wählen Sie Ihren Laufwerksbuchstaben oder Mount-Punkt, und die Freigabe erscheint als lokales Volume.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Azure Files as a local drive from RcloneView Explorer" class="img-large img-center" />

## Automatisierte Backups planen

Für dauerhaften Schutz erstellen Sie einen **Scheduled Job** in RcloneView:

1. Richten Sie einen Sync- oder Copy-Job von Azure Files zu Ihrem Backup-Ziel ein.
2. Öffnen Sie das **Job Scheduling**-Panel und legen Sie einen Zeitplan fest — täglich, wöchentlich oder einen benutzerdefinierten Cron-Ausdruck.
3. Aktivieren Sie den Zeitplan und lassen Sie RcloneView den Rest erledigen.

Jeder Lauf wird im **Job History**-Panel protokolliert, sodass Sie überprüfen können, was übertragen wurde, und Fehler erkennen können.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule an automated backup job for Azure Files" class="img-large img-center" />

## Tipps für die Arbeit mit Azure Files

- **Verwenden Sie SAS-Token mit begrenztem Umfang**, wenn Sie RcloneView Zugriff gewähren möchten, ohne Ihren vollständigen Kontoschlüssel offenzulegen.
- **Überwachen Sie die Übertragungsgrößen** — Azure Files berechnet Speicher und Transaktionen; häufige Synchronisationen mit großen Deltas können sich summieren.
- **Schließen Sie temporäre Dateien aus** mithilfe der Filterregeln von RcloneView, um die Synchronisation von Sperrdateien, Protokollen oder Cache-Verzeichnissen zu vermeiden.
- **Testen Sie Wiederherstellungen regelmäßig**, indem Sie einige Dateien von Ihrem Backup-Ziel zurückkopieren, um die Integrität zu überprüfen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Ihr Azure Files-Remote hinzu** mit Ihren Speicherkonto-Anmeldedaten.
3. **Durchsuchen, synchronisieren, einbinden oder planen** — alles über die GUI, keine Kommandozeile erforderlich.

Die Verwaltung von Azure Files muss nicht Portal-Tabs und PowerShell-Skripte bedeuten. RcloneView vereint alles in einem Fenster.

---

**Verwandte Anleitungen:**

- [Cloud-zu-Cloud-Übertragungen und Synchronisation mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [Dropbox zu Azure Blob Storage mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)
- [Google Cloud Storage-Buckets mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)

<CloudSupportGrid />
