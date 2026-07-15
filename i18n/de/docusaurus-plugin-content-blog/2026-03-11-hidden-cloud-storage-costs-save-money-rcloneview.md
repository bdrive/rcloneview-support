---
slug: hidden-cloud-storage-costs-save-money-rcloneview
title: "Versteckte Cloud-Speicher-Kosten — Egress-Gebühren, API-Kosten und wie Sie Geld sparen"
authors:
  - tayson
description: "Cloud-Speicher-Preise wirken einfach, bis Egress-Gebühren, API-Kosten und Mindestspeicherdauern ins Spiel kommen. Erfahren Sie mehr über versteckte Kosten und wie Sie mit RcloneView optimieren."
keywords:
  - versteckte Kosten Cloud-Speicher
  - Cloud-Egress-Gebühren
  - Cloud-Speicher-Preise
  - s3 egress cost
  - Cloud-API-Kosten
  - Cloud-Speicherkosten reduzieren
  - Cloud-Speicher-Kostenoptimierung
  - günstiger Cloud-Speicher
  - Cloud-Speicher-Gebühren erklärt
  - Geld sparen Cloud-Speicher
tags:
  - RcloneView
  - cloud-storage
  - pricing
  - cost-optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Versteckte Cloud-Speicher-Kosten — Egress-Gebühren, API-Kosten und wie Sie Geld sparen

> AWS S3 wirbt mit 0,023 $/GB/Monat. Klingt günstig für 1 TB — nur 23 $/Monat. Aber sobald Sie dieses Terabyte herunterladen, springt Ihre Rechnung auf 113 $. Willkommen bei den Egress-Gebühren.

Cloud-Speicher-Preise haben einen Listenpreis und einen tatsächlichen Preis. Der Listenpreis ist der Speicherpreis pro GB. Der tatsächliche Preis umfasst Egress-Gebühren (Download), API-Anfragekosten, Mindestspeicherdauern und Abrufgebühren für Cold Storage. Wer diese versteckten Kosten versteht, kann den richtigen Anbieter wählen und Überraschungen auf der Rechnung vermeiden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Die versteckten Kosten

### 1) Egress-Gebühren

Egress ist das, was Sie zahlen, um Daten AUS der Cloud herunterzuladen. Es ist die größte Überraschung auf den meisten Cloud-Rechnungen.

| Anbieter | Egress (pro TB) |
|----------|----------------|
| AWS S3 | $90 |
| Google Cloud | $120 |
| Azure | $87 |
| Oracle Cloud | Kostenlos (erste 10 TB) |
| Backblaze B2 | $10 (kostenlos über Cloudflare) |
| Wasabi | Kostenlos* |
| Storj | $7 |

*Wasabis kostenloser Egress unterliegt einer Fair-Use-Richtlinie — der Egress sollte das Speichervolumen nicht überschreiten.

**Praxisbeispiel:** Eine 10-TB-Migration von AWS S3 kostet allein 900 $ an Egress-Gebühren.

### 2) API-Anfragekosten

Jede Dateioperation (Auflisten, Lesen, Schreiben, Löschen) ist ein API-Aufruf. Jeder Aufruf kostet Geld.

| Anbieter | PUT/POST (pro 1.000) | GET (pro 1.000) |
|----------|---------------------|-----------------|
| AWS S3 Standard | $0.005 | $0.0004 |
| Google Cloud | $0.005 | $0.0004 |
| Backblaze B2 | $0.004 | Kostenlos (2.500/Tag) |

Die Synchronisation von 100.000 kleinen Dateien bedeutet 100.000+ API-Aufrufe — das summiert sich.

### 3) Mindestspeicherdauer

| Anbieter | Mindestdauer | Was passiert |
|----------|-----------------|-------------|
| AWS S3 Standard | Keine | Zahlung nach Verbrauch |
| AWS S3 Standard-IA | 30 Tage | Berechnung für 30 Tage, auch bei früherem Löschen |
| AWS S3 Glacier | 90 Tage | Mindestberechnung von 90 Tagen |
| Wasabi | 90 Tage | Mindestberechnung von 90 Tagen |
| Backblaze B2 | 1 Tag | Praktisch keine Mindestdauer |

