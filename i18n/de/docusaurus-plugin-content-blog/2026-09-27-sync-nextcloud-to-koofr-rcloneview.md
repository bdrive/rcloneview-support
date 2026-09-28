---
slug: sync-nextcloud-to-koofr-rcloneview
title: "Nextcloud mit Koofr synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - robin
description: "Sichern Sie eine selbst gehostete Nextcloud-Instanz mit RcloneView auf Koofr — eine direkte Cloud-zu-Cloud-Synchronisation zwischen zwei datenschutzorientierten Speicheranbietern."
keywords:
  - Nextcloud mit Koofr synchronisieren
  - Nextcloud zu Koofr Backup
  - RcloneView Nextcloud
  - RcloneView Koofr
  - Self-Hosted Cloud-Backup
  - Cloud-zu-Cloud-Synchronisation
  - Nextcloud Koofr Übertragung
  - Backup für europäischen Cloud-Speicher
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud mit Koofr synchronisieren — Cloud-Backup mit RcloneView

> Geben Sie einer selbst gehosteten Nextcloud-Instanz ein Offsite-Backup auf Koofr, das nach einem Zeitplan läuft statt über einen manuellen Export.

Nextcloud ist gerade deshalb beliebt, weil es die Kontrolle über den Speicher in Ihre eigenen Hände legt — aber diese Kontrolle bedeutet auch, dass ein einzelner Serverausfall, ein fehlerhaftes Update oder ein Festplattenfehler Ihre einzige Kopie von allem mitnehmen kann. Koofr ist eine naheliegende Ergänzung als zweite Kopie, da es ebenfalls ein EU-basierter, auf Datenschutz ausgerichteter Anbieter ist — das Backup landet an einem Ort mit einer ähnlichen Haltung zur Datenresidenz, statt in einer unzusammenhängenden Jurisdiktion. RcloneView verbindet sich mit beiden als gewöhnliche Remotes und führt die Kopie direkt zwischen ihnen aus, sodass das Backup nicht davon abhängt, dass Ihr Nextcloud-Server zugleich Ihr Upload-Client ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Nextcloud und Koofr verbinden

Fügen Sie Nextcloud über Remote-Tab > Neuer Remote per WebDAV als Remote hinzu — Nextcloud stellt seine Dateien über WebDAV unter einer URL bereit, die das Admin-Panel Ihrer Instanz unter „Einstellungen" anzeigt. Sie benötigen also die Serveradresse, Ihren Benutzernamen und ein App-Passwort statt Ihres regulären Login-Passworts. Fügen Sie Koofr separat über dessen eigenen OAuth-Login-Ablauf hinzu. RcloneView bindet 90+ Anbieter aus einem Fenster ein und synchronisiert sie, unter Windows, macOS und Linux, sodass dasselbe Zwei-Remote-Setup funktioniert, egal ob Ihr Nextcloud-Server auf einem heimischen NAS oder einem gemieteten VPS läuft.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

Sobald beide Remotes im Remote-Manager erscheinen, öffnen Sie zwei Explorer-Panels nebeneinander, um zu bestätigen, dass Sie die Nextcloud-Ordnerstruktur durchsuchen können, und werfen Sie einen Blick auf das (wahrscheinlich leere) Koofr-Ziel, bevor Sie irgendetwas automatisieren.

## Den Sync-Job erstellen

Verwenden Sie für diese Art von Backup den 4-Schritte-Sync-Assistenten statt eines einmaligen Drag-and-Drop — legen Sie Nextcloud als Quelle und Koofr als Ziel fest, wählen Sie die einseitige Synchronisation, damit Koofr immer nur Kopien empfängt und Nextcloud maßgeblich bleibt, und führen Sie zuerst einen Dry Run aus, um zu bestätigen, dass die Dateiliste korrekt aussieht, bevor tatsächlich etwas übertragen wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

Schließen Sie in Schritt 3 alles aus, was Sie nicht extern duplizieren möchten — Nextclouds eigene Versionsordner im `.git`-Stil oder große, bereits an anderer Stelle gesicherte Mediatheken sind gute Kandidaten für eine Filterregel und halten die Koofr-Kopie auf das fokussiert, was tatsächlich Redundanz benötigt.

## Wiederkehrende Backups planen

Eine einmalige Synchronisation schützt Sie nur vor dem Ausfall von heute, nicht vor dem des nächsten Monats. Mit einer PLUS-Lizenz fügt Schritt 4 des Assistenten eine crontab-artige Planung hinzu, sodass die Synchronisation von Nextcloud zu Koofr nachts oder wöchentlich läuft, ohne dass Sie die App öffnen müssen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

Der Job-Verlauf liefert Ihnen dann eine laufende Aufzeichnung jeder geplanten Ausführung — Abschlussstatus, Dateianzahl und Dauer — sodass Sie bestätigen können, dass das Backup tatsächlich ausgeführt wurde, anstatt anzunehmen, dass eine geplante Aufgabe still im Hintergrund läuft.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihre Nextcloud-Instanz als WebDAV-Remote und Koofr als OAuth-Remote hinzu.
3. Erstellen Sie einen einseitigen Sync-Job von Nextcloud nach Koofr und filtern Sie alles heraus, was Sie nicht duplizieren müssen.
4. Planen Sie den Job für automatische Ausführung und prüfen Sie regelmäßig den Job-Verlauf, um den Abschluss zu bestätigen.

Ein selbst gehosteter Server ist nur so sicher wie sein Backup, und das Ausrichten dieses Backups auf einen zweiten, unabhängigen Anbieter schließt genau die Single-Point-of-Failure-Lücke, die Self-Hosting sonst offen lässt.

---

**Verwandte Anleitungen:**

- [Koofr mit Proton Drive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Nextcloud-Synchronisationsfehler beheben — Lösung mit RcloneView](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [Koofr zu Jottacloud migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
