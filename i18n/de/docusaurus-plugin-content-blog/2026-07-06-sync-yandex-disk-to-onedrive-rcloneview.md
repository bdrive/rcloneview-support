---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "Yandex Disk mit OneDrive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - steve
description: "Synchronisieren Sie Yandex Disk mit OneDrive über RcloneView und spiegeln Sie Dateien zwischen beiden Anbietern nach Zeitplan – von einer plattformübergreifenden GUI aus."
keywords:
  - yandex disk zu onedrive synchronisieren
  - yandex disk onedrive backup
  - yandex disk zu microsoft onedrive
  - rcloneview yandex disk
  - cloud-zu-cloud-synchronisation
  - yandex disk migration
  - onedrive als backup-ziel
  - cloud-übergreifende dateisynchronisation
tags:
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk mit OneDrive synchronisieren — Cloud-Backup mit RcloneView

> Eine Arbeitskopie in OneDrive zu pflegen, während Yandex Disk die Quelle bleibt, erfordert kein Exportieren und erneutes Hochladen — RcloneView verbindet beide als Remotes und synchronisiert die Ordner direkt, Cloud zu Cloud.

Yandex Disk ist eine gängige primäre Speicherlösung für Nutzer und Teams, die in Russland und benachbarten Märkten arbeiten. Doch Mitarbeiter oder nachgelagerte Tools erwarten Dateien oft stattdessen in OneDrive — für die Office-Integration, die Übergabe an SharePoint oder einfach, weil dort der Rest der Organisation angesiedelt ist. Dateien zwischen beiden zu verschieben bedeutet normalerweise, zunächst alles lokal herunterzuladen und erneut hochzuladen, was die Übertragungszeit verdoppelt und unnötig lokalen Speicherplatz verbraucht. RcloneView verbindet sich im selben Fenster als Remotes sowohl mit Yandex Disk als auch mit OneDrive und überträgt direkt zwischen ihnen, wodurch der lokale Umweg vollständig entfällt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Yandex Disk verbindet sich mit RcloneView über einen OAuth-Browser-Login — ein separater API-Schlüssel oder eine manuelle Token-Eingabe sind nicht erforderlich, derselbe Ablauf wie bei Google Drive oder Dropbox. OneDrive wird auf die gleiche Weise verbunden. Sobald beide authentifiziert sind, öffnen Sie zwei Explorer-Fenster nebeneinander — eines zeigt auf das Yandex Disk-Stammverzeichnis, das andere auf den Ziel-OneDrive-Ordner —, sodass Sie die Ordnerstruktur auf beiden Seiten überprüfen können, bevor Sie einen Übertragungsjob konfigurieren.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneView synchronisiert und vergleicht Ordner auch in der KOSTENLOSEN Lizenz — es ist keine separate kostenpflichtige Stufe erforderlich, nur um Dateien zwischen zwei Cloud-Anbietern zu verschieben, was bei einer einmaligen Migration wichtig ist, wenn Sie sich nicht für eine einzelne Übertragung auf ein Abonnement festlegen möchten.

## Den Synchronisationsjob konfigurieren

In Schritt 1 des Synchronisationsassistenten wird die Übertragung definiert: Wählen Sie den Yandex Disk-Ordner als Quelle, den OneDrive-Ordner als Ziel, und wählen Sie „Nur Ziel ändern“ für eine einseitige Spiegelung, die OneDrive mit Yandex Disk übereinstimmen lässt, ohne das Original zu verändern. Bevor Sie den Job tatsächlich ausführen, nutzen Sie Dry Run, um genau zu sehen, welche Dateien kopiert werden — so lassen sich Namenskonflikte oder unerwartet große Ordner erkennen, bevor überhaupt Daten bewegt werden, was sich lohnt, da die beiden Anbieter Dateimetadaten sehr unterschiedlich melden können.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

Die Filtereinstellungen in Schritt 3 ermöglichen es, Dateitypen auszuschließen, die die Reise nicht antreten müssen — große Mediendateien oder bereits synchronisierte Ordner können mittels maximaler Dateigröße oder benutzerdefinierter Pfadausschlussregeln übersprungen werden, sodass die OneDrive-Kopie auf das beschränkt bleibt, was Mitarbeiter tatsächlich benötigen.

## Die Übertragung überwachen

Sobald der Job läuft, zeigt der Tab „Transferring“ in der unteren Info-Ansicht den Live-Fortschritt: Prozent abgeschlossen, aktuelle Übertragungsgeschwindigkeit und Dateianzahl, sodass Sie bestätigen können, dass ein großes Yandex Disk-Archiv tatsächlich übertragen wird und nicht stillsteht. Nach Abschluss des Jobs verzeichnet der Job-Verlauf die gesamte übertragene Größe, die Dauer und den Abschlussstatus — ein Nachweis, auf den Sie sich später berufen können, falls ein Mitarbeiter fragt, ob ein bestimmter Dateisatz erfolgreich übertragen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie sowohl Yandex Disk als auch OneDrive per OAuth-Login als Remotes.
3. Konfigurieren Sie einen einseitigen Synchronisationsjob von Yandex Disk zu OneDrive und führen Sie zuerst Dry Run aus.
4. Führen Sie die Synchronisation aus und prüfen Sie anschließend den Job-Verlauf, um zu bestätigen, dass die Übertragung wie erwartet abgeschlossen wurde.

Cloud-übergreifende Backups sollten keinen Umweg über den lokalen Speicher erfordern — da beide Anbieter live im selben Fenster verfügbar sind, gelangen die Dateien einfach dorthin, wo sie hin müssen.

---

**Verwandte Anleitungen:**

- [Yandex Disk-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [OneDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Yandex Disk mit RcloneView zu Dropbox migrieren](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
