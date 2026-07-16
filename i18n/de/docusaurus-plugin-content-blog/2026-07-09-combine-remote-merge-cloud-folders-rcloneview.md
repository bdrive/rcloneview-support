---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine-Remote — Mehrere Cloud-Ordner in RcloneView zu einem Baum zusammenführen"
authors:
  - alex
description: "Nutzen Sie den Combine-Remote von RcloneView, um Ordner verschiedener Cloud-Anbieter in einem einzigen virtuellen Ordnerbaum zusammenzuführen."
keywords:
  - combine remote rclone
  - Cloud-Ordner zusammenführen
  - virtueller Remote RcloneView
  - mehrere Cloud-Speicher vereinen
  - rclone combine backend
  - Multi-Cloud-Ordnerstruktur
  - virtueller Dateibaum Cloud
  - RcloneView virtuelle Remotes
  - Cloud-Speicher-Ordner organisieren
  - anbieterübergreifende Ordnerzusammenführung
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Combine-Remote — Mehrere Cloud-Ordner in RcloneView zu einem Baum zusammenführen

> Schluss mit dem Hin- und Herspringen zwischen fünf Remote-Tabs — der Combine-Remote von RcloneView fügt Ordner aus verschiedenen Cloud-Anbietern zu einem virtuellen Ordnerbaum zusammen.

Stellen Sie sich ein Videoproduktionsstudio vor, das Rohmaterial auf Google Drive, Projektdateien auf Dropbox und fertige Renderings auf Backblaze B2 speichert. Jeder Remote funktioniert für sich genommen einwandfrei, aber "wo ist der finale Schnitt für Projekt X" bedeutet, jedes Mal drei Tabs zu prüfen. Der Combine-Remote von RcloneView — einer der virtuellen Remote-Wrapper von rclone — löst dieses Problem, indem mehrere übergeordnete Ordner als benannte Unterverzeichnisse innerhalb eines einzigen virtuellen Remotes dargestellt werden. So liegt die gesamte Produktion unter einem gemeinsamen Root, ohne dass Dateien physisch verschoben werden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was der Combine-Remote tatsächlich tut

Combine unterscheidet sich von Union, das mehrere Quellen zu einer vereinheitlichten Ansicht zusammenführt, in der Dateien scheinbar ein gemeinsames Verzeichnis teilen. Combine ordnet stattdessen jeden übergeordneten Remote (oder einen bestimmten Unterordner darin) einem benannten Unterverzeichnis im resultierenden virtuellen Baum zu — sodass `footage:` und `renders:` als `production/footage` und `production/renders` unter einem Remote erscheinen, vollständig getrennt, aber gemeinsam durchsuchbar. Nichts wird kopiert oder dupliziert; RcloneView leitet Lese- und Schreibvorgänge in Echtzeit direkt an den ursprünglichen Remote weiter.

<img src="/support/images/en/blog/new-remote.png" alt="Erstellen eines virtuellen Combine-Remotes in RcloneView" class="img-large img-center" />

## Einrichten eines Combine-Remotes in RcloneView

Öffnen Sie im Remote-Tab den Remote-Manager und erstellen Sie einen neuen Remote vom Typ Combine. Ordnen Sie jeden übergeordneten Remote (oder Remote:Pfad) dem Unterverzeichnisnamen zu, unter dem er im kombinierten Baum erscheinen soll, und speichern Sie. Das Ergebnis wird im Explorer-Bereich wie jeder andere Remote angezeigt — klappen Sie ihn auf, und jede zugeordnete Quelle erscheint als eigener Ordner auf oberster Ebene, bereit für dieselben Kopier-, Verschiebe- und Drag-and-Drop-Vorgänge, die Sie auch bei einem nativen Remote verwenden würden. RcloneView bindet über 90 Anbieter aus einem einzigen Fenster ein und synchronisiert sie unter Windows, macOS und Linux, sodass sich ein aus Google-Drive-, Dropbox- und B2-Ordnern erstellter Combine-Remote unabhängig vom verwendeten Betriebssystem identisch verhält.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Durchsuchen der zusammengeführten Ordnerstruktur eines Combine-Remotes" class="img-large img-center" />

## Praktische Anwendungsfälle

Über die Medienproduktion hinaus eignen sich Combine-Remotes für alle, die im Laufe der Zeit organisch Cloud-Konten angesammelt haben — ein Fotostudio mit RAW-Dateien, die auf einen alten Dropbox-Plan und einen neueren S3-Bucket verteilt sind, oder ein kleines Team, dessen Verträge auf SharePoint liegen, während Rechnungen in Google Drive gespeichert sind. Werden beide unter einem Combine-Remote zusammengefasst, kann ein einziger Ordnervergleichs- oder Synchronisationsjob die gesamte logische Struktur ansprechen, statt für jeden Anbieter separate Jobs auszuführen, und der Jobverlauf zeigt eine konsolidierte Spur statt mehrerer voneinander getrennter Protokolle.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines Synchronisationsjobs für einen Combine-Remote" class="img-large img-center" />

## Combine im Vergleich zu anderen virtuellen Remotes

Es ist leicht, zum falschen Wrapper zu greifen. Alias gibt einem tief verschachtelten Pfad nur einen kurzen Namen — ohne jede Zusammenführung. Union vermischt mehrere Quellen zu etwas, das wie ein gemeinsamer Ordner aussieht, nützlich, um kostenlose Speicherkontingente zu bündeln. Crypt verschlüsselt Datei- und Ordnernamen auf Basis eines bestehenden Remotes. Combine ist genau dann die richtige Wahl, wenn Sie verschiedene Quellen getrennt halten, aber von einem einzigen Root aus navigierbar machen möchten.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Einbinden (mount) eines Combine-Remotes aus dem Mount-Manager" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html), falls noch nicht geschehen.
2. Fügen Sie die einzelnen Remotes hinzu, die Sie kombinieren möchten (Remote-Tab > Neuer Remote), falls diese noch nicht konfiguriert sind.
3. Erstellen Sie im Remote-Manager einen neuen Combine-Remote und ordnen Sie jede übergeordnete Quelle einem Unterverzeichnisnamen zu.
4. Durchsuchen Sie den kombinierten Baum im Explorer-Bereich und führen Sie Ihren ersten Vergleichs- oder Synchronisationsjob dagegen aus.

Sobald Ihre verstreuten Cloud-Konten unter einem Combine-Remote liegen, hört die Ordnerstruktur auf, jedes Mal eine Steuer zu sein, die Sie bei der Dateisuche zahlen müssen.

---

**Verwandte Anleitungen:**

- [Union-Remote — Kostenlosen Speicher anbieterübergreifend kombinieren in RcloneView](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [Virtuelle Remotes — Combine, Union und Alias erklärt](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias-Remote — Verknüpfungspfade in RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
