---
slug: migrate-koofr-to-dropbox-rcloneview
title: "Koofr zu Dropbox migrieren — Dateien mit RcloneView übertragen"
authors:
  - robin
description: "Koofr mit RcloneView zu Dropbox migrieren: beide Remotes verbinden, per Dry Run in der Vorschau prüfen, Cloud-zu-Cloud kopieren und das Ergebnis mit Folder Compare verifizieren."
keywords:
  - Koofr zu Dropbox migrieren
  - Koofr zu Dropbox Übertragung
  - RcloneView Koofr
  - RcloneView Dropbox
  - Cloud-zu-Cloud-Migration
  - Koofr Backup
  - Dropbox Synchronisation
  - rclone GUI
  - Dateien zwischen Clouds verschieben
  - Cloud-Migrationstool
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr zu Dropbox migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine Koofr-Bibliothek per Cloud-zu-Cloud-Übertragung nach Dropbox – mit Vorschau vor dem Kopieren und einem Vergleich danach.

Der Wechsel von Koofr zu Dropbox hat meist mit einem gemeinsamen Teamordner, einem Kunden-Workflow oder einer App zu tun, die nur mit Dropbox zusammenarbeitet. Alles auf einen Laptop herunterzuladen und erneut hochzuladen ist langsam und fehleranfällig. RcloneView, eine auf rclone aufbauende GUI, verbindet beide Dienste als Remotes und überträgt zwischen ihnen in einem Job – den Fortschritt sehen Sie dabei die ganze Zeit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr und Dropbox als Remotes verbinden

Öffnen Sie den Tab Remote und klicken Sie auf **New Remote**. Dropbox verwendet browserbasiertes OAuth: RcloneView öffnet eine Anmeldeseite, Sie genehmigen den Zugriff, und das Remote wird ohne API-Schlüssel verbunden. Handelt es sich beim Ziel um ein Dropbox-for-Business-Konto, aktivieren Sie beim Erstellen des Remotes die Einstellung `dropbox_business`. Fügen Sie Koofr auf dieselbe Weise aus der Anbieterliste hinzu und melden Sie sich mit dem Konto an, das Sie verlassen.

RcloneView verwaltet 90+ Cloud-Speicherdienste in einem Fenster unter Windows, macOS und Linux, sodass beide Remotes nebeneinander im selben Explorer liegen.

<img src="/support/images/en/blog/new-remote.png" alt="Koofr- und Dropbox-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Ordnerstruktur vor dem Kopieren planen

Öffnen Sie Koofr im linken Explorer-Bereich und Dropbox im rechten. Entscheiden Sie, ob Sie alles oder nur bestimmte Ordner verschieben. Ein Fotostudio mit mehreren Jahren an Kundenordnern kopiert vielleicht ein Jahr nach dem anderen, ein kleines Team verschiebt den gesamten Baum womöglich in einem Durchgang. Die Option **Get Size** im Kontextmenü zeigt, wie viele Daten ein Ordner enthält, und hilft bei der Schätzung der Jobdauer.

Mit dem Filterschritt im Job-Assistenten überspringen Sie Ballast wie `.git/`-Ordner oder Dateien über einer maximalen Größe.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Koofr- und Dropbox-Ordner in RcloneView vergleichen" class="img-large img-center" />

## Dry Run durchführen, dann übertragen

Erstellen Sie auf dem Tab Home einen Job: Koofr als Quelle, Dropbox als Ziel, und wählen Sie Copy, damit die Originale unangetastet bleiben, bis Sie sicher sind. Führen Sie zuerst einen **Dry Run** aus. Er listet auf, welche Dateien kopiert würden, sodass Sie einen falschen Zielordner bemerken, bevor Daten bewegt werden. Starten Sie dann den Job; eine Cloud-zu-Cloud-Übertragung wird zwischen den Diensten gestreamt, und der Tab Transferring zeigt Geschwindigkeit, Dateianzahl und Fortschritt.

Dropbox kann Anfragen verlangsamen, wenn viele Aufrufe gleichzeitig eingehen. Erscheinen Meldungen zur Ratenbegrenzung, verringern Sie in den Advanced Settings die Anzahl der Dateiübertragungen und lassen Sie den Job es erneut versuchen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Koofr zu Dropbox" class="img-large img-center" />

## Prüfen und Job-Verlauf aufbewahren

Öffnen Sie nach dem Kopieren **Compare** für beide Ordner. Left-only-Dateien zeigen, was nicht angekommen ist; Größenunterschiede werden separat markiert. Schließen Sie Lücken, indem Sie aus der Vergleichsansicht kopieren, und prüfen Sie dann in **Job History** Status, Dauer und Dateianzahl jedes Durchlaufs.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf der Migration von Koofr zu Dropbox" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Koofr und Dropbox über **Remote > New Remote** hinzu.
3. Erstellen Sie einen Copy-Job von Koofr zu Dropbox und führen Sie einen Dry Run aus.
4. Starten Sie den Job und verifizieren Sie mit Folder Compare, bevor Sie die Koofr-Kopie auflösen.

Eine Migration, die Sie in der Vorschau prüfen und verifizieren können, bringen Sie mit Zuversicht zu Ende.

---

**Verwandte Anleitungen:**

- [Koofr-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Dropbox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — Cloud-Synchronisation in RcloneView in der Vorschau prüfen](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
