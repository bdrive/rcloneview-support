---
slug: hard-drive-to-proton-drive-with-rcloneview
title: Festplatte mit RcloneView verschlüsseln & auf Proton Drive sichern
authors:
  - jay
description: Verschieben, synchronisieren und schützen Sie Ihre lokalen Dateien, indem Sie Ihre Festplatte mit RcloneView per Drag-and-Drop, Vergleichsvorschau und geplanten Jobs auf Proton Drive hochladen – ganz ohne Kommandozeile.
keywords:
  - rcloneview
  - proton drive
  - Festplatten-Backup
  - verschlüsselter Cloud-Speicher
  - Cloud-Dateiübertragung
  - rclone GUI
  - geplante Synchronisation
  - lokal zu Cloud
tags:
  - proton-drive
  - hard-drive
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Festplatte mit RcloneView verschlüsseln & auf Proton Drive sichern

> Halten Sie Ihre wichtigsten Dateien sicher, privat und zugänglich – synchronisieren Sie Ihre **Festplatte** mit **Proton Drive** über einen übersichtlichen Point-and-Click-Workflow.

## Warum eine Festplatte auf Proton Drive sichern

Wenn Ihre Fotos, Kreativprojekte oder Arbeitsarchive nur auf einer einzigen Festplatte liegen, sind sie nur einen verschütteten Kaffee oder einen Laufwerksfehler von der endgültigen Löschung entfernt. **Proton Drive** fügt eine verschlüsselte, auf Privatsphäre ausgerichtete Cloud-Ebene hinzu, während **RcloneView** Ihnen eine benutzerfreundliche GUI bietet, um Quellen und Ziele zu verbinden, Änderungen in der Vorschau anzuzeigen und die Synchronisation zu automatisieren – ganz ohne CLI.
<!-- truncate -->

**Proton Drive im Überblick**  
- Ende-zu-Ende-Verschlüsselung und auf Privatsphäre ausgerichtetes Design  
- Plattformübergreifender Zugriff mit Freigabelinks und Dateiversionierung  
- Unterstützt durch das Proton-Backend von rclone, sodass Sie über RcloneView browsen, kopieren und synchronisieren können

**Ihre Festplatte im Überblick**  
- Große Ordner, verschachtelte Strukturen und mehrere Versionen sind üblich  
- Zuverlässige Werkzeuge (Fortsetzen, Vergleichen, selektives Kopieren) erleichtern die Migration

**Warum von einer Festplatte zu Proton Drive wechseln?**  
- **Schutz**: eine sichere Kopie außerhalb des Standorts zur Notfallwiederherstellung  
- **Privatsphäre**: verschlüsselter Speicher, ohne auf Benutzerfreundlichkeit zu verzichten  
- **Produktivität**: Zugriff auf Dateien von überall, mit vertrauensvoller Freigabe

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Vorbereitung

Bevor Sie beginnen:

- **Quelle organisieren**: Inhalte gruppieren (z. B. `Photos/`, `Projects/`, `Docs/`) für übersichtlichere Jobs  
- **Proton-Drive-Kapazität prüfen**: genügend Speicherplatz für den anfänglichen Upload und zukünftiges Wachstum sicherstellen  
- **Vorgehensweise festlegen**: einmaliger Upload, gestaffelte Batches oder kontinuierliche Synchronisation mit Zeitplan  
- **Optional zusätzliche Verschlüsselungsebenen hinzufügen**: fortgeschrittene Nutzer können rclone **crypt** für zusätzliche Kontrolle einsetzen

🔍 Hilfreiche Anleitungen  
- [Proton-Drive-Verbindungsanleitung](/howto/remote-storage-connection-settings/proton)  
- [Remote-Speicher durchsuchen & verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)

## Proton Drive in RcloneView verbinden

RcloneView bettet die Konfiguration von rclone in einen geführten Klick-für-Klick-Ablauf ein.

