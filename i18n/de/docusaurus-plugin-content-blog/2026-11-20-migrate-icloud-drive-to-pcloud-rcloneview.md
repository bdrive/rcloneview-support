---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "iCloud Drive zu pCloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Verschieben Sie iCloud-Drive-Dateien mit RcloneView zu pCloud: beide Remotes verbinden, mit Dry Run prüfen, einen Cloud-zu-Cloud-Sync-Job ausführen und mit Folder Compare verifizieren."
keywords:
  - iCloud Drive zu pCloud
  - iCloud Drive zu pCloud migrieren
  - Übertragung von iCloud zu pCloud
  - Dateien aus iCloud Drive verschieben
  - pCloud Migrationstool
  - iCloud-Drive-Alternative für Windows und Linux
  - Cloud-zu-Cloud-Migration mit GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive zu pCloud migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre iCloud-Drive-Bibliothek zu pCloud, ohne zwischen Finder-Fenstern zu jonglieren oder mit halb fertigen Browser-Uploads zu kämpfen.

iCloud Drive ist praktisch, solange alle Ihre Geräte von Apple stammen. Sobald ein Windows-Laptop oder eine Linux-Workstation hinzukommt, suchen viele Nutzer eine Cloud, die sich auf jeder Plattform gleich verhält, und pCloud ist ein häufiges Ziel. RcloneView verbindet beide Dienste in einem Fenster, kopiert die Daten mit einem wiederholbaren Sync-Job und lässt Sie das Ergebnis überprüfen, bevor Sie etwas kündigen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive und pCloud als Remotes verbinden

Öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**. Wählen Sie **iCloud Drive**, geben Sie die Zugangsdaten Ihres Apple-Accounts ein und bestätigen Sie die Verifizierungsanfrage, die Apple an Ihre Geräte sendet. Das iCloud-Drive-Backend von rclone funktioniert nicht mit dem erweiterten Datenschutz (Advanced Data Protection), daher muss diese Einstellung in Ihrem Apple-Account deaktiviert sein. Die Unterstützung für iCloud Drive erfordert rclone v1.69 oder neuer; das in RcloneView enthaltene Embedded Rclone erfüllt diese Anforderung, sodass Sie nichts zusätzlich installieren müssen.

Fügen Sie als Nächstes **pCloud** hinzu. pCloud nutzt OAuth: Ein Browserfenster öffnet sich, Sie melden sich an, und das Remote wird automatisch gespeichert. API-Schlüssel sind nicht nötig.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

Wenn beide Remotes gespeichert sind, öffnen Sie iCloud Drive im linken Explorer-Bereich und pCloud im rechten. Klicken Sie mit der rechten Maustaste auf die iCloud-Ordner, die Sie verschieben möchten, und verwenden Sie **Get Size**, um vor dem Start die Datenmenge zu sehen.

## Die Migration mit Dry Run prüfen

Erstellen Sie im Tab **Home** einen Sync-Job. Legen Sie den iCloud-Drive-Ordner als Quelle und einen neuen pCloud-Ordner wie `/From-iCloud` als Ziel fest. Behalten Sie die Einweg-Richtung („Modifying destination only“) bei, damit iCloud Drive nie verändert wird.

Klicken Sie vor dem Ausführen auf **Dry Run**. RcloneView listet jede Datei auf, die kopiert würde, und alles, was am Ziel gelöscht würde, ohne ein einziges Byte zu bewegen. Jetzt ist der richtige Moment, Überraschungen zu entdecken: Mac-Bundle-Ordner, `.DS_Store`-Dateien oder einen vergessenen Ordner mit alten Handy-Backups. Fügen Sie in Step 3 benutzerdefinierte Filter hinzu, um alles auszuschließen, was Sie nicht mitnehmen möchten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

Beachten Sie, dass dies keine serverseitige Kopie zwischen Apple und pCloud ist: Die Daten fließen über den Rechner, auf dem RcloneView läuft. Eine kabelgebundene Verbindung und ein Computer, der nicht in den Ruhezustand wechselt, helfen daher, eine große Migration in einem Durchgang abzuschließen.

## Ausführen, überwachen und überprüfen

Starten Sie den Job und verfolgen Sie im Tab **Transferring** Fortschritt, Dateianzahl und aktuelle Geschwindigkeit. Bricht die Verbindung ab, führen Sie denselben Job erneut aus. Die Synchronisation überträgt nur fehlende oder abweichende Dateien, sodass bereits übertragene Dateien übersprungen werden.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

Wenn der Job abgeschlossen ist, öffnen Sie **Compare** mit iCloud Drive links und pCloud rechts. Aktivieren Sie „Show left-only files“ und „Show different files“. Ein leeres Ergebnis bedeutet, dass die Migration vollständig ist. Die **Job History** protokolliert jeden Durchlauf mit Status, Größe und Dateianzahl.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## Erste Schritte

RcloneView läuft unter Windows, macOS und Linux, sodass Sie die neue pCloud-Bibliothek nach dem Umzug von jedem Ihrer Computer aus verwalten können.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie iCloud Drive (Anmeldung mit Apple-Account) und pCloud (Browser-OAuth) als Remotes hinzu.
3. Erstellen Sie einen Einweg-Sync-Job von iCloud Drive zu einem pCloud-Ordner und prüfen Sie ihn mit **Dry Run**.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit **Compare**, bevor Sie die iCloud-Kopie aufgeben.

Eine überprüfte, wiederholbare Migration bedeutet, dass Sie die Cloud wechseln können, ohne sich zu fragen, ob Dateien zurückgeblieben sind.

---

**Verwandte Anleitungen:**

- [iCloud Drive zu Google Drive migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [pCloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [iCloud-Drive-Synchronisationsfehler beheben — Lösungen mit RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
