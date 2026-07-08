---
slug: fix-cloudflare-r2-upload-errors-rcloneview
title: "Cloudflare R2-Upload-Fehler beheben — Lösung mit RcloneView"
authors:
  - jay
description: "Diagnostizieren und beheben Sie Cloudflare R2 Upload- und Synchronisationsfehler in RcloneView — inklusive API-Token-Berechtigungen, Endpunkt-Konfiguration, Fehlern bei Multipart-Uploads und Rate-Limit-Problemen."
keywords:
  - Cloudflare R2 upload errors RcloneView
  - fix R2 sync errors
  - Cloudflare R2 API token error
  - R2 multipart upload failure
  - RcloneView Cloudflare R2 troubleshoot
  - fix R2 403 permission error
  - Cloudflare R2 connection issues
  - rclone R2 upload fix
tags:
  - RcloneView
  - cloudflare-r2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2-Upload-Fehler beheben — Lösung mit RcloneView

> Cloudflare R2 hat spezifische Anforderungen an Zugangsdaten und Endpunkte, die bei Fehlkonfiguration zu Fehlern führen. So diagnostizieren und beheben Sie die häufigsten R2-Upload- und Synchronisationsfehler in RcloneView.

Cloudflare R2 ist ein S3-kompatibler Objektspeicherdienst, der Egress-Gebühren eliminiert und sich dadurch besonders für Content-Distribution und Backup-Workloads eignet. Das Authentifizierungsmodell von R2 unterscheidet sich jedoch leicht von Standard-AWS-S3 — es verwendet eine Account-ID zusammen mit API-Tokens anstelle der IAM-artigen Schlüsselpaare, die die meisten S3-Nutzer kennen. Diese Angaben in RcloneView korrekt zu setzen, ist der Schlüssel zur Behebung der meisten R2-Fehler.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fehler: 403 Forbidden oder ungültige Zugangsdaten

Der häufigste R2-Fehler ist eine `403 Forbidden`-Antwort, die meist durch eine falsche API-Token-Konfiguration verursacht wird. Beim Hinzufügen von Cloudflare R2 unter **Remote-Tab → Neuer Remote** benötigen Sie drei Angaben: den **R2-API-Token** (mit Object Read/Write-Berechtigungen für den jeweiligen Bucket), die **Account-ID** (im Cloudflare-Dashboard zu finden) und die R2-Endpunkt-URL im Format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.

Ein häufiger Fehler ist die Verwendung des globalen API-Schlüssels anstelle eines R2-spezifischen API-Tokens. Erstellen Sie einen dedizierten API-Token im R2-Bereich von Cloudflare unter **Manage API Tokens** und stellen Sie sicher, dass er mindestens die Berechtigung "Object Read & Write" für den Ziel-Bucket besitzt. Falls Sie `403`-Fehler beim Auflisten des Buckets erhalten, nicht aber beim Zugriff auf einzelne Dateien, fehlen dem Token möglicherweise Berechtigungen zum Auflisten auf Bucket-Ebene — erstellen Sie ihn mit dem Scope "Account → R2 → Read/Write" neu.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Cloudflare R2 credentials in RcloneView" class="img-large img-center" />

## Fehler: Multipart-Upload fehlgeschlagen oder unvollständige Uploads

R2 unterstützt Multipart-Uploads (erforderlich für Dateien über 100 MB), aber unvollständige Multipart-Uploads können verwaiste Teile in Ihrem Bucket hinterlassen und dazu führen, dass nachfolgende Uploads derselben Datei fehlschlagen. Achten Sie im **Log-Tab** von RcloneView auf Meldungen wie `upload multipart failed` oder `NoSuchUpload`.

Die Lösung besteht darin, zunächst verwaiste Multipart-Uploads aus Ihrem R2-Bucket über das Cloudflare-Dashboard oder das rclone-Terminal in RcloneView zu bereinigen. Wiederholen Sie den Upload anschließend mit einer geringeren Anzahl gleichzeitiger Multipart-Streams in den erweiterten Einstellungen des Jobs. Das Setzen von `--s3-upload-concurrency 4` über die Option **Global Rclone Flags** in den Einstellungen kann große Uploads zu R2 stabilisieren.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Retrying a failed R2 upload job in RcloneView" class="img-large img-center" />

## Endpunkt- und Regionsfehler

Cloudflare R2 verwendet keine Standard-AWS-Regionscodes. Wenn Sie Fehler wie `NoSuchBucket` oder `InvalidLocationConstraint` sehen, überprüfen Sie die Endpunkt-URL in Ihrer Remote-Konfiguration. Das korrekte Format lautet `https://<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com` — die Account-ID muss exakt mit Ihrem Cloudflare-Konto übereinstimmen. Das Region-Feld sollte für R2 leer gelassen oder auf `auto` gesetzt werden.

Falls Sie den Endpunkt von einem anderen S3-Dienst kopiert haben, prüfen Sie genau, ob er mit Ihrem Account-ID-Präfix beginnt und nicht mit einer AWS-Region-URL wie `s3.us-east-1.amazonaws.com`.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring R2 upload after fixing configuration errors" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Überprüfen Sie, ob Ihr R2-API-Token über Object Read/Write-Berechtigungen für den Ziel-Bucket verfügt.
3. Bestätigen Sie, dass die Endpunkt-URL das Format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` verwendet.
4. Reduzieren Sie bei großen Dateien die Multipart-Upload-Parallelität und bereinigen Sie verwaiste Uploads.

Bei korrekter Konfiguration bietet Cloudflare R2 mit RcloneView hervorragende Leistung für Backup und Archivierung zu planbaren Kosten.

---

**Weiterführende Anleitungen:**

- [Cloudflare R2 Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [S3 Access Denied-Berechtigungsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [S3-Multipart-Upload-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
