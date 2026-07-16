---
slug: transfer-google-drive-to-another-account-easily
title: Google Drive einfach in ein anderes Konto übertragen mit RcloneView
authors:
  - jay
description: Verschieben Sie Dateien zwischen Google-Drive-Konten mit RcloneView. Planen Sie Migrationen, bleiben Sie innerhalb der Google-Kontingente und automatisieren Sie Übertragungen – ohne Kommandozeile.
keywords:
  - rcloneview
  - google drive transfer
  - migrate google drive
  - cross account transfer
  - cloud sync
  - rclone gui
tags:
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive einfach in ein anderes Konto übertragen mit RcloneView

> Konten wechseln, ohne die Kontrolle zu verlieren. RcloneView verpackt das Google-Drive-Backend von rclone in eine benutzerfreundliche Oberfläche, sodass Sie Daten zwischen Drive-Konten übergeben, konsolidieren oder archivieren können – übersichtlich und ohne Skripting.

## Warum Daten zwischen Google-Drive-Konten verschieben?

Abschlüsse, Jobwechsel, Fusionen und einfache Aufräumprojekte erfordern oft das Verschieben von Dateien zwischen Google-Konten. Die integrierten Übertragungstools von Google helfen dabei, lassen aber Lücken: Sie decken nur My Drive ab, ignorieren granulare Filter und können Migrationen nicht vorab planen oder zeitlich steuern. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### Die Grenzen kennen, bevor Sie starten