Löschen Sie eine Datei bei Wasabi nach 10 Tagen — Sie zahlen trotzdem für 90 Tage Speicherung.

### 4) Abrufgebühren

Cold-Storage-Tiers berechnen Gebühren für den Datenabruf:

| Tier | Abrufkosten |
|------|---------------|
| S3 Glacier Instant | $10/TB |
| S3 Glacier Flexible | $30/TB (3–5 Stunden) |
| S3 Glacier Deep Archive | $20/TB (12 Stunden) |

### 5) Gebühren für vorzeitiges Löschen

S3 Glacier berechnet Gebühren für vorzeitiges Löschen, wenn Objekte vor Ablauf der Mindestspeicherdauer entfernt werden.

## So optimieren Sie Cloud-Speicher-Kosten

### Den richtigen Anbieter für die richtigen Daten wählen

| Datentyp | Bester Anbieter | Warum |
|-----------|--------------|-----|
| Hot (täglicher Zugriff) | Google Drive, OneDrive | In Workspace/M365 enthalten |
| Warm (wöchentlicher Zugriff) | S3 Standard-IA, B2 | Günstige Speicherung, moderater Egress |
| Cold (monatlicher Zugriff) | B2, Wasabi | Niedrige Speicherkosten, vorhersehbare Preise |
| Archiv (jährlicher Zugriff) | S3 Glacier, Storj | Günstigste Speicherung |

### RcloneView nutzen, um Daten zwischen Tiers zu verschieben

Mit zunehmendem Alter der Daten sollten Sie sie in günstigeren Speicher verschieben:

```
Week 1-4: Google Drive (included in subscription)
Month 2-12: Backblaze B2 ($6/TB, low egress)
Year 2+: S3 Glacier ($4/TB, archive)
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Automate tiered storage" class="img-large img-center" />

### Egress mit intelligenter Synchronisation minimieren

- **Während kostenloser Egress-Fenster synchronisieren** — Manche Anbieter bieten zu bestimmten Zeiten oder für bestimmte Partner kostenlosen Egress an.
- **Cloudflare mit B2 nutzen** — B2-Egress ist über Cloudflares Bandwidth Alliance kostenlos.
- **Oracle Cloud wählen** — 10 TB/Monat kostenloser Egress.
- **Filter verwenden**, um nur das zu synchronisieren, was Sie brauchen — weniger übertragene Daten bedeuten weniger Egress.

### API-Aufrufe reduzieren

- **`--fast-list`** in den rclone-Einstellungen verwenden, um API-Aufrufe beim Auflisten von Verzeichnissen zu reduzieren.
- **Seltener synchronisieren** bei stabilen Daten — wöchentlich statt stündlich.
- **Größenbasierte Prüfung** statt Prüfsummenprüfung bei großen Dateien verwenden.

### Verschwendung finden und beseitigen

Nutzen Sie den Ordnervergleich, um doppelte Daten über verschiedene Clouds hinweg zu finden:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicate data across clouds" class="img-large img-center" />

## Monatlicher Kostenvergleich: 5 TB Speicher

| Szenario | Monatliche Kosten |
|----------|-------------|
| AWS S3 Standard (5 TB Speicher + 1 TB Egress) | $205 |
| Backblaze B2 (5 TB + 1 TB Egress) | $40 |
| Wasabi (5 TB, keine Egress-Gebühren) | $35 |
| Google Drive (2 TB Plan, privat) | $10 |
| Optimierter Mix (B2 + Glacier) | $25 |

Die richtige Anbieterkombination kann die Kosten um 80 % senken.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Aktuelle Cloud-Kosten prüfen** — sehen Sie nach, was Sie zahlen.
3. **Verschwendung identifizieren** — Duplikate, ungenutzte Daten, falscher Speicher-Tier.
4. **Daten zu optimalen Anbietern verschieben** mit RcloneView.
5. **Automatisiertes Tiering planen**, um die Kosten dauerhaft niedrig zu halten.

Die günstigste Cloud ist die, die zu Ihrem Zugriffsmuster passt.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher voll? Speicherplatz freigeben](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)
- [Duplikate finden und entfernen](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
