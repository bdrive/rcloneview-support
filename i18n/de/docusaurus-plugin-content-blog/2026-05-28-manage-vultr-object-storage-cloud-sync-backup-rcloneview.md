---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "Vultr Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - alex
description: "Verbinden Sie Vultr Object Storage mit RcloneView und verwalten Sie Ihre S3-kompatiblen Buckets über eine grafische Oberfläche — Synchronisation, Backup, Mount und automatisierte Übertragungen ganz ohne CLI."
keywords:
  - Vultr Object Storage
  - RcloneView Vultr
  - Vultr S3 compatible backup
  - Vultr cloud sync GUI
  - S3-compatible object storage manager
  - Vultr bucket sync
  - object storage backup tool
  - cloud file transfer Vultr
  - Vultr cloud management
  - S3 compatible GUI rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vultr Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView

> RcloneView verbindet sich mit der S3-kompatiblen API von Vultr Object Storage und bietet Ihnen eine vollständige grafische Oberfläche zum Durchsuchen von Buckets, Planen von Backups und Einbinden von Cloud-Speicher als lokales Laufwerk.

Vultr Object Storage ist ein S3-kompatibler Objektspeicherdienst, der auf der Vultr-Cloud-Infrastruktur aufbaut und von Entwicklern und Infrastruktur-Teams bevorzugt wird, die global verteilten, kosteneffizienten Speicher neben den Compute-Angeboten von Vultr benötigen. Während der Dienst programmatisch unkompliziert zu konfigurieren ist, ist die tägliche Dateiverwaltung über die CLI oder das Schreiben eigener Skripte ein Aufwand, den die meisten Teams vermeiden möchten. RcloneView löst dieses Problem, indem es Vultr-Buckets genau wie jeden anderen Remote behandelt — Sie durchsuchen sie in einem geteilten Datei-Explorer, richten wiederkehrende Synchronisationsjobs über einen Assistenten ein und überwachen Übertragungen live, ohne einen einzigen rclone-Befehl zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vultr Object Storage in RcloneView verbinden

Das Hinzufügen von Vultr zu RcloneView erfolgt über das Standard-S3-kompatible Setup. Öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**, wählen Sie dann **Amazon S3** als Anbietertyp. Geben Sie Ihren Vultr Object Storage Access Key und Secret Key ein — diese finden Sie im Vultr-Kontrollpanel im Bereich „Credentials" Ihrer Object-Storage-Instanz. Fügen Sie im Feld **Endpoint** die in Ihrem Vultr-Dashboard angezeigte Endpoint-URL ein (jede Rechenzentrumsregion hat ihre eigene Endpoint-URL). Lassen Sie das Regionsfeld auf `auto` oder leer — Vultr übernimmt das Routing basierend auf dem Endpoint.

Nach dem Speichern erscheint Ihr Vultr-Bucket als übergeordneter Ordner im Explorer-Panel von RcloneView. Navigieren Sie über die Breadcrumb-Pfadleiste durch Objekt-Präfixe, wechseln Sie zwischen Listen- und Miniaturansicht und sehen Sie Dateiname, Größe und Änderungsdatum auf einen Blick. Das Zweifensterlayout ermöglicht es Ihnen, Vultr in einem Panel und einen lokalen Ordner, NAS-Pfad oder eine andere Cloud im anderen zu öffnen — das macht Drag-and-Drop-Uploads, Downloads und anbieterübergreifende Kopien unkompliziert.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView kann bis zu vier Explorer-Panels gleichzeitig anzeigen, was nützlich ist, wenn Sie Daten zwischen mehreren Vultr-Regionen verschieben oder zwischen Vultr und einem Anbieter wie Backblaze B2 hin und her hochladen.

## Dateien mit Vultr Object Storage synchronisieren und sichern

Automatisierte Backup-Jobs in RcloneView folgen einem 4-Schritte-Assistenten. Wählen Sie Ihre Quelle — einen lokalen Ordner, ein externes Laufwerk oder einen anderen Cloud-Remote — und wählen Sie den Vultr-Bucket als Ziel. Benennen Sie den Job, wählen Sie die Einweg-Synchronisation, um Daten nach Vultr zu spiegeln, und konfigurieren Sie dann Filter- und erweiterte Optionen. Eine Erhöhung der Anzahl gleichzeitiger Übertragungen beschleunigt den Durchsatz bei Workloads wie einem Softwareteam, das nächtliche Build-Artefakte sichert (Hunderte kleiner Dateien). Die Aktivierung des Prüfsummenvergleichs stellt sicher, dass jede Datei byte-genau identisch ankommt, was beim Archivieren kompilierter Binärdateien oder Datenbank-Dumps wichtig ist.

Klicken Sie vor dem ersten Live-Lauf auf **Dry Run**, um eine Vorschau der vollständigen Liste der Dateien anzuzeigen, die übertragen oder entfernt würden. Diese Sicherheitsprüfung verhindert unerwartete Löschungen in gemeinsam genutzten Buckets. Wenn Sie zufrieden sind, klicken Sie auf **Run** — der Tab „Transferring" am unteren Rand von RcloneView zeigt Dateianzahl, Übertragungsgeschwindigkeit und Gesamtbytes mit Live-Updates an.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

RcloneView-PLUS-Nutzer können Jobs mit crontab-artigen Regeln planen — zum Beispiel ein nächtliches Backup um 03:00 Uhr, das Montag bis Freitag läuft — und Benachrichtigungen bei Abschluss erhalten.

## Vultr-Speicher als lokales Laufwerk einbinden

Mit der Mount-Funktion von RcloneView können Sie einen Vultr-Bucket direkt als lokalen Laufwerksbuchstaben (Windows) oder Mount-Punkt (macOS/Linux) einbinden, sodass er für jede Anwendung ohne explizite Synchronisationsschritte zugänglich ist. Öffnen Sie **Mount Manager** über den Tab „Remote", klicken Sie auf **New Mount**, wählen Sie Ihren Vultr-Remote aus und wählen Sie den Bucket oder Unterordner, der freigegeben werden soll. Setzen Sie den VFS-Cache-Modus für die meisten Workloads auf **writes** und klicken Sie dann auf **Save and Mount**.

Der Bucket erscheint als lokales Volume. Eine CI-Pipeline, die Build-Artefakte direkt auf ein eingebundenes Laufwerk ablegt, benötigt beispielsweise kein Wissen über die API von Vultr — sie schreibt Dateien, als wären sie auf einer lokalen Festplatte, und rclone übernimmt den Upload transparent im Hintergrund.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie im Vultr-Kontrollpanel Ihre Object-Storage-Instanz und kopieren Sie den Access Key, Secret Key und die Endpoint-URL.
3. Gehen Sie in RcloneView zu **Remote tab → New Remote → Amazon S3**, geben Sie Ihre Anmeldedaten und den Vultr-Endpoint ein und speichern Sie.
4. Durchsuchen Sie Ihren Bucket im Explorer-Panel oder konfigurieren Sie automatisierte Backup-Jobs über den **Job Manager**.

Sobald die Verbindung hergestellt ist, integriert sich Vultr Object Storage nahtlos in jeden Multi-Cloud-Workflow, den Sie in RcloneView verwalten — neben lokalem Speicher, NAS und anderen Cloud-Anbietern in einer einzigen Oberfläche.

---

**Verwandte Anleitungen:**

- [Vultr Object Storage mit Google Drive synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Cloudflare R2 Cloud Storage verwalten mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Amazon-S3-Buckets als lokales Laufwerk einbinden mit RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
