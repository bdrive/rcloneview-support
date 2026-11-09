---
slug: migrate-mega-to-koofr-rcloneview
title: "MEGA zu Koofr migrieren — Dateien mit RcloneView übertragen"
authors:
  - casey
description: "Migrieren Sie MEGA zu Koofr mit RcloneView: beide Remotes verbinden, per Dry Run prüfen, Cloud-zu-Cloud kopieren und das Ergebnis mit Folder Compare verifizieren."
keywords:
  - MEGA zu Koofr migrieren
  - MEGA zu Koofr übertragen
  - MEGA Koofr Migration
  - Dateien von MEGA zu Koofr verschieben
  - RcloneView MEGA
  - RcloneView Koofr
  - Cloud-zu-Cloud-Übertragung
  - MEGA-Alternative europäischer Speicher
tags:
  - RcloneView
  - mega
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# MEGA zu Koofr migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie die Dateien eines MEGA-Kontos mit einem vorab geprüften, verifizierbaren Cloud-zu-Cloud-Job nach Koofr, statt manuell herunter- und wieder hochzuladen.

Jahrelang angesammelte Dateien aus MEGA zu verschieben bedeutet meist, sie auf den Laptop herunterzuladen und erneut hochzuladen – das verdoppelt den Aufwand und scheitert an jedem Netzwerkaussetzer. Mit RcloneView verbinden Sie MEGA und Koofr nebeneinander und führen die Übertragung als einen einzigen Job aus. RcloneView bindet 90+ Anbieter ein UND synchronisiert sie in einem Fenster, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Öffnen Sie den Remote-Tab und klicken Sie auf New Remote. MEGA verwendet die Eingabe von Zugangsdaten: Geben Sie E-Mail-Adresse und Passwort Ihres Kontos ein. Koofr wird auf dieselbe Weise aus der Anbieterliste hinzugefügt. Sobald beide im Remote Manager erscheinen, öffnen Sie sie in zwei Explorer-Panels, um Quelle und Ziel gemeinsam zu sehen.

<img src="/support/images/en/blog/new-remote.png" alt="MEGA- und Koofr-Remotes in RcloneView hinzufügen" class="img-large img-center" />

Durchsuchen Sie zuerst den MEGA-Baum. Entscheiden Sie, ob Sie alles oder nur bestimmte Ordner verschieben, denn ein kleinerer Umfang hält den ersten Lauf schnell und leicht überprüfbar.

## Erst Vorschau, dann Übertragung

Sie können Ordner vom MEGA-Panel in das Koofr-Panel ziehen; das Ziehen zwischen verschiedenen Remotes führt ein Kopieren aus, sodass die ursprünglichen MEGA-Dateien unangetastet bleiben. Für einen größeren Umzug erstellen Sie stattdessen einen Sync- oder Copy-Job. Führen Sie zuerst einen Dry Run aus: Er listet die Dateien auf, die kopiert würden, sodass Sie einen falschen Zielpfad erkennen, bevor etwas geschrieben wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von MEGA nach Koofr" class="img-large img-center" />

In den Advanced Settings des Jobs können Sie die Anzahl paralleler Dateiübertragungen anpassen. Wird einer der Dienste langsamer oder liefert Fehler, verringern Sie die Zahl der Equality Checkers und Übertragungen und überlassen Sie vorübergehende Fehler der Wiederholungseinstellung.

## Überwachen und verifizieren

Verfolgen Sie den Fortschritt im Transferring-Tab, der Geschwindigkeit, Dateianzahl und Größe anzeigt. Öffnen Sie nach Abschluss des Jobs den Job History, um Status und übertragene Gesamtmenge zu bestätigen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mit einer abgeschlossenen Übertragung von MEGA nach Koofr" class="img-large img-center" />

Verwenden Sie schließlich Folder Compare mit MEGA links und Koofr rechts. Filtern Sie nach nur links vorhandenen und abweichenden Dateien, um alles zu finden, was nicht angekommen ist, und kopieren Sie es direkt aus der Vergleichsansicht herüber.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen MEGA und Koofr" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihre MEGA- und Koofr-Remotes im Remote-Tab hinzu.
3. Erstellen Sie einen Copy- oder Sync-Job und prüfen Sie ihn per Dry Run.
4. Führen Sie den Job aus und verifizieren Sie das Ergebnis mit Folder Compare, bevor Sie bei MEGA etwas aufgeben.

Behalten Sie die MEGA-Kopie, bis der Vergleich sauber ausfällt, sodass die Originaldaten während der Verifizierung verfügbar bleiben.

---

**Weiterführende Anleitungen:**

- [Koofr zu MEGA migrieren](https://rcloneview.com/support/blog/migrate-koofr-to-mega-rcloneview)
- [MEGA zu pCloud migrieren](https://rcloneview.com/support/blog/migrate-mega-to-pcloud-rcloneview)
- [Koofr Cloud-Synchronisation und Backup verwalten](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
