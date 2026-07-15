---
sidebar_position: 14
description: Kopieren Sie vollständige Ordnerpfade – einschließlich des Remote-Namens – in einem Schritt aus der RcloneView-Pfadleiste für präzise Befehle und Automatisierung.
keywords:
  - rcloneview
  - rclone
  - Pfad kopieren
  - Remote-Pfad
  - Pfadleiste
  - Automatisierung
  - Terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# Verwendung der Funktion „Vollständigen Pfad kopieren" in RcloneView

Mit der Funktion **Vollständigen Pfad kopieren** können Sie den gesamten Ordnerpfad – optional mit dem Remote-Namen – in einer einzigen Aktion erfassen. Sie eignet sich perfekt zum Schreiben von `rclone`-Befehlen, zum Durchführen von Terminal-Tests, zum Teilen genauer Cloud-Pfade und zur Vermeidung von Fehlern in Skripten.

---

## Wo Sie „Vollständigen Pfad kopieren" finden

Sie können auf „Vollständigen Pfad kopieren" über die **Pfadleiste** oben im Remote-Datei-Browser zugreifen.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

Klicken Sie mit der rechten Maustaste auf die Pfadleiste, um diese Optionen anzuzeigen:

- **Ausschneiden**
- **Kopieren**
- **Einfügen**
- **Vollständigen Pfad kopieren (mit Remote)**
- **Alle auswählen**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## Alle auswählen — Den gesamten Pfad markieren

Wenn Sie **Alle auswählen** wählen, wird der gesamte Text im Pfadfeld markiert, sodass Sie ihn schnell kopieren können.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

Nach dem Kopieren und Einfügen (z. B. in Notepad) erscheint der lokale Ordnername (z. B. `Meet recordings`) genau wie angezeigt.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## Vollständigen Pfad kopieren (mit Remote) — Remote + Ordnerpfad

**Vollständigen Pfad kopieren (mit Remote)** erfasst:

- Remote-Namen
- Vollständigen Ordnerpfad
- Exaktes `remote:path`-Format für `rclone`

Beispielergebnis:

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

Beim Einfügen in Notepad wird der einsatzbereite Pfad angezeigt:  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

Dieses Format funktioniert direkt in Befehlen wie:

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## Wann Sie diese Funktion verwenden sollten

- **Schreiben von `rclone`-Befehlen**: Fügen Sie präzise Remote-Pfade sofort ein.
- **Testen von Pfaden im Terminal**: Verwenden Sie `remote:path`, ohne erneut zu tippen.
- **Vermeiden von Skriptfehlern**: Verhindern Sie Tippfehler in der Automatisierung oder bei Batch-Jobs.
- **Teilen von Pfaden mit Teammitgliedern**: Senden Sie präzise Speicherorte für Support oder Zusammenarbeit.

---

## Kurzübersicht

| Aktion                            | Was sie bewirkt                              |
| ---------------------------------- | ----------------------------------------- |
| **Kopieren**                      | Kopiert den ausgewählten Text in der Pfadleiste |
| **Alle auswählen**                | Markiert den gesamten Pfadtext            |
| **Vollständigen Pfad kopieren (mit Remote)** | Kopiert im Format `remote:path` (empfohlen) |
| **Einfügen**                      | Fügt Zwischenablagetext in die Pfadleiste ein |

Die Funktion „Vollständigen Pfad kopieren" wirkt einfach, ist aber für Automatisierung, Skripterstellung und präzise Übertragungen einer der schnellsten Produktivitätsbooster in RcloneView.
