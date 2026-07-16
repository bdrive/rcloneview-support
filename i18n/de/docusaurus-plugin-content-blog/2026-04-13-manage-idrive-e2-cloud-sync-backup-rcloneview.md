---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "IDrive E2 Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie IDrive E2 mit RcloneView und verwalten Sie Ihre S3-kompatiblen Buckets mit einer GUI. Synchronisieren Sie IDrive E2 einfach mit Google Drive, Amazon S3 und anderen Clouds."
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - idrive-e2
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive E2 Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Fügen Sie IDrive E2 zu RcloneView hinzu und verwalten Sie Ihre S3-kompatiblen Buckets zusammen mit Google Drive, Amazon S3, Backblaze B2 und über 90 weiteren Cloud-Speicher-Diensten.

IDrive E2 ist ein kostengünstiger, S3-kompatibler Objektspeicherdienst, der bei Entwicklern und Unternehmen beliebt ist, die eine erschwingliche Alternative zu Amazon S3 suchen und dabei API-Kompatibilität beibehalten möchten. Die Unterstützung von RcloneView für S3-kompatible Anbieter bedeutet, dass Sie Ihre IDrive E2 Buckets mit der GUI verbinden und Synchronisationen, Backups und Cloud-übergreifende Migrationen durchführen können, ohne Kommandozeilen-Skripte zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## IDrive E2 in RcloneView einrichten

IDrive E2 verwendet standardmäßige S3-kompatible Anmeldedaten: eine Access Key ID, einen Secret Access Key und eine Endpunkt-URL, die an Ihre gewählte Region gebunden ist. Sie können diese Anmeldedaten über Ihr IDrive E2 Konto-Portal generieren. Sobald Sie diese haben, öffnen Sie RcloneView, gehen Sie zum Reiter Remote und klicken Sie auf New Remote. Wählen Sie Amazon S3 als Anbietertyp aus und konfigurieren Sie ihn mit Ihrer IDrive E2 Endpunkt-URL und den Anmeldedaten.

Nach dem Speichern erscheint Ihr IDrive E2 Remote im File Explorer. Durchsuchen Sie Buckets und Objekte direkt, prüfen Sie Dateigrößen und Änderungszeitstempel und nutzen Sie Rechtsklick-Operationen zum Kopieren, Verschieben, Löschen oder Herunterladen von Dateien. Die Breadcrumb-Pfadleiste zeigt Ihren aktuellen Standort innerhalb eines Buckets an, mit Auto-Vervollständigungsvorschlägen, während Sie tiefer in die Ordnerstrukturen navigieren.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## IDrive E2 mit anderen Clouds synchronisieren

Organisationen, die IDrive E2 als primäres Backup-Ziel nutzen, möchten häufig kritische Buckets zu einem sekundären Anbieter replizieren, um geografische Redundanz oder Provider-Failover zu gewährleisten. RcloneView macht dies einfach: Erstellen Sie einen Synchronisationsjob mit Ihrem IDrive E2 Bucket als Quelle und Amazon S3, Cloudflare R2 oder Google Drive als Ziel.

Der 4-stufige Synchronisations-Assistent übernimmt die Konfiguration: Speicherauswahl, erweiterte Übertragungseinstellungen (gleichzeitige Übertragungen, Prüfsummenverifizierung), Filterregeln (große Dateien ausschließen, bestimmte Dateierweiterungen) und optionale Zeitplanung. Aktivieren Sie die Prüfsummenverifizierung, um zu bestätigen, dass jedes Objekt unversehrt übertragen wurde — dies ist besonders wichtig für Binärarchive und Datenbank-Dumps, die in IDrive E2 gespeichert sind.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

Geplante Synchronisation (PLUS-Lizenz) führt Ihre IDrive E2 Replikation automatisch in festgelegten Intervallen aus. Die Job History erfasst für jeden Lauf Startzeit, Dauer, Anzahl übertragener Dateien und den Endstatus — und liefert so einen dauerhaften Audit-Trail, ohne externe Skripte oder Cron-Jobs pflegen zu müssen.

## Aktive Übertragungen überwachen

Beim Ausführen großer IDrive E2 Synchronisationen zeigt der Reiter Transferring am unteren Rand von RcloneView den Live-Fortschritt an: aktuell übertragene Dateien, kumulierte Anzahl und Gesamtstatus der Synchronisation. Sie können einen laufenden Job bei Bedarf direkt aus dieser Ansicht abbrechen, und der Reiter Log erfasst zeitgestempelte Einträge zur Fehlerbehebung bei auftretenden Problemen.

Bei besonders umfangreichen Workloads steuert die Anpassung der Number of File Transfers im Schritt Advanced Settings des Synchronisations-Assistenten, wie viele Objekte gleichzeitig übertragen werden. Die Einstellung für Multi-Thread-Übertragungen (Standard: 4) übernimmt Chunk-Uploads für größere Objekte.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generieren Sie eine IDrive E2 Access Key ID und einen Secret Access Key über Ihr IDrive Konto-Portal.
3. Fügen Sie ein neues S3-kompatibles Remote in RcloneView mit Ihrem IDrive E2 Endpunkt und den Anmeldedaten hinzu.
4. Erstellen Sie einen Synchronisationsjob, um IDrive E2 Buckets regelmäßig auf Ihrem sekundären Speicher zu sichern.

Mit RcloneView sind Ihre IDrive E2 Buckets genauso einfach zu verwalten wie jeder andere Cloud-Speicher — sichtbar in einem Datei-Browser, konfigurierbar mit Synchronisationsjobs und über die Job History nachvollziehbar.

---

**Verwandte Anleitungen:**

- [IDrive E2 mit Amazon S3 und Google Drive synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [Cloudflare R2 Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [S3, Wasabi und Cloudflare R2 Speicher mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
