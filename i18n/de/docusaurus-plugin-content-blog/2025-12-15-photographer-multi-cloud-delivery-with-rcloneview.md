---
slug: photographer-multi-cloud-delivery-with-rcloneview-dec
title: "Leitfaden für Fotografen: Galerien mit RcloneView an jeden Kunden-Cloud-Speicher liefern"
authors:
  - jay
description: "Wie man eine Galerie einmal vorbereitet und an Drive, Dropbox, OneDrive/SharePoint, Box und S3/Wasabi liefert, ohne erneut hochzuladen oder mehrere Anbieter-Apps jonglieren zu müssen."
keywords:
  - rcloneview
  - photography workflow
  - multi cloud
  - client delivery
  - google drive
  - dropbox
  - onedrive
  - box
  - wasabi
  - s3
tags:
  - cloud
  - sync
  - tutorial
  - photography
  - multi-cloud
  - wasabi
  - google-drive
  - onedrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Leitfaden für Fotografen: Galerien mit RcloneView an jeden Kunden-Cloud-Speicher liefern

> Bereite deine finalen Bilder einmal vor und verteile sie dann an den Speicher, den jeder Kunde verlangt: Google Drive, Dropbox, OneDrive/SharePoint, Box oder S3/Wasabi/R2. RcloneView bietet dir eine Zwei-Fenster-GUI über rclone mit Vergleich, Jobs und Cloud-zu-Cloud-Geschwindigkeit, damit du nicht mehr die ganze Nacht dieselbe Galerie erneut hochladen musst.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
<!-- Image placeholder: two-pane RcloneView with local "Client_Finals" on the left and tabs for Drive, Dropbox, OneDrive, Box, and Wasabi on the right. -->


## Warum Fotografen das brauchen

- Kunden verlangen oft Uploads in ihren eigenen Speicher (Richtlinien, Aufbewahrung) statt eines öffentlichen Links.  
- Unterschiedliche Ziele pro Auftrag: Die Agentur will Drive, die Marke möchte eine Dropbox-Dateianfrage, der Retuscheur nutzt OneDrive, das Archiv liegt auf Wasabi/S3.  
- 8-12 GB pro Kunde erneut hochzuladen bringt die heimische Upload-Bandbreite an ihre Grenzen; Anbieter-Apps liefern undurchsichtige Fehlermeldungen.  
- Teilaktualisierungen werden benötigt: nur geänderte Auswahlen senden, ohne alles neu zu exportieren oder erneut hochzuladen.  
- Manchmal bereitest du die Dateien auf einer Cloud-VM vor der Geschwindigkeit wegen vor; Browser-Logins dort sind umständlich.

RcloneView deckt über 100 Anbieter in einer einzigen Oberfläche ab und kann umfangreiche Übertragungen auf ein Cloud-gehostetes rclone verlagern, wenn deine Upload-Leitung der Flaschenhals ist.

<img src="/support/images/en/tutorials/new-remote-all-remotes.png" alt="rcloneview multi cloud explorer" class="img-large img-center" />



## Schnelle Einrichtung (10 Minuten)

1. RcloneView installieren (Win/macOS/Linux): https://rcloneview.com/src/download.html  
2. Füge die Remotes hinzu, die deine Kunden nutzen, über **Remote -> + Neuer Remote**:  
   - Google Drive, Dropbox, OneDrive/SharePoint, Box (OAuth).  
   - S3/Wasabi/R2/B2 (S3-kompatibel: Endpunkt + Schlüssel).  
   - WebDAV/SFTP für benutzerdefinierte Endpunkte.  
3. Optional: **externes rclone** auf einer Cloud-VM für Cloud-zu-Cloud-Geschwindigkeit ausführen. Anleitung: https://rcloneview.com/support/tutorials/new-window-with-external-rclone (das Muster funktioniert für jedes beliebige Paar).

👉 Referenzen zur Remote-Einrichtung:  
- Google Drive hinzufügen: [Schritt-für-Schritt-Anleitung](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)  
- S3/Wasabi hinzufügen: [S3-kompatible Einrichtung](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)  

<!-- Image placeholder: “Add Remote” dialog with Drive, Dropbox, OneDrive, Box, Wasabi tiles highlighted. -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Lieferablauf: einmal vorbereiten, überall liefern