- **Dateigröße pro Element**: Nicht-Google-Formate können bis zu **5 TB** pro Element erreichen; Docs, Sheets und Slides haben separate Grenzwerte. [Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **Tägliches Übertragungskontingent**: Die Drive API erlaubt **750 GB** an Uploads (und Kopiervorgängen) pro Nutzer und Tag; das Limit wird alle 24 Stunden zurückgesetzt. [Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **Eigentumsregeln**: Persönliche Übertragungen decken nur Gmail + My Drive ab. Workspace-Administratoren können Eigentum innerhalb einer Domain neu zuweisen, aber domänenübergreifende geteilte Ablagen erfordern eine Kopie. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### Ansätze im Überblick

| Ansatz | Am besten geeignet für | Einschränkungen |
|---|---|---|
| Google-Tool „Ihre Inhalte übertragen" | Studierende, die die Schule verlassen oder zu einem persönlichen Gmail-Konto wechseln | Nur My Drive + Gmail; keine Filter; keine geteilten Ablagen als Ziel möglich |
| Für ein Zweitkonto freigeben und dann kopieren | Kleine Übergaben innerhalb einer Domain | Manuelle Arbeit; Versionsverlauf und Kommentare können fragmentieren |
| Kontoübergreifende Übertragung mit RcloneView | Gemischte My Drive + geteilte Ablagen, granulare Ordnerverschiebungen, wiederholbare Synchronisationen | Erfordert rclone-Remotes für jedes Konto (übernimmt der RcloneView-Assistent) |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Vorbereitung

1. **Eigentum & Umfang klären**: Listen Sie die Ordner (My Drive und geteilte Ablagen) auf, die verschoben werden müssen oder bleiben sollen. Entscheiden Sie, wer die Zielkopien besitzen soll.  
2. **Kontingente prüfen**: Kontrollieren Sie die verfügbare Speicherkapazität und notieren Sie große Videoarchive, die das Limit von 750 GB/Tag erreichen könnten.  
3. **Umstellungsfenster planen**: Kommunizieren Sie eine Sperrfrist oder einen gestaffelten Zeitplan, damit Mitarbeitende wissen, wo sie arbeiten sollen.  
4. **Filter festlegen**: Entscheiden Sie über Einschluss-/Ausschlussregeln (z. B. `/Backups/old/` überspringen oder nur `/Projects/2024/` verschieben).  
5. **Wichtige Ordner sichern**: Exportieren Sie für regulierte Inhalte vor dem Verschieben ein Manifest oder den Versionsverlauf.

🔍 Hilfreiche Anleitungen  
- [Google-OAuth-Schnelleinrichtung in RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Remotes für Google Shared Drive hinzufügen](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## Beide Google-Drive-Konten in RcloneView verbinden

RcloneView verwandelt `rclone config` in einen geführten Assistenten, sodass Sie jedes Google-Konto einmal registrieren und für Übertragungen wiederverwenden können.

1. Öffnen Sie **RcloneView** → klicken Sie auf **`+ New Remote`**.  
2. Wählen Sie **Google Drive** → melden Sie sich mit dem **Quellkonto** an → geben Sie dem Remote einen klaren Namen (z. B. `Drive-Source`).  
3. Wiederholen Sie dies für das **Zielkonto** (z. B. `Drive-Destination`).  
4. Wenn geteilte Ablagen beteiligt sind, aktivieren Sie diese im Assistenten oder fügen Sie die Drive-ID hinzu.  
5. Bestätigen Sie, dass beide Remotes im Explorer-Bereich erscheinen und Sie Ordner auf beiden Seiten durchsuchen können.

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## Den passenden Übertragungsablauf in RcloneView wählen

Beginnen Sie mit einem Pilotordner, bevor Sie das gesamte Konto kopieren. Sobald der Testlauf gut aussieht, folgen Sie mit umfangreicheren Verschiebungen oder geplanten Synchronisationen.

### Drag & Drop (manuelle Verschiebungen)

Öffnen Sie das Quell-Remote links und das Ziel rechts, und ziehen Sie dann Dateien oder Ordner hinüber. Perfekt für spontane Übergaben oder das Verschieben weniger Ordner einer geteilten Ablage.  
👉 Mehr dazu: [Dateien per Drag and Drop kopieren](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### Vergleichen & Kopieren (Unterschiede in der Vorschau)

Führen Sie **Compare** aus, um aufzulisten, was zwischen beiden Konten neu, geändert oder fehlend ist. Prüfen Sie die Unterschiede, wählen Sie ab, was Sie überspringen möchten, und kopieren Sie dann. Ideal für gestaffelte Migrationen oder das Aufräumen nach der Sperrfrist.  
👉 Mehr dazu: [Vergleichsergebnisse verwalten](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### Synchronisation & geplante Jobs (Umstellungen automatisieren)

Verwenden Sie **Sync**, um ausgewählte Ordner zu spiegeln, bis das Ziel die Quelle vollständig ersetzt. Führen Sie immer zuerst einen **Trockenlauf (dry-run)** aus, speichern Sie dann den Job und planen Sie nächtliche oder stündliche Ausführungen, bis die Umstellung abgeschlossen ist.  
👉 Mehr dazu:  
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)  
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**Profi-Tipps**

- Teilen Sie Migrationen in Batches auf, die unter dem API-Kontingent von 750 GB/Tag bleiben; stellen Sie den nächsten Batch in die Warteschlange, sobald das Limit zurückgesetzt wird.  
- Beim Kopieren von Inhalten aus einer geteilten Ablage in ein persönliches My Drive: Überprüfen Sie Berechtigungen und geben Sie wichtige Ordner erneut vom Zielkonto aus frei.  
- Setzen Sie Quellordner während der letzten Synchronisation auf schreibgeschützt, damit das letzte Delta klein und vorhersehbar bleibt.  
- Exportieren Sie rclone-Protokolle aus dem Job-Verlauf von RcloneView, um ein Prüfprotokoll zu führen, was wann verschoben wurde.

## Nach der Migration

- **Eigentum stichprobenartig prüfen**: Bestätigen Sie, dass das Zielkonto kritische Dateien besitzt (insbesondere Docs/Sheets) und dass Mitarbeitende weiterhin Zugriff haben.  
- **Verknüpfungen & Lesezeichen wiederherstellen**: Google-Verknüpfungen werden nicht übertragen; erstellen Sie wichtige Links im neuen Konto neu.  
- **Quelle aufräumen**: Archivieren oder löschen Sie alte Ordner, sobald das Ziel maßgeblich ist, um versehentliche Änderungen zu vermeiden.  
- **Berechtigungen geteilter Ablagen überwachen**: Größere Teams müssen möglicherweise Gruppenmitgliedschaften anpassen, um der neuen Eigentumsstruktur zu entsprechen.

## Fazit — die wichtigsten Punkte

- Googles native Übertragungstools sind hilfreich, aber auf grobe Ansätze beschränkt.  
- RcloneView bietet Ihnen granulare Ordnerauswahl, Vorschauen und geplante Synchronisationen zwischen Google-Drive-Konten – weiterhin vollständig GUI-basiert.  
- Planen Sie um Googles Kontingentgrenzen herum, testen Sie Ihren Umzug zunächst und dokumentieren Sie die Umstellung, damit Kolleginnen und Kollegen wissen, wo sie die aktuellsten Dateien finden.

## FAQs

**Bleiben Dateiversionen und Kommentare bei RcloneView erhalten?**  
Nicht-Google-Dateien (PDFs, Videos, ZIPs) bleiben unverändert. Google Docs/Sheets/Slides behalten den Inhalt, erzeugen beim Kopieren jedoch neue IDs; RcloneView zeigt sie als neue Dateien an, sodass Sie die Freigabe bei Bedarf erneuern können.

**Kann ich Ordner einer geteilten Ablage zwischen Domains verschieben?**  
Google erlaubt es geteilten Ablagen nicht, die Domain direkt zu wechseln. Verwenden Sie RcloneView, um den Inhalt in eine geteilte Ablage der Zieldomain zu kopieren, und wenden Sie die Berechtigungen anschließend erneut an. [Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**Was passiert, wenn ich das Kontingent von 750 GB/Tag erreiche?**  
Übertragungen pausieren mit einem Ratenbegrenzungsfehler. Warten Sie 24 Stunden (oder wechseln Sie zu einem anderen Konto mit verfügbarem Kontingent) und setzen Sie den Job fort. Die RcloneView-Protokolle zeigen, wo die Übertragung gestoppt wurde, damit Sie ohne doppelte Dateien fortfahren können.

**Bereit, kontoübergreifende Übertragungen zu einem weiteren Checklistenpunkt zu machen?**

<CloudSupportGrid />
