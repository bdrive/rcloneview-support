---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "Dropbox mit DigitalOcean Spaces synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - morgan
description: "Erfahren Sie, wie Sie Dropbox-Dateien mit RcloneView zu DigitalOcean Spaces synchronisieren und sichern. Automatisierte Cloud-zu-Cloud-Übertragungen ohne CLI einrichten."
keywords:
  - Dropbox zu DigitalOcean Spaces synchronisieren
  - Dropbox zu DigitalOcean Backup
  - RcloneView Dropbox DigitalOcean
  - Cloud-zu-Cloud-Synchronisation
  - DigitalOcean Spaces Backup
  - Dropbox Backup Objektspeicher
  - Cloud-Sync GUI
  - RcloneView S3-Synchronisation
  - automatisches Cloud-Backup
  - DigitalOcean Spaces rclone
tags:
  - RcloneView
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox mit DigitalOcean Spaces synchronisieren — Cloud-Backup mit RcloneView

> Sichern Sie Ihre Dropbox-Dateien automatisch im Objektspeicher DigitalOcean Spaces — ganz ohne CLI-Befehle.

Dropbox ist ein naheliegendes Kollaborationstool für Teams, die täglich Dateien austauschen. DigitalOcean Spaces bietet S3-kompatiblen Objektspeicher für Entwickler, die skalierbaren, günstigen Speicher wünschen, der sich in ihre Infrastruktur integriert. Kombiniert man beide mit RcloneView, entsteht eine automatisierte Offsite-Backup-Pipeline: Die Dateien bleiben in Dropbox für die aktive Zusammenarbeit, während Spaces die dauerhaften Backup-Kopien vorhält. RcloneView übernimmt die gesamte Cloud-zu-Cloud-Übertragung visuell — kein Terminal erforderlich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und DigitalOcean Spaces verbinden

Fügen Sie zunächst beide Dienste als Remotes in RcloneView hinzu. Für Dropbox gehen Sie zu **Remote-Tab > Neuer Remote**, wählen **Dropbox** und klicken sich durch den OAuth-Browser-Ablauf, um RcloneView zu autorisieren. Es müssen keine API-Schlüssel kopiert werden — das sich öffnende Browserfenster übernimmt die Authentifizierung automatisch und kehrt nach Abschluss zu RcloneView zurück.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Für DigitalOcean Spaces legen Sie einen zweiten neuen Remote an, wählen **S3** und als Anbieter **DigitalOcean**. Sie benötigen einen **Access Key** und **Secret Key** aus dem DigitalOcean-Kontrollpanel (unter API > Spaces Keys) sowie den **Region-Endpunkt** für Ihre Spaces-Region — zum Beispiel `nyc3.digitaloceanspaces.com` für New York. Sobald beide Remotes gespeichert sind, erscheinen sie als durchsuchbare Tabs im RcloneView-Dateiexplorer.

## Den Sync-Job konfigurieren

Nachdem beide Remotes verbunden sind, klicken Sie im **Home-Tab** auf **Sync**, um den 4-Schritte-Sync-Assistenten zu öffnen. Legen Sie in Schritt 1 Ihren Dropbox-Ordner als **Quelle** und Ihren DigitalOcean-Spaces-Bucket (oder ein Unterverzeichnis darin) als **Ziel** fest. Geben Sie dem Job einen aussagekräftigen Namen — `dropbox-spaces-backup` eignet sich gut — und wählen Sie **einseitige Synchronisation**, damit das Ziel eine originalgetreue Kopie der Quelle bleibt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

Legen Sie in Schritt 2 die Anzahl der gleichzeitigen Dateiübertragungen entsprechend Ihrer Verbindungskapazität fest. Für eine Design-Agentur mit Tausenden kleinen Asset-Dateien, verteilt auf viele Dropbox-Ordner, beschleunigt eine Erhöhung dieses Werts die erste vollständige Synchronisation spürbar. Fügen Sie in Schritt 3 Filterregeln hinzu, um alles auszuschließen, was Sie in Spaces nicht benötigen — zum Beispiel `.DS_Store`-Dateien, Dropbox-Paper-Dokumente oder jeden Ordner, den Sie nur für flüchtige Entwürfe nutzen.

Bevor Sie den Job zum ersten Mal ausführen, klicken Sie auf **Dry Run**, um genau zu sehen, welche Dateien übertragen oder gelöscht würden. So bestätigen Sie, dass Ihre Filterregeln wie gewünscht funktionieren, bevor Daten bewegt werden.

## Aktive Übertragungen überwachen

Sobald Sie auf **Run Job** klicken, zeigt der **Transferring**-Tab am unteren Rand von RcloneView den Live-Fortschritt: Dateianzahl, Übertragungsgeschwindigkeit und insgesamt übertragene Byte-Menge. Bei einer großen Erstsynchronisation — etwa einem Content-Studio, das 80.000 Dateien aus einem vollständigen Dropbox-Konto verschiebt — lässt sich mit dieser Ansicht leicht abschätzen, wie lange der Job dauern wird, und frühe Fehler lassen sich rechtzeitig erkennen. Sie können einen laufenden Job jederzeit abbrechen, und die Wiederholungseinstellung (konfigurierbar in Schritt 2) fängt vorübergehende Netzwerkstörungen automatisch ab.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## Automatische Backups planen (PLUS-Lizenz)

Für eine automatisierte Backup-Routine können Nutzer mit **PLUS-Lizenz** in Schritt 4 des Sync-Assistenten einen Zeitplan im Crontab-Stil hinzufügen. Legen Sie fest, dass der Job jede Nacht, alle paar Stunden oder an bestimmten Wochentagen ausgeführt wird. Klicken Sie vor dem Speichern auf **Simulate Schedule**, um die nächsten Ausführungszeitpunkte in der Vorschau zu sehen und das Timing zu bestätigen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

Nach der Planung führt RcloneView den Job im Hintergrund aus und sendet bei Abschluss eine Desktop-Benachrichtigung. Die **Job History**-Ansicht protokolliert jede Ausführung — Startzeit, Dauer, Dateianzahl, Gesamtgröße und Endstatus — sodass Sie stets einen klaren Überblick darüber haben, wann Ihr Dropbox-Backup zuletzt lief und ob es erfolgreich war.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Dropbox** als Remote über den OAuth-Browser-Login-Ablauf hinzufügen.
3. **DigitalOcean Spaces** als S3-Remote mit Access Key, Secret Key und Region-Endpunkt hinzufügen.
4. Den Sync-Assistenten öffnen, Dropbox als Quelle und Spaces als Ziel festlegen und auf **Run Job** klicken.

Mit dieser Einrichtung werden Ihre Dropbox-Inhalte fortlaufend nach DigitalOcean Spaces gespiegelt — Sie erhalten so ein dauerhaftes, automatisch gepflegtes Offsite-Backup, das keinen laufenden manuellen Aufwand erfordert.

---

**Verwandte Anleitungen:**

- [Dropbox verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [DigitalOcean Spaces verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Dropbox mit Backblaze B2 sichern — Günstiger Cloud-Speicher mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
