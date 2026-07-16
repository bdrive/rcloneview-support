---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "Cloudflare R2 zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - jay
description: "Erfahren Sie, wie Sie Dateien von Cloudflare R2 zu Google Drive migrieren – mit RcloneView, ohne Überraschungen bei den Egress-Kosten, einfach mit einem geführten, visuellen Übertragungs-Workflow."
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2 zu Google Drive migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Dateien von einem Cloudflare-R2-Bucket zu Google Drive mit der visuellen Oberfläche von RcloneView — keine CLI erforderlich, keine Egress-Gebühren von R2.

Cloudflare R2 ist bei Entwicklern beliebt für seinen Objektspeicher ohne Egress-Kosten, aber Teams müssen Daten oft nach Google Drive verschieben, um sie mit nicht-technischen Kollegen zu teilen, in Google Workspace zu integrieren oder Speicherkonten zu konsolidieren. RcloneView verbindet beide Dienste über einen Point-and-Click-Workflow, sodass Sie R2-Buckets zu Google Drive migrieren können, ohne einen einzigen Befehl zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cloudflare R2 und Google Drive verbinden

Beginnen Sie damit, beide Dienste als Remotes hinzuzufügen. Klicken Sie im Tab **Remote** auf **New Remote** und wählen Sie Cloudflare R2. Sie benötigen Ihr Cloudflare **API Token**, Ihre **Account ID** und die **Endpoint URL** (im Format `https://<account-id>.r2.cloudflarestorage.com`). RcloneView nutzt das S3-kompatible Backend von rclone für R2, sodass Ihr R2-API-Token direkt den Feldern Access Key und Secret Key zugeordnet wird.

Fügen Sie als Nächstes Google Drive als zweiten Remote hinzu. RcloneView öffnet ein Browserfenster für die OAuth-Authentifizierung — melden Sie sich bei Ihrem Google-Konto an und erteilen Sie den Zugriff. Eine API-Schlüssel-Eingabe ist nicht erforderlich.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes konfiguriert sind, können Sie Ihre R2-Buckets und Google-Drive-Ordner im Dual-Panel-Explorer von RcloneView nebeneinander durchsuchen.

## Die Migration ausführen

Klicken Sie im Home-Tab auf **Sync**, um den 4-Schritte-Job-Assistenten zu starten. Wählen Sie in Schritt 1 Ihren R2-Bucket (oder einen bestimmten Unterordner darin) als Quelle und einen Google-Drive-Ordner als Ziel. Benennen Sie den Job eindeutig — etwas wie `r2-to-gdrive-migration` hilft, wenn Sie später den Verlauf überprüfen.

Aktivieren Sie in Schritt 2 die **Prüfsummenverifizierung**, um die Dateiintegrität nach jeder Übertragung zu bestätigen. Dies ist besonders wichtig bei großen Dateien wie Videos oder Archiven, bei denen eine Beschädigung während der Übertragung sonst unbemerkt bliebe. Setzen Sie die Anzahl der Wiederholungsversuche auf mindestens 3, um vorübergehende Netzwerkunterbrechungen automatisch zu behandeln.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

Führen Sie vor der endgültigen Ausführung einen **Dry Run** aus, um genau zu sehen, welche Dateien kopiert werden. Dies zeigt die vollständige Übertragungsliste und Dateigrößen, sodass Sie den Umfang bestätigen können, bevor etwas an Ihr Google Drive übertragen wird.

## Filtern und der Umgang mit großen Übertragungen

Wenn Ihr R2-Bucket eine Mischung aus Dateitypen enthält, können Sie in Schritt 3 Filter anwenden. Ein Design-Team, das einen Projekt-Bucket migriert, könnte mit dem Filter „Max File Size" rohe `.psd`-Dateien über 500 MB ausschließen und dabei alle webfertigen Exporte behalten. Der Filter **Max File Age** ist ebenso nützlich für inkrementelle Migrationen — dabei werden nur Dateien verschoben, die in den letzten 30 Tagen geändert wurden, anstatt eines gesamten historischen Datensatzes.

Bei umfangreichen Migrationen, die sich über Stunden erstrecken, protokolliert der Tab **Job History** Geschwindigkeit, Dateianzahl und Abschlussstatus jeder Ausführung. Wenn der Job zwischendurch unterbrochen wird, ist ein erneutes Ausführen sicher — RcloneView überspringt bereits erfolgreich übertragene Dateien und setzt dort fort, wo es aufgehört hat.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Cloudflare R2 als Remote hinzu, indem Sie Ihr API Token, Ihre Account ID und die Endpoint URL verwenden.
3. Fügen Sie Google Drive als Remote über OAuth-Browser-Login hinzu.
4. Erstellen Sie einen Copy- oder Sync-Job von Ihrem R2-Bucket zu einem Google-Drive-Ordner — führen Sie zunächst einen Dry Run aus, um den Umfang zu bestätigen.

Das Zero-Egress-Modell von Cloudflare R2 bedeutet, dass das Verschieben Ihrer Daten auf der R2-Seite nichts kostet, und RcloneView übernimmt den Rest visuell.

---

**Verwandte Anleitungen:**

- [Google Drive zu Cloudflare R2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Cloudflare R2 verwalten — Sync und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Google Drive verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
