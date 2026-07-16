---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "RcloneView Virtual Remotes: Mit Combine, Union und Alias einen einheitlichen Multi-Cloud-Arbeitsbereich erstellen"
authors:
  - tayson
description: "Nutzen Sie RcloneView Virtual Remotes, um Multi-Cloud-Ordner zu vereinheitlichen, ohne Daten zu kopieren. Erfahren Sie, wann Sie Alias, Combine oder Union wählen sollten und wie Sie sauberere Workflows aufbauen."
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - RcloneView
  - cloud-storage
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# RcloneView Virtual Remotes: Mit Combine, Union und Alias einen einheitlichen Multi-Cloud-Arbeitsbereich erstellen

> Multi-Cloud-Wildwuchs macht es schwer, Ordner wiederzufinden. Virtual Remotes in RcloneView lassen Sie Ansichten vereinheitlichen, ohne auch nur eine einzige Datei zu verschieben oder zu duplizieren.

Virtual Remotes gehören zu den schnellsten Wegen, um Ihren Multi-Cloud-Workflow aufzuräumen. Statt zwischen Tabs zu wechseln oder Jobs neu zu konfigurieren, können Sie eine virtuelle Ansicht erstellen, die auf vorhandene Remotes und Ordner verweist. Ihre Originaldaten bleiben genau dort, wo sie sind, aber Ihr Arbeitsbereich wird leichter zu navigieren und zu automatisieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Virtual Remotes wichtig sind

- Hören Sie auf, sich bei jedem Job oder Ordnervergleich durch tiefe Pfade zu graben.
- Präsentieren Sie mehrere Clouds als einen einzigen Arbeitsbereich, ohne Daten zu kopieren.
- Halten Sie Ihre Organisation über Explorer, Compare, Sync und Jobs hinweg konsistent.

## Was sind Virtual Remotes in RcloneView?

Virtual Remotes setzen auf bestehenden Remotes und Ordnern auf. Sie speichern selbst keine Daten. Stattdessen verweisen sie auf Orte, die Sie bereits besitzen, und präsentieren diese als neue, übersichtlichere Ansicht.

Erstellen Sie sie über **New Remote → Virtual**:

- **Alias**: eine Verknüpfung zu einem tief verschachtelten Ordner.
- **Combine**: eine einzelne Ansicht, die mehrere Ordner nebeneinander auflistet.
- **Union**: eine einzelne zusammengeführte Ansicht, die mehrere Ordner miteinander vermischt.

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Alias Remote: sofortiger Zugriff auf tief verschachtelte Ordner

**Am besten geeignet für**: Sprungmarken zu Ordnern, die Sie täglich öffnen.

Alias ist ein Lesezeichen. Es öffnet einen bestimmten Ordner sofort, was sich perfekt für wiederkehrende Jobs oder gemeinsam genutzte Team-Pfade eignet.

Beispiel: Setzen Sie ein Lesezeichen für einen gemeinsamen Team-Ordner wie `Drive:Team/Projects/Client-A` und öffnen Sie ihn als `Alias_ClientA`.

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

Anleitung: [/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Combine Remote: eine Ansicht, mehrere Ordner

**Am besten geeignet für**: Dashboards und Projektsammlungen.

Combine zeigt Ordner innerhalb eines einzigen Remotes nebeneinander an. Jeder Ordner behält seine ursprüngliche Struktur, aber Sie durchsuchen sie an einem Ort.

Beispiel: Erstellen Sie ein `Marketing_Assets`-Combine-Remote, das enthält:

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

Anleitung: [/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Union Remote: ein zusammengeführter Ordner über mehrere Clouds hinweg

**Am besten geeignet für**: gepoolte Archive oder Multi-Source-Ingestion.

Union führt mehrere Ordner zu einer vermischten Ansicht zusammen. Das ist ideal, wenn Sie möchten, dass alles wie ein einziger Ordner aussieht, selbst wenn die Dateien in verschiedenen Clouds liegen.

Beispiel: Kombinieren Sie monatliches Rohmaterial aus zwei Remotes zu einer einzigen `Raw_Footage`-Ansicht.

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

Anleitung: [/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## Kurzer Entscheidungsleitfaden: Alias vs. Combine vs. Union

| Bedarf | Wahl | Warum |
| --- | --- | --- |
| Schnell zu einem tief verschachtelten Ordner springen | **Alias** | Einzelne Verknüpfung zu einem bestimmten Pfad |
| Mehrere Ordner nebeneinander sehen | **Combine** | Erhält separate Ordnerstruktur |
| Mehrere Ordner als einen behandeln | **Union** | Zusammengeführte Ansicht für gepoolte Daten |

## Praktische Workflows mit Virtual Remotes

- **Vor der Synchronisation vergleichen**: Führen Sie Compare auf einer Combine- oder Union-Ansicht aus, um zunächst Unterschiede zu sehen.  
  Anleitung: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **Über mehrere Quellen hinweg synchronisieren**: Synchronisieren Sie ein Union-Remote mit einem Backup-Ziel, um ein zusammengeführtes Archiv zu spiegeln.  
  Anleitung: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **Jobs einmal speichern**: Verwenden Sie den Job Manager, um eine Virtual-Remote-Synchronisation zu planen und automatisch laufen zu lassen.  
  Anleitung: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **Optionales Einbinden (Mount)**: Binden Sie ein Virtual Remote ein (mount) und durchsuchen Sie es wie ein lokales Laufwerk.  
  Anleitung: [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## Best Practices und Namenskonventionen

- Verwenden Sie klare Präfixe: `Alias_ProjectX`, `Combine_Marketing`, `Union_Archive`.
- Halten Sie Quellhinweise in Job-Namen oder Job-Manager-Beschreibungen fest.
- Vermeiden Sie es, nicht zusammengehörige Ordner in einer Union zu mischen, um Verwirrung zu vermeiden.
- Verwenden Sie Combine, wenn Sie Klarheit wollen, und Union, wenn Sie Einfachheit wollen.

## Fazit

Virtual Remotes reduzieren Reibungsverluste in Multi-Cloud-Workflows. Mit Alias, Combine und Union bauen Sie einen sauberen Arbeitsbereich auf, ohne Daten zu kopieren, sodass Teams schneller vorankommen und ihre Struktur intakt halten können. Probieren Sie es noch heute aus und erleben Sie, wie viel einfacher Ihre tägliche Navigation wird.

