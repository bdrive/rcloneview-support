---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync: Echte bidirektionale Cloud-Synchronisation mit RcloneView"
authors:
  - tayson
description: "Nutzen Sie die bisync-Funktion von rclone über RcloneView, um zwei Cloud-Speicherorte in beide Richtungen synchron zu halten. Erfahren Sie, wann Sie bisync einsetzen sollten, wie Sie es einrichten und wie Sie Konflikte behandeln."
keywords:
  - bisync rcloneview
  - bidirectional cloud sync rclone
  - rclone bisync guide
  - two-way cloud sync
  - sync both directions cloud
  - rcloneview bisync setup
  - rclone bidirectional sync
  - google drive bidirectional sync
  - onedrive two-way sync
  - cloud folder two-way mirror
tags:
  - RcloneView
  - sync
  - cloud-sync
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync: Echte bidirektionale Cloud-Synchronisation mit RcloneView

> Der Standard-rclone-Sync ist einseitig — er sorgt dafür, dass das Ziel dem Quellort entspricht. Bisync geht weiter: Änderungen an einem der beiden Orte werden auf den anderen übertragen. Fügen Sie eine Datei an Ort A hinzu, erscheint sie an Ort B — und umgekehrt. So richten Sie es in RcloneView ein.

Die meisten Cloud-Sync-Szenarien sind einseitig: Ein lokaler Rechner sichert Daten in die Cloud, oder ein primärer Cloud-Speicher spiegelt sich auf einen Backup-Cloud-Speicher. Manche Arbeitsabläufe erfordern jedoch eine echte bidirektionale Synchronisation — einen gemeinsam genutzten Ordner, den zwei Personen bearbeiten, einen Arbeits- und einen Heimrechner, die synchron bleiben müssen, oder zwei Cloud-Konten, die gleichberechtigt agieren. Der `bisync`-Befehl von rclone bietet genau das, und RcloneView macht ihn konfigurierbar, ohne die Kommandozeile zu nutzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync vs. Bisync: Was ist der Unterschied?

| Verhalten | rclone sync | rclone bisync |
|----------|------------|--------------|
| Richtung | Einseitig (Quelle → Ziel) | Beidseitig (beide Richtungen) |
| Löschungen | Löscht im Ziel, wenn in der Quelle fehlend | Überträgt Löschungen in beide Richtungen |
| Konflikte | Quelle gewinnt immer | Explizite Konfliktbehandlung erforderlich |
| Risiko von Datenverlust | Möglich bei falscher Richtung | Geringeres Risiko; beide Seiten werden geprüft |
| Komplexität | Einfach | Komplexer; erfordert sorgfältige Einrichtung |

## Wann sollte man Bisync verwenden?

**Bisync verwenden, wenn:**
- Zwei Personen oder Systeme Änderungen zum selben Ordner beisteuern.
- Sie Dateien auf mehreren Geräten bearbeiten, die nicht immer gleichzeitig online sein können.
- Sie zwei Cloud-Konten als aktive Spiegel mit Änderungen von beiden Seiten pflegen.

**Regulären Sync verwenden, wenn:**
- Sie eine klare primäre Quelle und ein sekundäres Ziel haben.
- Nur eine Seite neue Dateien erstellt — die andere ist nur lesbar.
- Einfachheit und Vorhersehbarkeit im Vordergrund stehen.

## Bisync in RcloneView einrichten

Bisync erfordert eine einmalige Initialisierung (Resync), um einen Ausgangszustand herzustellen, bevor nachfolgende Läufe Änderungen verfolgen können.

### Schritt 1 — Beide Remotes hinzufügen

Stellen Sie sicher, dass beide Speicherorte als Remotes in RcloneView konfiguriert sind. Zum Beispiel:
- `gdrive-work:/Projects/Active/` (Google Drive Arbeitskonto)
- `onedrive-home:/Projects/Active/` (OneDrive Heimkonto)

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### Schritt 2 — Den initialen Resync ausführen

Der erste Bisync-Lauf muss `--resync` verwenden, um den Ausgangszustand herzustellen. Im **Terminal**-Bereich von RcloneView:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

