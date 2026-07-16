---
slug: manage-internet-archive-uploads-with-rcloneview
title: "So laden Sie Dateien mit RcloneView zum Internet Archive hoch und verwalten sie"
authors:
  - tayson
description: "Nutzen Sie RcloneView, um Dateien ins Internet Archive hochzuladen, Sammlungen zu organisieren und lokale Archive zu synchronisieren. Eine visuelle Oberfläche für das Internet-Archive-Backend von rclone."
keywords:
  - internet archive rcloneview
  - upload to internet archive rclone
  - internet archive rclone gui
  - archive.org file upload
  - internet archive cloud sync
  - rcloneview internet archive
  - archive.org bulk upload
  - internet archive backup
  - rclone internet archive backend
  - preserve files internet archive
tags:
  - RcloneView
  - internet-archive
  - cloud-storage
  - backup
  - guide
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So laden Sie Dateien mit RcloneView zum Internet Archive hoch und verwalten sie

> Das Internet Archive bewahrt menschliches Wissen — Bücher, Musik, Software, Videos und Webseiten — kostenlos und für immer. Mit RcloneView können Sie Ihre eigenen Dateien ganz einfach auf archive.org hochladen, organisieren und synchronisieren, ohne die Kommandozeile zu benutzen.

Das Internet Archive (archive.org) bietet kostenlosen, dauerhaften Cloud-Speicher für öffentlich teilbare Dateien. Es wird von Forschern, Archivaren, Pädagogen und allen genutzt, die zum digitalen Gemeingut beitragen möchten. Das Internet-Archive-Backend von rclone macht dies skriptfähig, und RcloneView verpackt diese Möglichkeiten in eine visuelle Oberfläche — so können Sie Ihre Archivelemente durchsuchen, neue Dateien hochladen und Sammlungen mit wenigen Klicks synchronisieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was Sie mit RcloneView + Internet Archive tun können

- **Dateien und Ordner hochladen** in bestehende oder neue archive.org-Elemente
- **Ihre hochgeladenen Elemente visuell durchsuchen**, wie in einem Dateimanager
- **Lokale Sammlungen synchronisieren** mit dem Internet Archive zur Bewahrung
- **Dateien kopieren** zwischen dem Internet Archive und anderen Cloud-Anbietern
- **Übertragungsfortschritt in Echtzeit überwachen**

## Einrichten des Internet-Archive-Remotes

### Schritt 1 — Ihre Internet-Archive-Zugangsdaten besorgen

