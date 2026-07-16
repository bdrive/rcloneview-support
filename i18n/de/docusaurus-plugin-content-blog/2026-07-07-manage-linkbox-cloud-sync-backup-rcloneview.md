---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "Linkbox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - kai
description: "Verbinden Sie Linkbox-Cloud-Speicher mit RcloneView für Drag-and-Drop-Dateiverwaltung, geplante Backups und anbieterübergreifende Synchronisation aus einer einzigen Desktop-App."
keywords:
  - Linkbox
  - Linkbox Cloud-Speicher
  - Linkbox-Dateien verwalten
  - Linkbox-Backup
  - Linkbox-Synchronisation
  - RcloneView Linkbox
  - Cloud-Dateimanager
  - Linkbox-Alternative Client
tags:
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linkbox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Integrieren Sie Linkbox in Ihren täglichen Datei-Workflow mit einem vollständigen Desktop-Explorer, geplanten Backups und Ein-Klick-Übertragungen zu jeder anderen Cloud.

Linkbox ist eine praktische Option zum Speichern und Teilen von Dateien online, aber die Weboberfläche ist nicht für die Massenverwaltung von Dateien, den Vergleich von Ordnern oder wiederkehrende Backup-Jobs ausgelegt. RcloneView fügt Linkbox eine native Desktop-Ebene hinzu und bietet Ihnen einen echten Datei-Explorer, Drag-and-Drop-Uploads und automatisierte Synchronisation, sodass Linkbox nicht mehr isoliert bleibt, sondern Teil eines echten Multi-Cloud-Workflows wird.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Linkbox als Remote hinzufügen

Öffnen Sie den Reiter Remote und klicken Sie auf Neuer Remote, um den Einrichtungsassistenten zu starten. RcloneView führt Sie durch die Auswahl von Linkbox aus der Anbieterliste und die Eingabe der erforderlichen Verbindungsdetails und testet anschließend die Verbindung, bevor sie gespeichert wird. Nach dem Hinzufügen erscheint Linkbox als Reiter in Ihrem Explorer-Panel, genau wie jeder andere konfigurierte Remote, sodass Sie Ordner durchsuchen, Dateien anzeigen und Größen prüfen können, ohne einen Browser-Tab zu öffnen.

Da RcloneView über 90 Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux einbindet UND synchronisiert, steht Linkbox direkt neben Ihrem Google Drive, Ihren S3-Buckets oder NAS-Freigaben in derselben Explorer-Ansicht — keine separate App für jeden Dienst.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Linkbox remote in RcloneView remote setup wizard" class="img-large img-center" />

Nach der Verbindung können Sie jederzeit über den Remote Manager die Linkbox-Konfiguration überprüfen oder bearbeiten und zwischen mehreren Panels wechseln, wenn Sie Linkbox-Inhalte mit einem anderen Remote nebeneinander vergleichen.

## Linkbox-Inhalte automatisch sichern

Dateien nach jeder Änderung manuell erneut auf Linkbox hochzuladen, wird leicht vergessen. Mit dem Job Manager von RcloneView können Sie einen Sync-, Kopier- oder Download-Job definieren, der neue und geänderte Dateien von Linkbox auf ein lokales Laufwerk, eine externe SSD oder einen anderen Cloud-Anbieter wiederholend überträgt. Der 4-stufige Job-Assistent umfasst die Auswahl von Quelle/Ziel, die Übertragungsparallelität und die Filterung — sodass Sie beispielsweise temporäre Dateien ausschließen oder das maximale Dateialter begrenzen können, bevor ein Backup ausgeführt wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a backup job from Linkbox to another cloud destination in RcloneView" class="img-large img-center" />

Führen Sie zuerst einen Testlauf (Dry Run) aus, um genau zu sehen, welche Dateien kopiert oder gelöscht würden, bevor Sie eine tatsächliche Übertragung starten — nützlich, wenn Sie zum ersten Mal einen Job auf einen Linkbox-Ordner richten, dessen Inhalt Sie noch nicht vollständig geprüft haben.

## Linkbox-Jobs planen und überwachen

Für Nutzer der PLUS-Lizenz unterstützt der Planungsschritt des Job Managers eine Crontab-ähnliche Zeitsteuerung, sodass ein Linkbox-Backup nächtlich, wöchentlich oder in jedem anderen zu Ihren Aufbewahrungsanforderungen passenden Rhythmus ausgeführt werden kann, ohne dass Sie daran denken müssen, es manuell auszulösen. Nutzer der FREE-Lizenz können dieselben Jobs weiterhin manuell oder als einmalige Ausführung bei Bedarf starten.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Linkbox backup job in RcloneView Job Manager" class="img-large img-center" />

Jeder Durchlauf wird im Job-Verlauf mit Startzeit, Dauer, Übertragungsgeschwindigkeit und Dateianzahl protokolliert, sodass Sie bestätigen können, dass ein Linkbox-Backup erfolgreich abgeschlossen wurde, oder eine fehlgeschlagene Übertragung untersuchen können, ohne sich durch Rohprotokolle zu wühlen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Reiter Remote und fügen Sie Linkbox über den Einrichtungsassistenten als neuen Remote hinzu.
3. Erstellen Sie einen Sync- oder Backup-Job, der von Linkbox zu Ihrem bevorzugten Ziel führt.
4. Führen Sie einen Testlauf (Dry Run) aus, speichern Sie den Job und planen Sie ihn optional für eine wiederkehrende Ausführung.

Sobald Linkbox in RcloneView eingebunden ist, ist es kein separates Ziel mehr, an das Sie denken müssen, sondern einfach ein weiterer Ordner in Ihrem einheitlichen Cloud-Workflow.

---

**Verwandte Anleitungen:**

- [Gofile-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Pixeldrain-Speicher verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Uptobox-Cloud-Downloads mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />
