---
slug: union-remote-combine-free-storage-rcloneview
title: "Union Remote — Mehrere kostenlose Cloud-Konten mit RcloneView zu einem riesigen Speicherpool kombinieren"
authors:
  - tayson
description: "Google Drive bietet 15 GB kostenlos. OneDrive bietet 5 GB. Dropbox bietet 2 GB. Kombinieren Sie sie alle mit dem Union Remote von rclone in RcloneView zu einem virtuellen 22-GB-Speicherpool."
keywords:
  - kostenlosen Cloud-Speicher kombinieren
  - union remote rclone
  - Cloud-Konten zusammenführen
  - Cloud-Speicher kombinieren
  - rclone union drive
  - kostenloser Cloud-Speicherpool
  - Multi-Cloud-Speicherpool
  - Google Drive und OneDrive kombinieren
  - virtueller Cloud-Speicher
  - Cloud-Speicher aggregieren
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Union Remote — Mehrere kostenlose Cloud-Konten mit RcloneView zu einem riesigen Speicherpool kombinieren

> 15 GB von Google. 5 GB von OneDrive. 2 GB von Dropbox. 1 TB von Terabox. Einzeln sind sie klein. Kombiniert zu einem Union Remote sind sie ein kostenloser Multi-Terabyte-Speicherpool.

Die meisten Cloud-Anbieter bieten kostenlose Speicherkontingente, doch einzeln sind sie für ernsthafte Nutzung zu klein. Der Union Remote von rclone fasst mehrere Speicherorte zu einem einzigen virtuellen Dateisystem zusammen. Mit RcloneView richten Sie dies visuell ein und durchsuchen, synchronisieren und verwalten anschließend den kombinierten Pool, als wäre er ein einziges riesiges Laufwerk.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## So funktioniert Union Remote

Ein Union Remote kombiniert mehrere Remotes zu einer virtuellen Ansicht:

- **Lesen**: Dateien aller zugrunde liegenden Remotes erscheinen in einer einzigen Verzeichnisliste
- **Schreiben**: Neue Dateien werden auf dem Remote mit dem meisten freien Speicherplatz gespeichert (oder gemäß Ihrer konfigurierten Richtlinie)
- **Transparent**: Sie interagieren mit einem Remote; rclone übernimmt die Verteilung

## Kostenloser Speicher, den Sie kombinieren können

| Anbieter | Kostenloses Kontingent |
|----------|----------|
| Google Drive | 15 GB |
| OneDrive | 5 GB |
| Dropbox | 2 GB |
| pCloud | 10 GB |
| Terabox | 1 TB |
| MEGA | 20 GB |
| Icedrive | 10 GB |
| Koofr | 10 GB |

Kombiniert: potenziell über 1 TB kostenloser Speicher.

## Einen Union Remote einrichten

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. Fügen Sie jedes kostenlose Cloud-Konto als separaten Remote hinzu
2. Erstellen Sie einen Union Remote, der sie alle kombiniert
3. Durchsuchen Sie die Union als einen einzigen Speicherpool

## Anwendungsfälle

### Kostenlosen Speicher maximieren

Studenten, Freiberufler und budgetbewusste Nutzer können kostenlose Kontingente kombinieren, um erheblichen kostenlosen Speicherplatz zu erhalten.

### Backup über Anbieter verteilen

Verteilen Sie Backup-Daten auf mehrere kostenlose Konten für Redundanz. Wenn ein Anbieter Probleme hat, sind die Daten bei den anderen weiterhin vorhanden.

### Einen gestaffelten Speicherpool erstellen

Kombinieren Sie schnellen Speicher (Google Drive) mit großem Speicher (Terabox) in einem Pool.

## Den kombinierten Pool durchsuchen

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

Der Zwei-Fenster-Explorer zeigt den Union Remote wie jeden anderen Remote an. Dateien aller zugrunde liegenden Anbieter erscheinen gemeinsam.

## Wichtige Hinweise

- **Dateien werden nicht verschoben** zwischen den zugrunde liegenden Remotes — jede Datei verbleibt bei dem Anbieter, bei dem sie geschrieben wurde
- **Löschen** entfernt die Datei von dem Anbieter, bei dem sie gespeichert ist
- **Performance** hängt beim Auflisten vom langsamsten zugrunde liegenden Anbieter ab
- **Schreibrichtlinie** bestimmt, welcher Anbieter neue Dateien erhält

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie kostenlose Cloud-Konten** als einzelne Remotes hinzu.
3. **Erstellen Sie einen Union Remote**, der sie kombiniert.
4. **Durchsuchen und nutzen** Sie ihn als einen einzigen Speicherpool.

Kleine kostenlose Kontingente, kombiniert zu etwas Nützlichem.

---

**Verwandte Anleitungen:**

- [Virtuelle Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Cloud-Wildwuchs verwalten](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [Leitfaden zur Remote-Verwaltung](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
