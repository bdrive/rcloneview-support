---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "Cloud-Backups mit Rclone Crypt verschlüsseln — Zero-Knowledge-Verschlüsselung für Google Drive, S3 und mehr"
authors:
  - tayson
description: "Verschlüsseln Sie Ihre Cloud-Dateien vor dem Hochladen mit dem Crypt-Remote von rclone. Vollständige Anleitung zur Zero-Knowledge-Verschlüsselung für Google Drive, OneDrive, S3 und jeden Cloud-Anbieter mit RcloneView."
keywords:
  - Cloud-Speicher verschlüsseln
  - rclone crypt remote
  - Zero-Knowledge-Verschlüsselung Cloud
  - Google Drive Dateien verschlüsseln
  - verschlüsseltes Cloud-Backup
  - rclone Verschlüsselungsanleitung
  - OneDrive Dateien verschlüsseln
  - clientseitige Verschlüsselung Cloud
  - S3 Dateien verschlüsseln
  - verschlüsseltes Cloud-Speicher-Tool
tags:
  - RcloneView
  - encryption
  - crypt
  - security
  - feature
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Backups mit Rclone Crypt verschlüsseln — Zero-Knowledge-Verschlüsselung für Google Drive, S3 und mehr

> Wenn Sie Dateien zu Google Drive hochladen, kann Google sie lesen. Wenn Sie Daten auf S3 speichern, kann Amazon darauf zugreifen. Der Crypt-Remote von rclone ändert das — Ihre Dateien werden verschlüsselt, bevor sie Ihr Gerät verlassen.

Cloud-Anbieter verschlüsseln Daten „at rest" auf ihren Servern, besitzen aber die Schlüssel. Das bedeutet, dass der Anbieter (und möglicherweise Regierungsbehörden, Hacker, die in die Systeme des Anbieters eindringen, oder unredliche Mitarbeiter) auf Ihre Dateien zugreifen können. Der Crypt-Remote von rclone bietet echte Zero-Knowledge-Verschlüsselung: Dateien werden auf Ihrem Gerät verschlüsselt, bevor sie hochgeladen werden, und nur Sie besitzen den Schlüssel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist ein Crypt-Remote?

Ein Crypt-Remote ist eine virtuelle Schicht, die auf einem beliebigen bestehenden Cloud-Remote aufsetzt:

```
Ihre Dateien → Crypt-Remote (verschlüsselt) → Cloud-Remote (lädt verschlüsselte Blobs hoch)
```

Beim Lesen von Dateien:

```
Cloud-Remote (verschlüsselte Blobs) → Crypt-Remote (entschlüsselt) → Ihre Dateien
```

Der Cloud-Anbieter speichert nur verschlüsselte Daten. Dateinamen, Verzeichnisnamen und Dateiinhalte sind allesamt verschlüsselt. Der Anbieter kann nicht sehen, was Sie speichern.

## Wie die Crypt-Verschlüsselung funktioniert

### Verschlüsselungsstandards

- **Dateiinhalt**: AES-256 im CTR-Modus mit HMAC-SHA256-Authentifizierung.
- **Dateinamen**: AES-256 EME (encrypt-mix-encrypt) mit optionaler Verschleierung (Obfuscation).
- **Verzeichnisnamen**: Wie Dateinamen (standardmäßig verschlüsselt).

### Was verschlüsselt wird

| Komponente | Standardmodus | Mit Namensverschlüsselung |
|-----------|:---:|:---:|
| Dateiinhalte | ✅ Verschlüsselt | ✅ Verschlüsselt |
| Dateinamen | ❌ Sichtbar | ✅ Verschlüsselt |
| Verzeichnisnamen | ❌ Sichtbar | ✅ Verschlüsselt |
| Dateigrößen | ❌ Sichtbar (leicht aufgefüllt) | ❌ Sichtbar (leicht aufgefüllt) |
| Verzeichnisstruktur | ❌ Sichtbar | ✅ Verschlüsselt |

**Empfehlung**: Aktivieren Sie für maximale Privatsphäre stets die Dateinamensverschlüsselung.

## Crypt in RcloneView einrichten

### Schritt 1: Ein bestehendes Remote vorhalten

Fügen Sie zunächst Ihren Cloud-Speicher als normales Remote hinzu (z. B. Google Drive, S3, Backblaze B2):

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### Schritt 2: Ein Crypt-Remote darüber erstellen

Fügen Sie ein neues Remote vom Typ **Crypt** hinzu. Konfigurieren Sie es so, dass es auf einen Ordner Ihres bestehenden Remotes verweist:

- **Remote**: `gdrive:encrypted-backup/` (ein Ordner auf Ihrem Google Drive).
- **Dateinamensverschlüsselung**: Standard (verschlüsselt).
- **Verzeichnisnamensverschlüsselung**: True.
- **Passwort**: Ein starkes Passwort (dies ist Ihr Verschlüsselungsschlüssel — **verlieren Sie es nicht**).
- **Passwort2 (Salt)**: Ein zusätzliches Passwort für mehr Sicherheit.

