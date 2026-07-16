---
slug: migrate-google-drive-to-storj-rcloneview
title: "Google Drive zu Storj migrieren — Dateien mit RcloneView übertragen"
authors:
  - jay
description: "Erfahren Sie, wie Sie Google-Drive-Dateien mit RcloneView zu Storj Decentralized Storage migrieren — eine Schritt-für-Schritt-Anleitung für Cloud-zu-Cloud-Übertragungen."
keywords:
  - migrate Google Drive to Storj
  - Google Drive to Storj migration
  - Storj decentralized cloud storage
  - RcloneView cloud migration
  - move files from Google Drive to Storj
  - cloud-to-cloud transfer RcloneView
  - Storj S3-compatible GUI
  - Google Drive migration tool
  - decentralized cloud backup RcloneView
tags:
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive zu Storj migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihr gesamtes Google Drive zu Storjs dezentralem, Ende-zu-Ende-verschlüsseltem Speicher, ohne einen einzigen Befehl zu schreiben.

Teams, die sensible Projektdateien in Google Drive speichern, erreichen oft einen Punkt, an dem sie mehr Datensouveränität, niedrigere Ausgangskosten oder S3-kompatiblen Zugriff für ihre Toolchain benötigen. Storj verteilt Datei-Chunks weltweit auf unabhängige Knoten und bietet damit von Haus aus Ende-zu-Ende-Verschlüsselung und geografische Redundanz. RcloneView macht diese Migration unkompliziert: Verbinden Sie beide Remotes über eine browserbasierte Authentifizierung und starten Sie dann einen Kopierjob, der Dateien über Ihren lokalen Rechner von Google Drive zu Storj überträgt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive und Storj als Remotes verbinden

Bevor etwas übertragen wird, müssen beide Cloud-Konten in RcloneView als Remotes registriert werden. Google Drive verwendet OAuth-Browser-Authentifizierung — öffnen Sie den Reiter Remote, klicken Sie auf **Neuer Remote**, wählen Sie Google Drive, und RcloneView öffnet ein Browserfenster, in dem Sie die Verbindung autorisieren. Keine API-Schlüssel oder Zugangsdaten, die manuell verwaltet werden müssen.

Storj nutzt S3-kompatiblen Zugriff. Wählen Sie im Assistenten für neue Remotes von RcloneView den Anbietertyp **S3** und wählen Sie Storj als S3-Anbieter. Geben Sie Ihre Storj Access Key ID, Ihren Secret Access Key und den Storj-S3-Gateway-Endpunkt ein. Nach dem Speichern erscheint der Remote im Explorer-Panel und bietet Ihnen eine vertraute Dateibrowser-Ansicht Ihrer Storj-Buckets.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes registriert sind, können Sie sie im Zwei-Panel-Explorer von RcloneView nebeneinander öffnen. Ziehen Sie einen Ordner vom linken Panel (Google Drive) auf das rechte Panel (Storj) für eine schnelle einmalige Kopie, oder richten Sie für größere Migrationen einen verwalteten Job ein.

## Den Migrationsjob konfigurieren

Für die Migration eines vollständigen Google Drive — sei es eine Designagentur mit 300 GB an Assets oder ein Forschungsteam mit jahrelangen gemeinsamen Dokumenten — ist die Verwendung eines Jobs der richtige Ansatz. Klicken Sie im Reiter Home auf **Job Manager**, dann auf **Add Job**. Legen Sie als Quelle Ihren Google-Drive-Remote und -Ordner fest und als Ziel Ihren Storj-Bucket. Wählen Sie **Copy** als Jobtyp, um alle Quelldateien zu übertragen, ohne die Originale in Google Drive zu löschen.

Stellen Sie in Schritt 2 (Erweiterte Einstellungen) die Anzahl der gleichzeitigen Dateiübertragungen entsprechend Ihrer Verbindung ein. Die Standardanzahl von 4 gleichzeitigen Übertragungen funktioniert für die meisten Internetverbindungen gut. Aktivieren Sie die **Prüfsummen**-Verifizierung, um die Dateiintegrität sicherzustellen — RcloneView vergleicht nach jeder Übertragung die Prüfsummen und erkennt so jede während der Übertragung entstandene Beschädigung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

In Schritt 3 können Sie Filterregeln hinzufügen, wenn Sie nur bestimmte Dateitypen migrieren möchten — zum Beispiel `.tmp`-Arbeitsdateien ausschließen oder die Übertragung auf Dateien beschränken, die jünger als ein bestimmtes Alter sind. Das ist besonders nützlich, wenn Sie einen aktiven Arbeitsbereich migrieren, bei dem einige temporäre Dateien nicht zum neuen Speicheranbieter übernommen werden sollen.

## Die Übertragung überwachen und verifizieren

Sobald Sie auf **Run** klicken, zeigt der Reiter Transferring am unteren Rand von RcloneView den Live-Fortschritt an: Übertragungsgeschwindigkeit, Dateianzahl und übertragene Gesamtgröße. Bei großen Migrationen setzt RcloneView den Job im Hintergrund fort, selbst wenn Sie zu anderen Remotes wechseln — und falls die Übertragung unterbrochen wird, sorgt die in Schritt 2 eingestellte Wiederholungsanzahl dafür, dass sie dort fortgesetzt wird, wo sie aufgehört hat.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

Nachdem der Job abgeschlossen ist, verwenden Sie die Funktion **Folder Compare** von RcloneView (Home-Reiter > Compare), um zu überprüfen, dass beide Seiten übereinstimmen. Richten Sie das linke Panel auf Ihre Google-Drive-Quelle und das rechte Panel auf Ihr Storj-Ziel. Folder Compare zeigt alle Dateien an, die nur auf einer Seite existieren oder unterschiedliche Größen haben, und liefert Ihnen so einen klaren Prüfpfad, bevor Sie den Google-Drive-Arbeitsbereich abschalten.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Google-Drive-Remote über **Remote-Reiter > New Remote** hinzu und schließen Sie den OAuth-Browser-Login ab.
3. Fügen Sie Ihren Storj-Remote über den S3-Anbietertyp mit Ihrem Storj Access Key, Secret Key und Gateway-Endpunkt hinzu.
4. Öffnen Sie den **Job Manager**, erstellen Sie einen Copy-Job von Ihrem Google-Drive-Ordner zu Ihrem Storj-Bucket, aktivieren Sie Checksum in Schritt 2 und klicken Sie auf Run.

Die Architektur von Storj bietet Ihren Dateien standardmäßig geografische Verteilung und Ende-zu-Ende-Verschlüsselung — RcloneView macht das Erreichen dieses Ziels zu einer Sache von Minuten statt stundenlangem Scripting.

---

**Weiterführende Anleitungen:**

- [Dropbox mit RcloneView zu Storj migrieren](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [OneDrive mit RcloneView zu Storj migrieren](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [Storj-Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