1. Öffnen Sie **RcloneView** und klicken Sie auf **`+ New Remote`**  
2. Wählen Sie **Proton Drive** und folgen Sie den Anmelde-/Token-Aufforderungen (gemäß der Anleitung), benennen Sie es dann (z. B. `MyProton`)  
3. Fügen Sie auf der anderen Seite einen **Local**-Remote hinzu (Ihr Festplattenpfad, z. B. `D:\Media` oder `/Users/you/Archive`)  
4. Bestätigen Sie, dass beide nebeneinander im Explorer-Bereich erscheinen

<img src="/support/images/en/blog/open-local-disk-and-proton-drive.png" alt="open local disk and proton drive" class="img-medium img-center" />

## Übertragungs- und Synchronisationsoptionen

### Drag & Drop
Kopieren Sie Dateien/Ordner visuell vom **Local**-Panel in **Proton Drive** – ideal für einmalige Verschiebungen oder schnelle Erfolge.  

👉 Mehr dazu: [Dateien mit Drag and Drop kopieren](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### Vergleichen & Kopieren
Führen Sie **Compare** aus, um Unterschiede (neu, geändert, fehlend) in der Vorschau anzuzeigen, bevor Sie kopieren – perfekt für selektive Aktualisierungen und um Duplikate zu vermeiden.  

👉 Mehr dazu: [Dateien vergleichen und verwalten](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files in RcloneView" class="img-medium img-center" />

### Synchronisation & geplante Jobs
Spiegeln Sie ausgewählte lokale Ordner nach einem Zeitplan auf Proton Drive – nächtlich, wöchentlich oder individuell. Führen Sie immer zuerst einen **Dry-Run** durch, um die geplanten Aktionen zu validieren, und speichern Sie den Vorgang dann als wiederverwendbaren **Job**.  

👉 Mehr dazu:  
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)  
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job to Proton Drive in RcloneView" class="img-medium img-center" />

**Profi-Tipps**  
- Beginnen Sie mit einem **Pilotordner**, um Geschwindigkeit, Struktur und Filter zu validieren  
- Verwenden Sie Filter, um Caches, temporäre Dateien und Renderings auszuschließen, die Sie nicht in der Cloud benötigen  
- Halten Sie die Quelle während großer initialer Uploads schreibgeschützt, um Abweichungen zu minimieren

## Fazit — wichtigste Erkenntnisse & zusätzliche Tipps

- **Warum**: Widerstandsfähigkeit durch eine Kopie außerhalb des Standorts sowie auf Privatsphäre ausgerichteter Speicher für Ihre wichtigsten Dateien  
- **Wie**: Mit RcloneView verbinden Sie **Local** und **Proton Drive** und nutzen dann **Drag & Drop**, **Compare** oder **Sync** – mit **Zeitplanung** für Schutz ohne manuellen Aufwand  
- **Sicher skalieren**: in Batches hochladen, Jobs überwachen und Logs prüfen, um eine saubere Nachvollziehbarkeit zu gewährleisten

## Häufig gestellte Fragen

**Benötige ich Kommandozeilenkenntnisse?**  
Nein – RcloneView bietet eine vollständige GUI über das Proton-Drive-Backend von rclone.

**Kann ich wiederkehrende Backups automatisch ausführen?**  
Ja – speichern Sie Ihre Synchronisation als **Job** und fügen Sie im Job-Manager von RcloneView einen Zeitplan hinzu.

**Sind meine Daten verschlüsselt?**  
Proton Drive verwendet Ende-zu-Ende-Verschlüsselung. Für fortgeschrittene Fälle können Sie optional rclone **crypt** darüberlegen.

**Was, wenn der Upload sehr groß ist?**  
Teilen Sie ihn in Batches auf und führen Sie nächtliche Zeitpläne aus. Verwenden Sie **Compare**, um beim nächsten Mal nur neue oder geänderte Dateien zu kopieren.

**Bereit, Ihre Dateien in Proton Drive zu sichern – ohne das Terminal zu berühren?**  

<CloudSupportGrid />
