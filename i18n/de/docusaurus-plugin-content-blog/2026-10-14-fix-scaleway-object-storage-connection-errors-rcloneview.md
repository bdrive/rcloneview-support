---
slug: fix-scaleway-object-storage-connection-errors-rcloneview
title: "Verbindungsfehler bei Scaleway Object Storage beheben — Lösung mit RcloneView"
authors:
  - steve
description: "Verbindungsfehler bei Scaleway Object Storage in RcloneView beheben: Abweichungen bei Region, Endpoint und Access Key in S3-kompatiblen Remotes korrigieren."
keywords:
  - scaleway object storage Fehler
  - scaleway Verbindung beheben
  - RcloneView scaleway
  - S3-kompatible Fehlerbehebung
  - scaleway Endpoint Region
  - scaleway Bucket Zugriff verweigert
  - scaleway Access Key
  - rclone scaleway Remote
tags:
  - RcloneView
  - troubleshooting
  - tips
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Verbindungsfehler bei Scaleway Object Storage beheben — Lösung mit RcloneView

> Die meisten Verbindungsfehler bei Scaleway gehen auf eine Abweichung bei Region, Endpoint oder Schlüssel zurück — so finden und beheben Sie sie in RcloneView.

Scaleway Object Storage wird über das S3-kompatible Protokoll angesprochen, daher benötigt ein Remote einen passenden Access Key, Secret Key, eine Region und einen Endpoint. Stimmt eine dieser Angaben nicht mit dem tatsächlichen Speicherort des Buckets überein, treten Fehler wie „Zugriff verweigert“ oder „Bucket nicht gefunden“ auf, die wie Netzwerkprobleme aussehen. RcloneView zeigt die Fehler in seinen Logs an und ermöglicht es, das Remote neu aufzubauen, ohne Ihre Sync-Jobs zu verlieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zuerst Region und Endpoint prüfen

Scaleway-Buckets sind an eine Region gebunden, und der Endpoint muss zur selben Region gehören. Wurde ein Bucket in einer Region angelegt, das Remote aber für eine andere konfiguriert, treten selbst mit gültigen Schlüsseln Fehler auf, die wie Authentifizierungsprobleme wirken. Vergleichen Sie die in der Scaleway-Konsole angezeigte Region Zeichen für Zeichen mit Region und Endpoint in den Remote-Einstellungen.

<img src="/support/images/en/blog/new-remote.png" alt="Scaleway-S3-kompatibles Remote in RcloneView konfigurieren" class="img-large img-center" />

## Zugangsdaten und Berechtigungen prüfen

Bestätigen Sie als Nächstes Access Key und Secret Key. Ein neu erzeugter oder gelöschter Schlüssel ist eine häufige Ursache, wenn ein zuvor funktionierender Job plötzlich fehlschlägt. Prüfen Sie außerdem, ob die Berechtigungen des Schlüssels den Bucket und das Projekt abdecken, auf die Sie zugreifen; ein gültiger Schlüssel ohne Zugriff auf den Bucket liefert weiterhin „Zugriff verweigert“. Öffnen Sie den Remote Manager, bearbeiten Sie das Remote und fügen Sie die neuen Werte ein.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Scaleway-Bucket in RcloneView nach Korrektur der Zugangsdaten durchsuchen" class="img-large img-center" />

## Testen, dann Jobs fortsetzen

Öffnen Sie nach dem Bearbeiten des Remotes das Rclone Terminal und listen Sie den Bucket auf, um die Verbindung zu prüfen. Führen Sie dann einen Dry Run Ihres Sync-Jobs aus, um sicherzustellen, dass die erwarteten Dateien sichtbar sind, bevor echte Übertragungen fortgesetzt werden. Besteht das Problem weiter, aktivieren Sie in den Einstellungen das rclone-Logging auf DEBUG-Ebene, starten Sie das eingebettete rclone neu, reproduzieren Sie den Fehler und lesen Sie das Log.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Scaleway-Jobverlauf in RcloneView prüfen" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen**: Laden Sie es von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie den Remote Manager und bearbeiten Sie Ihr Scaleway-Remote.
3. Passen Sie Region und Endpoint an den Bucket an und geben Sie die Schlüssel erneut ein.
4. Listen Sie den Bucket auf, führen Sie einen Dry Run aus und setzen Sie dann Ihre Jobs fort.

Ein Remote, dessen Region, Endpoint und Schlüssel übereinstimmen, verhält sich in Ihrem Workflow wie jeder andere S3-kompatible Speicher.

---

**Weiterführende Anleitungen:**

- [Scaleway Object Storage verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Verbindungsfehler bei Linode Object Storage beheben — Lösung mit RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)
- [IBM COS zu Scaleway migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-ibm-cos-to-scaleway-rcloneview)

<CloudSupportGrid />
