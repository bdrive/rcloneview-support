---
slug: folder-compare-size-change-discovery-rcloneview
title: "Die größten Änderungen finden — Folder Compare Größenänderungs-Erkennung in RcloneView"
authors:
  - steve
description: "Nutzen Sie die Größenänderungs-Erkennungstools von RcloneViews Folder Compare, um herauszufinden, welche Cloud-Ordner sich am meisten oder am schnellsten geändert haben oder vor der Synchronisation überprüft werden müssen."
keywords:
  - Ordnervergleich Größenänderungs-Erkennung
  - RcloneView Ordnervergleich
  - größte Ordneränderung
  - Cloud-Speicher-Audit
  - Cloud-Ordner vergleichen
  - Cloud-Dateiänderungen erkennen
  - Cloud-Backup-Überprüfung
  - Ordnergrößen-Änderungsverfolgung
  - Cloud-Synchronisationsüberwachung
  - Cloud-Speicher-Änderungserkennung
tags:
  - RcloneView
  - feature
  - compare
  - folder-comparison
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Die größten Änderungen finden — Folder Compare Größenänderungs-Erkennung in RcloneView

> Wenn ein Cloud-Baum Tausende von Unterordnern hat, ist das Auffinden der tatsächlich geänderten Ordner der schwierige Teil — die Größenänderungs-Erkennungstools von RcloneView finden sie für Sie.

Jeder, der ein großes Multi-Cloud-Archiv verwaltet, weiß, dass das eigentliche Problem nicht das Durchführen eines Vergleichs ist — es ist das Lesen der Ergebnisse. Ein Ordnerbaum mit einigen Tausend Unterordnern kann einen Vergleichsbericht erzeugen, der zu lang ist, um ihn manuell zu durchsuchen. Die Folder-Compare-Ansicht von RcloneView enthält dedizierte Größenänderungs-Erkennungssteuerungen, die direkt zu den Ordnern springen, die eine Untersuchung wert sind, anstatt Sie durch eine undifferenzierte Dateiliste scrollen zu lassen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was die Größenänderungs-Erkennung tatsächlich leistet

Mit Folder Compare können Sie zwei Ordner — lokal oder in der Cloud — visuell nebeneinander vergleichen, mit Filtern für nur-links-vorhandene Dateien, nur-rechts-vorhandene Dateien, identische Dateien, abweichende Dateien und fehlerhafte Dateien. Zusätzlich zu dieser Filterung bietet RcloneView Navigations-Shortcuts, die Ordner nach Dateianzahl-Änderung oder nach Größenänderung finden und direkt zum Ordner mit der größten Änderung, der nächstgrößeren, der kleinsten Änderung oder der nächstkleineren springen.

Genau dieser letzte Satz an Steuerungen unterscheidet RcloneView von einer einfachen Diff-Ansicht. Anstatt jeden Unterordner durchzulesen, um herauszufinden, wo sich der Großteil der Änderung ereignet hat, lassen Sie sich vom Vergleich direkt dorthin bringen. Das ist besonders nützlich bei Remotes, bei denen Änderungen von Natur aus ungleichmäßig verteilt sind — einer gemeinsam genutzten Medienbibliothek, einem Engineering-Repository oder einer Kundenordnerstruktur, in der 90 % der Änderungen in einer Handvoll Unterverzeichnissen stattfinden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting comparison result filters in RcloneView Folder Compare" class="img-large img-center" />

## Ein praktisches Szenario

Stellen Sie sich ein Videoproduktionsstudio mit einem gemeinsam genutzten Cloud-Archiv vor, das Hunderte von Projektordnern über Google Drive und einen Backblaze-B2-Backup-Bucket hinweg enthält. Nach einer arbeitsreichen Woche voller Schnitte müssen sie wissen, welche Projektordner sich tatsächlich geändert haben, bevor sie eine vollständige Synchronisation durchführen — nicht um blind darauf zu vertrauen, dass der letzte automatisierte Job alles erfasst hat, sondern um es zu überprüfen. Das Ausführen von Folder Compare und der direkte Sprung zur „größten Änderung" bringt sofort die drei oder vier aktiven Projekte zum Vorschein, während Dutzende unberührte Archivordner nicht im Weg stehen. RcloneView mountet und synchronisiert außerdem 90+ Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux, sodass derselbe Workflow funktioniert, unabhängig davon, ob die Gegenseite eine andere Cloud, ein NAS oder ein lokales Laufwerk ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing cloud-to-cloud folder contents in RcloneView" class="img-large img-center" />

## Erkenntnisse in Handlung umsetzen

Sobald Sie einen geänderten Ordner gefunden haben, ermöglicht Ihnen dieselbe Compare-Ansicht, direkt darauf zu reagieren: nach rechts kopieren, nach links kopieren oder ausgewählte Elemente löschen, ohne den Vergleich zu verlassen. Auf diese Weise kopierte Dateien werden automatisch als gleich markiert, sodass ein erneuter Vergleichslauf den korrigierten Zustand widerspiegelt, anstatt denselben Ordner erneut zu markieren. Für wiederkehrende Audits kombinieren Sie einen manuellen Compare-Durchlauf mit einem geplanten Synchronisationsjob, sodass die Größenerkennung zu einer Stichprobenkontrolle wird und nicht zur einzigen Verteidigungslinie.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a folder compare and sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie die Compare-Ansicht über den Home-Tab und wählen Sie Ihre zwei Quellordner aus.
3. Führen Sie den Vergleich aus und verwenden Sie dann die Navigation für größte/kleinste Änderung, um zu den relevanten Ordnern zu springen.
4. Kopieren oder löschen Sie direkt aus der Ergebnisansicht, führen Sie dann Compare erneut aus, um zu bestätigen, dass die Ordner nun als gleich angezeigt werden.

Für alle, die einen Cloud-Baum verwalten, der zu groß ist, um ihn mit bloßem Auge zu erfassen, verwandelt die Größenerkennung einen überwältigenden Vergleich in eine kurze, priorisierte Liste zu prüfender Ordner.

---

**Verwandte Anleitungen:**

- [Anleitung zum Ordnervergleich — Unterschiede mit RcloneView erkennen](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Ordnervergleich mit Filter in RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Dry Run — Vorschau der Cloud-Synchronisation vor der Übertragung](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
