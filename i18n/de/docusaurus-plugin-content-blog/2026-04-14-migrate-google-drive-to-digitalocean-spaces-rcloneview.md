---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "Google Drive zu DigitalOcean Spaces migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Dateien von Google Drive zu DigitalOcean Spaces Object Storage verschieben mit RcloneView. Schritt-für-Schritt-Anleitung für eine direkte Cloud-zu-Cloud-Migration ohne CLI-Skripting."
keywords:
  - migrate Google Drive to DigitalOcean Spaces
  - Google Drive to object storage migration
  - DigitalOcean Spaces backup from Google Drive
  - rclone Google Drive DigitalOcean
  - cloud-to-cloud migration Google Drive
  - move Google Drive to S3 compatible
  - RcloneView Google Drive migration
  - DigitalOcean Spaces file transfer
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive zu DigitalOcean Spaces migrieren — Dateien übertragen mit RcloneView

> RcloneView führt Migrationen von Google Drive zu DigitalOcean Spaces als direkte Cloud-zu-Cloud-Übertragung durch — ohne lokale Zwischenspeicherung, mit voller Fortschrittsanzeige und Prüfsummenverifizierung nach Abschluss.

Dateien von Google Drive zu DigitalOcean Spaces zu verschieben ist ein gängiger Workflow für Entwickler, die von verbraucherorientiertem Speicher zu Object Storage auf Infrastrukturniveau wechseln. Ein Startup könnte von der Nutzung von Google Drive zum Dateiaustausch zu Spaces für programmatischen Zugriff, CDN-Integration und niedrigere Kosten pro GB im großen Maßstab wechseln. RcloneView verbindet beide Anbieter gleichzeitig und überträgt Dateien direkt, ohne Gigabytes über Ihren lokalen Rechner zu leiten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes vorbereiten

Fügen Sie Google Drive als OAuth-Remote hinzu: **Remote-Tab → Neues Remote → Google Drive**, authentifizieren Sie sich im Browser. Ihre Drive-Ordner erscheinen sofort im Explorer.

Fügen Sie DigitalOcean Spaces als S3-kompatibles Remote hinzu: **Neues Remote → Amazon S3 Compatible → DigitalOcean Spaces**. Geben Sie Ihren Spaces Access Key, Secret Key und Region-Endpunkt ein (z. B. `nyc3.digitaloceanspaces.com`). Erstellen Sie den Ziel-Bucket im DigitalOcean Control Panel, falls er noch nicht existiert.

Öffnen Sie ein zweigeteiltes Explorer-Layout: Google Drive links, DigitalOcean Spaces rechts. Durchsuchen Sie beide, um die Ordnerstrukturen vor der Migration zu bestätigen.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Die Migration ausführen

Für eine Migration auf Ordnerebene (z. B. Migration von `Google Drive:/Client Projects/` zu `do-spaces:projects-bucket/`) verwenden Sie den Sync-Job-Assistenten im Job Manager. Legen Sie Quelle und Ziel fest und konfigurieren Sie dann in Schritt 2:

- **Gleichzeitige Übertragungen**: 8–12 für maximalen Durchsatz bei einer schnellen Verbindung
- **Prüfsummenverifizierung**: aktiviert — Google Drive verwendet ein eigenes Hash-Schema; rclone übernimmt die Konvertierung
- **Wiederholungsversuche**: 3 — fängt vorübergehende Ratenbegrenzungen der Google-API ab, ohne den gesamten Job fehlschlagen zu lassen

Führen Sie zunächst den Dry Run aus. Google Drive enthält oft Google Docs-, Sheets- und Slides-Dateien, die nicht direkt zu Spaces kopiert werden können (sie existieren nur im Google-Format, nicht als herunterladbare Dateien). Der Dry Run zeigt Ihnen diese Elemente an, und Sie können entscheiden, ob Sie sie zuerst exportieren oder mit einer Filterregel ausschließen möchten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Umgang mit Google-Workspace-Dateien

Native Google-Workspace-Dateien (Docs, Sheets, Slides) haben kein direktes Dateiformat — sie müssen exportiert werden. Rclone kann sie während der Übertragung automatisch als PDF oder Office-Format exportieren. Im Sync-Job von RcloneView werden Google Docs standardmäßig übersprungen, sofern Sie das Exportformat nicht konfigurieren. Verwenden Sie den Terminal-Tab, um `rclone copy --drive-export-formats docx,xlsx,pptx` für einen einmaligen Exportdurchlauf auszuführen, oder fügen Sie benutzerdefinierte Flags unter Einstellungen → Globale Rclone-Flags hinzu.

Reguläre Dateien (PDFs, Bilder, Videos, Code) werden ohne besondere Behandlung übertragen und landen mit unverändertem Originalformat und Dateinamen in Spaces.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Google Drive (OAuth) und DigitalOcean Spaces (S3-Anmeldedaten) als Remotes hinzu.
3. Erstellen Sie einen Sync-Job im Job Manager, führen Sie den Dry Run aus, überprüfen Sie die Behandlung der Google-Workspace-Dateien.
4. Führen Sie die Migration aus und verwenden Sie den Ordnervergleich, um den Abschluss zu überprüfen.

Die Migration von Google Drive zu DigitalOcean Spaces mit RcloneView ist ein strukturierter, überprüfbarer Prozess — mit Jobverlauf und Übertragungsprotokollen, die eine klare Aufzeichnung darüber liefern, was wann verschoben wurde.

---

**Verwandte Anleitungen:**

- [DigitalOcean Spaces Cloud-Synchronisation und Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Google Drive zu AWS S3 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Prüfsummenverifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
