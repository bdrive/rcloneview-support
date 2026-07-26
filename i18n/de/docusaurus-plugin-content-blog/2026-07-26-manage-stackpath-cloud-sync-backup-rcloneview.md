---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "StackPath Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - jay
description: "Verbinden Sie StackPath Object Storage mit RcloneView für Drag-and-Drop-Dateiverwaltung, geplante Backups und Cross-Cloud-Synchronisation."
keywords:
  - StackPath Object Storage
  - StackPath S3
  - RcloneView StackPath
  - StackPath Dateien verwalten
  - StackPath Backup
  - StackPath Cloud-Synchronisation
  - S3-kompatible Storage-GUI
  - Edge Object Storage
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# StackPath Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, synchronisieren und sichern Sie StackPaths S3-kompatiblen Object Storage aus demselben Fenster, das Sie für jede andere Cloud verwenden.

StackPath Object Storage stellt eine S3-kompatible API bereit, wodurch es gut mit rclone-basierten Tools zusammenarbeitet, aber nur selten mit einer dedizierten Desktop-GUI ausgeliefert wird. Teams landen am Ende dabei, Uploads zu skripten oder zwischen separaten CLI-Sitzungen zu wechseln, nur um zu prüfen, was sich in einem Bucket befindet. RcloneView schließt diese Lücke, indem es StackPath wie jeden anderen Remote behandelt — vollständiges Datei-Browsing, Drag-and-Drop-Übertragungen und geplante Jobs, ohne einen einzigen Befehl zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einen StackPath-Bucket verbinden

Da StackPath das S3-Protokoll spricht, fügen Sie es in RcloneView genauso hinzu wie Amazon S3 oder Wasabi: Erstellen Sie einen neuen Remote, wählen Sie die S3-kompatible Anbieteroption, und geben Sie Ihren Access Key, Secret Key sowie die StackPath-Endpunkt-URL für Ihre Region ein. Nach der Verbindung erscheint der Bucket als normaler Tab im Explorer-Panel — keine separate Anmeldedatendatei, kein Terminal erforderlich, um die Verbindung zu überprüfen.

Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese-/Schreibzugriff bereits mit der FREE-Lizenz, sodass die Kombination von StackPath mit einem weiteren S3-kompatiblen Konto kein Upgrade erfordert, um Dateien zu verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## Dateien im Alltag durchsuchen und verwalten

Sobald der Remote eingerichtet ist, verhalten sich StackPath-Buckets im Explorer von RcloneView genau wie ein lokaler Ordner. Sie können nach Name, Typ, Änderungsdatum oder Größe sortieren, für bildlastige Buckets zur Miniaturansicht wechseln und mit Get Size prüfen, wie viel Speicherplatz ein Assets-Ordner beansprucht, bevor Sie entscheiden, ob Sie ihn anderswo archivieren. Die Mehrfachauswahl mit Strg+Klick oder Umschalt+Klick funktioniert genauso wie bei lokalen Laufwerken, sodass Massenlöschungen oder Massen-Downloads Sekunden statt eines skriptgesteuerten Vorgangs dauern.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## Sichern von und nach StackPath

Für wiederkehrende Backups richten Sie einen Sync-Job mit StackPath als Quelle oder Ziel ein. Der 4-Schritte-Assistent lässt Sie gleichzeitige Übertragungen konfigurieren, die Prüfsummenverifizierung aktivieren, sodass Dateien per Hash statt nur per Zeitstempel verglichen werden, und Filter anwenden, um Dateitypen auszuschließen, die nicht archiviert werden müssen. Führen Sie zuerst einen Dry Run aus, um genau zu sehen, was kopiert oder gelöscht wird, bevor Sie die Übertragung bestätigen — eine nützliche Absicherung, wenn ein Bucket Produktionsdaten enthält.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen neuen Remote und wählen Sie den S3-kompatiblen Anbietertyp.
3. Geben Sie Ihren StackPath Access Key, Secret Key und Endpunkt ein.
4. Richten Sie einen Sync- oder Copy-Job ein, um Dateien zwischen StackPath und Ihren anderen Remotes zu verschieben.

Sobald StackPath in RcloneView eingebunden ist, wird die Verwaltung von Object Storage nicht mehr zur Skript-Aufgabe, sondern Teil Ihres normalen Datei-Workflows.

---

**Weiterführende Anleitungen:**

- [Ceph Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Scaleway Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [S3 Access Denied beheben — Berechtigungsfehler mit RcloneView lösen](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