1. Erstellen Sie ein kostenloses Konto auf [archive.org](https://archive.org).
2. Gehen Sie zu **My Account → Settings → Security** und erzeugen Sie einen **S3-ähnlichen API-Schlüssel** (Access Key + Secret Key). Trotz des Namens handelt es sich nicht um AWS — es ist archive.orgs eigene S3-kompatible API.

### Schritt 2 — Den Remote in RcloneView hinzufügen

Öffnen Sie RcloneView und klicken Sie auf **New Remote**:

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote in RcloneView" class="img-large img-center" />

1. Wählen Sie **Internet Archive** aus der Liste der Remote-Typen.
2. Geben Sie Ihre **Access Key ID** und Ihren **Secret Access Key** von archive.org ein.
3. Benennen Sie den Remote (z. B. `internet-archive`) und speichern Sie.

### Schritt 3 — Ihre Elemente durchsuchen

Nach dem Verbinden zeigt RcloneView Ihre archive.org-Elemente als Ordner an. Jedes „Element" (Item) im Internet Archive ist ein Container für einen Upload (wie ein Album, ein gescanntes Buch oder eine Videosammlung).

## Dateien ins Internet Archive hochladen

### Ein neues Element hochladen

So erstellen Sie ein neues archive.org-Element und laden Dateien hinein:

1. Navigieren Sie im rechten Bereich von RcloneView in Ihren `internet-archive`-Remote.
2. Erstellen Sie einen neuen Ordner mit einer eindeutigen Element-Kennung (z. B. `my-1980s-radio-recordings`).
3. Ziehen Sie Dateien aus Ihrem lokalen Bereich per Drag & Drop in den Elementordner.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse and upload to Internet Archive items" class="img-large img-center" />

RcloneView überträgt die Dateien und zeigt den Fortschritt live an. Das Internet Archive verarbeitet Uploads asynchron — Ihr Element ist je nach Dateigröße innerhalb weniger Minuten bis Stunden öffentlich zugänglich.

### Zu einem bestehenden Element hochladen

Navigieren Sie zu einem bestehenden Elementordner und kopieren oder verschieben Sie Dateien hinein. RcloneView übernimmt den mehrteiligen Upload und die Wiederholungslogik automatisch.

## Eine lokale Archivsammlung synchronisieren

So halten Sie einen lokalen Ordner mit einem Internet-Archive-Element synchron — ideal für laufende Archivierungsprojekte:

1. Öffnen Sie **Jobs** in RcloneView.
2. Legen Sie **Source** als Ihren lokalen Ordner fest (z. B. `D:\my-archive-project`).
3. Legen Sie **Destination** als Ihr Internet-Archive-Element fest (z. B. `internet-archive:my-1980s-radio-recordings`).
4. Wählen Sie den Modus **Sync**, um nur neue oder geänderte Dateien hochzuladen.
5. Planen Sie die wöchentliche oder bedarfsgesteuerte Ausführung.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync job to Internet Archive" class="img-large img-center" />

## Herunterladen und Kopieren vom Internet Archive

RcloneView funktioniert in beide Richtungen. Sie können außerdem:

- **Dateien herunterladen** von öffentlichen archive.org-Elementen auf Ihren lokalen Rechner.
- **Elemente kopieren** vom Internet Archive zu einem anderen Cloud-Anbieter (z. B. archive.org → Google Drive oder Backblaze B2) für zusätzliche Redundanz bei der Bewahrung.

## Wichtige Hinweise zum Internet-Archive-Backend

| Verhalten | Detail |
|----------|--------|
| Element-Erstellung | Neue Ordner werden zu neuen archive.org-Elementen |
| Sichtbarkeit | Hochgeladene Elemente sind standardmäßig öffentlich |
| Datei-Löschung | Löschungen werden eingereiht; archive.org verarbeitet sie langsam |
| Prüfsummen | MD5-Prüfsummen werden beim Upload verifiziert |
| Ratenbegrenzung | Beachten Sie die Crawl-Limits von archive.org — vermeiden Sie übermäßige API-Anfragen |

## Anwendungsfälle

**Digitale Archivierungsprojekte** — Laden Sie Scans, Aufnahmen oder Dokumente hoch, die Sie dauerhaft in der Public Domain bewahren möchten.

**Software-Bewahrung** — Tragen Sie alte Software, Spiele oder ROMs (sofern die Lizenz es erlaubt) zum Archiv bei.

**Backup-Redundanz** — Nutzen Sie das Internet Archive als kostenlose sekundäre Backup-Ebene für unkritische, öffentlich teilbare Daten.

**Forschungsdatensätze** — Laden Sie Datensätze mit einer öffentlichen Lizenz hoch, damit Forscher weltweit darauf zugreifen können.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ihre archive.org-API-Schlüssel erzeugen** auf archive.org unter Account Settings.
3. **Den Internet-Archive-Remote hinzufügen** im Remote-Einrichtungsassistenten von RcloneView.
4. **Hochladen, synchronisieren und bewahren** — Ihre Dateien bleiben kostenlos und für immer auf archive.org erhalten.

Das Internet Archive bewahrt seit 1996 das Web und die menschliche Kultur. RcloneView macht es einfach, eigene digitale Materialien beizutragen.

---

**Weiterführende Anleitungen:**

- [Cloud-Backups mit RcloneView verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Tägliche Cloud-Backups automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Multi-Cloud-Backup-Strategie](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
