---
slug: migrate-mega-to-pcloud-rcloneview
title: "Mega zu pCloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Mega zu pCloud migrieren mit RcloneView: beide Remotes verbinden, per Dry Run in der Vorschau prüfen, Cloud-zu-Cloud kopieren und das Ergebnis mit Folder Compare verifizieren."
keywords:
  - Mega zu pCloud migrieren
  - Mega zu pCloud Übertragung
  - Dateien von Mega nach pCloud verschieben
  - RcloneView Mega
  - RcloneView pCloud
  - Cloud-zu-Cloud-Migration
  - Mega pCloud Synchronisation
  - Mega-Dateien übertragen
tags:
  - RcloneView
  - mega
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mega zu pCloud migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie ein komplettes Mega-Konto mit einem prüfbaren, verifizierbaren Kopierauftrag nach pCloud, statt manuell herunter- und wieder hochzuladen.

Der Wechsel von Mega zu pCloud bedeutet meist Tausende Dateien in verschachtelten Ordnern, und der Weg über den Browser zwingt Sie, zuerst alles herunterzuladen. RcloneView verbindet beide Dienste nebeneinander und überträgt direkt von Cloud zu Cloud – mit einem Dry Run zur Vorschau des Auftrags und Folder Compare, um zu bestätigen, dass nichts fehlt. RcloneView verwaltet über 90 Cloud-Speicher-Dienste in einem Fenster unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mega und pCloud als Remotes verbinden

Mega nutzt die Eingabe von Zugangsdaten: Fügen Sie ein neues Remote hinzu, wählen Sie Mega und geben Sie E-Mail und Passwort ein. pCloud verwendet browserbasiertes OAuth: RcloneView öffnet eine Anmeldeseite, Sie genehmigen den Zugriff, und das Remote verbindet sich automatisch – ohne API-Schlüssel zum Kopieren.

Sobald beide Remotes existieren, öffnen Sie sie in zwei Explorer-Bereichen. Durchsuchen Sie beide Seiten, um zu bestätigen, dass das Konto erreichbar ist und wie die Ordnerstruktur aufgebaut ist, bevor Sie etwas verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Mega- und pCloud-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Die Übertragung planen

Entscheiden Sie, ob Sie das ganze Konto oder nur einen Teil möchten. Ein gängiger Ansatz ist, pro Auftrag einen Ordner der obersten Ebene zu kopieren; so bleibt jeder Lauf kurz und lässt sich leicht wiederholen. Im Sync-Assistenten können Sie den Umfang mit Filtern begrenzen: maximale Dateigröße, maximales Dateialter oder vordefinierte Gruppen wie Document, Image oder Video.

Wählen Sie Copy statt Sync, wenn pCloud bereits Dateien enthält, die Sie behalten möchten, denn eine unidirektionale Synchronisation gleicht das Ziel an die Quelle an. Führen Sie zuerst einen Dry Run aus. Er listet die Dateien auf, die kopiert oder gelöscht würden, ohne etwas zu ändern.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Mega- und pCloud-Ordner vor der Migration vergleichen" class="img-large img-center" />

## Migration ausführen und Fortschritt beobachten

Ziehen Sie einen Ordner vom Mega-Bereich in den pCloud-Bereich für eine schnelle einmalige Kopie, oder speichern Sie einen Auftrag für wiederholbare Läufe. Das Ziehen zwischen verschiedenen Remotes kopiert statt zu verschieben, sodass Ihre Mega-Daten unangetastet bleiben, bis Sie zufrieden sind.

Den Fortschritt sehen Sie im Tab Transferring, der Geschwindigkeit, Dateianzahl und Prozentsatz anzeigt. Wenn Sie ein großes Archiv verschieben, verringern Sie in den Advanced Settings die Zahl paralleler Übertragungen, damit die Kontolimits von Mega den Lauf seltener unterbrechen. Sync-Aufträge wiederholen den gesamten Lauf bei einem Fehler (Standard: 3 Mal).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Mega nach pCloud" class="img-large img-center" />

## Prüfen und abschließen

Öffnen Sie nach dem Kopieren Folder Compare für die beiden Wurzelordner. Filter zeigen Dateien nur links, nur rechts, identische und unterschiedliche Dateien, und übrig gebliebene Dateien können Sie mit einem Klick herüberkopieren. Job History protokolliert pro Lauf Startzeit, Dauer, Status und Dateianzahl – nützlich als Migrationsprotokoll.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf der Migration von Mega nach pCloud" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie ein Mega-Remote (E-Mail und Passwort) und ein pCloud-Remote (Browser-Anmeldung) hinzu.
3. Führen Sie einen Dry Run für einen Ordner aus und starten Sie dann den Kopierauftrag.
4. Verifizieren Sie mit Folder Compare und wiederholen Sie den Vorgang für die übrigen Ordner.

Eine schrittweise, verifizierte Migration lässt Sie Mega mit der Gewissheit verlassen, dass jede Datei angekommen ist.

---

**Verwandte Anleitungen:**

- [pCloud zu Mega migrieren](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Mega-Speicher verwalten](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [pCloud-Speicher verwalten](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
