---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "OneDrive zu Backblaze B2 migrieren für günstiges Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Reduzieren Sie Speicherkosten, indem Sie OneDrive-Dateien mit RcloneView zu Backblaze B2 migrieren. Schritt-für-Schritt-Anleitung für das Verschieben von privaten oder geschäftlichen Daten in günstigeren S3-kompatiblen Speicher."
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive zu Backblaze B2 migrieren für günstiges Cloud-Backup mit RcloneView

> Die Speicherkosten von OneDrive summieren sich schnell — besonders für Teams mit umfangreichen Archiven oder Einzelpersonen mit Terabytes an Daten. Backblaze B2 bietet S3-kompatiblen Objektspeicher zu einem Bruchteil des Preises. RcloneView macht die Migration unkompliziert.

OneDrive ist praktisch für aktive Zusammenarbeit, aber nicht die kosteneffizienteste Wahl für Langzeitarchive, kalte Backups oder große Mediensammlungen. Mit rund 0,006 $/GB pro Monat ist Backblaze B2 deutlich günstiger als die Pro-Benutzer-Pläne von OneDrive für Daten, auf die Sie selten zugreifen. Archivdaten von OneDrive zu Backblaze B2 zu verschieben — während aktive Arbeitsdateien in OneDrive verbleiben — ist eine kluge Strategie zur Kostenoptimierung, die RcloneView ohne jegliche Kommandozeilen-Kenntnisse umsetzen kann.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wann ist diese Migration sinnvoll?

- Sie haben Ihr Microsoft-365-Speicherkontingent überschritten und möchten kein Upgrade durchführen.
- Sie haben große Medienarchive (Fotos, Videos, Projektdateien) in OneDrive, auf die Sie selten zugreifen.
- Sie ersetzen OneDrive durch Backblaze B2 als primäres Backup-Ziel.
- Sie möchten S3-kompatiblen Speicher mit nativer rclone-Unterstützung und ohne Egress-Gebühren in andere Regionen.

## Kostenvergleich: OneDrive vs. Backblaze B2

| Speicher | 1 TB/Monat | 5 TB/Monat |
|---------|-----------|-----------|
| OneDrive (Microsoft 365) | ~9,99 $/Benutzer | ~50 $+ (Pro-Benutzer-Limits) |
| Backblaze B2 | ~6,00 $ | ~30,00 $ |

Für Nutzer mit umfangreichen Archiven kann Backblaze B2 die Speicherkosten um 40–60 % senken.

## Schritt 1 — OneDrive in RcloneView verbinden

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. Öffnen Sie RcloneView und klicken Sie auf **New Remote**.
2. Wählen Sie **Microsoft OneDrive**.
3. Klicken Sie auf **Authorize** — ein Browserfenster für die Microsoft-OAuth-Anmeldung öffnet sich.
4. Melden Sie sich an und erteilen Sie die Zugriffsberechtigung.
5. Wählen Sie Ihren OneDrive-Typ (Personal, Business oder SharePoint) und speichern Sie den Remote als `onedrive`.

## Schritt 2 — Backblaze B2 in RcloneView verbinden

1. Melden Sie sich beim [Backblaze-Dashboard](https://www.backblaze.com) an und navigieren Sie zu **App Keys**.
2. Erstellen Sie einen neuen Application Key mit **Read and Write**-Zugriff auf Ihren Ziel-Bucket.
3. Notieren Sie sich **keyID** und **applicationKey**.
4. Fügen Sie in RcloneView einen neuen Remote vom Typ **Backblaze B2** hinzu.
5. Geben Sie keyID und applicationKey ein, nennen Sie ihn `b2` und speichern Sie.

## Schritt 3 — Ziel-Bucket erstellen

Erstellen Sie in Backblaze B2 den Ziel-Bucket vor der Migration:

- **Bucket-Name**: wählen Sie einen eindeutigen Namen (z. B. `onedrive-archive-2026`)
- **Bucket-Typ**: Private (für private Backups) oder Public (für Medienbereitstellung)
- **Versionierung**: Optional — ermöglicht die Wiederherstellung überschriebener Dateien

## Schritt 4 — Migration ausführen

Öffnen Sie **Jobs** in RcloneView und konfigurieren Sie:

| Einstellung | Wert |
|---------|-------|
| Quelle | `onedrive:/Archives/` (oder der Ordner, den Sie migrieren) |
| Ziel | `b2:onedrive-archive-2026/` |
| Modus | **Copy** (behält die OneDrive-Kopie bis zur Verifizierung) |
| Übertragungen | 4–8 gleichzeitig (an Ihre Bandbreite anpassen) |
| Prüfsumme | Aktiviert |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

Klicken Sie auf **Run**. RcloneView zeigt den Fortschritt Datei für Datei, die Übertragungsgeschwindigkeit und die geschätzte Fertigstellungszeit an.

## Schritt 5 — Migration mit Ordnervergleich verifizieren

Wenn der Job abgeschlossen ist, verwenden Sie den **Folder Comparison** von RcloneView, um zu überprüfen, dass jede OneDrive-Datei in B2 angekommen ist:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

Abweichungen werden hervorgehoben angezeigt. Führen Sie den Job erneut aus — rclone überspringt bereits vorhandene Dateien und überträgt nur die fehlenden erneut.

## Schritt 6 — Laufende Backups planen (optional)

Wenn Sie B2 fortlaufend als Live-Backup von OneDrive nutzen möchten:

1. Wechseln Sie den Job-Modus von Copy auf **Sync**.
2. Öffnen Sie **Schedule** und legen Sie ein wiederkehrendes Intervall fest (z. B. nachts um 2 Uhr).
3. Neue oder geänderte OneDrive-Dateien werden automatisch in B2 gesichert.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## Tipps für große OneDrive-Migrationen

- **Ordner für Ordner migrieren** — teilen Sie große Konten in Blöcke von 100–500 GB auf.
- **Stoßzeiten vermeiden** — Microsoft drosselt den OneDrive-API-Zugriff bei hoher Auslastung.
- **Bandbreitenlimits nutzen** — legen Sie in RcloneView ein Limit fest, um die tägliche Arbeit während der Geschäftszeiten nicht zu beeinträchtigen.
- **OneDrive aktiv halten** — löschen Sie keine Dateien aus OneDrive, bis B2 verifiziert ist.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **OneDrive und Backblaze B2 hinzufügen** als Remotes über den Setup-Assistenten von RcloneView.
3. **B2-Bucket erstellen** im Backblaze-Dashboard.
4. **Kopieren, verifizieren, dann entscheiden**, ob OneDrive als aktiver Speicher erhalten bleibt oder Sie vollständig zu B2 wechseln.

Weniger Microsoft-Lock-in, geringere Kosten und S3-Kompatibilität — Backblaze B2 ist eine kluge Landing Zone für OneDrive-Archive.

---

**Verwandte Anleitungen:**

- [Dropbox zu Backblaze B2 sichern](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Google Drive zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Versteckte Cloud-Speicherkosten — Geld sparen mit RcloneView](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
