---
slug: fix-cloud-sync-case-sensitivity-conflicts-rcloneview
title: "Konflikte durch Groß-/Kleinschreibung bei der Cloud-Synchronisation beheben — doppelte Dateien mit RcloneView auflösen"
authors:
  - tayson
description: "Verhindern Sie, dass Cloud-Synchronisationsjobs doppelte Dateien erzeugen, wenn unter Windows oder macOS die Groß-/Kleinschreibung ignoriert wird, während der Cloud-Speicher sie berücksichtigt — mit RcloneView."
keywords:
  - cloud sync case sensitivity
  - duplicate files cloud sync
  - case sensitive filenames cloud storage
  - fix cloud sync duplicates
  - windows macos case insensitive sync
  - cloud storage filename conflicts
  - rcloneview sync errors
  - resolve cloud sync duplicate uploads
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Konflikte durch Groß-/Kleinschreibung bei der Cloud-Synchronisation beheben — doppelte Dateien mit RcloneView auflösen

> „Report.pdf" und „report.pdf" sehen für Windows und macOS identisch aus, sind für die meisten Cloud-Speicher jedoch zwei verschiedene Dateien — eine Diskrepanz, die Ordner still und leise mit Duplikaten füllt, bis ein Synchronisationsjob entsteht, der genau das erkennt.

Windows und macOS formatieren lokale Laufwerke standardmäßig so, dass die Groß-/Kleinschreibung ignoriert wird, sodass `Invoice.pdf` und `invoice.pdf` auf der Festplatte als dieselbe Datei behandelt werden. Google Drive, Dropbox, Amazon S3 und die meisten anderen Cloud-Backends unterscheiden hingegen zwischen Groß- und Kleinschreibung und speichern beide bereitwillig als separate Objekte. Das Ergebnis sind Ordner, die sich nach und nach mit nahezu identischen Duplikaten füllen, Synchronisationsjobs, die scheinbar aus dem Nichts Kopien „erzeugen", oder Überschreibungsschleifen, bei denen eine Umbenennung auf einem Gerät nie ganz zur bereits in der Cloud vorhandenen Version passt. RcloneView ändert nicht das Verhalten der zugrunde liegenden Dateisysteme, gibt Ihnen aber die Übersicht und die Kontrollmöglichkeiten, um solche Konflikte zu erkennen, bevor daraus ein Durcheinander wird.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Konflikte durch Groß-/Kleinschreibung mit dem Ordnervergleich erkennen

Der schnellste Weg, um festzustellen, ob es sich tatsächlich um ein Problem mit der Groß-/Kleinschreibung und nicht um einen echten Synchronisationsfehler handelt, ist der Ordnervergleich (Folder Compare) zwischen dem lokalen Ordner und dem Cloud-Ziel. Dateien, die sich nur durch die Groß-/Kleinschreibung unterscheiden, erscheinen auf jeder Seite als separate Einträge, anstatt als „identisch" erkannt zu werden — das ist das verräterische Zeichen. Ein echtes Duplikat mit unterschiedlichem Inhalt zeigt unterschiedliche Dateigrößen, während eine reine Diskrepanz bei der Groß-/Kleinschreibung oft zwei Einträge mit identischer Größe, aber unterschiedlichen Namen anzeigt. Die Filter „Nur unterschiedliche Dateien anzeigen" und „Nur links / nur rechts anzeigen" in der Vergleichsansicht erleichtern es, solche Paare gezielt zu isolieren, statt den gesamten Ordnerbaum manuell durchzuscrollen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify case sensitivity duplicates between local and cloud storage" class="img-large img-center" />

## Überschreibungsschleifen mit Einweg-Synchronisation und Prüfsummen vermeiden

Bei der bidirektionalen Synchronisation (Beta) richten Konflikte durch Groß-/Kleinschreibung den größten Schaden an, da jede Seite eine umbenannte Datei sowohl als neuen Upload als auch als veraltete Löschung interpretieren kann. Wechselt man den betroffenen Job zur einseitigen Synchronisation „Nur Ziel ändern", entfällt diese Mehrdeutigkeit — eine Seite ist stets maßgeblich, sodass eine reine Umbenennung durch Groß-/Kleinschreibung an der Quelle das Ziel einfach aktualisiert, anstatt ein Duplikat auszulösen. Auch die Aktivierung des Prüfsummenvergleichs in Schritt 2 des Synchronisationsassistenten hilft, da dabei Dateien anhand von Hash und Größe statt nur anhand des Dateinamens verglichen werden — das reduziert Fehlalarme, wenn Unterschiede in der Groß-/Kleinschreibung mit echten inhaltlichen Änderungen zusammentreffen. RcloneView bindet über 90 Anbieter ein UND synchronisiert sie aus einem einzigen Fenster heraus, unter Windows, macOS und Linux — das erleichtert es zu erkennen, wenn ein Konflikt vom Dateisystemverhalten eines bestimmten Geräts ausgeht.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job with checksum comparison to avoid case sensitivity duplicates" class="img-large img-center" />

## Bestehende Duplikate sicher bereinigen

Sobald Sie Duplikat-Paare durch Groß-/Kleinschreibung mittels Ordnervergleich identifiziert haben, führen Sie vor jedem Löschen immer einen Testlauf (Dry Run) durch — er zeigt genau an, welche Dateien entfernt würden, ohne tatsächlich Änderungen vorzunehmen. Das ist wichtig, da zwei „doppelte" Dateien inhaltlich voneinander abgewichen sein könnten, seit die Diskrepanz bei der Groß-/Kleinschreibung erstmals aufgetreten ist. Nachdem Sie die Ausgabe des Testlaufs geprüft haben, verwenden Sie die Löschfunktion in der Vergleichsansicht, um die veraltete Kopie zu entfernen und die Version mit dem korrekten, aktuellen Dateinamen zu behalten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run before cleaning up case sensitivity duplicate files in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Führen Sie einen Ordnervergleich zwischen dem betroffenen lokalen Ordner und seinem Cloud-Ziel durch.
3. Filtern Sie nach Dateien, die als separate Einträge erscheinen, aber dieselbe Größe haben, um Konflikte durch Groß-/Kleinschreibung zu isolieren.
4. Wechseln Sie den Synchronisationsjob auf Einweg-Synchronisation mit aktiviertem Prüfsummenvergleich, und führen Sie vor dem Bereinigen der Duplikate einen Testlauf durch.

Ein wenig Übersicht verwandelt eine unsichtbare Eigenheit des Dateisystems in ein Problem, das Sie tatsächlich lösen können, statt eines, das im Stillen immer weiter Dateien dupliziert.

---

**Verwandte Anleitungen:**

- [Sonderzeichen in Dateinamen beheben — Probleme bei der Cloud-Synchronisation mit RcloneView lösen](https://rcloneview.com/support/blog/fix-filename-special-characters-cloud-sync-rcloneview)
- [Doppelte Dateien bei der Cloud-Synchronisation beheben — Lösung mit RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-duplicate-files-rcloneview)
- [Testlauf — Cloud-Synchronisation vor der Übertragung mit RcloneView prüfen](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
