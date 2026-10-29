---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "Dropbox zu pCloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - robin
description: "Verschieben Sie Dateien mit RcloneView von Dropbox zu pCloud: beide Remotes verbinden, einen Dry Run ausführen, Cloud-zu-Cloud kopieren und mit Folder Compare überprüfen."
keywords:
  - Dropbox zu pCloud migrieren
  - Dropbox zu pCloud Übertragung
  - Dropbox-Dateien zu pCloud verschieben
  - Dropbox pCloud Migration
  - Cloud-zu-Cloud-Übertragung
  - rcloneview dropbox
  - rcloneview pcloud
  - von Dropbox zu pCloud wechseln
  - Dropbox-Daten übertragen
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox zu pCloud migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie ein Dropbox-Konto in einem kontrollierten, überprüfbaren Durchgang zu pCloud, statt von Hand herunter- und wieder hochzuladen.

Ein Anbieterwechsel bedeutet meist, Gigabytes auf einen Laptop herunterzuladen und wieder hochzuschieben. RcloneView vermeidet das: Es verbindet Dropbox und pCloud nebeneinander und führt die Übertragung per rclone direkt von Cloud zu Cloud aus. RcloneView bindet 90+ Anbieter in einem Fenster ein und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und pCloud verbinden

Beide Dienste verwenden in RcloneView einen browserbasierten OAuth-Login, sodass keine API-Schlüssel eingefügt werden müssen. Öffnen Sie den Tab Remote, klicken Sie auf **New Remote**, wählen Sie Dropbox und bestätigen Sie den Zugriff im sich öffnenden Browserfenster. Wiederholen Sie dies für pCloud. Wenn Sie ein Team-Konto migrieren, benötigt Dropbox for Business die Einstellung `dropbox_business = true`.

<img src="/support/images/en/blog/new-remote.png" alt="Neues Dropbox- und pCloud-Remote in RcloneView hinzufügen" class="img-large img-center" />

Sobald beide Remotes existieren, öffnen Sie sie in zwei Explorer-Panels. Wenn Sie den Dropbox-Ordnerbaum neben dem pCloud-Ziel sehen, können Sie leichter entscheiden, ob Sie alles oder nur ausgewählte Ordner verschieben.

## Das Kopieren planen, bevor Sie es ausführen

Verwenden Sie für eine erste Migration einen **Copy**-Job, da er an der Quelle nie etwas löscht. Wählen Sie im 4-Schritte-Job-Assistenten Dropbox als Quelle und einen dedizierten pCloud-Ordner als Ziel. Unter Advanced Settings können Sie die Anzahl paralleler Dateiübertragungen für große Foto- oder Dokumentbibliotheken erhöhen und den Prüfsummenvergleich aktivieren, wenn Sie eine Verifizierung per Hash und Größe wünschen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Dropbox zu pCloud in RcloneView" class="img-large img-center" />

Auch Filter helfen. Legen Sie eine maximale Dateigröße fest oder schließen Sie Muster wie `.git/` aus, damit temporäre Dateien und Build-Ordner nicht mit dem Rest übertragen werden. Führen Sie zuerst einen **Dry Run** aus: Er listet die Dateien auf, die kopiert würden, ohne eines der beiden Konten anzutasten.

## Ausführen, überwachen und überprüfen

Starten Sie den Job und beobachten Sie im Tab Transferring Fortschritt, Geschwindigkeit und Dateianzahl. Dropbox wendet API-Ratenbegrenzungen an, sodass eine große Übertragung zeitweise langsamer werden kann; RcloneView wiederholt die Synchronisation (Standard: 3 Versuche), statt sie abzubrechen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer laufenden Übertragung in RcloneView" class="img-large img-center" />

Wenn der Job abgeschlossen ist, öffnen Sie **Compare** für die Dropbox- und pCloud-Ordner. Dateien, die nur links vorhanden sind, sind alles, was nicht angekommen ist; „different“-Dateien unterscheiden sich in der Größe. Kopieren Sie die Nachzügler mit einem Klick hinüber und prüfen Sie dann im Job History Status, Gesamtgröße und Dateianzahl jedes Laufs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zeigt Unterschiede zwischen Dropbox und pCloud" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Dropbox und pCloud mit **New Remote** als Remotes hinzu.
3. Erstellen Sie einen Copy-Job mit Dropbox als Quelle und führen Sie dann einen Dry Run aus.
4. Führen Sie den Job aus und überprüfen Sie ihn mit Folder Compare, bevor Sie das alte Konto stilllegen.

Lassen Sie Dropbox unangetastet, bis Compare keine nur links vorhandenen Dateien mehr zeigt, dann bleibt das Original als Rückfallebene erhalten.

---

**Verwandte Anleitungen:**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