### Schritt 3: Das Crypt-Remote verwenden

Wenn Sie nun Dateien über das Crypt-Remote durchsuchen oder übertragen, geschieht die Verschlüsselung transparent. Hochladen über das Crypt-Remote → Dateien kommen verschlüsselt auf Google Drive an. Herunterladen über das Crypt-Remote → Dateien werden automatisch entschlüsselt.

## Workflow für verschlüsselte Backups

### Einen Job für verschlüsselte Backups einrichten

Erstellen Sie einen Copy-Job von Ihrem lokalen Speicher (oder einer anderen Cloud) zum Crypt-Remote:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### Tägliche verschlüsselte Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### Was der Cloud-Anbieter sieht

Durchsucht jemand Ihr Google Drive, sieht er Folgendes:

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

Dateinamen sind unlesbar. Inhalte sind verschlüsselt. Sogar die Ordnerstruktur ist verborgen.

### Was Sie sehen (über das Crypt-Remote)

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

Normale, lesbare Dateien — laufend entschlüsselt.

## Praktische Anwendungsfälle

### 1) Verschlüsseltes Google-Drive-Backup

Ihr persönliches Google Drive für den täglichen Gebrauch. Ein verschlüsseltes Backup sensibler Dateien auf demselben Google Drive:

```
gdrive:Documents/     ← Normale Dateien (Google kann sie sehen)
gdrive-crypt:Sensitive/ ← Verschlüsselt (Google sieht nur Blobs)
```

### 2) Verschlüsseltes S3-Archiv

Archivieren Sie sensible Daten auf S3 mit clientseitiger Verschlüsselung. Selbst wenn Ihr AWS-Konto kompromittiert wird, sind die Daten ohne Ihr Passwort unlesbar.

### 3) HIPAA-/Compliance-Speicher

Gesundheits-, Rechts- und Finanzdaten, die eine Verschlüsselung im Ruhezustand erfordern. Crypt-Remotes bieten überprüfbare clientseitige Verschlüsselung.

### 4) Grenzüberschreitender Datenschutz

Speicherung von Daten in Cloud-Regionen, in denen Sie den Datenzugriffsrichtlinien des Anbieters nicht vollständig vertrauen.

## Verschlüsselte Backups überprüfen

Nutzen Sie den Ordnervergleich über das Crypt-Remote, um zu prüfen, ob Ihr verschlüsseltes Backup mit der Quelle übereinstimmt:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## Wichtige Warnhinweise

### Verlieren Sie Ihr Passwort nicht

Es gibt keine „Passwort vergessen"-Wiederherstellung. Wenn Sie Ihr Crypt-Passwort verlieren, sind Ihre verschlüsselten Daten dauerhaft unzugänglich. Niemand — weder rclone noch Google noch Amazon — kann es wiederherstellen.

**Bewahren Sie Ihr Passwort sicher auf:**

- Notieren Sie es und bewahren Sie es in einem physischen Safe auf.
- Verwenden Sie einen Passwort-Manager (getrennt von der Cloud, die Sie verschlüsseln).
- Bewahren Sie mindestens zwei Kopien an unterschiedlichen Orten auf.

### Bearbeiten Sie verschlüsselte Dateien nicht direkt

Bearbeiten Sie die verschlüsselten Blobs niemals direkt beim Cloud-Anbieter. Greifen Sie stets über das Crypt-Remote darauf zu. Eine direkte Bearbeitung beschädigt die Dateien.

### Auswirkungen auf die Leistung

Die Verschlüsselung verursacht etwas CPU-Overhead:

- Vernachlässigbar auf modernen Desktops und Laptops.
- Spürbar auf Raspberry Pi oder leistungsschwachen Geräten.
- Beeinträchtigt nicht die Netzwerkgeschwindigkeit (die Verschlüsselung erfolgt vor dem Hochladen).

## Mehrere Crypt-Remotes

Sie können unterschiedliche Crypt-Remotes für unterschiedliche Zwecke erstellen:

| Crypt-Remote | Zeigt auf | Passwort | Anwendungsfall |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | Passwort A | Persönliche sensible Dateien |
| crypt-work | s3:work-encrypted/ | Passwort B | Arbeitsdokumente |
| crypt-archive | b2:archive-encrypted/ | Passwort C | Langzeitarchiv |

Jedes verwendet ein anderes Passwort und einen anderen zugrunde liegenden Speicher.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Ihren Cloud-Speicher** als reguläres Remote hinzu.
3. **Erstellen Sie ein Crypt-Remote**, das auf einen Ordner dieser Cloud verweist.
4. **Legen Sie ein starkes Passwort fest** und bewahren Sie es sicher auf.
5. **Verwenden Sie das Crypt-Remote** für alle sensiblen Dateivorgänge.
6. **Planen Sie verschlüsselte Backups** zur Automatisierung.

Ihre Daten. Ihre Schlüssel. Ihre Kontrolle.

---

**Weiterführende Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [HIPAA-konformer Cloud-Speicher](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />
