---
slug: move-from-cloudflare-r2-to-aws-s3-with-rcloneview
title: Mühelose Synchronisation von Cloudflare R2 zu AWS S3 mit RcloneView
authors:
  - jay
description: Erfahren Sie, wie Sie Dateien nahtlos von Cloudflare R2 zu AWS S3 synchronisieren oder migrieren – mit der intuitiven Benutzeroberfläche von RcloneView, ganz ohne Terminal.
keywords:
  - rcloneview
  - cloudflare r2 to aws s3
  - object storage sync
  - cloud migration GUI
  - rclone GUI
  - multi-cloud workflow
  - file transfer cloudflare R2
tags:
  - cloudflare
  - aws-s3
  - RcloneView
  - cloud-sync
  - cloud-migration
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mühelose Synchronisation von Cloudflare R2 zu AWS S3 mit RcloneView

> Erfahren Sie, wie Sie Ihre Cloudflare-R2-Daten benutzerfreundlich mit AWS S3 sichern oder replizieren können – ohne die Kommandozeile zu berühren.


## Warum R2 und S3 synchronisieren?

Während **Cloudflare R2** durch seine **Null-Egress-Gebühren** heraussticht und damit eine kostengünstige Speicherlösung darstellt, dominiert **AWS S3** weiterhin mit einem ausgereiften Ökosystem – inklusive Lifecycle-Regeln, Verschlüsselung und regionaler Verfügbarkeit. Die Synchronisation von Daten von R2 zu S3 bietet das Beste aus beiden Welten – Kosteneinsparung mit strategischer Resilienz.

<!-- truncate -->
### Cloudflare R2 im Überblick
- Keine ausgehenden Datengebühren – ideal bei hoher Nutzung  
- Einfache Pay-as-you-go-Preisgestaltung mit S3-kompatibler API 

### Warum Daten in AWS S3 behalten?
- Erweiterte Funktionen: Versionierung, IAM-Kontrollen, Speicherklassen  
- Breite Integration mit AWS-Tools und -Diensten

**Die Synchronisation von R2 zu S3 hilft dabei:**
- Daten mit zuverlässiger AWS-Infrastruktur zu schützen  
- Kompatibilität für Workflows zu wahren, die an AWS-Dienste gebunden sind  
- Die Erschwinglichkeit von R2 mit der Funktionalität von S3 zu kombinieren


<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Schritt für Schritt: RcloneView-Workflow für R2 → S3

### Schritt 1 – Zugang vorbereiten

Stellen Sie sicher, dass Sie Folgendes haben:
- Cloudflare-R2-Zugangsdaten (Access Key, Secret Key)  
- AWS-S3-Zugangsschlüssel/-Secret und Regioninformationen  
- Entscheiden Sie sich für ein einmaliges Backup oder eine wiederkehrende Synchronisation

🔍 Hilfreiche Anleitungen:
- [So rufen Sie AWS-S3-Zugangsdaten ab](/howto/cloud-storage-setting/aws-account-info)
- [So erhalten Sie Cloudflare-R2-API-Zugangsdaten und -Endpunkt](/howto/cloud-storage-setting/cloudflare-r2-credential)
### Schritt 2 – Remotes in RcloneView hinzufügen

1. Öffnen Sie **RcloneView**, klicken Sie auf **`+ New Remote`**
2. Für R2:
   - Wählen Sie als Anbieter **S3-compatible**, dann **Cloudflare**  
   - Geben Sie Ihre R2-Schlüssel und den Endpunkt ein (z. B. `https://<account>.r2.cloudflarestorage.com`)  
3. Für AWS S3:
   - Wählen Sie **Amazon S3**, fügen Sie die Zugangsdaten hinzu und benennen Sie den Remote eindeutig (z. B. `MyS3`)  
4. Bestätigen Sie, dass beide nebeneinander in der Explorer-Ansicht erscheinen

👉 Mehr dazu: [So fügen Sie einen S3-Remote hinzu](/howto/remote-storage-connection-settings/s3)
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

### Schritt 3 – Synchronisation durchführen

**Methode A – Drag & Drop**  
Schnell und visuell – ziehen Sie Dateien aus dem R2-Bereich in Ihren S3-Bereich.

👉 Mehr dazu: [Dateien per Drag & Drop kopieren](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

**Methode B – Vergleichen & Kopieren**
Nutzen Sie die **Vergleichen**-Funktion, um neue oder geänderte Dateien hervorzuheben und auszuwählen, was synchronisiert werden soll.

👉 Mehr dazu: [Dateien vergleichen und verwalten](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />

**Methode C – Synchronisations- und geplante Aufträge**  
Wiederkehrende Aufgaben einrichten:
1. Wählen Sie den R2-Ordner als Quelle und S3 als Ziel  
2. Klicken Sie auf **Sync**, prüfen Sie die Vorschau (Dry-Run) und speichern Sie als Auftrag  
3. Optional: Planen Sie den Ablauf und lassen Sie RcloneView ihn automatisch ausführen

👉 Mehr dazu:
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Aufträge erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Auftragsplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />

## Abschließende Gedanken & Tipps

### Kurze Zusammenfassung
- **R2**: Erschwinglich mit Null-Egress; **S3**: Funktionsreich und stark integriert  
- **RcloneView**: Einfache grafische Oberfläche, die beide verbindet – ganz ohne CLI-Kenntnisse

### Weitere clevere Tipps
- Nutzen Sie R2 für öffentlich zugängliche Assets; synchronisieren Sie mit S3 für langfristige Archivierung oder Nachvollziehbarkeit  
- Wenden Sie Lifecycle-Regeln auf S3 an, um Speicherklassen zu staffeln – so sparen Sie auch bei Sync-Workflows Kosten  
- Überwachen Sie Auftragsergebnisse über Protokolle und schnelles visuelles Feedback in RcloneView


## Häufig gestellte Fragen

| Frage                                                | Antwort                                                          |
|-------------------------------------------------------|------------------------------------------------------------------|
| Benötige ich technisches Wissen dafür?                | Überhaupt nicht – RcloneView bietet eine übersichtliche, visuelle Oberfläche. |
| Fallen bei der Synchronisation Egress-Gebühren an?     | Übertragungen von R2 verursachen keine Egress-Kosten. AWS kann je nach Tarif Gebühren für eingehende Speichervorgänge berechnen. |
| Lohnt sich die Planung wiederkehrender Synchronisationen? | Absolut – so bleibt Ihr AWS-Backup ohne manuellen Aufwand aktuell. |


**Bereit, Ihre Cloudflare-R2- und AWS-S3-Umgebungen mühelos zu verbinden?**  

<CloudSupportGrid />
