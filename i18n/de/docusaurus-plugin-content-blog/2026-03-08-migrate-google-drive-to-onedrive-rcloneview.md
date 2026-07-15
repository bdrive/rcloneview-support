---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "Google Drive zu OneDrive migrieren — Der komplette Übertragungsleitfaden mit RcloneView"
authors:
  - tayson
description: "Wechsel von Google Workspace zu Microsoft 365? Erfahren Sie, wie Sie alle Ihre Google-Drive-Dateien mit RcloneView zu OneDrive migrieren, ohne die Ordnerstruktur zu verlieren."
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - RcloneView
  - google-drive
  - onedrive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive zu OneDrive migrieren — Der komplette Übertragungsleitfaden mit RcloneView

> Wechseln Sie von Google Workspace zu Microsoft 365? Das größte Kopfzerbrechen bereiten nicht die neuen Apps — es ist das Verschieben von Terabytes an Dateien von Google Drive zu OneDrive, ohne dabei die Ordnerstruktur, die Freigaben oder den Verstand zu verlieren.

Ganz gleich, ob Ihre Organisation die Produktivitäts-Suite wechselt oder Sie einfach eine Kopie Ihres Google Drive auf OneDrive haben möchten — der Migrationsprozess kann schmerzhaft sein. Google Takeout exportiert eine ZIP-Datei, die die Ordnerstruktur verliert. Manuelles Drag-and-Drop dauert ewig. RcloneView erledigt das ordentlich — eine direkte Cloud-zu-Cloud-Übertragung, die Ihre Ordner erhält.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum nicht Google Takeout verwenden?

Google Takeout ist Googles offizielles Export-Tool, hat aber erhebliche Einschränkungen für eine Migration:

- **Export als ZIP** — Sie erhalten ein komprimiertes Archiv, keine aktive Ordnerstruktur.
- **Verlust der Organisation** — Geteilte Drives und Ordnerhierarchien können abgeflacht werden.
- **Keine inkrementellen Updates** — Ändern sich Dateien während des Exports, müssen Sie von vorne beginnen.
- **Manueller Re-Upload** — Sie müssen trotzdem alles zu OneDrive hochladen.

RcloneView überträgt Dateien direkt von Google Drive zu OneDrive und erhält dabei die ursprüngliche Ordnerstruktur.

## Migration Schritt für Schritt

### 1) Beide Konten verbinden

Fügen Sie sowohl Google Drive als auch OneDrive als Remotes in RcloneView hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) Durchsuchen und planen

Öffnen Sie beide Remotes im Zwei-Fenster-Explorer. Google Drive links, OneDrive rechts:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

Überprüfen Sie Ihre Google-Drive-Struktur vor der Migration. Identifizieren Sie:

- Welche Ordner migriert werden sollen (vielleicht nicht alles).
- Die Gesamtgröße (beeinflusst die Übertragungszeit).
- Google Docs/Sheets/Slides (diese müssen konvertiert werden — siehe unten).

### 3) Google-eigene Dateien behandeln

Google Docs, Sheets und Slides sind keine traditionellen Dateien — sie sind webbasiert. Bei der Übertragung konvertiert rclone sie in Microsoft-Office-Formate:

| Google-Format | Wird konvertiert zu |
|---------------|------------|
| Google Docs | .docx |
| Google Sheets | .xlsx |
| Google Slides | .pptx |
| Google Drawings | .png |

Diese Konvertierung erfolgt automatisch während der Übertragung.

### 4) Übertragung starten

Erstellen Sie einen **Copy**-Job von Google Drive zu OneDrive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

Verwenden Sie **Copy** (nicht Sync) für die Migration. Copy fügt am Ziel nur Dateien hinzu — es löscht niemals etwas.

### 5) Fortschritt überwachen

Verfolgen Sie die Übertragung in Echtzeit:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) Mit Ordnervergleich verifizieren

Vergleichen Sie nach Abschluss der Übertragung beide Seiten, um sicherzustellen, dass nichts fehlt:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Tipps zur Migration

### In Batches migrieren

Migrieren Sie bei großen Drives (500 GB+) Ordner für Ordner statt alles auf einmal:

1. Beginnen Sie mit kritischen Ordnern (Documents, Projects).
2. Verschieben Sie als Nächstes freigegebene Ordner.
3. Archiv und Medien zuletzt.

So können Nutzer sofort mit ihren wichtigsten Dateien auf OneDrive arbeiten.

### Ratenlimits berücksichtigen

Sowohl Google Drive als auch OneDrive haben API-Ratenlimits. RcloneView berücksichtigt diese automatisch, aber bei sehr großen Migrationen:

- Verwenden Sie [Bandbreitenbegrenzung](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview), um Limits nicht zu erreichen.
- Planen Sie Übertragungen außerhalb der Stoßzeiten.
- Lassen Sie fehlgeschlagene Übertragungen automatisch erneut versuchen (Funktion in v1.3).

### Inkrementelle Updates ausführen

Führen Sie nach der ersten Migration denselben Copy-Job erneut aus. Er überträgt nur neue oder geänderte Dateien — bereits kopierte werden übersprungen. So werden Dateien erfasst, die während der Migration zu Google Drive hinzugefügt wurden.

## Nach der Migration: Beide synchron halten

Wenn Sie während einer Übergangsphase beide Clouds aktiv benötigen, richten Sie eine geplante Synchronisation ein:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

So bleibt OneDrive mit allen Änderungen in Google Drive aktuell, bis Sie vollständig umsteigen.

## Häufige Probleme

### „Dateiname zu lang"

OneDrive hat ein Pfadlimit von 400 Zeichen. Google Drive ist hier großzügiger. Falls Sie darauf stoßen, kürzen Sie tief verschachtelte Ordnernamen vor der Migration.

### Dateien in geteilten Drives

Google Shared Drives (Team Drives) sind von Ihrem persönlichen My Drive getrennt. Fügen Sie sie als separaten Remote hinzu oder konfigurieren Sie rclone so, dass Shared Drives einbezogen werden.

### Große Dateien

OneDrive Business unterstützt Dateien bis zu 250 GB. OneDrive Personal unterstützt ebenfalls bis zu 250 GB. Überprüfen Sie Ihre größten Dateien, bevor Sie beginnen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Google Drive und OneDrive hinzufügen** als Remotes.
3. **Einen Copy-Job ausführen** — die Ordnerstruktur bleibt automatisch erhalten.
4. **Mit Ordnervergleich verifizieren** — sicherstellen, dass nichts fehlt.
5. **Inkrementelle Updates planen**, bis der Übergang abgeschlossen ist.

Lassen Sie die Dateimigration nicht zum Engpass bei Ihrem Plattformwechsel werden.

---

**Weiterführende Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Bandbreitenbegrenzung einstellen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
