---
slug: migrate-pcloud-to-dropbox-rcloneview
title: "pCloud zu Dropbox migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "pCloud zu Dropbox migrieren mit RcloneView: beide Dienste per OAuth verbinden, per Dry Run prüfen, Cloud-zu-Cloud kopieren und mit Folder Compare verifizieren."
keywords:
  - pCloud zu Dropbox migrieren
  - pCloud-zu-Dropbox-Übertragung
  - pCloud-Dateien zu Dropbox verschieben
  - pCloud-Dropbox-Migrationstool
  - Cloud-zu-Cloud-Übertragung
  - RcloneView
  - rclone GUI
  - pCloud-Synchronisation
  - Dropbox-Synchronisation
  - Ordnervergleich
tags:
  - RcloneView
  - pcloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud zu Dropbox migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine komplette pCloud-Bibliothek nach Dropbox, ohne sie zuvor auf die eigene Festplatte herunterzuladen.

Der Wechsel von pCloud zu Dropbox bedeutet meist, dass ein Team Dropbox für den Austausch standardisiert hat oder ein Kunde es verlangt. Hunderte Gigabyte manuell herunterzuladen und erneut hochzuladen ist langsam und fehleranfällig. RcloneView verbindet beide Dienste über rclone und überträgt Dateien Cloud-zu-Cloud in einem Fenster, mit Dry Run und Verifizierungsschritt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud und Dropbox verbinden

Sowohl pCloud als auch Dropbox nutzen in RcloneView die OAuth-Anmeldung im Browser, sodass keine API-Schlüssel nötig sind. Öffnen Sie den Tab Remote, klicken Sie auf **New Remote**, wählen Sie pCloud und melden Sie sich an, sobald sich der Browser öffnet. Wiederholen Sie dies für Dropbox. Wenn Sie ein Dropbox-Business-Konto verwenden, aktivieren Sie bei der Konfiguration die Einstellung `dropbox_business = true`.

RcloneView unterstützt über 90 Cloud-Speicherdienste unter Windows, macOS und Linux, sodass beide Konten nebeneinander als Explorer-Panels erscheinen.

<img src="/support/images/en/blog/new-remote.png" alt="pCloud- und Dropbox-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Migration per Dry Run in der Vorschau prüfen

Öffnen Sie, bevor Sie etwas verschieben, den Sync-Assistenten und wählen Sie pCloud als Quelle und einen Dropbox-Ordner als Ziel. Verwenden Sie für die erste Migration die Semantik **Copy**, damit an der Quelle nichts verändert wird. Führen Sie einen **Dry Run** aus, um alle zu übertragenden Dateien aufzulisten und zu bestätigen, dass die Ordnerstruktur dort landet, wo Sie es erwarten.

Angenommen, eine Designerin hat 400 GB an Projektordnern in pCloud. Ein Dry Run hilft, übergroße Dateien oder unerwünschte Unterordner zu erkennen, die Sie im Filterschritt des Sync-Assistenten über maximale Dateigröße, Dateialter oder benutzerdefinierte Filterregeln ausschließen können.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von pCloud zu Dropbox" class="img-large img-center" />

## Übertragung starten und Fortschritt überwachen

Starten Sie den Job und verfolgen Sie im Tab Transferring den Fortschritt und die Anzahl der Dateien. Unter Advanced Settings können Sie die Anzahl der Dateiübertragungen anpassen und den Prüfsummenvergleich aktivieren. Schlägt der Lauf zwischendurch fehl, versucht die Wiederholungseinstellung des Jobs (Standard: 3) die Synchronisation erneut, und ein erneuter Lauf kopiert nur, was fehlt.

Da die Daten über rclone zwischen den beiden Diensten übertragen werden, benötigen Sie keinen freien lokalen Speicherplatz für die gesamte Bibliothek.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Laufende Übertragung in RcloneView überwachen" class="img-large img-center" />

## Mit Folder Compare verifizieren

Öffnen Sie nach der Übertragung **Compare** im Tab Home, mit pCloud links und Dropbox rechts. Filtern Sie nach Dateien, die nur links vorhanden sind, und nach abweichenden Dateien, um Fehlendes zu finden, und füllen Sie die Lücken dann mit Copy right. Der Job History entnehmen Sie Status, Größe und Dateianzahl als Nachweis der Migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen pCloud und Dropbox" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie im Tab Remote die Remotes für pCloud und Dropbox per OAuth-Anmeldung hinzu.
3. Erstellen Sie einen Copy-Job von pCloud zu Dropbox und führen Sie zuerst einen Dry Run aus.
4. Führen Sie den Job aus und verifizieren Sie ihn mit Folder Compare, bevor Sie das alte Konto auflösen.

Eine schrittweise, verifizierte Migration lässt Ihre pCloud-Daten unangetastet, bis Dropbox alles enthält, was Sie benötigen.

---

**Weiterführende Anleitungen:**

- [pCloud zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Dropbox mit pCloud synchronisieren](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)
- [Dry Run — Cloud-Synchronisation in der Vorschau](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
