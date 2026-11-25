---
slug: migrate-box-to-proton-drive-rcloneview
title: "Von Box zu Proton Drive migrieren — Dateien mit RcloneView übertragen"
authors:
  - casey
description: "Verschieben Sie Dateien mit RcloneView von Box zu Proton Drive. Verbinden Sie beide Clouds, prüfen Sie vorab mit Dry Run, kopieren Sie Ordner und verifizieren Sie die Migration mit Folder Compare."
keywords:
  - von box zu proton drive migrieren
  - box zu proton drive übertragung
  - dateien von box zu proton drive verschieben
  - box migrationstool
  - proton drive migration
  - cloud-zu-cloud-migration
  - migration verschlüsselter cloud-speicher
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Von Box zu Proton Drive migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre Box-Ordner in den Ende-zu-Ende-verschlüsselten Speicher von Proton Drive, ohne zuerst alles auf Ihren Laptop herunterzuladen.

Teams und Freiberufler starten oft wegen der Kollaborationsfunktionen mit Box und verlagern sensible Archive später wegen des Datenschutzfokus zu Proton Drive. Von Hand bedeutet das, Gigabytes aus Box herunterzuladen und über einen Browser erneut hochzuladen. RcloneView verbindet beide Dienste in einem Fenster, sodass Sie Ordner direkt kopieren, das Ergebnis prüfen und einen wiederholbaren Job für später hinzugefügte Dateien behalten können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Proton Drive verbinden

Öffnen Sie **Remote tab > New Remote** und fügen Sie zuerst Box hinzu. Box verwendet OAuth, daher öffnet sich ein Browserfenster, in dem Sie sich anmelden und den Zugriff genehmigen – keine API-Schlüssel zum Kopieren. Wenn Ihre Organisation Box for Business nutzt, setzen Sie in den Remote-Einstellungen `box_sub_type = enterprise`, damit RcloneView Ihre Enterprise-Ordner sieht.

Fügen Sie anschließend Proton Drive mit Ihrer Proton-E-Mail-Adresse und Ihrem Passwort hinzu, plus einem 2FA-Code, falls Ihr Konto 2FA aktiviert hat. Die Unterstützung von Proton Drive erfordert rclone v1.69 oder neuer; das in RcloneView enthaltene eingebettete rclone erfüllt diese Anforderung, und die Fußzeile zeigt die verwendete Version an.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Box- und Proton-Drive-Remotes in RcloneView" class="img-large img-center" />

## Die Übertragung planen

Öffnen Sie Box im linken Explorer-Panel und Proton Drive im rechten. Verwenden Sie **Get Size** für Ihre Box-Ordner der obersten Ebene, um zu sehen, wie viele Daten Sie verschieben, und legen Sie in Proton Drive eine Zielordnerstruktur an, die der Struktur entspricht, die Sie behalten möchten.

Box Notes und andere Box-eigene Dokumente sind keine regulären Dateien. In den **Filtering Settings** des Synchronisationsassistenten hilft Ihnen der vordefinierte Filter **Box Docs**, sie bewusst zu behandeln, statt sie erst mitten in der Übertragung zu entdecken. Exportieren Sie vor der Migration innerhalb von Box alles, was Sie aus diesen Formaten benötigen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box und Proton Drive nebeneinander für eine Cloud-zu-Cloud-Übertragung in RcloneView" class="img-large img-center" />

## Die Migration ausführen

Bei wenigen Ordnern ziehen Sie diese vom Box-Panel in das Proton-Drive-Panel – Ziehen zwischen verschiedenen Remotes kopiert die Daten. Für eine vollständige Migration erstellen Sie einen **Sync**-Job mit Box als Quelle und Proton Drive als Ziel. Proton Drive verschlüsselt Dateien clientseitig, daher ist eine moderate Parallelität ein sinnvoller Ausgangspunkt; bei Fehlern können Sie die Anzahl der Dateiübertragungen in den Advanced Settings senken.

Klicken Sie immer zuerst auf **Dry Run**. Er listet auf, was kopiert und was gelöscht würde, und schützt so vorhandene Proton-Drive-Inhalte vor einer versehentlichen Spiegelung. Führen Sie dann den Job aus und verfolgen Sie Fortschritt, Geschwindigkeit und Dateianzahl im Tab **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung der Übertragung von Box zu Proton Drive im Transferring-Tab von RcloneView" class="img-large img-center" />

## Vor dem Kündigen von Box verifizieren

Wenn der Job abgeschlossen ist, öffnen Sie **Compare** mit dem Box-Ordner auf der einen und dem Proton-Drive-Ordner auf der anderen Seite. Nur links vorhandene Dateien zeigen alles, was nicht übertragen wurde; mit Copy right füllen Sie die Lücken. Job History protokolliert jeden Lauf mit Status, Größe und Dateianzahl für Ihre Unterlagen.

RcloneView bindet 90+ Anbieter aus einem Fenster unter Windows, macOS und Linux ein und synchronisiert sie, sodass dieselbe Einrichtung auch für Ihren nächsten Umzug funktioniert.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History bestätigt eine abgeschlossene Migration von Box zu Proton Drive" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Box per Browser-Anmeldung und Proton Drive mit E-Mail, Passwort und optionalem 2FA hinzu.
3. Erstellen Sie einen Sync-Job von Box zu Proton Drive und prüfen Sie ihn mit Dry Run.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit Folder Compare, bevor Sie Ihr Box-Konto schließen.

Eine sorgfältige, verifizierte Migration lässt Sie mit der Gewissheit in verschlüsselten Speicher umziehen, dass nichts zurückgeblieben ist.

---

**Verwandte Anleitungen:**

- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Proton Drive verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Mit RcloneView von Dropbox zu Proton Drive migrieren](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
