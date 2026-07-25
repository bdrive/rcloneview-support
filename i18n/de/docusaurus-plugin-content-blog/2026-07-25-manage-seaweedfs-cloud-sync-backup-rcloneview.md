---
slug: manage-seaweedfs-cloud-sync-backup-rcloneview
title: "SeaweedFS-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - alex
description: "Verbinden Sie selbst gehosteten SeaweedFS-Objektspeicher mit RcloneView für plattformübergreifendes Mounten, Synchronisieren und Sichern — ganz ohne CLI."
keywords:
  - SeaweedFS RcloneView
  - SeaweedFS S3-kompatibler Speicher
  - Self-Hosted Objektspeicher GUI
  - SeaweedFS mounten
  - SeaweedFS Backup
  - SeaweedFS Synchronisation
  - Verteilter Objektspeicher
  - SeaweedFS S3-Gateway
  - SeaweedFS-Speicher verwalten
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SeaweedFS-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Verwandeln Sie Ihren selbst gehosteten SeaweedFS-Cluster in ein einbindbares Laufwerk und ein erstklassiges Synchronisationsziel, ohne ein Terminal anzufassen.

SeaweedFS ist ein schnelles verteiltes Speichersystem mit einem S3-kompatiblen Gateway, was es zu einer beliebten Wahl für Teams macht, die Objektspeicher auf eigener Hardware statt einer Public-Cloud-Rechnung wollen. Der Haken ist, dass die meisten SeaweedFS-Deployments ausschließlich über Konfigurationsdateien und CLI-Befehle verwaltet werden. RcloneView schließt diese Lücke, indem es Ihr SeaweedFS-Gateway wie jedes andere S3-kompatible Remote behandelt und Ihnen einen visuellen Dateibrowser, Drag-and-Drop-Übertragungen und geplante Backups auf Ihrem bestehenden Cluster bietet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SeaweedFS als S3-kompatibles Remote verbinden

Das S3-Gateway von SeaweedFS spricht dasselbe Protokoll wie Amazon S3, sodass sich RcloneView genauso damit verbindet wie mit jedem anderen S3-kompatiblen Anbieter: Access Key ID, Secret Access Key und ein benutzerdefinierter Endpunkt, der auf die Adresse und den Port Ihres Gateways verweist. Öffnen Sie Remote-Tab > New Remote, wählen Sie die S3-kompatible Option und geben Sie die Gateway-URL Ihres Clusters als Endpunkt ein. Da RcloneView mit einer eingebetteten rclone-Instanz ausgeliefert wird, die über die lokale RC-API kommuniziert, ist keine separate Binärdatei oder manuell zu bearbeitende Konfigurationsdatei nötig — die in der UI eingegebenen Zugangsdaten sind alles, was zur Einrichtung erforderlich ist.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new S3-compatible remote for a self-hosted SeaweedFS gateway in RcloneView" class="img-large img-center" />

Dieser Arbeitsablauf gilt unabhängig davon, ob Ihr SeaweedFS-Cluster auf einem Heimserver, in einem Colocation-Rack oder auf einer selbst verwalteten Cloud-VM läuft — RcloneView interessiert sich nur dafür, dass das Gateway auf S3-API-Aufrufe antwortet.

## Daten zwischen SeaweedFS und anderen Clouds synchronisieren und sichern

Einmal verbunden, verhält sich SeaweedFS wie jedes andere Panel im Explorer von RcloneView, sodass Sie Dateien im selben Fenster zwischen ihm und Google Drive, OneDrive, Backblaze B2 oder einer lokalen Festplatte per Drag-and-Drop verschieben können. Für wiederkehrenden Schutz lässt Sie der vierstufige Sync-Assistent einen einseitigen Job von Ihrem SeaweedFS-Bucket zu einem zweiten Remote konfigurieren, Filter zum Ausschluss temporärer Dateien hinzufügen und zunächst einen Dry Run ausführen, um genau vorherzusehen, was kopiert oder gelöscht würde.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between a SeaweedFS bucket and another cloud remote in RcloneView" class="img-large img-center" />

Anders als reine Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner zwischen SeaweedFS und jedem anderen unterstützten Anbieter — bereits mit der FREE-Lizenz.

## SeaweedFS als lokales Laufwerk einbinden

Wenn Ihr Arbeitsablauf davon abhängt, dass native Anwendungen direkt Dateien lesen und schreiben, können Sie mit dem Mount Manager Ihren SeaweedFS-Bucket unter Windows, macOS oder Linux als lokales Laufwerk einbinden. Stellen Sie den VFS-Cache-Modus auf „writes" für eine Balance aus Reaktionsfähigkeit und Sicherheit, oder auf „full", wenn Sie Offline-Zugriff auf zuletzt verwendete Dateien benötigen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a SeaweedFS remote as a local drive from Mount Manager" class="img-large img-center" />

## Übertragungen und Job-Verlauf überwachen

Jeder Sync- oder Kopierjob gegen Ihr SeaweedFS-Remote erscheint mit Live-Fortschritt, Geschwindigkeit und Dateizahlen im Transferring-Tab, und jeder abgeschlossene Lauf wird mit Dauer, Gesamtgröße und Status in der Job History protokolliert. Dieser Verlauf macht es leicht zu bestätigen, dass ein geplantes Backup tatsächlich gelaufen ist, bevor Sie sich darauf verlassen müssen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed sync runs against a SeaweedFS remote" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Besorgen Sie Access Key, Secret Key und Endpunkt-URL Ihres SeaweedFS-Gateways.
3. Erstellen Sie in RcloneView ein neues S3-kompatibles Remote und testen Sie die Verbindung.
4. Richten Sie einen Sync-Job oder Mount ein, um mit dem Verschieben von Daten zwischen SeaweedFS und Ihren anderen Remotes zu beginnen.

Selbst gehosteter Speicher muss nicht reine Kommandozeilensache sein — eine ordentliche GUI macht SeaweedFS so zugänglich wie jede kommerzielle Cloud.

---

**Weitere Anleitungen:**

- [Selbst gehosteten MinIO-Speicher verwalten — Cloud-Sync und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [VFS-Cache und Mount-Leistung in RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
