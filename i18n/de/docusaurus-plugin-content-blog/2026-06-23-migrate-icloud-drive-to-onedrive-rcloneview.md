---
slug: migrate-icloud-drive-to-onedrive-rcloneview
title: "iCloud Drive zu OneDrive migrieren — Dateien mit RcloneView übertragen"
authors:
  - alex
description: "Schritt-für-Schritt-Anleitung zur Migration von iCloud-Drive-Dateien zu Microsoft OneDrive mit der Cloud-zu-Cloud-Synchronisation, der Dry-Run-Vorschau und den Ordnervergleichs-Verifizierungstools von RcloneView."
keywords:
  - iCloud Drive zu OneDrive Migration
  - iCloud zu Microsoft OneDrive migrieren
  - iCloud Drive OneDrive Übertragung
  - von iCloud zu OneDrive wechseln
  - Cloud-Migration Apple Microsoft
  - iCloud Drive Backup OneDrive
  - RcloneView iCloud Migration
  - Dateien von iCloud zu OneDrive verschieben
  - plattformübergreifende Cloud-Dateimigration
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - onedrive
  - macos
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive zu OneDrive migrieren — Dateien mit RcloneView übertragen

> Der Wechsel von Apples iCloud-Ökosystem zu Microsoft OneDrive muss nicht bedeuten, dass Sie Gigabytes an Dateien manuell herunter- und wieder hochladen müssen — RcloneView führt die Migration als direkte Cloud-zu-Cloud-Übertragung durch.

Wenn Teams auf Microsoft 365 umstellen oder einzelne Nutzer von Mac-zentrierten Arbeitsabläufen zu Windows wechseln, ist das Übertragen von iCloud-Drive-Dateien nach OneDrive die erste praktische Hürde. Alles auf eine lokale Festplatte herunterzuladen und wieder hochzuladen ist langsam, anfällig für Unterbrechungen und lässt keine einfache Möglichkeit, zu überprüfen, ob jede Datei unbeschädigt angekommen ist. RcloneView erledigt dies als serverseitige Übertragung mit integrierter Fortschrittsanzeige, Dry-Run-Vorschau und Ordnervergleichs-Verifizierung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von iCloud Drive zu OneDrive wechseln?

iCloud Drive funktioniert nahtlos innerhalb der Apple-Hardware, bietet aber außerhalb dieses Ökosystems nur eingeschränkte native Integration. OneDrive hingegen ist im Windows-Explorer integriert, verbindet sich direkt mit Microsoft Office und Teams und funktioniert mit einheitlichem Synchronisationsverhalten unter Windows, macOS, iOS und Android. Organisationen, die Microsoft 365 einführen, verlangen von Mitarbeitern häufig, bestehende Dateibestände nach OneDrive zu verschieben, damit Zusammenarbeit, Versionsverlauf und Zugriffsrichtlinien alle über ein einziges verwaltetes System laufen.

Die Unterstützung von iCloud Drive in RcloneView erfordert rclone v1.69 oder neuer. RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert, die diese Anforderung bereits erfüllt, sodass vor dem Start kein separater rclone-Installationsschritt nötig ist.

<img src="/support/images/en/blog/new-remote.png" alt="Adding both iCloud Drive and OneDrive as remotes in the RcloneView Remote Manager" class="img-large img-center" />

## Beide Remotes in RcloneView einrichten

Beginnen Sie mit dem Hinzufügen Ihres iCloud-Drive-Remotes: Gehen Sie zum Tab **Remote**, klicken Sie auf **New Remote** und wählen Sie **iCloud Drive**. Folgen Sie den Bildschirmanweisungen, um sich mit Ihrem Apple-Konto zu authentifizieren. Fügen Sie anschließend auf die gleiche Weise Ihren OneDrive-Remote hinzu — OneDrive verwendet OAuth-Browser-Login, sodass sich ein Browserfenster für die Anmeldung bei Ihrem Microsoft-Konto öffnet und der Remote nach Abschluss der Autorisierung gespeichert wird.

