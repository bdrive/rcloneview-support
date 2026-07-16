---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "Qiniu Cloud Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - kai
description: "Verbinden Sie Qiniu Cloud Kodo Object Storage mit RcloneView und synchronisieren, sichern oder übertragen Sie Dateien über 90+ Cloud-Anbieter hinweg aus einer GUI unter Windows, macOS und Linux."
keywords:
  - Qiniu Cloud storage sync
  - Kodo object storage GUI
  - RcloneView Qiniu setup
  - Qiniu S3 compatible rclone
  - sync files to Qiniu Cloud
  - Qiniu backup client Windows
  - Qiniu cloud storage manager
  - transfer files Qiniu RcloneView
  - Qiniu Kodo S3 desktop client
  - manage Qiniu buckets GUI
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Qiniu Cloud Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern

> Verbinden Sie den Kodo Object Storage von Qiniu Cloud mit der Dual-Pane-Oberfläche von RcloneView und erledigen Sie Uploads, Backups und Cloud-übergreifende Übertragungen, ohne eine CLI anzufassen.

Qiniu Cloud (七牛云) ist einer der führenden Cloud-Infrastrukturanbieter Chinas, und sein Kodo-Object-Storage-Dienst wird häufig für Medienbereitstellung, Verwaltung von Anwendungs-Assets und großangelegte Datenarchivierung eingesetzt. Da Kodo eine S3-kompatible API implementiert, verbindet sich RcloneView damit über denselben Workflow wie mit Amazon S3, Wasabi oder Cloudflare R2 — ohne spezielle Plugins. Anders als reine Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner gegen Kodo und 90+ weitere Anbieter in der KOSTENLOSEN Lizenz, was es zu einem praktischen Einzelwerkzeug für Teams mit gemischten Cloud-Umgebungen macht.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qiniu Kodo als S3-Remote in RcloneView einrichten

Um Qiniu Kodo hinzuzufügen, öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**. Wählen Sie das S3-Protokoll aus der Anbieterliste und dann **Qiniu** als S3-Anbieter. Sie benötigen drei Anmeldedaten aus Ihrer Qiniu Cloud Console: Ihren **Access Key**, Ihren **Secret Key** und den **regionalen Endpunkt** für die Zone des Buckets. Nach der Eingabe speichert RcloneView die Konfiguration in Ihrer lokalen rclone-Konfigurationsdatei, und der Remote erscheint sofort im Explorer-Bereich.

Eine separate rclone-Installation ist nicht erforderlich — RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert, die die gesamte API-Kommunikation übernimmt. Wenn Sie rclone bereits extern verwalten, können Sie RcloneView stattdessen über Settings > Connect Manager mit dieser Instanz verbinden.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

Nach dem Speichern erscheinen Ihre Kodo-Buckets in der Tab-Leiste des Bereichs. Klicken Sie auf einen Bucket, um dessen Inhalt in der Dateiliste zu durchsuchen, mit Spalten für Name, Typ, Änderungsdatum und Größe.

## Kodo-Buckets durchsuchen und verwalten

Das Dual-Pane-Layout von RcloneView ermöglicht es Ihnen, mit Qiniu Kodo neben jedem anderen Remote — einem lokalen Ordner, Google Drive, einem Unternehmens-S3-Bucket — im selben Fenster zu arbeiten. Ziehen Sie Dateien vom lokalen Bereich in den Kodo-Bereich, um sie hochzuladen, oder umgekehrt, um sie herunterzuladen. Das Verschieben von Dateien zwischen zwei Qiniu-Remotes (oder Buckets) kopiert sie direkt, ohne über Ihre lokale Festplatte zu laufen.

Für Massenoperationen verwenden Sie Shift+Klick oder Strg+Klick, um mehrere Objekte auszuwählen, und kopieren, verschieben oder löschen Sie sie dann in einer Aktion. Der Thumbnail-Ansichtsmodus ist nützlich beim Durchsuchen bildlastiger Kodo-Buckets. Vor jeder destruktiven Operation zeigt die Schaltfläche **Dry Run** genau an, welche Dateien betroffen wären — eine wichtige Absicherung beim Bereinigen von Produktions-Assets.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## Dateien mit Qiniu Cloud synchronisieren und sichern

Der 4-Schritte-Sync-Assistent von RcloneView konfiguriert wiederholbare Jobs gegen Kodo. In **Schritt 1** wählen Sie Qiniu entweder als Quelle oder Ziel und kombinieren es mit einem anderen Remote — zum Beispiel die Synchronisation einer lokalen Mediathek zu einem Kodo-Bucket für die CDN-Verteilung. In **Schritt 2** stellen Sie die Anzahl paralleler Übertragungen ein und aktivieren die Prüfsummenverifizierung, um zu bestätigen, dass jedes hochgeladene Objekt Bit für Bit mit seiner Quelle identisch ist. **Schritt 3** bietet Dateityp-Filter, Altersbereiche und Größenbeschränkungen, sodass Sie Cache-Dateien ausschließen oder Synchronisationen auf kürzlich geänderte Assets beschränken können.

Mit einer PLUS-Lizenz schaltet **Schritt 4** cron-artige Zeitplanung frei: Konfigurieren Sie ein nächtliches Backup von einem Produktionsserver-Verzeichnis zu Kodo, und RcloneView führt es automatisch im Hintergrund aus. Die Funktion **1:N-Synchronisation** lässt eine einzelne Quelle gleichzeitig auf mehrere Ziele replizieren — nützlich, um denselben Asset-Bestand in einem einzigen Job auf Qiniu Kodo und ein sekundäres S3-Archiv zu verteilen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## Übertragungen und Job-Verlauf überwachen

Der Tab **Transferring** am unteren Rand von RcloneView zeigt den Live-Fortschritt aktiver Kodo-Jobs: Dateiname, übertragene Bytes, aktuelle Geschwindigkeit und Gesamtfertigstellung. Für eine große initiale Befüllung — beispielsweise das Hochladen mehrerer hundert Gigabyte an Videomaterial in einen neuen Bucket — macht diese Live-Übertragungsüberwachung ein separates Monitoring-Dashboard überflüssig.

Der Tab **Job History** zeichnet jeden abgeschlossenen Lauf mit Startzeit, Dauer, Gesamtgröße, Übertragungsgeschwindigkeit, Dateianzahl und Status auf. Filtern Sie nach Datumsbereich oder Job-Typ, um die Synchronisationsaktivität über Wochen oder Monate zu überprüfen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Tab **Remote**, klicken Sie auf **New Remote**, wählen Sie das S3-Protokoll und dann **Qiniu** als Anbieter.
3. Geben Sie Ihren **Access Key**, **Secret Key** und den regionalen Endpunkt aus Ihrer Qiniu Cloud Console ein.
4. Erstellen Sie einen Sync-Job, der auf Ihren Kodo-Bucket zeigt, und führen Sie ihn aus, um lokale Dateien zu sichern oder Daten zwischen Qiniu und einer anderen Cloud zu übertragen.

Mit angebundenem Qiniu Kodo gibt Ihnen RcloneView die volle Kontrolle über Ihren chinesischen Cloud-Speicher aus derselben Oberfläche, die Sie für jeden anderen Anbieter nutzen.

---

**Weiterführende Anleitungen:**

- [Amazon S3 Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cloudflare R2 Storage verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Wasabi Cloud Storage verwalten — Synchronisieren und Sichern mit RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
