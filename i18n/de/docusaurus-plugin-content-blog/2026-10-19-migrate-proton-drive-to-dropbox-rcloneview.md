---
slug: migrate-proton-drive-to-dropbox-rcloneview
title: "Proton Drive zu Dropbox migrieren — Dateien mit RcloneView übertragen"
authors:
  - kai
description: "Proton Drive mit RcloneView zu Dropbox migrieren: beide Remotes verbinden, per Dry Run vorab prüfen, Cloud-zu-Cloud kopieren und das Ergebnis mit Folder Compare verifizieren."
keywords:
  - Proton Drive zu Dropbox migrieren
  - Proton Drive zu Dropbox Übertragung
  - Dateien von Proton Drive nach Dropbox verschieben
  - RcloneView Proton Drive
  - RcloneView Dropbox
  - Cloud-zu-Cloud-Migration
  - Proton Drive Dropbox Synchronisation
  - Proton Drive Dateien übertragen
tags:
  - RcloneView
  - proton-drive
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive zu Dropbox migrieren — Dateien mit RcloneView übertragen

> Kopieren Sie Ihre Proton-Drive-Dateien Cloud-zu-Cloud nach Dropbox – mit Vorschau vor der Übertragung und Vergleich danach.

Der Wechsel von Proton Drive zu Dropbox hat oft mit Zusammenarbeit zu tun: geteilte Ordner, Teammitglieder und Tools, die bereits in Dropbox laufen. Zuerst alles auf einen Laptop herunterzuladen ist langsam und braucht freien Speicherplatz. RcloneView verbindet beide Konten in einem Fenster und kopiert direkt zwischen ihnen. RcloneView bindet über 90 Anbieter in einem Fenster ein und synchronisiert sie – unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Proton Drive und Dropbox verbinden

Proton Drive verwendet die Eingabe von Zugangsdaten: Fügen Sie einen neuen Remote hinzu, wählen Sie Proton Drive und geben Sie E-Mail-Adresse und Passwort ein, bei aktivierter Zwei-Faktor-Authentifizierung zusätzlich einen 2FA-Code. Die Proton-Drive-Unterstützung erfordert rclone v1.69 oder neuer. RcloneView wird mit einem eingebetteten rclone ausgeliefert; prüfen Sie daher die Version in der Fußzeile, falls der Remote nicht erstellt werden kann.

Dropbox verwendet Browser-OAuth. RcloneView öffnet eine Anmeldeseite, Sie genehmigen den Zugriff, und der Remote verbindet sich automatisch.

<img src="/support/images/en/blog/new-remote.png" alt="Proton-Drive- und Dropbox-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Auswählen, was verschoben wird

Stellen Sie sich einen freiberuflichen Berater vor, dessen Kundenordner in Proton Drive liegen und der Ergebnisse nun über Dropbox teilt. Kopieren Sie pro Job einen Kundenordner, damit jeder Lauf kurz und leicht wiederholbar bleibt.

Verwenden Sie Copy statt Sync, wenn Dropbox bereits Dateien enthält, die Sie behalten möchten, da eine einseitige Synchronisation das Ziel der Quelle angleicht. Mit den Filtern im Assistenten können Sie nach Dateigröße oder Alter eingrenzen oder vordefinierte Gruppen wie Document und Image wählen. Führen Sie zuerst einen Dry Run aus: Er listet auf, was kopiert oder gelöscht würde, ohne etwas zu verändern.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Proton-Drive- und Dropbox-Ordner vor der Migration vergleichen" class="img-large img-center" />

## Übertragen und überwachen

Ziehen Sie einen Ordner aus dem Proton-Drive-Bereich in den Dropbox-Bereich, um schnell zu kopieren. Das Ziehen zwischen verschiedenen Remotes kopiert, statt zu verschieben, sodass die Originale in Proton Drive bleiben. Für wiederholbare Läufe speichern Sie die Übertragung als Job.

Der Reiter Transferring zeigt Geschwindigkeit, Dateianzahl und Fortschritt. Reduzieren Sie bei einem großen Archiv in Advanced Settings die Anzahl gleichzeitiger Übertragungen, damit keiner der Dienste den Lauf unterbricht. Fehlgeschlagene Läufe werden automatisch wiederholt (Standard: 3-mal).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Proton Drive zu Dropbox" class="img-large img-center" />

## Ergebnis verifizieren

Führen Sie nach dem Kopieren Folder Compare auf beiden Wurzelordnern aus. Es zeigt Dateien an, die nur links, nur rechts vorhanden, identisch oder unterschiedlich sind, und Sie können übrig gebliebene Dateien hinüberkopieren. Job History speichert Startzeit, Dauer, Status und Dateianzahl jedes Laufs und liefert so ein klares Protokoll der Migration.

Beachten Sie, dass Dateien, die Proton Drive verlassen, in Dropbox nach dem eigenen Speichermodell von Dropbox abgelegt werden. Prüfen Sie daher die Freigabeeinstellungen am Ziel, bevor Sie Mitarbeitende einladen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf der Migration von Proton Drive zu Dropbox" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie einen Proton-Drive-Remote (E-Mail, Passwort, optional 2FA) und einen Dropbox-Remote (Browser-Anmeldung) hinzu.
3. Führen Sie einen Dry Run für einen Ordner aus und starten Sie dann den Kopier-Job.
4. Verifizieren Sie mit Folder Compare und wiederholen Sie den Vorgang für die übrigen Ordner.

Wer in verifizierten Etappen migriert, kann zu Dropbox wechseln, ohne sich zu fragen, was zurückgeblieben ist.

---

**Verwandte Anleitungen:**

- [Dropbox zu Proton Drive migrieren](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Proton Drive zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Dry Run: Synchronisation vor der Übertragung in der Vorschau prüfen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
