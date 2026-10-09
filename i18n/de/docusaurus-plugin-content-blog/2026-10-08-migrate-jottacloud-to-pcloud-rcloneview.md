---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "Jottacloud zu pCloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - casey
description: "Dateien mit RcloneView von Jottacloud zu pCloud verschieben: beide Remotes verbinden, mit Dry Run in der Vorschau prüfen, eine Cloud-zu-Cloud-Übertragung ausführen und mit Folder Compare verifizieren."
keywords:
  - Jottacloud zu pCloud migrieren
  - Jottacloud zu pCloud Übertragung
  - Jottacloud pCloud Migration
  - Cloud-zu-Cloud-Übertragung
  - RcloneView Jottacloud
  - RcloneView pCloud
  - Jottacloud-Dateien verschieben
  - Jottacloud Alternative
  - rclone GUI Migration
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud zu pCloud migrieren — Dateien mit RcloneView übertragen

> RcloneView verschiebt eine Jottacloud-Bibliothek per Vorschau und überprüfbarer Cloud-zu-Cloud-Übertragung nach pCloud, statt Dateien manuell herunter- und wieder hochzuladen.

Der Wechsel von Jottacloud zu pCloud bedeutet meist jahrelang gesammelte Fotos, Dokumente und Archive, die niemand von Hand herunter- und wieder hochladen möchte. RcloneView verbindet beide Dienste als Remotes und überträgt die Daten zwischen ihnen, sodass Sie den Umzug in einem Fenster in der Vorschau prüfen, ausführen und verifizieren können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Öffnen Sie Remote > New Remote und fügen Sie Jottacloud hinzu, danach pCloud. pCloud verwendet OAuth: Es öffnet sich ein Browserfenster zur Anmeldung, und das Remote verbindet sich automatisch. Jottacloud richten Sie über denselben New-Remote-Assistenten ein, indem Sie den Anweisungen folgen.

Öffnen Sie jedes Remote in einem eigenen Explorer-Bereich und durchsuchen Sie die Stammordner. Werden beide Seiten aufgelistet, funktionieren die Verbindungen, bevor Sie Daten verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Jottacloud- und pCloud-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Übertragung mit Dry Run in der Vorschau prüfen

Mit Jottacloud links und pCloud rechts ziehen Sie Ordner für eine schnelle Kopie hinüber oder erstellen einen Sync-Job für die gesamte Bibliothek. Zwischen verschiedenen Remotes kopiert Drag & Drop, statt zu verschieben – die Quelle bleibt also unangetastet, bis Sie etwas anderes entscheiden.

Für eine vollständige Migration erstellen Sie den Job im vierstufigen Assistenten, wählen Quell- und Zielordner und führen zuerst einen Dry Run aus. Er listet die Dateien auf, die kopiert oder gelöscht würden, ohne etwas zu ändern.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Jottacloud zu pCloud in RcloneView" class="img-large img-center" />

## Job ausführen und Fortschritt beobachten

Starten Sie den Job und verfolgen Sie ihn im Tab Transferring, der Fortschritt, Geschwindigkeit und Dateianzahl anzeigt. Halten Sie bei einer großen Bibliothek die Übertragungen in Schritt 2 moderat und lassen Sie „Retry entire sync if fails“ auf 3, damit kurze Netzwerkunterbrechungen den Lauf nicht beenden.

Wenn Sie schrittweise migrieren möchten, begrenzen Sie im Filterschritt nach Ordner, Dateialter oder vordefinierten Typen wie Image oder Document.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung der Übertragung von Jottacloud zu pCloud in RcloneView" class="img-large img-center" />

## Verifizieren, bevor Sie etwas kündigen

Öffnen Sie Compare mit Jottacloud und pCloud nebeneinander. Zeigen Sie Dateien an, die nur links vorhanden sind oder abweichen, um alles zu finden, was nicht angekommen ist, und kopieren Sie nur diese Elemente. Prüfen Sie den Job History auf den Endstatus, bevor Sie das alte Konto auflösen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Migration in RcloneView mit Folder Compare verifizieren" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Jottacloud und pCloud als Remotes hinzu und durchsuchen Sie beide.
3. Erstellen Sie einen Sync- oder Copy-Job von Jottacloud zu pCloud und führen Sie einen Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit Folder Compare und Job History.

Eine geprüfte und verifizierte Übertragung erlaubt den Wechsel des Speicheranbieters, ohne die vorhandenen Dateien zu gefährden.

---

**Verwandte Anleitungen:**

- [Jottacloud mit RcloneView zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [pCloud mit RcloneView zu Dropbox migrieren](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [Jottacloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