1. Bereite die finalen Bilder in `Projects/Client/Finals` vor (lokale SSD oder NAS).  
2. Öffne zwei Fenster: links = Finals, rechts = Ziel-Cloud.  
3. Klicke auf **Vergleichen**, um zu sehen, was fehlt; dann **Kopieren ->**, um nur neue/geänderte Dateien zu senden.  
4. Wechsle den rechten Tab zur nächsten Kunden-Cloud; nutze dieselbe Quelle wieder-kein zweiter lokaler Upload.  
5. Speichere jeden Ablauf als **Job** für wiederkehrende Kunden; ausführen oder planen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-large img-center" />

👉 Funktionsdokumentation:  
- Vergleichen: [wie es funktioniert](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)  
- Jobs erstellen: [Job-Erstellung](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)  
- Jobs ausführen & verwalten: [Job-Ausführung](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)  
- Planung: [Leitfaden zur Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<!-- Image placeholder: Compare results showing “missing on OneDrive/Dropbox” before copy. -->
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-large img-center" />
## Umgang mit häufigen Anfragen von Fotografen

- Die Agentur möchte Drive + Wasabi: Nach Drive kopieren, den Tab auf Wasabi umschalten, erneut kopieren-kein zweiter lokaler Upload.  
- Die Marke sendet einen Dropbox-Anfragelink und der Retuscheur nutzt Box: Beide Remotes offen halten, in beide ziehen, ohne erneut zu exportieren oder hochzuladen.  
- Der Kunde tauscht nach der Freigabe 10 Auswahlen aus: Vergleichen oder Synchronisation mit **Testlauf** ausführen; nur geänderte Dateien werden übertragen.  
- Der Kunde verbietet öffentliche Links: Lieferung innerhalb seines Mandanten (Drive/OneDrive/Dropbox/Wasabi) ohne externe Freigaben zu erzeugen.  
- Gemeinsam genutzter Arbeitsplatz: App-Sperre aktivieren (tutorials/enable-app-lock.md), damit gespeicherte Zugangsdaten geschützt sind.

<!-- Image placeholder: Transfer panel showing throughput, retries, and cloud-to-cloud copy success. -->

## Cloud-zu-Cloud, wenn deine Upload-Leitung schwach ist

- Starte `rclone rcd` auf einer Cloud-VM (EC2/GCE), öffne ein **neues Fenster** in RcloneView, verbinde dich mit diesem Daemon, füge dort Remotes hinzu und führe Vergleichen/Kopieren aus.  
- Muster für externes rclone (Beispiel OneDrive -> Wasabi): [Cloud-zu-Cloud-Beispiel](https://rcloneview.com/support/tutorials/external-rclone-onedrive-sharepoint-to-wasabi)
- Anleitungen für Headless-Authentifizierung: [OneDrive Headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless) und [Google Drive Headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)  


<!-- Image placeholder: New Window in RcloneView showing connection to an external rclone daemon. -->


## Kurz-Playbook (stressige Woche)

1) Remotes: Drive (Agentur), Dropbox (Marke), OneDrive (Retuscheur), Wasabi (Archiv).  
2) Tabs: Links = Finals; rechts = ein Tab pro Remote.  
3) Automatisieren: Jeden Ablauf als Job speichern; wöchentliche Aktualisierung für laufende Kampagnen planen.  
4) Prüfen: Job-Verlauf/Protokolle kontrollieren; Links mit Sicherheit versenden.

<!-- Image placeholder: Job Manager listing four delivery jobs with last-run status. -->

## Warum nicht einfach einen öffentlichen Link senden?

- Wenn der Kunde nur einen öffentlichen Link möchte, bist du fertig.  
- Nutze RcloneView, wenn Kunden die Dateien in ihrem eigenen Speicher benötigen (Richtlinien/Aufbewahrung), oder wenn du an mehrere Ziele liefern musst, ohne erneut hochzuladen, mit Teilaktualisierungen, Protokollierung und Cloud-zu-Cloud-Geschwindigkeit.

## Zusammenfassung

Fotografen brauchen keine drei Anbieter-Apps, um drei Clouds zu bedienen. Mit RcloneView bereitest du einmal vor, vergleichst, kopierst und planst Jobs über Drive, Dropbox, OneDrive/SharePoint, Box und S3/Wasabi. Klare Protokolle, Wiederholungsversuche und optionale Cloud-zu-Cloud-Auslagerung bedeuten weniger lange Nächte und schnellere Übergaben.

<CloudSupportGrid />
