---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "pCloud zu Jottacloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - alex
description: "pCloud mit RcloneView zu Jottacloud migrieren: beide Remotes verbinden, per Dry Run eine Vorschau erstellen, von Cloud zu Cloud kopieren und mit Folder Compare überprüfen."
keywords:
  - pCloud zu Jottacloud migrieren
  - pCloud zu Jottacloud Übertragung
  - pCloud Jottacloud Migration
  - RcloneView pCloud
  - RcloneView Jottacloud
  - Cloud-zu-Cloud-Übertragung
  - Dateien aus pCloud verschieben
  - Migration europäischer Cloud-Speicher
  - rclone GUI Migration
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud zu Jottacloud migrieren — Dateien mit RcloneView übertragen

> Ziehen Sie eine pCloud-Bibliothek von Cloud zu Cloud nach Jottacloud um, zuerst mit einer Vorschau und am Ende mit einer Überprüfung.

Ein Fotograf, der Kundenarchive zusammenführt, oder eine Familie, die gemeinsame Ordner zu einem neuen Anbieter umzieht, steht vor derselben Aufgabe: Tausende Dateien, die in einer Cloud liegen, müssen in einer anderen landen. Alles auf einen Laptop herunterzuladen und erneut hochzuladen, ist langsam und fehleranfällig. RcloneView verbindet pCloud und Jottacloud in einem Fenster, führt den Kopiervorgang dazwischen aus und bietet Dry Run und Folder Compare, um das Ergebnis zu bestätigen. RcloneView bindet über 90 Anbieter in einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud und Jottacloud als Remotes verbinden

Öffnen Sie den Tab Remote und wählen Sie New Remote. pCloud meldet sich über OAuth an: Ihr Browser öffnet sich, Sie genehmigen den Zugriff, und RcloneView verbindet sich automatisch. Fügen Sie Jottacloud als zweites Remote hinzu, indem Sie den Anweisungen auf dem Bildschirm für diesen Anbieter folgen.

Sobald beide im Remote Manager erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Bereichen. Wenn Sie zuerst Quelle und Ziel durchsuchen, können Sie leichter entscheiden, welche Ordner Sie verschieben und wohin sie gehören.

<img src="/support/images/en/blog/new-remote.png" alt="pCloud- und Jottacloud-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Den Kopiervorgang mit Filtern und einem Dry Run planen

In Schritt 3 des Job-Assistenten können Sie die Übertragung nach maximaler Dateigröße, maximalem Dateialter oder Ordnertiefe begrenzen. Vordefinierte Filter decken Music-, Video-, Image- und Document-Dateien ab, und eigene Regeln können Muster wie `.git/`-Ordner oder `.iso`-Dateien ausschließen, was praktisch ist, um Installationsprogramme und Datenträgerabbilder zu überspringen.

Führen Sie vor dem eigentlichen Job einen Dry Run aus. Er listet die Dateien auf, die kopiert oder gelöscht würden, ohne eine der beiden Seiten zu ändern. Wählen Sie für eine Migration einen Copy-Job statt einer spiegelnden Synchronisation, damit nichts, was bereits in Jottacloud liegt, entfernt wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von pCloud zu Jottacloud in RcloneView" class="img-large img-center" />

## Die Übertragung starten und den Fortschritt beobachten

Starten Sie den Job und verfolgen Sie ihn im Tab Transferring, der Fortschritt, Geschwindigkeit und Dateianzahl anzeigt. Erhöhen Sie bei einer großen Bibliothek in Schritt 2 die Anzahl der Dateiübertragungen, halten Sie die Anzahl der Equality-Checker aber moderat, wenn eines der Backends langsam antwortet. „Retry entire sync if fails“ ist standardmäßig auf 3 gesetzt, was vorübergehende Netzwerkfehler abfängt.

Reicht eine Sitzung nicht aus, speichern Sie den Job im Job Manager und führen Sie ihn später erneut aus. Ein Copy-Job überträgt nur fehlende oder abweichende Dateien, sodass wiederholte Durchläufe dort weitermachen, wo der letzte aufgehört hat.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Einen Copy-Job von pCloud zu Jottacloud in RcloneView ausführen" class="img-large img-center" />

## Mit Folder Compare überprüfen

Sobald der Job abgeschlossen ist, öffnen Sie Compare mit pCloud links und Jottacloud rechts. Filter für nur links vorhandene, nur rechts vorhandene und abweichende Dateien zeigen, was noch zu verschieben ist, und die Aktion „nach rechts kopieren“ überträgt Nachzügler. Job History hält Status, Größe, Geschwindigkeit und Dateianzahl jedes Durchlaufs als Nachweis der Migration fest.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud- und Jottacloud-Ordner nach der Migration vergleichen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie pCloud (OAuth) und Jottacloud als Remotes hinzu.
3. Erstellen Sie einen Copy-Job mit Filtern und führen Sie dann einen Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis anschließend mit Folder Compare.

Lassen Sie das pCloud-Konto unverändert, bis Compare zeigt, dass beide Seiten übereinstimmen.

---

**Verwandte Anleitungen:**

- [pCloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Jottacloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Jottacloud zu pCloud migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />
