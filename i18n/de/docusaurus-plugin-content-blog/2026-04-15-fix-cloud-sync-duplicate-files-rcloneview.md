---
slug: fix-cloud-sync-duplicate-files-rcloneview
title: "Cloud-Synchronisation erstellt doppelte Dateien beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Behebe eine Cloud-Synchronisation, die doppelte Dateien erstellt — identifiziere die Ursachen, entferne Duplikate und konfiguriere RcloneView-Synchronisationsjobs, um ein erneutes Auftreten zu verhindern."
keywords:
  - cloud sync duplicates
  - sync creating duplicate files
  - duplicate file fix
  - RcloneView deduplication
  - cloud backup duplicates
  - sync conflict files
  - fix duplicate uploads
  - cloud storage cleanup
  - rclone duplicate fix
  - cloud sync misconfiguration
tags:
  - troubleshooting
  - tips
  - duplicates
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Synchronisation erstellt doppelte Dateien beheben — Lösung mit RcloneView

> Eine Cloud-Synchronisation, die doppelte Dateien erzeugt, deutet auf einen bestimmten Konfigurationsfehler hin — die Job-Typ-Einstellungen von RcloneView und der Ordnervergleich machen es einfach, dies zu diagnostizieren, zu bereinigen und ein erneutes Auftreten zu verhindern.

Cloud-Synchronisationsvorgänge, die doppelte Dateien erzeugen — Kopien mit demselben Namen, aber unterschiedlichen Änderungszeitstempeln, oder Dateien mit Suffixen wie `-copy` oder `(1)` — erhöhen die Speicherkosten bei jedem Durchlauf und weisen auf ein zugrunde liegendes Konfigurationsproblem hin. RcloneView nutzt die deterministische Synchronisations-Engine von rclone, und wenn Duplikate auftreten, liegt die Ursache fast immer in einer falschen Job-Typ-Zuordnung, widersprüchlichen Vorgängen oder Konflikten bei der bidirektionalen Synchronisation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die Synchronisation Duplikate erzeugt

Die häufigste Ursache: Die Verwendung des Job-Typs **Kopieren** anstelle von **Synchronisation**. Ein Kopierjob fügt am Ziel immer Dateien hinzu — wenn das Ziel bereits Dateien aus einem vorherigen Durchlauf enthält, erzeugt ein zweiter Kopiervorgang Duplikate mit neueren Zeitstempeln oder angehängten Suffixen. Der Wechsel zum Job-Typ **Synchronisation** im **Job Manager** stellt sicher, dass das Ziel die Quelle exakt widerspiegelt: Überzählige Dateien am Ziel werden entfernt, und es werden nur die Unterschiede übertragen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Sync job type in RcloneView Job Manager to prevent duplicates" class="img-large img-center" />

Der **Bidirection**-Synchronisationsmodus von RcloneView (derzeit Beta) kann Konfliktkopien erzeugen, wenn beide Seiten dieselbe Datei zwischen den Synchronisationsläufen ändern. Rclone erstellt dann auf einer Seite eine Konfliktkopie, um beide Versionen zu erhalten. Für produktive Arbeitsabläufe verhindert die einseitige Synchronisation (der Standardmodus „Modifying destination only") dies vollständig — verwende die bidirektionale Synchronisation nur, wenn sie wirklich benötigt wird.

## Vorhandene Duplikate finden und entfernen

Verwende den **Ordnervergleich** von RcloneView, um Dateien mit identischem Namen, aber unterschiedlichem Inhalt an zwei Speicherorten zu identifizieren. Der Filter „different files" hebt Dateien hervor, deren Größe nicht übereinstimmt, während der Filter „same files" exakte Übereinstimmungen bestätigt. Dateien, die auf beiden Seiten vorhanden sind, aber nicht dupliziert sein sollten, können mit der Löschfunktion des Ordnervergleichs von einer Seite entfernt werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify duplicate files in RcloneView" class="img-large img-center" />

Um eine große Anzahl vorhandener Duplikate innerhalb einer einzelnen Cloud zu bereinigen, kannst du im integrierten **Terminal**-Tab von RcloneView `rclone dedupe` mit den passenden Deduplizierungsstrategie-Flags ausführen — dabei werden Dateien mit identischem Inhalt unabhängig vom Namen erkannt und nur eine Kopie behalten. Das Terminal bietet vollen rclone-CLI-Zugriff, ohne die RcloneView-Oberfläche zu verlassen.

## Synchronisation konfigurieren, um ein erneutes Auftreten zu verhindern

Überprüfe im **Job Manager** folgende Einstellungen für ein sauberes, duplikatfreies Synchronisationsverhalten:
- Verwende den Job-Typ **Synchronisation** für Spiegelungsvorgänge (nicht Kopieren)
- Setze die Synchronisationsrichtung auf **„Modifying destination only"** (einseitig) für ein stabiles Verhalten
- Aktiviere **Dry Run**, bevor du den ersten Durchlauf auf einem neuen Ziel startest, um die Liste der Vorgänge zu überprüfen

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing clean sync runs with no duplicates in RcloneView" class="img-large img-center" />

Das Aktivieren des Checksummenvergleichs in den erweiterten Einstellungen macht die Synchronisation präziser — Dateien werden sowohl anhand von Hash als auch Größe verglichen statt nur anhand von Zeitstempel und Größe, wodurch verhindert wird, dass Dateien mit identischer Größe, aber unterschiedlichem Inhalt als gleich behandelt werden.

## Erste Schritte

1. **Lade RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Identifiziere Jobs im Job Manager, die Duplikate erzeugen — wechsle **Kopieren**-Jobs bei Bedarf zu **Synchronisation**.
3. Verwende den **Ordnervergleich**, um vorhandene Duplikate zwischen Quelle und Ziel zu finden und zu entfernen.
4. Aktiviere **Dry Run**, bevor du Jobs auf neuen Zielen ausführst, um das Verhalten vor der Ausführung zu überprüfen.

Doppelte Dateien bei der Cloud-Synchronisation sind ein lösbares Konfigurationsproblem — die richtigen Einstellungen für Job-Typ und Synchronisationsrichtung in RcloneView verhindern, dass sie überhaupt erst entstehen.

---

**Verwandte Anleitungen:**

- [Doppelte Dateien im Cloud-Speicher mit RcloneView finden und entfernen](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [Sync vs. Copy vs. Move — Unterschied erklärt mit RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Dry Run — Synchronisation vor der Übertragung mit RcloneView in der Vorschau ansehen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
