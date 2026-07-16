---
slug: manage-google-drive-shared-with-me-rcloneview
title: "Google Drive „Für mich freigegeben“ verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - alex
description: "Durchsuchen, synchronisieren und sichern Sie Google Drive „Für mich freigegeben“-Ordner mit der plattformübergreifenden GUI von RcloneView, ohne den Überblick über freigegebene Inhalte zu verlieren."
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive „Für mich freigegeben“ verwalten — Dateien mit RcloneView synchronisieren und sichern

> Dateien, die andere mit Ihnen teilen, befinden sich in einem eigenen Bereich, getrennt von Ihrem eigenen Drive — mit RcloneView können Sie diese freigegebenen Inhalte genauso einfach durchsuchen, sichern und synchronisieren wie Ihre eigenen Dateien.

Der Bereich „Für mich freigegeben" von Google Drive enthält jede Datei und jeden Ordner, den Kollegen, Kunden oder Mitarbeiter mit Ihrem Konto geteilt haben, ist aber standardmäßig nicht Teil Ihrer regulären Drive-Ordnerstruktur. Diese Trennung führt leicht dazu, dass freigegebene Inhalte aus dem Blick geraten — besonders wenn ein Kundenordner lokal archiviert oder zur Sicherung in eine andere Cloud gespiegelt werden muss. RcloneView löst dieses Problem, indem es sich mit dem Bereich „Für mich freigegeben" als eigenständigem, durchsuchbarem Remote verbindet, sodass Sie freigegebene Inhalte wie jeden anderen Ordner in Ihrem Workflow behandeln können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verbindung zu „Für mich freigegeben"-Inhalten herstellen

Standard-Google-Drive-Remotes zeigen nur Dateien, die Ihnen gehören oder die Sie in Ihrer eigenen Ordnerstruktur abgelegt haben. Um auf mit Ihnen geteilte Elemente zuzugreifen, stellt die Remote-Konfiguration von RcloneView die Einstellung `shared_with_me` für Google-Drive-Remotes bereit — wird sie aktiviert, richtet sich die Verbindung auf die Ansicht „Für mich freigegeben" statt auf das Stammverzeichnis Ihres persönlichen Drive. Das bedeutet, Sie brauchen kein zweites Google-Konto oder einen Browser-Umweg, um an den freigegebenen Ordner eines Kunden zu gelangen — Sie richten es einmal im Assistenten „Neues Remote" ein, und die freigegebene Struktur erscheint im Explorer-Panel wie jede andere Verbindung.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

Nach dem Verbinden verhält sich das „Für mich freigegeben"-Remote wie eine normale Dateiquelle: Ordnerbaum-Navigation, Vorschaubilder für Bilder und das übliche Rechtsklick-Menü für Kopieren, Herunterladen und Öffentlichen Link abrufen funktionieren alle genauso. RcloneView synchronisiert und vergleicht Ordner auch — bereits in der KOSTENLOSEN Lizenz —, sodass freigegebene Inhalte nicht auf reines Durchsuchen beschränkt sind.

## Freigegebene Ordner sichern, bevor sie verschwinden

Freigegebene Ordner können aus Ihrer Ansicht verschwinden, wenn der Besitzer den Zugriff widerruft oder die Quelldatei löscht — ein reales Risiko, wenn Sie für Projektergebnisse auf das Drive einer anderen Person angewiesen sind. Wenn Sie einen einseitigen Synchronisationsjob vom „Für mich freigegeben"-Remote zu Ihrem eigenen Google Drive, einer lokalen Festplatte oder einem Objektspeicher-Bucket ausführen, erstellen Sie eine unabhängige Kopie, die Sie selbst kontrollieren. Konfigurieren Sie den Job mit der Richtung „Nur Ziel ändern", damit das Backup-Ziel stets den aktuellen Zustand des freigegebenen Ordners widerspiegelt, ohne das Original zu verändern.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

Für wiederkehrende Kundenbeziehungen ermöglichen es Filtereinstellungen, Dateitypen auszuschließen, die nicht archiviert werden müssen — Google Docs oder bestimmte Dateiendungen können mit den vordefinierten oder benutzerdefinierten Filterregeln in Schritt 3 des Synchronisationsassistenten übersprungen werden, sodass sich Backups auf die tatsächlich relevanten Dateien konzentrieren.

## Laufenden Schutz planen

Ein freigegebener Ordner, den ein Kunde wöchentlich aktualisiert, benötigt mehr als eine einmalige Kopie. Nutzer der PLUS-Lizenz können dem Synchronisationsjob einen Zeitplan im Crontab-Stil hinzufügen, sodass die Inhalte von „Für mich freigegeben" automatisch und wiederkehrend gesichert werden, ohne den Job manuell erneut auszuführen. Der Jobverlauf protokolliert dann Status, übertragene Größe und Dauer jedes Laufs und liefert so einen klaren Nachweis darüber, wann die freigegebenen Inhalte zuletzt erfasst wurden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ein neues Google-Drive-Remote erstellen und während der Einrichtung die Option `shared_with_me` aktivieren.
3. Die Struktur von „Für mich freigegeben" im Explorer-Panel durchsuchen, um zu bestätigen, dass die erwarteten Ordner erscheinen.
4. Einen einseitigen Synchronisationsjob zu einem Backup-Ziel einrichten und, bei PLUS-Lizenz, einen Zeitplan festlegen.

Freigegebene Inhalte sollten kein blinder Fleck in Ihrer Backup-Strategie sein — indem Sie sie in RcloneView einbinden, stellen Sie sie unter denselben Schutz wie alles andere, das Sie verwalten.

---

**Verwandte Anleitungen:**

- [Google Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google Shared Drive-Berechtigungsfehler beheben — So lösen Sie das Problem mit RcloneView](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [Zwei Google Drive-Konten mit RcloneView synchronisieren](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
