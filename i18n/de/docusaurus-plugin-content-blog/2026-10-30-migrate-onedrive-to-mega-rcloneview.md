---
slug: migrate-onedrive-to-mega-rcloneview
title: "OneDrive zu Mega migrieren — Dateien mit RcloneView übertragen"
authors:
  - jay
description: "Verschieben Sie Dateien von Microsoft OneDrive zu Mega mit RcloneView: beide Remotes verbinden, einen Dry Run ausführen, Cloud-zu-Cloud kopieren und das Ergebnis mit Folder Compare überprüfen."
keywords:
  - OneDrive zu Mega migrieren
  - OneDrive zu Mega Übertragung
  - OneDrive-Dateien nach Mega verschieben
  - OneDrive Mega Migrationstool
  - Cloud-zu-Cloud-Übertragung
  - RcloneView OneDrive
  - RcloneView Mega
  - Mega GUI-Client
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive zu Mega migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine OneDrive-Bibliothek mit einem visuellen, wiederholbaren Cloud-zu-Cloud-Job nach Mega, statt von Hand herunter- und wieder hochzuladen.

Jahrelang angesammelte Dokumente von Microsoft OneDrive nach Mega zu verschieben bedeutet meist einen langsamen Umweg über die eigene Festplatte. RcloneView verbindet beide Dienste als Remotes und kopiert direkt zwischen ihnen, mit einer Vorschau, bevor etwas geschrieben wird, und einem Vergleich danach, der belegt, dass nichts fehlt. RcloneView bindet 90+ Anbieter ein UND synchronisiert sie in einem Fenster, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive und Mega als Remotes verbinden

OneDrive verwendet browserbasiertes OAuth: Wählen Sie beim Hinzufügen eines Remotes Microsoft OneDrive, melden Sie sich an, und RcloneView speichert das Token. Bei Mega ist es anders: Es verlangt Ihre E-Mail-Adresse und Ihr Passwort direkt, halten Sie diese also vor dem Start bereit.

Benennen Sie die Remotes eindeutig, zum Beispiel `onedrive-main` und `mega-archive`. Eindeutige Namen helfen später, wenn Sie den Job-Verlauf lesen oder einen vollständigen Pfad wie `onedrive-main:Projects` in das rclone-Terminal kopieren.

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive- und Mega-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Das Kopieren vor der Ausführung planen

Öffnen Sie beide Remotes in nebeneinanderliegenden Explorer-Panels und navigieren Sie zu den Ordnern, die Sie verschieben möchten. Verwenden Sie Get Size auf der Quelle, um das zu übertragende Datenvolumen abzuschätzen, und prüfen Sie, ob Ihr Mega-Konto genug Platz hat.

Wählen Sie für eine erste Migration **Copy** statt Sync. Ein Kopiervorgang löscht am Ziel nichts, sodass eine falsche Ordnerwahl keine Daten entfernen kann. Mit dem Filterschritt können Sie nicht benötigte Dateitypen überspringen oder nach maximaler Dateigröße bzw. Alter begrenzen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung zwischen zwei Remotes in RcloneView" class="img-large img-center" />

## Dry Run, dann die eigentliche Übertragung

Ein Dry Run listet auf, was kopiert würde, ohne ein einziges Byte zu schreiben. Prüfen Sie die Liste und führen Sie dann den Job aus. Der Tab Transferring zeigt Fortschritt, Geschwindigkeit und Dateianzahl, und Sie können einen laufenden Job jederzeit abbrechen.

Bei großen Bibliotheken verringern Sie die Anzahl paralleler Dateiübertragungen, falls Mega Sie drosselt, und behalten Sie die Standardanzahl an Wiederholungen bei, damit kurze Netzwerkunterbrechungen den Job nicht abbrechen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Einen Kopier-Job in RcloneView ausführen" class="img-large img-center" />

## Mit Folder Compare überprüfen

Wenn der Job abgeschlossen ist, öffnen Sie Compare mit OneDrive links und Mega rechts. Mit Filtern lassen sich Dateien anzeigen, die nur links vorhanden sind, sodass fehlgeschlagene Übertragungen sofort auffallen. Aus derselben Ansicht können Sie die Nachzügler herüberkopieren. Der Job-Verlauf (Job History) hält Status, Größe, Geschwindigkeit und Dateianzahl des Laufs fest.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Ergebnisse von Folder Compare zwischen OneDrive und Mega" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie OneDrive (OAuth) und Mega (E-Mail und Passwort) als Remotes hinzu.
3. Erstellen Sie einen Copy-Job von OneDrive nach Mega, führen Sie einen Dry Run aus und starten Sie ihn dann.
4. Überprüfen Sie mit Folder Compare, bevor Sie die Quelle ausmustern.

Eine Migration, die Sie vorab ansehen, überwachen und überprüfen können, schließen Sie mit Zuversicht ab.

---

**Weiterführende Anleitungen:**

- [Mega-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [OneDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Google Drive zu Mega migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
