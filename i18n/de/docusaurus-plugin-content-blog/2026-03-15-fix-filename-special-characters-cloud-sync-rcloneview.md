---
slug: fix-filename-special-characters-cloud-sync-rcloneview
title: "Fehler bei zu langen Dateinamen und Sonderzeichen bei der Cloud-Synchronisation beheben — RcloneView-Anleitung"
authors:
  - tayson
description: "Cloud-Synchronisation scheitert wegen Dateinamen? Lange Pfade, Sonderzeichen und Kodierungskonflikte verursachen versteckte Fehler. Erfahren Sie, wie Sie diese Probleme in RcloneView diagnostizieren und beheben."
keywords:
  - Dateiname zu lang Cloud
  - Sonderzeichen Cloud-Synchronisation
  - Fehler bei Dateinamen bei Cloud-Synchronisation
  - Fehler Pfad zu lang
  - rclone Dateinamenkodierung
  - Dateinamenlimit Cloud-Speicher
  - Unicode-Dateiname Cloud
  - OneDrive Pfadlängenlimit
  - Google Drive Dateinamenprobleme
  - Cloud-Synchronisationsfehler beheben
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fehler bei zu langen Dateinamen und Sonderzeichen bei der Cloud-Synchronisation beheben — RcloneView-Anleitung

> Ihr Synchronisationsjob schlägt bei 47 Dateien fehl. Die Fehlermeldung lautet „Dateiname zu lang" oder „ungültiges Zeichen". Die Dateien sehen auf Ihrer Seite völlig normal aus. Willkommen bei der providerübergreifenden Kompatibilität von Dateinamen.

Jeder Cloud-Anbieter hat unterschiedliche Regeln für Dateinamen. Was bei Google Drive völlig gültig ist, kann bei OneDrive unzulässig sein. Ein Pfad, der bei S3 funktioniert, kann das Zeichenlimit bei Dropbox überschreiten. Bei der Synchronisation zwischen Anbietern führen diese Unstimmigkeiten zu frustrierenden Fehlern, die ganze Übertragungsjobs blockieren können. Diese Anleitung behandelt die häufigsten Probleme und zeigt, wie Sie sie beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Probleme mit Dateinamen

### Pfadlängenlimits

| Anbieter | Maximale Pfadlänge |
|----------|----------------|
| OneDrive | 400 Zeichen |
| SharePoint | 400 Zeichen |
| Google Drive | 32.768 Zeichen |
| S3 | 1.024 Zeichen |
| Dropbox | 260 Zeichen |
| Lokal (Windows) | 260 Zeichen (Standard) |

Tief verschachtelte Ordner mit langen Namen überschreiten schnell die Limits von OneDrive oder Dropbox.

### Unzulässige Zeichen

| Zeichen | Google Drive | OneDrive | S3 | Dropbox |
|-----------|-------------|----------|-----|---------|
| `\` | Erlaubt | Nicht erlaubt | Erlaubt | Nicht erlaubt |
| `?` | Erlaubt | Nicht erlaubt | Erlaubt | Nicht erlaubt |
| `*` | Erlaubt | Nicht erlaubt | Erlaubt | Nicht erlaubt |
| `:` | Erlaubt | Nicht erlaubt | Erlaubt | Nicht erlaubt |
| `<` `>` `\|` | Erlaubt | Nicht erlaubt | Erlaubt | Nicht erlaubt |

Dateien, die auf Google Drive mit `?` oder `:` im Namen erstellt wurden, schlagen bei der Synchronisation zu OneDrive fehl.

### Nachgestellte Leerzeichen und Punkte

OneDrive und Windows lehnen Dateinamen ab, die mit Leerzeichen oder Punkten enden. Google Drive erlaubt sie. Dies führt zu unsichtbaren Synchronisationsfehlern.

### Unicode- und Kodierungsprobleme

Nicht-ASCII-Zeichen (Japanisch, Koreanisch, Chinesisch, Emoji) funktionieren bei den meisten Anbietern, können aber bei älteren Systemen oder bestimmten S3-kompatiblen Anbietern Probleme verursachen.

## So diagnostizieren Sie das Problem

### Jobverlauf prüfen

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Find filename errors in job history" class="img-large img-center" />

Der Jobverlauf zeigt genau, welche Dateien fehlgeschlagen sind und warum. Achten Sie auf Fehlermeldungen mit „invalid", „too long" oder „not allowed".

### Problematische Dateien identifizieren

Mit dem Terminal von RcloneView können Sie `rclone check` mit ausführlicher Ausgabe ausführen, um alle Dateien aufzulisten, die fehlschlagen würden, bevor Sie die Übertragung starten.

## Lösungen

### Problematische Dateien an der Quelle umbenennen

Die sauberste Lösung: Benennen Sie Dateien um, um unzulässige Zeichen zu entfernen oder Pfade zu kürzen, bevor Sie synchronisieren.

### Kodierungsoptionen von rclone nutzen

Rclone kann unzulässige Zeichen während der Übertragung automatisch kodieren. Konfigurieren Sie dies in den Remote-Einstellungen von RcloneView, um die providerübergreifende Kompatibilität zu gewährleisten.

### Tief verschachtelte Ordnerstrukturen abflachen

Wenn die Pfadlänge das Problem ist, organisieren Sie tief verschachtelte Ordner in eine flachere Struktur um.

### Ordnervergleich nutzen, um Unstimmigkeiten zu finden

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find filename mismatches" class="img-large img-center" />

Der Ordnervergleich hebt Dateien hervor, die an der Quelle, aber nicht am Ziel vorhanden sind — häufig genau jene, die wegen Problemen mit Dateinamen fehlgeschlagen sind.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Führen Sie zuerst einen Testlauf** mit einem kleinen Ordner durch.
3. **Prüfen Sie den Jobverlauf** auf Fehler im Zusammenhang mit Dateinamen.
4. **Beheben Sie Dateinamen** an der Quelle oder konfigurieren Sie die Kodierung.
5. **Führen Sie den Vorgang erneut aus und überprüfen Sie ihn** mit dem Ordnervergleich.

Die Lösung ist meist einfacher, als die Fehlermeldung vermuten lässt.

---

**Weiterführende Anleitungen:**

- [Fehler „Zugriff verweigert" beheben](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Cloud-API-Ratenlimits erklärt](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)
- [Rclone-Fehler beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
