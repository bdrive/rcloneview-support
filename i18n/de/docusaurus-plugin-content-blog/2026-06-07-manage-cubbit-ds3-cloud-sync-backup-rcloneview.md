---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "Cubbit DS3 Storage verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - alex
description: "Erfahren Sie, wie Sie Cubbit DS3 mit RcloneView verbinden und Ihren geo-verteilten europäischen Cloud-Speicher über eine einfache Desktop-GUI synchronisieren, sichern und verwalten."
keywords:
  - Cubbit DS3 Synchronisation
  - Cubbit DS3 Backup
  - Cubbit S3-kompatibler Speicher
  - RcloneView Cubbit
  - Backup für europäischen Cloud-Speicher
  - geo-verteilter Objektspeicher
  - Cubbit DS3 Einrichtungsanleitung
  - privates Cloud-Backup mit RcloneView
  - Verwaltung S3-kompatibler Speicher
  - Cubbit DS3 Dateimanager
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cubbit DS3 Storage verwalten — Dateien synchronisieren und sichern mit RcloneView

> RcloneView verbindet sich über das S3-Protokoll mit Cubbit DS3 und ermöglicht es Ihnen, Ihren geo-verteilten europäischen Cloud-Speicher zu durchsuchen, zu synchronisieren und zu sichern, ohne einen einzigen CLI-Befehl zu schreiben.

Cubbit DS3 ist ein geo-verteilter, S3-kompatibler Objektspeicherdienst, der über europäische Knoten hinweg aufgebaut ist. Im Gegensatz zu zentralisierten Anbietern verteilt und verschlüsselt Cubbit Ihre Daten über ein Netzwerk verteilter Zellen, was ihn zu einer überzeugenden Wahl für Teams macht, die den GDPR-Anforderungen unterliegen, oder für alle, die einen von Grund auf privaten Speicher wünschen. Da Cubbit DS3 vollständig S3-kompatibel ist, verbindet sich RcloneView mit demselben Anmeldeverfahren wie bei anderen S3-Anbietern damit — ohne spezielle Plugins oder Konfiguration.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cubbit DS3 mit RcloneView verbinden

Öffnen Sie RcloneView und gehen Sie zu **Remote-Tab > Neuer Remote**. Wählen Sie **Amazon S3** als Remote-Typ und dann **Cubbit DS3** aus der Liste der S3-Anbieter. Geben Sie Ihre Cubbit Access Key ID, Ihren Secret Access Key und die S3-Endpunkt-URL ein, die Sie aus Ihrem Cubbit-Konsolen-Dashboard kopiert haben. Lassen Sie die Region leer oder verwenden Sie den in der Cubbit-Dokumentation empfohlenen Wert. Klicken Sie auf **Speichern**, und Ihr Cubbit-DS3-Remote erscheint als neuer Tab im Datei-Explorer.

Die Verbindung wird sofort wirksam. Sie können Ihren Bucket im Ordnerbaum auf der linken Seite erweitern, Objekte in der detaillierten Listenansicht durchsuchen oder zur Miniaturansicht wechseln, um im Bucket gespeicherte Bild-Assets in der Vorschau anzuzeigen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## Dateien in Cubbit DS3 hochladen und verwalten

Das Zwei-Fenster-Layout von RcloneView macht das Hochladen von Dateien zu Cubbit DS3 unkompliziert. Öffnen Sie einen lokalen Ordner in einem Fenster und Ihren Cubbit-DS3-Bucket im anderen. Ziehen Sie einen Ordner — etwa eine Sammlung von CAD-Zeichnungen eines Architekturbüros — vom linken Fenster in das Cubbit-Fenster rechts. RcloneView übernimmt automatisch gleichzeitige Multithread-Uploads, und der Übertragungsmonitor am unteren Rand zeigt Live-Übertragungsgeschwindigkeit, Dateianzahl und Fortschritt.

Ein Rechtsklick auf ein beliebiges Objekt im Cubbit-Fenster öffnet das vollständige Kontextmenü: Kopieren, Ausschneiden, Löschen, Umbenennen, Größe ermitteln und Öffentlichen Link abrufen. Die Option **Größe ermitteln** ist besonders nützlich, um den Speicherverbrauch großer Bucket-Ordner zu berechnen, bevor Sie sich für eine Synchronisationsstrategie entscheiden.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## Geplante Synchronisationsjobs für Cubbit DS3 einrichten

Für automatisierte Backups verwenden Sie die Schaltfläche **Sync** im Home-Tab, um den 4-Schritte-Job-Assistenten zu starten. Wählen Sie Ihren lokalen Ordner oder einen anderen Cloud-Remote als Quelle und Ihren Cubbit-DS3-Bucket als Ziel. Erhöhen Sie in Schritt 2 die Anzahl der gleichzeitigen Dateiübertragungen, um die verteilte Bandbreite von Cubbit voll auszunutzen. Wenden Sie in Schritt 3 Dateityp-Filter an — schließen Sie beispielsweise `.tmp`- und `.log`-Dateien aus, um das Backup sauber zu halten.

PLUS-Lizenznutzer schalten Schritt 4 frei: Cron-artige Planung. Legen Sie fest, dass ein Job jede Nacht um 3 Uhr ausgeführt wird, fügen Sie einen Filter für das maximale Dateialter hinzu, um nur kürzlich geänderte Dateien zu synchronisieren, und konfigurieren Sie E-Mail-Benachrichtigungen, um jeden Lauf zu bestätigen. Dies ist ideal für ein Forschungsteam, das automatische nächtliche Snapshots seines Datensatzarchivs auf einem konformen europäischen Speicher-Backend benötigt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## Übertragungen mit dem Job-Verlauf nachverfolgen

Nach jedem Synchronisationslauf zeichnet die Ansicht **Job-Verlauf** von RcloneView Ausführungszeit, Dauer, insgesamt übertragene Bytes, Übertragungsgeschwindigkeit und Endstatus auf. Für Cubbit DS3 ist dieses Prüfprotokoll wertvoll, wenn Sie bestätigen müssen, dass ein kritisches Backup erfolgreich abgeschlossen wurde, oder wenn Sie einen fehlgeschlagenen Lauf untersuchen, um herauszufinden, welche Dateien die Fehler verursacht haben.

Verwenden Sie die Funktion **Testlauf**, bevor Sie einen destruktiven Vorgang ausführen — sie simuliert die Synchronisation und listet jede Datei auf, die kopiert oder gelöscht würde, sodass Sie den Umfang überprüfen können, ohne den Bucket zu berühren.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zu **Remote-Tab > Neuer Remote**, wählen Sie Amazon S3 und dann Cubbit DS3 als Anbieter.
3. Geben Sie Ihren Cubbit Access Key, Secret Key und den S3-Endpunkt aus der Cubbit-Konsole ein.
4. Durchsuchen Sie Ihren Bucket im Datei-Explorer und ziehen Sie Dateien hinein, um sofort mit dem Hochladen zu beginnen.

Mit Cubbit DS3, verbunden mit RcloneView, erhalten Sie einen vollständig visuellen Workflow für geo-verteilten europäischen Speicher — kein Terminal erforderlich.

---

**Verwandte Anleitungen:**

- [Cloudflare-R2-Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [DigitalOcean Spaces verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [S3-, Wasabi- und R2-Speicher mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
