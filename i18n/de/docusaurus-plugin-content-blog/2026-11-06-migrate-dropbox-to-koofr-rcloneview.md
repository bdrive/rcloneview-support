---
slug: migrate-dropbox-to-koofr-rcloneview
title: "Dropbox zu Koofr migrieren — Dateien mit RcloneView übertragen"
authors:
  - robin
description: "Dropbox mit RcloneView zu Koofr migrieren: beide Remotes verbinden, einen Dry Run ausführen, von Cloud zu Cloud kopieren und das Ergebnis mit Folder Compare überprüfen."
keywords:
  - Dropbox zu Koofr migrieren
  - Dropbox zu Koofr Übertragung
  - Dropbox Koofr Migration
  - RcloneView Dropbox
  - RcloneView Koofr
  - Cloud-zu-Cloud-Übertragung
  - Dateien aus Dropbox verschieben
  - Koofr europäischer Cloud-Speicher
  - rclone GUI Migration
  - Dropbox for Business Migration
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox zu Koofr migrieren — Dateien mit RcloneView übertragen

> Ziehen Sie ein Dropbox-Konto von Cloud zu Cloud in Koofr um, mit einer Vorschau vor dem Kopieren und einem Vergleich danach.

Eine Designagentur löst ein Kundenkonto auf, oder ein Freiberufler möchte sein Archiv bei einem europäischen Anbieter hosten. In beiden Fällen ist es langsam und fehleranfällig, Tausende Dropbox-Ordner über einen Laptop zu ziehen. RcloneView verbindet Dropbox und Koofr in einem Fenster, führt den Kopiervorgang dazwischen aus und bietet Dry Run und Folder Compare, um das Ergebnis zu bestätigen. RcloneView bindet über 90 Anbieter in einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und Koofr als Remotes verbinden

Öffnen Sie den Tab Remote und wählen Sie New Remote. Dropbox meldet sich über OAuth an: Ihr Browser öffnet sich, Sie genehmigen den Zugriff, und RcloneView verbindet sich automatisch. Für ein Firmenkonto benötigt Dropbox for Business die Einstellung `dropbox_business = true` in der Remote-Konfiguration.

Fügen Sie Koofr als zweites Remote hinzu. Sobald beide im Remote Manager erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Bereichen. Durchsuchen Sie die Quell- und die Zielstruktur, bevor Sie etwas verschieben, damit Sie wissen, welche Ordner wichtig sind.

<img src="/support/images/en/blog/new-remote.png" alt="Dropbox- und Koofr-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Den Kopiervorgang mit Filtern und einem Dry Run planen

Die meisten Dropbox-Konten enthalten temporäre Dateien, die Sie nicht übernehmen möchten. Schritt 3 des Job-Assistenten bietet eine maximale Dateigröße, ein maximales Dateialter und eine Begrenzung der Ordnertiefe. Vordefinierte Filter decken Music-, Video-, Image- und Document-Dateien ab, und eigene Regeln können Muster wie `.git/`-Ordner oder `.iso`-Dateien ausschließen.

Führen Sie vor dem eigentlichen Job einen Dry Run aus. Er listet die Dateien auf, die kopiert oder gelöscht würden, ohne eine der beiden Seiten zu verändern. Wählen Sie für eine Migration einen Copy-Job statt einer spiegelnden Synchronisation, damit nichts, was bereits auf Koofr liegt, entfernt wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Dropbox zu Koofr in RcloneView" class="img-large img-center" />

## Die Übertragung starten und den Fortschritt beobachten

Starten Sie den Job und verfolgen Sie ihn im Tab Transferring, der Fortschritt, Geschwindigkeit und Dateianzahl anzeigt. Erhöhen Sie bei einer großen Bibliothek in Schritt 2 die Anzahl der Dateiübertragungen, halten Sie die Anzahl der Equality-Checker aber moderat, wenn einer der Dienste langsam antwortet. „Retry entire sync if fails“ ist standardmäßig auf 3 gesetzt, was vorübergehende Netzwerkfehler abfängt.

Ist die Bibliothek für eine Sitzung zu groß, speichern Sie den Job im Job Manager und führen Sie ihn später erneut aus. Ein Copy-Job überträgt nur fehlende oder abweichende Dateien, sodass ein zweiter Durchlauf dort weitermacht, wo der erste aufgehört hat.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer Übertragung von Dropbox zu Koofr im Tab Transferring" class="img-large img-center" />

## Mit Folder Compare überprüfen

Wenn der Job abgeschlossen ist, öffnen Sie Compare mit Dropbox links und Koofr rechts. Filter für nur links vorhandene, nur rechts vorhandene und abweichende Dateien zeigen, was noch fehlt. Die Aktion „nach rechts kopieren“ überträgt übrig gebliebene Dateien. Job History erfasst Status, Größe, Geschwindigkeit und Dateianzahl jedes Durchlaufs, was als Dokumentation der Migration nützlich ist.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mit einer abgeschlossenen Migration von Dropbox zu Koofr" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Dropbox (OAuth) und Koofr als Remotes hinzu.
3. Erstellen Sie einen Copy-Job mit Filtern und führen Sie dann einen Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis anschließend mit Folder Compare.

Lassen Sie das Dropbox-Konto unverändert, bis Compare zeigt, dass beide Seiten übereinstimmen.

---

**Verwandte Anleitungen:**

- [Koofr-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr zu Dropbox migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Dropbox zu pCloud migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
