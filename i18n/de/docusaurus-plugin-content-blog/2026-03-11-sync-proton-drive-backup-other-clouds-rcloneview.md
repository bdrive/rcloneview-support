---
slug: sync-proton-drive-backup-other-clouds-rcloneview
title: "Proton Drive mit Google Drive, S3 und anderen Clouds synchronisieren mit RcloneView"
authors:
  - tayson
description: "Proton Drive bietet Ende-zu-Ende-verschlüsselten Cloud-Speicher. Erfahren Sie, wie Sie Proton Drive mit Google Drive, S3 und anderen Anbietern synchronisieren und sichern – mit RcloneView."
keywords:
  - proton drive sync
  - proton drive backup
  - proton drive rclone
  - proton drive google drive
  - proton drive s3
  - proton drive transfer files
  - proton drive migration
  - proton drive multi cloud
  - proton drive alternative backup
  - encrypted cloud sync proton
tags:
  - proton-drive
  - privacy
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive mit Google Drive, S3 und anderen Clouds synchronisieren mit RcloneView

> Proton Drive ist der auf Privatsphäre ausgerichtete Cloud-Speicher der Macher von ProtonMail. Aber was, wenn Sie ihn mit anderen Clouds für Backup oder Zusammenarbeit synchronisieren müssen? RcloneView verbindet Proton Drive mit über 70 Anbietern.

Proton Drive bietet als Teil des Proton-Ökosystems Ende-zu-Ende-verschlüsselten Speicher. Es ist ideal für Nutzer, denen Privatsphäre wichtig ist, doch das Ökosystem ist in sich geschlossen – es gibt keine native Möglichkeit, Proton Drive mit Google Drive, S3 oder anderen Diensten zu synchronisieren. RcloneView schafft diese Brücke mit der Proton-Drive-Unterstützung von rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Proton Drive mit anderen Clouds synchronisieren?

- **Backup-Redundanz** — Ende-zu-Ende-Verschlüsselung ist großartig, aber ein einzelner Anbieter bleibt ein Single Point of Failure.
- **Migration** — Wechsel von Google Drive zu Proton Drive (oder umgekehrt).
- **Zusammenarbeit** — Dateien mit Personen teilen, die Proton nicht nutzen.
- **Hybride Privatsphäre** — Sensible Dateien auf Proton Drive, geteilte Dateien auf Google Drive.
- **Archivierung** — Alte Proton-Drive-Dateien auf günstigeren Speicher verschieben (B2, S3 Glacier).

## Proton Drive in RcloneView einrichten

### Proton Drive als Remote hinzufügen

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **Proton Drive** als Typ.
3. Geben Sie Ihren Proton-Kontonamen und Ihr Passwort ein.
4. Falls Sie 2FA nutzen, geben Sie bei Aufforderung den Code ein.

<img src="/support/images/en/blog/new-remote.png" alt="Add Proton Drive remote" class="img-large img-center" />

Durchsuchen Sie Ihre Proton-Drive-Dateien im Zwei-Fenster-Explorer — sie werden dabei live entschlüsselt.

## Wichtige Workflows

### 1) Google Drive → Proton Drive (Migration aus Datenschutzgründen)

Wechsel von Google zu Proton für mehr Privatsphäre:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Proton Drive" class="img-large img-center" />

### 2) Proton Drive → S3 (zusätzliches Backup)

Erstellen Sie ein Backup Ihres Proton Drive auf S3 mit zusätzlicher Crypt-Verschlüsselung:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proton Drive backup" class="img-large img-center" />

### 3) Proton Drive → Google Drive (selektives Teilen)

Kopieren Sie bestimmte Ordner nach Google Drive, um sie mit Mitarbeitern zu teilen, die Proton nicht nutzen.

### 4) Proton Drive ↔ NAS (lokale Synchronisation)

Behalten Sie eine lokale Kopie von Proton Drive auf Ihrem NAS für schnellen Zugriff und zusätzliche Redundanz.

## Überlegungen zum Datenschutz

- Proton-Drive-Dateien sind auf Protons Servern im Ruhezustand Ende-zu-Ende-verschlüsselt.
- Wenn Sie über rclone auf Dateien zugreifen, werden diese lokal auf Ihrem Rechner entschlüsselt.
- Bei der Übertragung in eine andere Cloud (Google Drive, S3) ist die Kopie am Ziel NICHT mit Protons Schlüsseln verschlüsselt.
- Für maximale Privatsphäre am Backup-Ziel verwenden Sie einen Crypt-Remote für doppelte Verschlüsselung.

## Übertragungen verifizieren

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proton Drive sync" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Proton Drive hinzufügen** als Remote.
3. **Synchronisieren, sichern oder migrieren** zwischen Proton und jeder anderen Cloud.
4. **Crypt-Remotes verwenden** für verschlüsselte Backups von Proton-Daten bei anderen Anbietern.

Datenschutzorientierter Speicher mit Multi-Cloud-Flexibilität.

---

**Verwandte Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
