---
slug: local-media-to-gofile-with-rcloneview
title: Lokale Medien mit RcloneView zu Gofile verschieben & synchronisieren (keine CLI erforderlich)
authors:
  - jay
description: Lade, synchronisiere und verwalte große Medienbibliotheken von deiner Festplatte zu Gofile mit der benutzerfreundlichen GUI von RcloneView – plus Tipps für Links, Dedupe und Zeitplanung.
keywords:
  - rcloneview
  - gofile
  - Medien-Upload
  - Festplatte zu Cloud
  - Cloud-Dateiübertragung
  - geplante Synchronisation
  - rclone GUI
  - öffentliche Links
tags:
  - gofile
  - media
  - cloud-file-transfer
  - sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Lokale Medien mit RcloneView zu Gofile verschieben & synchronisieren (keine CLI erforderlich)

> Veröffentliche und sichere deine Medienbibliothek, indem du sie von deiner **Festplatte** zu **Gofile** verschiebst – alles per Klick, ohne Befehle.

## Einführung — Warum deine lokalen Medien auf Gofile hosten?

Wenn deine Videoschnitte, Rohfotos und Audio-Masterdateien nur auf einer einzigen Festplatte liegen, sind sie nur einen Wasserschaden oder Festplattenfehler von ihrem Verschwinden entfernt. Das Verschieben von Medien zu **Gofile** verschafft dir Cloud-Reichweite, einfaches Teilen und mehr Speicherplatz auf deiner Workstation. Mit **RcloneView** erhältst du die Leistungsfähigkeit von rclone in einer benutzerfreundlichen GUI: verbinden, vorschauen, kopieren und planen – ganz ohne Terminal.

<!-- truncate -->
### Gofile im Überblick
- Gofile ist eine Plattform für Speicherung und Verteilung von Inhalten mit einer dokumentierten REST-API. Du kannst öffentliche Links erstellen und Uploads über API-Tokens automatisieren.  [gofile.io](https://gofile.io/api)  
- rclone verfügt über ein dediziertes **Gofile**-Backend: Sobald es mit deinem **Account-API-Token** konfiguriert ist, kannst du Inhalte auflisten, kopieren und sogar über `rclone link` öffentliche Links erstellen. *(Hinweis: Das Gofile-Backend von rclone erfordert einen **Premium**-Gofile-Account.)*  [Rclone](https://rclone.org/gofile/)

### Deine lokale Medienbibliothek verstehen
- Medienprojekte sind **groß** (mehrere GB), verschachtelt und oft in mehreren Versionen dupliziert.  
- Gute Werkzeuge sind wichtig: Vorschauen, selektives Kopieren und fortsetzbare Übertragungen sind für reibungslose Migrationen unerlässlich.

### Warum von der Festplatte zu Gofile wechseln?
- **Teilbarkeit**: Öffentliche Links für Kunden & Mitarbeiter erstellen.
- **Entlastung & Backup**: lokalen Speicherplatz freigeben und trotzdem eine Online-Kopie behalten.  
- **Workflow-Kontrolle**: Übertragungen nach Renderprozessen planen, Ordner synchron halten.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Schritt 1 — Vorbereitung

Bevor du hochlädst:

1. **Ordner organisieren** (z. B. `Footage/`, `Stills/`, `Masters/`), um Aufgaben klar und wiederholbar zu halten.  
2. **Entscheide deinen Modus**: einmalige Kopie eines Archivs, laufende Synchronisation eines aktiven Projekts oder ein nächtlicher Zeitplan.  


## Schritt 2 — Gofile in RcloneView verbinden

RcloneView verpackt die Konfiguration von rclone in einen geführten Ablauf.

1. Öffne **RcloneView** → klicke auf **`+ New Remote`**  
2. Wähle **Gofile** aus und füge dein **Account-API-Token** aus **My Profile** von Gofile ein. *(Premium erforderlich für rclone-Verbindungen.)* 
3. Benenne es (z. B. `MyGofile`) und speichere.  

🔍 Hilfreiche Anleitung: [Gofile-Remote hinzufügen](/howto/remote-storage-connection-settings/gofile) 

<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />

## Schritt 3 — Übertragung durchführen

RcloneView bietet drei übersichtliche Wege, um deine Medien zu verschieben und zu pflegen. Fang klein an und skaliere dann.

### A) Drag & Drop (manuell, ad hoc)
- Öffne links deine **lokalen** Medien, rechts **Gofile**, und **ziehe Ordner/Dateien einfach hinüber** – einfach und visuell.  

👉 Mehr dazu: [Copying Files using Drag and Drop](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Vergleichen & Kopieren (Änderungen vorab ansehen)
- Nutze **Compare**, um vor dem Kopieren zu sehen, was neu oder geändert ist – das reduziert Überraschungen und Wiederholungen.  

👉 Mehr dazu: [Compare and Manage Files](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C) Synchronisation & geplante Jobs (automatisieren)
- Spiegle deinen lokalen **Projects**-Ordner mit **Sync** nach Gofile.  
- Führe zunächst einen **Testlauf (Dry-run)** durch, speichere ihn dann als wiederverwendbaren Job und lege einen Zeitplan fest (z. B. nächtlich).  

👉 Mehr dazu:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**Profi-Tipps**
- Wenn Gofile **doppelte Namen** in einem Ordner erkennt, kann die Synchronisation unübersichtlich werden – nutze nach dem Upload **dedupe** von rclone, um Konflikte zu bereinigen. 
- Brauchst du **Freigabelinks**? Mit `link` von rclone kannst du programmatisch öffentliche Links erstellen (fortgeschritten/CLI). 

---

## Fazit — Zusammenfassung & weitere Hinweise

- **Was du gewinnst**: sicherere Speicherung, einfacheres Teilen und weniger Unordnung auf deinen lokalen Laufwerken.  
- **Wie du es machst**: RcloneView konfiguriert **Gofile** über ein API-Token und lässt dich dann per **Drag & Drop**, **Compare** oder **Sync** arbeiten – mit **Zeitplanung** für die automatische Pflege. 

## FAQs

**F. Brauche ich einen Gofile-Premium-Account, um rclone/RcloneView zu nutzen?**  
**A.** Ja – das Gofile-Backend von rclone erfordert einen **Premium**-Gofile-Account und ein **Account-API-Token** aus **My Profile**. 

**F. Kann ich öffentliche Freigabelinks für meine Uploads erstellen?**  
**A.** Ja. RcloneView unterstützt `link`, um öffentliche Links zu erstellen (Datei oder Ordner; Ordner können als ZIP heruntergeladen werden; Ablaufdatum bei manchen Backends unterstützt).


**Bereit, deine Medienbibliothek auf deine Weise online zu stellen?**  

<CloudSupportGrid />