Dies erstellt die Basiszustandsdateien (gespeichert unter `~/.cache/rclone/bisync/`), die bisync verwendet, um Änderungen bei nachfolgenden Läufen zu erkennen. Der Resync gleicht beide Seiten an, indem neuere Dateien auf die jeweils andere Seite kopiert werden.

### Schritt 3 — Einen Bisync-Job in RcloneView erstellen

1. Öffnen Sie **Jobs** in RcloneView.
2. Wählen Sie **Custom Command** oder verwenden Sie das Terminal-Panel.
3. Geben Sie den Bisync-Befehl für laufende Ausführungen ein:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. Als Job speichern und stündlich oder täglich planen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## Konfliktbehandlung

Bisync erkennt Konflikte, wenn eine Datei zwischen zwei Läufen an beiden Orten geändert wurde. Standardmäßig markiert rclone bisync diese Konflikte und überschreibt keine der beiden Versionen.

Fügen Sie `--conflict-resolve newer` hinzu, um automatisch die neuere Datei zu bevorzugen:

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

Oder `--conflict-resolve larger`, um die größere Datei zu bevorzugen (nützlich bei wachsenden Dokumenten).

Konfliktdateien, die nicht automatisch aufgelöst werden, erhalten das Suffix `.conflict`, damit beide Versionen erhalten bleiben.

## Häufige Bisync-Flags

| Flag | Zweck |
|------|---------|
| `--resync` | Ausgangszustand initialisieren oder neu herstellen (einmalig verwenden) |
| `--conflict-resolve newer` | Konflikte automatisch durch Bevorzugung der neueren Datei auflösen |
| `--filters-file /path/to/filters` | Einschluss-/Ausschlussregeln anwenden |
| `--max-delete 10` | Abbrechen, wenn mehr als 10 Dateien gelöscht würden (Sicherheit) |
| `--dry-run` | Vorschau der Änderungen, ohne etwas auszuführen |
| `--verbose` | Detaillierte Ausgabe zur Fehlersuche |

Das `--max-delete`-Flag ist besonders wichtig — es verhindert, dass bisync durch eine Fehlkonfiguration versehentlich große Mengen an Dateien löscht.

## Bisync-Läufe überwachen

Prüfen Sie die Bisync-Ausgabe nach jedem Lauf im **Job History**-Bereich von RcloneView:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

Ein fehlerfreier Bisync-Lauf zeigt:
- Von path1 nach path2 kopierte Dateien
- Von path2 nach path1 kopierte Dateien
- Erkannte Konflikte und deren Auflösung
- Gesamtzeit und Übertragungsstatistiken

## Einschränkungen von Bisync

- **Nicht geeignet für gleichzeitige Bearbeitung derselben Datei** — bisync vergleicht zwischen Läufen, nicht in Echtzeit.
- **Löschungsübertragung kann gefährlich sein** — eine auf einer Seite gelöschte Datei wird nach dem nächsten Lauf auch auf der anderen Seite gelöscht.
- **Erfordert einen stabilen Zustand zwischen den Läufen** — schlägt ein Lauf mittendrin fehl, führen Sie ihn mit `--resync` erneut aus, um den Ausgangszustand wiederherzustellen.
- **Große Pfade sind langsamer** — der Basisvergleich durchsucht bei jedem Lauf beide Speicherorte vollständig.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Beide Remotes konfigurieren** in RcloneView.
3. **Den initialen `--resync`** über das Terminal von RcloneView ausführen, um den Ausgangszustand herzustellen.
4. **Regelmäßige Bisync-Läufe planen** für die laufende Synchronisation.

Bisync bringt echte Zwei-Wege-Synchronisation zu jedem Paar von rclone-unterstützten Remotes — lokale Laufwerke, Cloud-Anbieter, NAS-Freigaben und mehr.

---

**Weiterführende Anleitungen:**

- [Sync, Copy, Move — die Unterschiede erklärt](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Filterregeln und selektive Synchronisation](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Datenverlust durch falsche Sync-Richtung vermeiden](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
