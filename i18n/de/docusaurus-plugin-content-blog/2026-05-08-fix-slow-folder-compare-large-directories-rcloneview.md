---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "Langsamen Ordnervergleich bei großen Verzeichnissen beheben — RcloneView-Anleitung"
authors:
  - jay
description: "Beschleunigen Sie Ordnervergleich-Vorgänge bei großen Verzeichnissen in RcloneView — mit Informationen zu Checker-Nebenläufigkeit, Filterregeln und Strategien zum effizienten Vergleich von Millionen Dateien."
keywords:
  - langsamer Ordnervergleich RcloneView
  - langsamen Cloud-Verzeichnisvergleich beheben
  - RcloneView Ordnervergleich große Dateien
  - Cloud-Ordnervergleich beschleunigen
  - RcloneView Vergleichsleistung
  - großer Verzeichnisvergleich Cloud
  - Zeitüberschreitung beim Ordnervergleich beheben
  - RcloneView-Vergleich optimieren
tags:
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Langsamen Ordnervergleich bei großen Verzeichnissen beheben — RcloneView-Anleitung

> Der Vergleich von Verzeichnissen mit Zehntausenden von Dateien kann langsam sein, wenn Ihre Einstellungen nicht optimiert sind. So stimmen Sie den Ordnervergleich von RcloneView für große Cloud-Verzeichnisse ab.

Der Ordnervergleich von RcloneView ist eine der leistungsstärksten Funktionen — er zeigt genau, welche Dateien zwischen zwei Speicherorten unterschiedlich sind, welche nur auf einer Seite existieren und welche identisch sind. Der Vergleich zweier S3-Buckets mit 500.000 Dateien oder eines NAS-Verzeichnisses mit einem Cloud-Archiv kann jedoch extrem langsam sein, wenn die Konfiguration nicht auf die Arbeitslast abgestimmt ist. Diese Anpassungen verkürzen die Vergleichszeit von Stunden auf Minuten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Den Umfang vor dem Vergleich mit Filtern reduzieren

Die schnellste Möglichkeit, einen Ordnervergleich zu beschleunigen, besteht darin, die Anzahl der zu vergleichenden Dateien zu reduzieren. Verwenden Sie **Ordnervergleich mit Filter** (PLUS-Lizenz), um Dateitypen auszuschließen, die Sie nicht überprüfen müssen — schließen Sie beispielsweise `.tmp`-, `.log`- und `.DS_Store`-Dateien aus, die Ihre Bewertung der Datenintegrität nicht beeinflussen. Sie können auch nach Ordnernamen filtern, um nur bestimmte Unterverzeichnisse eines großen Baums zu vergleichen.

Die Filtersyntax folgt den Filterregeln von rclone: `.tmp` schließt jede Datei mit dieser Erweiterung aus, `/.git/*` schließt Dateien in einem Root-`.git`-Verzeichnis aus, und `/archive/` überspringt einen gesamten Ordner der obersten Ebene. Die Anwendung dieser Regeln vor dem Start des Vergleichs reduziert die Anzahl der Elemente, die rclone auflisten und hashen muss, erheblich.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## Checker-Nebenläufigkeit für langsame Backends anpassen

Die Job-Einstellungen von RcloneView enthalten **Number of equality checkers**, die standardmäßig auf 8 gesetzt ist. Bei langsamen Cloud-Backends (mit hoher Latenz oder strengen API-Ratenlimits) kann dieser hohe Standardwert dazu führen, dass sich Checker stauen, während sie auf API-Antworten warten — was paradoxerweise alles verlangsamt. Bei Anbietern wie Google Drive, OneDrive oder langsamen WebDAV-Servern sollten Sie die Anzahl der Checker auf 2–4 reduzieren.

Umgekehrt kann bei schnellen S3-kompatiblen Backends wie Wasabi oder Cloudflare R2 eine Erhöhung der Checker auf 16 oder mehr das Auflisten großer Buckets deutlich beschleunigen. Testen Sie verschiedene Werte — der optimale Wert hängt vom Anbieter und den Netzwerkbedingungen ab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## Nur-Größe-Modus für erste Durchläufe verwenden

Standardmäßig vergleicht rclone Dateien sowohl nach Größe als auch nach Änderungsdatum. Für einen schnellen ersten Durchlauf über ein sehr großes Verzeichnis können Sie den Größenvergleich verwenden, um offensichtliche Abweichungen zu identifizieren (Dateien, die nur auf einer Seite existieren, oder Dateien mit eindeutig unterschiedlichen Größen), ohne den Overhead einer Prüfsummenverifizierung in Kauf zu nehmen.

In RcloneView können Sie `--size-only` als Global Rclone Flag unter **Settings → Embedded Rclone → Global Rclone Flags** für eine Vergleichssitzung angeben. Dies tauscht etwas Genauigkeit gegen Geschwindigkeit ein — verwenden Sie es für große Erstprüfungen und führen Sie anschließend einen vollständigen Prüfsummenvergleich für verdächtige Dateien durch.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verwenden Sie **Ordnervergleich mit Filter** (PLUS), um vor dem Vergleich irrelevante Dateitypen auszuschließen.
3. Reduzieren Sie die Checker-Nebenläufigkeit bei langsamen Backends auf 2–4; erhöhen Sie sie bei schnellen S3-Anbietern.
4. Verwenden Sie den Nur-Größe-Modus für schnelle Erstprüfungen sehr großer Verzeichnisse.

Mit der richtigen Konfiguration skaliert der Ordnervergleich auf Millionen von Dateien über Cloud-Anbieter hinweg, ohne unnötige Verzögerungen.

---

**Weiterführende Anleitungen:**

- [Leitfaden zum Ordnervergleich — Unterschiede mit RcloneView erkennen](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Filterregeln und selektive Synchronisation mit RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Integrität von Cloud-Dateien mit RcloneView prüfen und verifizieren](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
