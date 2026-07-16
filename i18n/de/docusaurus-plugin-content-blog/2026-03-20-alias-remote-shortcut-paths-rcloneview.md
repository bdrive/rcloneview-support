---
slug: alias-remote-shortcut-paths-rcloneview
title: "Alias Remote — Verknüpfungen zu tief verschachtelten Cloud-Ordnern mit RcloneView erstellen"
authors:
  - tayson
description: "Erfahren Sie, wie Sie mit rclones Alias-Remote-Funktion Verknüpfungen zu verschachtelten Cloud-Ordnern erstellen und Ihre Produktivität mit RcloneView steigern."
keywords:
  - alias remote
  - rclone alias
  - Ordnerverknüpfungen
  - Verknüpfungen zu Cloud-Ordnern
  - Zugriff auf verschachtelte Ordner
  - rclone Remote-Konfiguration
  - Produktivitätsverknüpfungen
  - Ordnerverknüpfungen rclone
  - schneller Ordnerzugriff
  - Cloud-Organisation
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Alias Remote — Verknüpfungen zu tief verschachtelten Cloud-Ordnern mit RcloneView erstellen

> Haben Sie es satt, sich durch unzählige Ordner zu klicken, um zu Ihren meistgenutzten Cloud-Verzeichnissen zu gelangen? Erstellen Sie Verknüpfungen mit Alias-Remotes und greifen Sie sofort darauf zu.

Cloud-Speicher-Hierarchien können schnell unübersichtlich werden. Um einen tief verschachtelten Projektordner oder ein gemeinsam genutztes Team-Verzeichnis zu finden, sind oft mehrere Klicks nötig. Rclones Alias-Remote-Funktion löst dieses Problem, indem sie Verknüpfungen — Aliase — erstellt, die direkt auf bestimmte Ordner verweisen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist ein Alias Remote?

Ein Alias Remote ist ein virtueller Remote, der auf einen Unterordner innerhalb eines anderen Remotes verweist. Anstatt durch `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones` zu navigieren, erstellen Sie einen Alias namens `smith-vs-jones`, der direkt dorthin verweist.

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

In RcloneView sehen Sie `smith-vs-jones` dann als separaten Remote in Ihrer Remote-Liste und können mit einem Klick auf diesen Ordner zugreifen. Dieser virtuelle Remote verhält sich genau wie ein echter Remote, sodass Sie Dateien mithilfe des Alias als Ausgangspunkt kopieren, verschieben und synchronisieren können.

## Einen Alias Remote erstellen

Konfigurieren Sie Alias-Remotes in Ihrer rclone-Konfigurationsdatei, indem Sie den Basis-Remote und den Unterordnerpfad angeben. RcloneView zeigt alle konfigurierten Alias-Remotes zusammen mit Ihren Standard-Cloud-Konten an.

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

Erstellen Sie beispielsweise einen Alias namens `archive-2025`, der auf `/GoogleDrive/Archive/2025` verweist, und greifen Sie dann direkt über den Remote-Selektor von RcloneView darauf zu. Der Alias fungiert als praktische Verknüpfung, ohne Daten zu duplizieren oder speziellen Speicherplatz zu benötigen.

## Produktivität steigern

Zu den gängigen Anwendungsfällen gehören:

- Projektspezifische Ordner für schnellen Zugriff während der aktiven Arbeit
- Kundenverzeichnisse für Kanzleien oder Unternehmen mit häufigem Zugriffsbedarf
- Gemeinsam genutzte Team-Ordner, auf die mehrere Projekte regelmäßig zugreifen
- Archiv- oder Backup-Ordner, auf die seltener zugegriffen wird, die aber leicht abrufbar sein müssen
- Temporäre Arbeitsverzeichnisse für bestimmte Workflows oder Kampagnen

Jeder Alias reduziert die Anzahl der Navigationsschritte und hält Ihren Workflow auf das Wesentliche fokussiert. Teams können Alias-Konfigurationen gemeinsam nutzen, um sicherzustellen, dass alle effizient auf dieselben Projektstrukturen zugreifen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurieren Sie Alias-Remotes in Ihrer rclone-Konfiguration (verweisen Sie sie auf häufig genutzte Unterverzeichnisse).
3. Starten Sie RcloneView und sehen Sie, wie Ihre neuen Aliase als separate Remotes erscheinen.
4. Klicken Sie auf einen beliebigen Alias, um sofort zu diesem Ordner zu navigieren.

Optimieren Sie Ihre Cloud-Navigation und gewinnen Sie stundenlange Produktivität zurück.

---

**Weiterführende Anleitungen:**

- [Virtuelle Remotes — Combine und Union Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Remote-Verwaltung — Hinzufügen, Bearbeiten, Löschen](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [Union Remote — Freien Speicherplatz kombinieren](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />
