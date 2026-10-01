---
slug: migrate-pcloud-to-mega-rcloneview
title: "pCloud zu MEGA migrieren — Dateien mit RcloneView übertragen"
authors:
  - robin
description: "pCloud zu MEGA migrieren mit RcloneView: beide Remotes verbinden, einen Dry Run ausführen, von Cloud zu Cloud kopieren und mit Folder Compare prüfen. Schritt-für-Schritt-Anleitung."
keywords:
  - pCloud zu MEGA migrieren
  - pCloud zu MEGA Übertragung
  - Dateien von pCloud zu MEGA verschieben
  - Cloud-zu-Cloud-Migration
  - RcloneView pCloud
  - RcloneView MEGA
  - pCloud MEGA Synchronisation
  - pCloud-Dateien übertragen
  - rclone GUI Migration
tags:
  - RcloneView
  - pcloud
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud zu MEGA migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine komplette pCloud-Bibliothek nach MEGA mit einem vorab geprüften, überprüfbaren Cloud-zu-Cloud-Job statt mit manuellem Herunter- und erneutem Hochladen.

Der Wechsel von pCloud zu MEGA bedeutet meist ein großes Archiv, das niemand erst auf den Laptop herunterladen möchte. RcloneView verbindet beide Dienste als Remotes, sodass Sie Ordner für Ordner aus einem Fenster kopieren und das Ergebnis prüfen können, bevor Sie das alte Konto auflösen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud und MEGA als Remotes verbinden

pCloud verwendet browserbasiertes OAuth: RcloneView öffnet eine Anmeldeseite, Sie genehmigen den Zugriff, und der Remote wird ohne API-Schlüssel erstellt. MEGA verwendet Ihre E-Mail-Adresse und Ihr Passwort. Öffnen Sie **Remote > New Remote**, wählen Sie jeden Anbieter aus und vergeben Sie klare Namen, zum Beispiel `pcloud-old` und `mega-new`.

Sobald beide im Remote Manager erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Bereichen. RcloneView bindet 90+ Anbieter aus einem Fenster ein (mount) und synchronisiert sie unter Windows, macOS und Linux, sodass dasselbe Layout auch für künftige Umzüge funktioniert.

<img src="/support/images/en/blog/new-remote.png" alt="pCloud- und MEGA-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Dateien von Cloud zu Cloud kopieren

Wenn Sie einen Ordner von einem Remote auf einen anderen ziehen, wird er kopiert, da Übertragungen zwischen verschiedenen Remotes Kopien und keine Verschiebungen sind. Für einen kleinen Ordner reicht das aus. Für eine ganze Bibliothek erstellen Sie einen Copy- oder Sync-Job, damit er gespeichert, erneut ausgeführt und in Job History geprüft werden kann.

Lassen Sie die Quelle unverändert, bis Sie das Ergebnis geprüft haben. Ein Copy-Job lässt pCloud unangetastet, sodass sich die Migration gefahrlos wiederholen lässt, falls etwas unterbrochen wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von pCloud zu MEGA in RcloneView" class="img-large img-center" />

## Mit Dry Run prüfen und Übertragungen anpassen

Führen Sie zuerst einen Dry Run aus. Er listet die Dateien auf, die kopiert oder gelöscht würden, ohne etwas zu verändern – so fällt ein falscher Zielordner auf, bevor er Stunden kostet. Im Schritt für erweiterte Einstellungen können Sie die Anzahl gleichzeitiger Dateiübertragungen und der Equality Checker anpassen. Treten Fehler auf, ist es ein vernünftiger erster Schritt, diese Werte zu senken.

Nutzen Sie den Filterschritt, um Dateitypen oder Ordner zu überspringen, die Sie nicht übernehmen möchten, etwa alte Installationsprogramme oder Google-Docs-Exporte.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Einen Migrations-Job in RcloneView ausführen" class="img-large img-center" />

## Mit Folder Compare prüfen

Öffnen Sie nach der Übertragung **Compare** mit pCloud links und MEGA rechts. Filtern Sie nach nur links vorhandenen und abweichenden Dateien, um Fehlendes oder Abweichendes zu sehen, und kopieren Sie den Rest direkt aus der Vergleichsansicht. Der Tab Transferring und Job History protokollieren Größe und Status jedes Laufs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen pCloud und MEGA" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie pCloud (OAuth) und MEGA (E-Mail und Passwort) über New Remote hinzu.
3. Erstellen Sie einen Copy-Job von pCloud zu MEGA und führen Sie einen Dry Run aus.
4. Führen Sie den Job aus und prüfen Sie ihn dann mit Folder Compare, bevor Sie das alte Konto schließen.

Eine vorab geprüfte und verifizierte Kopie macht aus einem riskanten Kontowechsel eine Routineaufgabe.

---

**Weiterführende Anleitungen:**

- [pCloud zu Proton Drive migrieren](https://rcloneview.com/support/blog/migrate-pcloud-to-proton-drive-rcloneview)
- [MEGA zu Dropbox migrieren](https://rcloneview.com/support/blog/migrate-mega-to-dropbox-rcloneview)
- [pCloud-Synchronisationsfehler beheben](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