Nachdem beide Remotes registriert sind, öffnen Sie sie nebeneinander in den Explorer-Panels. So erhalten Sie eine Live-Ansicht beider Dateibäume, bevor eine Übertragung beginnt. Verwenden Sie **Get Size** im iCloud-Drive-Stammverzeichnis, um das gesamte Datenvolumen zu bestätigen, und durchsuchen Sie die Ordnerstrukturen nach Namensunterschieden oder tief verschachtelten Pfaden, die sich auf OneDrive möglicherweise anders verhalten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and OneDrive displayed side by side in the RcloneView two-panel Explorer for cloud-to-cloud transfer" class="img-large img-center" />

## Die Migration mit einem Sync-Job durchführen

Erstellen Sie im Tab **Home** einen neuen Sync-Job. Legen Sie iCloud Drive (oder einen bestimmten Unterordner) als Quelle und den Ziel-OneDrive-Pfad als Ziel fest. Führen Sie vor der Ausführung einen **Dry Run** aus: RcloneView listet jede Datei und jeden Ordner auf, die/den es übertragen würde, ohne tatsächlich etwas zu verschieben. Bei einer 50-GB-iCloud-Bibliothek dauert dieser Scan nur wenige Minuten und deckt übergroße Dateien oder Dateinamenzeichen auf, die OneDrive anders behandelt.

Im Gegensatz zu reinen Mount-Tools synchronisiert und vergleicht RcloneView Ordner auch in der kostenlosen Lizenz — der komplette Migrationsablauf, vom Dry-Run über die Live-Übertragung bis zur Verifizierung, erfordert kein kostenpflichtiges Upgrade.

Sobald die Dry-Run-Ausgabe korrekt aussieht, starten Sie die Live-Übertragung. Der Tab **Transferring** zeigt den Live-Fortschritt, die Geschwindigkeit und die aktuell übertragene Datei an. Falls die Verbindung abbricht, führen Sie einfach denselben Job erneut aus: rclone überspringt Dateien, die am Ziel bereits mit übereinstimmender Größe vorhanden sind, sodass die Übertragung effizient dort fortgesetzt wird, wo sie unterbrochen wurde.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view in RcloneView confirming iCloud Drive and OneDrive folder contents match after migration" class="img-large img-center" />

## Die Migration mit Folder Compare überprüfen

Nachdem der Sync-Job abgeschlossen ist, öffnen Sie **Folder Compare** im Tab **Home** und richten Sie es auf dieselbe iCloud-Drive-Quelle und das OneDrive-Ziel aus. Die Vergleichs-Engine zeigt an, welche Dateien identisch sind, welche sich in der Größe unterscheiden und welche nur auf einer Seite vorkommen. Das Durcharbeiten der Filter „nur links" und „nur rechts" ist der schnellste Weg, um einen Datenverlust von null zu bestätigen, ohne Dateien manuell stichprobenartig zu prüfen.

Wenn Sie eine schrittweise Migration durchführen — iCloud Drive auf einigen Geräten noch aktiv nutzen, während andere zu OneDrive umgestellt werden — können PLUS-Lizenznutzer dem Sync-Job einen Zeitplan zuweisen. Alle neuen Dateien, die zu iCloud Drive hinzugefügt werden, werden bei jedem geplanten Lauf automatisch zu OneDrive repliziert, bis die Umstellung abgeschlossen ist.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Drive to OneDrive sync job in RcloneView for a phased migration transition" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren **iCloud Drive**-Remote über **Remote** > **New Remote** hinzu und schließen Sie die Apple-Konto-Authentifizierung ab.
3. Fügen Sie Ihren **OneDrive**-Remote über die OAuth-Browser-Anmeldung hinzu.
4. Erstellen Sie einen Sync-Job mit iCloud Drive als Quelle und OneDrive als Ziel; führen Sie zuerst einen **Dry Run** aus.
5. Verwenden Sie nach der Live-Übertragung **Folder Compare**, um zu bestätigen, dass alle Dateien korrekt migriert wurden.

Eine vollständige Migration zu OneDrive bietet Ihnen einheitlichen Zugriff über Windows, Microsoft 365 und Teams hinweg — ohne Dateien dauerhaft auf zwei Dienste verteilt zu lassen.

---

**Verwandte Anleitungen:**

- [iCloud Drive Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [OneDrive verwalten — Cloud-Synchronisation & Backup mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [iCloud Drive zu Google Drive mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
