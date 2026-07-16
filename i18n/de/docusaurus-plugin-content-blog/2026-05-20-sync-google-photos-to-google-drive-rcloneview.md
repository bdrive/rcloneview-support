---
slug: sync-google-photos-to-google-drive-rcloneview
title: "Google Fotos mit Google Drive synchronisieren — Organisieren und sichern Sie Ihre Fotobibliothek mit RcloneView"
authors:
  - kai
description: "Erfahren Sie, wie Sie Google Fotos automatisch mit Google Drive synchronisieren können – mit RcloneView. Übertragen, organisieren und sichern Sie Ihre gesamte Fotobibliothek über Cloud-Konten hinweg."
keywords:
  - Google Fotos mit Google Drive synchronisieren
  - Google Fotos mit RcloneView auf Google Drive sichern
  - Übertragung von Google Fotos zu Google Drive
  - RcloneView Google Fotos Synchronisation
  - Backup der Cloud-Fotobibliothek
  - automatisches Google Fotos Backup
  - Foto-Dateiverwaltung in der Cloud
  - Google Fotos Cloud-Synchronisation
  - Fotos zwischen Google-Diensten übertragen
  - Werkzeug zur Cloud-Fotoorganisation
tags:
  - RcloneView
  - google-photos
  - google-drive
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Fotos mit Google Drive synchronisieren — Organisieren und sichern Sie Ihre Fotobibliothek mit RcloneView

> Google Fotos und Google Drive sind in rclone separate Cloud-Remotes – mit RcloneView können Sie Ihre gesamte Fotobibliothek zwischen beiden mit wenigen Klicks synchronisieren und die Ausführung automatisch planen.

Viele Fotografen und Teams nutzen Google Fotos als primäres Werkzeug zum Erfassen und Organisieren, verlassen sich aber für strukturierte Dateifreigabe und Zusammenarbeit auf Google Drive. Das Problem: Dies sind zwei unterschiedliche Cloud-Dienste in rclone, und Inhalte fließen nicht automatisch zwischen ihnen. Ein Hochzeitsfotograf, der Zehntausende bearbeitete Bilder in Google Fotos verwaltet, benötigt diese Dateien möglicherweise in einem strukturierten Google-Drive-Ordner für Kundenlieferungen und die langfristige Archivierung. RcloneView verbindet beide Dienste in derselben Oberfläche und macht es einfach, Fotos zwischen ihnen zu übertragen, zu synchronisieren und die Migration zu planen – ganz ohne Arbeit auf der Kommandozeile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Fotos und Google Drive in RcloneView verbinden

Sowohl Google Fotos als auch Google Drive verwenden browserbasierte OAuth-Authentifizierung. Öffnen Sie in RcloneView den Reiter Remote und klicken Sie auf New Remote, wählen Sie dann Google Photos aus und schließen Sie die Anmeldung im Browser ab. Wiederholen Sie den Vorgang, um Google Drive als zweites Remote hinzuzufügen. Innerhalb weniger Minuten erscheinen beide Konten als separate Bereiche im zweigeteilten Datei-Explorer.

Da beide Remotes nebeneinander sichtbar sind, können Sie Ihre Google-Fotos-Bibliothek und Ihre Google-Drive-Ordnerstruktur im selben Fenster parallel durchsuchen. Diese Parallelansicht erleichtert es, zu erkennen, welche Fotoalben oder Zeiträume noch nicht übertragen wurden, und einzelne Ordner für schnelle einmalige Kopien per Drag-and-Drop hinüberzuziehen. Das Bestätigungs-Popup beim Drag-and-Drop (in den Einstellungen umschaltbar) verhindert versehentliche Verschiebungen bei der Arbeit mit großen Bibliotheken.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## Einen Sync-Job zur Übertragung Ihrer Fotobibliothek einrichten

Für Massenübertragungen verwenden Sie den Job Manager, um einen dedizierten Sync-Job zu erstellen. Klicken Sie im Reiter Home auf die Schaltfläche Sync, wählen Sie Ihren Google-Fotos-Ordner als Quelle aus und wählen Sie den Zielordner in Google Drive als Ziel. Der 4-stufige Assistent ermöglicht die Konfiguration paralleler Übertragungsströme, die Aktivierung der Prüfsummenverifizierung zur Erkennung beschädigter Dateien während der Übertragung sowie die Anwendung von Dateigrößen- oder Altersfiltern, wenn Sie Videos ausschließen oder nur Fotos aus einem bestimmten Zeitraum übernehmen möchten.

Nutzen Sie vor der vollständigen Übertragung die Dry-Run-Funktion, um genau zu sehen, welche Dateien kopiert werden – unverzichtbar beim Synchronisieren großer Archive, wenn Sie vermeiden möchten, versehentlich einen bereits organisierten Drive-Ordner mit Duplikaten zu überschreiben. Der Dry Run zeigt eine vollständige Liste der geplanten Vorgänge, ohne tatsächliche Änderungen vorzunehmen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

Der Reiter Transferring am unteren Bildschirmrand bietet eine Live-Übertragungsüberwachung – Fortschritt in Prozent, aktuelle Übertragungsgeschwindigkeit und Dateianzahl –, sodass Sie eine große Fotomigration verfolgen können, ohne raten zu müssen, wie viel noch übrig ist.

## Automatische Foto-Synchronisation planen (PLUS-Lizenz)

Für Fotografen oder Teams, die kontinuierlich zu Google Fotos hochladen, reicht eine einmalige Übertragung nicht aus. Mit einer PLUS-Lizenz können Sie wiederkehrende Sync-Jobs mit einer crontab-ähnlichen Zeitplanung einrichten. Konfigurieren Sie einen nächtlichen Job, der neu hinzugefügte Google Fotos in einen entsprechenden Google-Drive-Ordner überträgt, sodass beide Konten ohne manuellen Eingriff aktuell bleiben. Der Scheduler unterstützt feingranulare Intervalle: Ausführung nach Minute, Stunde, Wochentag, Tag des Monats oder Monat.

Job History zeichnet jede Ausführung auf – wann sie lief, wie viele Dateien übertragen wurden, die Gesamtdatenmenge, die Geschwindigkeit und ob sie erfolgreich abgeschlossen wurde oder fehlgeschlagen ist. Falls ein Netzwerkproblem eine Sitzung unterbricht, versucht RcloneView es automatisch erneut (standardmäßig 3 Versuche) und protokolliert das Ergebnis, damit Sie es später überprüfen können.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Google Fotos über Remote-Reiter > New Remote > Google Photos hinzu und authentifizieren Sie sich über den Browser.
3. Fügen Sie Google Drive auf die gleiche Weise als zweites Remote hinzu.
4. Erstellen Sie im Job Manager einen Sync-Job, wählen Sie Google Fotos als Quelle und einen Google-Drive-Ordner als Ziel, führen Sie zunächst einen Dry Run aus und starten Sie dann die vollständige Übertragung.

Die Synchronisation Ihrer Google-Fotos-Bibliothek mit Google Drive lässt sich mit RcloneView in wenigen Minuten einrichten und bietet Ihnen strukturierten Dateizugriff sowie eine zuverlässige Sicherungskopie Ihrer gesamten Fotosammlung.

---

**Verwandte Anleitungen:**

- [Google-Fotos-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Google-Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google Fotos auf externer Festplatte und NAS mit RcloneView sichern](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
