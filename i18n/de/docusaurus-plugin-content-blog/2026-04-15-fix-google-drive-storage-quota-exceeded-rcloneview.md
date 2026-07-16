---
slug: fix-google-drive-storage-quota-exceeded-rcloneview
title: "Google Drive Speicherkontingent überschritten beheben — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Google Drive Speicherkontingent überschritten beheben — Dateien in eine andere Cloud verschieben, Speicherplatz freigeben und Ihren Drive-Speicher mit RcloneView verwalten."
keywords:
  - Google Drive Speicher voll
  - Kontingent überschritten Lösung
  - Google Drive Bereinigung
  - Dateien aus Google Drive verschieben
  - Google Drive Speicherplatz freigeben
  - RcloneView Speicherverwaltung
  - Cloud-Speicher Überlauf
  - Drive Kontingent Lösung
  - Google Drive Archiv
  - Google Drive Speicherplatz zurückgewinnen
tags:
  - google-drive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive Speicherkontingent überschritten beheben — Dateien mit RcloneView übertragen

> Ein volles Google Drive-Kontingent blockiert Uploads und stört Arbeitsabläufe — RcloneView identifiziert die größten Verbraucher und verschiebt sie in einen kosteneffizienten Archivspeicher, wodurch Ihr Kontingent sofort freigegeben wird.

Wenn Google Drive „Speicher ist voll" anzeigt oder Uploads mit Kontingentfehlern fehlschlagen, stehen Sie vor einer bekannten Wahl: mehr Speicherplatz kaufen oder Inhalte auslagern. RcloneView bietet einen dritten Weg — es identifiziert effizient große oder veraltete Dateien und verschiebt sie von Google Drive in eine günstigere Speicherstufe, wodurch Kontingent freigegeben wird, ohne Daten zu verlieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifizieren, was Ihr Kontingent belegt

Verbinden Sie Ihr Google Drive in RcloneView (**Remote-Tab > Neuer Remote > Google Drive**, OAuth-Anmeldung). Nach der Verbindung klicken Sie mit der rechten Maustaste auf einen beliebigen Ordner im Explorer und wählen **Größe ermitteln**, um zu sehen, wie viel Speicherplatz er belegt. Durchsuchen Sie Ihre Ordner der obersten Ebene systematisch — Videoexporte, unkomprimierte Projektdateien und doppelte Datensätze sind die häufigsten Übeltäter bei vollen Drive-Konten.

<img src="/support/images/en/blog/new-remote.png" alt="Browsing Google Drive in RcloneView to identify storage usage" class="img-large img-center" />

Die Funktion **Ordnervergleich** von RcloneView hilft, doppelte Inhalte zu identifizieren: Vergleichen Sie zwei ähnlich benannte Ordner, um Dateien zu finden, die an beiden Orten existieren (derselbe Inhalt doppelt gesichert), sodass Sie eine Kopie sicher löschen können. Der Filter „identische Dateien" im Vergleichsergebnis findet exakte Übereinstimmungen zwischen zwei Orten.

## Dateien in Archivspeicher verschieben

Sobald Sie die größten zu bereinigenden Ordner identifiziert haben, konfigurieren Sie einen Archiv-Remote in RcloneView — **Amazon S3**, **Backblaze B2** oder **Wasabi** eignen sich gut als kosteneffiziente Kaltspeicherstufen. Erstellen Sie einen **Verschieben**-Job im **Job-Manager**: Quelle ist der Google Drive-Ordner mit großen oder alten Dateien, Ziel ist Ihr Archiv-Bucket.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Moving Google Drive files to Backblaze B2 archive in RcloneView" class="img-large img-center" />

Verschiebevorgänge kopieren die Datei zum Ziel und löschen sie anschließend aus der Quelle — wodurch Ihr Drive-Kontingent sofort freigegeben wird, während die Daten erhalten bleiben. Ein Videoeditor mit 200 GB abgeschlossener Projekte in Drive, die keinen gemeinsamen Zugriff mehr benötigen, gibt sein gesamtes Kontingent in einem einzigen Verschieben-Job zu B2 frei. Der **Übertragung**-Tab von RcloneView zeigt den Fortschritt in Echtzeit.

## Zukünftige Kontingentprobleme vermeiden

Nachdem Sie den unmittelbaren Überlauf behoben haben, richten Sie mit der Planungsfunktion von RcloneView (PLUS-Lizenz) eine wiederkehrende Archivierungsrichtlinie ein. Ein Synchronisationsjob, der mit dem Filter **Max. Dateialter** konfiguriert ist (zum Beispiel Dateien älter als 180 Tage), archiviert automatisch veraltete Inhalte von Drive in den Kaltspeicher nach einem monatlichen Zeitplan — sodass Drive eine aktive Arbeitsebene bleibt statt ein Sammelbecken.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive archiving in RcloneView" class="img-large img-center" />

Der **Job-Verlauf**-Tab verfolgt jeden Archivierungslauf und gibt Ihnen einen klaren Überblick darüber, was aus Drive ausgelagert wurde und wann — nützlich für den Abruf, wenn Sie auf ältere archivierte Dateien zugreifen müssen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Ihr Google Drive in RcloneView und nutzen Sie **Größe ermitteln**, um die größten Ordner zu identifizieren.
3. Fügen Sie Ihren Archivspeicher (S3, B2, Wasabi) als zweiten Remote hinzu.
4. Erstellen Sie im Job-Manager einen **Verschieben**-Job von den umfangreichen Ordnern zu Ihrem Archiv-Remote.

Ein volles Google Drive ist ein Verwaltungsproblem, keine Speichergrenze — RcloneView gibt Ihnen die Werkzeuge, um Inhalte in die richtige Stufe zu leiten und Drive funktionsfähig zu halten.

---

**Weiterführende Anleitungen:**

- [Google Drive Kontingent- und Rate-Limit-API-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Google Drive Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Backblaze B2 Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
